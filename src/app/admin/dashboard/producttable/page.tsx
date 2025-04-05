import ProductTable from "@/app/components/admin/producttable";
export default function ProdTable(){
    return <section className="min-h-screen w-full p-4 space-y-6 overflow-x-auto">
  <div className="bg-white  p-4 rounded-lg shadow">
        <ProductTable />
      </div>
    </section>
}