
const { copyCode } = require("vuepress-plugin-copy-code2");
// const vuepressPluginAnchorRight  = require("vuepress-plugin-anchor-right");

module.exports = {

  // 站点配置
  base: "/webpack5-docs/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/logo.png" }]],
  title: "webpack & vite 教程",
  description: "Webpack5 vite 从小白到大神",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/imgs/logo.png",
    lastUpdated: false,
    navbar: [
      {
        text: "课程介绍",
        link: "/intro/",
      },
      {
        text: "webpack",
        link: "/base/",
      },
      {
        text: "vite",
        link: "/vite/",
      },
      {
        text: "项目",
        link: "/project/",
      },
      {
        text: "原理",
        link: "/origin/",
      },
    ],
    sidebar: {
      "/intro/": [
        {
          text: "课程介绍",
          children: ["/intro/README.md",
           "/intro/pre.md", 
          //  "/intro/group.md",
            "/intro/learn.md"],
        },
      ],
      "/base/": [
        {
          text: "webpack",
          children: [
            "/base/README.md",
            "/base/senior.md"
            // "/base/base.md",
            // "/base/config.md",
            // "/base/development.md",
            // "/base/css.md",
            // "/base/image.md",
            // "/base/output.md",
            // "/base/clean.md",
            // "/base/font.md",
            // "/base/other.md",
            // "/base/javascript.md",
            // "/base/html.md",
            // "/base/server.md",
            // "/base/production.md",
            // "/base/optimizeCss.md",
            // "/base/minifyHtml.md",
            // "/base/summary.md",
          ],
        },
      ],
      "/vite/": [
        {
          text: "vite",
          children: [
            "/vite/README.md", 
          ],
        },
      ],
      "/project/": [
        {
          text: "项目配置",
          children: [
            "/project/README.md",
            "/project/vue-cli.md",
            "/project/react-cli.md", 
            "/project/vue.md",
            "/project/summary.md"
          ],
        },
      ],
      "/origin/": [
        {
          text: "原理分析",
          children: ["/origin/README.md", "/origin/loader.md", "/origin/plugin.md", "/origin/summary.md"],
        },
      ],
    },
  },
  plugins: [
    // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCode({
      // 插件选项
      pure: true,
    }),
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 1,
        ignore: [
          '/',
          // '/api/'
          // 更多...
        ],
        expand: {
          trigger: 'hover',
          clickModeDefaultOpen: true
        },
        customClass: 'your-customClass',
      }
  ],
    [
      "@vuepress/plugin-external-link-icon",
      {
        locales: {
          "/": {
            openInNewWindow: "open in new window",
          },
          "/zh/": {
            openInNewWindow: "在新窗口打开",
          },
        },
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
