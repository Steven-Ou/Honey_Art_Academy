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

    // This is our new "Page Builder" field
    defineField({
      name: "content",
      title: "Page Content",
      type: "array",
      of: [
        { type: "block" }, // Standard rich text
        { type: "image" }, // Allow adding images directly in the flow
        {
          type: "object",
          name: "videoEmbed",
          title: "Video Embed",
          fields: [
            {
              name: "url",
              type: "url",
              title: "YouTube or Vimeo URL",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "contactUrl",
      title: "Contact Button URL",
      type: "string",
    }),
  ],
});
