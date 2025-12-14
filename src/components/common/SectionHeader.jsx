const SectionHeader = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-600 text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
