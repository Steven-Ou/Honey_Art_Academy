import { defineField, defineType } from "sanity";

export const teamSection = defineType({
  name: "teamSection",
  title: "Team Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'E.g., "Meet Our Talented Instructors"',
    }),
    defineField({
      name: "instructors",
      title: "Instructors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "instructor" }] }],
    }),
  ],
});
