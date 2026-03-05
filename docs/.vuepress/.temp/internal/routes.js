export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/section1.html", { loader: () => import(/* webpackChunkName: "section1.html" */"/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/section1.html.js"), meta: {"title":"First section!"} }],
  ["/getting-started/", { loader: () => import(/* webpackChunkName: "getting-started_index.html" */"/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/getting-started/index.html.js"), meta: {"title":"Getting started!"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello world"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
