import React from "react";
import { defineType, defineArrayMember } from "sanity";

// Custom components to render simple text as icons
const LeftAlignIcon = () => <div style={{ textAlign: "left" }}>L</div>;
const CenterAlignIcon = () => <div style={{ textAlign: "center" }}>C</div>;
const RightAlignIcon = () => <div style={{ textAlign: "right" }}>R</div>;

export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
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
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" }, // <-- ADD THIS LINE
          { title: "Left Align", value: "left", icon: LeftAlignIcon },
          { title: "Center Align", value: "center", icon: CenterAlignIcon },
          { title: "Right Align", value: "right", icon: RightAlignIcon },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [{ title: "URL", name: "href", type: "url" }],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
    defineArrayMember({
      type: "videoEmbed",
    }),
  ],
});
