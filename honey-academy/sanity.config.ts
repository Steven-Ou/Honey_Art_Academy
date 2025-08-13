import { defineConfig } from 'sanity';
// As the deprecation message advises, we use 'structureTool' from 'sanity/structure'
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Import your schema and custom structure
import { schema } from './sanity/schemaTypes';
// Rename your imported structure to avoid name conflicts
import { structure as customStructure } from './sanity/structure'; 

export default defineConfig({
  basePath: '/studio',
  name: 'honey_art_academy',
  title: 'Honey Art Academy',
  projectId: 'mht1q7jc',
  dataset: 'production',

  plugins: [
    // Use the modern 'structureTool'
    structureTool({
      structure: customStructure, 
    }),
    visionTool(),
  ],

  schema,
});