if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const u=e=>n(e,r),c={module:{uri:r},exports:t,require:u};i[r]=Promise.all(o.map((e=>c[e]||u(e)))).then((e=>(s(...e),t)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"84a05d01f638b2d20e78ca48dde8609d"},{url:"css/index.css",revision:"304326866ad2de6fb19a71a4193d3e6f"},{url:"/",revision:"index-20231127082123442"},{url:"music/",revision:"music-20231127082123442"},{url:"about/",revision:"about-20231127082123442"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
