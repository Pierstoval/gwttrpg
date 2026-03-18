import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
    pathPrefix: "/gwttrpg/",
}
