import { BRUSH_BAND, BRUSH_BAND_THICK, BRUSH_FILL } from "./brush-stroke";

interface SectionDividerProps {
  topColor: string;
  bottomColor: string;
  accentColor?: string;
  accentEnd?: string;
  flip?: boolean;
  thickBand?: boolean;
  id: string;
}

export default function SectionDivider({
  topColor,
  bottomColor,
  accentColor = "#FA6400",
  accentEnd = "#F5E000",
  flip = false,
  thickBand = false,
  id,
}: SectionDividerProps) {
  const gradId = `sd-${id}`;
  const bandPath = thickBand ? BRUSH_BAND_THICK : BRUSH_BAND;

  return (
    <div className="section-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        width="100%"
        height="80"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={accentColor} />
            <stop offset="1" stopColor={accentEnd} />
          </linearGradient>
        </defs>
        {/* 1 — top zone: fills the entire SVG with the section-above colour */}
        <rect width="1440" height="80" fill={topColor} />
        {/* 2 — bottom zone: covers everything from the wave top-edge down with the section-below colour */}
        <path d={BRUSH_FILL} fill={bottomColor} />
        {/* 3 — accent band: the orange-to-yellow paint stroke on top */}
        <path d={bandPath} fill={`url(#${gradId})`} />
      </svg>
    </div>
  );
}
