
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/about.js")),
  "component---src-pages-agile-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/agile.js")),
  "component---src-pages-fishbone-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/fishbone.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/index.js")),
  "component---src-pages-joe-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/Joe.js")),
  "component---src-pages-quiz-js": preferDefault(require("/Users/joetargett/Desktop/app/presentation/src/pages/quiz.js"))
}

