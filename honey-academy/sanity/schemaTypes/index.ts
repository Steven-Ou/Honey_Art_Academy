import { type SchemaTypeDefinition } from "sanity";
import { program } from "./program";
import { testimonial } from "./testimonial";
import { galleryItem } from "./galleryItem";
import { aboutPage } from "./aboutPage";
import { videoEmbed } from "./videoEmbed";
import { blockContent } from "./blockContent";
// Import the new types
import { heroSection } from "./heroSection";
import { textWithImageSection } from "./textWithImageSection";
import {instructor} from './instructor'
import {teamSection} from './teamSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  // Add the new types to this array
  types: [
    program,
    testimonial,
    galleryItem,
    aboutPage,
    videoEmbed,
    blockContent,
    heroSection,
    textWithImageSection,
  ],
};
