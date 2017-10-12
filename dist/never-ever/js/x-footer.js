!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=o.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var r=a(this);return isNaN(r.datetime)||(0===e.cutoff||Math.abs(n(r.datetime))<e.cutoff?t(this).text(i(r.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:o.datetime(e)});var a=t.trim(e.text());o.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||o.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function i(t){return o.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var o=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function a(a,n){var o=t.isFunction(a)?a(n,e):a,r=i.numbers&&i.numbers[n]||n;return o.replace(/%d/i,r)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,n=i.prefixAgo,o=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(n=i.prefixFromNow,o=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var r=Math.abs(e)/1e3,s=r/60,l=s/60,c=l/24,u=c/365,m=r<45&&a(i.seconds,Math.round(r))||r<90&&a(i.minute,1)||s<45&&a(i.minutes,Math.round(s))||s<90&&a(i.hour,1)||l<24&&a(i.hours,Math.round(l))||l<42&&a(i.day,1)||c<30&&a(i.days,Math.round(c))||c<45&&a(i.month,1)||c<365&&a(i.months,Math.round(c/30))||u<1.5&&a(i.year,1)||a(i.years,Math.round(u)),d=i.wordSeparator||"";return void 0===i.wordSeparator&&(d=" "),t.trim([n,m,o].join(d))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=o.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return o.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var r={init:function(){r.dispose.call(this);var a=t.proxy(e,this);a();var i=o.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(a,i.refreshMillis))},update:function(a){var i=a instanceof Date?a:o.parse(a);t(this).data("timeago",{datetime:i}),o.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:o.parse(o.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?r[t]:r.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),function(){var t=document.getElementById("site-navigation"),e=document.getElementById("responsive-menu"),a=document.getElementById("responsive-menu-toggle");if(t&&void 0!==a){if(void 0===e)return void(a.style.display="none");a.onclick=function(){-1!==a.className.indexOf("active")?(t.style.display="none",a.className=a.className.replace(" active","")):(t.style.display="block",a.className+=" active")},e.onclick=function(){-1!==a.className.indexOf("active")?(t.style.display="none",a.className=a.className.replace(" active","")):(t.style.display="block",a.className+=" active")}}}(),function(t){t(function(){t.timeago&&t("time").timeago()});var e=new ScrollMagic.Controller({globalSceneOptions:{duration:300}}),a=TweenMax.to(".build-wrap",1,{className:"+=move-build"});new ScrollMagic.Scene({triggerElement:"#what-we-do",triggerHook:"onEnter",offset:700,duration:200}).setTween(a).addTo(e);var i=TweenMax.to(".rocket-wrap",1,{className:"+=move-rocket"});new ScrollMagic.Scene({triggerElement:"#what-we-do",triggerHook:"onEnter",offset:700,duration:200}).setTween(i).addTo(e);var n=TweenMax.to(".zipper-wrap",1,{className:"+=move-zip"});new ScrollMagic.Scene({triggerElement:"#what-we-do",triggerHook:"onEnter",offset:700,duration:200}).setTween(n).addTo(e),t(window).on("resize",function(){t("html").width()<769?e.enabled()&&e.enabled(!1):e.enabled()||e.enabled(!0),e.update(!0)}),t('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=t(this.hash);a=a.length?a:t("[name="+this.hash.slice(1)+"]"),a.length&&(e.preventDefault(),t("html, body").animate({scrollTop:a.offset().top-80},1e3,function(){var e=t(a);if(e.focus(),e.is(":focus"))return!1;e.focus()}))}}),t(".top-slider").slick({arrows:!1,dots:!0}),t(".left-arrow").click(function(){t(".slick-slider").slick("slickPrev")}),t(".right-arrow").click(function(){t(".slick-slider").slick("slickNext")})}(jQuery);
//# sourceMappingURL=x-footer.js.map
