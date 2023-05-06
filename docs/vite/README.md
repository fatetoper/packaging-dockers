# 基础

## 为什么会有vite

有了webpack为什么还会有vite的出现？
**`vite` 是一种新型前端构建工具，能够显著提升前端开发体验。**
vite这个词本身是法语，就是快的意思。

### 现实问题

当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍，基于 JavaScript 开发的工具就会开始遇到性能瓶颈。

- 缓慢的服务器启动
- 缓慢的更新

### vite快的原理

**Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。**

- 缓存： 依赖库代码编译结果（node_modules/.vite）、http强缓存（1年）
- 构建使用golang编辑： 使用 esbuild 预构建依赖，比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。
- 按需编译： 以 原生 ESM 方式提供源码，只要在浏览器请求源码时进行转换并按需提供源码。

## 功能介绍

它主要由两部分组成：

- 一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。
- 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

Vite 提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的可扩展性，并有完整的类型支持。

## 开始使用

### 1. 创建vite项目

使用 NPM / Yarn / Pnpm :

``` shell
  npm / yarn / pnpm create vite 
```

然后按照提示操作即可！

或者通过附加的命令行选项直接指定项目名称和你想要使用的模板（以vue为例）。

``` shell
npm / yarn / pnpm create vite my-vue-app --template vue
```

查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节：vanilla，vanilla-ts, vue, vue-ts，react，react-ts，react-swc，react-swc-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts。

### 2. 资源目录

``` text
vite_root # 项目根目录（所有指令必须在这个目录运行）
    |-- src # 项目源码目录
        |-- App.vue # vue入口文件
        |-- main.js # 项目主文件
        |-- style.css  # 全局css
        |-- assets # 项目静态资源目录
        |-- components # 组件目录
    |-- .gitignore 
    |-- index.html #  Vite 项目的入口文件
    |-- package.json
    |-- README.md
    |-- vite.config.js # vite配置文件
    |-- public 
```

### 3.指定替代根目录

vite 以当前工作目录作为根目录启动开发服务器。你也可以通过 vite serve some/sub/dir 来指定一个替代的根目录。

### 4.命令行界面

可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：

``` json
{
  "scripts": {
    "dev": "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
    "build": "vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  }
}
```

## vite自带功能

### NPM依赖解析和预构建

 ？？对比webpack说明

### 模块热替换（HMR） 

 预先配置了HMR。

### TypeScript

Vite 天然支持引入 .ts 文件。可以通过创建一个ts的vite项目进行验证。

### CSS

导入 .css 文件将会把内容插入到 `<style>` 标签中，同时也带有 HMR 支持。也能够以字符串的形式检索处理后的、作为其模块默认导出的 CSS。

- CSS 预处理器

提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。
  没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：

```shell
// .scss and .sass
npm add -D sass
// .less
npm add -D less
// .styl and .stylus
npm add -D stylus
```

- @import内联

通过 postcss-import 预配置支持了 CSS @import 内联 <br/>
`变基: ` <br/>
Vite 的路径别名也遵从 CSS @import。换句话说，所有 CSS url() 引用，即使导入的文件在不同的目录中，也总是自动变基，以确保正确性。?????

- PostCSS

可以使用 vite.config.js  配置。
也可以用 postcss.config.js 配置，它将会自动应用于所有已导入的 CSS。
CSS 最小化压缩将在 PostCSS 之后运行。

- CSS Modules

任何以 .module.css 为后缀名的 CSS 文件都被认为是一个 CSS modules 文件。导入这样的文件会返回一个相应的模块对象：

```css
/* example.module.css */
.red {
  color: red;
}
```

```js
import classes from './example.module.css'
document.getElementById('foo').className = classes.red
```

- 禁用 CSS 注入页面

自动注入 CSS 内容的行为可以通过 ?inline 参数来关闭。在关闭时，被处理过的 CSS 字符串将会作为该模块的默认导出，但样式并没有被注入到页面中。

```js
import './foo.css' // 样式将会注入页面
import otherStyles from './bar.css?inline' // 样式不会注入页面
```

### JSON

  JSON 可以被直接导入 —— 同样支持具名导入：

  ```javascript
  // 导入整个对象
  import json from './example.json'
  // 对一个根字段使用具名导入 —— 有效帮助 treeshaking！
  import { field } from './example.json'
  ```

### 静态资源处理

  导入一个静态资源会返回解析后的 URL：

  ```javascript
  import imgUrl from './img.png'
  document.getElementById('hero-img').src = imgUrl
  ```

添加一些特殊的查询参数可以更改资源被引入的方式：

```javascript
// 显式加载资源为一个 URL
import assetAsURL from './asset.js?url'
```

