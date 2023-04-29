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
```
