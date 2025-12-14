import Hero from '../components/about/Hero';
import OurExpertTeam from '../components/OurExpertTeam';
import OurMission from '../components/OurMission';
import OurPartners from '../components/OurPartners';
import OurStory from '../components/OurStory';

const About = () => {
    return (
        <>
            <Hero />
            <OurMission showButton={false} showHeaderButton={false} />
            <OurStory showButton={false} />
            <OurPartners />
            <OurExpertTeam />
        </>
    );
};

export default About;