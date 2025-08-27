import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Honey Art Academy",
  description: "Nurturing Creative Souls",
};

async function getLayoutData() {
  const query = `*[_type == "settings"][0]{
    siteTitle,
    logo,
    "menuItems": menu.items[]{
      _key,
      "label": linkText,
      "url": select(
        linkType == 'internal' && internalLink->_type == 'aboutPage' => '/about',
        linkType == 'internal' && internalLink->_type == 'facilitiesPage' => '/facilities',
        linkType == 'internal' && defined(internalLink->slug.current) => '/' + internalLink->slug.current,
        linkType == 'anchor' => '#' + anchorLink,
        linkType == 'external' => externalUrl,
        '/' // Fallback URL
      )
    },
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Pass the entire 'layoutData' object to both components */}
          <Header data={layoutData} />
          <main>{children}</main>
          <Footer data={layoutData} />
        </ThemeProvider>
      </body>
    </html>
  );
}
