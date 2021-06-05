module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
        dir: {
            input: "src",
            output: "_site"
        },
        templateFormats: ["html", "md", "liquid"],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid"
    };
};
