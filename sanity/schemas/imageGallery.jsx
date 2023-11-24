import { ImagesIcon } from "@sanity/icons";

const imageGalleryType = {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  icon: ImagesIcon,
  preview: {
    select: {
      // title: "gallery",
      images: "images",
    },
    prepare({ images }) {
      const numberOfImages = images.length || 0;
      return {
        title: `${numberOfImages} ${numberOfImages === 1 ? "image" : "images"}`,
        subtitle: "Gallery",
        media: ImagesIcon,
      };
    },
  },
};

export default imageGalleryType;
