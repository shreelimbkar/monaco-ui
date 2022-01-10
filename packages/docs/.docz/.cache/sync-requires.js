

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-box-mdx": (preferDefault(require("/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/src/components/box.mdx"))),
  "component---src-components-button-mdx": (preferDefault(require("/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/src/components/button.mdx"))),
  "component---src-components-input-field-mdx": (preferDefault(require("/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/src/components/inputField.mdx"))),
  "component---src-components-label-mdx": (preferDefault(require("/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/src/components/label.mdx"))),
  "component---src-index-mdx": (preferDefault(require("/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/src/index.mdx"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/src/pages/404.js")))
}

