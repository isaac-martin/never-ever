!function(e){if("function"==typeof define&&define.amd){if("undefined"!=typeof requirejs){var t=requirejs,n="[history"+(new Date).getTime()+"]",i=t.onError;e.toString=function(){return n},t.onError=function(e){-1===e.message.indexOf(n)&&i.call(t,e)}}define([],e)}if("object"!=typeof exports||"undefined"==typeof module)return e();module.exports=e()}(function(){function e(){}function t(e,n,i){var o=/(?:([a-zA-Z0-9\-]+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;if(null==e||""===e||n)e=n?e:_.href,O&&!i||(e=e.replace(/^[^#]*/,"")||"#",e=_.protocol.replace(/:.*$|$/,":")+"//"+_.host+F.basepath+e.replace(new RegExp("^#[/]?(?:"+F.type+")?"),""));else{var r=t(),a=y.getElementsByTagName("base")[0];!i&&a&&a.getAttribute("href")&&(a.href=a.href,r=t(a.href,null,!0));var s=r._pathname,l=r._protocol;e=""+e,e=/^(?:\w+\:)?\/\//.test(e)?0===e.indexOf("/")?l+e:e:l+"//"+r._host+(0===e.indexOf("/")?e:0===e.indexOf("?")?s+e:0===e.indexOf("#")?s+r._search+e:s.replace(/[^\/]+$/g,"")+e)}q.href=e;var c=o.exec(q.href),f=c[2]+(c[3]?":"+c[3]:""),u=c[4]||"/",h=c[5]||"",p="#"===c[6]?"":c[6]||"",d=u+h+p,m=u.replace(new RegExp("^"+F.basepath,"i"),F.type)+h;return{_href:c[1]+"//"+f+d,_protocol:c[1],_host:f,_hostname:c[2],_port:c[3]||"",_pathname:u,_search:h,_hash:p,_relative:d,_nohash:m,_special:m+p}}function n(){var e;try{e=g.sessionStorage,e.setItem($+"t","1"),e.removeItem($+"t")}catch(t){e={getItem:function(e){var t=y.cookie.split(e+"=");return t.length>1&&t.pop().split(";").shift()||"null"},setItem:function(e,t){var n={};(n[_.href]=P.state)&&(y.cookie=e+"="+b.stringify(n))}}}try{V=b.parse(e.getItem($))||{}}catch(e){V={}}A(j+"unload",function(){e.setItem($,b.stringify(V))},!1)}function i(t,n,i,o){var r=0;i||(i={set:e},r=1);var a=!i.set,s=!i.get,l={configurable:!0,set:function(){a=1},get:function(){s=1}};try{N(t,n,l),t[n]=t[n],N(t,n,i)}catch(e){}if(!(a&&s||(t.__defineGetter__&&(t.__defineGetter__(n,l.get),t.__defineSetter__(n,l.set),t[n]=t[n],i.get&&t.__defineGetter__(n,i.get),i.set&&t.__defineSetter__(n,i.set)),a&&s))){if(r)return!1;if(t===g){try{var c=t[n];t[n]=null}catch(e){}if("execScript"in g)g.execScript("Public "+n,"VBScript"),g.execScript("var "+n+";","JavaScript");else try{N(t,n,{value:e})}catch(e){"onpopstate"===n&&(A("popstate",i=function(){C("popstate",i,!1);var e=t.onpopstate;t.onpopstate=null,setTimeout(function(){t.onpopstate=e},1)},!1),G=0)}t[n]=c}else try{try{var f=x.create(t);N(x.getPrototypeOf(f)===t?f:t,n,i);for(var u in t)"function"==typeof t[u]&&(f[u]=t[u].bind(t));try{o.call(f,f,t)}catch(e){}t=f}catch(e){N(t.constructor.prototype,n,i)}}catch(e){return!1}}return t}function o(e,t,n){return n=n||{},e=e===K?_:e,n.set=n.set||function(n){e[t]=n},n.get=n.get||function(){return e[t]},n}function r(e,t,n){e in H?H[e].push(t):arguments.length>3?A(e,t,n,arguments[3]):A(e,t,n)}function a(e,t,n){var i=H[e];if(i){for(var o=i.length;o--;)if(i[o]===t){i.splice(o,1);break}}else C(e,t,n)}function s(t,n){var o=(""+("string"==typeof t?t:t.type)).replace(/^on/,""),r=H[o];if(r){if(n="string"==typeof t?n:t,null==n.target)for(var a=["target","currentTarget","srcElement","type"];t=a.pop();)n=i(n,t,{get:"type"===t?function(){return o}:function(){return g}});G&&(("popstate"===o?g.onpopstate:g.onhashchange)||e).call(g,n);for(var s=0,l=r.length;s<l;s++)r[s].call(g,n);return!0}return R(t,n)}function l(){var e=y.createEvent?y.createEvent("Event"):y.createEventObject();e.initEvent?e.initEvent("popstate",!1,!1):e.type="popstate",e.state=P.state,s(e)}function c(){U&&(U=!1,l())}function f(e,n,i,o){if(O)B=_.href;else{0===Q&&(Q=2);var r=t(n,2===Q&&-1!==(""+n).indexOf("#"));r._relative!==t()._relative&&(B=o,i?_.replace("#"+r._special):_.hash=r._special)}!S&&e&&(V[_.href]=e),U=!1}function u(e){var n=B;if(B=_.href,n){z!==_.href&&l(),e=e||g.event;var i=t(n,!0),o=t();e.oldURL||(e.oldURL=i._href,e.newURL=o._href),i._hash!==o._hash&&s(e)}}function h(e){setTimeout(function(){A("popstate",function(e){z=_.href,S||(e=i(e,"state",{get:function(){return P.state}})),s(e)},!1)},0),!O&&!0!==e&&"location"in P&&(m(L.hash),c())}function p(e){for(;e;){if("A"===e.nodeName)return e;e=e.parentNode}}function d(e){var n=e||g.event,i=p(n.target||n.srcElement),o="defaultPrevented"in n?n.defaultPrevented:!1===n.returnValue;if(i&&"A"===i.nodeName&&!o){var r=t(),a=t(i.getAttribute("href",2));r._href.split("#").shift()===a._href.split("#").shift()&&a._hash&&(r._hash!==a._hash&&(L.hash=a._hash),m(a._hash),n.preventDefault?n.preventDefault():n.returnValue=!1)}}function m(e){var t=y.getElementById(e=(e||"").replace(/^#/,""));if(t&&t.id===e&&"A"===t.nodeName){var n=t.getBoundingClientRect();g.scrollTo(w.scrollLeft||0,n.top+(w.scrollTop||0)-(w.clientTop||0))}}var g=("object"==typeof window?window:this)||{};if(!g.history||"emulate"in g.history)return g.history;var v,y=g.document,w=y.documentElement,x=g.Object,b=g.JSON,_=g.location,E=g.history,P=E,T=E.pushState,k=E.replaceState,O=function(){var e=g.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&!!T}(),S="state"in E,N=x.defineProperty,L=i({},"t")?{}:y.createElement("a"),j="",M=g.addEventListener?"addEventListener":(j="on")&&"attachEvent",I=g.removeEventListener?"removeEventListener":"detachEvent",D=g.dispatchEvent?"dispatchEvent":"fireEvent",A=g[M],C=g[I],R=g[D],F={basepath:"/",redirect:0,type:"/",init:0},$="__historyAPI__",q=y.createElement("a"),B=_.href,z="",G=1,U=!1,Q=0,V={},H={},W=y.title,J={onhashchange:null,onpopstate:null},Z=function(e,t){var n=g.history!==E;n&&(g.history=E),e.apply(E,t),n&&(g.history=P)},X={setup:function(e,t,n){F.basepath=(""+(null==e?F.basepath:e)).replace(/(?:^|\/)[^\/]*$/,"/"),F.type=null==t?F.type:t,F.redirect=null==n?F.redirect:!!n},redirect:function(e,n){if(P.setup(n,e),n=F.basepath,g.top==g.self){var i=t(null,!1,!0)._relative,o=_.pathname+_.search;O?(o=o.replace(/([^\/])$/,"$1/"),i!=n&&new RegExp("^"+n+"$","i").test(o)&&_.replace(i)):o!=n&&(o=o.replace(/([^\/])\?/,"$1/?"),new RegExp("^"+n,"i").test(o)&&_.replace(n+"#"+o.replace(new RegExp("^"+n,"i"),F.type)+_.hash))}},pushState:function(e,t,n){var i=y.title;null!=W&&(y.title=W),T&&Z(T,arguments),f(e,n),y.title=i,W=t},replaceState:function(e,t,n){var i=y.title;null!=W&&(y.title=W),delete V[_.href],k&&Z(k,arguments),f(e,n,!0),y.title=i,W=t},location:{set:function(e){0===Q&&(Q=1),g.location=e},get:function(){return 0===Q&&(Q=1),L}},state:{get:function(){return"object"==typeof V[_.href]?b.parse(b.stringify(V[_.href])):void 0!==V[_.href]?V[_.href]:null}}},K={assign:function(e){O||0!==(""+e).indexOf("#")?_.assign(e):f(null,e)},reload:function(e){_.reload(e)},replace:function(e){O||0!==(""+e).indexOf("#")?_.replace(e):f(null,e,!0)},toString:function(){return this.href},origin:{get:function(){return void 0!==v?v:_.origin?_.origin:_.protocol+"//"+_.hostname+(_.port?":"+_.port:"")},set:function(e){v=e}},href:O?null:{get:function(){return t()._href}},protocol:null,host:null,hostname:null,port:null,pathname:O?null:{get:function(){return t()._pathname}},search:O?null:{get:function(){return t()._search}},hash:O?null:{set:function(e){f(null,(""+e).replace(/^(#|)/,"#"),!1,B)},get:function(){return t()._hash}}};return function(){var e=y.getElementsByTagName("script"),r=(e[e.length-1]||{}).src||"";(-1!==r.indexOf("?")?r.split("?").pop():"").replace(/(\w+)(?:=([^&]*))?/g,function(e,t,n){F[t]=(n||"").replace(/^(0|false)$/,"")}),A(j+"hashchange",u,!1);var a=[K,L,J,g,X,P];S&&delete X.state;for(var s=0;s<a.length;s+=2)for(var l in a[s])if(a[s].hasOwnProperty(l))if("object"!=typeof a[s][l])a[s+1][l]=a[s][l];else{var c=o(a[s],l,a[s][l]);if(!i(a[s+1],l,c,function(e,t){t===P&&(g.history=P=a[s+1]=e)}))return C(j+"hashchange",u,!1),!1;a[s+1]===g&&(H[l]=H[l.substr(2)]=[])}return P.setup(),F.redirect&&P.redirect(),F.init&&(Q=1),!S&&b&&n(),O||y[M](j+"click",d,!1),"complete"===y.readyState?h(!0):(O||t()._relative===F.basepath||(U=!0),A(j+"load",h,!1)),!0}()?(P.emulate=!O,g[M]=r,g[I]=a,g[D]=s,P):void 0}),function(e,t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var o=["opacity",t,~~(100*e),n,i].join("-"),r=.01+n/i*100,a=Math.max(1-(1-e)/t*(100-r),e),s=l.substring(0,l.indexOf("Animation")).toLowerCase(),f=s&&"-"+s+"-"||"";return u[o]||(c.insertRule("@"+f+"keyframes "+o+"{0%{opacity:"+a+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",c.cssRules.length),u[o]=1),o}function i(e,t){var n,i,o=e.style;if(t=t.charAt(0).toUpperCase()+t.slice(1),void 0!==o[t])return t;for(i=0;i<f.length;i++)if(n=f[i]+t,void 0!==o[n])return n}function o(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}return e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){this.opts=r(e||{},s.defaults,h)}var l,c,f=["webkit","Moz","ms","O"],u={},h={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},r(s.prototype,{spin:function(t){this.stop();var n=this,i=n.opts,r=n.el=e(null,{className:i.className});if(o(r,{position:i.position,width:0,zIndex:i.zIndex,left:i.left,top:i.top}),t&&t.insertBefore(r,t.firstChild||null),r.setAttribute("role","progressbar"),n.lines(r,n.opts),!l){var a,s=0,c=(i.lines-1)*(1-i.direction)/2,f=i.fps,u=f/i.speed,h=(1-i.opacity)/(u*i.trail/100),p=u/i.lines;!function e(){s++;for(var t=0;t<i.lines;t++)a=Math.max(1-(s+(i.lines-t)*p)%u*h,i.opacity),n.opacity(r,t*i.direction+c,a,i);n.timeout=n.el&&setTimeout(e,~~(1e3/f))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,r){function s(t,n){return o(e(),{position:"absolute",width:r.scale*(r.length+r.width)+"px",height:r.scale*r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*f+r.rotate)+"deg) translate("+r.scale*r.radius+"px,0)",borderRadius:(r.corners*r.scale*r.width>>1)+"px"})}for(var c,f=0,u=(r.lines-1)*(1-r.direction)/2;f<r.lines;f++)c=o(e(),{position:"absolute",top:1+~(r.scale*r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:l&&n(r.opacity,r.trail,u+f*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(c,o(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(c,s(a(r.color,f),"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),"undefined"!=typeof document){c=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}();var p=o(e("group"),{behavior:"url(#default#VML)"});!i(p,"transform")&&p.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}c.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,i){function r(){return o(n("group",{coordsize:f+" "+f,coordorigin:-c+" "+-c}),{width:f,height:f})}function s(e,s,l){t(h,t(o(r(),{rotation:360/i.lines*e+"deg",left:~~s}),t(o(n("roundrect",{arcsize:i.corners}),{width:c,height:i.scale*i.width,left:i.scale*i.radius,top:-i.scale*i.width>>1,filter:l}),n("fill",{color:a(i.color,e),opacity:i.opacity}),n("stroke",{opacity:0}))))}var l,c=i.scale*(i.length+i.width),f=2*i.scale*c,u=-(i.width+i.length)*i.scale*2+"px",h=o(r(),{position:"absolute",top:u,left:u});if(i.shadow)for(l=1;l<=i.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)s(l);return t(e,h)},s.prototype.opacity=function(e,t,n,i){var o=e.firstChild;i=i.shadow&&i.lines||0,o&&t+i<o.childNodes.length&&(o=o.childNodes[t+i],o=o&&o.firstChild,(o=o&&o.firstChild)&&(o.opacity=n))}}():l=i(p,"animation")}return s}),function(e){if("object"==typeof exports)e(require("jquery"),require("spin.js"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,i){return this.each(function(){var o=e(this),r=o.data();r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==n&&(n=e.extend({color:i||o.css("color")},e.fn.spin.presets[n]||n),r.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});var PG8={};(function(e,t,n,i){"use strict";if("undefined"!=typeof PG8Data){var o=n.history.location||n.location,r=this.PageLoader=function(t){this.thisLink=o.href,this.nextLink=PG8Data.nextLink,this.thisPage=parseInt(PG8Data.startPage,10),this.nextPage=this.thisPage+1,this.maxPages=parseInt(PG8Data.maxPages,10),this.maxedOut=0,this.opts=e.extend({},e.fn.ajaxPageLoader.defaults,t),this.content=e(this.opts.content),this.nextPage<=this.maxPages&&this.init()};r.prototype={init:function(){this.content.children().wrapAll('<div id="content-page-'+parseInt(this.thisPage,10)+'" class="clear" data-href="'+encodeURI(this.thisLink)+'"></div>'),this.holder(),this.handler(),this.spinner()},holder:function(){this.content.append('<div id="content-page-'+parseInt(this.nextPage,10)+'" class="clear" data-href="'+encodeURI(this.nextLink)+'"></div>')},handler:function(){var i=this,o=e(n);e("body").on("click",i.opts.next,function(t){i.nextPage<=i.maxPages&&(t.preventDefault(),e(this).parents("nav:first").before(e("#spinner").show()),i.loader(i.nextPage,i.nextLink))}),o.on("scroll",this.content,function(n){clearTimeout(e.data(this,"pushTimer")),clearTimeout(e.data(this,"infinTimer")),e.data(this,"pushTimer",setTimeout(function(){var t=i.content.children(":first"),n=t.offset().top,r=t.data("href"),a=o.scrollTop();a<=n?i.pusher(r):i.content.children().each(function(){var t=e(this),n=t.offset().top-i.opts.scrollOffset,o=t.outerHeight()+n;n<=a&&a<o&&i.pusher(t.data("href"))})},i.opts.pushDelay)),0===i.maxedOut&&!0===i.opts.infinScroll&&e.data(this,"infinTimer",setTimeout(function(){var n=e(t),r=n.height(),a=o.height()+o.scrollTop(),s=i.content.children(":last").offset().top,l=r-a;a>s+i.opts.scrollOffset&&a<=s+i.opts.scrollOffset+i.opts.infinOffset&&l>=i.opts.infinFooter&&e(i.opts.next).trigger("click")},i.opts.infinDelay))})},spinner:function(){e.isFunction(n.Spinner)&&(this.content.after('<div id="spinner" style="position: relative;"></div>'),e("#spinner").spin(this.opts.spinOpts).hide())},pusher:function(e){void 0!==e&&e!==o.href&&history.pushState(null,null,e)},loader:function(t,n){var i=this;e("#content-page-"+t).load(n+" "+i.opts.content+" > *",function(){var r=e(i.opts.next);i.thisPage=t,i.thisLink=n,i.nextPage=t+1,i.nextLink=n.replace(/\/page\/[0-9]*/,"/page/"+i.nextPage),i.pusher(i.thisLink),i.holder(),i.nextPage>i.maxPages?(r.remove(),i.maxedOut=1):r.is("[href]")?r.attr("href",i.nextLink):e("[href]",r).attr("href",i.nextLink),e("#spinner").hide(),e(i.opts.prev).hide(),i.loaded(),i.scroll(),i.analytics("/"+o.href.replace(i.root(),""))})},loaded:function(){var e=t.createEvent("Event");e.initEvent("DOMContentLoaded",!0,!0),n.document.dispatchEvent(e)},scroll:function(){var t=e("#content-page-"+this.thisPage).children(":first").offset().top-this.opts.scrollOffset;e("body, html").animate({scrollTop:t},this.opts.scrollDelay,"swing")},analytics:function(e){void 0!==n.ga?n.ga("send","pageview",e):void 0!==n._gaq&&n._gaq.push(["_trackPageview",e])},root:function(){var e=t.location.port?":"+t.location.port:"";return t.location.protocol+"//"+(t.location.hostname||t.location.host)+e+"/"}},e.fn.ajaxPageLoader=function(t){return this.each(function(){e.data(this,"ajaxPageLoader")||e.data(this,"ajaxPageLoader",new r(t))})},e.fn.ajaxPageLoader.defaults={content:"main",next:".next-page",prev:".prev-page",scrollDelay:300,scrollOffset:30,pushDelay:250,infinScroll:!0,infinDelay:600,infinOffset:300,infinFooter:1,spinOpts:{lines:25,length:0,width:4,radius:25,speed:1.5,trail:40,top:"15px"}}}}).apply(PG8,[jQuery,document,window]),function(e){e(function(){e(document.body).ajaxPageLoader(),e.timeago&&document.addEventListener("DOMContentLoaded",function(t){e("time").timeago()})})}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(e){function t(){var t=r.settings;if(t.autoDispose&&!e.contains(document.documentElement,this))return e(this).timeago("dispose"),this;var a=n(this);return isNaN(a.datetime)||(0===t.cutoff||Math.abs(o(a.datetime))<t.cutoff?e(this).text(i(a.datetime)):e(this).attr("title").length>0&&e(this).text(e(this).attr("title"))),this}function n(t){if(t=e(t),!t.data("timeago")){t.data("timeago",{datetime:r.datetime(t)});var n=e.trim(t.text());r.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(n.length>0)||r.isTime(t)&&t.attr("title")||t.attr("title",n)}return t.data("timeago")}function i(e){return r.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){return i(t instanceof Date?t:"string"==typeof t?e.timeago.parse(t):"number"==typeof t?new Date(t):e.timeago.datetime(t))};var r=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function n(n,o){var r=e.isFunction(n)?n(o,t):n,a=i.numbers&&i.numbers[o]||o;return r.replace(/%d/i,a)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,o=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&t<0&&(o=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&t>=0)return this.settings.strings.inPast;var a=Math.abs(t)/1e3,s=a/60,l=s/60,c=l/24,f=c/365,u=a<45&&n(i.seconds,Math.round(a))||a<90&&n(i.minute,1)||s<45&&n(i.minutes,Math.round(s))||s<90&&n(i.hour,1)||l<24&&n(i.hours,Math.round(l))||l<42&&n(i.day,1)||c<30&&n(i.days,Math.round(c))||c<45&&n(i.month,1)||c<365&&n(i.months,Math.round(c/30))||f<1.5&&n(i.year,1)||n(i.years,Math.round(f)),h=i.wordSeparator||"";return void 0===i.wordSeparator&&(h=" "),e.trim([o,u,r].join(h))},parse:function(t){var n=e.trim(t);return n=n.replace(/\.\d+/,""),n=n.replace(/-/,"/").replace(/-/,"/"),n=n.replace(/T/," ").replace(/Z/," UTC"),n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),n=n.replace(/([\+\-]\d\d)$/," $100"),new Date(n)},datetime:function(t){var n=r.isTime(t)?e(t).attr("datetime"):e(t).attr("title");return r.parse(n)},isTime:function(t){return"time"===e(t).get(0).tagName.toLowerCase()}});var a={init:function(){a.dispose.call(this);var n=e.proxy(t,this);n();var i=r.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(n,i.refreshMillis))},update:function(n){var i=n instanceof Date?n:r.parse(n);e(this).data("timeago",{datetime:i}),r.settings.localeTitle&&e(this).attr("title",i.toLocaleString()),t.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:r.parse(r.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))}),t.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};e.fn.timeago=function(e,t){var n=e?a[e]:a.init;if(!n)throw new Error("Unknown function name '"+e+"' for timeago");return this.each(function(){n.call(this,t)}),this},document.createElement("abbr"),document.createElement("time")}),function(){var e=document.getElementById("site-navigation"),t=document.getElementById("responsive-menu"),n=document.getElementById("responsive-menu-toggle");if(e&&void 0!==n){if(void 0===t)return void(n.style.display="none");n.onclick=function(){-1!==n.className.indexOf("active")?(e.style.display="none",n.className=n.className.replace(" active","")):(e.style.display="block",n.className+=" active")},t.onclick=function(){-1!==n.className.indexOf("active")?(e.style.display="none",n.className=n.className.replace(" active","")):(e.style.display="block",n.className+=" active")}}}(),function(e){e(function(){e.timeago&&e("time").timeago()});var t=new ScrollMagic.Controller({globalSceneOptions:{duration:300}}),n=TweenMax.to(".build-wrap",1,{className:"+=move-build"});new ScrollMagic.Scene({triggerElement:"#what-we-do",triggerHook:"onEnter",offset:700,duration:200}).setTween(n).addTo(t);var i=TweenMax.to(".rocket-wrap",1,{className:"+=move-rocket"});new ScrollMagic.Scene({triggerElement:"#what-we-do",triggerHook:"onEnter",offset:700,duration:200}).setTween(i).addTo(t);var o=TweenMax.to(".zipper-wrap",1,{className:"+=move-zip"});new ScrollMagic.Scene({triggerElement:"#what-we-do",triggerHook:"onEnter",offset:700,duration:200}).setTween(o).addTo(t),e(window).on("resize",function(){e("html").width()<769?t.enabled()&&t.enabled(!1):t.enabled()||t.enabled(!0),t.update(!0)}),e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=e(this.hash);n=n.length?n:e("[name="+this.hash.slice(1)+"]"),n.length&&(t.preventDefault(),e("html, body").animate({scrollTop:n.offset().top-78},1e3,function(){var t=e(n);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}}),e(".top-slider").slick({arrows:!1,dots:!0}),e(".left-arrow").click(function(){e(".slick-slider").slick("slickPrev")}),e(".right-arrow").click(function(){e(".slick-slider").slick("slickNext")})}(jQuery);
//# sourceMappingURL=x-pageloader.js.map
