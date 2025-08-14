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
      title: "Title / Role",
      type: "string",
      description: 'E.g., "Piano Instructor", "Art Teacher"',
    }),
    // ADD THIS NEW FIELD
    defineField({
      name: "programs",
      title: "Associated Programs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "program" }] }],
      description: "Select the programs this instructor is a part of.",
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
