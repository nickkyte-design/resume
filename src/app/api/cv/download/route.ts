import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { CV_FILENAME, getCvBuffer } from "@/lib/cv-storage";

function verifyPassword(provided: string, expected: string): boolean {
  const providedHash = createHash("sha256").update(provided).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(providedHash, expectedHash);
}

export async function POST(request: Request) {
  const expectedPassword = process.env.CV_DOWNLOAD_PASSWORD;

  if (!expectedPassword) {
    return NextResponse.json(
      { error: "CV download is not configured." },
      { status: 503 },
    );
  }

  let password: string;

  try {
    const body = (await request.json()) as { password?: string };
    password = body.password?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!password || !verifyPassword(password, expectedPassword)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  try {
    const fileBuffer = await getCvBuffer();

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${CV_FILENAME}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "CV file not found." }, { status: 404 });
  }
}
