/*! For license information please see cache-service-worker.js.LICENSE.txt */
(()=>{"use strict";class e{constructor(e,t,s,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(this.target=null,this.type=t,this.listener=s,this.options=i,"string"==typeof e||e instanceof String){if(this.target=document.getElementById(n+e),!this.target)throw new Error(`Unable to find element ${n}${e}!`)}else this.target=e;if(!this.target)throw new Error(`Undefined event target: ${this.target}!`);if("function"!=typeof s)throw new Error(`Listener is not a function: ${s}!`)}}class t{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Events",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.name=e||"",this.prefix=t||"",this.scope=s,this.listener_=[]}listen(t,s,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const h=new e(t,s,this.scope?i.bind(this.scope):i,{capture:n,once:r,passive:o},this.prefix);return h.target?(h.target.addEventListener(h.type,h.listener,h.options),this.listener_.push(h)-1):(console.warn("Unable to find event target: ",t),null)}listenOnce(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return this.listen(e,t,s,i,n,r)}unlisten(e){const t=this.listener_[e];if(!t)throw new Error(`Unknown listener key: ${e}!`);const{target:s,type:i,listener:n,options:r}=t;s.removeEventListener(i,n,r),delete this.listener_[e]}getLength(){return this.listener_.length-1}}const s="install",i="activate",n="fetch",r=location&&location.host.endsWith(".github.io")?location.pathname.substring(0,location.pathname.lastIndexOf("/")+1):"/",o=(location&&location.origin,"Cache");(new class{constructor(){this.prefix="[Cache Service]",this.events=new t("Service Worker: Cache","",this),this.registered=!1,this.denyList=location.host.endsWith(".github.io")?/^(http|https):\/\/([^/]+)\/([^/]+)\/(upload|preview)\/[^/]+\/?/:/^(http|https):\/\/([^/]+)\/(upload|preview)\/[^/]+\/?/}register(){this.registered?console.warn(`${this.prefix} Service Worker is already registered !`):(console.log(`${this.prefix} Add event listener ...`),this.events.listen(self,i,this.activate),this.events.listen(self,s,this.install),this.events.listen(self,n,this.fetch),this.registered=!0,console.log(`${this.prefix} Registered Service Worker with cache ${o} ...`))}activate(e){console.log(`${this.prefix} Activate Service Worker ...`,e)}install(){console.log(`${this.prefix} Install Service Worker ...`)}fetch(e){if(e.request.url.endsWith(".hot-update.json")||e.request.url.endsWith(".hot-update.js"))return console.log(`${this.prefix} Clear cache for hot update request ...`),void caches.open(o).then((e=>{e.keys().then((function(t){for(const s of t)e.delete(s)}))}));null==e.request||e.request.url.startsWith("chrome-extension://")||e.request.url.startsWith("ws://")||this.denyList.test(e.request.url)||e.respondWith((async()=>{const t=await caches.open(o),s=await t.match(e.request);if(s)return s;const i=await fetch(e.request);return i.ok&&206!=i.status&&t.put(e.request,i.clone()),i})())}}).register()})();