define("gallery/jquery.artdialog/5.0.3/jquery.artdialog", ["$", "./skins/simple.css"], function (require, exports, module) {

    var jQuery = require("$");

    // artDialog 5.0.3
    (function (e, t, n) {
        function h(e) {
            var t = c.focus;
            t && t._isLock && !t.dom.wrap[0].contains(e.target) && (e.stopPropagation(), t.focus())
        }

        if (document.compatMode === "BackCompat")throw new Error("artDialog: Document types require more than xhtml1.0");
        var r, i = 0, s = document.activeElement, o = e(document.getElementsByTagName("html")[0]), u = "artDialog" + +(new Date), a = t.VBArray && !t.XMLHttpRequest, f = "createTouch"in document && !("onmousemove"in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent), l = !a && !f, c = function (e, t, o) {
            e = e || {};
            if (typeof e == "string" || e.nodeType === 1)e = {content: e, fixed: !f};
            var a, h = c.defaults, p = e.follow = this.nodeType === 1 && this || e.follow;
            for (var d in h)e[d] === n && (e[d] = h[d]);
            e.id = p && p[u + "follow"] || e.id || u + i, a = c.list[e.id];
            if (a)return p && a.follow(p), a.zIndex().focus(), s = document.activeElement, a;
            l || (e.fixed = !1);
            if (!e.button || !e.button.push)e.button = [];
            return t !== n && (e.ok = t), e.ok && e.button.push({id: "ok", value: e.okValue, callback: e.ok, focus: !0}), o !== n && (e.cancel = o), e.cancel && e.button.push({id: "cancel", value: e.cancelValue, callback: e.cancel}), c.defaults.zIndex = e.zIndex, i++, c.list[e.id] = r ? r.constructor(e) : new c.fn.constructor(e)
        };
        c.version = "5.0.2", c.fn = c.prototype = {constructor: function (e) {
            var t;
            return s = document.activeElement, this.closed = !1, this.config = e, this.dom = t = this.dom || this._innerHTML(e), e.skin && t.wrap.addClass(e.skin), t.wrap.css("position", e.fixed ? "fixed" : "absolute"), t.close[e.cancel === !1 ? "hide" : "show"](), t.content.css("padding", e.padding), this.button.apply(this, e.button), this.title(e.title).content(e.content).size(e.width, e.height).time(e.time), this._reset(), this.zIndex(), e.lock && this.lock(), this._addEvent(), this[e.visible ? "visible" : "hidden"]().focus(), r = null, e.initialize && e.initialize.call(this), this
        }, content: function (t) {
            var n, r, i, s, o = this, u = this.dom.content, a = u[0];
            return this._elemBack && (this._elemBack(), delete this._elemBack), typeof t == "string" ? u.html(t) : t && t.nodeType === 1 && (s = t.style.display, n = t.previousSibling, r = t.nextSibling, i = t.parentNode, this._elemBack = function () {
                n && n.parentNode ? n.parentNode.insertBefore(t, n.nextSibling) : r && r.parentNode ? r.parentNode.insertBefore(t, r) : i && i.appendChild(t), t.style.display = s, o._elemBack = null
            }, u.html(""), a.appendChild(t), e(t).show()), this._reset(), this
        }, title: function (e) {
            var t = this.dom, n = t.outer, r = t.title, i = "d-state-noTitle";
            return e === !1 ? (r.hide().html(""), n.addClass(i)) : (r.show().html(e), n.removeClass(i)), this
        }, position: function () {
            var e = this.dom, t = e.wrap[0], n = e.window, r = e.document, i = this.config.fixed, s = i ? 0 : r.scrollLeft(), o = i ? 0 : r.scrollTop(), a = n.width(), f = n.height(), l = t.offsetWidth, c = t.offsetHeight, h = (a - l) / 2 + s, p = (f - c) * 382 / 1e3 + o, d = t.style;
            return d.left = Math.max(parseInt(h), s) + "px", d.top = Math.max(parseInt(p), o) + "px", this._follow && (this._follow.removeAttribute(u + "follow"), this._follow = null), this
        }, size: function (e, t) {
            var n = this.dom.main[0].style;
            return typeof e == "number" && (e += "px"), typeof t == "number" && (t += "px"), n.width = e, n.height = t, this
        }, follow: function (t) {
            var n = e(t), r = this.config;
            if (!t || !t.offsetWidth && !t.offsetHeight)return this.position(this._left, this._top);
            var i = r.fixed, s = u + "follow", o = this.dom, a = o.window, f = o.document, l = a.width(), c = a.height(), h = f.scrollLeft(), p = f.scrollTop(), d = n.offset(), v = t.offsetWidth, m = t.offsetHeight, g = i ? d.left - h : d.left, y = i ? d.top - p : d.top, b = this.dom.wrap[0], w = b.style, E = b.offsetWidth, S = b.offsetHeight, x = g - (E - v) / 2, T = y + m, N = i ? 0 : h, C = i ? 0 : p;
            return x = x < N ? g : x + E > l && g - E > N ? g - E + v : x, T = T + S > c + C && y - S > C ? y - S : T, w.left = parseInt(x + 5) + "px", w.top = parseInt(T - S + 15) + "px", this._follow && this._follow.removeAttribute(s), this._follow = t, t[s] = r.id, this
        }, button: function () {
            var t = this.dom, n = t.buttons, r = n[0], i = "d-state-highlight", s = this._listeners = this._listeners || {}, o = [].slice.call(arguments), a = 0, f, l, c, h, p;
            for (; a < o.length; a++)f = o[a], l = f.value, c = f.id || l, h = !s[c], p = h ? document.createElement("input") : s[c].elem, p.type = "button", p.className = "d-button", s[c] || (s[c] = {}), l && (p.value = l), f.width && (p.style.width = f.width), f.callback && (s[c].callback = f.callback), f.focus && (this._focus && this._focus.removeClass(i), this._focus = e(p).addClass(i), this.focus()), p[u + "callback"] = c, p.disabled = !!f.disabled, h && (s[c].elem = p, r.appendChild(p));
            return n[0].style.display = o.length ? "" : "none", this
        }, visible: function () {
            return this.dom.wrap.css("visibility", "visible"), this.dom.outer.addClass("d-state-visible"), this._isLock && this._lockMask.show(), this
        }, hidden: function () {
            return this.dom.wrap.css("visibility", "hidden"), this.dom.outer.removeClass("d-state-visible"), this._isLock && this._lockMask.hide(), this
        }, close: function () {
            if (this.closed)return this;
            var e = this.dom, t = e.wrap, n = c.list, i = this.config.beforeunload;
            if (i && i.call(this) === !1)return this;
            c.focus === this && (c.focus = null), this._follow && this._follow.removeAttribute(u + "follow"), this._elemBack && this._elemBack(), this.time(), this.unlock(), this._removeEvent(), delete n[this.config.id];
            if (r)t.remove(); else {
                r = this, e.title.html(""), e.content.html(""), e.buttons.html(""), t[0].className = t[0].style.cssText = "", e.outer[0].className = "d-outer", t.css({left: 0, top: 0, position: l ? "fixed" : "absolute"});
                for (var o in this)this.hasOwnProperty(o) && o !== "dom" && delete this[o];
                this.hidden()
            }
            return {}, this.closed = !0, this
        }, time: function (e) {
            var t = this, n = this._timer;
            return n && clearTimeout(n), e && (this._timer = setTimeout(function () {
                t._click("cancel")
            }, e)), this
        }, focus: function () {
            if (this.config.focus)try {
                var e = this._focus && this._focus[0] || this.dom.close[0];
                e && e.focus()
            } catch (t) {
            }
            return this
        }, zIndex: function () {
            var e = this.dom, t = c.focus, n = c.defaults.zIndex++;
            return e.wrap.css("zIndex", n), this._lockMask && this._lockMask.css("zIndex", n - 1), t && t.dom.outer.removeClass("d-state-focus"), c.focus = this, e.outer.addClass("d-state-focus"), this
        }, lock: function () {
            if (this._isLock)return this;
            var n = this, r = this.config, i = this.dom, s = document.createElement("div"), o = e(s), u = c.defaults.zIndex - 1;
            return this.zIndex(), i.outer.addClass("d-state-lock"), o.css({zIndex: u, position: "fixed", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden"}).addClass("d-mask"), l || o.css({position: "absolute", width: e(t).width() + "px", height: e(document).height() + "px"}), o.bind("dblclick", function () {
                n._click("cancel")
            }), document.body.appendChild(s), this._lockMask = o, this._isLock = !0, this
        }, unlock: function () {
            return this._isLock ? (this._lockMask.unbind(), this._lockMask.hide(), this._lockMask.remove(), this.dom.outer.removeClass("d-state-lock"), this._isLock = !1, this) : this
        }, _innerHTML: function (n) {
            var r = document.body;
            if (!r)throw new Error('artDialog: "documents.body" not ready');
            var i = document.createElement("div");
            i.style.cssText = "position:absolute;left:0;top:0", i.innerHTML = c._templates.replace(/{([^}]+)}/g, function (e, t) {
                var r = n[t];
                return typeof r == "string" ? r : ""
            }), r.insertBefore(i, r.firstChild);
            var s, o = 0, u = {}, a = i.getElementsByTagName("*"), f = a.length;
            for (; o < f; o++)s = a[o].className.split("d-")[1], s && (u[s] = e(a[o]));
            return u.window = e(t), u.document = e(document), u.wrap = e(i), u
        }, _click: function (e) {
            var t = this._listeners[e] && this._listeners[e].callback;
            return typeof t != "function" || t.call(this) !== !1 ? this.close() : this
        }, _reset: function () {
            var e = this.config.follow || this._follow;
            e ? this.follow(e) : this.position()
        }, _addEvent: function () {
            var e = this, t = this.dom;
            t.wrap.bind("click", function (n) {
                var r = n.target, i;
                if (r.disabled)return!1;
                if (r === t.close[0])return e._click("cancel"), !1;
                i = r[u + "callback"], i && e._click(i)
            }).bind("mousedown", function () {
                e.zIndex()
            })
        }, _removeEvent: function () {
            this.dom.wrap.unbind()
        }}, c.fn.constructor.prototype = c.fn, e.fn.dialog = e.fn.artDialog = function () {
            var e = arguments;
            return this[this.live ? "live" : "bind"]("click", function () {
                return c.apply(this, e), !1
            }), this
        }, c.focus = null, c.get = function (e) {
            return e === n ? c.list : c.list[e]
        }, c.list = {}, e(document).bind("keydown", function (e) {
            var t = e.target, n = t.nodeName, r = /^input|textarea$/i, i = c.focus, s = e.keyCode;
            if (!i || !i.config.esc || r.test(n) && t.type !== "button")return;
            s === 27 && i._click("cancel")
        }), e.fn.live && e("body").live("focus", h), e(t).bind("resize", function () {
            var e = c.list;
            for (var t in e)e[t]._reset()
        }), c._templates = '<div class="d-outer" role="dialog" tabindex="-1" aria-labelledby="d-title-{id}" aria-describedby="d-content-{id}"><table class="d-border"><tbody><tr><td class="d-nw"></td><td class="d-n"></td><td class="d-ne"></td></tr><tr><td class="d-w"></td><td class="d-c"><div class="d-inner"><table class="d-dialog"><tbody><tr><td class="d-header"><div class="d-titleBar"><div id="d-title-{id}" class="d-title">{title}</div><a class="d-close" href="javascript:;">\u00d7</a></div></td></tr><tr><td class="d-main"><div id="d-content-{id}" class="d-content">{content}</div></td></tr><tr><td class="d-footer"><div class="d-buttons">{buttons}</div></td></tr></tbody></table></div></td><td class="d-e"></td></tr><tr><td class="d-sw"></td><td class="d-s"></td><td class="d-se"></td></tr></tbody></table></div>', c.defaults = {content: '<div class="d-loading"><span>加载中..</span></div>', title: "系统消息", button: null, ok: null, cancel: null, initialize: null, beforeunload: null, okValue: "确定", cancelValue: "取消", width: "auto", height: "auto", padding: "20px 25px", skin: null, time: null, esc: !0, focus: !0, visible: !0, follow: null, lock: !1, fixed: !1, zIndex: 1987}, this.artDialog = e.dialog = e.artDialog = c
    })(jQuery, window);


    // artDialog plugin
    (function (c) {
        c.alert = c.dialog.alert = function (b, a) {
            return c.dialog({id: "Alert", fixed: !0, lock: !0, content: b, ok: !0, beforeunload: a})
        };
        c.confirm = c.dialog.confirm = function (b, a, m) {
            return c.dialog({id: "Confirm", fixed: !0, lock: !0, content: b, ok: a, cancel: m || function () {
            }})
        };
        c.prompt = c.dialog.prompt = function (b, a, m) {
            var d;
            return c.dialog({id: "Prompt", fixed: !0, lock: !0, content: ['<div style="margin-bottom:5px;font-size:12px">', b, '</div><div><input type="text" class="d-input-text" value="', m || "", '" style="width:18em;padding:6px 4px" /></div>'].join(""), initialize: function () {
                d = this.dom.content.find(".d-input-text")[0];
                d.select();
                d.focus()
            }, ok: function () {
                return a && a.call(this, d.value)
            }, cancel: function () {
            }})
        };
        c.dialog.prototype.shake = function () {
            var b = function (a, b, c) {
                var h = +new Date, e = setInterval(function () {
                    var f = (+new Date - h) / c;
                    1 <= f ? (clearInterval(e), b(f)) : a(f)
                }, 13)
            }, a = function (c, d, g, h) {
                var e = h;
                void 0 === e && (e = 6, g /= e);
                var f = parseInt(c.style.marginLeft) || 0;
                b(function (a) {
                    c.style.marginLeft = f + (d - f) * a + "px"
                }, function () {
                    0 !== e && a(c, 1 === e ? 0 : 1.3 * (d / e - d), g, --e)
                }, g)
            };
            return function () {
                a(this.dom.wrap[0], 40, 600);
                return this
            }
        }();
        var o = function () {
            var b = this, a = function (a) {
                var c = b[a];
                b[a] = function () {
                    return c.apply(b, arguments)
                }
            };
            a("start");
            a("over");
            a("end")
        };
        o.prototype = {start: function (b) {
            c(document).bind("mousemove", this.over).bind("mouseup", this.end);
            this._sClientX = b.clientX;
            this._sClientY = b.clientY;
            this.onstart(b.clientX, b.clientY);
            return!1
        }, over: function (b) {
            this._mClientX = b.clientX;
            this._mClientY = b.clientY;
            this.onover(b.clientX - this._sClientX, b.clientY - this._sClientY);
            return!1
        }, end: function (b) {
            c(document).unbind("mousemove", this.over).unbind("mouseup", this.end);
            this.onend(b.clientX, b.clientY);
            return!1
        }};
        var j = c(window), k = c(document), i = document.documentElement, p = !!("minWidth"in i.style) && "onlosecapture"in i, q = "setCapture"in i, r = function () {
            return!1
        }, n = function (b) {
            var a = new o, c = artDialog.focus, d = c.dom, g = d.wrap, h = d.title, e = g[0], f = h[0], i = d.main[0], l = e.style, s = i.style, t = b.target === d.se[0] ? !0 : !1, u = (d = "fixed" === e.style.position) ? 0 : k.scrollLeft(), v = d ? 0 : k.scrollTop(), n = j.width() - e.offsetWidth + u, A = j.height() - e.offsetHeight + v, w, x, y, z;
            a.onstart = function () {
                t ? (w = i.offsetWidth, x = i.offsetHeight) : (y = e.offsetLeft, z = e.offsetTop);
                k.bind("dblclick", a.end).bind("dragstart", r);
                p ? h.bind("losecapture", a.end) : j.bind("blur", a.end);
                q && f.setCapture();
                g.addClass("d-state-drag");
                c.focus()
            };
            a.onover = function (a, b) {
                if (t) {
                    var c = a + w, d = b + x;
                    l.width = "auto";
                    s.width = Math.max(0, c) + "px";
                    l.width = e.offsetWidth + "px";
                    s.height = Math.max(0, d) + "px"
                } else c = Math.max(u, Math.min(n, a + y)), d = Math.max(v, Math.min(A, b + z)), l.left = c + "px", l.top = d + "px"
            };
            a.onend = function () {
                k.unbind("dblclick", a.end).unbind("dragstart", r);
                p ? h.unbind("losecapture", a.end) : j.unbind("blur", a.end);
                q && f.releaseCapture();
                g.removeClass("d-state-drag")
            };
            a.start(b)
        };
        c(document).bind("mousedown", function (b) {
            var a = artDialog.focus;
            if (a) {
                var c = b.target, d = a.config, a = a.dom;
                if (!1 !== d.drag && c === a.title[0] || !1 !== d.resize && c === a.se[0])return n(b), !1
            }
        })
    })(jQuery);

    // 模拟一个loadMask的形式的弹窗
    jQuery.mask = function () {
        return jQuery.dialog({lock: true, content: '<div class="progress-indicator">数据处理中···</div>'});
    };

    // 在弹出了之后，把输入焦点放到第一个可见且可编辑的文本输入框中，如果按了ESC则复位表单，关闭弹窗。
    //var __dialog = jQuery.dialog;
    //jQuery.dialog = function(){
    //    var dialog = __dialog.apply(this, arguments), content = dialog.dom.content;
    //    content.find("INPUT,SELECT,TEXTAREA").each(function(index, input){
    //        var i = jQuery(input), type = i.attr('type') != 'hidden', visible = i.is(":visible"), disabled = i.is(":disabled"), readOnly = i.is("[readOnly]");
    //        if(type && visible && !disabled && !readOnly){
    //            i.focus();
    //            return false;
    //        }
    //    });
    //    content.on('keyup',function(e){
    //        if(e.keyCode == 27){
    //            content.find("FORM").each(function(index,form){
    //                form.reset();
    //            });
    //            dialog.close();
    //        }
    //    });
    //    return dialog;
    //};


    // 如果页面上没有出现artDialog，则在发起AJAX请求时，自动打开一个loadMask遮罩。
    jQuery(document)
        //    .ajaxStart(function(){
        //    var empty = true;
        //    for(var p in jQuery.artDialog.get()){
        //        empty = false;
        //        break;
        //    }
        //    if(empty){
        //        jQuery.__global_mask = jQuery.mask();
        //    }
        //}).ajaxComplete(function(){
        //    if(jQuery.__global_mask){
        //        jQuery.__global_mask.close();
        //    }
        //})
        .ajaxError(function (e, xhr, config) {
            console.log("请求失败，请求URL：" + config.url + "，错误代码：" + xhr.status + "，错误信息：" + xhr.statusText);
        });

    module.exports = jQuery;

});