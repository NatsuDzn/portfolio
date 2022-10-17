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
        url: "https://nathanael-louzoun.vercel.app/",
        title,
        description,
        images: [
          {
            url: thumbnail,
            width: 1200,
            height: 627,
            alt: "Og Image Alt",
          },
        ],
        site_name: "Nathanael Louzoun | Front end developer",
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
