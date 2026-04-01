import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'comicPage',
  title: 'Comic Pages',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'name',
      description: 'The name or identifier for this comic page.',
      title: 'Name',
      type: 'string',
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
  ],
});
