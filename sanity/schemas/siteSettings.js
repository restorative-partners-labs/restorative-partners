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
      description: 'An image used site-wide, for example, as a default social sharing image.',
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
    {
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Type',
              description: 'The type of contact information (email, phone, fax).',
              options: {
                list: [
                  { title: 'Email', value: 'email' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Fax', value: 'fax' },
                ],
              },
            },
            {
              name: 'department',
              type: 'string',
              title: 'Department',
              description: 'The department this contact is associated with.',
              options: {
                list: [
                  { title: 'In-Custody', value: 'In-Custody' },
                  { title: 'Mentorship', value: 'Mentorship' },
                  { title: 'Housing', value: 'Housing' },
                  { title: 'Treatment Services', value: 'Treatment Services' },
                  { title: 'Events', value: 'Events' },
                  { title: 'Careers', value: 'Careers' },
                  { title: 'Volunteer', value: 'Volunteer' },
                  { title: 'System Navigation', value: 'System Navigation' },
                  { title: 'Juvenile Hall', value: 'Juvenile Hall' },
                ],
              },
            },
            {
              name: 'value',
              type: 'string',
              title: 'Value',
              description: 'The contact information value (e.g., email address, phone number).',
            },
          ],
        },
      ],
    },
  ],
};
