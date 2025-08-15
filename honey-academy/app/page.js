import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

// Fetch all data needed for the homepage in one query
async function getHomePageData() {
  const query = `*[_type == "homePage"][0]{
    "hero": hero,
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
      <Hero hero={pageData?.hero} />
      <About />
      <Programs />
      <Contact settings={pageData?.settings} />
    </main>
  );
}
