import type { SchemaTypeDefinition } from 'sanity'

import category from './category'
import article from './article'
import profilePage from './profilePage'
import station from './station'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, article, profilePage, station],
}
