export const siteSettings = {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  // Use a single object for site-wide settings
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'The name of your site, used in SEO and site-wide branding.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site Description',
      description: 'A short description of your site, used for SEO purposes.',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Site Image',
      description:
        'An image used site-wide, for example, as a default social sharing image.',
    },
    {
      name: 'social',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              description: 'The name of the social media platform.',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'The URL to your profile on this platform.',
            },
          ],
        },
      ],
    },
  ],
}
