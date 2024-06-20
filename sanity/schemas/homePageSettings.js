export const homePageSettings = {
    name: 'homePageSettings',
    type: 'document',
    title: 'Home Page Settings',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
      {
        name: 'sliders',
        type: 'array',
        title: 'Sliders',
        of: [
          {
            type: 'object',
            title: 'Slider',
            fields: [
              {
                name: 'image',
                type: 'image',
                title: 'Image',
                description: 'The image for the slider.',
                options: {
                  hotspot: true, // Enables the user to select a focal point within the image
                },
              },
              {
                name: 'ctaButton',
                type: 'string',
                title: 'Call to Action Button',
                description: 'The text for the call to action button.',
              },
              {
                name: 'ctaLink',
                type: 'url',
                title: 'Call to Action Link',
                description: 'The URL for the call to action button.',
              },
              {
                name: 'headline',
                type: 'string',
                title: 'Headline',
                description: 'The headline for the slider.',
              },
              {
                name: 'description',
                type: 'text',
                title: 'Description',
                description: 'A short description for the slider.',
              },
            ],
          },
        ],
      },
    ],
  };
  