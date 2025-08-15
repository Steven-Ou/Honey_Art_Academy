import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section (Homepage)",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'E.g., "About Honey Art Academy"',
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      description: "The main paragraph of text for the about section.",
    }),
    defineField({
      name: "images",
      title: "Image Slideshow",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Add one or more images for the slideshow.",
    }),
    defineField({
      name: "stats",
      title: "Stat Cards",
      type: "array",
      description:
        "The small cards with numbers and labels (e.g., 10+ Instructors).",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "icon",
              title: "Font Awesome Icon",
              type: "string",
              description: 'Example: "fas fa-users"',
            }),
          ],
          preview: {
            select: {
              title: "number",
              subtitle: "label",
            },
          },
        },
      ],
    }),
  ],
});
