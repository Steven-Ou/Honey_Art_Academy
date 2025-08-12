import {defineField, defineType} from 'sanity'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})