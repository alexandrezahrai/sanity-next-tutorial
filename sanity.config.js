import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "m1r6bnqj",
  dataset: "production",
  title: "Sanity + Next.js Tutorial",
  apiVersion: "2023-11-21",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  form: {
    components: {
      input: (props) => {
        if (Array.isArray(props.groups) && props.groups.length > 0) {
          if (props.groups[0].name === "all-fields") {
            props.groups.push(props.groups.shift());
          }
        }
        return props.renderDefault(props);
      },
    },
  }, // move "all-fields" group to end of tabs list
});

export default config;
