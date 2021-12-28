const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Monaco Ui Documentation',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        port: 3301,
        p: 3301,
        root:
          '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Monaco Ui Documentation',
        description: 'My awesome app using docz',
        host: 'localhost',
        separator: '-',
        paths: {
          root:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs',
          templates:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/node_modules/docz-core/dist/templates',
          docz:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz',
          cache:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/.cache',
          app:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/app',
          appPackageJson:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/package.json',
          appTsConfig:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/tsconfig.json',
          gatsbyConfig:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/gatsby-config.js',
          gatsbyBrowser:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/gatsby-browser.js',
          gatsbyNode:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/gatsby-node.js',
          gatsbySSR:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/gatsby-ssr.js',
          importsJs:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/app/imports.js',
          rootJs:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/app/root.jsx',
          indexJs:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/app/index.jsx',
          indexHtml:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/app/index.html',
          db:
            '/Users/shrivardhanlimbkar/Personal/git-repos/monaco-ui/packages/docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
