import { type SchemaTypeDefinition } from "sanity";
import { program } from "./program";
import { galleryItem } from "./galleryItem";
import { aboutPage } from "./aboutPage";
import { videoEmbed } from "./videoEmbed";
import { blockContent } from "./blockContent";
// Import the new types
import { heroSection } from "./heroSection";
import { textWithImageSection } from "./textWithImageSection";
import { instructor } from "./instructor";
import { teamSection } from "./teamSection";
import { event } from "./event";
import { settings } from "./setting";
import { imageWithCaption } from "./imageWithCaption";
import { navLink } from "./navLink";
import { facilitiesPage } from "./facilitiesPage";
import { homePage } from "./homepage";
import { aboutSection } from "./aboutSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  // Add the new types to this array
  types: [
    program,
    galleryItem,
    aboutPage,
    videoEmbed,
    blockContent,
    heroSection,
    textWithImageSection,
    instructor,
    teamSection,
    event,
    settings,
    imageWithCaption,
    navLink,
    homePage,
    aboutSection,
    facilitiesPage,
  ],
};
