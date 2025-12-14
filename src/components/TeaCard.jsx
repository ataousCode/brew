import Button from "./Button";

const TeaCard = ({ image, tags, title, description }) => {
    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-purple-300 text-6xl">🍵</div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-1 bg-purple-100 text-green-700 rounded-full text-sm font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Button */}
                <Button to="/products" variant="primary" size="sm">
                    View Details
                </Button>
            </div>

        </div>
    );
}

export default TeaCard;