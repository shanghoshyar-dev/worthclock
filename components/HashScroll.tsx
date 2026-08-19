"use client";

import { useEffect } from "react";

/** Scroll to #hash after client navigation (e.g. /about → /#pricing). */
export function HashScroll() {
  useEffect(() => {
    const scroll = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      // Wait a tick for layout after soft navigation
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    scroll();
    window.addEventListener("hashchange", scroll);
    return () => window.removeEventListener("hashchange", scroll);
  }, []);

  return null;
}
