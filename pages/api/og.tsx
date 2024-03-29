import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../public/assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const OGBadge = ({ label = "Nathanael Louzoun" }) => {
  return (
    <span
      style={{
        fontSize: 20,
        marginTop: 32,
        marginBottom: 8,
        padding: "4px 12px",
        background: "rgba(255,255,255,0.25)",
        borderRadius: 8,
      }}
    >
      {label}
    </span>
  );
};

const OGSection = ({ title, emoji }) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <span style={{ fontSize: 128 }}>{emoji}</span>
      <OGBadge />
      <span style={{ fontSize: 48 }}>{title}</span>
    </section>
  );
};

const OGFooter = ({ label, fill = "#49a167" }) => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        bottom: 64,
      }}
    >
      <svg
        viewBox="0 0 32 32"
        fill={fill}
        width="32px"
        height="32px"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(1.25)" }}
      >
        <path d="M3.4125 3.79828C2.95136 3.53804 2.48172 3.27301 2 3V28.8479C2.05478 28.8479 2.09818 28.8508 2.13313 28.8531C2.18997 28.8569 2.22446 28.8592 2.24918 28.8451C4.5916 27.5029 6.93334 26.1599 9.26957 24.8066C9.37351 24.7461 9.48846 24.5981 9.49121 24.4879C9.50573 23.8827 9.50423 23.2772 9.50261 22.6212C9.50208 22.4064 9.50154 22.1863 9.50154 21.959C9.3945 22.0142 9.30482 22.0595 9.22665 22.099C9.08364 22.1713 8.97913 22.2242 8.87721 22.2825C8.48716 22.5055 8.09824 22.7304 7.70936 22.9554C6.8499 23.4525 5.9906 23.9495 5.11956 24.4253C4.50005 24.764 4.30938 24.6166 4.30938 23.8898C4.30801 18.6198 4.30732 13.3506 4.30938 8.08064C4.31007 7.36339 4.50074 7.22572 5.1292 7.57265C6.31699 8.22953 7.49238 8.90894 8.66776 9.58833C8.93095 9.74046 9.19415 9.8926 9.45748 10.0445C9.97957 10.3455 10.5017 10.6465 11.0238 10.9475C14.4689 12.9335 17.9142 14.9196 21.3506 16.9203C21.8648 17.2197 22.0548 17.0951 22.0727 16.5514C22.0783 16.3856 22.0754 16.2192 22.0726 16.0529C22.0684 15.8068 22.0642 15.5607 22.0872 15.3172C22.1415 14.7348 21.849 14.4092 21.3816 14.1422C18.9449 12.749 16.5137 11.3461 14.0831 9.9426C12.9328 9.27839 11.7835 8.61232 10.6342 7.94626C9.1668 7.09582 7.69941 6.24539 6.22985 5.39887C5.3061 4.86688 4.37794 4.3431 3.4125 3.79828ZM22.1832 9.34979C22.184 9.58102 22.1849 9.82137 22.1849 10.0741C22.5702 9.8468 22.9397 9.62734 23.2983 9.41438C24.2341 8.85852 25.0955 8.34695 25.9694 7.85624C26.218 7.71636 26.496 7.62933 26.7743 7.54223C26.9027 7.50203 27.0311 7.46182 27.1568 7.41639C27.178 7.53196 27.2012 7.64741 27.2244 7.7629C27.2779 8.02917 27.3314 8.29568 27.3612 8.56454C27.3828 8.76393 27.3764 8.96639 27.3701 9.16906C27.3669 9.26934 27.3637 9.36968 27.3639 9.46971C27.3667 11.0693 27.3695 12.6689 27.3724 14.2685C27.378 17.4721 27.3837 20.6758 27.3887 23.8794C27.3894 24.6373 27.2049 24.7729 26.5145 24.3909C24.3463 23.1911 22.1883 21.9714 20.0428 20.731C16.7855 18.8477 13.54 16.9444 10.2959 15.0391C9.81264 14.7548 9.62472 15.4115 9.62472 15.4115C9.62472 15.4115 9.6378 15.9621 9.61577 16.2347C9.56002 16.9258 9.63849 17.4992 10.3619 17.8847C11.2504 18.3581 12.118 18.8702 12.9857 19.3823C13.4073 19.6312 13.829 19.8801 14.2531 20.1245C18.3873 22.5083 22.5222 24.8913 26.6584 27.2716C27.3338 27.6606 28.0129 28.0431 28.7261 28.4448C29.0464 28.6252 29.3736 28.8095 29.7105 29V3.11839C29.6533 3.12535 29.605 3.12809 29.5635 3.13044C29.4902 3.13459 29.4387 3.13751 29.3987 3.16038C27.0797 4.48957 24.762 5.82082 22.4513 7.16515C22.3287 7.23674 22.2007 7.41777 22.1966 7.55131C22.1788 8.12646 22.1809 8.70237 22.1832 9.34979Z" />
      </svg>
      <span style={{ fontWeight: "bolder" }}>{label}</span>
    </footer>
  );
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Default title";
  const emoji = searchParams.get("emoji") ?? "👋";
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e1117",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem",
          fontFamily: "Inter",
        }}
      >
        <OGSection title={title} emoji={emoji} />
        <OGFooter label="nathanael-louzoun.vercel.app " />
      </div>
    ),
    {
      width: 1200,
      height: 627,
      emoji: "twemoji",
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
