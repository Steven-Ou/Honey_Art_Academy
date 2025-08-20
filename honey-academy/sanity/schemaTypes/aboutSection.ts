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
                  { title: "Users", value: "fas fa-user" },
                  { title: "Happy Face", value: "fas fa-smile" },
                  { title: "Child", value: "fas fa-child" },

                  //Place &Things
                  { title: "Building/Campus", value: "fas fa-building" },
                  { title: "Award", value: "fas fa-award" },
                  { title: "Book", value: "fas fa-book-open" },
                  { title: "Music Note", value: "fas fa-music" },
                  { title: "Paintbrush", value: "fas fa-paint-brush" },
                  { title: "Theater Masks", value: "fas fa-theater-masks" },
                  { title: "Trophy", value: "fas fa-trophy" },
                  { title: "Certificate", value: "fas fa-certificate" },
                  { title: "Palette", value: "fas fa-palette" },

                  //Concepts & Actions
                  { title: "Heart", value: "fas fa-heart" },
                  { title: "Star", value: "fas fa-star" },
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
