import { defineType, defineField } from "sanity";

export const videoEmbed = defineType({
  name: "videoEmbed",
  title: "Video Embed",
  type: "object",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube or Vimeo URL",
    }),
  ],
});