import TestimonialCard from "@/app/components/ui/Testimonialcard";

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center px-6">
      <h1 className="text-blue-900 text-xl font-semibold pt-20">
        TESTIMONIALS
      </h1>
      <h1 className="text-3xl sm:text-4xl font-bold border-b-[5px] pt-4 pb-6 border-blue-900">
        What Our Clients Think
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-10">
        <TestimonialCard
          image="/images/testimonial1.jpg"
          review="Working with Keshav Digital has completely transformed our fabric sourcing process. Their attention to detail and commitment to using cutting-edge embroidery technology ensure that our designs are not just unique, but also crafted to the highest standards."
          name="SARAH THOMPSON"
        />
        <TestimonialCard
          image="/images/testimonial2.jpg"
          review="Keshav Digital stands out in the textile industry for their exceptional service and quality. Their team is always ready to assist, making it easy to find the perfect fabrics for our collections."
          name="DAVID LEE"
        />
        <TestimonialCard
          image="/images/testimonial3.jpg"
          review="The variety of fabrics available at Keshav Digital is truly impressive. Their innovative approach to textile manufacturing allows us to keep pushing creative boundaries."
          name="MARIA GONZALEZ"
        />
      </div>
    </div>
  );
}
