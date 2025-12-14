const ExperienceSection = () => {
    const experienceData = {
      title: 'Experience Authentic Chinese Tea',
      description: 'Explore our collection of premium teas sourced directly from Sichuan province.',
      image: '/img4.jpeg'
    };
  
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
                {experienceData.title}
              </h2>
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                {experienceData.description}
              </p>
            </div>
  
            {/* Image */}
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-green-100 h-80">
              {experienceData.image ? (
                <img 
                  src={experienceData.image} 
                  alt="Chinese tea ceremony"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-green-300 text-8xl">
                  🍵
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;