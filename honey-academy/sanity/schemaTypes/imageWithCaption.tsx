import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";
import React from "react"; // Make sure this import is here

export const imageWithCaption = defineType({
  name: "imageWithCaption",
  title: "Image with Caption",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  preview: {
    select: {
      imageUrl: "image.asset.url",
      caption: "caption",
    },
    prepare({ imageUrl, caption }) {
      return {
        title: caption || "Image",
        subtitle: caption ? "Image with caption" : "Image",
        media: imageUrl ? (
          <img src={imageUrl} alt={caption || "Image"} />
        ) : (
          ImageIcon
        ),
      };
    },
  },
});
