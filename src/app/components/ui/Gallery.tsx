import Image from "next/image";
export default function Gallery() {
  return (
    <div className="bg-blue-100 px-4 mt-9 min-h-screen flex flex-col text-center items-center">
      <h1 className="text-blue-900 text-xl font-semibold pt-20">GALLERY</h1>
      <h1 className="text-3xl sm:text-4xl font-bold border-b-[5px] pt-4 pb-2 border-blue-900">
        Experience Our Textile Mastery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10 pb-24">
        {[
          "/images/gallery1.avif",
          "/images/gallery2.webp",
          "/images/gallery3.avif",
          "/images/gallery4.avif",
          "/images/gallery5.avif",
          "/images/gallery6.webp",
        ].map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md"
          >
             <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={400}
              height={300} 
              className="w-full h-auto transform transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
