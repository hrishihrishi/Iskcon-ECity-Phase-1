// src/app/robots.ts

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/blog/admin", "/_next/", "/server-sitemap.xml"],
      },
    ],
    sitemap: "https://iskcon-e-city-phase-1-two.vercel.app//sitemap.xml",
    host: "https://iskcon-e-city-phase-1-two.vercel.app/",
  };
}
