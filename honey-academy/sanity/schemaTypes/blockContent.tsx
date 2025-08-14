import React from "react";
import { defineType, defineArrayMember } from "sanity";

// ... (Keep the custom icon components at the top)
const LeftAlignIcon = () => (
  <div style={{ textAlign: "left", width: "100%" }}>L</div>
);
const CenterAlignIcon = () => (
  <div style={{ textAlign: "center", width: "100%" }}>C</div>
);
const RightAlignIcon = () => (
  <div style={{ textAlign: "right", width: "100%" }}>R</div>
);

export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // ... (styles and lists remain the same)
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
          { title: "Underline", value: "underline" },
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
    // REPLACE the old image type with our new custom one
    defineArrayMember({
      type: "imageWithCaption",
    }),
    defineArrayMember({
      type: "videoEmbed",
    }),
  ],
});
