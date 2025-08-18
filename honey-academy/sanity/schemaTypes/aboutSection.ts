import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section (Homepage)",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'E.g., "About Honey Art Academy"',
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      description: "The main paragraph of text for the about section.",
    }),
    defineField({
      name: "images",
      title: "Image Slideshow",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Add one or more images for the slideshow.",
    }),
    defineField({
      name: "stats",
      title: "Stat Cards",
      type: "array",
      description:
        "The small cards with numbers and labels (e.g., 10+ Instructors).",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            // THIS IS THE UPDATED FIELD
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Select an icon for this stat card.",
              options: {
                list: [
                  //People & Users
                  { title: "Teacher", value: "fas fa-chalkboard-teacher" },
                  { title: "Student", value: "fas fa-user-graduate" },
                  
                  { title: "Happy Face", value: "fas fa-smile" },
                  { title: "Building/Campus", value: "fas fa-building" },
                ],
                layout: "dropdown",
              },
            }),
          ],
          preview: {
            select: {
              title: "number",
              subtitle: "label",
            },
          },
        },
      ],
    }),
  ],
});
