import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // fetch images
    const heroImages = [
        '/img1.jpeg',
        '/img2.jpeg',
        '/img3.jpeg',
        '/img4.jpeg'
    ];

    // rotate images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return (prevIndex + 1) % heroImages.length;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            {/* Background Images - using inline styles for opacity to ensure it works */}
            {heroImages.map((imageSrc, index) => (
                <img
                    key={index}
                    src={imageSrc}
                    alt={`Hero slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                    onError={(e) => {
                        console.error(`Failed to load image ${index + 1}:`, imageSrc, e);
                    }}
                    onLoad={() => {
                        console.log(`Image ${index + 1} loaded:`, imageSrc);
                        if (index === currentImageIndex) {
                            console.log(`Image ${index + 1} is currently visible`);
                        }
                    }}
                />
            ))}

            {/* Dark Overlay */}
            <div 
                className="absolute inset-0" 
                style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 2
                }}
            />

            {/* Content */}
            <div 
                className="relative h-full flex items-center justify-center px-4" 
                style={{ zIndex: 3 }}
            >
                <div className="text-center text-white max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        Premium Sichuan Tea
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                        From the Mountains of China to the Heart of Africa
                    </p>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Discover authentic Chinese tea culture with our carefully selected premium teas,
                        exported directly from Sichuan Province to African markets.
                    </p>
                    {/* <Link
                        to="/products"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
                    >
                        Explore Our Collection
                    </Link> */}
                    <Button to='/products' variant='primary' size='lg'>Explore Our Collection</Button>
                </div>
            </div>

            {/* Navigation Dots */}
            <div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3" 
                style={{ zIndex: 3 }}
            >
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className="transition-all rounded-full"
                        style={{
                            width: index === currentImageIndex ? '32px' : '12px',
                            height: '12px',
                            backgroundColor: index === currentImageIndex 
                                ? 'rgb(251, 191, 36)' 
                                : 'rgba(255, 255, 255, 0.5)',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
