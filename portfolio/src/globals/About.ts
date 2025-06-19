import type { GlobalConfig } from 'payload'

export const AboutMe: GlobalConfig = {
  slug: 'about-me',
  fields: [
    {
        name: 'naam',
        type: 'text',
        required: true,
    },
    {
        name: 'age',
        type: 'number',
        required: true,
    },
    {
      name: 'bio',
      type: 'text',
      required: true,
    },
    {
        name: 'email',
        type: 'email',
        required: true,
    },
    {
        name: 'profilePicture',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
    {
        name: 'location',
        type: 'text',
        required: true,
    },
  ],
}