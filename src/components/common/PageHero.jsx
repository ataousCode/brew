const PageHero = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`bg-gradient-to-br from-green-600 via-green-700 to-amber-600 text-white py-20 md:py-24 px-4 relative overflow-hidden ${className}`}>
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/img3.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>
    );
};

export default PageHero;
