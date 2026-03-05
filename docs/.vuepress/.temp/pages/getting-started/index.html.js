import comp from "/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/getting-started/index.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started/\",\"title\":\"Getting started!\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"getting-started/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
