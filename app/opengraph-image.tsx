import { ImageResponse } from "next/og";
import { getWhiteLogoDataUrl } from "./_lib/og-assets";

export const alt = "Van Waes Schilderwerken";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoSrc = await getWhiteLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "#1a2744",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={420} height={140} />
        <div style={{ fontSize: 32, letterSpacing: "0.04em", opacity: 0.9 }}>
          Vakmanschap dat blijft
        </div>
      </div>
    ),
    { ...size },
  );
}
