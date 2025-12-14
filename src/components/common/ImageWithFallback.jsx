const ImageWithFallback = ({ 
    src, 
    alt, 
    fallbackEmoji = "🍵", 
    className = "w-full h-full object-cover",
    containerClassName = "",
    onError
}) => {
    const handleError = (e) => {
        e.target.style.display = 'none';
        const fallback = e.target.parentElement.querySelector('.image-fallback');
        if (fallback) {
            fallback.style.display = 'flex';
        }
        if (onError) onError(e);
    };

    return (
        <div className={`relative ${containerClassName}`}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onError={handleError}
                />
            ) : null}
            <div 
                className="image-fallback hidden items-center justify-center text-6xl text-green-300 w-full h-full"
                style={{ display: src ? 'none' : 'flex' }}
            >
                {fallbackEmoji}
            </div>
        </div>
    );
};

export default ImageWithFallback;
