/** Shared paint-stroke paths — used by SectionDivider and navbar accent */
export const BRUSH_UPPER =
  "M0,40 C240,22 480,58 720,38 C960,18 1200,52 1440,32";
export const BRUSH_FILL = `${BRUSH_UPPER} L1440,80 L0,80 Z`;
/** ~6px accent band along the wave (section dividers) */
export const BRUSH_BAND = `${BRUSH_UPPER} L1440,38 C1200,58 960,24 720,44 C480,64 240,28 0,46 Z`;
/** ~9px accent band for navbar */
export const BRUSH_BAND_NAV = `${BRUSH_UPPER} L1440,41 C1200,61 960,27 720,47 C480,67 240,31 0,49 Z`;
/** ~10px accent band for hero → diensten divider */
export const BRUSH_BAND_THICK = `${BRUSH_UPPER} L1440,42 C1200,62 960,28 720,48 C480,68 240,32 0,50 Z`;
/** Crop: wave + band region (matches SectionDivider proportions) */
export const BRUSH_NAV_VIEWBOX = "0 8 1440 56";
/** White fill above the wave (navbar brush zone) */
export const BRUSH_WHITE_ABOVE = `${BRUSH_UPPER} L1440,0 L0,0 Z`;
