import { OG_SIZE, renderOgImage } from "@/lib/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ label: "ECE + Physics · Duke", title: "I like making and trying out stuff." });
}
