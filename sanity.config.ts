'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemas/schema'

const structure = (S: any) =>
  S.list()
    .title('Konten')
    .items([
      S.documentTypeListItem('article').title('Artikel'),
      S.documentTypeListItem('category').title('Kategori Artikel'),
      S.documentTypeListItem('station').title('Pos Damkar'),
      S.documentTypeListItem('profilePage').title('Profil Dinas'),
    ])

export default defineConfig({
  name: 'default',
  title: 'Damkar Depok',
  projectId: 'gwxe95ot',
  dataset: 'production',
  basePath: '/studio',

  // Add and edit the content schema in the './sanity/schemas' folder
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
