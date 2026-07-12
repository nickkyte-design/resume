import { get } from "@vercel/blob";
import { readFile } from "fs/promises";
import path from "path";

export const CV_FILENAME = "nicholas-kyte-network-engineer.pdf";
const LOCAL_CV_PATH = path.join(process.cwd(), "private", "cv", CV_FILENAME);

/**
 * Fetches the CV PDF buffer.
 * Production (Vercel): reads from private Blob storage — never from git or public URLs.
 * Local dev / Docker: falls back to private/cv/ on disk (gitignored).
 */
export async function getCvBuffer(): Promise<Buffer> {
  const pathname = process.env.CV_BLOB_PATHNAME;

  if (pathname) {
    const result = await get(pathname, {
      access: "private",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    if (!result || result.statusCode !== 200 || !result.stream) {
      throw new Error("CV blob not found in private storage.");
    }

    const arrayBuffer = await new Response(result.stream).arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  return readFile(LOCAL_CV_PATH);
}
