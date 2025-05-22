import InquiryTable from "@/app/components/admin/inqtable";
export default function Inquiries() {
  return (
    <section className="min-h-screen w-full p-4 space-y-6 overflow-x-auto">
      <div className="bg-white  p-4 rounded-lg ">
        <InquiryTable />
      </div>
    </section>
  );
}
