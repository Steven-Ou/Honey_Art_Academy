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
      type: "imageWithCaption",
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
