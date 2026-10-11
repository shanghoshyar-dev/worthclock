import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:
          "/blog/how-a-17-person-law-firm-in-poland-saved-6-hours-a-week-with-ai",
        destination: "/case-studies/poland-law-firm-6-hours",
        permanent: true,
      },
      {
        source:
          "/case-studies/how-a-17-person-law-firm-in-poland-saved-6-hours-a-week-with-ai",
        destination: "/case-studies/poland-law-firm-6-hours",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
