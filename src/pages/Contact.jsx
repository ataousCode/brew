import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const contactInfo = [
    { 
      title: 'Location', 
      content: 'Sichuan Province, China' 
    },
    { 
      title: 'Export Markets', 
      content: 'Serving African Countries' 
    },
    { 
      title: 'Business Inquiries', 
      content: 'For wholesale and export inquiries, please reach out to discuss partnership opportunities.' 
    }
  ];

  return (
    <PageContainer>
      <SectionTitle>Contact Us</SectionTitle>
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        {contactInfo.map((info, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {info.title}
            </h3>
            <p className="text-gray-700">{info.content}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Contact;