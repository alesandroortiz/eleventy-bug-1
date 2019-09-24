module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("keep-intact");

    eleventyConfig.addTransform('test', function(content, outputPath) {
        console.info('Transform received:', outputPath);
        return 'This file has been transformed.';
    });
}