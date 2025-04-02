import Image from "next/image";
interface IconsProps {
  icon: string;
  name?: string;
  type: "primary" | "secondary";
  className?: string;
}
export default function Icons({ icon, name, type, className }: IconsProps) {
  return (
    <div className="flex pt-2 items-center gap-3">
       <Image
        src={icon}
        alt={name || "icon"}
        width={32} 
        height={32} 
        className={`h-8 w-8 ${
          type === "secondary" ? "bg-white rounded-2xl p-1" : ""
        }`}
      />
      <p
        className={`${className} ${
          type === "primary" ? "text-xl text-white" : "text-sm text-gray-200"
        }`}
      >
        {name}
      </p>
    </div>
  );
}
