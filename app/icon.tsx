import { ImageResponse } from "next/og";
import { getWhiteLogoDataUrl } from "./_lib/og-assets";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default async function Icon() {
  const logoSrc = await getWhiteLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a2744",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={40} height={14} />
      </div>
    ),
    { ...size },
  );
}
