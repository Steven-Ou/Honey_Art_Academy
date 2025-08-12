import { type SchemaTypeDefinition } from "sanity";
import { program } from "./program";
import { testimonial } from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [program, testimonial],
};
