import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
import React from 'react'

export const imageWithCaption = defineType({
  name: 'imageWithCaption',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'A caption that will appear below the image.',
    }),
  ],
  preview: {
    select: {
      // Sanity needs to know the asset is a reference to get the URL
      imageUrl: 'image.asset.url',
      caption: 'caption',
    },
    prepare({imageUrl, caption}) {
      return {
        title: caption || 'Image',
        subtitle: caption ? 'Image with caption' : 'Image',
        media: imageUrl ? <img src={imageUrl} alt={caption || 'Image'} /> : ImageIcon,
      }
    },
  },
})