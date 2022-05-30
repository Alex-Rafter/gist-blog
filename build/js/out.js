(()=>{var vt=Object.create;var ee=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var mt=Object.getOwnPropertyNames;var yt=Object.getPrototypeOf,bt=Object.prototype.hasOwnProperty;var xt=(e,t)=>()=>(e&&(t=e(e=0)),t);var kt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wt=(e,t)=>{for(var n in t)ee(e,n,{get:t[n],enumerable:!0})},Ce=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of mt(t))!bt.call(e,i)&&i!==n&&ee(e,i,{get:()=>t[i],enumerable:!(o=gt(t,i))||o.enumerable});return e};var Ee=(e,t,n)=>(n=e!=null?vt(yt(e)):{},Ce(t||!e||!e.__esModule?ee(n,"default",{value:e,enumerable:!0}):n,e)),Ct=e=>Ce(ee({},"__esModule",{value:!0}),e);var We={};wt(We,{Component:()=>$,Fragment:()=>z,cloneElement:()=>_e,createContext:()=>J,createElement:()=>p,createRef:()=>Pt,h:()=>p,hydrate:()=>Ve,isValidElement:()=>Re,options:()=>g,render:()=>oe,toChildArray:()=>K});function L(e,t){for(var n in t)e[n]=t[n];return e}function Le(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var o,i,r,c={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return W(e,c,o,i,null)}function W(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Ae};return i==null&&g.vnode!=null&&g.vnode(r),r}function Pt(){return{current:null}}function z(e){return e.children}function $(e,t){this.props=e,this.context=t}function j(e,t){if(t==null)return e.__?j(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?j(e):null}function Be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Be(e)}}function ue(e){(!e.__d&&(e.__d=!0)&&V.push(e)&&!ne.__r++||Pe!==g.debounceRendering)&&((Pe=g.debounceRendering)||Oe)(ne)}function ne(){for(var e;ne.__r=V.length;)e=V.sort(function(t,n){return t.__v.__b-n.__v.__b}),V=[],e.some(function(t){var n,o,i,r,c,f;t.__d&&(c=(r=(n=t).__v).__e,(f=n.__P)&&(o=[],(i=L({},r)).__v=r.__v+1,fe(f,r,i,n.__n,f.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c??j(r),r.__h),Ie(o,r),r.__e!=c&&Be(r)))})}function $e(e,t,n,o,i,r,c,f,h,d){var a,u,l,s,_,x,m,b=o&&o.__k||De,C=b.length;for(n.__k=[],a=0;a<t.length;a++)if((s=n.__k[a]=(s=t[a])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?W(null,s,null,null,s):Array.isArray(s)?W(z,{children:s},null,null,null):s.__b>0?W(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(l=b[a])===null||l&&s.key==l.key&&s.type===l.type)b[a]=void 0;else for(u=0;u<C;u++){if((l=b[u])&&s.key==l.key&&s.type===l.type){b[u]=void 0;break}l=null}fe(e,s,l=l||te,i,r,c,f,h,d),_=s.__e,(u=s.ref)&&l.ref!=u&&(m||(m=[]),l.ref&&m.push(l.ref,null,s),m.push(u,s.__c||_,s)),_!=null?(x==null&&(x=_),typeof s.type=="function"&&s.__k===l.__k?s.__d=h=Me(s,h,e):h=je(e,s,l,b,_,h),typeof n.type=="function"&&(n.__d=h)):h&&l.__e==h&&h.parentNode!=e&&(h=j(l))}for(n.__e=x,a=C;a--;)b[a]!=null&&(typeof n.type=="function"&&b[a].__e!=null&&b[a].__e==n.__d&&(n.__d=j(o,a+1)),Fe(b[a],b[a]));if(m)for(a=0;a<m.length;a++)Ue(m[a],m[++a],m[++a])}function Me(e,t,n){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,t=typeof o.type=="function"?Me(o,t,n):je(n,o,o,i,o.__e,t));return t}function K(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){K(n,t)}):t.push(e)),t}function je(e,t,n,o,i,r){var c,f,h;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(f=r,h=0;(f=f.nextSibling)&&h<o.length;h+=2)if(f==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function Nt(e,t,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in t||re(e,r,null,n[r],o);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||re(e,r,t[r],n[r],o)}function Ne(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Et.test(t)?n:n+"px"}function re(e,t,n,o,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Ne(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Ne(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?Te:Se,r):e.removeEventListener(t,r?Te:Se,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Se(e){this.l[e.type+!1](g.event?g.event(e):e)}function Te(e){this.l[e.type+!0](g.event?g.event(e):e)}function fe(e,t,n,o,i,r,c,f,h){var d,a,u,l,s,_,x,m,b,C,S,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(h=n.__h,f=t.__e=n.__e,t.__h=null,r=[f]),(d=g.__b)&&d(t);try{e:if(typeof E=="function"){if(m=t.props,b=(d=E.contextType)&&o[d.__c],C=d?b?b.props.value:d.__:o,n.__c?x=(a=t.__c=n.__c).__=a.__E:("prototype"in E&&E.prototype.render?t.__c=a=new E(m,C):(t.__c=a=new $(m,C),a.constructor=E,a.render=Tt),b&&b.sub(a),a.props=m,a.state||(a.state={}),a.context=C,a.__n=o,u=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=L({},a.__s)),L(a.__s,E.getDerivedStateFromProps(m,a.__s))),l=a.props,s=a.state,u)E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(E.getDerivedStateFromProps==null&&m!==l&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(m,C),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(m,a.__s,C)===!1||t.__v===n.__v){a.props=m,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(k){k&&(k.__=t)}),a.__h.length&&c.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(m,a.__s,C),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(l,s,_)})}a.context=C,a.props=m,a.state=a.__s,(d=g.__r)&&d(t),a.__d=!1,a.__v=t,a.__P=e,d=a.render(a.props,a.state,a.context),a.state=a.__s,a.getChildContext!=null&&(o=L(L({},o),a.getChildContext())),u||a.getSnapshotBeforeUpdate==null||(_=a.getSnapshotBeforeUpdate(l,s)),S=d!=null&&d.type===z&&d.key==null?d.props.children:d,$e(e,Array.isArray(S)?S:[S],t,n,o,i,r,c,f,h),a.base=t.__e,t.__h=null,a.__h.length&&c.push(a),x&&(a.__E=a.__=null),a.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=St(n.__e,t,n,o,i,r,c,h);(d=g.diffed)&&d(t)}catch(k){t.__v=null,(h||r!=null)&&(t.__e=f,t.__h=!!h,r[r.indexOf(f)]=null),g.__e(k,t,n)}}function Ie(e,t){g.__c&&g.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){g.__e(o,n.__v)}})}function St(e,t,n,o,i,r,c,f){var h,d,a,u=n.props,l=t.props,s=t.type,_=0;if(s==="svg"&&(i=!0),r!=null){for(;_<r.length;_++)if((h=r[_])&&"setAttribute"in h==!!s&&(s?h.localName===s:h.nodeType===3)){e=h,r[_]=null;break}}if(e==null){if(s===null)return document.createTextNode(l);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,l.is&&l),r=null,f=!1}if(s===null)u===l||f&&e.data===l||(e.data=l);else{if(r=r&&q.call(e.childNodes),d=(u=n.props||te).dangerouslySetInnerHTML,a=l.dangerouslySetInnerHTML,!f){if(r!=null)for(u={},_=0;_<e.attributes.length;_++)u[e.attributes[_].name]=e.attributes[_].value;(a||d)&&(a&&(d&&a.__html==d.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(Nt(e,l,u,i,f),a)t.__k=[];else if(_=t.props.children,$e(e,Array.isArray(_)?_:[_],t,n,o,i&&s!=="foreignObject",r,c,r?r[0]:n.__k&&j(n,0),f),r!=null)for(_=r.length;_--;)r[_]!=null&&Le(r[_]);f||("value"in l&&(_=l.value)!==void 0&&(_!==e.value||s==="progress"&&!_||s==="option"&&_!==u.value)&&re(e,"value",_,u.value,!1),"checked"in l&&(_=l.checked)!==void 0&&_!==e.checked&&re(e,"checked",_,u.checked,!1))}return e}function Ue(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){g.__e(o,n)}}function Fe(e,t,n){var o,i;if(g.unmount&&g.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Ue(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){g.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Fe(o[i],t,typeof e.type!="function");n||e.__e==null||Le(e.__e),e.__e=e.__d=void 0}function Tt(e,t,n){return this.constructor(e,n)}function oe(e,t,n){var o,i,r;g.__&&g.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],fe(t,e=(!o&&n||t).__k=p(z,null,[e]),i||te,te,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?q.call(t.childNodes):null,r,!o&&n?n:i?i.__e:t.firstChild,o),Ie(r,e)}function Ve(e,t){oe(e,t,Ve)}function _e(e,t,n){var o,i,r,c=L({},e.props);for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:c[r]=t[r];return arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):n),W(e.type,c,o||e.key,i||e.ref,null)}function J(e,t){var n={__c:t="__cC"+He++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(ue)},this.sub=function(c){i.push(c);var f=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),f&&f.call(c)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}var q,g,Ae,Re,V,Oe,Pe,He,te,De,Et,H=xt(()=>{te={},De=[],Et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;q=De.slice,g={__e:function(e,t,n,o){for(var i,r,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),c=i.__d),c)return i.__E=i}catch(f){e=f}throw e}},Ae=0,Re=function(e){return e!=null&&e.constructor===void 0},$.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},n),this.props)),e&&L(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ue(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ue(this))},$.prototype.render=z,V=[],Oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne.__r=0,He=0});var xe=kt((G,be)=>{(function(e,t){if(typeof G=="object"&&typeof be=="object")be.exports=t();else if(typeof define=="function"&&define.amd)define([],t);else{var n=t();for(var o in n)(typeof G=="object"?G:e)[o]=n[o]}})(G,function(){return function(){"use strict";var e={611:function(i,r){var c,f=this&&this.__assign||function(){return(f=Object.assign||function(u){for(var l,s=1,_=arguments.length;s<_;s++)for(var x in l=arguments[s])Object.prototype.hasOwnProperty.call(l,x)&&(u[x]=l[x]);return u}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.isIgnored=r.isBlockText=r.createRange=r.createText=r.createElement=r.frameflag=r.closedByClosing=r.closedByOpening=r.blockTextElements=r.selfClosingTags=r.attrRegex=r.htmlRegex=r.NodeType=void 0,function(u){u[u.Element=1]="Element",u[u.Text=3]="Text"}(c||(c={})),r.NodeType=c,r.htmlRegex=/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g,r.attrRegex=/(\S+)\s*=\s*(\"?)([^"]*)(\2|\s|$)/gi;var h="documentfragmentcontainer";r.frameflag=h,r.selfClosingTags=["area","base","br","col","hr","img","input","link","meta","source","embed","param","track","wbr"];var d=["script","noscript","style","pre"];function a(u){var l=u.nodeName,s=l===void 0?u.tagName:l,_={nodeName:"BODY",nodeType:c.Element,tagName:"body",tagRange:[],attributes:[],childNodes:[]};return u&&(_=f(f(f({},_),u),{nodeName:s})),_}r.blockTextElements=d,r.closedByOpening={li:{li:!0},p:{p:!0,div:!0},b:{div:!0},td:{td:!0,th:!0},th:{td:!0,th:!0},h1:{h1:!0},h2:{h2:!0},h3:{h3:!0},h4:{h4:!0},h5:{h5:!0},h6:{h6:!0}},r.closedByClosing={li:{ul:!0,ol:!0},a:{div:!0},b:{div:!0},i:{div:!0},p:{div:!0},td:{tr:!0,table:!0},th:{tr:!0,table:!0}},r.createElement=a,r.createText=function(u,l){return a({nodeType:c.Text,textContent:u,nodeName:"#text",tagName:void 0,tagRange:l})},r.createRange=function(u,l){return[u-h.length+2,l-h.length+2]},r.isBlockText=function(u){return d.map(function(l){return new RegExp("^"+l+"$","i")}).some(function(l){return l.test(u)})},r.isIgnored=function(u){return d.map(function(l){return new RegExp("^"+l+"$","i")}).some(function(l){return l.test(u)})}},49:function(i,r,c){Object.defineProperty(r,"__esModule",{value:!0}),r.parseString=r.parseHtml=void 0;var f=c(611);function h(a){for(var u=[],l=void 0;l=f.attrRegex.exec(a);){var s=l[1],_=l[3],x=_[0]==="'"||_[0]==='"',m={name:s.toLowerCase(),value:x?_.slice(1,_.length-1):_};u.push(m)}return u}function d(a){return a?.replace(/\r?\n|\r/g,"").replace(/\s{2,}/g," ")||null}r.parseHtml=function(a){for(var u,l=f.createElement({tagName:"body",tagRange:[0,a.length]}),s=[l],_=-1,x=void 0,m=a.length;u=f.htmlRegex.exec(a);){var b=u[0],C=u[3],S=u[4],E=u[1],k=u[2];k=k.toLowerCase();var D=b.length,Z=f.htmlRegex.lastIndex-D,v=f.htmlRegex.lastIndex,y=f.selfClosingTags.includes(k);if(_>-1&&_+D<v){var w=d(a.substring(_,Z));w&&l.childNodes.push(f.createText(w,f.createRange(Z,v)))}if(_=f.htmlRegex.lastIndex,!E){var P=h(C),N=l.tagName;!S&&f.closedByOpening[N]&&f.closedByOpening[N][k]&&(s.pop(),l=s[s.length-1]),k==="a"&&(x!==void 0&&(s.splice(x),l=s[s.length-1]),x=s.length);var T=f.htmlRegex.lastIndex,B=T-D,O=f.createElement({tagName:k,nodeType:1,attributes:P,tagRange:f.createRange(B,T)});if(l.childNodes.push(O),l=O,s.push(l),f.isBlockText(k)){var Q="</"+k+">",X=k?a.toLocaleLowerCase().indexOf(Q,f.htmlRegex.lastIndex):a.indexOf(Q,f.htmlRegex.lastIndex),dt=X===-1?m:X;if(f.isIgnored(k)){var le=a.substring(T,dt).replace(/^\s+|\s+$/g,"");le.length>0&&/\S/.test(le)&&l.childNodes.push(f.createText(le,f.createRange(B,T)))}X===-1?_=f.htmlRegex.lastIndex=a.length+1:(_=f.htmlRegex.lastIndex=X+Q.length,E="/")}}if(E||S||y)for(;;){if(k==="a"&&(x=void 0),l.tagName===k){l.tagRange[1]=f.createRange(-1,Math.max(_,v))[1],s.pop(),l=s[s.length-1];break}if(N=l.tagName,!f.closedByClosing[N]||!f.closedByClosing[N][k])break;s.pop(),l=s[s.length-1]}}return s},r.parseString=d},642:function(i){i.exports=(H(),Ct(We))}},t={};function n(i){var r=t[i];if(r!==void 0)return r.exports;var c=t[i]={exports:{}};return e[i].call(c.exports,c,c.exports,n),c.exports}var o={};return function(){var i=o;Object.defineProperty(i,"__esModule",{value:!0}),i.parse=void 0;var r=n(642),c=n(611),f=n(49);function h(a){var u=a.children,l=u===void 0?[]:u;return r.h(r.Fragment,{},l)}function d(a){var u=this;if(a.nodeType===c.NodeType.Text)return f.parseString(a.textContent);if(a.nodeType!==c.NodeType.Element)return null;var l=String(a.nodeName).toLowerCase(),s=Array.from(a.childNodes),_=function(){return s.map(function(m){return d.call(u,m)})},x=function(m){var b={};if(!m?.length)return b;for(var C=m.length-1;C>=0;C--){var S=m[C];b[S.name]=S.value}return b}(a.attributes);return l==="script"?null:l==="body"?r.h(h,{},_()):r.h(l,x,_())}i.parse=function(a){var u,l=`<!DOCTYPE html>
<html><body>`+a+"</body></html>";if(typeof window>"u")return d(f.parseHtml(a)[0]);try{u=new DOMParser().parseFromString(l,"text/html")}catch{}return u?d(u.body):void 0}}(),o}()})});H();H();var ie,A,qe,pe=0,Qe=[],ze=g.__b,Ke=g.__r,Je=g.diffed,Ye=g.__c,Ge=g.unmount;function de(e,t){g.__h&&g.__h(A,e,pe||t),pe=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function I(e){return pe=1,At(Xe,e)}function At(e,t,n){var o=de(ie++,2);return o.t=e,o.__c||(o.__=[n?n(t):Xe(void 0,t),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=A),o.__}function Y(e,t){var n=de(ie++,3);!g.__s&&Ot(n.__H,t)&&(n.__=e,n.__H=t,A.__H.__h.push(n))}function ve(e){var t=A.context[e.__c],n=de(ie++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(A)),t.props.value):e.__}function Rt(){for(var e;e=Qe.shift();)if(e.__P)try{e.__H.__h.forEach(ae),e.__H.__h.forEach(he),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){A=null,ze&&ze(e)},g.__r=function(e){Ke&&Ke(e),ie=0;var t=(A=e.__c).__H;t&&(t.__h.forEach(ae),t.__h.forEach(he),t.__h=[])},g.diffed=function(e){Je&&Je(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Qe.push(t)!==1&&qe===g.requestAnimationFrame||((qe=g.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),Ze&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);Ze&&(o=requestAnimationFrame(i))})(Rt)),A=null},g.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ae),n.__h=n.__h.filter(function(o){return!o.__||he(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],g.__e(o,n.__v)}}),Ye&&Ye(e,t)},g.unmount=function(e){Ge&&Ge(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{ae(o)}catch(i){t=i}}),t&&g.__e(t,n.__v))};var Ze=typeof requestAnimationFrame=="function";function ae(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function he(e){var t=A;e.__c=e.__(),A=t}function Ot(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Xe(e,t){return typeof t=="function"?t(e):t}var Ht={};function ce(e,t){for(var n in t)e[n]=t[n];return e}function Dt(e,t,n){var o,i=/(?:\?([^#]*))?(#.*)?$/,r=e.match(i),c={};if(r&&r[1])for(var f=r[1].split("&"),h=0;h<f.length;h++){var d=f[h].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d.slice(1).join("="))}e=ge(e.replace(i,"")),t=ge(t||"");for(var a=Math.max(e.length,t.length),u=0;u<a;u++)if(t[u]&&t[u].charAt(0)===":"){var l=t[u].replace(/(^:|[+*?]+$)/g,""),s=(t[u].match(/[+*?]+$/)||Ht)[0]||"",_=~s.indexOf("+"),x=~s.indexOf("*"),m=e[u]||"";if(!m&&!x&&(s.indexOf("?")<0||_)){o=!1;break}if(c[l]=decodeURIComponent(m),_||x){c[l]=e.slice(u).map(decodeURIComponent).join("/");break}}else if(t[u]!==e[u]){o=!1;break}return(n.default===!0||o!==!1)&&c}function Lt(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Bt(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:ge(n.props.path).map($t).join("")}(e),e.props}function ge(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function $t(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Mt={},M=[],et=[],R=null,nt={url:me()},jt=J(nt);function me(){var e;return""+((e=R&&R.location?R.location:R&&R.getCurrentLocation?R.getCurrentLocation():typeof location<"u"?location:Mt).pathname||"")+(e.search||"")}function It(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var o=M.length;o--;)if(M[o].canRoute(n))return!0;return!1}(e)&&function(n,o){o===void 0&&(o="push"),R&&R[o]?R[o](n):typeof history<"u"&&history[o+"State"]&&history[o+"State"](null,null,n)}(e,t?"replace":"push"),rt(e)}function rt(e){for(var t=!1,n=0;n<M.length;n++)M[n].routeTo(e)&&(t=!0);return t}function Ut(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return It(t)}}function Ft(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Vt(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Ut(t))return Ft(e)}while(t=t.parentNode)}}var tt=!1;function ye(e){e.history&&(R=e.history),this.state={url:e.url||me()}}ce(ye.prototype=new $,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=K(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;tt||(tt=!0,R||addEventListener("popstate",function(){rt(me())}),addEventListener("click",Vt)),M.push(this),R&&(this.u=R.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),M.splice(M.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Bt).sort(Lt);for(var n=0;n<e.length;n++){var o=e[n],i=Dt(t,o.props.path,o.props);if(i)return[o,i]}},render:function(e,t){var n,o,i=e.onChange,r=t.url,c=this.c,f=this.g(K(e.children),r);if(f&&(o=_e(f[0],ce(ce({url:r,matches:n=f[1]},n),{key:void 0,ref:void 0}))),r!==(c&&c.url)){ce(nt,c=this.c={url:r,previous:c&&c.url,current:o,path:o?o.props.path:null,matches:n}),c.router=this,c.active=o?[o]:[];for(var h=et.length;h--;)et[h]({});typeof i=="function"&&i(c)}return p(jt.Provider,{value:c},o)}});H();H();function ot(){return p("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},p("div",{class:"container"},p("a",{class:"navbar-brand",href:"#!"},p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",fill:"currentColor",class:"bi bi-circle",viewBox:"0 0 16 16"},p("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}))),p("h1",{class:"fw-bolder h1 text-white text-center flex-grow-1"},"NOTADVICE"),p("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},p("span",{class:"navbar-toggler-icon"})),p("div",{class:"collapse navbar-collapse flex-grow-0",id:"navbarSupportedContent"},p("ul",{class:"navbar-nav ms-auto mb-2 mb-lg-0"},p("li",{class:"nav-item"},p("a",{class:"nav-link",href:"https://github.com/alex-rafter/",target:"_blank"},"about")),p("li",{class:"nav-item"},p("a",{class:"nav-link active","aria-current":"page",href:"/"},"archives"))))))}H();function at(){return p("footer",{class:"py-5 bg-dark"},p("div",{class:"container"},p("p",{class:"m-0 text-center text-white"},"Copyright \xA9 Your Website 2022")))}H();H();var bn=Ee(xe());function se({createdAt:e,description:t,index:n}){let o=String(t).replace(/\s/g,"-").replace(/\-#.*/,"");return p("div",{className:"card mb-4"},p("div",{className:"card-body"},p("div",{className:"small text-muted"},e),p("h2",{className:"card-title"},t),p("a",{className:"btn btn-primary",href:`/${o}/`},"Read more \u2192")))}function it(){let[e,...t]=ve(ke),n=(o,i,r)=>o<i&&r;return p("div",{class:"row"},p("div",{class:"col-lg-8 offset-lg-2"},p(se,{...e}),p("div",{class:"row"},p("div",{class:"col-lg-6"},t.map((o,i)=>n(i,1,p(se,{...o})))),p("div",{class:"col-lg-6"},t.map((o,i)=>n(i,1,p(se,{...o})))))))}H();var ct=Ee(xe());function st({id:e}){let[t,n]=I([]);Y(()=>{o()},[]);async function o(){let i=`https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog/${e}`,r=await fetch(i);if(!r.ok)throw new Error("Network response was not OK");let f=await(await r.json()).gistBlog;n(f)}return p("div",{class:"container"},(0,ct.parse)(t.content))}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U.apply(this,arguments)}var F;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(F||(F={}));var lt=function(e){return e};var ut="beforeunload",Wt="hashchange",qt="popstate";function ht(e){e===void 0&&(e={});var t=e,n=t.window,o=n===void 0?document.defaultView:n,i=o.history;function r(){var v=pt(o.location.hash.substr(1)),y=v.pathname,w=y===void 0?"/":y,P=v.search,N=P===void 0?"":P,T=v.hash,B=T===void 0?"":T,O=i.state||{};return[O.idx,lt({pathname:w,search:N,hash:B,state:O.usr||null,key:O.key||"default"})]}var c=null;function f(){if(c)s.call(c),c=null;else{var v=F.Pop,y=r(),w=y[0],P=y[1];if(s.length){if(w!=null){var N=a-w;N&&(c={action:v,location:P,retry:function(){D(N*-1)}},D(N))}}else S(v)}}o.addEventListener(qt,f),o.addEventListener(Wt,function(){var v=r(),y=v[1];we(y)!==we(u)&&f()});var h=F.Pop,d=r(),a=d[0],u=d[1],l=_t(),s=_t();a==null&&(a=0,i.replaceState(U({},i.state,{idx:a}),""));function _(){var v=document.querySelector("base"),y="";if(v&&v.getAttribute("href")){var w=o.location.href,P=w.indexOf("#");y=P===-1?w:w.slice(0,P)}return y}function x(v){return _()+"#"+(typeof v=="string"?v:we(v))}function m(v,y){return y===void 0&&(y=null),lt(U({pathname:u.pathname,hash:"",search:""},typeof v=="string"?pt(v):v,{state:y,key:zt()}))}function b(v,y){return[{usr:v.state,key:v.key,idx:y},x(v)]}function C(v,y,w){return!s.length||(s.call({action:v,location:y,retry:w}),!1)}function S(v){h=v;var y=r();a=y[0],u=y[1],l.call({action:h,location:u})}function E(v,y){var w=F.Push,P=m(v,y);function N(){E(v,y)}if(C(w,P,N)){var T=b(P,a+1),B=T[0],O=T[1];try{i.pushState(B,"",O)}catch{o.location.assign(O)}S(w)}}function k(v,y){var w=F.Replace,P=m(v,y);function N(){k(v,y)}if(C(w,P,N)){var T=b(P,a),B=T[0],O=T[1];i.replaceState(B,"",O),S(w)}}function D(v){i.go(v)}var Z={get action(){return h},get location(){return u},createHref:x,push:E,replace:k,go:D,back:function(){D(-1)},forward:function(){D(1)},listen:function(y){return l.push(y)},block:function(y){var w=s.push(y);return s.length===1&&o.addEventListener(ut,ft),function(){w(),s.length||o.removeEventListener(ut,ft)}}};return Z}function ft(e){e.preventDefault(),e.returnValue=""}function _t(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(o){return o!==n})}},call:function(n){e.forEach(function(o){return o&&o(n)})}}}function zt(){return Math.random().toString(36).substr(2,8)}function we(e){var t=e.pathname,n=t===void 0?"/":t,o=e.search,i=o===void 0?"":o,r=e.hash,c=r===void 0?"":r;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),c&&c!=="#"&&(n+=c.charAt(0)==="#"?c:"#"+c),n}function pt(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}var ke=J(),Kt=()=>{let[e,t]=I([]),[n,o]=I("d-none");Y(()=>{i()},[]);async function i(){let f=await fetch("https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog");if(!f.ok)throw new Error("Network response was not OK");let d=await(await f.json()).gistBlog;console.log(d),t(d),o("")}let r=c=>String(c.description).replace(/\s/g,"-").replace(/\-#.*/,"");return p(ke.Provider,{value:e},p("div",{class:`container-fluid px-0 overflow-hidden ${n}`},p(ot,null),p(ye,{history:ht()},p(it,{path:"/",data:e}),e.map(c=>p(st,{path:`/${r(c)}`,...c}))),p(at,null)))},Jt=document.querySelector("#root");oe(p(Kt,null),Jt);})();
