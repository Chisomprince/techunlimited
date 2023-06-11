import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getSettings } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function sharedMetaData() {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "Techparrots - Your Unlimited Source for Tech News and Insights",
      template: "%s | Techparrots"
    },
    description:
      settings?.description ||
      "Stay ahead of the technology curve with Techparrots, your go-to tech blog for the latest news, insightful articles, comprehensive reviews, and practical tips. Explore the limitless possibilities of the tech world with us today!",
    keywords:
      "tech blog, technology news, tech insights, comprehensive reviews,      practical tips,      limitless possibilities,      stay ahead of the curve    ",
    authors: [{ name: "chisomprince" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.png",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      handle: "@techparrots",
      site: "@techparrots",
      cardType: "summary_large_image",
      title: settings?.title || "Techparrots",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData();
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
