import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "mainNav",
      title: "Main Navigation",
      type: "array",
      of: [{ type: "navLink" }],
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    // Add this new field for the map URL
    defineField({
      name: "googleMapsEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description:
        'Go to Google Maps, find the location, click "Share", then "Embed a map", and copy the src URL from the iframe code.',
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
              title: "Platform (e.g., Facebook)",
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
