"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      if (response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (productId: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    try {
      setDeletingId(productId);
      await axios.delete("/api/products", { data: { productId } });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product!", error);
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" w-full pr-4  overflow-hidden relative">
      <h1 className="text-3xl font-bold text-white bg-black p-2 rounded-lg text-center shadow-lg">
        Product Table
      </h1>

      <div className="mt-4 bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="h-[545px] overflow-y-auto">
            <table className="w-full border-collapse border border-gray-300">
              {/* Table Header */}
              <thead className="sticky top-0 bg-gray-800 text-white">
                <tr>
                  <th className="p-4 border border-gray-600 text-left">Sr</th>
                  <th className="p-4 border border-gray-600 text-left">
                    Title
                  </th>
                  <th className="p-4 border border-gray-600 text-left">
                    Description
                  </th>
                  <th className="p-4 border border-gray-600 text-left">
                    Image
                  </th>
                  <th className="p-4 border border-gray-600 text-left">
                    Price
                  </th>
                  <th className="p-4 border border-gray-600 text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-gray-50 divide-y divide-gray-300">
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <tr
                      key={product.id}
                      className="border border-gray-300 text-center hover:bg-gray-100 transition-all"
                    >
                      <td className="p-4 font-medium">{index + 1}</td>
                      <td className="p-4 font-medium">{product.title}</td>
                      <td className="p-4 text-gray-700">
                        {product.description}
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          {product.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt="Product"
                              className="w-14 h-14 object-cover rounded-lg shadow-md border border-gray-400"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="p-4 font-bold text-gray-800">
                        {" "}
                        &#8377; {product.price}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:cursor-pointer transition-all"
                          disabled={deletingId === product.id}
                        >
                          {deletingId === product.id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center p-6 text-gray-700 font-medium"
                    >
                      No products available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
