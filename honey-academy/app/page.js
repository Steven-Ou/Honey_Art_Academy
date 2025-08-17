import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

// Map Sanity section types to your React components
const sectionComponents = {
  heroSection: Hero,
  aboutSection: About,
  programsSection: Programs,
  contactSection: Contact,
};

// Fetch the entire homepage structure in one go
async function getHomePageData() {
  const query = `*[_type == "homePage"][0]{
    pageBuilder[]{
      ..., 
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
      {/* Render each section in the order defined in Sanity */}
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section._type];
        if (!SectionComponent) {
          return null;
        }

        // Pass the correct data as props to each component
        const props = { key: section._key };
        if (section._type === "heroSection") props.hero = section;
        if (section._type === "aboutSection") props.about = section;
        if (section._type === "programsSection") props.programsData = section;
        if (section._type === "contactSection") {
          props.contactData = section;
          props.settings = pageData.settings;
        }

        return <SectionComponent {...props} />;
      })}
    </main>
  );
}
