export const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "dates",
      title: "Dates",
      type: "array",
      of: [
        {
          type: "object",
          name: "eventDate",
          title: "Date",
          fields: [
            { title: "Name", name: "name", type: "string" },
            { title: "Description", name: "description", type: "string" },
            {
              title: "Start",
              name: "start",
              type: "datetime",
              options: {
                dateFormat: "MM-DD-YYYY",
                timeFormat: "HH:mm",
                timeStep: 15,
                calendarTodayLabel: "Today",
              },
            },
            {
              title: "End",
              name: "end",
              type: "datetime",
              options: {
                dateFormat: "MM-DD-YYYY",
                timeFormat: "HH:mm",
                timeStep: 15,
                calendarTodayLabel: "Today",
              },
            },
          ],
        },
      ],
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Fundraiser", value: "fundraiser" },
          { title: "Workshop", value: "workshop" },
          { title: "Training", value: "training" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      name: "name",
      media: "mainImage",
    },
    prepare(selection) {
      const { name, media } = selection;
      return {
        title: name,
        media: media,
      };
    },
  },
};
