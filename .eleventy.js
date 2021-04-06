const eleventyVue = require("@11ty/eleventy-plugin-vue");
const InlineCodeManager = require("@11ty/eleventy-assets");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyVue, {

  });

  let myCssManager = new InlineCodeManager();

  eleventyConfig.addPlugin(eleventyVue, {
    // Re-use an existing `eleventy-assets` Manager
    assets: {
      css: myCssManager
    }
  });

  eleventyConfig.addTransform("add-html-doctype", (content, outputPath) => {
    let doctype = "<!DOCTYPE html>\n";
    // If we’re writing to an HTML file and a Doctype does not already exist
    if(outputPath.endsWith(".html") && !content.trim().toLowerCase().startsWith(doctype)) {
      return `${doctype}${content}`;
    }
    return content;
  });

  return {
    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "components",
      data: "_data",
      output: "_site"
    }
  };
};