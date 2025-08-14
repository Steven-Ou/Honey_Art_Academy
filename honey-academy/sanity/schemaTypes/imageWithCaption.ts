import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const imageWithCaption = defineType({
  name: "imageWithCaption",
  title: "Image with Caption",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }, // Allows for better cropping
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
});
