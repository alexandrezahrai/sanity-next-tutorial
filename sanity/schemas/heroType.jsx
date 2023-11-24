import { DocumentTextIcon } from "@sanity/icons";

const heroType = {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    { name: "heading", type: "string" },
    { name: "tagline", type: "string" },
    {
      name: "image",
      type: "image",
      description: "This image will be used as the background for this section.",
      options: { hotspot: true },
    },
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Hero",
        media: image || DocumentTextIcon,
      };
    },
  },
};

export default heroType;
