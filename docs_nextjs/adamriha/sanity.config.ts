import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "fisicxqr",
    dataset: "production",
    title: "Adam Next Web",
    apiVersion: "2023-09-28",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;