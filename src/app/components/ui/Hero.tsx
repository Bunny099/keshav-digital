import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";

export default function Hero() {
  return (
    <div>
      <div
        className="relative h-[750px] bg-center bg-cover w-full"
        style={{ backgroundImage: "url(/images/hero.webp)" }}
      >
        <div className="hero absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center p-6 sm:p-8 bg-white/90 w-11/12 max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center lg:text-left">
          <h1 className="text-lg font-semibold text-blue-900 pb-4">
            UNLOCK YOUR TEXTILE VISION
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold pb-3 border-blue-900 border-b-8">
            Innovative <br /> Textiles by <br /> Keshav Digital
          </h1>
          <p className="text-sm sm:text-base text-gray-500 pt-4 pb-4">
            Unleash the potential of your textile projects with our cutting-edge
            embroidery machines. We produce high-quality fabrics designed to
            elevate your creations and fulfill your unique vision.
          </p>
          
        </div>
      </div>

      <div className="pt-12 flex flex-col lg:flex-row justify-center px-6 sm:px-12 lg:px-16">
        <div
          className="relative bg-center bg-cover h-[400px] sm:h-[500px] lg:h-[600px] w-full lg:w-1/2"
          style={{ backgroundImage: "url(/images/hero2.avif)" }}
        >
          <div className="absolute bottom-0 right-0 flex flex-col items-center justify-center bg-blue-900 h-36 sm:h-[200px] lg:h-[280px] w-40 sm:w-52 lg:w-[285px] border-t-white border-l-white border-t-8 border-l-8">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              10+
            </h1>
            <p className="text-white text-sm sm:text-lg sm:text-center pt-2">
              Years in Textile Manufacturing
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0 lg:pl-8 w-full lg:w-1/2">
          <h1 className="text-lg font-semibold text-blue-900 pb-4">
            ABOUT KESHAV DIGITAL
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-3 border-blue-900 border-b-8">
            Crafting Exceptional Textiles with Precision
          </h1>
          <p className="text-sm sm:text-base text-gray-500 pt-4 pb-8">
            Discover our innovative textile manufacturing capabilities that
            blend advanced embroidery techniques with artistic design. We focus
            on delivering high-quality fabrics tailored to the needs of
            designers and businesses, ensuring excellence in every thread.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              type="primary"
              image="/icons/target.svg"
              heading="Our dedication"
              description="We revitalize fabrics, creating unique solutions for aspiring designers and businesses."
            />
            <Card
              type="primary"
              image="/icons/vision.svg"
              heading="Our Vision"
              description="Making exquisite textiles accessible to all through innovative technology and design."
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}
