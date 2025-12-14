import { useState, useMemo } from 'react';
import SearchBar from '../components/products/SearchBar';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductsGrid from '../components/products/ProductsGrid';
import PageHero from '../components/common/PageHero';
import { ALL_PRODUCTS } from '../data/products';
import { TEA_CATEGORIES } from '../utils/constants';

const Products = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Use centralized products data
    const allProducts = ALL_PRODUCTS;

    const categories = TEA_CATEGORIES;

    // Filter and search products
    const filteredProducts = useMemo(() => {
        return allProducts.filter((product) => {
            // Category filter
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            
            // Search filter
            const matchesSearch = searchQuery === '' || 
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <PageHero 
                title="Our Tea Collection"
                subtitle="Discover premium teas from Sichuan Province"
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Search and Filter Section */}
                <div className="mb-8 space-y-6">
                    {/* Search Bar */}
                    <SearchBar 
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        placeholder="Search by name, description, or tags..."
                    />

                    {/* Category Filter */}
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />

                    {/* Results Count */}
                    <div className="text-gray-600">
                        Showing <span className="font-semibold text-green-700">{filteredProducts.length}</span> of <span className="font-semibold">{allProducts.length}</span> products
                    </div>
                </div>

                {/* Products Grid */}
                <ProductsGrid products={filteredProducts} />
            </div>
        </div>
    );
};

export default Products;
