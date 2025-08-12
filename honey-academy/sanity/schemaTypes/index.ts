import { type SchemaTypeDefinition } from "sanity";
import { program } from "./program";
import { testimonial } from "./testimonial";
import { galleryItem } from "./galleryItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [program, testimonial, galleryItem],
};
