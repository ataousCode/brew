import TeaCard from "../TeaCard";

const ProductsGrid = ({ products, loading = false }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
                        <div className="h-64 bg-gray-200"></div>
                        <div className="p-6">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
                <TeaCard
                    key={product.id}
                    image={product.image}
                    tags={product.tags}
                    title={product.title}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductsGrid;
