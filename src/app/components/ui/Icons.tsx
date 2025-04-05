import Image from "next/image";

interface IconsProps {
  icon: string;
  name?: string;
  type: "primary" | "secondary";
  className?: string;
  link?: string; // 👈 new
}

export default function Icons({ icon, name, type, className, link }: IconsProps) {
  const content = (
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
      {name && (
        <p
          className={`${className} ${
            type === "primary" ? "text-xl text-white" : "text-sm text-gray-200"
          }`}
        >
          {name}
        </p>
      )}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
