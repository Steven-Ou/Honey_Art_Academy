import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  icon: DocumentIcon,
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
    // Use the new blockContent type
    defineField({
      name: "content",
      title: "Page Content",
      type: "blockContent",
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
