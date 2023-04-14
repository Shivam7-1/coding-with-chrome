/*! For license information please see 627.js.LICENSE.txt */
"use strict";(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[627],{6427:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});const n=i(4295).BlockEditor},8611:(t,e,i)=>{i.d(e,{R:()=>n,S:()=>o});class n extends CustomEvent{constructor(t){super("windowClose"),this.windowId=t}getWindowId(){return this.windowId}}class o extends CustomEvent{constructor(t){super("windowResize"),this.windowId=t}getWindowId(){return this.windowId}}},7289:(t,e,i)=>{i.d(e,{f:()=>a});var n=i(7294),o=i(3818),s=i.n(o);class d{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:200,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:200;this.id=t,this.title=e,this.width=i,this.height=n,this.x=o,this.y=s,this.noClose=!1}}var w=i(8611);class a extends n.PureComponent{static component;static windowsMap=new Map;static lastXPosition=20;static lastYPosition=50;static windowManagerEventTarget=new EventTarget;static WINDOW_PREFIX="window_";static DEFAULT_WINDOW_OPTIONS={title:"Unnamed",width:500,height:400,x:"center",y:50,noClose:!1};static addNewWindow(t){return a.addWindow({...a.DEFAULT_WINDOW_OPTIONS,title:t})}static addWindow(t){const e=a.getWindowId(t.id||"unnamed_"+Math.random().toString(36).substring(2,5)),i=a.getWindowNode(e);return new Promise(((n,o)=>{i?i instanceof HTMLElement?(console.warn(`Will use existing window with id ${e}:`,i),n(e)):o(new Error(`Existing element for ${e} is no HTMLElement!`)):(console.info(`Adding new window ${e} with:`,t),a.lastXPosition<600?a.lastXPosition+=20:a.lastXPosition=10,a.lastYPosition<400?a.lastYPosition+=20:a.lastYPosition=50,this.updateWindowData(e,new d(e,t.title,500,300,a.lastXPosition,a.lastYPosition)).then((t=>{n(t)})))}))}static updateWindowData(t,e){return new Promise(((i,n)=>{a.windowsMap.set(t,e),a.component.setState({windows:a.windowsMap},(()=>{a.component.forceUpdate(),setTimeout((()=>{a.getWindowNode(t)?i(t):n(new Error(`Unable to find element for ${t}!`))}),100)}))}))}static getWindowId(t){return t.startsWith(a.WINDOW_PREFIX)?t:a.WINDOW_PREFIX+t}static getWindowNode(t){return document.querySelector("#"+a.getWindowId(t)+" .wb-body")}static updateData(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.component.setState({windows:a.windowsMap},(()=>{e&&a.component.forceUpdate(),void 0!==t&&setTimeout((()=>{t()}))}))}constructor(t){super(t),this.state={windows:new Map},a.component=this}handleClose(t,e){a.windowManagerEventTarget.dispatchEvent(new w.R(t)),e||(console.log("Prepare closing windows with id",t,e),a.windowsMap.delete(t),a.updateData())}handleResize(t,e,i){console.debug(`Resize request for ${t} with ${e} ${i} ...`),a.windowManagerEventTarget.dispatchEvent(new w.S(t))}render(){return n.createElement(n.StrictMode,null,[...this.state.windows.keys()].map((t=>n.createElement(s(),{key:this.state.windows.get(t).id,id:this.state.windows.get(t).id,x:this.state.windows.get(t).x,y:this.state.windows.get(t).y,title:this.state.windows.get(t).title,width:this.state.windows.get(t).width,height:this.state.windows.get(t).height,minHeight:160,top:50,onclose:e=>this.handleClose(t,e),onresize:(e,i)=>this.handleResize(t,e,i)}))))}}}}]);