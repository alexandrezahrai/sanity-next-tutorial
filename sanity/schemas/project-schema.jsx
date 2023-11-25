import { editorStyles } from "../editor-styles";

const project = {
  title: "Projects",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
        collapsible: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: editorStyles,
        },
      ],
    },
    {
      title: "Gallery",
      name: "gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // Optional, depends on your image requirements
              },
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption for the image",
            },
          ],
        },
      ],
    },
  ],
};

export default project;
