import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";

export type LogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 48, height: 48, textSize: "text-xs" },
    md: { width: 48, height: 48, textSize: "text-lg" },
    lg: { width: 56, height: 56, textSize: "text-xl" },
  };

  const { width, height, textSize } = sizes[size];

  return (
    <a
      className="inline-block flex-none rounded-xl font-semibold focus:opacity-80 focus:outline-none"
      href="/"
      aria-label="Logo"
    >
      <div className="flex items-center gap-3">
        <Image
          src={LogoImage}
          className={`h-${height} w-${width}`}
          alt="Logo"
          width={width}
          height={height}
        />
        <div className="flex flex-col">
          <span className={`${textSize} font-bold`}>
            Madrasah Bertaraf Internasional
          </span>
          <span className="text-xs font-medium">
            Amanatul Ummah Pacet - Mojokerto
          </span>
        </div>
      </div>
    </a>
  );
}
