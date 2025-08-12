import { type SchemaTypeDefinition } from 'sanity'
import { program } from './program'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [program],
}