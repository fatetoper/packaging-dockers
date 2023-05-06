<template><h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1>
<h2 id="为什么会有vite" tabindex="-1"><a class="header-anchor" href="#为什么会有vite" aria-hidden="true">#</a> 为什么会有vite</h2>
<p>有了webpack为什么还会有vite的出现？
<strong><code>vite</code> 是一种新型前端构建工具，能够显著提升前端开发体验。</strong>
vite这个词本身是法语，就是快的意思。</p>
<h3 id="现实问题" tabindex="-1"><a class="header-anchor" href="#现实问题" aria-hidden="true">#</a> 现实问题</h3>
<p>当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍，基于 JavaScript 开发的工具就会开始遇到性能瓶颈。</p>
<ul>
<li>缓慢的服务器启动</li>
<li>缓慢的更新</li>
</ul>
<h3 id="vite快的原理" tabindex="-1"><a class="header-anchor" href="#vite快的原理" aria-hidden="true">#</a> vite快的原理</h3>
<p><strong>Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。</strong></p>
<ul>
<li>缓存： 依赖库代码编译结果（node_modules/.vite）、http强缓存（1年）</li>
<li>构建使用golang编辑： 使用 esbuild 预构建依赖，比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。</li>
<li>按需编译： 以 原生 ESM 方式提供源码，只要在浏览器请求源码时进行转换并按需提供源码。</li>
</ul>
<h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2>
<p>它主要由两部分组成：</p>
<ul>
<li>一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。</li>
<li>一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。</li>
</ul>
<p>Vite 提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的可扩展性，并有完整的类型支持。</p>
<h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2>
<h3 id="_1-创建vite项目" tabindex="-1"><a class="header-anchor" href="#_1-创建vite项目" aria-hidden="true">#</a> 1. 创建vite项目</h3>
<p>使用 NPM / Yarn / Pnpm :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">npm</span> / <span class="token function">yarn</span> / <span class="token function">pnpm</span> create vite 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后按照提示操作即可！</p>
<p>或者通过附加的命令行选项直接指定项目名称和你想要使用的模板（以vue为例）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> / <span class="token function">yarn</span> / <span class="token function">pnpm</span> create vite my-vue-app --template vue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看 <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite" target="_blank" rel="noopener noreferrer">create-vite<ExternalLinkIcon/></a> 以获取每个模板的更多细节：vanilla，vanilla-ts, vue, vue-ts，react，react-ts，react-swc，react-swc-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts。</p>
<h3 id="_2-资源目录" tabindex="-1"><a class="header-anchor" href="#_2-资源目录" aria-hidden="true">#</a> 2. 资源目录</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vite_root # 项目根目录（所有指令必须在这个目录运行）
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-指定替代根目录" tabindex="-1"><a class="header-anchor" href="#_3-指定替代根目录" aria-hidden="true">#</a> 3.指定替代根目录</h3>
<p>vite 以当前工作目录作为根目录启动开发服务器。你也可以通过 vite serve some/sub/dir 来指定一个替代的根目录。</p>
<h3 id="_4-命令行界面" tabindex="-1"><a class="header-anchor" href="#_4-命令行界面" aria-hidden="true">#</a> 4.命令行界面</h3>
<p>可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span> <span class="token comment">// 启动开发服务器，别名：`vite dev`，`vite serve`</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span> <span class="token comment">// 为生产环境构建产物</span>
    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span> <span class="token comment">// 本地预览生产构建产物</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="vite自带功能" tabindex="-1"><a class="header-anchor" href="#vite自带功能" aria-hidden="true">#</a> vite自带功能</h2>
