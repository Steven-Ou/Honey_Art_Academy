import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const videoEmbed = defineType({
  name: 'videoEmbed',
  title: 'Video Embed',
  type: 'object',
  icon: PlayIcon, // Adds a nice icon
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube or Vimeo URL',
    }),
  ],
  // This part customizes the title you see in the list
  preview: {
    select: {
      url: 'url',
    },
    prepare({url}) {
      return {
        title: 'Video Embed',
        subtitle: url || '(No URL set)',
      }
    },
  },
})