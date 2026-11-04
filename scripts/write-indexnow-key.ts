import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const key = process.env.INDEXNOW_KEY?.trim();

if (!key) {
  console.log("IndexNow: INDEXNOW_KEY not set — skipping key file.");
  process.exit(0);
}

if (!/^[a-f0-9]{32}$/i.test(key)) {
  console.error(
    "IndexNow: INDEXNOW_KEY must be a 32-character hexadecimal string.",
  );
  process.exit(1);
}

const publicDir = join(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });
const filePath = join(publicDir, `${key}.txt`);
writeFileSync(filePath, key, "utf8");
console.log(`IndexNow: wrote ${filePath}`);
