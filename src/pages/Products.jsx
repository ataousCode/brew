import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';

const Products = () => {
  const products = [
    { name: 'Green Tea', desc: 'Fresh and delicate with natural sweetness' },
    { name: 'Jasmine Tea', desc: 'Fragrant floral notes with smooth finish' },
    { name: 'Black Tea', desc: 'Rich and robust with malty undertones' },
    { name: 'Oolong Tea', desc: 'Perfectly balanced between green and black' },
    { name: 'Pu-erh Tea', desc: 'Aged to perfection with earthy complexity' },
    { name: 'White Tea', desc: 'Subtle and refined with delicate flavors' }
  ];

  return (
    <PageContainer>
      <SectionTitle>Our Tea Collection</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((tea, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              {tea.name}
            </h3>
            <p className="text-gray-600">{tea.desc}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Products;