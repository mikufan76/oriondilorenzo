import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'This is your title for Links page that will be displayed in the header of your website.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linksLinks',
      title: 'External links',
      description:
        '(Optional) Here you can add a list of external links, it will be displayed below your About description text.',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'navLink',
          type: 'object',
          icon: LinkIcon,
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              description: 'Display Text',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
              description: 'enter an external URL',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            },
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare({ title, url }) {
              return {
                title: title,
                subtitle: url,
                media: LinkIcon,
              };
            },
          },
        },
      ],
    }),
  ],
});
