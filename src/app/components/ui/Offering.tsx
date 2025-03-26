import Card from "@/app/components/ui/Card";

export default function Offering() {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative  bg-center bg-cover h-[400px] sm:h-[500px] lg:h-[550px] w-full mt-16"
        style={{ backgroundImage: "url(/images/offeringbg.avif)" }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-20">
          <h1 className="text-blue-900 font-semibold text-lg sm:text-xl pt-4">
            OUR OFFERINGS
          </h1>
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl pt-2">
            Transform Your Textile Aspirations with Keshav Digital
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl pt-4 max-w-3xl px-4">
            Experience precision and artistry in clothing fabric manufacturing.
            Our advanced embroidery machines ensure your textiles shine with
            durability, style, and exceptional quality.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-10 px-4 sm:px-8 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <Card
            type="secondary"
            image="/icons/manufacture.svg"
            heading="Quality Fabric Manufacturing"
            description="Our fabrics are meticulously crafted to meet the highest standards, ensuring your designs stand out and last through time."
          />
          <Card
            type="secondary"
            image="/icons/inquiry.svg"
            heading="Inquiry Form"
            description="Use our inquiry form to connect with our team, discover how we can support your textile needs, and elevate your sourcing experience."
          />
          <Card
            type="secondary"
            image="/icons/tailored.svg"
            heading="Tailored Solutions for Designers"
            description="We cater specifically to the needs of fashion designers, offering a diverse range of fabrics to enhance your creative projects."
          />
          <Card
            type="secondary"
            image="/icons/community.svg"
            heading="Community Engagement"
            description="We are committed to fostering relationships within the textile industry, paving the way for collaborative growth and innovation."
          />
          <Card
            type="secondary"
            image="/icons/mahinery.svg"
            heading="Showcase of Machinery"
            description="Explore our advanced embroidery machines in our gallery, reflecting our commitment to innovation and quality in textile manufacturing."
          />
          <Card
            type="secondary"
            image="/icons/eco.svg"
            heading="Sustainable Practices"
            description="We implement eco-friendly manufacturing processes to ensure our textiles meet both quality and sustainability standards."
          />
        </div>
      </div>
    </div>
  );
}
