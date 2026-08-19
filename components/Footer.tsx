import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-2 text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
            {site.entity}. Based in {site.location}. Focused on EU law firms,
            available to businesses in any industry.
          </p>
        </div>
        <div>
          <p className="eyebrow text-brass">Pages</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-cream">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cream">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cream">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-cream">
                Book an assessment
              </Link>
            </li>
            <li>
              <Link href="/refund-request" className="hover:text-cream">
                Request a refund
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-brass">Legal</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-cream">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cream">
                Terms of Service
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/45 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
