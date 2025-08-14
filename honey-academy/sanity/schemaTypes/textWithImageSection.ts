import { defineField, defineType } from "sanity";

export const textWithImageSection = defineType({
  name: "textWithImageSection",
  title: "Text with Image",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    // NEW: Add a tagline field
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description:
        "A short, catchy phrase that appears above the main content.",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      // NEW: Add a caption field to the image
      fields: [
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "imagePlacement",
      title: "Image Placement",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    }),
  ],
});
