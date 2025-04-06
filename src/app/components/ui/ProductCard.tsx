"use client";
import { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  images: string[];
  description: string;
  price: string;
}

const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products!");
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        const initialIndex: { [key: number]: number } = {};
        data.products.forEach(
          (product: Product) => (initialIndex[product.id] = 0)
        );
        setCurrentImageIndex(initialIndex);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleNextImage = (productId: number, total: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: (prev[productId] + 1) % total,
    }));
  };

  const handlePrevImage = (productId: number, total: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: (prev[productId] - 1 + total) % total,
    }));
  };

  if (loading) return <p className="p-4">Loading products...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4">
      {products.map((product) => {
        const currentIndex = currentImageIndex[product.id] || 0;
        const totalImages = product.images.length;

        return (
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.03] flex flex-col"
            key={product.id}
          >
            <div className="h-60 w-full bg-white flex justify-center items-center">
              {totalImages > 0 ? (
                <img
                  src={product.images[currentIndex]}
                  alt={product.title}
                   className="object-contain w-full h-full transition-all duration-300 p-2"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center text-gray-800">
                  No Image
                </div>
              )}
            </div>
            <div className="p-4 flex-grow">
              <h2 className="font-semibold text-blue-800 text-lg">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                {product.description}
              </p>
              <p className="text-green-600 font-bold mt-2">{product.price}</p>
            </div>

            {totalImages > 1 && (
              <div className="flex justify-between items-center px-4 py-2 border-t ">
                <button
                  onClick={() => handlePrevImage(product.id, totalImages)}
                  className="px-3 py-1 rounded bg-gray-300 text-black text-sm hover:bg-gray-400 hover:cursor-pointer"
                >
                  Prev
                </button>

                <span className="text-sm text-gray-500">
                  {currentIndex + 1} / {totalImages}
                </span>

                <button
                  onClick={() => handleNextImage(product.id, totalImages)}
                  className="py-1 px-3 rounded backdrop-blur-sm bg-blue-600 text-white text-sm hover:bg-blue-700 hover:cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
