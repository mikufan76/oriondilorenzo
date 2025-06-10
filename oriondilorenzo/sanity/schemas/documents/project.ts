import { ImageIcon, PlayIcon, StarIcon, TextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: StarIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      description:
        'This field is the project page name at yourwebsite.com/projects/<name>.',
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
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to Home page, this is the image displayed in the list within the homepage.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for project subheader, and the <meta> description tag for SEO.',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      description:
        'This image will be used as the Icon image for table of contents',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'site',
      title: 'Project Site',
      description: 'Link to the project site, if applicable.',
      type: 'url',
      validation: (rule) => rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      description: 'Images to be used in the project gallery.',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Single Image',
          name: 'singleImage',
          type: 'object',
          icon: ImageIcon,
          fields: [
            {
              title: 'Photo',
              name: 'photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              photo: 'photo',
            },
            prepare({ photo }) {
              return {
                title: 'Single image',
                media: photo,
              }
            },
          },
        }),
      ],
    }),
  ],
})