```javascript
// 以字符串形式加载资源
import assetAsString from './shader.glsl?raw'
```

```javascript
// 加载为 Web Worker
import Worker from './worker.js?worker'
```

```javascript
// 在构建时 Web Worker 内联为 base64 字符串
import InlineWorker from './worker.js?worker&inline'
```

### Glob 导入

Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：

```javascript
const modules = import.meta.glob('./dir/*.js')
```

匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。<br/>
如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：

```javascript
const modules = import.meta.glob('./dir/*.js', { eager: true })
```

**Glob 导入注意事项**<br/>
请注意：

- 这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准
- 该 Glob 模式会被当成导入标识符：必须是相对路径（以 ./ 开头）或绝对路径（以 / 开头，相对于项目根目录解析）或一个别名路径（请看 resolve.alias 选项)。
- Glob 匹配是使用 fast-glob 来实现的 —— 阅读它的文档来查阅 支持的 Glob 模式。
- 你还需注意，所有 import.meta.glob 的参数都必须以字面量传入。你 不 可以在其中使用变量或表达式

### 动态导入

和 glob 导入 类似，Vite 也支持带变量的动态导入。

```javascript
const module = await import(`./dir/${file}.js`)
```

注意变量仅代表一层深的文件名。如果 file 是 foo/bar，导入将会失败。

### JSX

.jsx 和 .tsx 文件同样开箱即用。

### 构建优化

> 下面所罗列的功能会自动应用为构建过程的一部分，除非你想禁用它们，否则没有必要显式配置。

- CSS 代码分割

Vite 会自动地将一个异步 chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 `<link>` 标签载入，该异步 chunk 会保证只在 CSS 加载完毕后再执行，避免发生 FOUC 。

- 预加载指令生成

会为入口 chunk 和它们在打包出的 HTML 中的直接引入自动生成 `<link rel="modulepreload">` 指令。

- 异步 Chunk 加载优化

Vite 的优化会跟踪所有的直接导入，无论导入的深度如何，都能够完全消除不必要的往返。

## 基本配置

### 四大核心概念??

1. input (入口)
index.html 是该 Vite 项目的入口文件。
Vite 也支持多个 .html 作入口点的 多页面应用模式。
2. output（输出）
指示 Webpack 打包完的文件输出到哪里去，如何命名等
3. plugins（插件）
扩展 vite 的功能
4. mode（模式）

主要有两种模式：

- 开发模式：development
- 生产模式：production

### vite配置文件

> vite.config.js

```json

import { defineConfig, loadEnv } from 'vite';
// defineConfig是一个工具函数，不用 jsdoc 注解也可以获取类型提示
// 加载环境变量（loadEnv）,loadEnv接收三个参数
// 第一个是.env后面的名字，第二个是绝对路径，第三个参数是你环境变量名的前缀，在vite中默认是VITE_。比如loadEnv(‘abc’, process.cwd(), 'ENV');

//引入vite扩展插件
import path from 'path';
import vue from '@vitejs/plugin-vue';
const resolve = (dir) => path.resolve(__dirname, dir);

export default defineConfig(({ command, mode }) => {
  const envParams = loadEnv(mode, __dirname);//__dirname表示当前文件所处目录
  return {
    root: resolve('./src'), //  入口index.html，注意入口js应该与index.html 同一目录下（只能写到目录，不能写到具体文件）
    base: './',
    publicDir: resolve('static'), //静态资源文件夹
    resolve: {
      alias: {
        '@': resolve('src'), //作为 entries 的选项
      },
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'], // 默认选项中没有 .vue
    },
    // 反向代理
    server: {
      host: '0.0.0.0', //服务器ip地址
      port: 5566, //本地端口
      fs: {
        strict: false, //  支持引用除入口目录的文件
      },
      // open: true, // 是否自动在浏览器打开
      proxy: {
        '/api': {
          target: 'https://api.test.com/',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue(),
    ],
    build: {
      //打包环境移除console.log，debugger
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      //打包文件按照类型分文件夹显示
      rollupOptions: {
        input: {
          login: resolve(__dirname, 'src/login_deployment.html'),
          main: path.resolve(__dirname, 'src/index.html'),
        },
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
        },
      },
    },
  };
});

```

## 环境变量与模式

### 环境变量

Vite会把环境变量暴露在一个特殊的对象 `import.meta.env` 上。

- 这个里有几个默认的内建变量：

```javascript
import.meta.env.MODE: {string}  应用运行的模式。

import.meta.env.BASE_URL: {string}  部署应用时的基本 URL。他由base 配置项决定。

import.meta.env.PROD: {boolean}  应用是否运行在生产环境。

import.meta.env.DEV: {boolean}  应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。

import.meta.env.SSR: {boolean}  应用是否运行在 server 上。
```

