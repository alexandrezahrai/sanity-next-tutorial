const page = {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    { name: "title", type: "string", description: "This is the title of your page." },
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
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        { name: "hero", type: "hero" },
        { name: "video", type: "video" },
        { name: "gallery", type: "gallery" },
      ],
    },
  ],
};

export default page;

// const page = {
//   title: "Pages",
//   name: "page",
//   type: "document",
//   fields: [
//     {
//       title: "Title",
//       name: "title",
//       type: "string",
//     },
//     {
//       title: "Slug",
//       name: "slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//     },
//     {
//       title: "Copy",
//       name: "copy",
//       type: "array",
//       of: [{ type: "block" }],
//     },
//   ],
// };
//
// export default page;