jQuery.webshims.register("form-extend",function(a,c,h,g,m,l){h=h.Modernizr;m=h.inputtypes;if(h.formvalidation&&!c.bugs.bustedValidity){var d=c.inputTypes,q={};c.addInputType=function(a,e){d[a]=e};c.addValidityRule=function(a,e){q[a]=e};c.addValidityRule("typeMismatch",function(a,e,b,f){if(""===e)return!1;f=f.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();d[b.type]&&d[b.type].mismatch&&(f=d[b.type].mismatch(e,a));return f});var k=l.overrideMessages,p=!m.number||
!m.time||!m.range||k,s="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),l=k?["value","checked"]:["value"],i=[],r=function(e,b){if(e){var f=(e.getAttribute&&e.getAttribute("type")||e.type||"").toLowerCase();if(k||d[f])k&&!b&&"radio"==f&&e.name?a(g.getElementsByName(e.name)).each(function(){a.prop(this,"validity")}):a.prop(e,"validity")}},b={};["input","textarea","select"].forEach(function(e){var f=c.defineNodeNameProperty(e,
"setCustomValidity",{prop:{value:function(b){var b=b+"",j="input"==e?a(this).getNativeElement()[0]:this;f.prop._supvalue.call(j,b);c.bugs.validationMessage&&c.data(j,"customvalidationMessage",b);p&&(c.data(j,"hasCustomError",!!b),r(j))}}});b[e]=f.prop._supvalue});if(p||k)l.push("min"),l.push("max"),l.push("step"),i.push("input");k&&(l.push("required"),l.push("pattern"),i.push("select"),i.push("textarea"));if(p){var f;i.forEach(function(e){var j=c.defineNodeNameProperty(e,"validity",{prop:{get:function(){if(!f){var n=
"input"==e?a(this).getNativeElement()[0]:this,o=j.prop._supget.call(n);if(!o)return o;var i={};s.forEach(function(a){i[a]=o[a]});if(!a.prop(n,"willValidate"))return i;f=!0;var h=a(n),g={type:(n.getAttribute&&n.getAttribute("type")||"").toLowerCase(),nodeName:(n.nodeName||"").toLowerCase()},l=h.val(),r=!!c.data(n,"hasCustomError"),m;f=!1;i.customError=r;if(i.valid&&i.customError)i.valid=!1;else if(!i.valid){var p=!0;a.each(i,function(a,e){if(e)return p=!1});if(p)i.valid=!0}a.each(q,function(a,f){i[a]=
f(h,l,g,i);if(i[a]&&(i.valid||!m)&&(k||d[g.type]&&d[g.type].mismatch))b[e].call(n,c.createValidationMessage(n,a)),i.valid=!1,m=!0});i.valid?(b[e].call(n,""),c.data(n,"hasCustomError",!1)):k&&!m&&!r&&a.each(i,function(a,f){if("valid"!==a&&f)return b[e].call(n,c.createValidationMessage(n,a)),!1});return i}},writeable:!1}})});l.forEach(function(a){c.onNodeNamesPropertyModify(i,a,function(){r(this)})});if(g.addEventListener){var j,o=function(e){if("form"in e.target){var b=e.target.form;clearTimeout(j);
r(e.target);b&&k&&a("input",b).each(function(){"password"==this.type&&r(this)})}};g.addEventListener("change",o,!0);k&&(g.addEventListener("blur",o,!0),g.addEventListener("keydown",function(a){13==a.keyCode&&o(a)},!0));g.addEventListener("input",function(a){clearTimeout(j);j=setTimeout(function(){r(a.target)},290)},!0)}var e=i.join(",");c.addReady(function(b,f){a(e,b).add(f.filter(e)).each(function(){a.prop(this,"validity")})});k&&c.ready("DOM form-message",function(){c.activeLang({register:"form-core",
callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!c.data(this,"hasCustomError")){var e=this,f=a.prop(e,"validity")||{valid:!0},j;f.valid||(j=(e.nodeName||"").toLowerCase(),a.each(f,function(a,f){if("valid"!==a&&f)return b[j].call(e,c.createValidationMessage(e,a)),!1}))}})}})})}c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}})}});
(function(a){var c=window.Modernizr,h=a.webshims,g=h.bugs,m=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),l=function(){if(m[0].querySelector)try{g.findRequired=!m[0].querySelector("select:required")}catch(a){g.findRequired=!1}};g.findRequired=!1;g.validationMessage=!1;g.valueAsNumberSet=!1;h.capturingEventPrevented=function(c){if(!c._isPolyfilled){var d=c.isDefaultPrevented,
b=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return b.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};c._isPolyfilled=!0}};if(!c.formvalidation||g.bustedValidity)l();else if(h.capturingEvents(["input"]),h.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var d=a("input",m).eq(0),q,k=function(a){h.loader.loadList(["dom-extend"]);h.ready("dom-extend",a)},p=function(i){var g=["form-extend","form-message","form-native-fix"];i&&(i.preventDefault(),i.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){m&&(m.remove(),m=d=null)},9);if(!c.bugfreeformvalidation)h.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),h.modules["form-extend"].test=a.noop;h.isReady("form-number-date-api")&&
g.push("form-number-date-api");h.reTest(g);if(d)try{d.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&k(function(){h.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});h.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(b){}(a.browser.opera||window.testGoodWithFix)&&
k(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var o=h.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){h.fromSubmit||a(this).bind("invalid.checkvalidity",b);h.fromCheckValidity=!0;var e=o.prop._supvalue.apply(this,arguments);h.fromSubmit||a(this).unbind("invalid.checkvalidity",b);h.fromCheckValidity=!1;return e}}})})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){l();g.validationMessage=!d.prop("validationMessage");
if((c.inputtypes||{}).date){try{d.prop("valueAsNumber",0)}catch(s){}g.valueAsNumberSet="1970-01-01"!=d.prop("value")}d.prop("value","")}m.bind("submit",function(a){c.bugfreeformvalidation=!1;p(a)});q=setTimeout(function(){m&&m.triggerHandler("submit")},9);a("input, select",m).bind("invalid",p).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,h,g,m,l){var d={radio:1},q={checkbox:1,radio:1},k=a([]),p=c.bugs,s=function(e){var e=a(e),b,f;b=k;if(d[e[0].type])f=e.prop("form"),b=(b=e[0].name)?f?a(f[b]):a(g.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):e,b=b.filter('[type="radio"]');return b},i=c.getContentValidationMessage=function(e,b,f){var c=a(e).data("errormessage")||e.getAttribute("x-moz-errormessage")||"";f&&c[f]&&(c=c[f]);"object"==typeof c&&(b=b||a.prop(e,"validity")||
{valid:1},b.valid||a.each(b,function(a,e){if(e&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},r={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(e){return!(!a.prop(e,"willValidate")||!(a.prop(e,"validity")||{valid:1}).valid)},"invalid-element":function(e){return!(!a.prop(e,"willValidate")||(a.prop(e,"validity")||{valid:1}).valid)},"required-element":function(e){return!(!a.prop(e,"willValidate")||!a.prop(e,"required"))},"optional-element":function(e){return!!(a.prop(e,
"willValidate")&&!1===a.prop(e,"required"))},"in-range":function(e){if(!r[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||e.rangeOverflow||e.rangeUnderflow)},"out-of-range":function(e){if(!r[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||!e.rangeOverflow&&!e.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(e){a.expr.filters[e]=a.expr.filters[e+"-element"]});a.expr.filters.focus=function(a){try{var b=
a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(f){}return!1};var b=a.event.customEvent||{};(p.bustedValidity||p.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var e=a.find,b=a.find.matchesSelector,f=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,c=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var t=arguments,t=a.call(t,1,t.length);t.unshift(b.replace(f,c));return e.apply(this,
t)},t;for(t in e)e.hasOwnProperty(t)&&(b[t]=e[t]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",g.documentElement))a.find.matchesSelector=function(a,e){e=e.replace(f,c);return b.call(this,a,e)}}();var f=a.prop,j={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(e,b,c){var o=f.apply(this,arguments);if(e&&"form"in e&&j[b]&&c!==m&&a(e).hasClass("form-ui-invalid")&&(a.prop(e,"validity")||{valid:1}).valid)a(e).getShadowElement().removeClass("form-ui-invalid"),
"checked"==b&&c&&s(e).not(e).removeClass("form-ui-invalid").removeAttr("aria-invalid");return o};var o=function(b,f){var c;a.each(b,function(b,e){if(e)return c="customError"==b?a.prop(f,"validationMessage"):b,!1});return c};a(g).bind(l.validityUIEvents||"focusout change refreshvalidityui",function(b){var f,c;if(b.target&&(f=a(b.target).getNativeElement()[0],"submit"!=f.type&&a.prop(f,"willValidate"))){c=a.data(f,"webshimsswitchvalidityclass");var j=function(){var c=a.prop(f,"validity"),j=a(f).getShadowElement(),
d,i,n,g;a(f).trigger("refreshCustomValidityRules");c.valid?j.hasClass("form-ui-valid")||(d="form-ui-valid",i="form-ui-invalid",g="changedvaliditystate",n="changedvalid",q[f.type]&&f.checked&&s(f).not(f).removeClass(i).addClass(d).removeAttr("aria-invalid"),a.removeData(f,"webshimsinvalidcause")):(c=o(c,f),a.data(f,"webshimsinvalidcause")!=c&&(a.data(f,"webshimsinvalidcause",c),g="changedvaliditystate"),j.hasClass("form-ui-invalid")||(d="form-ui-invalid",i="form-ui-valid",q[f.type]&&!f.checked&&s(f).not(f).removeClass(i).addClass(d),
n="changedinvalid"));d&&(j.addClass(d).removeClass(i),setTimeout(function(){a(f).trigger(n)},0));g&&setTimeout(function(){a(f).trigger(g)},0);a.removeData(b.target,"webshimsswitchvalidityclass")};c&&clearTimeout(c);"refreshvalidityui"==b.type?j():a.data(b.target,"webshimsswitchvalidityclass",setTimeout(j,9))}});b.changedvaliditystate=!0;b.refreshCustomValidityRules=!0;b.changedvalid=!0;b.changedinvalid=!0;b.refreshvalidityui=!0;c.triggerInlineForm=function(b,f){a(b).trigger(f)};c.modules["form-core"].getGroupElements=
s;p=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==g.compatMode?a(g.body):a(g.documentElement)};p();c.ready("DOM",p);c.getRelOffset=function(b,f){var b=a(b),c=a(f).offset(),j;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){j=b.offset()});c.top-=j.top;c.left-=j.left;return c};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",f,j=!1,o=!1,d,k={hideDelay:5E3,showFor:function(b,e,c,i){k._create();var b=a(b),g=
a(b).getShadowElement(),l=k.getOffsetFromBody(g);k.clear();i?this.hide():(this.getMessage(b,e),this.position(g,l),f.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(d,this.hideDelay)),a(h).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(o);o=setTimeout(function(){k.position(g)},9)}));c||this.setFocus(g,l)},getOffsetFromBody:function(a){return c.getRelOffset(f,a)},setFocus:function(j,
o){var i=a(j).getShadowFocusElement(),k=c.scrollRoot.scrollTop(),h=(o||i.offset()).top-30,n;c.getID&&"label"==b&&f.attr("for",c.getID(i));k>h&&(c.scrollRoot.animate({scrollTop:h-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-h)),80)}),n=!0);try{i[0].focus()}catch(l){}n&&(c.scrollRoot.scrollTop(k),setTimeout(function(){c.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(g).bind("focusout.validityalert",d)},10)},getMessage:function(b,e){e||(e=i(b[0])||b.prop("validationMessage"));e?a("span.va-box",
f).text(e):this.hide()},position:function(b,e){e=e?a.extend({},e):k.getOffsetFromBody(b);e.top+=b.outerHeight();f.css(e)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);a(g).unbind(".validityalert");a(h).unbind(".validityalert");f.stop().removeAttr("for")},_create:function(){if(!f)f=k.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}};d=a.proxy(k,"hide");return k}();(function(){var b,f=[],c;a(g).bind("invalid",function(j){if(!j.wrongWebkitInvalid){var o=a(j.target),d=o.getShadowElement();console.log(d);d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(j.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=j.isDefaultPrevented,d=a.Event("firstinvalidsystem"),a(g).triggerHandler(d,{element:j.target,form:j.target.form,isInvalidUIPrevented:j.isDefaultPrevented}),o.trigger(b);b&&b.isDefaultPrevented()&&j.preventDefault();f.push(j.target);j.extraData="fix";clearTimeout(c);c=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:a(f)};b=!1;f=[];a(j.target).trigger(c,c)},9);d=o=null}})})();a.fn.getErrorMessage=function(){var b="",
f=this[0];f&&(b=i(f)||a.prop(f,"customValidationMessage")||a.prop(f,"validationMessage"));return b};l.replaceValidationUI&&c.ready("DOM forms",function(){a(g).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,c,h,g,m,l){var d=c.validityMessages,h=l.overrideMessages||l.customMessages?["customValidationMessage"]:[];d.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},d.en||d["en-US"]||{});["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]="Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},d.de||{});["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var q=d[""];c.createValidationMessage=function(c,d){var g=q[d];g&&"string"!==typeof g&&(g=g[a.prop(c,"type")]||g[(c.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==g.indexOf("{%"+d)){var h=("label"==d?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.attr(c,d))||"";g=g.replace("{%"+d+"}",h);"value"==d&&(g=g.replace("{%valueLen}",h.length))}});return g||""};(c.bugs.validationMessage||!Modernizr.formvalidation||
c.bugs.bustedValidity)&&h.push("validationMessage");c.activeLang({langObj:d,module:"form-core",callback:function(a){q=a}});h.forEach(function(d){c.defineNodeNamesProperty(["fieldset","output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(g){var h=c.defineNodeNameProperty(g,d,{prop:{get:function(){var d=this,g="";if(!a.prop(d,"willValidate"))return g;var b=a.prop(d,"validity")||{valid:1};if(b.valid||(g=c.getContentValidationMessage(d,b)))return g;if(b.customError&&
d.nodeName&&(g=Modernizr.formvalidation&&!c.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(d):c.data(d,"customvalidationMessage")))return g;a.each(b,function(a,b){if("valid"!=a&&b&&(g=c.createValidationMessage(d,a)))return!1});return g||""},writeable:!1}})})})});
jQuery.webshims.register("form-datalist",function(a,c,h,g,m){c.propTypes.element=function(h){c.createPropDefault(h,"attr");if(!h.prop)h.prop={get:function(){var c=h.attr.get.call(this);c&&(c=g.getElementById(c))&&h.propNodeName&&!a.nodeName(c,h.propNodeName)&&(c=null);return c||null},writeable:!1}};(function(){var l=a.webshims.cfg.forms,d=Modernizr.input.list;if(!d||l.customDatalist){var q=0,k={submit:1,button:1,reset:1,hidden:1,range:1,date:1},p=a.browser.msie&&7>parseInt(a.browser.version,10),s=
{},i=function(a){if(!a)return[];if(s[a])return s[a];var f;try{f=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}s[a]=f||[];return f||[]},r={_create:function(b){if(!k[a.prop(b.input,"type")]){var f=b.datalist,c=a.data(b.input,"datalistWidget");if(f&&c&&c.datalist!==f)c.datalist=f,c.id=b.id,c.shadowList.prop("className","datalist-polyfill "+(c.datalist.className||"")+" "+c.datalist.id+"-shadowdom"),l.positionDatalist?c.shadowList.insertAfter(b.input):c.shadowList.appendTo("body"),
a(c.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(c,"_resetListCached")),c._resetListCached();else if(f){if(!(c&&c.datalist===f)){q++;var d=this;this.hideList=a.proxy(d,"hideList");this.timedHide=function(){clearTimeout(d.hideTimer);d.hideTimer=setTimeout(d.hideList,9)};this.datalist=f;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+
(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');l.positionDatalist||a(b.input).hasClass("position-datalist")?this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(c){var f=a("li:not(.hidden-item)",d.shadowList),j="mousedown"==c.type||"click"==c.type;d.markItem(f.index(c.currentTarget),j,f);"click"==
c.type&&(d.hideList(),l.customDatalist&&a(b.input).trigger("datalistselect"));return"mousedown"!=c.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!d.triggeredByDatalist)d.changedValue=!1,d.showHideOptions()}).bind("keydown.datalistWidget",function(c){var f=c.keyCode,j;if(40==f&&!d.showList())return d.markItem(d.index+1,!0),!1;if(d.isListVisible){if(38==f)return d.markItem(d.index-
1,!0),!1;if(!c.shiftKey&&(33==f||36==f))return d.markItem(0,!0),!1;if(!c.shiftKey&&(34==f||35==f))return c=a("li:not(.hidden-item)",d.shadowList),d.markItem(c.length-1,!0,c),!1;if(13==f||27==f)return 13==f&&(j=a("li.active-item:not(.hidden-item)",d.shadowList),d.changeValue(a("li.active-item:not(.hidden-item)",d.shadowList))),d.hideList(),l.customDatalist&&j&&j[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&d.showList()}).bind("mousedown.datalistWidget",
function(){a(this).is(":focus")&&d.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&(b.input.name||b.input.id)&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){if(!a(b.input).hasClass("no-datalist-cache")&&"off"!=d._autocomplete){var c=a.prop(b.input,"value"),f=(b.input.name||b.input.id)+a.prop(b.input,"type");
if(!d.storedOptions)d.storedOptions=i(f);if(c&&-1==d.storedOptions.indexOf(c)&&(d.storedOptions.push(c),c=d.storedOptions,f)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+f,JSON.stringify(c))}catch(j){}}}});a(h).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){d.destroy()})}}else c&&c.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(g).unbind(".datalist"+
this.id);a(h).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===m?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var f=this,d;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(h.QUnit||(d=a&&g.activeElement==f.input)?f.updateListOptions(d):c.ready("WINDOWLOAD",function(){f.updateTimer=
setTimeout(function(){f.updateListOptions();f=null;q=1},200+100*q)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.css(this.input,"fontSize"),fontFamily:a.css(this.input,"fontFamily")});this.searchStart=l.customDatalist&&a(this.input).hasClass("search-start");var c=[],d=[],g=[],e,h,k,n;for(h=a.prop(this.datalist,"options"),k=0,n=h.length;k<n;k++){e=h[k];if(e.disabled)return;e={value:a(e).val()||"",text:a.trim(a.attr(e,
"label")||e.textContent||e.innerText||a.text([e])||""),className:e.className||"",style:a.attr(e,"style")||""};e.text?e.text!=e.value&&(e.className+=" different-label-value"):e.text=e.value;d[k]=e.value;g[k]=e}if(!this.storedOptions)this.storedOptions=a(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:i((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==d.indexOf(a)&&g.push({value:a,text:a,className:"stored-suggest",style:""})});
for(k=0,n=g.length;k<n;k++)h=g[k],c[k]='<li class="'+h.className+'" style="'+h.style+'" tabindex="-1" role="listitem"><span class="option-label">'+h.text+'</span> <span class="option-value">'+h.value+"</span></li>";this.arrayOptions=g;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+c.join("\n")+"</ul></div></div>");a.fn.bgIframe&&p&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var c=a.prop(this.input,
"value").toLowerCase();if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var d=!1,g=this.searchStart,e=a("li",this.shadowList);c?this.arrayOptions.forEach(function(b,h){var i;if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.value.toLowerCase()+b.text.toLowerCase():b.text.toLowerCase();i=b.lowerText.indexOf(c);(i=g?!i:-1!==i)?(a(e[h]).removeClass("hidden-item"),d=!0):a(e[h]).addClass("hidden-item")}):e.length&&(e.removeClass("hidden-item"),
d=!0);this.hasViewableData=d;!b&&d&&this.showList();if(!d)this.lastUnfoundValue=c,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=l.positionDatalist?a(this.input).position():c.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",
marginLeft:"",marginRight:"",marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,c;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");a(g).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(c){c.target===b.input||b.shadowList[0]===c.target||
a.contains(b.shadowList[0],c.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(h).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(c);c=setTimeout(function(){b.setPos()},9)});clearTimeout(c);return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,f=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");
b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;c.triggerInlineForm&&c.triggerInlineForm(b.input,"input");if(a(b.input).is(":focus"))a(b.input).one("blur",f);else f();b.triggeredByDatalist=!1}a(g).unbind(".datalist"+b.id);a(h).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){b.shadowList.css({top:0,left:0});a(h).unbind(".datalist"+b.id)});return!0},scrollIntoView:function(b){var c=a("ul",this.shadowList),
d=a("div.datalist-box",this.shadowList),g=b.position();g.top-=(parseInt(c.css("paddingTop"),10)||0)+(parseInt(c.css("marginTop"),10)||0)+(parseInt(c.css("borderTopWidth"),10)||0);0>g.top?d.scrollTop(d.scrollTop()+g.top-2):(g.top+=b.outerHeight(),b=d.height(),g.top>b&&d.scrollTop(d.scrollTop()+(g.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),c=a.prop(this.input,"value");if(b!=c)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,
c,d){d=d||a("li:not(.hidden-item)",this.shadowList);if(d.length)0>b?b=d.length-1:b>=d.length&&(b=0),d.removeClass("active-item"),this.shadowList.addClass("list-item-active"),d=d.filter(":eq("+b+")").addClass("active-item"),c&&(this.changeValue(d),this.scrollIntoView(d)),this.index=b}};(function(){d||c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&c.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers."));
return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var c=a.data(this,"datalistWidget");c?(c._autocomplete=b,"off"==b&&c.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};d?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||c.defineNodeNameProperty("datalist","options",
{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}}),b.list={attr:{get:function(){var b=c.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");return null==b?m:b},set:function(b){a.data(this,"datalistListAttr",b);c.objectCreate(r,m,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):
b.list={attr:{get:function(){var a=c.contentAttr(this,"list");return null==a?m:a},set:function(b){c.contentAttr(this,"list",b);c.objectCreate(r,m,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};c.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;c.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
