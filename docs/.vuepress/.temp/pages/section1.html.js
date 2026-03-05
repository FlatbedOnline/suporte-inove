import comp from "/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/section1.html.vue"
const data = JSON.parse("{\"path\":\"/section1.html\",\"title\":\"First section!\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1772720478000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"651339221fe6884b247bc62898842ccd37af7f41\",\"time\":1772720478000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"test\"}]},\"filePathRelative\":\"section1.md\"}")
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
