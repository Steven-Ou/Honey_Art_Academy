import { client } from "@/sanity/lib/client";
import AboutPageClient from "./AboutPageClient"; // Import our client component

// This is the data-fetching function that was missing.
async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]{
    title,
    pageBuilder[]{
      ...,
      // This part tells Sanity to fetch the full instructor data
      instructors[]->{
        _id,
        name,
        title,
        photo,
        programs[]->{
          _id,
          title
        }
      }
    }
  }`;
  return client.fetch(query);
}

// This is the main Server Component for the page.
export default async function AboutPage() {
  const data = await getAboutPage();

  if (!data) {
    return (
      <div className="text-center py-24">
        <h1 className="text-2xl font-bold">About Page Not Found</h1>
        <p>
          Please make sure the "About Page" document is created and published in
          the Sanity Studio.
        </p>
      </div>
    );
  }

  // We pass the fetched data as a prop to our client component
  return <AboutPageClient pageData={data} />;
}
