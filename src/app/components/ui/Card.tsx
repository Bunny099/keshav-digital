import Image from "next/image";
interface CardProps {
  image: string;
  heading: string;
  description: string;
  type: "primary" | "secondary";
}
export default function Card({ image, heading, description, type }: CardProps) {
  return (
    <div
      className={`flex  flex-col w-[250px] h-[300px] ${
        type === "secondary"
          ? "shadow-md p-4 w-[350px] h-[300px] bg-blue-900 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
          : "shadow-none"
      }  `}
    >
      <Image
        src={image}
        alt={heading}
        width={50}
        height={50}
        className={`${
          type === "primary"
            ? "bg-blue-900 w-[50px] rounded-4xl p-2"
            : "p-2 w-[50px]"
        }`}
      />
      <h1
        className={`text-2xl font-semibold pt-2 ${
          type === "secondary" ? "text-white" : "text-black"
        }`}
      >
        {heading}
      </h1>
      <p
        className={`text-gray-500 pt-2 ${
          type === "secondary" ? "text-white" : "text-gray-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
