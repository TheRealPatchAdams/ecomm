import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

// Mock product data
const mockProducts = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `This is a short description for Product ${i + 1}.`,
  price: (20 + i * 5).toFixed(2),
  imageUrl: `https://via.placeholder.com/300?text=Product+${i + 1}`,
  soldOut: i % 5 === 0,
  category: i % 2 === 0 ? "New Arrivals" : "Best Sellers",
}));

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? mockProducts
      : mockProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h2 className="text-4xl font-bold my-10 text-center text-white">
          Shop Our Products
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          {["All", "New Arrivals", "Best Sellers"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 relative transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative pb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-bold text-gray-900 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">${product.price}</p>

              {/* Category */}
              <p className="text-xs text-gray-400 mt-2">
                Category: {product.category}
              </p>

              {/* Sold Out Badge */}
              {product.soldOut && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  Sold Out
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                disabled={product.soldOut}
                className={`mt-4 py-2 w-full rounded text-white font-bold ${
                  product.soldOut
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {product.soldOut ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            <p>No products available in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
