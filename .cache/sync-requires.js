// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/messaydenbel/Documents/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/messaydenbel/Documents/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/messaydenbel/Documents/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/messaydenbel/Documents/portfolio/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/messaydenbel/Documents/portfolio/src/pages/page-2.js")),
  "component---src-pages-success-js": preferDefault(require("/Users/messaydenbel/Documents/portfolio/src/pages/success.js"))
}

exports.json = {
  "layout-index.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/404.json"),
  "index.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/index.json"),
  "page-2.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/page-2.json"),
  "success.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/success.json"),
  "404-html.json": require("/Users/messaydenbel/Documents/portfolio/.cache/json/404-html.json")
}