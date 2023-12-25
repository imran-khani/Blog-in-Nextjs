import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { conf } from '../conf/conf'
export default defineConfig({
  name: 'default',
  title: 'Sanity Blog',

  projectId: conf.sanityProjectId,
  dataset: conf.sanityDataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
