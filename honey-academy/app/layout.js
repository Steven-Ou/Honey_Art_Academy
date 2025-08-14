import { client } from "@/sanity/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// The query to fetch all global settings and navigation link details
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

// The layout is now an async function
export default async function RootLayout({ children }) {
  const settings = await client.fetch(settingsQuery);

  return (
    <html lang="en">
      <body>
        {/* Pass the fetched data as props to the Header and Footer */}
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
