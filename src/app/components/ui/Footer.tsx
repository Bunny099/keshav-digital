import Icons from "@/app/components/ui/Icons";
import { redirect } from "next/navigation";

export default function Footer() {
  return (
    <div className="bg-blue-950 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-12">
        <div className="text-left">
         <div className="flex items-center gap-2">
         <img src="./icons/logo.jpg" height={35} width={25} className="p-0 m-0 rounded-sm bg-blue-950" />
         <h1 className="text-3xl text-white">Keshav Digital</h1>
         </div>
          
          <p className="text-white font-extralight pt-4 pb-4 leading-relaxed">
            At Keshav Digital, we specialize in textile manufacturing, creating
            high-quality clothing using advanced embroidery machines in Surat.
          </p>

          <div className="flex space-x-4">
            <Icons type="secondary" icon="./icons/instagram.svg" link="https://www.instagram.com/keshav.digital?igsh=ZW82bzdqaHBrdWF2&utm_source=qr" />
            <Icons type="secondary" icon="./icons/whatsapp.svg"  link="https://wa.me/919909897030" />
            <Icons type="secondary" icon="./icons/fb.svg" link="https://www.facebook.com/share/16N2a1qUF8/?mibextid=wwXIfr"/>
          </div>
        </div>

        <div className="text-left">
          <h1 className="text-2xl text-white pb-2 border-b-2 border-blue-900 inline-block">
            Helpful Links
          </h1>
          <ul className="text-white space-y-3 pt-4">
            <li className="font-light hover:text-blue-400 cursor-pointer">
              Home
            </li>
           
            <li onClick={()=>redirect("/products")} className="font-light hover:text-blue-400 cursor-pointer">
              Products
            </li>
            <li onClick={()=>redirect("/admin")} className="font-light hover:text-blue-400 cursor-pointer">
              Admin Login
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h1 className="border-b-2 text-white border-blue-900 text-2xl pb-2 inline-block">
            Reach Us
          </h1>
          <div className="space-y-3 pt-4">
            <Icons type="primary" icon="./icons/call.svg" name="9909897030" link="tel:9909897030" />
            <Icons
              type="primary"
              icon="./icons/email.svg"
              name="k.digital178@gmail.com"
              link="mailto:k.digital178@gmail.com"
            />
            <Icons
              type="primary"
              icon="./icons/location.svg"
              name="178 HARIOM IND.2, VADOD,BAMROLI,SURAT,395023"
            />
            <Icons
              type="primary"
              icon="./icons/time.svg"
              name="Mon-Fri: 9:00 AM - 5:00 PM"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-4 border-t border-blue-900">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2025 Keshav Digital, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
