export const data = {
  "key": "v-1d695a4e",
  "path": "/senior/summary.html",
  "title": "总结",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "fatetoper",
        "email": "fan2840tao@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "senior/summary.md",
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
