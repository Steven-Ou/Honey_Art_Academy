import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Homepage",
      readOnly: true,
    }),
    // This is the new page builder field
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      description: "Add, edit, and reorder the sections on your homepage.",
      of: [
        { type: "heroSection" },
        { type: "aboutSection" },
        { type: "programsSection" },
        { type: "contactSection" },
        // You can add other section types here in the future
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
