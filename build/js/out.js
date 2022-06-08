(()=>{var xt=Object.create;var re=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var wt=Object.getPrototypeOf,Et=Object.prototype.hasOwnProperty;var Pt=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ct=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Nt=(e,t)=>{for(var n in t)re(e,n,{get:t[n],enumerable:!0})},Ne=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of kt(t))!Et.call(e,a)&&a!==n&&re(e,a,{get:()=>t[a],enumerable:!(r=bt(t,a))||r.enumerable});return e};var St=(e,t,n)=>(n=e!=null?xt(wt(e)):{},Ne(t||!e||!e.__esModule?re(n,"default",{value:e,enumerable:!0}):n,e)),Tt=e=>Ne(re({},"__esModule",{value:!0}),e);var Je={};Nt(Je,{Component:()=>j,Fragment:()=>Y,cloneElement:()=>ge,createContext:()=>Z,createElement:()=>m,createRef:()=>Rt,h:()=>m,hydrate:()=>qe,isValidElement:()=>He,options:()=>v,render:()=>ce,toChildArray:()=>G});function D(e,t){for(var n in t)e[n]=t[n];return e}function Ue(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,a,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?z.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return K(e,s,r,a,null)}function K(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Oe};return a==null&&v.vnode!=null&&v.vnode(o),o}function Rt(){return{current:null}}function Y(e){return e.children}function j(e,t){this.props=e,this.context=t}function M(e,t){if(t==null)return e.__?M(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?M(e):null}function je(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return je(e)}}function ve(e){(!e.__d&&(e.__d=!0)&&J.push(e)&&!ie.__r++||Se!==v.debounceRendering)&&((Se=v.debounceRendering)||Le)(ie)}function ie(){for(var e;ie.__r=J.length;)e=J.sort(function(t,n){return t.__v.__b-n.__v.__b}),J=[],e.some(function(t){var n,r,a,o,s,f;t.__d&&(s=(o=(n=t).__v).__e,(f=n.__P)&&(r=[],(a=D({},o)).__v=o.__v+1,me(f,o,a,n.__n,f.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??M(o),o.__h),Fe(r,o),o.__e!=s&&je(o)))})}function Ie(e,t,n,r,a,o,s,f,p,h){var i,u,l,c,_,b,g,x=r&&r.__k||$e,E=x.length;for(n.__k=[],i=0;i<t.length;i++)if((c=n.__k[i]=(c=t[i])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?K(null,c,null,null,c):Array.isArray(c)?K(Y,{children:c},null,null,null):c.__b>0?K(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(l=x[i])===null||l&&c.key==l.key&&c.type===l.type)x[i]=void 0;else for(u=0;u<E;u++){if((l=x[u])&&c.key==l.key&&c.type===l.type){x[u]=void 0;break}l=null}me(e,c,l=l||oe,a,o,s,f,p,h),_=c.__e,(u=c.ref)&&l.ref!=u&&(g||(g=[]),l.ref&&g.push(l.ref,null,c),g.push(u,c.__c||_,c)),_!=null?(b==null&&(b=_),typeof c.type=="function"&&c.__k===l.__k?c.__d=p=Be(c,p,e):p=Me(e,c,l,x,_,p),typeof n.type=="function"&&(n.__d=p)):p&&l.__e==p&&p.parentNode!=e&&(p=M(l))}for(n.__e=b,i=E;i--;)x[i]!=null&&(typeof n.type=="function"&&x[i].__e!=null&&x[i].__e==n.__d&&(n.__d=M(r,i+1)),We(x[i],x[i]));if(g)for(i=0;i<g.length;i++)Ve(g[i],g[++i],g[++i])}function Be(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?Be(r,t,n):Me(n,r,r,a,r.__e,t));return t}function G(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){G(n,t)}):t.push(e)),t}function Me(e,t,n,r,a,o){var s,f,p;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),s=null;else{for(f=o,p=0;(f=f.nextSibling)&&p<r.length;p+=2)if(f==a)break e;e.insertBefore(a,o),s=o}return s!==void 0?s:a.nextSibling}function Ot(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||ae(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||ae(e,o,t[o],n[o],r)}function Te(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||At.test(t)?n:n+"px"}function ae(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Te(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Te(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Re:Ae,o):e.removeEventListener(t,o?Re:Ae,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ae(e){this.l[e.type+!1](v.event?v.event(e):e)}function Re(e){this.l[e.type+!0](v.event?v.event(e):e)}function me(e,t,n,r,a,o,s,f,p){var h,i,u,l,c,_,b,g,x,E,S,P=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,f=t.__e=n.__e,t.__h=null,o=[f]),(h=v.__b)&&h(t);try{e:if(typeof P=="function"){if(g=t.props,x=(h=P.contextType)&&r[h.__c],E=h?x?x.props.value:h.__:r,n.__c?b=(i=t.__c=n.__c).__=i.__E:("prototype"in P&&P.prototype.render?t.__c=i=new P(g,E):(t.__c=i=new j(g,E),i.constructor=P,i.render=Lt),x&&x.sub(i),i.props=g,i.state||(i.state={}),i.context=E,i.__n=r,u=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),P.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=D({},i.__s)),D(i.__s,P.getDerivedStateFromProps(g,i.__s))),l=i.props,c=i.state,u)P.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(P.getDerivedStateFromProps==null&&g!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,E),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,E)===!1||t.__v===n.__v){i.props=g,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(k){k&&(k.__=t)}),i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,E),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,c,_)})}i.context=E,i.props=g,i.state=i.__s,(h=v.__r)&&h(t),i.__d=!1,i.__v=t,i.__P=e,h=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=D(D({},r),i.getChildContext())),u||i.getSnapshotBeforeUpdate==null||(_=i.getSnapshotBeforeUpdate(l,c)),S=h!=null&&h.type===Y&&h.key==null?h.props.children:h,Ie(e,Array.isArray(S)?S:[S],t,n,r,a,o,s,f,p),i.base=t.__e,t.__h=null,i.__h.length&&s.push(i),b&&(i.__E=i.__=null),i.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ht(n.__e,t,n,r,a,o,s,p);(h=v.diffed)&&h(t)}catch(k){t.__v=null,(p||o!=null)&&(t.__e=f,t.__h=!!p,o[o.indexOf(f)]=null),v.__e(k,t,n)}}function Fe(e,t){v.__c&&v.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){v.__e(r,n.__v)}})}function Ht(e,t,n,r,a,o,s,f){var p,h,i,u=n.props,l=t.props,c=t.type,_=0;if(c==="svg"&&(a=!0),o!=null){for(;_<o.length;_++)if((p=o[_])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){e=p,o[_]=null;break}}if(e==null){if(c===null)return document.createTextNode(l);e=a?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,l.is&&l),o=null,f=!1}if(c===null)u===l||f&&e.data===l||(e.data=l);else{if(o=o&&z.call(e.childNodes),h=(u=n.props||oe).dangerouslySetInnerHTML,i=l.dangerouslySetInnerHTML,!f){if(o!=null)for(u={},_=0;_<e.attributes.length;_++)u[e.attributes[_].name]=e.attributes[_].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Ot(e,l,u,a,f),i)t.__k=[];else if(_=t.props.children,Ie(e,Array.isArray(_)?_:[_],t,n,r,a&&c!=="foreignObject",o,s,o?o[0]:n.__k&&M(n,0),f),o!=null)for(_=o.length;_--;)o[_]!=null&&Ue(o[_]);f||("value"in l&&(_=l.value)!==void 0&&(_!==e.value||c==="progress"&&!_||c==="option"&&_!==u.value)&&ae(e,"value",_,u.value,!1),"checked"in l&&(_=l.checked)!==void 0&&_!==e.checked&&ae(e,"checked",_,u.checked,!1))}return e}function Ve(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function We(e,t,n){var r,a;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ve(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){v.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&We(r[a],t,typeof e.type!="function");n||e.__e==null||Ue(e.__e),e.__e=e.__d=void 0}function Lt(e,t,n){return this.constructor(e,n)}function ce(e,t,n){var r,a,o;v.__&&v.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],me(t,e=(!r&&n||t).__k=m(Y,null,[e]),a||oe,oe,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?z.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Fe(o,e)}function qe(e,t){ce(e,t,qe)}function ge(e,t,n){var r,a,o,s=D({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:s[o]=t[o];return arguments.length>2&&(s.children=arguments.length>3?z.call(arguments,2):n),K(e.type,s,r||e.key,a||e.ref,null)}function Z(e,t){var n={__c:t="__cC"+De++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&a.some(ve)},this.sub=function(s){a.push(s);var f=s.componentWillUnmount;s.componentWillUnmount=function(){a.splice(a.indexOf(s),1),f&&f.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}var z,v,Oe,He,J,Le,Se,De,oe,$e,At,H=Pt(()=>{oe={},$e=[],At=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;z=$e.slice,v={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),s=a.__d),s)return a.__E=a}catch(f){e=f}throw e}},Oe=0,He=function(e){return e!=null&&e.constructor===void 0},j.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=D({},this.state),typeof e=="function"&&(e=e(D({},n),this.props)),e&&D(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ve(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ve(this))},j.prototype.render=Y,J=[],Le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ie.__r=0,De=0});var vt=Ct((X,Ce)=>{(function(e,t){if(typeof X=="object"&&typeof Ce=="object")Ce.exports=t();else if(typeof define=="function"&&define.amd)define([],t);else{var n=t();for(var r in n)(typeof X=="object"?X:e)[r]=n[r]}})(X,function(){return function(){"use strict";var e={611:function(a,o){var s,f=this&&this.__assign||function(){return(f=Object.assign||function(u){for(var l,c=1,_=arguments.length;c<_;c++)for(var b in l=arguments[c])Object.prototype.hasOwnProperty.call(l,b)&&(u[b]=l[b]);return u}).apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.isIgnored=o.isBlockText=o.createRange=o.createText=o.createElement=o.frameflag=o.closedByClosing=o.closedByOpening=o.blockTextElements=o.selfClosingTags=o.attrRegex=o.htmlRegex=o.NodeType=void 0,function(u){u[u.Element=1]="Element",u[u.Text=3]="Text"}(s||(s={})),o.NodeType=s,o.htmlRegex=/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g,o.attrRegex=/(\S+)\s*=\s*(\"?)([^"]*)(\2|\s|$)/gi;var p="documentfragmentcontainer";o.frameflag=p,o.selfClosingTags=["area","base","br","col","hr","img","input","link","meta","source","embed","param","track","wbr"];var h=["script","noscript","style","pre"];function i(u){var l=u.nodeName,c=l===void 0?u.tagName:l,_={nodeName:"BODY",nodeType:s.Element,tagName:"body",tagRange:[],attributes:[],childNodes:[]};return u&&(_=f(f(f({},_),u),{nodeName:c})),_}o.blockTextElements=h,o.closedByOpening={li:{li:!0},p:{p:!0,div:!0},b:{div:!0},td:{td:!0,th:!0},th:{td:!0,th:!0},h1:{h1:!0},h2:{h2:!0},h3:{h3:!0},h4:{h4:!0},h5:{h5:!0},h6:{h6:!0}},o.closedByClosing={li:{ul:!0,ol:!0},a:{div:!0},b:{div:!0},i:{div:!0},p:{div:!0},td:{tr:!0,table:!0},th:{tr:!0,table:!0}},o.createElement=i,o.createText=function(u,l){return i({nodeType:s.Text,textContent:u,nodeName:"#text",tagName:void 0,tagRange:l})},o.createRange=function(u,l){return[u-p.length+2,l-p.length+2]},o.isBlockText=function(u){return h.map(function(l){return new RegExp("^"+l+"$","i")}).some(function(l){return l.test(u)})},o.isIgnored=function(u){return h.map(function(l){return new RegExp("^"+l+"$","i")}).some(function(l){return l.test(u)})}},49:function(a,o,s){Object.defineProperty(o,"__esModule",{value:!0}),o.parseString=o.parseHtml=void 0;var f=s(611);function p(i){for(var u=[],l=void 0;l=f.attrRegex.exec(i);){var c=l[1],_=l[3],b=_[0]==="'"||_[0]==='"',g={name:c.toLowerCase(),value:b?_.slice(1,_.length-1):_};u.push(g)}return u}function h(i){return i?.replace(/\r?\n|\r/g,"").replace(/\s{2,}/g," ")||null}o.parseHtml=function(i){for(var u,l=f.createElement({tagName:"body",tagRange:[0,i.length]}),c=[l],_=-1,b=void 0,g=i.length;u=f.htmlRegex.exec(i);){var x=u[0],E=u[3],S=u[4],P=u[1],k=u[2];k=k.toLowerCase();var L=x.length,ee=f.htmlRegex.lastIndex-L,d=f.htmlRegex.lastIndex,y=f.selfClosingTags.includes(k);if(_>-1&&_+L<d){var w=h(i.substring(_,ee));w&&l.childNodes.push(f.createText(w,f.createRange(ee,d)))}if(_=f.htmlRegex.lastIndex,!P){var C=p(E),N=l.tagName;!S&&f.closedByOpening[N]&&f.closedByOpening[N][k]&&(c.pop(),l=c[c.length-1]),k==="a"&&(b!==void 0&&(c.splice(b),l=c[c.length-1]),b=c.length);var T=f.htmlRegex.lastIndex,$=T-L,O=f.createElement({tagName:k,nodeType:1,attributes:C,tagRange:f.createRange($,T)});if(l.childNodes.push(O),l=O,c.push(l),f.isBlockText(k)){var te="</"+k+">",ne=k?i.toLocaleLowerCase().indexOf(te,f.htmlRegex.lastIndex):i.indexOf(te,f.htmlRegex.lastIndex),yt=ne===-1?g:ne;if(f.isIgnored(k)){var de=i.substring(T,yt).replace(/^\s+|\s+$/g,"");de.length>0&&/\S/.test(de)&&l.childNodes.push(f.createText(de,f.createRange($,T)))}ne===-1?_=f.htmlRegex.lastIndex=i.length+1:(_=f.htmlRegex.lastIndex=ne+te.length,P="/")}}if(P||S||y)for(;;){if(k==="a"&&(b=void 0),l.tagName===k){l.tagRange[1]=f.createRange(-1,Math.max(_,d))[1],c.pop(),l=c[c.length-1];break}if(N=l.tagName,!f.closedByClosing[N]||!f.closedByClosing[N][k])break;c.pop(),l=c[c.length-1]}}return c},o.parseString=h},642:function(a){a.exports=(H(),Tt(Je))}},t={};function n(a){var o=t[a];if(o!==void 0)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}var r={};return function(){var a=r;Object.defineProperty(a,"__esModule",{value:!0}),a.parse=void 0;var o=n(642),s=n(611),f=n(49);function p(i){var u=i.children,l=u===void 0?[]:u;return o.h(o.Fragment,{},l)}function h(i){var u=this;if(i.nodeType===s.NodeType.Text)return f.parseString(i.textContent);if(i.nodeType!==s.NodeType.Element)return null;var l=String(i.nodeName).toLowerCase(),c=Array.from(i.childNodes),_=function(){return c.map(function(g){return h.call(u,g)})},b=function(g){var x={};if(!g?.length)return x;for(var E=g.length-1;E>=0;E--){var S=g[E];x[S.name]=S.value}return x}(i.attributes);return l==="script"?null:l==="body"?o.h(p,{},_()):o.h(l,b,_())}a.parse=function(i){var u,l=`<!DOCTYPE html>
<html><body>`+i+"</body></html>";if(typeof window>"u")return h(f.parseHtml(i)[0]);try{u=new DOMParser().parseFromString(l,"text/html")}catch{}return u?h(u.body):void 0}}(),r}()})});H();H();var Q,A,Ke,le=0,et=[],ze=v.__b,Ye=v.__r,Ge=v.diffed,Ze=v.__c,Qe=v.unmount;function ue(e,t){v.__h&&v.__h(A,e,le||t),le=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function U(e){return le=1,Dt(rt,e)}function Dt(e,t,n){var r=ue(Q++,2);return r.t=e,r.__c||(r.__=[n?n(t):rt(void 0,t),function(a){var o=r.t(r.__[0],a);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=A),r.__}function I(e,t){var n=ue(Q++,3);!v.__s&&nt(n.__H,t)&&(n.__=e,n.__H=t,A.__H.__h.push(n))}function tt(e){return le=5,$t(function(){return{current:e}},[])}function $t(e,t){var n=ue(Q++,7);return nt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function xe(e){var t=A.context[e.__c],n=ue(Q++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(A)),t.props.value):e.__}function Ut(){for(var e;e=et.shift();)if(e.__P)try{e.__H.__h.forEach(se),e.__H.__h.forEach(ye),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){A=null,ze&&ze(e)},v.__r=function(e){Ye&&Ye(e),Q=0;var t=(A=e.__c).__H;t&&(t.__h.forEach(se),t.__h.forEach(ye),t.__h=[])},v.diffed=function(e){Ge&&Ge(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(et.push(t)!==1&&Ke===v.requestAnimationFrame||((Ke=v.requestAnimationFrame)||function(n){var r,a=function(){clearTimeout(o),Xe&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(a,100);Xe&&(r=requestAnimationFrame(a))})(Ut)),A=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(se),n.__h=n.__h.filter(function(r){return!r.__||ye(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],v.__e(r,n.__v)}}),Ze&&Ze(e,t)},v.unmount=function(e){Qe&&Qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{se(r)}catch(a){t=a}}),t&&v.__e(t,n.__v))};var Xe=typeof requestAnimationFrame=="function";function se(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function ye(e){var t=A;e.__c=e.__(),A=t}function nt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function rt(e,t){return typeof t=="function"?t(e):t}var jt={};function fe(e,t){for(var n in t)e[n]=t[n];return e}function It(e,t,n){var r,a=/(?:\?([^#]*))?(#.*)?$/,o=e.match(a),s={};if(o&&o[1])for(var f=o[1].split("&"),p=0;p<f.length;p++){var h=f[p].split("=");s[decodeURIComponent(h[0])]=decodeURIComponent(h.slice(1).join("="))}e=be(e.replace(a,"")),t=be(t||"");for(var i=Math.max(e.length,t.length),u=0;u<i;u++)if(t[u]&&t[u].charAt(0)===":"){var l=t[u].replace(/(^:|[+*?]+$)/g,""),c=(t[u].match(/[+*?]+$/)||jt)[0]||"",_=~c.indexOf("+"),b=~c.indexOf("*"),g=e[u]||"";if(!g&&!b&&(c.indexOf("?")<0||_)){r=!1;break}if(s[l]=decodeURIComponent(g),_||b){s[l]=e.slice(u).map(decodeURIComponent).join("/");break}}else if(t[u]!==e[u]){r=!1;break}return(n.default===!0||r!==!1)&&s}function Bt(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Mt(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:be(n.props.path).map(Ft).join("")}(e),e.props}function be(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Ft(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Vt={},B=[],ot=[],R=null,at={url:ke()},Wt=Z(at);function ke(){var e;return""+((e=R&&R.location?R.location:R&&R.getCurrentLocation?R.getCurrentLocation():typeof location<"u"?location:Vt).pathname||"")+(e.search||"")}function qt(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=B.length;r--;)if(B[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),R&&R[r]?R[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),ct(e)}function ct(e){for(var t=!1,n=0;n<B.length;n++)B[n].routeTo(e)&&(t=!0);return t}function Jt(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return qt(t)}}function Kt(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function zt(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Jt(t))return Kt(e)}while(t=t.parentNode)}}var it=!1;function we(e){e.history&&(R=e.history),this.state={url:e.url||ke()}}fe(we.prototype=new j,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=G(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;it||(it=!0,R||addEventListener("popstate",function(){ct(ke())}),addEventListener("click",zt)),B.push(this),R&&(this.u=R.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),B.splice(B.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Mt).sort(Bt);for(var n=0;n<e.length;n++){var r=e[n],a=It(t,r.props.path,r.props);if(a)return[r,a]}},render:function(e,t){var n,r,a=e.onChange,o=t.url,s=this.c,f=this.g(G(e.children),o);if(f&&(r=ge(f[0],fe(fe({url:o,matches:n=f[1]},n),{key:void 0,ref:void 0}))),o!==(s&&s.url)){fe(at,s=this.c={url:o,previous:s&&s.url,current:r,path:r?r.props.path:null,matches:n}),s.router=this,s.active=r?[r]:[];for(var p=ot.length;p--;)ot[p]({});typeof a=="function"&&a(s)}return m(Wt.Provider,{value:s},r)}});H();function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}var V;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(V||(V={}));var st=function(e){return e};var lt="beforeunload",Yt="hashchange",Gt="popstate";function pt(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,a=r.history;function o(){var d=_t(r.location.hash.substr(1)),y=d.pathname,w=y===void 0?"/":y,C=d.search,N=C===void 0?"":C,T=d.hash,$=T===void 0?"":T,O=a.state||{};return[O.idx,st({pathname:w,search:N,hash:$,state:O.usr||null,key:O.key||"default"})]}var s=null;function f(){if(s)c.call(s),s=null;else{var d=V.Pop,y=o(),w=y[0],C=y[1];if(c.length){if(w!=null){var N=i-w;N&&(s={action:d,location:C,retry:function(){L(N*-1)}},L(N))}}else S(d)}}r.addEventListener(Gt,f),r.addEventListener(Yt,function(){var d=o(),y=d[1];Ee(y)!==Ee(u)&&f()});var p=V.Pop,h=o(),i=h[0],u=h[1],l=ft(),c=ft();i==null&&(i=0,a.replaceState(F({},a.state,{idx:i}),""));function _(){var d=document.querySelector("base"),y="";if(d&&d.getAttribute("href")){var w=r.location.href,C=w.indexOf("#");y=C===-1?w:w.slice(0,C)}return y}function b(d){return _()+"#"+(typeof d=="string"?d:Ee(d))}function g(d,y){return y===void 0&&(y=null),st(F({pathname:u.pathname,hash:"",search:""},typeof d=="string"?_t(d):d,{state:y,key:Zt()}))}function x(d,y){return[{usr:d.state,key:d.key,idx:y},b(d)]}function E(d,y,w){return!c.length||(c.call({action:d,location:y,retry:w}),!1)}function S(d){p=d;var y=o();i=y[0],u=y[1],l.call({action:p,location:u})}function P(d,y){var w=V.Push,C=g(d,y);function N(){P(d,y)}if(E(w,C,N)){var T=x(C,i+1),$=T[0],O=T[1];try{a.pushState($,"",O)}catch{r.location.assign(O)}S(w)}}function k(d,y){var w=V.Replace,C=g(d,y);function N(){k(d,y)}if(E(w,C,N)){var T=x(C,i),$=T[0],O=T[1];a.replaceState($,"",O),S(w)}}function L(d){a.go(d)}var ee={get action(){return p},get location(){return u},createHref:b,push:P,replace:k,go:L,back:function(){L(-1)},forward:function(){L(1)},listen:function(y){return l.push(y)},block:function(y){var w=c.push(y);return c.length===1&&r.addEventListener(lt,ut),function(){w(),c.length||r.removeEventListener(lt,ut)}}};return ee}function ut(e){e.preventDefault(),e.returnValue=""}function ft(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function Zt(){return Math.random().toString(36).substr(2,8)}function Ee(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,a=r===void 0?"":r,o=e.hash,s=o===void 0?"":o;return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function _t(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}async function W(e){let t=await fetch(e);if(!t.ok)throw new Error("Network response was not OK");return await(await t.json()).gistBlog}var q="https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog/";var _e=e=>String(e).replace(/\s/g,"-").replace(/\-#.*/,"");H();H();function pe(){return m("nav",{class:"bg-dark py-2"},m("div",{class:"container"},m("a",{href:"/",class:"d-flex justify-content-center text-decoration-none"},m("h1",{class:"display-5 fw-bold text-white text-center mb-0 py-0 font-monospace",style:"width:fit-content"},"NA"))))}H();function he(){return m("footer",{class:"py-4 bg-dark"},m("div",{class:"container"},m("p",{class:"m-0 text-center text-white"},"Copyright \xA9 Your Website 2022")))}H();function ht({createdAt:e,description:t,id:n}){let[r,a]=U(!1),o=tt(""),s=String(t).replace(/#.*$/,""),f=String(e).replace(/T.*$/,"").replace(/-/g,"");I(()=>{o.current=r},[r]);async function p(h){if(r===!0)return;a(!0);let i=await W(`${q}${n}`);window.sessionStorage.setItem("article",JSON.stringify(i))}return m("div",{className:"preview mb-4 position-relative",onMouseOver:h=>p(h)},m("a",{className:"preview__anchor text-decoration-none",href:`/${_e(t)}/`},m("h2",{className:"h3 fw-light text-dark mb-1 text-lowercase font-monospace"},s),m("p",{class:"small text-danger h-100 d-flex align-items-center mb-0 position-absolute end-0 top-0"},f)))}function dt(){let[,...e]=xe(Pe),t=(n,r,a)=>n<r&&a;return m("div",{class:"container-fluid px-0 overflow-hidden"},m(pe,null),m("div",{className:"container py-5"},m("div",{class:"row"},m("div",{class:"col-12 col-lg-8 offset-lg-2"},e.map((n,r)=>t(r,e.length,m(ht,{...n})))))),m(he,null))}H();var mt=St(vt());function gt({id:e}){let[t,n]=U([]),[r]=U(window.sessionStorage.getItem("article")),a=async()=>await W(`${q}${e}`);return I(()=>{n(r!==void 0?JSON.parse(r):a())},[]),m("div",{class:"container-fluid px-0 overflow-hidden"},m(pe,null),m("div",{class:"article container py-4"},m("div",{class:"row"},m("div",{class:"col-12 col-lg-8 offset-lg-2"},(0,mt.parse)(t.content)))),m(he,null))}var Pe=Z(),Qt=()=>{let[e,t]=U([]);I(()=>{n()},[]);let n=async()=>t(await W(q));return m("div",{class:e.length>0?"":"d-none"},m(Pe.Provider,{value:e},m(we,{history:pt()},m(dt,{path:"/",data:e}),e.map(r=>m(gt,{key:r,path:`/${_e(r.description)}`,id:r.id})))))},Xt=document.querySelector("#root");ce(m(Qt,null),Xt);})();