- 其他变量可以通过 `.env` 文件进行声明, 但是声明的变量必须以 `VITE_` 开头

```.env
VITE_DEV_TEST=localhost
```

### 模式

默认情况下，开发服务器 (dev 命令) 运行在 development (开发) 模式，而 build 命令则运行在 production (生产) 模式。
import.meta.env.MODE的值分别为 `development` 和 `production`, 可以根据不同的值进行动态的配置。

- 运行 `vite dev` 时, vite 自动加载 `.env.development` 中的变量

- 运行 `vite build` 时, vite 自动加载 `.env.production` 中的变量

### .env 文件种类

- 环境目录（默认是项目根目录）中的下列文件加载额外的环境变量：

```text
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

**环境加载优先级**

1. Vite 执行时设置的环境变量有最高的优先级。例如:

```bash
VITE_SOME_KEY=123 vite build
```

2. 用于指定模式的文件（例如 .env.production）
3. 通用配置（例如 .env）。

**tips:**

> .env 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。

### HTML 环境变量替换

import.meta.env 中的任何属性都可以通过特殊的 %ENV_NAME% 语法在 HTML 文件中使用：

```html
<h1>Vite is running in %MODE%</h1>
<p>Using data from %VITE_API_URL%</p>
```

如果环境变量在 import.meta.env 中不存在，比如不存在的 %NON_EXISTENT%，则会将被忽略而不被替换，这与 JS 中的 import.meta.env.NON_EXISTENT 不同，JS 中会被替换为 undefined。

## 构建生产版本

当需要将应用部署到生产环境时，只需运行 vite build 命令。默认情况下，它使用 `<root>/index.html` 作为其构建入口点，并生成能够静态部署的应用程序包。

### 浏览器兼容性

**vite需求的浏览器环境相对较新，因此存在潜在的兼容问题的。**  
默认情况下，Vite 的目标是能够 支持 `原生 ESM script 标签`、支持 `原生 ESM 动态导入` 和 `import.meta` 的浏览器：

- `Chrome >=87 (2020年底发布)`
- `Firefox >=78 (2020年中发布)`
- `Safari >=14 (2020年下半年发布)`
- `Edge >=88 (2021年初发布)`

你也可以通过 [`build.target` 配置项](https://cn.vitejs.dev/config/build-options.html#build-target) 指定构建目标，最低支持 `es2015`。

传统浏览器可以通过插件 `@vitejs/plugin-legacy` 来支持，它将自动生成传统版本的 chunk 及与其相对应 ES 语言特性方面的 polyfill。兼容版的 chunk 只会在不支持原生 ESM 的浏览器中进行按需加载。

默认情况下 Vite 只处理语法转译，且 默认不包含任何 polyfill。 要用 polyfill 需要在 plugin-legacy 插件中进行配置。

### 公共基础路径

如果部署项目时需要指定具体的公共路径，只需指定 base 配置项，然后所有资源的路径都将据此配置重写。  
这个选项也可以通过命令行参数指定，例如 vite build --base=/my/public/path/。

### 多页面应用模式

假设你有下面这样的项目文件结构

```text
├── package.json
├── vite.config.js
├── index.html
├── main.js
└── nested
    ├── index.html
    └── nested.js
```

在开发过程中，简单地导航或链接到 /nested/ - 将会按预期工作，与正常的静态文件服务器表现一致。

在构建过程中，你只需指定多个 .html 文件作为入口点即可：

```js
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})
```

如果你指定了另一个根目录，请记住，在解析输入路径时，__dirname 的值将仍然是 vite.config.js 文件所在的目录。因此，你需要把对应入口文件的 root 的路径添加到 resolve 的参数中。

### 产物分块策略

你可以通过配置 build.rollupOptions.output.manualChunks 来自定义 chunk 分割策略（查看 Rollup 相应文档）。在 Vite 2.8 及更早版本中，默认的策略是将 chunk 分割为 index 和 vendor。这对一些 SPA 来说是好的策略，但是要对所有应用场景提供一种通用解决方案是非常困难的。从 Vite 2.9 起，manualChunks 默认情况下不再被更改。你可以通过在配置文件中添加 splitVendorChunkPlugin 来继续使用 “分割 Vendor Chunk” 策略：

```js
// vite.config.js
import { splitVendorChunkPlugin } from 'vite'
export default defineConfig({
  plugins: [splitVendorChunkPlugin()],
})
```

也可以用一个工厂函数 splitVendorChunk({ cache: SplitVendorChunkCache }) 来提供该策略，在需要与自定义逻辑组合的情况下，cache.reset() 需要在 buildStart 阶段被调用，以便构建的 watch 模式在这种情况下正常工作。

## 部署静态站点

