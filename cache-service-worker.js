/*! For license information please see cache-service-worker.js.LICENSE.txt */
(()=>{"use strict";class t{constructor(t,e,s,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(this.target=null,this.type=e,this.listener=s,this.options=i,"string"==typeof t||t instanceof String){if(this.target=document.getElementById(n+t),!this.target)throw new Error(`Unable to find element ${n}${t}!`)}else this.target=t;if(!this.target)throw new Error(`Undefined event target: ${this.target}!`);if("function"!=typeof s)throw new Error(`Listener is not a function: ${s}!`)}}class e{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Events",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.name=t||"",this.prefix=e||"",this.scope=s,this.listener_=[]}listen(e,s,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const h=new t(e,s,this.scope?i.bind(this.scope):i,{capture:n,once:r,passive:o},this.prefix);return h.target?(h.target.addEventListener(h.type,h.listener,h.options),this.listener_.push(h)-1):(console.warn("Unable to find event target: ",e),null)}listenOnce(t,e,s){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return this.listen(t,e,s,i,n,r)}unlisten(t){const e=this.listener_[t];if(!e)throw new Error(`Unknown listener key: ${t}!`);const{target:s,type:i,listener:n,options:r}=e;s.removeEventListener(i,n,r),delete this.listener_[t]}getLength(){return this.listener_.length-1}}const s="install",i="activate",n="fetch",r=(location.host.endsWith(".github.io")&&location.pathname.substring(0,location.pathname.lastIndexOf("/")+1),"Cache");(new class{constructor(){this.prefix="[Cache Service]",this.events=new e("Service Worker: Cache","",this),this.registered=!1,this.denyList=location.host.endsWith(".github.io")?/^(http|https):\/\/([^/]+)\/([^/]+)\/(upload|preview)\/[^/]+\/?/:/^(http|https):\/\/([^/]+)\/(upload|preview)\/[^/]+\/?/}register(){this.registered?console.warn(`${this.prefix} Service Worker is already registered !`):(console.log(`${this.prefix} Add event listener ...`),this.events.listen(self,i,this.activate),this.events.listen(self,s,this.install),this.events.listen(self,n,this.fetch),this.registered=!0,console.log(`${this.prefix} Registered Service Worker with cache ${r} ...`))}activate(t){console.log(`${this.prefix} Activate Service Worker ...`,t)}install(){console.log(`${this.prefix} Install Service Worker ...`)}fetch(t){null==t.request||t.request.url.startsWith("chrome-extension://")||t.request.url.startsWith("ws://")||t.request.url.endsWith(".hot-update.json")||t.request.url.endsWith(".hot-update.js")||this.denyList.test(t.request.url)||t.respondWith((async()=>{const e=await caches.open(r),s=await e.match(t.request);if(s)return s;const i=await fetch(t.request);return i.ok&&e.put(t.request,i.clone()),i})())}}).register()})();