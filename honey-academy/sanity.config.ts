import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; 
import { visionTool } from "@sanity/vision";

// Import your schema and custom structure
import { schema } from "./sanity/schemaTypes";
import { structure as customStructure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  name: "honey_art_academy",
  title: "Honey Art Academy",
  projectId: "mht1q7jc",
  dataset: "production",

  plugins: [
    // Correctly use structureTool
    structureTool({
      structure: customStructure,
    }),
    visionTool(),
  ],

  schema,
});
