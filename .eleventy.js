module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
        dir: {
            input: "src",
            output: "_site"
        },
        templateFormats: ["html", "md", "liquid","png"],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid"
    };
};
