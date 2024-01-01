import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageContents',
  title: 'Page Contents',
  type: 'document',
  fields: [
    defineField({
      name: 'forPage',
      title: 'For Page',
      description: 'The page for which you would like to add content.',
      type: 'reference',
      to: [{type: 'pages'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Headline Image',
      description:
        'The main image you would like to use for this page. (The optimal image ratio is 16:9)',
      type: 'image',
    }),
    defineField({
      name: 'content',
      title: 'Main Content',
      description:
        'The main content you would like to use for this page. This section allows you to style text and insert lists, images, and links.',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      forPage: 'forPage.pageName',
    },
    prepare: ({forPage}) => {
      return {
        title: forPage ? `${forPage} Page Content` : "No 'For Page' selected",
      }
    },
  },
})
