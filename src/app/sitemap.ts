import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zippatek.com";
  const paths = [
    "/",
    "/about/",
    "/products/",
    "/products/propabridge/",
    "/products/fastfind360/",
    "/solutions/",
    "/team/",
    "/contact/",
    "/press/",
    "/careers/",
    "/blog/",
    "/resources/",
    "/privacy/",
    "/terms/",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
