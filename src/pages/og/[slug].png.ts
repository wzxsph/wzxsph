import type { APIRoute } from "astro";
import sharp from "sharp";

const cards = {
  home: { eyebrow: "PINHAO SONG · AI PRODUCT BUILDER", title: "AI systems, made usable.", note: "Agent systems · Generative media · Interactive products", index: "01—03" },
  "fashionai-studio": { eyebrow: "CASE STUDY · 01", title: "FashionAI\nStudio", note: "Six stages · Quality evidence · Human delivery", index: "SHIP" },
  tt16: { eyebrow: "CASE STUDY · 02", title: "TT16 ·\nTradeType 16", note: "20 decisions · 16 trading styles", index: "PLAY" },
  storyweaver: { eyebrow: "CASE STUDY · 03", title: "StoryWeaver", note: "5 agents · 27 commands · 13 checks", index: "LOOP" },
} as const;

type CardSlug = keyof typeof cards;

export function getStaticPaths() {
  return (Object.keys(cards) as CardSlug[]).map((slug) => ({ params: { slug } }));
}

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char] ?? char);
}

export const GET: APIRoute = async ({ params }) => {
  const key = params.slug as CardSlug;
  const card = cards[key] ?? cards.home;
  const titleLines = card.title.split("\n");
  const title = titleLines.map((line, index) => `<text x="72" y="${252 + index * 112}" fill="#171717" font-family="Arial, sans-serif" font-size="102" font-weight="700" letter-spacing="-5">${escapeXml(line)}</text>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#F4F1E8"/>
    <path d="M0 0H1200V18H0Z" fill="#171717"/>
    <path d="M72 94H1128" stroke="#171717" stroke-opacity=".35"/>
    <text x="72" y="70" fill="#171717" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="3">${escapeXml(card.eyebrow)}</text>
    ${title}
    <rect x="72" y="502" width="1056" height="1" fill="#171717" fill-opacity=".35"/>
    <text x="72" y="554" fill="#4F4E49" font-family="Arial, sans-serif" font-size="24">${escapeXml(card.note)}</text>
    <rect x="954" y="523" width="174" height="74" fill="#D8FF3E" stroke="#171717"/>
    <text x="1041" y="570" text-anchor="middle" fill="#171717" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="2">${escapeXml(card.index)}</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
