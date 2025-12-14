import Button from "../Button";

const Hero = () => {
    return (
        <div className="relative h-[70vh] md:h-[100vh] w-full overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-amber-600">
                {/* Optional background image with overlay */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url('/img3.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4" style={{ zIndex: 3 }}>
                <div className="text-center text-white max-w-5xl">
                    {/* Badge */}
                    <div className="inline-block mb-10">
                        <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm md:text-base border border-white/30">
                            About Sichuan Tea
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
                        Bridging Cultures Through
                        <span className="block text-amber-300 mt-2">Authentic Tea</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                        From the ancient mountains of Sichuan Province to the vibrant markets of Africa, 
                        we bring you the finest Chinese tea with a story in every cup.
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90">
                        Discover our journey of passion, tradition, and excellence in tea cultivation 
                        and distribution.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button to="/products" variant="primary" size="lg">
                            Explore Our Teas
                        </Button>
                        <Button to="/contact" variant="outline" size="lg" className="bg-green/10 border-green/50 text-white hover:bg-green hover:text-green-700">
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" style={{ zIndex: 2 }} />
        </div>
    );
};

export default Hero;
