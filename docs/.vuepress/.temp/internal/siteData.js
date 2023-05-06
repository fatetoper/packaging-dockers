export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "webpack & vite 教程",
  "description": "Webpack5 vite 从小白到大神",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/imgs/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
