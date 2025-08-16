import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

// A map to link Sanity section types to React components
const sectionComponents = {
  heroSection: Hero,
  aboutSection: About,
};

// Fetch all data needed for the homepage
async function getHomePageData() {
  const query = `*[_type == "homePage"][0]{
    pageBuilder[]{
      ..., 
      // Ensure nested data like images and stats are fetched
      _type == 'aboutSection' => {
        images[],
        stats[]
      }
    },
    "settings": *[_type == "settings"][0]{
      googleMapsEmbedUrl,
      address
    }
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const pageData = await getHomePageData();

  return (
    <main>
      {/* Dynamically render sections from the page builder */}
      {pageData?.pageBuilder?.map((section) => {
        const SectionComponent = sectionComponents[section._type];
        if (!SectionComponent) {
          return null;
        }
        // Pass the correct prop based on the section type
        if (section._type === "heroSection") {
          return <SectionComponent key={section._key} hero={section} />;
        }
        if (section._type === "aboutSection") {
          return <SectionComponent key={section._key} about={section} />;
        }
        return null;
      })}

      <Programs />
      <Contact settings={pageData?.settings} />
    </main>
  );
}
