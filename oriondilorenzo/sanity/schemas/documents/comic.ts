import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'comic page',
  title: 'Comic Pages',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your comic page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      description:
        'This field is the comic page name at oriondilorenzo.com/organic-intelligence/<name>.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
    }),
    defineField({
      name: 'image',
      title: 'Comic Image',
      description: 'This is the image for the comic page.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'text',
    //   title: 'text',
    //   description: 'This is the text for the comic page.',
    //   type: 'string',
    //   options: { spellCheck: true },
    //   validation: (rule) => rule.required(),
    // }),
  ],
});
