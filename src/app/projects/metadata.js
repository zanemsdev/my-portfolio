import { metaData } from "../data/config";

export const metadataBase = {
  title: metaData.titleProjects,
  description: metaData.description,
  keywords: metaData.keywords,
  robots: metaData.robots,
};

// Export `metadata` here (server module) so Next.js can consume it from a server file.
export const metadata = {
  ...metadataBase,
};
