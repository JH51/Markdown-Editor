const showdown = require('showdown')
const converter = new showdown.Converter()

export default function convertMarkdownToHTML(markdown) {
  return converter.makeHtml(markdown);
}

// const markdown = "# Header1"
// console.log(convertMarkdownToHTML(markdown));