import Image from "next/image";
interface TestimonialProps {
  image: string;
  review: string;
  name: string;
}

export default function TestimonialCard({
  image,
  review,
  name,
}: TestimonialProps) {
  return (
    <div className="group flex flex-col w-full max-w-lg h-auto shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl items-center p-6 md:p-8 text-center rounded-lg bg-white animate-fadeIn">
      <Image
        src={image}
        alt={name}
        height={100}
        width={100}
        className="rounded-full border-4 border-white shadow-lg"
      />
      <p className="text-gray-500 pt-6 text-base md:text-lg line-clamp-5">
        {review}
      </p>
      <h1 className="text-xl font-semibold pt-6">{name}</h1>
    </div>
  );
}
