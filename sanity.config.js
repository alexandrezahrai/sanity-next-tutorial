import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "m1r6bnqj",
  dataset: "production",
  title: "Sanity + Next.js Tutorial",
  apiVersion: "2023-11-21",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
