import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcements',
  title: 'Announcements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline (Title)',
      description: 'The title you would like to display at the top of the announcement.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Click "Generate". The slug appended to the end of the URL to link directly to this announcement.',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Headline Image',
      description:
        'The main image you would like to use for this announcement. (The optimal image ratio is 16:9)',
      type: 'image',
    }),
    defineField({
      name: 'content',
      title: 'Main Content',
      description:
        'The main content you would like to use for this announcement. This section allows you to style text and insert lists, images, and links.',
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
