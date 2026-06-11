import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export default function BrandLogo({ className = "", variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      className={`brand brand-logo-link${isFooter ? " brand-logo-link-footer" : ""} ${className}`.trim()}
      href="/"
      aria-label="Van Waes Schilderwerken"
    >
      <Image
        src={isFooter ? "/images/van-waes-logo-wit.png" : "/images/van-waes-logo.png"}
        alt="Van Waes Schilderwerken"
        width={220}
        height={74}
        className="brand-logo"
        priority={!isFooter}
      />
    </Link>
  );
}
