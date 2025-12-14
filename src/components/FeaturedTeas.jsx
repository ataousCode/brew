import Button from "./Button";
import TeaCard from "./TeaCard";

const FeaturedTeas = () => {
    // define featured simple data
    const featuredTeas = [
        {
            id: 1,
            image: '/img1.jpeg',
            tags: ['Green Tea', 'Premium'],
            title: 'Sichuan Emerald Green',
            description: 'Delicate, fresh flavor with floral notes. Hand-picked young leaves from high-altitude gardens.'
        },
        {
            id: 2,
            image: '/img4.jpeg',
            tags: ['Oolong', 'Medium Roast'],
            title: 'Mountain Mist Oolong',
            description: 'Complex flavor profile with honey and orchid notes. Partially oxidized for balanced taste.'
        },
        {
            id: 3,
            image: '/img3.jpeg',
            tags: ['Black Tea', 'Strong'],
            title: 'Golden Sichuan Black',
            description: 'Rich, malty flavor with hints of caramel. Perfect for morning brew or with milk.'
        }
    ];
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12 flex-wrap gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-lg mb-3">
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