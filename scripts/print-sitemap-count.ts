import { getSitemapEntries, getSitemapUrls } from "../lib/sitemap-urls";

const entries = getSitemapEntries();
const urls = getSitemapUrls();
const blogs = urls.filter((url) => url.includes("/blog/")).length;
const studies = urls.filter((url) => url.includes("/case-studies/")).length;
const staticCount = entries.length - blogs - studies;

console.log("Sitemap URL count");
console.log(`  total:        ${entries.length}`);
console.log(`  static pages: ${staticCount}`);
console.log(`  blog posts:   ${blogs}`);
console.log(`  case studies: ${studies}`);
