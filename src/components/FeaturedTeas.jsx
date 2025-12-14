import Button from "./Button";
import TeaCard from "./TeaCard";
import { FEATURED_PRODUCTS } from "../data/products";

const FeaturedTeas = () => {
    // Use centralized featured products data
    const featuredTeas = FEATURED_PRODUCTS;
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12 flex-wrap gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
                            Featured Teas
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Handpicked from the finest gardens in Sichuan Province.
                        </p>
                    </div>
                    {/* View All Button */}
                    <Button to='/products' variant='secondary'>View Our Collection</Button>
                </div>

                {/* Tea Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTeas.map((tea) => (
                        <TeaCard
                            key={tea.id}
                            image={tea.image}
                            tags={tea.tags}
                            title={tea.title}
                            description={tea.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedTeas;