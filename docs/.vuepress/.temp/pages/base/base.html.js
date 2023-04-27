export const data = {
  "key": "v-a6cc4bba",
  "path": "/base/base.html",
  "title": "webpack基础",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本使用",
      "slug": "基本使用",
      "children": [
        {
          "level": 3,
          "title": "功能介绍",
          "slug": "功能介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "开始使用",
          "slug": "开始使用",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 启用 Webpack",
          "slug": "_4-启用-webpack",
          "children": []
        },
        {
          "level": 3,
          "title": "5. 观察输出文件",
          "slug": "_5-观察输出文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "fatetoper",
        "email": "fan2840tao@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "base/base.md"
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