<h3 id="npm依赖解析和预构建" tabindex="-1"><a class="header-anchor" href="#npm依赖解析和预构建" aria-hidden="true">#</a> NPM依赖解析和预构建</h3>
<p>？？对比webpack说明</p>
<h3 id="模块热替换-hmr" tabindex="-1"><a class="header-anchor" href="#模块热替换-hmr" aria-hidden="true">#</a> 模块热替换（HMR）</h3>
<p>预先配置了HMR。</p>
<h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3>
<p>Vite 天然支持引入 .ts 文件。可以通过创建一个ts的vite项目进行验证。</p>
<h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h3>
<p>导入 .css 文件将会把内容插入到 <code>&lt;style&gt;</code> 标签中，同时也带有 HMR 支持。也能够以字符串的形式检索处理后的、作为其模块默认导出的 CSS。</p>
<ul>
<li>CSS 预处理器</li>
</ul>
<p>提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。
没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// .scss and .sass
<span class="token function">npm</span> <span class="token function">add</span> -D sass
// .less
<span class="token function">npm</span> <span class="token function">add</span> -D <span class="token function">less</span>
// .styl and .stylus
<span class="token function">npm</span> <span class="token function">add</span> -D stylus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>@import内联</li>
</ul>
<p>通过 postcss-import 预配置支持了 CSS @import 内联 <br/>
<code>变基: </code> <br/>
Vite 的路径别名也遵从 CSS @import。换句话说，所有 CSS url() 引用，即使导入的文件在不同的目录中，也总是自动变基，以确保正确性。?????</p>
<ul>
<li>PostCSS</li>
</ul>
<p>可以使用 vite.config.js  配置。
也可以用 postcss.config.js 配置，它将会自动应用于所有已导入的 CSS。
CSS 最小化压缩将在 PostCSS 之后运行。</p>
<ul>
<li>CSS Modules</li>
</ul>
<p>任何以 .module.css 为后缀名的 CSS 文件都被认为是一个 CSS modules 文件。导入这样的文件会返回一个相应的模块对象：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* example.module.css */</span>
<span class="token selector">.red</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> classes <span class="token keyword">from</span> <span class="token string">'./example.module.css'</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>className <span class="token operator">=</span> classes<span class="token punctuation">.</span>red
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>禁用 CSS 注入页面</li>
</ul>
<p>自动注入 CSS 内容的行为可以通过 ?inline 参数来关闭。在关闭时，被处理过的 CSS 字符串将会作为该模块的默认导出，但样式并没有被注入到页面中。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./foo.css'</span> <span class="token comment">// 样式将会注入页面</span>
<span class="token keyword">import</span> otherStyles <span class="token keyword">from</span> <span class="token string">'./bar.css?inline'</span> <span class="token comment">// 样式不会注入页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h3>
<p>JSON 可以被直接导入 —— 同样支持具名导入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入整个对象</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">'./example.json'</span>
<span class="token comment">// 对一个根字段使用具名导入 —— 有效帮助 treeshaking！</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./example.json'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="静态资源处理" tabindex="-1"><a class="header-anchor" href="#静态资源处理" aria-hidden="true">#</a> 静态资源处理</h3>
<p>导入一个静态资源会返回解析后的 URL：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> imgUrl <span class="token keyword">from</span> <span class="token string">'./img.png'</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'hero-img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>添加一些特殊的查询参数可以更改资源被引入的方式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 显式加载资源为一个 URL</span>
<span class="token keyword">import</span> assetAsURL <span class="token keyword">from</span> <span class="token string">'./asset.js?url'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 以字符串形式加载资源</span>
<span class="token keyword">import</span> assetAsString <span class="token keyword">from</span> <span class="token string">'./shader.glsl?raw'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 加载为 Web Worker</span>
<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">'./worker.js?worker'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在构建时 Web Worker 内联为 base64 字符串</span>
<span class="token keyword">import</span> InlineWorker <span class="token keyword">from</span> <span class="token string">'./worker.js?worker&amp;inline'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="glob-导入" tabindex="-1"><a class="header-anchor" href="#glob-导入" aria-hidden="true">#</a> Glob 导入</h3>
<p>Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./dir/*.js'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。<br/>
如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./dir/*.js'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">eager</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>Glob 导入注意事项</strong><br/>
请注意：</p>
<ul>
<li>这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准</li>
<li>该 Glob 模式会被当成导入标识符：必须是相对路径（以 ./ 开头）或绝对路径（以 / 开头，相对于项目根目录解析）或一个别名路径（请看 resolve.alias 选项)。</li>
<li>Glob 匹配是使用 fast-glob 来实现的 —— 阅读它的文档来查阅 支持的 Glob 模式。</li>
<li>你还需注意，所有 import.meta.glob 的参数都必须以字面量传入。你 不 可以在其中使用变量或表达式</li>
</ul>
<h3 id="动态导入" tabindex="-1"><a class="header-anchor" href="#动态导入" aria-hidden="true">#</a> 动态导入</h3>
<p>和 glob 导入 类似，Vite 也支持带变量的动态导入。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./dir/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意变量仅代表一层深的文件名。如果 file 是 foo/bar，导入将会失败。</p>
<h3 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h3>
<p>.jsx 和 .tsx 文件同样开箱即用。</p>
<h3 id="构建优化" tabindex="-1"><a class="header-anchor" href="#构建优化" aria-hidden="true">#</a> 构建优化</h3>
<blockquote>
<p>下面所罗列的功能会自动应用为构建过程的一部分，除非你想禁用它们，否则没有必要显式配置。</p>
</blockquote>
<ul>
<li>CSS 代码分割</li>
</ul>
<p>Vite 会自动地将一个异步 chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 <code>&lt;link&gt;</code> 标签载入，该异步 chunk 会保证只在 CSS 加载完毕后再执行，避免发生 FOUC 。</p>
<ul>
<li>预加载指令生成</li>
</ul>
<p>会为入口 chunk 和它们在打包出的 HTML 中的直接引入自动生成 <code>&lt;link rel=&quot;modulepreload&quot;&gt;</code> 指令。</p>
<ul>
<li>异步 Chunk 加载优化</li>
</ul>
<p>Vite 的优化会跟踪所有的直接导入，无论导入的深度如何，都能够完全消除不必要的往返。</p>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>
<h3 id="四大核心概念" tabindex="-1"><a class="header-anchor" href="#四大核心概念" aria-hidden="true">#</a> 四大核心概念??</h3>
<ol>
<li>input (入口)
index.html 是该 Vite 项目的入口文件。
Vite 也支持多个 .html 作入口点的 多页面应用模式。</li>
<li>output（输出）
指示 Webpack 打包完的文件输出到哪里去，如何命名等</li>
<li>plugins（插件）
扩展 vite 的功能</li>
<li>mode（模式）</li>
</ol>
<p>主要有两种模式：</p>
<ul>
<li>开发模式：development</li>
<li>生产模式：production</li>
</ul>
<h3 id="vite配置文件" tabindex="-1"><a class="header-anchor" href="#vite配置文件" aria-hidden="true">#</a> vite配置文件</h3>
<blockquote>
<p>vite.config.js</p>
</blockquote>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
import <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> from 'vite';
<span class="token comment">// defineConfig是一个工具函数，不用 jsdoc 注解也可以获取类型提示</span>
<span class="token comment">// 加载环境变量（loadEnv）,loadEnv接收三个参数</span>
<span class="token comment">// 第一个是.env后面的名字，第二个是绝对路径，第三个参数是你环境变量名的前缀，在vite中默认是VITE_。比如loadEnv(‘abc’, process.cwd(), 'ENV');</span>

<span class="token comment">//引入vite扩展插件</span>
import path from 'path';
import vue from '@vitejs/plugin-vue';
const resolve = (dir) => path.resolve(__dirname<span class="token punctuation">,</span> dir);

export default defineConfig((<span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span>) => <span class="token punctuation">{</span>
  const envParams = loadEnv(mode<span class="token punctuation">,</span> __dirname);<span class="token comment">//__dirname表示当前文件所处目录</span>
  return <span class="token punctuation">{</span>
    root<span class="token operator">:</span> resolve('./src')<span class="token punctuation">,</span> <span class="token comment">//  入口index.html，注意入口js应该与index.html 同一目录下（只能写到目录，不能写到具体文件）</span>
    base<span class="token operator">:</span> './'<span class="token punctuation">,</span>
    publicDir<span class="token operator">:</span> resolve('static')<span class="token punctuation">,</span> <span class="token comment">//静态资源文件夹</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
      alias<span class="token operator">:</span> <span class="token punctuation">{</span>
        '@'<span class="token operator">:</span> resolve('src')<span class="token punctuation">,</span> <span class="token comment">//作为 entries 的选项</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      extensions<span class="token operator">:</span> <span class="token punctuation">[</span>'.mjs'<span class="token punctuation">,</span> '.js'<span class="token punctuation">,</span> '.mts'<span class="token punctuation">,</span> '.ts'<span class="token punctuation">,</span> '.jsx'<span class="token punctuation">,</span> '.tsx'<span class="token punctuation">,</span> '.json'<span class="token punctuation">,</span> '.vue'<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 默认选项中没有 .vue</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 反向代理</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      host<span class="token operator">:</span> '<span class="token number">0.0</span>.<span class="token number">0.0</span>'<span class="token punctuation">,</span> <span class="token comment">//服务器ip地址</span>
      port<span class="token operator">:</span> <span class="token number">5566</span><span class="token punctuation">,</span> <span class="token comment">//本地端口</span>
      fs<span class="token operator">:</span> <span class="token punctuation">{</span>
        strict<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  支持引用除入口目录的文件</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// open: true, // 是否自动在浏览器打开</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        '/api'<span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> 'https<span class="token operator">:</span><span class="token comment">//api.test.com/',</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          rewrite<span class="token operator">:</span> (path) => path.replace(/^\/api/<span class="token punctuation">,</span> '')<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      vue()<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    build<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//打包环境移除console.log，debugger</span>
      minify<span class="token operator">:</span> 'terser'<span class="token punctuation">,</span>
      terserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        compress<span class="token operator">:</span> <span class="token punctuation">{</span>
          drop_console<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          drop_debugger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//打包文件按照类型分文件夹显示</span>
      rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        input<span class="token operator">:</span> <span class="token punctuation">{</span>
          login<span class="token operator">:</span> resolve(__dirname<span class="token punctuation">,</span> 'src/login_deployment.html')<span class="token punctuation">,</span>
          main<span class="token operator">:</span> path.resolve(__dirname<span class="token punctuation">,</span> 'src/index.html')<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        output<span class="token operator">:</span> <span class="token punctuation">{</span>
          chunkFileNames<span class="token operator">:</span> 'js/<span class="token punctuation">[</span>name<span class="token punctuation">]</span>-<span class="token punctuation">[</span>hash<span class="token punctuation">]</span>.js'<span class="token punctuation">,</span>
          entryFileNames<span class="token operator">:</span> 'js/<span class="token punctuation">[</span>name<span class="token punctuation">]</span>-<span class="token punctuation">[</span>hash<span class="token punctuation">]</span>.js'<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>;
<span class="token punctuation">}</span>);

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="环境变量与模式" tabindex="-1"><a class="header-anchor" href="#环境变量与模式" aria-hidden="true">#</a> 环境变量与模式</h2>
<h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3>
<p>Vite会把环境变量暴露在一个特殊的对象 <code>import.meta.env</code> 上。</p>
<ul>
<li>这个里有几个默认的内建变量：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span><span class="token operator">:</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>  应用运行的模式。

<span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token operator">:</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>  部署应用时的基本 <span class="token constant">URL</span>。他由base 配置项决定。

<span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PROD</span><span class="token operator">:</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>  应用是否运行在生产环境。

<span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span><span class="token operator">:</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>  <span class="token function">应用是否运行在开发环境</span> <span class="token punctuation">(</span>永远与 <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PROD</span>相反<span class="token punctuation">)</span>。

<span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SSR</span><span class="token operator">:</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>  应用是否运行在 server 上。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>其他变量可以通过 <code>.env</code> 文件进行声明, 但是声明的变量必须以 <code>VITE_</code> 开头</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VITE_DEV_TEST=localhost
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h3>
<p>默认情况下，开发服务器 (dev 命令) 运行在 development (开发) 模式，而 build 命令则运行在 production (生产) 模式。
import.meta.env.MODE的值分别为 <code>development</code> 和 <code>production</code>, 可以根据不同的值进行动态的配置。</p>
<ul>
<li>
<p>运行 <code>vite dev</code> 时, vite 自动加载 <code>.env.development</code> 中的变量</p>
</li>
<li>
<p>运行 <code>vite build</code> 时, vite 自动加载 <code>.env.production</code> 中的变量</p>
</li>
</ul>
<h3 id="env-文件种类" tabindex="-1"><a class="header-anchor" href="#env-文件种类" aria-hidden="true">#</a> .env 文件种类</h3>
<ul>
<li>环境目录（默认是项目根目录）中的下列文件加载额外的环境变量：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>环境加载优先级</strong></p>
<ol>
<li>Vite 执行时设置的环境变量有最高的优先级。例如:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">VITE_SOME_KEY</span><span class="token operator">=</span><span class="token number">123</span> vite build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>用于指定模式的文件（例如 .env.production）</li>
<li>通用配置（例如 .env）。</li>
</ol>
<p><strong>tips:</strong></p>
<blockquote>
<p>.env 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。</p>
</blockquote>
<h3 id="html-环境变量替换" tabindex="-1"><a class="header-anchor" href="#html-环境变量替换" aria-hidden="true">#</a> HTML 环境变量替换</h3>
<p>import.meta.env 中的任何属性都可以通过特殊的 %ENV_NAME% 语法在 HTML 文件中使用：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Vite is running in %MODE%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Using data from %VITE_API_URL%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果环境变量在 import.meta.env 中不存在，比如不存在的 %NON_EXISTENT%，则会将被忽略而不被替换，这与 JS 中的 import.meta.env.NON_EXISTENT 不同，JS 中会被替换为 undefined。</p>
<h2 id="构建生产版本" tabindex="-1"><a class="header-anchor" href="#构建生产版本" aria-hidden="true">#</a> 构建生产版本</h2>
<p>当需要将应用部署到生产环境时，只需运行 vite build 命令。默认情况下，它使用 <code>&lt;root&gt;/index.html</code> 作为其构建入口点，并生成能够静态部署的应用程序包。</p>
<h3 id="浏览器兼容性" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性" aria-hidden="true">#</a> 浏览器兼容性</h3>
<p><strong>vite需求的浏览器环境相对较新，因此存在潜在的兼容问题的。</strong><br>
默认情况下，Vite 的目标是能够 支持 <code>原生 ESM script 标签</code>、支持 <code>原生 ESM 动态导入</code> 和 <code>import.meta</code> 的浏览器：</p>
<ul>
<li><code>Chrome &gt;=87 (2020年底发布)</code></li>
<li><code>Firefox &gt;=78 (2020年中发布)</code></li>
<li><code>Safari &gt;=14 (2020年下半年发布)</code></li>
<li><code>Edge &gt;=88 (2021年初发布)</code></li>
</ul>
<p>你也可以通过 <a href="https://cn.vitejs.dev/config/build-options.html#build-target" target="_blank" rel="noopener noreferrer"><code>build.target</code> 配置项<ExternalLinkIcon/></a> 指定构建目标，最低支持 <code>es2015</code>。</p>
<p>传统浏览器可以通过插件 <code>@vitejs/plugin-legacy</code> 来支持，它将自动生成传统版本的 chunk 及与其相对应 ES 语言特性方面的 polyfill。兼容版的 chunk 只会在不支持原生 ESM 的浏览器中进行按需加载。</p>
<p>默认情况下 Vite 只处理语法转译，且 默认不包含任何 polyfill。 要用 polyfill 需要在 plugin-legacy 插件中进行配置。</p>
<h3 id="公共基础路径" tabindex="-1"><a class="header-anchor" href="#公共基础路径" aria-hidden="true">#</a> 公共基础路径</h3>
<p>如果部署项目时需要指定具体的公共路径，只需指定 base 配置项，然后所有资源的路径都将据此配置重写。<br>
这个选项也可以通过命令行参数指定，例如 vite build --base=/my/public/path/。</p>
<h3 id="多页面应用模式" tabindex="-1"><a class="header-anchor" href="#多页面应用模式" aria-hidden="true">#</a> 多页面应用模式</h3>
<p>假设你有下面这样的项目文件结构</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── package.json
├── vite.config.js
├── index.html
├── main.js
└── nested
    ├── index.html
    └── nested.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在开发过程中，简单地导航或链接到 /nested/ - 将会按预期工作，与正常的静态文件服务器表现一致。</p>
<p>在构建过程中，你只需指定多个 .html 文件作为入口点即可：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">nested</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'nested/index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果你指定了另一个根目录，请记住，在解析输入路径时，__dirname 的值将仍然是 vite.config.js 文件所在的目录。因此，你需要把对应入口文件的 root 的路径添加到 resolve 的参数中。</p>
<h3 id="产物分块策略" tabindex="-1"><a class="header-anchor" href="#产物分块策略" aria-hidden="true">#</a> 产物分块策略</h3>
<p>你可以通过配置 build.rollupOptions.output.manualChunks 来自定义 chunk 分割策略（查看 Rollup 相应文档）。在 Vite 2.8 及更早版本中，默认的策略是将 chunk 分割为 index 和 vendor。这对一些 SPA 来说是好的策略，但是要对所有应用场景提供一种通用解决方案是非常困难的。从 Vite 2.9 起，manualChunks 默认情况下不再被更改。你可以通过在配置文件中添加 splitVendorChunkPlugin 来继续使用 “分割 Vendor Chunk” 策略：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> splitVendorChunkPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">splitVendorChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也可以用一个工厂函数 splitVendorChunk({ cache: SplitVendorChunkCache }) 来提供该策略，在需要与自定义逻辑组合的情况下，cache.reset() 需要在 buildStart 阶段被调用，以便构建的 watch 模式在这种情况下正常工作。</p>
<h2 id="部署静态站点" tabindex="-1"><a class="header-anchor" href="#部署静态站点" aria-hidden="true">#</a> 部署静态站点</h2>
</template>
