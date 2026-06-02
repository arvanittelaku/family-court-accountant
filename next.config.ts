import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/who-we-help/solicitors",
        destination: "/who-we-help/solicitors-barristers",
        permanent: true,
      },
      {
        source: "/who-we-help/individuals",
        destination: "/who-we-help/individuals-going-through-divorce",
        permanent: true,
      },
      {
        source: "/guides/business-valuation-divorce",
        destination: "/guides/business-valuation-divorce-guide",
        permanent: true,
      },
      {
        source: "/guides/form-e-financial-disclosure",
        destination: "/guides/form-e-financial-disclosure-guide",
        permanent: true,
      },
      {
        source: "/guides/schedule-1-financial-guide",
        destination: "/guides/schedule-1-children-act-financial-guide",
        permanent: true,
      },
      {
        source: "/guides/tolata-cohabitation-guide",
        destination: "/guides/tolata-cohabitation-financial-guide",
        permanent: true,
      },
      {
        source: "/case-types/business-valuation",
        destination: "/case-types/business-valuation-divorce",
        permanent: true,
      },
      {
        source: "/case-types/hidden-assets",
        destination: "/case-types/hidden-assets-investigation",
        permanent: true,
      },
      {
        source: "/case-types/lifestyle-analysis",
        destination: "/case-types/lifestyle-analysis-income",
        permanent: true,
      },
      {
        source: "/case-types/add-backs",
        destination: "/case-types/add-backs-financial-reconstruction",
        permanent: true,
      },
      {
        source: "/proceedings/tolata",
        destination: "/proceedings/tolata-cohabitation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
