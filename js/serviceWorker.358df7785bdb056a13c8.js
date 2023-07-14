/*! For license information please see serviceWorker.358df7785bdb056a13c8.js.LICENSE.txt */
(()=>{"use strict";const e=location&&location.host.endsWith(".github.io")?location.pathname.substring(0,location.pathname.lastIndexOf("/")+1):"/",s=(location&&location.origin,"Cache"),i="PreviewCache";(new class{constructor(){this.prefix="[Service Worker]",this.assets=globalThis.APP_ASSETS||[],this.scopePath=location.host.endsWith(".github.io")?location.pathname.substring(0,location.pathname.lastIndexOf("/")+1):"./",this.registered=!1,this.cachePrepared=!1,this.previewCachePrepared=!1,this.cachedFiles=new Set,console.log(`${this.prefix} Installing Service Workers for ${e} and scope ${this.scopePath}`);const i=parseInt(window.name||0);i>3&&navigator.onLine?(console.warn("Reloading more than 3 times, clearing cache ..."),caches.open(s).then((e=>{e.keys().then((function(s){for(const i of s)e.delete(i)}))}))):window.name=i+1,window.setTimeout((()=>{window.name=0}),1e3)}register(){this.registered?console.warn(`${this.prefix} Service Workers are already registered !`):"serviceWorker"in navigator?(navigator.serviceWorker.register(e+"cache-service-worker.js",{scope:this.scopePath}).then((e=>{console.log(`${this.prefix} Register Cache Service Worker successful with scope: ${e.scope}`),window.setTimeout((()=>{this.prepareCache()}),2e4)}),(e=>{console.error(`${this.prefix} Cache Service Worker registration failed: `,e)})),window.addEventListener("load",(()=>{navigator.serviceWorker.register(e+"preview-service-worker.js",{scope:this.scopePath+"preview/"}).then((e=>{console.log(`${this.prefix} Register Preview Service Worker successful with scope: ${e.scope}`),window.setTimeout((()=>{this.preparePreviewCache()}),0)}),(e=>{console.log(`${this.prefix}\n              Preview Service Worker registration failed: `,e)}))})),this.registered=!0):console.warn(`${this.prefix} Unable to setup Service Worker!`)}prepareCache(){this.cachePrepared?console.warn(`${this.prefix} Cache is already prepared !`):("caches"in window?this.assets&&(console.log(`${this.prefix} Adding ${this.assets.length} assets to local browser cache...`),"/"!==e&&(console.log("Add base path to cache assets: ",e),this.assets.push(e)),caches.open(s).then((async e=>{for(const s of this.assets)s.endsWith(".hot-update.js")||this.cachedFiles.has(s)||await e.add(s).then((()=>{console.debug(`${this.prefix} Added asset: ${s}`),this.cachedFiles.add(s)}),(e=>{console.error(`${this.prefix} Unable to add asset: ${s}`,e),this.cachedFiles.delete(s)}))}))):console.log(`${this.prefix} Unable to setup Cache Service cache!`),this.cachePrepared=!0)}preparePreviewCache(){this.previewCachePrepared?console.warn(`${this.prefix} Preview Cache is already prepared !`):(console.log(`${this.prefix} Prepare local preview cache...`),caches.open(i).then((e=>{console.log(`${this.prefix} Preview Cache is ready!`,e)})),this.previewCachePrepared=!0)}}).register()})();