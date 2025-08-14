// ... other imports
import { PortableText } from "@portabletext/react";

// This is a new component to render our custom image block
const ImageWithCaption = ({ value }) => {
  if (!value?.image?.asset) {
    return null;
  }
  return (
    <figure className="my-6">
      <Image
        src={urlFor(value.image).url()}
        alt={value.caption || "Image"}
        width={800} // Set a default width
        height={600} // Set a default height
        className="w-full h-auto rounded-lg"
      />
      {value.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

// Update the ptComponents object
const ptComponents = {
  types: {
    videoEmbed: VideoEmbed,
    imageWithCaption: ImageWithCaption, // Add our new component here
  },
  marks: {
    // ... (your existing marks for alignment and underline)
    center: ({ children }) => <div className="text-center">{children}</div>,
    right: ({ children }) => <div className="text-right">{children}</div>,
    left: ({ children }) => <div className="text-left">{children}</div>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};

// ... a lot of the code for your page remains the same ...

export default async function GalleryItemPage({ params }) {
  // ...
  return (
    //...
    <div className="prose lg:prose-xl max-w-none">
      {/* This PortableText component will now render images correctly */}
      <PortableText value={item.content} components={ptComponents} />
    </div>
    //...
  );
}
