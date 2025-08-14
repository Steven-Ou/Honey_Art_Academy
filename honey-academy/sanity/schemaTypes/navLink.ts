import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const navLink = defineType({
  name: "navLink",
  title: "Navigation Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal Page", value: "internal" },
          { title: "Homepage Section", value: "anchor" },
          { title: "External URL", value: "external" },
        ],
        layout: "radio",
      },
      initialValue: "internal",
    }),
    defineField({
      name: "internalLink",
      title: "Internal Page",
      type: "reference",
      // THIS IS THE FIX: Add 'facilitiesPage' to this list
      to: [
        { type: "aboutPage" },
        { type: "program" },
        { type: "event" },
        { type: "facilitiesPage" },
      ],
      hidden: ({ parent }) => parent?.linkType !== "internal",
    }),
    defineField({
      name: "anchorLink",
      title: "Homepage Section ID",
      type: "string",
      description: 'E.g., "programs" to link to /#programs',
      hidden: ({ parent }) => parent?.linkType !== "anchor",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),
  ],
});
