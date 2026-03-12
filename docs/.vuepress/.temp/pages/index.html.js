import comp from "/home/carlos-eduardo/Documents/suporte-ginfo/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Introdução\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1772731843000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1},{\"name\":\"JPLoso\",\"username\":\"JPLoso\",\"email\":\"pedrovelosoj5@gmail.com\",\"commits\":1,\"url\":\"https://github.com/JPLoso\"}],\"changelog\":[{\"hash\":\"87fd68e10d49c57bcb4ae5b466824cfe508a1130\",\"time\":1772731843000,\"email\":\"pedrovelosoj5@gmail.com\",\"author\":\"JPLoso\",\"message\":\"conecting\"},{\"hash\":\"feb567528f00de9d6c235452579e2d75d0c06e62\",\"time\":1772722985000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"minor changes\"}]},\"filePathRelative\":\"index.md\"}")
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
