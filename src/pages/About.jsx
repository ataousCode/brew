import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const paragraphs = [
    "Located in the heart of Sichuan Province, our tea plantations have been cultivating the finest tea leaves for generations. The unique climate and rich soil of the region produce teas with exceptional flavor and quality.",
    "We are proud to bridge continents, bringing the ancient tradition of Chinese tea culture to African markets. Our commitment to quality and authentic taste has made us a trusted partner for tea lovers across Africa.",
    "Every leaf is hand-picked and processed using traditional methods passed down through centuries, ensuring that each cup delivers the pure, authentic taste of Sichuan."
  ];

  return (
    <PageContainer>
      <SectionTitle>About Sichuan Tea</SectionTitle>
      <div className="space-y-6 text-lg text-gray-700">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </PageContainer>
  );
};

export default About;