import GetInTouch from '../components/contact/GetInTouch';
import PageHero from '../components/common/PageHero';

const Contact = () => {
  return (
    <>
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with us - we'd love to hear from you"
      />
      <GetInTouch />
    </>
  );
};

export default Contact;