"use client"
import { useState } from "react";
import axios from "axios";

export default function AddProductForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleAddImage = () => {
    if (imageUrl.trim() !== "") {
      setImages([...images, imageUrl]);
      setImageUrl("");
    }
  };

  const handleRemoveImage = (index:number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const productData = {
        title,
        description,
        price: parseFloat(price) || 0,
        images,
      };

      const response = await axios.post("/api/products", productData);
      setMessage("Product added successfully!");
      setTitle("");
      setDescription("");
      setPrice("");
      setImages([]);
    } catch (error) {
      setMessage("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border border-gray-400 rounded-lg bg-gray-100 text-black shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-black">Add Product</h2>
      {message && <p className="text-center text-lg text-blue-600">{message}</p>}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-500 bg-white text-black p-2 w-full rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-500 bg-white text-black p-2 w-full rounded"
        />
      </div>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-500 h-34 bg-white text-black p-2 w-full mt-3 rounded"
      />
      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border border-gray-500 bg-white text-black p-2 w-full rounded"
        />
        <button
          type="button"
          onClick={handleAddImage}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Add
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {images.map((img, index) => (
          <div key={index} className="flex items-center gap-2 p-2 border border-gray-400 rounded">
            <img src={img} alt="Preview" className="w-16 h-16 object-cover border border-gray-500 rounded" />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Product"}
      </button>
    </form>
  );
}