/** 
 * Html5 Placeholder Polyfill - v2.0.4 - 2012-09-21
 * web: * http://blog.ginader.de/dev/jquery/HTML5-placeholder-polyfill/
 * issues: * https://github.com/ginader/HTML5-placeholder-polyfill/issues
 * Copyright (c) 2012 Dirk Ginader; Licensed MIT, GPL 
*/
(function(e){function r(e,t){e.val()===""?e.data("placeholder").removeClass(t.hideClass):e.data("placeholder").addClass(t.hideClass)}function i(e,t){e.data("placeholder").addClass(t.hideClass)}function s(e,t){var n=t.is("textarea"),r=t.offset();if(t.css("padding")&&t.css("padding")!=="0px"){var i=t.css("padding").split(" ");r.top+=Number(i[0].replace("px","")),r.left+=Number(i[i.length-1].replace("px",""))}else t.css("padding-top")&&t.css("padding-top")!=="0px"&&(r.top+=Number(t.css("padding-top").replace("px",""))),t.css("padding-left")&&t.css("padding-left")!=="0px"&&(r.left+=Number(t.css("padding-left").replace("px","")));e.css({width:t.innerWidth()-(n?20:4),height:t.innerHeight()-6,lineHeight:t.css("line-height"),whiteSpace:n?"normal":"nowrap",overflow:"hidden"}).offset(r)}function o(e,t){var r=e.val();(function s(){n=requestAnimationFrame(s),e.val()!==r&&(i(e,t),a(),u(e,t))})()}function u(e,t){var i=e.val();(function s(){n=requestAnimationFrame(s),r(e,t)})()}function a(){cancelAnimationFrame(n)}function f(e){t&&window.console&&window.console.log&&window.console.log(e)}var t=!1,n;e.fn.placeHolder=function(t){f("init placeHolder");var n=this,u=e(this).length;return this.options=e.extend({className:"placeholder",visibleToScreenreaders:!0,visibleToScreenreadersHideClass:"placeholder-hide-except-screenreader",visibleToNoneHideClass:"placeholder-hide",hideOnFocus:!1,removeLabelClass:"visuallyhidden",hiddenOverrideClass:"visuallyhidden-with-placeholder",forceHiddenOverride:!0,forceApply:!1,autoInit:!0},t),this.options.hideClass=this.options.visibleToScreenreaders?this.options.visibleToScreenreadersHideClass:this.options.visibleToNoneHideClass,e(this).each(function(t){var c=e(this),h=c.attr("placeholder"),p=c.attr("id"),d,v,m,g;d=c.closest("label"),c.removeAttr("placeholder");if(!d.length&&!p){f("the input element with the placeholder needs an id!");return}d=d.length?d:e('label[for="'+p+'"]').first();if(!d.length){f("the input element with the placeholder needs a label!");return}g=e(d).find(".placeholder");if(g.length)return s(g,c),g.text(h),c;d.hasClass(n.options.removeLabelClass)&&d.removeClass(n.options.removeLabelClass).addClass(n.options.hiddenOverrideClass),v=e('<span class="'+n.options.className+'">'+h+"</span>").appendTo(d),m=v.width()>c.width(),m&&v.attr("title",h),s(v,c),c.data("placeholder",v),v.data("input",v),v.click(function(){e(this).data("input").focus()}),c.focusin(function(){!n.options.hideOnFocus&&window.requestAnimationFrame?o(c,n.options):i(c,n.options)}),c.focusout(function(){r(e(this),n.options),!n.options.hideOnFocus&&window.cancelAnimationFrame&&a()}),r(c,n.options),e(document).bind("fontresize resize",function(){s(v,c)}),e.event.special.resize?e("textarea").bind("resize",function(e){s(v,c)}):e("textarea").css("resize","none"),t>=u-1&&(e.attrHooks.placeholder={get:function(t){return t.nodeName.toLowerCase()==="input"||t.nodeName.toLowerCase()==="textarea"?e(t).data("placeholder")?e(e(t).data("placeholder")).text():e(t)[0].placeholder:undefined},set:function(t,n){return e(e(t).data("placeholder")).text(n)}})})},e(function(){var t=window.placeHolderConfig||{};if(t.autoInit===!1){f("placeholder:abort because autoInit is off");return}if("placeholder"in e("<input>")[0]&&!t.forceApply){f("placeholder:abort because browser has native support");return}e("input[placeholder], textarea[placeholder]").placeHolder(t)})})(jQuery);