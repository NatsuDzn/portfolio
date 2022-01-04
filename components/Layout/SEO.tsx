import { NextSeo } from "next-seo";

interface SEOProps {
  title: string;
  description: string;
  thumbnail: string;
}

const SEO = ({ title, description, thumbnail }: SEOProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical=""
      openGraph={{
        url: process.browser ? window.location.origin : null,
        title: title,
        description: description,
        images: [
          {
            url: thumbnail,
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
        ],
        site_name: "SiteName",
      }}
      twitter={{
        handle: "@NatsuDzn",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default SEO;
