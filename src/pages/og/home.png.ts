import type { APIRoute } from "astro";
import sharp from "sharp";

export const GET: APIRoute = async () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#fbfaf7"/>
    <text x="96" y="270" fill="#282824" font-family="Arial, sans-serif" font-size="88" font-weight="500" letter-spacing="-4">Pinhao Song</text>
    <text x="100" y="338" fill="#686861" font-family="Arial, sans-serif" font-size="32">Independent Developer</text>
    <path d="M100 476H1100" stroke="#e5e3dc"/>
    <text x="100" y="523" fill="#686861" font-family="Arial, sans-serif" font-size="21">AI applications · Native software · Computer vision</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
