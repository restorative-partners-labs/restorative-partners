export const staff = {
  name: "staff",
  title: "Staff",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "array",
      of: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
      ],
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Staff", value: "staff" },
          { title: "Board of Director", value: "board" },
          { title: "Volunteer", value: "volunteer" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "phoneExt",
      title: "Phone Extension",
      type: "string",
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
      name: "image",
      title: "Image",
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
      name: "bio",
      title: "Bio",
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
      firstName: "firstName",
      media: "image",
      lastName: "lastName",
      role: "role"
    },
    prepare(selection) {
      const { firstName, media, lastName, role } = selection;
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${role[0]}`,
        media: media,
      };
    },
  },
};
