import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
}
