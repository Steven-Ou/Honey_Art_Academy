import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

// Fetch settings data needed for this page
async function getSettings() {
  const query = `*[_type == "settings"][0]{
    googleMapsEmbedUrl
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const settings = await getSettings();

  return (
    <main>
      <Hero />
      <About />
      <Programs />
      {/* Pass the settings data to the Contact component */}
      <Contact settings={settings} />
    </main>
  );
}
