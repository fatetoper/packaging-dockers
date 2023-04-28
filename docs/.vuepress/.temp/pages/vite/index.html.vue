<template><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h1>
<h2 id="为什么会有vite" tabindex="-1"><a class="header-anchor" href="#为什么会有vite" aria-hidden="true">#</a> 为什么会有vite</h2>
<p>有了webpack为什么还会有vite的出现？
<strong><code>vite</code> 是一种新型前端构建工具，能够显著提升前端开发体验。</strong></p>
<h3 id="现实问题" tabindex="-1"><a class="header-anchor" href="#现实问题" aria-hidden="true">#</a> 现实问题</h3>
<p>当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍，基于 JavaScript 开发的工具就会开始遇到性能瓶颈。</p>
<ul>
<li>缓慢的服务器启动</li>
<li>缓慢的更新</li>
</ul>
<p><strong>Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。</strong></p>
<ul>
<li>使用 esbuild 预构建依赖，比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。</li>
<li>以 原生 ESM 方式提供源码，只要在浏览器请求源码时进行转换并按需提供源码。</li>
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
<ul>
<li>
<p>NPM 依赖解析和预构建</p>
</li>
<li>
<p>模块热替换（HMR）</p>
</li>
</ul>
<p>预先配置了HMR</p>
<ul>
<li>TypeScript</li>
</ul>
<p>Vite 天然支持引入 .ts 文件。</p>
<ul>
<li>JSX</li>
</ul>
<p>.jsx 和 .tsx 文件同样开箱即用。</p>
<ul>
<li>CSS</li>
</ul>
<p>导入 .css 文件将会把内容插入到 <code>&lt;style&gt;</code> 标签中，同时也带有 HMR 支持。也能够以字符串的形式检索处理后的、作为其模块默认导出的 CSS。</p>
<ul>
<li>
<p>JSON</p>
<p>JSON 可以被直接导入 —— 同样支持具名导入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入整个对象</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">'./example.json'</span>
<span class="token comment">// 对一个根字段使用具名导入 —— 有效帮助 treeshaking！</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./example.json'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>静态资源处理</p>
<p>导入一个静态资源会返回解析后的 URL：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> imgUrl <span class="token keyword">from</span> <span class="token string">'./img.png'</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'hero-img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>Glob 导入</p>
</li>
</ul>
<p>Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./dir/*.js'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./dir/*.js'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">eager</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>**Glob 导入注意事项
请注意：</p>
<ul>
<li>
<p>这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准</p>
</li>
<li>
<p>该 Glob 模式会被当成导入标识符：必须是相对路径（以 ./ 开头）或绝对路径（以 / 开头，相对于项目根目录解析）或一个别名路径（请看 resolve.alias 选项)。</p>
</li>
<li>
<p>Glob 匹配是使用 fast-glob 来实现的 —— 阅读它的文档来查阅 支持的 Glob 模式。</p>
</li>
<li>
<p>你还需注意，所有 import.meta.glob 的参数都必须以字面量传入。你 不 可以在其中使用变量或表达式</p>
</li>
<li>
<p>动态导入</p>
</li>
</ul>
<p>和 glob 导入 类似，Vite 也支持带变量的动态导入。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./dir/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意变量仅代表一层深的文件名。如果 file 是 foo/bar，导入将会失败。</p>
<ul>
<li>构建优化</li>
</ul>
<h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2>
<h3 id="四大核心概念" tabindex="-1"><a class="header-anchor" href="#四大核心概念" aria-hidden="true">#</a> 四大核心概念</h3>
<ol>
<li>input (入口)</li>
</ol>
<p>index.html 是该 Vite 项目的入口文件。
Vite 也支持多个 .html 作入口点的 多页面应用模式。</p>
<ol start="2">
<li>output（输出）</li>
</ol>
<p>指示 Webpack 打包完的文件输出到哪里去，如何命名等</p>
<ol start="4">
<li>plugins（插件）</li>
</ol>
<p>扩展 vite 的功能</p>
<ol start="5">
<li>mode（模式）</li>
</ol>
<p>主要由两种模式：</p>
<ul>
<li>开发模式：development</li>
<li>生产模式：production</li>
</ul>
</template>
