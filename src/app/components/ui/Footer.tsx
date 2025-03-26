import Icons from "@/app/components/ui/Icons";

export default function Footer() {
  return (
    <div className="bg-blue-950 w-full">
      {/* 📌 Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-12">
        
        {/* ✅ About Section */}
        <div className="text-left">
          <h1 className="text-3xl text-white">Keshav Digital</h1>
          <p className="text-white font-extralight pt-4 pb-4 leading-relaxed">
            At Keshav Digital, we specialize in textile manufacturing, creating
            high-quality clothing using advanced embroidery machines in Surat.
          </p>
          {/* ✅ Social Icons */}
          <div className="flex space-x-4">
            <Icons type="secondary" icon="./icons/instagram.svg" />
            <Icons type="secondary" icon="./icons/whatsapp.svg" />
            <Icons type="secondary" icon="./icons/fb.svg" />
          </div>
        </div>

        {/* ✅ Helpful Links */}
        <div className="text-left">
          <h1 className="text-2xl text-white pb-2 border-b-2 border-blue-900 inline-block">
            Helpful Links
          </h1>
          <ul className="text-white space-y-3 pt-4">
            <li className="font-light hover:text-blue-400 cursor-pointer">Home</li>
            <li className="font-light hover:text-blue-400 cursor-pointer">Gallery</li>
            <li className="font-light hover:text-blue-400 cursor-pointer">Contact</li>
            <li className="font-light hover:text-blue-400 cursor-pointer">Admin Login</li>
          </ul>
        </div>

        {/* ✅ Reach Us - Left-Aligned */}
        <div className="text-left">
          <h1 className="border-b-2 text-white border-blue-900 text-2xl pb-2 inline-block">
            Reach Us
          </h1>
          <div className="space-y-3 pt-4">
            <Icons type="primary" icon="./icons/call.svg" name="9265656565" />
            <Icons type="primary" icon="./icons/email.svg" name="keshavdigital@gmail.com" />
            <Icons type="primary" icon="./icons/location.svg" name="Textile St, Surat, India" />
            <Icons type="primary" icon="./icons/time.svg" name="Mon-Fri: 9:00 AM - 5:00 PM" />
          </div>
        </div>
      </div>

      {/* ✅ Copyright Section */}
      <div className="flex justify-center items-center py-4 border-t border-blue-900">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2025 Keshav Digital, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
