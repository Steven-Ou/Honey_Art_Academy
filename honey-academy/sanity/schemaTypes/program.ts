import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  icon: BookIcon,
  fields: [
    // ... other fields
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Short Description",
      description: "A brief summary for program cards.",
      type: "text",
      rows: 3,
    }),
    // UPDATED THIS FIELD
    defineField({
      name: "body",
      title: "Main Content",
      description: "The full details of the program.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Center", value: "center" },
            { title: "Right", value: "right" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured Program",
      type: "boolean",
      description: "Toggle on to feature this program on the homepage.",
      initialValue: false,
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "reference", to: [{ type: "galleryItem" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
