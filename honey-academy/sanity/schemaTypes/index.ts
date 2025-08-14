import { type SchemaTypeDefinition } from "sanity";
import { program } from "./program";
import { testimonial } from "./testimonial";
import { galleryItem } from "./galleryItem";
import { aboutPage } from "./aboutPage";
import { videoEmbed } from "./videoEmbed";
// Update the import to point to the .tsx file
import { blockContent } from "./blockContent.tsx";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    program,
    testimonial,
    galleryItem,
    aboutPage,
    videoEmbed,
    blockContent,
  ],
};
