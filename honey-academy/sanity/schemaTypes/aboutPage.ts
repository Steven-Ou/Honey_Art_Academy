import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

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
    // This is the new Page Builder field
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "textWithImageSection" },
        { type: "teamSection" },
        // You can add more section types here in the future
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
