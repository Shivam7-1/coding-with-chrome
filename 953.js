/*! For license information please see 953.js.LICENSE.txt */
"use strict";(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[953],{6953:(t,e,i)=>{i.r(e),i.d(e,{TerminalGui:()=>$});class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"guest";this.features={},this.environment={},this.prepare(t)}get feature(){return this.features}get PWD(){return this.environment.PWD}get OLDPWD(){return this.environment.OLDPWD}get USER(){return this.environment.USER}get HOME(){return this.environment.HOME}setFeature(t,e){this.features[t]=e}setEnv(t,e){this.environment[t]=e}getEnv(t){return t.startsWith("$")?this.environment[t.substring(1)]:this.environment[t]}setPWD(t){this.environment.PWD&&this.setEnv("OLDPWD",this.environment.PWD),this.setEnv("PWD",t)}getPath(){const t=this.environment.PATH;return t?t.split(":"):null}prepare(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"guest";return new Promise((e=>{console.log("Gathering system information ..."),this.setFeature("serviceWorker","serviceWorker"in navigator),console.log("Detected Features",this.feature),this.setEnv("HOME",`/home/${t}`),this.setEnv("LANG",navigator.language||"en-EN"),this.setEnv("OLDPWD",""),this.setEnv("PATH","/sbin:/bin"),this.setEnv("PWD",`/home/${t}`),this.setEnv("SHELL","/bin/shell"),this.setEnv("TERM","xterm-256color"),this.setEnv("USER",`${t}`),console.log("Detected Environment",this.environment),e()}))}}class n{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.process=t,this.pid=e,this.ppid=i}}const r=new class{constructor(){this.process={},this.lastPid=0}registerProcess(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const i=this.lastPid+1;return this.process[i]=new n(t,i,e),this.lastPid=i,this.process[i]}updateProcess(t,e,i){return this.process[t]=new n(e,t,i),this.process[t]}};class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.env=t||new s,this.terminal=e,this.process=r.registerProcess(this),this.initialized=!1,this.registered=!1,this.name=i||`app${Math.floor(9999*Math.random())}`,this.help=`Usage: ${this.name} [OPTION]... [ARGS]...`,this.version="1.0"}initHandler(){return this.initialized||(console.debug(`Initialize of ${this.name} ...`),this.init(),this.initialized=!0),this}init(){return this}register(){this.registered=!0}registerEnv(t){return this.env=t,this}registerTerminal(t){return this.terminal=t,this}runHandler(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map;return i.has("help")?this.showHelp():i.has("version")?this.showVersion():this.run(t,e,i)}run(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map;return new Promise((s=>{this.write(`Run command with ${e} ${i} ${t}`),s({input:t,args:e,options:i})}))}autocomplete(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map;return new Promise((s=>{this.write(`Autocomplete command ${this.name} with ${e} ${i} ${t}`),s({input:t,args:e,options:i})}))}showHelp(){return new Promise((t=>{this.writeText(this.help),t(this.help)}))}showVersion(){return new Promise((t=>{const e=`Version: ${this.version}`;this.write(e),t(e)}))}write(t){this.terminal?this.terminal.write(t):console.log(t)}append(t){this.terminal?this.terminal.append(t):console.log(t)}writeln(t){this.write(`${t}\n`)}writeText(t){this.write(t.replace(/\r?\n|\r/g,"\n\r"))}updateProcessManager(t){this.process=r.updateProcess(this.process.pid,this,t)}}class l{static sep(){return"/"}static root(){return"/"}static delimiter(){return":"}static split(t){return t.startsWith("/")||console.error("Invalid absolute path."),["/"].concat(t.substr(1).split(this.sep()))}static resolve(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1?arguments[1]:void 0;return e.startsWith("/")?e:t+e.replace("./","/")}static closest(t,e){if(e.includes(t))return t;let i=t.lastIndexOf("/"),s=t.substring(0,i);for(;i>0;){if(e.includes(s))return s;i=s.lastIndexOf("/"),s=s.substring(0,i)}return""}static dirname(t){return t.lastIndexOf("/")<=0?"/":t.substring(0,t.lastIndexOf("/"))}static basename(t){return t.substring(t.lastIndexOf("/")+1)}static parentDirname(t){return this.basename(this.dirname(t))}static findPathInObject(t,e){if(t.lastIndexOf("/")<=0&&t in e)return e[t]||null;const i=this.split(t),s=i.length;let n=e;for(let t=0;t<s;t++){if(!(i[t]in n))return null;n=n[i[t]]}return n}static join(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];if(!e)return"";const s=[];return e.forEach((t=>{t.includes(this.sep())?Array.prototype.push.apply(s,t.split(this.sep())):s.push(t)})),this.normalize(s.join(this.sep()))}static normalize(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=t.split(this.sep()),i=t.startsWith(this.root());i&&e.splice(0,1),e.forEach(((t,i)=>{".."==t&&(e[i]="",void 0!==e[i-1]&&(e[i-1]=""))}));const s=[];e.forEach((t=>{t&&s.push(t)}));const n=s.join(this.sep());return i?this.root()+n:n}static isAbsolute(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith(this.root())}}class h extends o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new s,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;super(t,e,"shell"),this.fileSystem=e?e.kernel.requestFileSystem():null,this.tty=e?e.tty:1e3}handleCommand(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log("Command",t,e);const i=this.getCommand(t);if(i){const{input:t,args:s,options:n}=this.handleInput(e);this.executeCommand(i,t,s,n)}else this.write(t+": command not found"),this.prompt()}handleAutocomplete(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("Autocomplete",t,i,e);let s=this.getCommand(t);if(s){const{input:t,args:n,options:r}=this.handleInput(e);if(r&&!n)return;this.executeAutocomplete(s,t,n,i)}else t&&(console.log("Looking for command started with",t),s=this.getCommandStartedWith(t),console.log("Found possible command",s))}handleInput(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t;t.includes("$")&&(e=t.replace(/\$\w+/g,(t=>String(this.env.getEnv(t)||""))));const i=new Map,s=[],n=e.split(/([^\s"]+|"[^"]*")+/g);for(const t of n)if(""===t.trim());else if(t.startsWith("--")){const e=t.split(/--(\w+)=?/);i.set(e[1],!t.includes("=")||e[2])}else s.push(t);return{input:e,args:s,options:i}}getCommand(t){const e=this.env.getPath();if(!t||!this.fileSystem||!e)return null;for(const i of e){const e=l.join(i,t);if(this.fileSystem.existFile(e))return e}return null}getCommandStartedWith(t){const e=this.getCommand(t);if(e)return e;const i=this.env.getPath();if(!t||!this.fileSystem||!i)return null;for(const e of i){const i=this.fileSystem.listFiles(e);for(const e of i){const i=e.split("/").pop();if(i&&i.includes(t))return i}}return null}executeCommand(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Map;const n=this.fileSystem.getFile(t).getExecutable();if(!n)return;this.terminal.lock();const r=new n(this.env,this.terminal);r.initHandler().runHandler(e,i,s).then((()=>{this.terminal.unlock(),this.prompt()})).catch((t=>{this.writeln(`${r.name}: Runtime Error => ${t}`),console.error(`${r.name}:`,t),this.terminal.unlock(),this.prompt()}))}executeAutocomplete(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const n=this.fileSystem.getFile(t).getExecutable();if(!n)return;this.terminal.lock();const r=new Map;r.set("doubleTab",s);const o=new n(this.env,this.terminal);o.autocomplete(e,i,r).then((()=>{this.terminal.unlock(),this.prompt()})).catch((t=>{this.writeln(`${o.name}: Runtime Error => ${t}`),console.error(`${o.name}:`,t),this.terminal.unlock(),this.prompt()}))}registerTerminal(t){return console.log("Register terminal",t,"for",this.process.pid),this.terminal=t,this.tty||(this.tty=t.tty),t.process.pid&&this.updateProcessManager(t.process.pid),this}registerFileSystem(t){console.log("Register fileSystem",t,"for",this.process.pid),this.fileSystem=t,this.env.getEnv("PATH")&&console.log("Adding search path",this.env.getEnv("PATH"))}registerTty(t){console.log("Register tty",t,"for",this.process.pid),this.tty=t}prompt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=this.terminal.kernel.requestHostname();let i=this.env.PWD;i.startsWith(this.env.HOME)&&(i=i.replace(this.env.HOME,"~")),this.write(`[1;32m${this.env.USER}@${e}[0m:[1;34m${i}[0m$ `),t&&this.write(t)}}class a{static blobToDataURL(t){return new Promise((e=>{const i=new FileReader;i.onload=function(){e(i.result)},i.readAsDataURL(t)}))}static blobToText(t){return"function"==typeof t.text?t.text():new Promise((e=>{const i=new FileReader;i.onload=function(){e(i.result)},i.readAsText(t)}))}static blobToBase64(t){return new Promise((e=>{a.blobToText(t).then((t=>{e(btoa(t))}))}))}static blobToStream(t){return t.stream()}static toBlob(t){return t instanceof Blob?t:"string"==typeof t&&t.startsWith("data:")?a.dataURLToBlob(t):"string"==typeof t?new Blob([t],{type:"text/plain"}):"number"==typeof t?new Blob([String(t)],{type:"text/plain"}):"function"==typeof t?new Blob([t.toString()],{type:"application/x-binary"}):new Blob}static dataURLToBlob(t){const e=t.replace(";base64","").split(","),i=e[0].split(":")[1].split(",")[0];return t.includes(";base64")?a.base64ToBlob(e[1],i):a.urlEncodedToBlob(e[1],i)}static urlEncodedToBlob(t,e){return new Blob([a.textToArrayBuffer(decodeURIComponent(t))],{type:e})}static base64ToBlob(t,e){let i="";try{i=atob(t)}catch(e){console.error("Decoding error for",t,e),i=t}return new Blob([a.textToArrayBuffer(i)],{type:e})}static textToArrayBuffer(t){return(new TextEncoder).encode(t)}static arrayBufferToText(t){return(new TextDecoder).decode(new Uint8Array(t))}}class u{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unnamed",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.data=a.toBlob(t),this.executable="function"==typeof t?t:void 0,this.id=function(){let t="";return window.crypto.getRandomValues(new Uint32Array(4)).forEach((e=>{t+="-"+e.toString(16)})),t.substr(1)}(),this.filename=e,this.options=i,this.lastModifiedDate=Date.now(),this.version=1}get size(){return this.data.size||0}get name(){return this.filename}get type(){return this.data.type}get lastModified(){return this.lastModifiedDate}getId(){return this.id}getName(){return this.name}getData(){return this.data}getExecutable(){return this.executable}setData(t){return"function"==typeof t&&(this.executable=t),this.data=a.toBlob(t),this.lastModifiedDate=Date.now(),this}setName(t){this.filename=t}getAsStream(){return a.blobToStream(this.data)}getAsDataURL(){return a.blobToDataURL(this.data)}getAsExecutable(){return Promise.resolve(this.executable)}getAsText(){return a.blobToText(this.data)}getAsBinary(){return Promise.resolve(this.data)}getAsBase64(){return a.blobToBase64(this.data)}async getObject(){return{data:await this.getAsText(),id:this.id,modified:this.lastModifiedDate,name:this.name,size:this.size,type:this.type,version:this.version}}async getJSON(){const t=await this.getObject();return JSON.stringify(t,null,2)}}const d="base64",m="binary",c="executable",g="stream",p="text";class f{constructor(){this.dirs={"/":{___files___:{}}},this.files=new Map,this.size=0}addFolder(t){if(!t.startsWith("/"))throw new Error("Folder path needs to start with /");if("/"==t)throw new Error("Folder / is reserved for root!");if(this.existFolder(t))throw new Error("Folder "+t+" already exist!");if(this.existFile(t))throw new Error("File "+t+" already exist!");const e=l.basename(t);if("___files___"==e)throw new Error("Folder ___files___ is reserved for internal usage!");t.lastIndexOf("/")<=0?this.getRoot()[e]={___files___:{}}:this.getParentPath(t,!0)[e]={___files___:{}}}exist(t){return!!this.existFolder(t)||!!this.existFile(t)}existFolder(t){return!!l.findPathInObject(t,this.dirs)}existFile(t){const e=this.getParentPath(t);return e&&l.basename(t)in e.___files___}readFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:p};const i=this.getFile(t);switch(e.type){case g:return i.getAsStream();case d:return i.getAsBase64();case m:return i.getAsBinary();case c:return i.getAsExecutable();default:return i.getAsText()}}writeFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{overwrite:!0,append:!1};if(!t.startsWith("/"))throw new Error("File path needs to start with /");if("/"==t)throw new Error("File / is reserved for root!");if(this.existFolder(t))throw new Error("Folder "+t+" already exist!");if(this.existFile(t)){if(!i.overwrite)throw new Error("File "+t+" already exist!");return this.getFile(t).setData(e)}const s=l.basename(t),n=new u(e,s);return t.lastIndexOf("/")<=0?(this.getRoot().___files___[s]=n.getId(),this.files.set(n.getId(),n)):(this.getParentPath(t,!0).___files___[s]=n.getId(),this.files.set(n.getId(),n)),n}listFiles(t){return this.existFolder(t)?l.findPathInObject(t,this.dirs).___files___:this.existFile(t)?this.getParentPath(t,!0).___files___:null}getFile(t){if(!this.existFile(t))throw new Error("No such file or directory: "+t);const e=this.getParentPath(t).___files___[l.basename(t)];return this.files.get(e)}getFileById(t){if(!this.files.has(t))throw new Error("No such file with id "+t);return this.files.get(t)}listFolders(t){let e=null;if(this.existFolder(t))e=l.findPathInObject(t,this.dirs);else{if(!this.existFile(t))return null;e=this.getParentPath(t,!0)}if(e){const t=Object.assign({},e);return delete t.___files___,t}return null}getParentPath(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=l.findPathInObject(l.dirname(t),this.dirs);if(!i&&e)throw new Error("Missing parent folder "+l.dirname(t)+" for "+t);return i}getRoot(){return this.dirs["/"]}}const v={exec:!0,nouser:!0,readwrite:!0};class w{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.path=t,this.target=e,this.options={...v,...i}}executeCommand(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.getCommand(t)(e,i)}getOptions(){return this.options}setOptions(t){console.log("Changing mount options for",this.path,"to",t),this.options={...this.options,options:t}}getTarget(){return this.target}getCommand(t){if("function"!=typeof this.target[t])throw new Error("No mount point handler defined for command: "+t);return this.target[t].bind(this.target)}executeFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this.options.exec)throw new Error("Permission denied");return this.getCommand("executeFile")(t,e,i)}existFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getCommand("existFile")(t,e)}readFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getCommand("readFile")(t,e)}getFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getCommand("getFile")(t,e)}writeFile(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this.options.readwrite)throw new Error("Permission denied");return this.getCommand("writeFile")(t,e,i)}listFiles(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getCommand("listFiles")(t,e)}existFolder(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getCommand("existFolder")(t,e)}listFolders(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getCommand("listFolders")(t,e)}mkdir(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.options.readwrite)throw new Error("Permission denied");return this.getCommand("addFolder")(t,e)}rmdir(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.options.readwrite)throw new Error("Permission denied");return this.getCommand("removeFolder")(t,e)}getPath(t){let e="";if(t==this.path?e="/":t.startsWith(this.path)&&(e=t.substring(this.path.length)),!e)throw new Error(`Unable to resolve target path for ${t} within ${this.path}`);return e}}class y{constructor(){this.mounts={}}mount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.startsWith("/"))throw new Error("Mount point needs to start with /");if("/"==t)throw new Error("Mount point / is already reserved for root!");if(this.exist(t))throw new Error("Mount point "+t+" already exist!");this.get(t)&&console.log("Mounting child ..."),this.mounts[t]=new w(t,e,i),console.log("Mounted",t,"to",this.mounts[t])}umount(t){console.log("Unmount mount point",this.mounts[t],"for",t),delete this.mounts[t]}remount(t,e){this.mounts[t].setOptions(e)}mkdir(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getMount(t);return i?i.mkdir(i.getPath(t),e):Promise.reject(new Error("No valid mount point for "+t))}readFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getMount(t);return i?i.readFile(i.getPath(t),e):Promise.reject(new Error("No valid mount point for "+t))}existFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.get(t);if(i){const s=i.getPath(t);return i.existFile(s,e)}return!1}getFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getMount(t);if(i){const s=i.getPath(t);return i.getFile(s,e)}return null}writeFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=this.getMount(t);return s?s.writeFile(s.getPath(t),e,i):Promise.reject(new Error("No valid mount point for "+t))}listFiles(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"==t)return{};const i=this.get(t);if(i){const s=i.getPath(t);return i.listFiles(s,e)}return null}existFolder(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.get(t);if(i){const s=i.getPath(t);return i.existFolder(s,e)}return!1}listFolders(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"==t)return this.mounts;const i=this.get(t);if(i){const s=i.getPath(t);return i.listFolders(s,e)}return null}exec(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const s=this.getMount(t);if(s){const n=s.getPath(t);return s.executeCommand(e,n,i)}return null}get(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=l.closest(t,Object.keys(this.mounts));if(e){if(!i)throw new Error("No available mount point for:"+t);if(!this.mounts[i].getTarget())throw new Error("Target for mount point "+i+" is not defined!")}return i?this.mounts[i]:null}getMount(t){return this.get(t,!0)}getTarget(t){const e=this.getMount(t);return e?e.getTarget():null}exist(t){return t in this.mounts}list(){return this.mounts}}class b{constructor(){this.mountPoint=new y}mkdir(t){this.mountPoint.mkdir(t)}mount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.mountPoint.mount(t,e)}remount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.mountPoint.remount(t,e)}existFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.mountPoint.existFile(t,e)}getFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.mountPoint.getFile(t,e)}writeFile(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.mountPoint.writeFile(t,e,i)}listFiles(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.mountPoint.listFiles(t,e)}existFolder(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.mountPoint.existFolder(t,e)}listFolders(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.mountPoint.listFolders(t,e)}existMount(t){return this.mountPoint.exist(t)}}class P extends o{constructor(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t,"cd"),this.fileSystem=t?t.kernel.requestFileSystem():null}run(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((e=>{if(t[0])if("/"==t[0])this.env.setPWD("/");else if("~"==t[0]||""==t[0])this.env.setPWD(this.env.HOME);else if("-"==t[0]&&this.env.OLDPWD)this.env.setPWD(this.env.OLDPWD);else{const e=t[0].startsWith("/")?t[0]:l.join(this.env.PWD,t[0]);"/"==e?this.env.setPWD("/"):this.fileSystem.existMount(e)||this.fileSystem.existFolder(e)?this.env.setPWD(e):this.fileSystem.existFile(e)?this.write(`cd: '${t[0]}': Not a directory`):this.write(`cd: '${t[0]}': No such file or directory`)}else this.env.setPWD(this.env.HOME);e()}))}}class F extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"echo")}run(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((e=>{this.write(t.trim()),e()}))}}class x extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"env")}run(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((e=>{if(!t[0])for(const[t,e]of Object.entries(this.env.environment))this.write(`${t}=${e}`);e()}))}}class E extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"exit")}run(){arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((t=>{this.write("logout"),this.terminal&&this.terminal.close(),t()}))}}class _ extends o{constructor(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t,"ls"),this.fileSystem=t?t.kernel.requestFileSystem():null,this.help="Usage: ls [OPTION]... [FILE]...\n\n    --help     display this help and exit\n    --version  output version information and exit"}run(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((e=>{const i=t[0],{fileList:s,folderList:n}=this.list(i);if(console.log(s,n),null==s&&null==n)this.write(`ls: cannot access '${i}': No such file or directory`);else{const t=this.formatList(s,n);t&&this.write(t)}e()}))}list(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.env.PWD;const e=t.startsWith("/")?t:l.join(this.env.PWD,t);return{fileList:this.fileSystem.listFiles(e),folderList:this.fileSystem.listFolders(e)}}formatList(t,e){const i=[];for(const[t,s]of Object.entries(e))i.push(`[1;34m${t}[0m`);const s=[];for(const[e,i]of Object.entries(t))s.push(e);return i.concat(s).join("\t")}}class S extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"pwd")}run(){arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((t=>{this.write(this.env.PWD),t()}))}}class T extends o{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,"tty")}run(){arguments.length>2&&void 0!==arguments[2]||new Map;return new Promise((t=>{this.write(`/dev/${this.terminal.tty}`),t()}))}}class D{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;this.process=e.registerProcess(this,t?t.process.pid:1e3),this.fileSystem=new b}prepare(){return new Promise((t=>{console.log("Preparing virtual file system with pid",this.process.pid),this.prepareTemps(),this.prepareSystemBinaries(),this.prepareHomes(),t(!0)}))}prepareSystemBinaries(){this.fileSystem.mount("/sbin"),this.fileSystem.remount("/sbin",{readwrite:!1}),this.fileSystem.mount("/bin"),this.fileSystem.writeFile("/bin/cd",P),this.fileSystem.writeFile("/bin/echo",F),this.fileSystem.writeFile("/bin/env",x),this.fileSystem.writeFile("/bin/exit",E),this.fileSystem.writeFile("/bin/ls",_),this.fileSystem.writeFile("/bin/pwd",S),this.fileSystem.writeFile("/bin/tty",T)}prepareHomes(){this.fileSystem.mount("/home"),this.fileSystem.mkdir("/home/guest"),this.fileSystem.mkdir("/home/guest/documents"),this.fileSystem.writeFile("/home/guest/README")}prepareTemps(){this.fileSystem.mount("/tmp"),this.fileSystem.mkdir("/tmp/test1"),this.fileSystem.mkdir("/tmp/test2"),this.fileSystem.mkdir("/tmp/test3")}}class k{constructor(){this.memory={}}add(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.memory[t]={value:e,time:i?(new Date).getTime()+1e3*i:0}}get(t){return this.memory[t].time&&this.memory[t].time<=(new Date).getTime()?(this.delete(t),null):this.memory[t].value}getSize(){return Object.keys(this.memory).length}delete(t){delete this.memory[t]}}class M{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;this.kernel=t,this.tty=t?t.requestTty():100,this.prefix="vterm "+this.tty+":",this.process=e.registerProcess(this,t?t.process.pid:1e3),this.locked=!1,this.command=""}writeResponse(t){console.log(this.prefix,t)}lock(){this.locked=!0}unlock(){this.locked=!1}}const W=new class{constructor(){this.env=new s,this.process=r.registerProcess(this),this.fileSystem=new D(this),this.kernelMemory=new k,this.kernelMemory.add("tty",0),this.terminal=null,this.shell=null,this.version="0.1"}boot(){return new Promise((t=>{console.log("Preparing kernel with version",this.version,"..."),this.kernelMemory.add("boot_time",(new Date).getTime()),this.kernelMemory.add("hostname","codingwithchromne"),this.env.prepare(),this.fileSystem.prepare(),this.terminal=new M(this),this.shell=new h(void 0,this.terminal),t(!0)}))}requestTty(){const t=Number(this.kernelMemory.get("tty")||0)+1;return this.kernelMemory.add("tty",t),"tty"+Number(t)}requestFileSystem(){return this.fileSystem.fileSystem}requestHostname(){return String(this.kernelMemory.get("hostname"))}};var O=i(2320);class $ extends M{constructor(){super(W),this.shell=new h,this.shell.registerTerminal(this),this.shell.registerFileSystem(W.requestFileSystem()),this.shell.registerTty(this.tty),this.terminal=new O.Terminal({cursorBlink:!0,fontFamily:"Ubuntu Mono, courier-new, courier, monospace",scrollback:1e3,tabStopWidth:8}),this.isDoubleTab=!1}open(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.getElementById("cwc-terminal");t?(this.terminal.open(t),this.terminal.writeln(`Hello [1;3;31m${this.shell.env.USER}[0m from ${this.tty}`),this.terminal.onKey((t=>{this.input(t)})),this.shell.prompt()):console.error("Unable to find target element:",t)}close(){this.terminal&&(console.debug("Closing terminal ..."),this.terminal.dispose())}input(t){if(!this.locked)if(console.debug("Terminal input event:",t),"Enter"==t.domEvent.key){if("reset"==this.command)this.terminal.reset(),this.shell.prompt();else if(""==this.command.trim())this.shell.prompt();else if(this.command){const[t,e]=this.command.split(/ (.*)/);this.shell.handleCommand(t,e)}this.command="",this.isDoubleTab=!1}else if("Backspace"==t.domEvent.key)this.command.length>0&&(this.terminal.write("\b \b"),this.command=this.command.substring(0,this.command.length-1));else if("Tab"==t.domEvent.key)if(this.command.includes(" ")){const[t,e]=this.command.split(/ (.*)/);this.shell.handleAutocomplete(t,e,this.isDoubleTab),this.isDoubleTab=!0}else{this.shell.getCommandStartedWith(this.command)&&(this.terminal.write(" "),this.command=this.command+" ")}else"ArrowUp"==t.domEvent.key||"ArrowDown"==t.domEvent.key||t.key&&(this.command+=t.key,this.terminal.write(t.key))}write(t){this.terminal.write("\r\n"+t)}append(t){this.terminal.write(t)}}}}]);