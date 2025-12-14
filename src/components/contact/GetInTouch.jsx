import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import ContactInfoCard from './ContactInfoCard';
import InputField from './InputField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import Button from '../Button';

const GetInTouch = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Contact information data (DRY principle)
  const contactInfo = [
    {
      icon: MdEmail,
      title: 'Email',
      content: 'info@brewtea.ma'
    },
    {
      icon: MdPhone,
      title: 'Phone',
      content: '+212 123 456 789'
    },
    {
      icon: MdLocationOn,
      title: 'Address',
      content: '123 Tea Street, Casablanca, Morocco'
    },
    {
      icon: MdAccessTime,
      title: 'Business Hours',
      content: (
        <>
          <p>Monday-Friday: 9AM-6PM</p>
          <p>Saturday: 10AM-4PM</p>
        </>
      )
    }
  ];

  // Subject options
  const subjectOptions = [
    { value: '', label: '✓ Select a subject' },
    { value: 'order', label: 'Order Inquiry' },
    { value: 'product', label: 'Product Question' },
    { value: 'wholesale', label: 'Wholesale Partnership' },
    { value: 'feedback', label: 'Feedback/Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid - submit data
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } else {
      // Form has errors
      setErrors(newErrors);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Get In Touch Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-500">
              <h2 className="text-3xl font-bold text-black mb-8">
                Get In Touch
              </h2>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <ContactInfoCard
                    key={index}
                    icon={<IconComponent className="text-green-600 text-2xl" />}
                    title={info.title}
                  >
                    {info.content}
                  </ContactInfoCard>
                );
              })}
            </div>

            {/* Order Inquiries Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-500">
              <h2 className="text-3xl font-bold text-black mb-4">
                Order Inquiries
              </h2>
              <p className="text-gray-600">
                For bulk orders and wholesale partnerships, please contact our sales team directly.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-500">
            <h2 className="text-3xl font-bold text-black mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit}>
              <InputField
                label="Full Name"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                required
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <SelectField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                options={subjectOptions}
                error={errors.subject}
                required
              />

              <TextAreaField
                label="Message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                rows={5}
              />

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;