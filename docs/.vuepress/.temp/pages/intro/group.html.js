export const data = {
  "key": "v-581e5b94",
  "path": "/intro/group.html",
  "title": "适合群体",
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
  "filePathRelative": "intro/group.md",
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
