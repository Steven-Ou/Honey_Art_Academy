import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "logo", title: "Logo", type: "image" }),
    // Replace the old mainNav field with this one
    defineField({
      name: "mainNav",
      title: "Main Navigation",
      description: "Add and reorder links for the main site header.",
      type: "array",
      of: [{ type: "navLink" }], // Use our new, flexible link type
    }),
    // ... (your other fields like socialLinks and copyrightText remain the same)
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
      return { title: "Site Settings" };
    },
  },
});
