import Image from "next/image";

interface ImageSlotProps {
  placeholder?: string;
  className?: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  position?: string;
  framed?: boolean;
}

export default function ImageSlot({
  placeholder = "Realisatie",
  className = "",
  src,
  alt,
  fit = "cover",
  position = "center",
  framed = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={`img-fill${framed ? " framed" : ""} ${className}`.trim()}>
        <div className="img-frame-inner">
          <Image
            src={src}
            alt={alt ?? placeholder}
            fill
            sizes="(max-width: 720px) 195px, 250px"
            className={fit === "contain" ? "img-contain" : "img-cover"}
            style={{ objectPosition: position }}
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`img-slot ${className}`} style={{ width: "100%", height: "100%" }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <div className="cap">{placeholder}</div>
    </div>
  );
}
