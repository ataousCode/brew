const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-3">
            <button
                onClick={() => onCategoryChange('all')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === 'all'
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300 hover:bg-green-50'
                }`}
            >
                All Teas
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedCategory === category
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
