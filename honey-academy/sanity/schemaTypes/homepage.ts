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
    defineField({
      name: "about", // Add this new field
      title: "About Section",
      type: "aboutSection",
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "heroSection",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
