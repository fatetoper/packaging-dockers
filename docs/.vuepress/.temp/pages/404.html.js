export const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null,
  "rightAnchor": {
    "showDepth": 1,
    "ignore": [
      "/"
    ],
    "expand": {
      "trigger": "hover",
      "clickModeDefaultOpen": true
    },
    "customClass": "your-customClass",
    "isIgnore": false
  }
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
