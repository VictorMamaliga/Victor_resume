import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "zt1oa1hr",
    dataset: "production",
    title: "VictorCV",
    apiVersion: "2023-06-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [schemas] },
});

export default config;