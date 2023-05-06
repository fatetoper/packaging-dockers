import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-1455d425","/base/",{"title":"webpack基础"},["/base/index.html","/base/README.md"]],
  ["v-508df938","/base/senior.html",{"title":"高级优化"},["/base/senior","/base/senior.md"]],
  ["v-581e5b94","/intro/group.html",{"title":"适合群体"},["/intro/group","/intro/group.md"]],
  ["v-7d0ce4de","/intro/learn.html",{"title":"我能学到什么"},["/intro/learn","/intro/learn.md"]],
  ["v-10b408dc","/intro/pre.html",{"title":"学习条件"},["/intro/pre","/intro/pre.md"]],
  ["v-f9e30908","/intro/",{"title":"前言"},["/intro/index.html","/intro/README.md"]],
  ["v-401e5ce6","/intro/why.html",{"title":"前言"},["/intro/why","/intro/why.md"]],
  ["v-1cfd2df6","/origin/loader.html",{"title":"Loader 原理"},["/origin/loader","/origin/loader.md"]],
  ["v-2d7562d6","/origin/plugin.html",{"title":"Plugin 原理"},["/origin/plugin","/origin/plugin.md"]],
  ["v-2259a8b0","/origin/",{"title":"介绍"},["/origin/index.html","/origin/README.md"]],
  ["v-860cdcba","/origin/summary.html",{"title":"总结"},["/origin/summary","/origin/summary.md"]],
  ["v-61413f94","/project/react-cli.html",{"title":"React 脚手架"},["/project/react-cli","/project/react-cli.md"]],
  ["v-c9bbfba2","/project/",{"title":"介绍"},["/project/index.html","/project/README.md"]],
  ["v-2a04a4a2","/project/summary.html",{"title":"总结"},["/project/summary","/project/summary.md"]],
  ["v-4eb2437c","/project/vue.html",{"title":"Vue 脚手架"},["/project/vue","/project/vue.md"]],
  ["v-7964f787","/senior/enhanceExperience.html",{"title":"提升开发体验"},["/senior/enhanceExperience","/senior/enhanceExperience.md"]],
  ["v-7b858f23","/senior/liftingSpeed.html",{"title":"提升打包构建速度"},["/senior/liftingSpeed","/senior/liftingSpeed.md"]],
  ["v-5489448c","/senior/optimizePerformance.html",{"title":"优化代码运行性能"},["/senior/optimizePerformance","/senior/optimizePerformance.md"]],
  ["v-3fe9ea34","/senior/",{"title":"介绍"},["/senior/index.html","/senior/README.md"]],
  ["v-5460e2da","/senior/reduceVolume.html",{"title":"减少代码体积"},["/senior/reduceVolume","/senior/reduceVolume.md"]],
  ["v-1d695a4e","/senior/summary.html",{"title":"总结"},["/senior/summary","/senior/summary.md"]],
  ["v-157350f2","/vite/",{"title":"基础"},["/vite/index.html","/vite/README.md"]],
  ["v-8c4c0dd0","/base/backup/clean.html",{"title":"自动清空上次打包资源"},["/base/backup/clean","/base/backup/clean.md"]],
  ["v-1cc4aa22","/base/backup/config.html",{"title":"基本配置"},["/base/backup/config","/base/backup/config.md"]],
  ["v-7100e8c4","/base/backup/css.html",{"title":"处理样式资源"},["/base/backup/css","/base/backup/css.md"]],
  ["v-f59b6934","/base/backup/development.html",{"title":"开发模式介绍"},["/base/backup/development","/base/backup/development.md"]],
  ["v-9d102ffc","/base/backup/font.html",{"title":"处理字体图标资源"},["/base/backup/font","/base/backup/font.md"]],
  ["v-c24cb3b4","/base/backup/html.html",{"title":"处理 Html 资源"},["/base/backup/html","/base/backup/html.md"]],
  ["v-d347bd74","/base/backup/image.html",{"title":"处理图片资源"},["/base/backup/image","/base/backup/image.md"]],
  ["v-a950a8b8","/base/backup/javascript.html",{"title":"处理 js 资源"},["/base/backup/javascript","/base/backup/javascript.md"]],
  ["v-771913dc","/base/backup/minifyHtml.html",{"title":"html 压缩"},["/base/backup/minifyHtml","/base/backup/minifyHtml.md"]],
  ["v-91b0a4ca","/base/backup/optimizeCss.html",{"title":"Css 处理"},["/base/backup/optimizeCss","/base/backup/optimizeCss.md"]],
  ["v-3d02d69e","/base/backup/other.html",{"title":"处理其他资源"},["/base/backup/other","/base/backup/other.md"]],
  ["v-812256e0","/base/backup/output.html",{"title":"修改输出资源的名称和路径"},["/base/backup/output","/base/backup/output.md"]],
  ["v-6ae543d8","/base/backup/production.html",{"title":"生产模式介绍"},["/base/backup/production","/base/backup/production.md"]],
  ["v-794950e4","/base/backup/server.html",{"title":"开发服务器&自动化"},["/base/backup/server","/base/backup/server.md"]],
  ["v-5078804a","/base/backup/summary.html",{"title":"总结"},["/base/backup/summary","/base/backup/summary.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-04c1b7cf","/project/vue-cli.html",{"title":"Vue-cli"},["/project/vue-cli","/project/vue-cli.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
