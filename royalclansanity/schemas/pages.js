import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      description: 'The page you would like to add to the website.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showInNav',
      title: 'Show in header navigation?',
      description:
        "Select when this page should have a link to it within the main header navigation menu. Otherwise, deselect and the page will still be created and accessible via URL, but it won't have a link in the navigation menu.",
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
})
