const page = {
  title: "Pages",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Copy",
      name: "copy",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default page;
