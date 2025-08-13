import { defineConfig } from 'sanity';
// The structureTool is now the default export from 'sanity/structure'
import { structure } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Import your schema
import { schema } from './sanity/schemaTypes';
// Import your custom structure
import { structure as customStructure } from './sanity/structure';

export default defineConfig({
  basePath: '/studio',
  name: 'honey_art_academy',
  title: 'Honey Art Academy',
  projectId: 'mht1q7jc',
  dataset: 'production',

  plugins: [
    // Use the structure tool with your custom structure
    structure({
      structure: customStructure,
    }),
    visionTool(),
  ],

  schema,
});