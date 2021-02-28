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

  return {
    // These are all optional, defaults are shown:
    dir: {
      input: "sitecore",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};