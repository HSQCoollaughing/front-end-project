/*! 这是来自kris的mpa-demo */
!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+I+".hot-update.js",n.appendChild(r)}function t(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=f.p+""+I+".hot-update.json";t.open("GET",o,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}function o(e){var n=H[e];if(!n)return f;var r=function(r){return n.hot.active?(H[r]?H[r].parents.indexOf(e)<0&&H[r].parents.push(e):(j=[e],y=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),j=[]),f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&"e"!==t&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return r.e=function(e){function n(){U--,"prepare"===x&&(E[e]||s(e),0===U&&0===D&&p())}return"ready"===x&&i("prepare"),U++,f.e(e).then(n,function(e){throw n(),e})},r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return x;_.push(e)},addStatusHandler:function(e){_.push(e)},removeStatusHandler:function(e){var n=_.indexOf(e);n>=0&&_.splice(n,1)},data:L[e]};return y=void 0,n}function i(e){x=e;for(var n=0;n<_.length;n++)_[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==x)throw new Error("check() is only allowed in idle status");return g=e,i("check"),t(w).then(function(e){if(!e)return i("idle"),null;k={},E={},X=e.c,m=e.h,i("prepare");var n=new Promise(function(e,n){v={resolve:e,reject:n}});b={};return s(2),"prepare"===x&&0===U&&0===D&&p(),n})}function l(e,n){if(X[e]&&k[e]){k[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(b[r]=n[r]);0==--D&&0===U&&p()}}function s(e){X[e]?(k[e]=!0,D++,r(e)):E[e]=!0}function p(){i("ready");var e=v;if(v=null,e)if(g)Promise.resolve().then(function(){return u(g)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in b)Object.prototype.hasOwnProperty.call(b,r)&&n.push(d(r));e.resolve(n)}}function u(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");r=r||{};var o,c,a,l,s,p={},u=[],h={},y=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var v in b)if(Object.prototype.hasOwnProperty.call(b,v)){s=d(v);var g;g=b[v]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var c=o.pop(),i=c.id,d=c.chain;if((l=H[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<l.parents.length;a++){var s=l.parents[a],p=H[s];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};n.indexOf(s)>=0||(p.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),t(r[s],[i])):(delete r[s],n.push(s),o.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(s):{type:"disposed",moduleId:v};var w=!1,O=!1,_=!1,D="";switch(g.chain&&(D="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(w=new Error("Aborted because of self decline: "+g.moduleId+D));break;case"declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+D));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(g),r.ignoreUnaccepted||(w=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":r.onAccepted&&r.onAccepted(g),O=!0;break;case"disposed":r.onDisposed&&r.onDisposed(g),_=!0;break;default:throw new Error("Unexception type "+g.type)}if(w)return i("abort"),Promise.reject(w);if(O){h[s]=b[s],t(u,g.outdatedModules);for(s in g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,s)&&(p[s]||(p[s]=[]),t(p[s],g.outdatedDependencies[s]))}_&&(t(u,[g.moduleId]),h[s]=y)}var U=[];for(c=0;c<u.length;c++)s=u[c],H[s]&&H[s].hot._selfAccepted&&U.push({module:s,errorHandler:H[s].hot._selfAccepted});i("dispose"),Object.keys(X).forEach(function(e){!1===X[e]&&n(e)});for(var E,k=u.slice();k.length>0;)if(s=k.pop(),l=H[s]){var Z={},z=l.hot._disposeHandlers;for(a=0;a<z.length;a++)(o=z[a])(Z);for(L[s]=Z,l.hot.active=!1,delete H[s],delete p[s],a=0;a<l.children.length;a++){var J=H[l.children[a]];J&&((E=J.parents.indexOf(s))>=0&&J.parents.splice(E,1))}}var P,R;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(l=H[s]))for(R=p[s],a=0;a<R.length;a++)P=R[a],(E=l.children.indexOf(P))>=0&&l.children.splice(E,1);i("apply"),I=m;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(e[s]=h[s]);var G=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(l=H[s])){R=p[s];var M=[];for(c=0;c<R.length;c++)if(P=R[c],o=l.hot._acceptedDependencies[P]){if(M.indexOf(o)>=0)continue;M.push(o)}for(c=0;c<M.length;c++){o=M[c];try{o(R)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:s,dependencyId:R[c],error:e}),r.ignoreErrored||G||(G=e)}}}for(c=0;c<U.length;c++){var W=U[c];s=W.module,j=[s];try{f(s)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,orginalError:e,originalError:e}),r.ignoreErrored||G||(G=n),G||(G=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:s,error:e}),r.ignoreErrored||G||(G=e)}}return G?(i("fail"),Promise.reject(G)):(i("idle"),new Promise(function(e){e(u)}))}function f(n){if(H[n])return H[n].exports;var r=H[n]={i:n,l:!1,exports:{},hot:c(n),parents:(O=j,j=[],O),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){l(e,n),h&&h(e,n)};var y,v,b,m,g=!0,I="79399db3dd016ed477c2",w=1e4,L={},j=[],O=[],_=[],x="idle",D=0,U=0,E={},k={},X={},H={};f.m=e,f.c=H,f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return I},o(5)(f.s=5)}({5:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(6);\n\nconsole.log('index');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvaW5kZXguanM/OGM3ZiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxRQUFRQyxHQUFSLENBQVksT0FBWiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4LmNzcydcclxuXHJcbmNvbnNvbGUubG9nKCdpbmRleCcpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n")},6:function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvaW5kZXguY3NzP2UxZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n")}});