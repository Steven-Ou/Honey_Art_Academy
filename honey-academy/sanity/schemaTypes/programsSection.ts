import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const programsSection = defineType({
  name: "programsSection",
  title: "Programs Section",
  type: "object",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Our Programs",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
    }),
  ],
});
