import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const read = (...segments: string[]) => fs.readFile(path.join(process.cwd(), ...segments));

/** Shared Open Graph card: optional cover photo, a small label, and a serif title. */
export async function renderOgImage({
  label,
  title,
  cover,
}: {
  label: string;
  title: string;
  /** path under /public, e.g. "/work/motorbike/cover.jpg" */
  cover?: string;
}) {
  const [regular, italic] = await Promise.all([
    read("assets", "fonts", "InstrumentSerif-Regular.ttf"),
    read("assets", "fonts", "InstrumentSerif-Italic.ttf"),
  ]);

  let coverData: string | null = null;
  if (cover) {
    try {
      coverData = `data:image/jpeg;base64,${(await read("public", cover)).toString("base64")}`;
    } catch {
      // no cover yet: fall back to the plain card
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0b0b0b",
          color: "#ededed",
          fontFamily: "Instrument Serif",
        }}
      >
        {coverData && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverData}
            alt=""
            width={1200}
            height={630}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(180deg, rgba(11,11,11,0.25) 0%, rgba(11,11,11,0.94) 78%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#b5b5b5" }}>
            <span>arham bhansali</span>
            <span>{label}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 56, height: 3, background: "#e9a23b", marginBottom: 28 }} />
            <div style={{ display: "flex", fontSize: title.length > 28 ? 84 : 112, lineHeight: 1, letterSpacing: -2 }}>
              {title}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
