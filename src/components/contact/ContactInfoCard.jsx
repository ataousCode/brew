const ContactInfoCard = ({ icon, title, children }) => {
    return (
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {title}
          </h3>
          <div className="text-gray-600">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfoCard;