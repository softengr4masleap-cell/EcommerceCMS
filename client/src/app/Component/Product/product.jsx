export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Smart Headphones",
      description: "Wireless, noise-cancelling, 30h battery, Bluetooth 5.0.",
      price: 129.99,
      oldPrice: 159.99,
      rating: 4.7,
      reviews: 1245,
      image:
        "https://images.unsplash.com/photo-1513708927688-890a1e2b6b33?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Fitness Smartwatch",
      description: "Heart rate, sleep tracking, waterproof, 7-day battery.",
      price: 89.99,
      oldPrice: 109.99,
      rating: 4.5,
      reviews: 980,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      description: "Portable, deep bass, 12h playtime, Bluetooth 5.1.",
      price: 59.99,
      oldPrice: 79.99,
      rating: 4.6,
      reviews: 760,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Wireless Speaker",
      description: "Portable, deep bass, 12h playtime, Bluetooth 5.1.",
      price: 59.99,
      oldPrice: 79.99,
      rating: 4.6,
      reviews: 760,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Wireless Speaker",
      description: "Portable, deep bass, 12h playtime, Bluetooth 5.1.",
      price: 59.99,
      oldPrice: 79.99,
      rating: 4.6,
      reviews: 760,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              className="w-full h-48 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <br />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-blue-600">TK{product.price}</span>
                <span className="text-xs line-through text-gray-400">TK{product.oldPrice}</span>
              </div>
               <br />
              <div className="mt-auto flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}