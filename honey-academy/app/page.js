import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

// A map to link Sanity section types to React components
const sectionComponents = {
  heroSection: Hero,
  aboutSection: About,
  programsSection: Programs,
};

// Fetch all data needed for the homepage
async function getHomePageData() {
  const query = `*[_type == "homePage"][0]{
    pageBuilder[]{
      ..., 
      // Ensure nested data for the about section is fetched
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
  const sections = pageData?.pageBuilder || [];

  return (
    <main>
      {/* Dynamically render sections from the page builder */}
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section._type];
        if (!SectionComponent) {
          console.warn(`No component found for section type: ${section._type}`);
          return null;
        }

        // Pass props based on section type
        const props = {};
        if (section._type === "heroSection") props.hero = section;
        if (section._type === "aboutSection") props.about = section;
        if (section._type === "programsSection") props.programsData = section;

        return <SectionComponent key={section._key} {...props} />;
      })}

      {/* Contact section remains at the bottom for now */}
      <Contact settings={pageData?.settings} />
    </main>
  );
}
