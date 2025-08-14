import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  icon: DocumentIcon,
  fields: [
    // ... other fields
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
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Center", value: "center" }, // Add this
            { title: "Right", value: "right" }, // Add this
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          // ... rest of the block definition
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [{ name: "href", type: "url" }],
              },
            ],
          },
        },
        { type: "image", options: { hotspot: true } },
        { type: "videoEmbed" },
      ],
    }),
    defineField({
      name: "contactUrl",
      title: "Contact Button URL",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Gallery Item",
        subtitle: subtitle || "",
        media: media || DocumentIcon,
      };
    },
  },
});
