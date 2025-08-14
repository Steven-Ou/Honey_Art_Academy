import { client } from "@/sanity/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const settingsQuery = `*[_type == "settings"][0]{
  logo,
  mainNav[]->{
    _type,
    title,
    "slug": slug.current
  },
  socialLinks,
  copyrightText
}`;

export default async function RootLayout({ children }) {
  // Fetch the settings data
  const settingsData = await client.fetch(settingsQuery);

  // THIS IS THE FIX: Provide a default empty object if no settings are found.
  // This prevents the site from crashing.
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
          socialLinks={settings.socialLinks}
          copyrightText={settings.copyrightText}
        />
      </body>
    </html>
  );
}
