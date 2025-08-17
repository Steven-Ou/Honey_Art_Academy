import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "Honey Art Academy",
  description: "Nurturing Creative Souls",
};

// Fetch all settings data needed for the layout (Header/Footer)
async function getLayoutData() {
  const query = `*[_type == "settings"][0]{
    // Data for Header
    menuItems[]{ _key, label, url },
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
        <Header data={headerData} />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
