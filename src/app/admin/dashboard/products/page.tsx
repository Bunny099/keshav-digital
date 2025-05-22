import AddProduct from "@/app/components/admin/Addproduct";

export default function AdminProducts() {
  return (
    <section className="min-h-screen w-full p-4 space-y-6 overflow-x-auto">
      <div className="bg-white d p-4 rounded-lg ">
        <AddProduct />
      </div>
    </section>
  );
}
