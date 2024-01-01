import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'royalTwitchChannels',
  title: 'Royal Twitch Channels',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'List Name',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active (Live)',
      description:
        'Set to active when this list should be used by the website. If there are multiple royal twitch channel lists, the website will use the first list it finds with this "active" flag on it. So either try to only have one royal twitch channel list or make sure that the one you want served to the live website is the only one with this "active" tag activated.',
      type: 'boolean',
    }),
    defineField({
      name: 'royalTwitchChannelsList',
      title: 'Royal Twitch Channels List',
      description:
        'This is an ordered array, the items will be displayed on the website as ordered here.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Royal Twitch Channel',
          fields: [
            defineField({
              name: 'url',
              title: 'Twitch Channel URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'url',
            },
            prepare(selection) {
              const {title} = selection
              return {title: title.slice(22)}
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      active: 'active',
    },
    prepare(selection) {
      const {title, active} = selection
      return {title: active === true ? `${title} (Active)` : `${title}`}
    },
  },
})
