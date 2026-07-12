/**
 * One-time script to upload your CV to Vercel Blob (private storage).
 * The PDF is never committed to GitHub.
 *
 * Prerequisites:
 *   1. Create a PRIVATE Blob store in Vercel (Storage → Blob → Create Store → Private)
 *   2. Place your PDF at private/cv/nicholas-kyte-network-engineer.pdf (local only)
 *   3. Set BLOB_READ_WRITE_TOKEN in .env.local (from Vercel → Storage → your store → .env.local tab)
 *
 * Usage:
 *   node scripts/upload-cv.mjs
 *
 * Then add CV_BLOB_PATHNAME to Vercel Environment Variables (printed after upload).
 */

import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { put } from "@vercel/blob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CV_FILENAME = "nicholas-kyte-network-engineer.pdf";
const BLOB_PATHNAME = `cv/${CV_FILENAME}`;

async function main() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("Missing BLOB_READ_WRITE_TOKEN. Add it to .env.local first.");
    process.exit(1);
  }

  const localPath = path.join(__dirname, "..", "private", "cv", CV_FILENAME);

  let fileBuffer;
  try {
    fileBuffer = await readFile(localPath);
  } catch {
    console.error(`PDF not found at ${localPath}`);
    console.error("Place your resume PDF there, then run this script again.");
    process.exit(1);
  }

  const blob = await put(BLOB_PATHNAME, fileBuffer, {
    access: "private",
    token,
    contentType: "application/pdf",
    addRandomSuffix: false,
  });

  console.log("\n✓ CV uploaded to private Vercel Blob storage.\n");
  console.log("Add these to Vercel → Settings → Environment Variables:\n");
  console.log(`  CV_BLOB_PATHNAME=${blob.pathname}`);
  console.log(`  CV_DOWNLOAD_PASSWORD=<your-chosen-password>`);
  console.log(`  BLOB_READ_WRITE_TOKEN=<already set in Vercel if store is linked>\n`);
  console.log("Then redeploy production.\n");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
