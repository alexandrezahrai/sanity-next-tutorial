import { editorStyles } from "../editor-styles";
import { EditIcon } from "@sanity/icons";

const content = {
  title: "Content",
  name: "content",
  type: "object",
  fields: [
    {
      name: "editor",
      type: "array",
      of: [
        {
          type: "block",
          styles: editorStyles,
        },
      ],
    },
  ],
  icon: EditIcon,
  preview: {
    select: {
      // title: "content",
      // image: "image",
    },
    prepare({ title, image }) {
      return {
        title: "Content",
        subtitle: "Text Editor",
        media: image || EditIcon,
      };
    },
  },
};

export default content;
