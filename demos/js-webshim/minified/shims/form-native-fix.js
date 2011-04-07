jQuery.webshims.register("form-native-fix",function(c,f,e,j,k){if(!(!Modernizr.formvalidation||Modernizr.bugfreeformvalidation)){j=parseFloat(c.browser.version,10);var q=c.browser.webkit&&j<534.19;j=q&&j<533.18;var o=[],l,m,g,h;if(e.addEventListener){var i={timer:k,prevented:false};e.addEventListener("submit",function(a){if(!i.prevented&&a.target.checkValidity&&c.attr(a.target,"novalidate")==null){g=true;c(a.target).checkValidity();g=false}},true);k=function(a){if(c.attr(a.target,"formnovalidate")!=
null){i.timer&&clearTimeout(i.timer);i.prevented=true;i.timer=setTimeout(function(){i.prevented=false},20)}};e.addEventListener("click",k,true);e.addEventListener("touchstart",k,true);e.addEventListener("touchend",k,true)}c(document).bind("firstinvalidsystem",function(a,b){if(m=b.form){l=false;o=[];var d=c(m).unbind("submit.preventInvalidSubmit").bind("submit.preventInvalidSubmit",function(n){if(c.attr(m,"novalidate")==null){n.stopImmediatePropagation();return false}}).data("events").submit;d&&d.length>
1&&d.unshift(d.pop());if(g)l=b}}).bind("invalid",function(a){o.indexOf(a.target)==-1?o.push(a.target):a.stopImmediatePropagation()}).bind("lastinvalid",function(a,b){var d=b.invalidlist[0];if(d&&(q||!Modernizr.requiredSelect&&c.nodeName(d,"select"))&&document.activeElement&&d!==document.activeElement&&l&&!l.isInvalidUIPrevented())f.validityAlert.showFor(d);l=false;o=[];m&&c(m).unbind("submit.preventInvalidSubmit")});if(j){var r,p;(e=c(document).bind("invalid",function(a){if(a.originalEvent&&!g&&!h&&
(c.attr(a.target,"validity")||{}).valid){a.originalEvent.wrongWebkitInvalid=true;a.wrongWebkitInvalid=true;a.stopImmediatePropagation();a.preventDefault();return false}else p=true;clearTimeout(r);r=setTimeout(function(){if(a.target.form&&!p){p=false;c(a.target.form).trigger("submit")}p=false},1)}).data("events").invalid)&&e.length>1&&e.unshift(e.pop());c(document).bind("firstinvalidsystem",function(a,b){h||setTimeout(function(){b.isInvalidUIPrevented()||f.validityAlert.showFor(b.element)},0)})}(function(){if(q){["input",
"textarea","select"].forEach(function(a){var b=f.defineNodeNameProperty(a,"checkValidity",{value:function(){if(!this.willValidate)return true;var d=(c.attr(this,"validity")||{valid:true}).valid;h=true;!d&&b._supvalue&&b._supvalue.call(this)&&c(this).trigger("invalid");h=false;return d}})});f.defineNodeNameProperty("form","checkValidity",{value:function(){var a=true;c(this.elements||[]).each(function(){if(c(this).checkValidity()===false)a=false});return a}})}})();(function(){if(c.browser.opera){var a=
function(b){b.preventDefault()};["form","input","textarea","select"].forEach(function(b){var d=f.defineNodeNameProperty(b,"checkValidity",{value:function(){g||c(this).bind("invalid",a);h=true;var n=d._supvalue.apply(this,arguments);g||c(this).unbind("invalid",a);h=false;return n}})})}})();Modernizr.requiredSelect||f.ready("form-extend",function(){f.addValidityRule("valueMissing",function(a,b,d,n){if(d.nodeName=="select"&&!b&&a.attr("required")){if(!d.type)d.type=a[0].type;if(b=!b){if(!(b=a[0].selectedIndex<
0)){a=a[0];if(a.type=="select-one"&&a.size<2){a=c("> option:first-child",a);b=!a.attr("disabled")&&a.attr("selected")}else b=false}b=b}if(b)return true}return n.valueMissing});f.defineNodeNamesBooleanProperty(["select"],"required",{set:function(a){this.setAttribute("aria-required",a?"true":"false");c.attr(this,"validity")},initAttr:true})})}});
