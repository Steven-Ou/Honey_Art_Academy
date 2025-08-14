import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UserIcon,
  fields: [
    // ... other fields
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "storyTitle", title: "Story Title", type: "string" }),
    // UPDATED THIS FIELD
    defineField({
      name: "storyText",
      title: "Story Text",
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
    defineField({ name: "storyImage", title: "Story Image", type: "image" }),
    defineField({
      name: "philosophyTitle",
      title: "Philosophy Title",
      type: "string",
    }),
    // UPDATED THIS FIELD
    defineField({
      name: "philosophyText",
      title: "Philosophy Text",
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
