import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'communityLinks',
  title: 'Community Links',
  type: 'document',
  fields: [
    defineField({
      name: 'listName',
      title: 'List Name',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active (Live)',
      description:
        'Set to active when this list should be visible on the website. If there are multiple community link lists, the website will use the first list it finds with this "active" flag on it. So either try to only have one community links list or make sure that the one you want served to the live website is the only one with this "active" tag activated.',
      type: 'boolean',
    }),
    defineField({
      name: 'communityLinksList',
      title: 'Community Links List',
      description:
        'This is an ordered array, the links will be displayed on the website as ordered here.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Community Link',
          fields: [
            defineField({
              name: 'name',
              title: 'Link Name',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'listName',
      active: 'active',
    },
    prepare(selection) {
      const {title, active} = selection
      return {title: active === true ? `${title} (Active)` : `${title}`}
    },
  },
})
