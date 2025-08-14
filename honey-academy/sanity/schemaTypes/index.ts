import { type SchemaTypeDefinition } from "sanity";
import { program } from "./program";
import { testimonial } from "./testimonial";
import { galleryItem } from "./galleryItem";
import { aboutPage } from "./aboutPage";
import { videoEmbed } from "./videoEmbed";
import { blockContent } from "./blockContent"; // Import the new type

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    program,
    testimonial,
    galleryItem,
    aboutPage,
    videoEmbed,
    blockContent,
  ], // Add blockContent here
};
