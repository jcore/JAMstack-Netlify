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
};