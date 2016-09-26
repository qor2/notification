!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function n(i,o){this.$element=t(i),this.options=t.extend({},n.DEFAULTS,t.isPlainObject(o)&&o),this.init()}var i="qor.notification",o="enable."+i,e="disable."+i,u="undo.qor.action",a="notification",r=".qor-notifications__item",s=".qor-notifications__item-undo";return n.prototype={constructor:n,init:function(){this.bind()},bind:function(){this.$element.on(u,t.proxy(this.undo,this))},undo:function(i,o,e,u){var c,d=o.data(),f=d.undoType,l=o.closest(r),b=l.length?l:o.closest(s).prev(r);u.undoLabel=d.undoLabel,c=t(window.Mustache.render(n.UNDO_HTML,u)),!e&&c.find("button").data(d),f==a&&(b.before(u.notification),e?b.next(s).remove():b.after(c),b.remove())},unbind:function(){this.$element.off(u,this.undo)},destroy:function(){this.unbind(),this.$element.removeData(i)}},n.DEFAULTS={},n.UNDO_HTML='<div class="qor-notifications__item-undo"><span>[[message]]</span><button class="mdl-button mdl-button--colored qor-action-button is_undo" type="button" data-undo-type="notification">[[undoLabel]]</button></div>',n.plugin=function(o){return this.each(function(){var e,u=t(this),a=u.data(i);if(!a){if(/destroy/.test(o))return;u.data(i,a=new n(this,o))}"string"==typeof o&&t.isFunction(e=a[o])&&e.apply(a)})},t(function(){var i=".qor-notifications";t(document).on(e,function(o){n.plugin.call(t(i,o.target),"destroy")}).on(o,function(o){n.plugin.call(t(i,o.target))}).triggerHandler(o)}),n});