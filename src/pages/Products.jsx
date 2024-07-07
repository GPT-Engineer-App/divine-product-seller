const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "/placeholder.svg" },
    { id: 2, name: "Product 2", price: "$20", image: "/placeholder.svg" },
    { id: 3, name: "Product 3", price: "$30", image: "/placeholder.svg" },
    { id: 4, name: "Product 4", price: "$40", image: "/placeholder.svg" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto object-cover w-full h-[200px] mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg mb-4">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;