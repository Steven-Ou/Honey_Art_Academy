import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

const sectionComponents = {
  heroSection: Hero,
  aboutSection: About,
  programsSection: Programs,
  contactSection: Contact,
};

// Fetch all data for the page in a single, efficient query
async function getHomePageData() {
  const query = `*[_type == "homePage"][0]{
    pageBuilder[]{
      ..., 
      _type == 'aboutSection' => { images[], stats[] }
    },
    "settings": *[_type == "settings"][0]{ googleMapsEmbedUrl, address },
    "programCards": *[_type == "program"]{ _id, title, subtitle, description, slug, image }
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const pageData = await getHomePageData();
  const sections = pageData?.pageBuilder || [];

  return (
    <main>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section._type];
        if (!SectionComponent) return null;

        const props = {};
        if (section._type === "heroSection") props.hero = section;
        if (section._type === "aboutSection") props.about = section;
        if (section._type === "contactSection") {
          props.contactData = section;
          props.settings = pageData.settings;
        }
        // Pass both the section data and the program cards to the Programs component
        if (section._type === "programsSection") {
          props.programsData = section;
          props.programCards = pageData.programCards;
        }

        return <SectionComponent key={section._key} {...props} />;
      })}
    </main>
  );
}
