import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const instructor = defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title / Instrument",
      type: "string",
      description: 'E.g., "Piano Instructor", "Art Teacher"',
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
  },
});
