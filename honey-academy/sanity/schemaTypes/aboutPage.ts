import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "storyTitle", title: "Story Title", type: "string" }),
    // Updated to be a rich text editor
    defineField({
      name: "storyText",
      title: "Story Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "storyImage", title: "Story Image", type: "image" }),
    defineField({
      name: "philosophyTitle",
      title: "Philosophy Title",
      type: "string",
    }),
    // Updated to be a rich text editor
    defineField({
      name: "philosophyText",
      title: "Philosophy Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "philosophyImage",
      title: "Philosophy Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
