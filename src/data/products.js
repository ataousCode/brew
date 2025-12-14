// Centralized products data
export const ALL_PRODUCTS = [
    // Green Tea
    {
        id: 1,
        title: 'Sichuan Emerald Green',
        description: 'Delicate, fresh flavor with floral notes. Hand-picked young leaves from high-altitude gardens.',
        image: '/img1.jpeg',
        tags: ['Green Tea', 'Premium'],
        category: 'Green Tea'
    },
    {
        id: 2,
        title: 'Dragon Well Green',
        description: 'Classic Chinese green tea with a nutty, sweet flavor and smooth finish.',
        image: '/img2.jpeg',
        tags: ['Green Tea', 'Classic'],
        category: 'Green Tea'
    },
    {
        id: 3,
        title: 'Jasmine Pearl Green',
        description: 'Hand-rolled pearls scented with jasmine flowers. Fragrant and delicate.',
        image: '/img1.jpeg',
        tags: ['Green Tea', 'Floral'],
        category: 'Green Tea'
    },
    // Oolong
    {
        id: 4,
        title: 'Mountain Mist Oolong',
        description: 'Complex flavor profile with honey and orchid notes. Partially oxidized for balanced taste.',
        image: '/img4.jpeg',
        tags: ['Oolong', 'Medium Roast'],
        category: 'Oolong'
    },
    {
        id: 5,
        title: 'Iron Goddess Oolong',
        description: 'Rich, creamy texture with notes of orchid and honey. Traditional processing method.',
        image: '/img3.jpeg',
        tags: ['Oolong', 'Premium'],
        category: 'Oolong'
    },
    {
        id: 6,
        title: 'High Mountain Oolong',
        description: 'Light and floral with a smooth, buttery finish. Grown at high elevations.',
        image: '/img4.jpeg',
        tags: ['Oolong', 'Light'],
        category: 'Oolong'
    },
    // Black Tea
    {
        id: 7,
        title: 'Golden Sichuan Black',
        description: 'Rich, malty flavor with hints of caramel. Perfect for morning brew or with milk.',
        image: '/img3.jpeg',
        tags: ['Black Tea', 'Strong'],
        category: 'Black Tea'
    },
    {
        id: 8,
        title: 'Keemun Black',
        description: 'Smooth and mellow with wine-like notes. One of China\'s most famous black teas.',
        image: '/img1.jpeg',
        tags: ['Black Tea', 'Classic'],
        category: 'Black Tea'
    },
    {
        id: 9,
        title: 'Lapsang Souchong',
        description: 'Smoky and bold with pine wood notes. Unique smoked processing technique.',
        image: '/img2.jpeg',
        tags: ['Black Tea', 'Smoky'],
        category: 'Black Tea'
    },
    // White Tea
    {
        id: 10,
        title: 'Silver Needle White',
        description: 'Delicate and sweet with subtle floral notes. Made from young tea buds only.',
        image: '/img1.jpeg',
        tags: ['White Tea', 'Premium'],
        category: 'White Tea'
    },
    {
        id: 11,
        title: 'White Peony',
        description: 'Mild and refreshing with a light, sweet flavor. Perfect for afternoon tea.',
        image: '/img4.jpeg',
        tags: ['White Tea', 'Light'],
        category: 'White Tea'
    },
    {
        id: 12,
        title: 'Shou Mei White',
        description: 'Fuller body with earthy notes. Made from mature leaves and buds.',
        image: '/img3.jpeg',
        tags: ['White Tea', 'Earthy'],
        category: 'White Tea'
    },
    // Pu-erh
    {
        id: 13,
        title: 'Aged Pu-erh Cake',
        description: 'Deep, earthy flavor with smooth complexity. Aged for 10+ years.',
        image: '/img2.jpeg',
        tags: ['Pu-erh', 'Aged'],
        category: 'Pu-erh'
    },
    {
        id: 14,
        title: 'Raw Pu-erh',
        description: 'Bold and astringent with potential for aging. Traditional processing.',
        image: '/img1.jpeg',
        tags: ['Pu-erh', 'Raw'],
        category: 'Pu-erh'
    },
    {
        id: 15,
        title: 'Ripe Pu-erh',
        description: 'Smooth and mellow with earthy, woody notes. Fermented and ready to drink.',
        image: '/img4.jpeg',
        tags: ['Pu-erh', 'Ripe'],
        category: 'Pu-erh'
    }
];

// Featured products (subset for homepage)
export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => 
    [1, 4, 7].includes(p.id)
);
