// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-box-mdx": () => import("./../../../../src/components/box.mdx" /* webpackChunkName: "component---src-components-box-mdx" */),
  "component---src-components-button-mdx": () => import("./../../../../src/components/button.mdx" /* webpackChunkName: "component---src-components-button-mdx" */),
  "component---src-components-input-field-mdx": () => import("./../../../../src/components/inputField.mdx" /* webpackChunkName: "component---src-components-input-field-mdx" */),
  "component---src-components-label-mdx": () => import("./../../../../src/components/label.mdx" /* webpackChunkName: "component---src-components-label-mdx" */),
  "component---src-index-mdx": () => import("./../../../../src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

