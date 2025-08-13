import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Import your schema and the custom structure
import { schema } from './sanity/schemaTypes';
import { structure as customStructure } from './sanity/structure'; // Renaming the import here

export default defineConfig({
  basePath: '/studio',
  name: 'honey_art_academy',
  title: 'Honey Art Academy',
  projectId: 'mht1q7jc',
  dataset: 'production',

  plugins: [
    structureTool({
      // Use the renamed custom structure here
      structure: customStructure, 
    }),
    visionTool(),
  ],

  schema,
});