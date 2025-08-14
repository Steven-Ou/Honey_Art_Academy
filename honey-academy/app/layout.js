import { client } from "@/sanity/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const settingsQuery = `*[_type == "settings"][0]{
  logo,
  "mainNav": mainNav[]{
    linkText,
    linkType,
    "slug": internalLink->slug.current,
    "type": internalLink->_type,
    anchorLink,
    externalUrl
  },
  socialLinks,
  copyrightText,
  address,
  phone,
  email
}`;

export default async function RootLayout({ children }) {
  const settingsData = await client.fetch(settingsQuery);

  const settings = settingsData || {
    logo: null,
    mainNav: [],
    socialLinks: [],
    copyrightText: `© ${new Date().getFullYear()} Honey Art Academy. All rights reserved.`,
  };

  return (
    <html lang="en">
      <body>
        <Header logo={settings.logo} mainNav={settings.mainNav} />
        <main>{children}</main>
        <Footer
          logo={settings.logo} // Add this prop
          socialLinks={settings.socialLinks}
          copyrightText={settings.copyrightText}
          address={settings.address}
          phone={settings.phone}
          email={settings.email}
        />
      </body>
    </html>
  );
}
