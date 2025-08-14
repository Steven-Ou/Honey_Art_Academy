import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The main logo to display in the header.",
    }),
    defineField({
      name: "mainNav",
      title: "Main Navigation",
      description: "Select pages or events to show in the main navigation bar.",
      type: "array",
      of: [
        // This allows linking to different types of content
        { type: "reference", to: [{ type: "program" }] },
        { type: "reference", to: [{ type: "event" }] },
        { type: "reference", to: [{ type: "aboutPage" }] },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Footer Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform (e.g., Facebook, Instagram)",
            },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Footer Copyright Text",
      type: "string",
      initialValue: `© ${new Date().getFullYear()} Honey Art Academy. All rights reserved.`,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
