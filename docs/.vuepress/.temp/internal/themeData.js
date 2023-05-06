export const themeData = {
  "logo": "/imgs/logo.png",
  "lastUpdated": false,
  "navbar": [
    {
      "text": "课程介绍",
      "link": "/intro/"
    },
    {
      "text": "webpack",
      "link": "/base/"
    },
    {
      "text": "vite",
      "link": "/vite/"
    },
    {
      "text": "项目",
      "link": "/project/"
    },
    {
      "text": "原理",
      "link": "/origin/"
    }
  ],
  "sidebar": {
    "/intro/": [
      {
        "text": "课程介绍",
        "children": [
          "/intro/README.md",
          "/intro/pre.md",
          "/intro/learn.md"
        ]
      }
    ],
    "/base/": [
      {
        "text": "webpack",
        "children": [
          "/base/README.md",
          "/base/senior.md"
        ]
      }
    ],
    "/vite/": [
      {
        "text": "vite",
        "children": [
          "/vite/README.md"
        ]
      }
    ],
    "/project/": [
      {
        "text": "项目配置",
        "children": [
          "/project/README.md",
          "/project/vue-cli.md",
          "/project/react-cli.md",
          "/project/vue.md",
          "/project/summary.md"
        ]
      }
    ],
    "/origin/": [
      {
        "text": "原理分析",
        "children": [
          "/origin/README.md",
          "/origin/loader.md",
          "/origin/plugin.md",
          "/origin/summary.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
