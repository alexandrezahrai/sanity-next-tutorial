
const page = {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Click 'Generate' to create a slug based on the title.",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "hero",
      type: "hero",
      options: {
        collapsible: true,
      }
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        { name: "video", type: "video" },
        { name: "gallery", type: "gallery" },
        { name: "content", type: "content" },
      ],
    },
  ],
};

export default page;
