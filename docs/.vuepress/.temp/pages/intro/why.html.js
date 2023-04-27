export const data = {
  "key": "v-401e5ce6",
  "path": "/intro/why.html",
  "title": "前言",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么需要打包工具？",
      "slug": "为什么需要打包工具",
      "children": []
    },
    {
      "level": 2,
      "title": "有哪些打包工具？",
      "slug": "有哪些打包工具",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "intro/why.md"
}

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
