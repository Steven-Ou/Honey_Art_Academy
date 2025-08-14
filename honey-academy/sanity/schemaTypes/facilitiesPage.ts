import { defineField, defineType } from "sanity";
import { CameraIcon } from "@sanity/icons";

export const facilitiesPage = defineType({
  name: "facilitiesPage",
  title: "Facilities Page",
  type: "document",
  icon: CameraIcon,
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
      // We are reusing the imageWithCaption type we already created!
      of: [{ type: "imageWithCaption" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
