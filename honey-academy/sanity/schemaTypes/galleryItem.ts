import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Page Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        // Reference the new videoEmbed type here
        { type: "videoEmbed" },
      ],
    }),
    defineField({
      name: "contactUrl",
      title: "Contact Button URL",
      type: "string",
    }),
  ],
});
