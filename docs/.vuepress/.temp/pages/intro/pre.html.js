export const data = {
  "key": "v-10b408dc",
  "path": "/intro/pre.html",
  "title": "学习条件",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前置知识",
      "slug": "前置知识",
      "children": []
    },
    {
      "level": 2,
      "title": "依赖环境",
      "slug": "依赖环境",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "fatetoper",
        "email": "fan2840tao@163.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "intro/pre.md",
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
