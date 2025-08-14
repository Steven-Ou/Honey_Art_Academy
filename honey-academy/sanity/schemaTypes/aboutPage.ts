import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

// Ensure the constant name matches the export and what's being imported in index.ts
export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      description:
        "The title of the page, used for internal reference in the Studio.",
      type: "string",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "textWithImageSection" },
        { type: "teamSection" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "About Page",
      };
    },
  },
});
