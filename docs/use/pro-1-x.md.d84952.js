(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{822:function(n,s){n.exports={content:["article",["blockquote",["p","蚂蚁金服用户同学可直接查看 ",["a",{title:null,href:"https://docs.antfin.com/basement/bigfish/newpage"},"Bigfish 的新增页面"]]],["p",["a",{title:null,href:"https://pro.ant.design"},"Ant Design pro"]," 是 Ant Design 推出的一个开箱即用的中台前端/设计解决方案。"],["p","基本配置请查看 ",["a",{title:null,href:"docs/use/getting-started"},"开始使用"],";"],["h2","文件路径"],["p",["a",{title:null,href:"https://pro.ant.design"},"Ant Design pro"]," 使用的为 dva 脚手架，文件目录同样为 ",["code","src/routes"],", 首先我们需要将下载的 Home 文件包直接复制到 routes 文件夹下。"],["h2","修改路由"],["p","我们提供了两种方案： 1. 直接新增页面。 2. 更改 pro 的主路由。详细请查看下方；"],["h3","直接新增页面"],["p","复制完成后，首页我们在顶部引入 Home, 命名为 IndexPage。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> IndexPage <span class="token keyword">from</span> <span class="token string">\'./routes/Home\'</span><span class="token punctuation">;</span>'},["code","import IndexPage from './routes/Home';"]],["p","然后在 pro 的路由上添加 \bRoute, 由于 pro 占了 ",["code","/"]," 主路由，我们将 path 设为 ",["code","/home"]," 即可。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">function</span> <span class="token function">RouterConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span> history<span class="token punctuation">,</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> routerData <span class="token operator">=</span> <span class="token function">getRouterData</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> UserLayout <span class="token operator">=</span> routerData<span class="token punctuation">[</span><span class="token string">\'/user\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>component<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> BasicLayout <span class="token operator">=</span> routerData<span class="token punctuation">[</span><span class="token string">\'/\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>component<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConnectedRouter</span> <span class="token attr-name">history</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span><span class="token punctuation">></span></span>\n<span class="token operator">+</span>         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>IndexPage<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>  <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* 增加在此处 */</span><span class="token punctuation">}</span> \n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>UserLayout<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AuthorizedRoute</span>\n            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span>\n            <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>BasicLayout <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n            authority<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">,</span> <span class="token string">\'user\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n            redirectPath<span class="token operator">=</span><span class="token string">"/user/login"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Switch</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConnectedRouter</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","function RouterConfig({ history, app }) {\n  const routerData = getRouterData(app);\n  const UserLayout = routerData['/user'].component;\n  const BasicLayout = routerData['/'].component;\n  return (\n    <LocaleProvider locale={zhCN}>\n      <ConnectedRouter history={history}>\n        <Switch>\n+         <Route path=\"/home\" component={IndexPage} />  {/* 增加在此处 */} \n          <Route path=\"/user\" component={UserLayout} />\n          <AuthorizedRoute\n            path=\"/\"\n            render={props => <BasicLayout {...props} />}\n            authority={['admin', 'user']}\n            redirectPath=\"/user/login\"\n          />\n        </Switch>\n      </ConnectedRouter>\n    </LocaleProvider>\n  );\n}"]],["h3","更换 pro 的主路由"],["p","由于 pro 里没有自定义变量来管理路由，所以需手动修改，首先更改 routerConfig 的路径， 参照以下步骤；"],["h4","router.js"],["p","文件地址： ",["code","src/common/router.js"],";"],["p","首先需要修改 ",["code","router.js"]," 里的除 ",["code","user"]," 相关的地址以外的路径，增加个前辍，如 ",["code","/dashboards"],";"],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> routerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token operator">+</span>   <span class="token string">\'/dashboards\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="token operator">-</span>   <span class="token string">\'/\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      component<span class="token punctuation">:</span> <span class="token function">dynamicWrapper</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'user\'</span><span class="token punctuation">,</span> <span class="token string">\'login\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token operator">+</span>   <span class="token string">\'/dashboards/dashboard/analysis\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="token operator">-</span>   <span class="token string">\'/dashboard/analysis\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      component<span class="token punctuation">:</span> <span class="token function">dynamicWrapper</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'chart\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'../routes/Dashboard/Analysis\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>'},["code","  const routerConfig = {\n+   '/dashboards': {\n-   '/': {\n      component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),\n    },\n+   '/dashboards/dashboard/analysis': {\n-   '/dashboard/analysis': {\n      component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),\n    },\n    ..."]],["h4","menu.js"],["p","文件地址： ",["code","src/common/menu.js"],";"],["p","将里面的 ",["code","path"]," 除 ",["code","user"]," 相关的地址以外同样前面加上 ",["code","dashboards/"],";"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> menuData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n    icon<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n<span class="token operator">+</span>   path<span class="token punctuation">:</span> <span class="token string">\'dashboards/dashboard\'</span><span class="token punctuation">,</span>\n<span class="token operator">-</span>   path<span class="token punctuation">:</span> <span class="token string">\'dashboard\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n  <span class="token operator">...</span>'},["code","const menuData = [\n  {\n    name: 'dashboard',\n    icon: 'dashboard',\n+   path: 'dashboards/dashboard',\n-   path: 'dashboard',\n    children: [\n      {\n  ..."]],["h4","BasicLaout.js"],["p","文件地址： ",["code","src/layout/BasicLaout.js"],";"],["p","将 ",["code","getBashRedirect"]," 的路径改为 ",["code","'/dashboards'"],", 再将 ",["code","redirct"]," 的 ",["code","from"]," 改为 ",["code","/dashboards"]],["pre",{lang:"jsx",highlighted:'  <span class="token operator">...</span>\n<span class="token operator">+</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token function">check</span><span class="token punctuation">(</span>routerData<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">.</span>authority<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> item <span class="token operator">!==</span> <span class="token string">\'/dashboards\'</span>\n<span class="token operator">-</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token function">check</span><span class="token punctuation">(</span>routerData<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">.</span>authority<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> item <span class="token operator">!==</span> <span class="token string">\'/\'</span>\n  <span class="token operator">...</span>\n<span class="token operator">+</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">exact</span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/dashboards<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bashRedirect<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token operator">-</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">exact</span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bashRedirect<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token operator">...</span>'},["code","  ...\n+ item => check(routerData[item].authority, item) && item !== '/dashboards'\n- item => check(routerData[item].authority, item) && item !== '/'\n  ...\n+ <Redirect exact from=\"/dashboards\" to={bashRedirect} />\n- <Redirect exact from=\"/\" to={bashRedirect} />\n  ..."]],["h4","login.js"],["p","文件地址： ",["code","src/models/login.js"],"; "],["p","只需将登录或注册完成后改成 ",["code","/dashboards"]," 即可；"],["pre",{lang:"jsx",highlighted:'  <span class="token operator">...</span>\n    <span class="token operator">*</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span> payload <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>fakeAccountLogin<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'changeLoginStatus\'</span><span class="token punctuation">,</span>\n        payload<span class="token punctuation">:</span> response<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment" spellcheck="true">// Login successfully</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">\'ok\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">reloadAuthorized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">+</span>       <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span>routerRedux<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/dashboards\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">-</span>       <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span>routerRedux<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>'},["code","  ...\n    *login({ payload }, { call, put }) {\n      const response = yield call(fakeAccountLogin, payload);\n      yield put({\n        type: 'changeLoginStatus',\n        payload: response,\n      });\n      // Login successfully\n      if (response.status === 'ok') {\n        reloadAuthorized();\n+       yield put(routerRedux.push('/dashboards'));\n-       yield put(routerRedux.push('/'));\n      }\n    },\n  ..."]],["h4","在 layouts 下增加自已网站的 layout 文件"],["p","文件地址： ",["code","src/layout/PageLayout.js"]," 新增;"],["p","命名为: ",["code","PageLayout.jsx"],"; 然后在 router.js 上加上 ",["code",'<Route path="/" component={PageLayout} />'],"  layout 上就可以增加网站的内容了。"],["p","PageLayout.jsx"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'../routes/Home\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LandingLayout</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Home</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> '},["code","import React from 'react';\nimport Home from '../routes/Home';\n\nexport default class LandingLayout extends React.Component {\n  render(){\n    return (<Home />);\n  }\n} "]],["h4","router.js"],["p","文件地址： ",["code","src/router.js"],";"],["p","将 ",["code","AuthorizedRoute"]," 的 path 改为 ",["code","/dashboards"],", 新增 ",["code","/"]," 的 ",["code","Route"]," 到自已的 ",["code","layout"]," 文件, 顺便再新增个 404 路由； "],["pre",{lang:"jsx",highlighted:'  <span class="token operator">...</span>\n<span class="token operator">+</span> <span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">\'./routes/Exception/404\'</span><span class="token punctuation">;</span>\n<span class="token operator">+</span> <span class="token keyword">import</span> PageLayout <span class="token keyword">from</span> <span class="token string">\'./layouts/PageLayout\'</span><span class="token punctuation">;</span>\n  <span class="token operator">...</span>\n<span class="token operator">+</span> <span class="token keyword">const</span> BasicLayout <span class="token operator">=</span> routerData<span class="token punctuation">[</span><span class="token string">\'/dashboards\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>component<span class="token punctuation">;</span>\n<span class="token operator">-</span> <span class="token keyword">const</span> BasicLayout <span class="token operator">=</span> routerData<span class="token punctuation">[</span><span class="token string">\'/\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>component<span class="token punctuation">;</span>  \n  <span class="token operator">...</span>\n<span class="token operator">+</span>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>PageLayout<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>UserLayout<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token operator">&lt;</span>AuthorizedRoute\n<span class="token operator">+</span>       path<span class="token operator">=</span><span class="token string">"/dashboards"</span>\n<span class="token operator">-</span>       path<span class="token operator">=</span><span class="token string">"/"</span>\n        render<span class="token operator">=</span><span class="token punctuation">{</span>props <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>BasicLayout <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n        authority<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">,</span> <span class="token string">\'user\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n        redirectPath<span class="token operator">=</span><span class="token string">"/user/login"</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">+</span>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>NotFound<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/*增加 404*/</span><span class="token punctuation">}</span>\n  <span class="token operator">...</span>'},["code","  ...\n+ import NotFound from './routes/Exception/404';\n+ import PageLayout from './layouts/PageLayout';\n  ...\n+ const BasicLayout = routerData['/dashboards'].component;\n- const BasicLayout = routerData['/'].component;  \n  ...\n+     <Route path=\"/\" component={PageLayout} />\n      <Route path=\"/user\" component={UserLayout} />\n      <AuthorizedRoute\n+       path=\"/dashboards\"\n-       path=\"/\"\n        render={props => <BasicLayout {...props} />}\n        authority={['admin', 'user']}\n        redirectPath=\"/user/login\"\n      />\n+     <Route render={NotFound} /> {/*增加 404*/}\n  ..."]],["h2","CSS Modules"],["p","具体参考 ",["a",{title:null,href:"docs/use/getting-started#样式"},"开如使用里的 global"],";"]],meta:{order:4,category:{"zh-CN":"使用教程","en-US":"Tutorial"},title:{"zh-CN":"pro 1.x 里使用","en-US":"Use in pro 1.x"},filename:"docs/use/pro-1-x.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#文件路径",title:"文件路径"},"文件路径"]],["li",["a",{className:"bisheng-toc-h2",href:"#修改路由",title:"修改路由"},"修改路由"]],["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]]]}}}]);