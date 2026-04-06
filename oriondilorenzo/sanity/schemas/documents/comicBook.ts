import { defineArrayMember, defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'comic',
  title: 'Comic Books',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'The title of the comic book.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      description: 'The URL slug for this comic book.',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'A brief description of the comic book.',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description: 'The cover image displayed in the comics list.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pages',
      title: 'Comic Pages',
      description: 'Add comic page images in order.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'page',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { image: 'image' },
            prepare({ image }) {
              return {
                title: 'Comic Page',
                media: image,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'minSize',
      title: 'Minimum Width',
      description: 'Minimum width of the flipbook in pixels (default at all breakpoints unless overridden).',
      type: 'number',
      validation: (rule) => rule.required().min(100),
      initialValue: 300,
    }),
    defineField({
      name: 'maxSize',
      title: 'Maximum Width',
      description: 'Maximum width of the flipbook in pixels (default at all breakpoints unless overridden).',
      type: 'number',
      validation: (rule) => rule.required().min(100),
      initialValue: 1000,
    }),
    defineField({
      name: 'mobileMinSize',
      title: 'Mobile Minimum Width',
      description: '(Optional) Minimum width on mobile devices. Leave empty to use default minSize.',
      type: 'number',
      validation: (rule) => rule.min(100),
    }),
    defineField({
      name: 'mobileMaxSize',
      title: 'Mobile Maximum Width',
      description: '(Optional) Maximum width on mobile devices. Leave empty to use default maxSize.',
      type: 'number',
      validation: (rule) => rule.min(100),
    }),
    defineField({
      name: 'showCover',
      title: 'Show Cover',
      description: 'Display a cover page at the start of the flipbook.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'flippingTime',
      title: 'Flipping Duration',
      description: 'Duration of page flip animation in milliseconds.',
      type: 'number',
      validation: (rule) => rule.required().min(0),
      initialValue: 1000,
    }),
    defineField({
      name: 'mobileScrollSupport',
      title: 'Mobile Scroll Support',
      description: 'Enable scroll-based page navigation on mobile devices.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
});
