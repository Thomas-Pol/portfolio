import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Project name',
      type: 'text',
      required: true,
    },
    {
      name: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'Link gitHub',
      type: 'text',
      required: true,
    },
    {
      name: 'Link live',
      type: 'text',
      required: true,
    },
  ],

}
