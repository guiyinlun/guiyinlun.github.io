if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const b=e=>a(e,c),f={module:{uri:c},exports:s,require:b};i[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(r(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"45c15be38617ba78038f77f2b5792cc2"},{url:"about/index.html",revision:"d4bb626a4ac1e15ab0568e6224848577"},{url:"album/index.html",revision:"37585442ade0c683bafe84436877e744"},{url:"anzhiyu/random.js",revision:"d28d38ad3de335abdee4fc627f5dab09"},{url:"archives/2023/05/index.html",revision:"68982447d17377c4114958015dafb9b8"},{url:"archives/2023/06/index.html",revision:"08ee1109b72a09446f2ff1596d68f969"},{url:"archives/2023/09/index.html",revision:"4288cf9a075687b1bdff8d4da26a876e"},{url:"archives/2023/index.html",revision:"f0dcb29684b799b62f43cf247d211827"},{url:"archives/2024/05/index.html",revision:"ad482230ef92edf62d6f12b14850f5f9"},{url:"archives/2024/06/index.html",revision:"bba30f0c16df513559dfbc739dff03ce"},{url:"archives/2024/index.html",revision:"16a5d95b747446738084a3ad34dd6605"},{url:"archives/index.html",revision:"a261e3628062fb4a2bbb3e22036eae87"},{url:"archives/page/2/index.html",revision:"a9d56f6d855216c3432dbb1ae1250e6d"},{url:"bangumis/index.html",revision:"54f5661bcba7e44b72c36d86542405d9"},{url:"bingguo/index.html",revision:"a4eda4432728645a8861a78faf5ba033"},{url:"categories/C/index.html",revision:"75b5f947a205f80e83d78146f9e01201"},{url:"categories/EasyX/index.html",revision:"0f25ac07bef07846910b28a24496e9b4"},{url:"categories/Git/index.html",revision:"f99261faf3dd74565cd37a01d4074964"},{url:"categories/hexo/index.html",revision:"78cb2f84006ad542a555282ae956b241"},{url:"categories/index.html",revision:"bcf1ab913d3b57ae784656ce615cfd11"},{url:"categories/基金/index.html",revision:"57bec3f9fdacb5be85b1bf071d408ae2"},{url:"categories/旅游/index.html",revision:"7ae73af1b70f4c74acd1c4d44fa0ef68"},{url:"categories/游戏/index.html",revision:"5d423433385ff184e7fd26dd43e650b5"},{url:"categories/语文/index.html",revision:"558c57d989ab33e6d9c1c9c2718a1cf9"},{url:"comments/index.html",revision:"0738a783122fa422c583265d670ccc4b"},{url:"css/categorybar.css",revision:"ec7b7d31b53defb65f09b64c882070ce"},{url:"css/coin/coin.css",revision:"36b1e60ddb867f3d7b487fa9b189a44d"},{url:"css/custom.css",revision:"7e8a3419f6cdf16355e345e9c519c3cc"},{url:"css/index.css",revision:"d34a7819aa783aea2eecf1cacaad2367"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"fc4851cf41269e0eed4d8520f68435f5"},{url:"equipment/index.html",revision:"f65c05abc469eb5f68bf5bc7bbf60486"},{url:"essay/index.html",revision:"a6e3a8b8d3e3bdd2ac07a47f8147a9a9"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"a3bee023a9a0ed6fd450987b9f77d104"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"index.html",revision:"a7b95812c562d4db1c5b414a5237ce81"},{url:"js/ali_font.js",revision:"53c64d2cbcf5e62c53b69ec3c0a645ca"},{url:"js/anzhiyu.js",revision:"1b10035dc3bfb77f45967ce9d8302a74"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/coin/coin.js",revision:"f20a93c9ffc9415175b7b82540a2d970"},{url:"js/daohang.js",revision:"ee440cb03dbd0529cc062747ed4980a4"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/share.js",revision:"3fdac675ddb2162d04a1dfa0aba05dbd"},{url:"js/title.js",revision:"b541dc96a329e9318f04fb24085d8178"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"link/index.html",revision:"c6bc7fe8b04dc7c7f37f60ffb77ec261"},{url:"music/index.html",revision:"034ddb0a7b43aaf0ffbedacd939c3326"},{url:"page/2/index.html",revision:"1ca6764992aa0ee02d7e6dea10e25b67"},{url:"post/13151138.html",revision:"a7864f20e8b1bab2408fd0ec65bdbafd"},{url:"post/1d2ba49c.html",revision:"ca49488d6b72622ea31cc9e55b215e76"},{url:"post/36997b1b.html",revision:"6db3790c7463f6aacad64f56d663aa7b"},{url:"post/4896de77.html",revision:"33a6cc2fb0bf319d4e0fe53ae3b23462"},{url:"post/4a17b156.html",revision:"d5e7488aa3ec41d1fa32fea55193ff95"},{url:"post/4f8d4e0e.html",revision:"257de5114233dfe8ab787fb265ba5752"},{url:"post/50b12041.html",revision:"262679f879f1c433e847bfbb80b1d9c8"},{url:"post/829e67e9.html",revision:"1359378cbbbe744dc5f60fce09c13c6f"},{url:"post/84f45425.html",revision:"90d25d5e750d8ce355dc99f3ad27050a"},{url:"post/8675909c.html",revision:"01b9438b81b1f8441a3455be95edd634"},{url:"post/ac3ba24e.html",revision:"14c8302572fcb53a582f098a7abf29e0"},{url:"resource/index.html",revision:"b572d43b9663c0aec38f28f701f813f7"},{url:"tags/C/index.html",revision:"dab518b0e3f0ed7d2a05370db9c9992f"},{url:"tags/EasyX/index.html",revision:"e955ad6529367759fe7f05c4fd29961d"},{url:"tags/Effective-C/index.html",revision:"ae37e0ec8850791ee9546c1c03f6a12e"},{url:"tags/Git/index.html",revision:"4c40e34142a950e6aa9e1a8731bda6ea"},{url:"tags/hello-world/index.html",revision:"da0507f9e566fe323e5ce785ae2978c0"},{url:"tags/hexo/index.html",revision:"09ac54e5d9d662110108937d36b5c7d9"},{url:"tags/index.html",revision:"085d9a57411fb22b7f143369655d6624"},{url:"tags/STL/index.html",revision:"8db7aa58d48fdf15ac9d08516bdd834e"},{url:"tags/云南/index.html",revision:"4db5df44db0d2fb6c46cc739890b0128"},{url:"tags/五一/index.html",revision:"8ef36e88f83acff64f9edae3ea98d48d"},{url:"tags/博客搭建/index.html",revision:"72b7f40d1e842e76aa1ed52a5221a5a1"},{url:"tags/基金/index.html",revision:"9a6ee680ce9a29e137b1789dd163ffe4"},{url:"tags/学习笔记/index.html",revision:"3ba1d285834d922003682fb1c3fcc85f"},{url:"tags/容器/index.html",revision:"9cd405f2f7f4511630a6088bfbab5c86"},{url:"tags/小学语文/index.html",revision:"24a88aa37abcd514c5384e65972855fd"},{url:"tags/攻略/index.html",revision:"f84fdbe33ee0db26ed02a1d36e32a617"},{url:"tags/教程/index.html",revision:"90c3d50c0accb110c10f20020f08540f"},{url:"tags/测试/index.html",revision:"ebb6b5485285028cbf7776d56f708898"},{url:"tags/精华再赏/index.html",revision:"76093afa72ac6a3c2221cc643e477670"},{url:"tags/虎跳峡/index.html",revision:"ebead7531caf23f1bccdfcb5e6c71605"},{url:"tags/设计模式/index.html",revision:"b795c133a891f7cbab03cf9c263ea397"},{url:"tags/造梦西游/index.html",revision:"20f629f1151bea15e77f1beab40224bd"},{url:"tags/重修/index.html",revision:"34dfe9bed20488bf0a822dc9cf50debd"},{url:"tags/问题解决/index.html",revision:"e3167aae3c67de0977a99b67c1d14854"},{url:"/",revision:"index-20240607021528823"},{url:"music/",revision:"music-20240607021528823"},{url:"about/",revision:"about-20240607021528823"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
