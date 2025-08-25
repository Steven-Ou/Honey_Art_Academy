import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata = {
  title: "Honey Art Academy",
  description: "Nurturing Creative Souls",
};

// This query is now updated to handle pages without slugs
async function getLayoutData() {
  const query = `*[_type == "settings"][0]{
    // Data for Header
    "menuItems": mainNav[]{
      _key,
      "label": linkText,
      // This 'select' statement now correctly builds the URL for each link type
      "url": select(
        linkType == 'internal' && internalLink->_type == 'aboutPage' => '/about',
        linkType == 'internal' && internalLink->_type == 'facilitiesPage' => '/facilities',
        linkType == 'internal' && defined(internalLink->slug.current) => '/' + internalLink->slug.current,
        linkType == 'anchor' => '#' + anchorLink,
        linkType == 'external' => externalUrl,
        '/' // A fallback URL if none of the conditions are met
      )
    },
    // Data for Footer
    address,
    email,
    phone,
    "socials": socialLinks[]{ _key, platform, url },
    "footerLinks": footerLinks[]{ _key, label, url }
  }`;
  return client.fetch(query);
}

export default async function RootLayout({ children }) {
  const layoutData = await getLayoutData();

  const headerData = { menuItems: layoutData?.menuItems || [] };
  const footerData = {
    address: layoutData?.address,
    email: layoutData?.email,
    phone: layoutData?.phone,
    socials: layoutData?.socials || [],
    footerLinks: layoutData?.footerLinks || [],
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header data={headerData} />
          <main>{children}</main>
          <Footer data={footerData} />
        </ThemeProvider>
      </body>
    </html>
  );
}
