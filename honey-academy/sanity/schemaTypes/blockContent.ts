import { defineType, defineArrayMember } from "sanity";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@sanity/icons";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 * {
 * name: 'someName',
 * title: 'Some title',
 * type: 'blockContent'
 * }
 */
export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you set what textual styles there are for blocks.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Heading 5", value: "h5" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          // Correctly adding alignment decorators with icons
          {
            title: "Left Align",
            value: "left",
            icon: TextAlignLeftIcon,
          },
          {
            title: "Center Align",
            value: "center",
            icon: TextAlignCenterIcon,
          },
          {
            title: "Right Align",
            value: "right",
            icon: TextAlignRightIcon,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you have to
    // implement rendering components for them on your frontend!
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
    defineArrayMember({
      type: "videoEmbed",
    }),
  ],
});
