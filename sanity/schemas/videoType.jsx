import { DocumentVideoIcon } from "@sanity/icons";

const videoType = {
  name: 'video',
  type: 'object',
  title: "Video",
  fields: [
    { name: 'videoLabel', type: 'string' },
    { name: 'url', type: 'string', title: 'URL' },
  ],
  icon: DocumentVideoIcon,
  preview: {
    select: {
      title: "videoLabel",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Video",
        media: image || DocumentVideoIcon,
      };
    },
  },
};

export default videoType;
