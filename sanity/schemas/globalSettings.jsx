const globalSettings = {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  groups: [
    {
      name: "seo",
      title: "SEO",
      default: true,
    },
    {
      name: "contact",
      title: "Contact",
    },
    {
      name: "all-fields",
      hidden: true,
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      group: "seo",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your site for search engines and social media.",
      group: "seo",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your site.",
      group: "seo",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "string",
      description: "Publish an author and set a reference to them here.",
      title: "Author",
      group: "contact",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      group: "contact",
    },
  ],
};

export default globalSettings;
