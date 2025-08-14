import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons"; // Change CameraIcon to ImagesIcon

export const facilitiesPage = defineType({
  name: "facilitiesPage",
  title: "Facilities Page",
  type: "document",
  icon: ImagesIcon, // Use the correct icon here
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Our Facilities",
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      description: "Add all the pictures for the facilities page here.",
      type: "array",
      of: [{ type: "imageWithCaption" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
