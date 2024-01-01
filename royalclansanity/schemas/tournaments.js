import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tournaments',
  title: 'Tournaments',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline (Title)',
      description: 'The title you would like to display at the top of the tournament.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Click "Generate". The slug appended to the end of the URL to link directly to this tournament.',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date/Time',
      description:
        'The starting date/time for this tournament. It will automatically be converted to the local timezone of the user visiting the website.',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date/Time (UTC/GMT)',
      description:
        'The ending date/time for this tournament. It will automatically be converted to the local timezone of the user visiting the website.',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Headline Image',
      description:
        'The main image you would like to use for this tournament. (The optimal image ratio is 16:9)',
      type: 'image',
    }),
    defineField({
      name: 'content',
      title: 'Main Content',
      description:
        'The main content you would like to use for this tournament. This section allows you to style text and insert lists, images, and links.',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image.asset',
    },
  },
})
