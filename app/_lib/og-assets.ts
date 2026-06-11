import { readFile } from "fs/promises";
import { join } from "path";

export async function getWhiteLogoDataUrl() {
  const logo = await readFile(
    join(process.cwd(), "public/images/van-waes-logo-wit.png"),
  );
  return `data:image/png;base64,${logo.toString("base64")}`;
}
