module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    return {
        templateFormats: ["html", "md"],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid"
    };
};
