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
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }], // You can create subheadings here in the Studio
    }),
    // Add a field for the video URL
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description: "Paste the full URL of a YouTube or Vimeo video.",
      type: "url",
    }),
    // Add a field for the contact button link
    defineField({
      name: "contactUrl",
      title: "Contact Button URL",
      description:
        "The URL the contact button should link to (e.g., /#contact).",
      type: "string",
    }),
  ],
});
