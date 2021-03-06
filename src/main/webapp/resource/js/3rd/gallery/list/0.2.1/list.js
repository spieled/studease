define("gallery/list/0.2.1/list", [], function (a, b) {
    "use strict";
    var c, d = window.document, e = function (a, b, e) {
        var f, g, h, i, j, k, l = this, m = {updated: []};
        if (this.listContainer = "string" == typeof a ? d.getElementById(a) : a, this.listContainer) {
            this.items = [], this.visibleItems = [], this.matchingItems = [], this.searched = !1, this.filtered = !1, this.list = null, this.templateEngines = {}, this.page = b.page || 200, this.i = b.i || 1, g = {start: function (a, b) {
                b.plugins = b.plugins || {}, this.classes(b), f = new j(l, b), this.callbacks(b), this.items.start(a, b), l.update(), this.plugins(b.plugins)
            }, classes: function (a) {
                a.listClass = a.listClass || "list", a.searchClass = a.searchClass || "search", a.sortClass = a.sortClass || "sort"
            }, callbacks: function (a) {
                l.list = c.getByClass(a.listClass, l.listContainer, !0), c.addEvent(c.getByClass(a.searchClass, l.listContainer), "keyup", l.search), k = c.getByClass(a.sortClass, l.listContainer), c.addEvent(k, "click", l.sort)
            }, items: {start: function (a, b) {
                if (b.valueNames) {
                    var c = this.get(), d = b.valueNames;
                    b.indexAsync ? this.indexAsync(c, d) : this.index(c, d)
                }
                void 0 !== a && l.add(a)
            }, get: function () {
                for (var a = l.list.childNodes, b = [], c = 0, d = a.length; d > c; c++)void 0 === a[c].data && b.push(a[c]);
                return b
            }, index: function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)l.items.push(new i(b, a[c]))
            }, indexAsync: function (a, b) {
                var c = a.splice(0, 100);
                this.index(c, b), a.length > 0 ? setTimeout(function () {
                    g.items.indexAsync(a, b)
                }, 10) : l.update()
            }}, plugins: function (a) {
                for (var b = {templater: f, init: g, initialItems: h, Item: i, Templater: j, sortButtons: k, events: m, reset: p}, c = 0; c < a.length; c++) {
                    a[c][1] = a[c][1] || {};
                    var d = a[c][1].name || a[c][0];
                    l[d] = l.plugins[a[c][0]].call(l, b, a[c][1])
                }
            }}, this.add = function (a, b) {
                b && n(a, b);
                var c = [], d = !1;
                void 0 === a[0] && (a = [a]);
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = null;
                    a[e]instanceof i ? (g = a[e], g.reload()) : (d = l.items.length > l.page ? !0 : !1, g = new i(a[e], void 0, d)), l.items.push(g), c.push(g)
                }
                return l.update(), c
            };
            var n = function (a, b, c) {
                var d = a.splice(0, 100);
                c = c || [], c = c.concat(l.add(d)), a.length > 0 ? setTimeout(function () {
                    n(a, b, c)
                }, 10) : (l.update(), b(c))
            };
            this.show = function (a, b) {
                this.i = a, this.page = b, l.update()
            }, this.remove = function (a, b, c) {
                for (var d = 0, e = 0, g = l.items.length; g > e; e++)l.items[e].values()[a] == b && (f.remove(l.items[e], c), l.items.splice(e, 1), g--, d++);
                return l.update(), d
            }, this.get = function (a, b) {
                for (var c = [], d = 0, e = l.items.length; e > d; d++) {
                    var f = l.items[d];
                    f.values()[a] == b && c.push(f)
                }
                return 0 == c.length ? null : 1 == c.length ? c[0] : c
            }, this.sort = function (a, b) {
                var d = (l.items.length, null), e = a.target || a.srcElement, f = !1, g = "asc", h = "desc", b = b || {};
                void 0 === e ? (d = a, f = b.asc || !1) : (d = c.getAttribute(e, "data-sort"), f = c.hasClass(e, g) ? !1 : !0);
                for (var i = 0, j = k.length; j > i; i++)c.removeClass(k[i], g), c.removeClass(k[i], h);
                f ? (void 0 !== e && c.addClass(e, g), f = !0) : (void 0 !== e && c.addClass(e, h), f = !1), b.sortFunction = b.sortFunction ? b.sortFunction : function (a, b) {
                    return c.sorter.alphanum(a.values()[d], b.values()[d], f)
                }, l.items.sort(b.sortFunction), l.update()
            }, this.search = function (a, b) {
                l.i = 1;
                var c, d, e, g, h, i = [], b = void 0 === b ? l.items[0].values() : b, a = void 0 === a ? "" : a, j = a.target || a.srcElement;
                if (a = void 0 === j ? ("" + a).toLowerCase() : "" + j.value.toLowerCase(), h = l.items, a = a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), f.clear(), "" === a)p.search(), l.searched = !1, l.update(); else {
                    l.searched = !0;
                    for (var k = 0, m = h.length; m > k; k++) {
                        c = !1, d = h[k], g = d.values();
                        for (var n in b)g.hasOwnProperty(n) && null !== b[n] && (e = null != g[n] ? g[n].toString().toLowerCase() : "", "" !== a && e.search(a) > -1 && (c = !0));
                        c ? (d.found = !0, i.push(d)) : d.found = !1
                    }
                    l.update()
                }
                return l.visibleItems
            }, this.filter = function (a) {
                if (l.i = 1, p.filter(), void 0 === a)l.filtered = !1; else {
                    l.filtered = !0;
                    for (var b = l.items, c = 0, d = b.length; d > c; c++) {
                        var e = b[c];
                        e.filtered = a(e) ? !0 : !1
                    }
                }
                return l.update(), l.visibleItems
            }, this.size = function () {
                return l.items.length
            }, this.clear = function () {
                f.clear(), l.items = []
            }, this.on = function (a, b) {
                m[a].push(b)
            };
            var o = function (a) {
                for (var b = m[a].length; b--;)m[a][b]()
            }, p = {filter: function () {
                for (var a = l.items, b = a.length; b--;)a[b].filtered = !1
            }, search: function () {
                for (var a = l.items, b = a.length; b--;)a[b].found = !1
            }};
            this.update = function () {
                var a = l.items, b = a.length;
                l.visibleItems = [], l.matchingItems = [], f.clear();
                for (var c = 0; b > c; c++)a[c].matching() && c + 1 >= l.i && l.visibleItems.length < l.page ? (a[c].show(), l.visibleItems.push(a[c]), l.matchingItems.push(a[c])) : a[c].matching() ? (l.matchingItems.push(a[c]), a[c].hide()) : a[c].hide();
                o("updated")
            }, i = function (a, b, c) {
                var d = this, e = {};
                this.found = !1, this.filtered = !1;
                var g = function (a, b, c) {
                    if (void 0 === b)c ? d.values(a, c) : d.values(a); else {
                        d.elm = b;
                        var e = f.get(d, a);
                        d.values(e)
                    }
                };
                this.values = function (a, b) {
                    if (void 0 === a)return e;
                    for (var c in a)e[c] = a[c];
                    b !== !0 && f.set(d, d.values())
                }, this.show = function () {
                    f.show(d)
                }, this.hide = function () {
                    f.hide(d)
                }, this.matching = function () {
                    return l.filtered && l.searched && d.found && d.filtered || l.filtered && !l.searched && d.filtered || !l.filtered && l.searched && d.found || !l.filtered && !l.searched
                }, this.visible = function () {
                    return d.elm.parentNode ? !0 : !1
                }, g(a, b, c)
            }, j = function (a, b) {
                return b.engine = void 0 === b.engine ? "standard" : b.engine.toLowerCase(), new l.constructor.prototype.templateEngines[b.engine](a, b)
            }, g.start(e, b)
        }
    };
    e.prototype.templateEngines = {}, e.prototype.plugins = {}, e.prototype.templateEngines.standard = function (a, b) {
        function e(a) {
            if (void 0 === a) {
                for (var c = f.childNodes, e = 0, g = c.length; g > e; e++)if (void 0 === c[e].data)return c[e];
                return null
            }
            if (-1 !== a.indexOf("<")) {
                var h = d.createElement("div");
                return h.innerHTML = a, h.firstChild
            }
            return d.getElementById(b.item)
        }

        var f = c.getByClass(b.listClass, a.listContainer, !0), g = e(b.item), h = this, i = {created: function (a) {
            void 0 === a.elm && h.create(a)
        }};
        this.get = function (a, b) {
            i.created(a);
            for (var d = {}, e = 0, f = b.length; f > e; e++) {
                var g = c.getByClass(b[e], a.elm, !0);
                d[b[e]] = g ? g.innerHTML : ""
            }
            return d
        }, this.set = function (a, b) {
            i.created(a);
            for (var d in b)if (b.hasOwnProperty(d)) {
                var e = c.getByClass(d, a.elm, !0);
                e && (e.innerHTML = b[d])
            }
        }, this.create = function (a) {
            if (void 0 === a.elm) {
                var b = g.cloneNode(!0);
                b.id = "", a.elm = b, h.set(a, a.values())
            }
        }, this.remove = function (a) {
            f.removeChild(a.elm)
        }, this.show = function (a) {
            i.created(a), f.appendChild(a.elm)
        }, this.hide = function (a) {
            void 0 !== a.elm && a.elm.parentNode === f && f.removeChild(a.elm)
        }, this.clear = function () {
            if (f.hasChildNodes())for (; f.childNodes.length >= 1;)f.removeChild(f.firstChild)
        }
    }, c = {getByClass: function () {
        return d.getElementsByClassName ? function (a, b, c) {
            return c ? b.getElementsByClassName(a)[0] : b.getElementsByClassName(a)
        } : function (a, b, c) {
            var e = [], f = "*";
            null == b && (b = d);
            for (var g = b.getElementsByTagName(f), h = g.length, i = new RegExp("(^|\\s)" + a + "(\\s|$)"), j = 0, k = 0; h > j; j++)if (i.test(g[j].className)) {
                if (c)return g[j];
                e[k] = g[j], k++
            }
            return e
        }
    }(), addEvent: function (a, b) {
        return b.addEventListener ? function (b, d, e) {
            if ((!b || b instanceof Array || b.length || c.isNodeList(b) || 0 === b.length) && b !== a) {
                if (b && void 0 !== b[0])for (var f = b.length, g = 0; f > g; g++)c.addEvent(b[g], d, e)
            } else b.addEventListener(d, e, !1)
        } : b.attachEvent ? function (b, d, e) {
            if ((!b || b instanceof Array || b.length || c.isNodeList(b) || 0 === b.length) && b !== a) {
                if (b && void 0 !== b[0])for (var f = b.length, g = 0; f > g; g++)c.addEvent(b[g], d, e)
            } else b.attachEvent("on" + d, function () {
                return e.call(b, a.event)
            })
        } : void 0
    }(this, d), getAttribute: function (a, b) {
        var c = a.getAttribute && a.getAttribute(b) || null;
        if (!c)for (var d = a.attributes, e = d.length, f = 0; e > f; f++)void 0 !== b[f] && b[f].nodeName === b && (c = b[f].nodeValue);
        return c
    }, isNodeList: function (a) {
        var b = Object.prototype.toString.call(a);
        return"object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(b) && (0 == a.length || "object" == typeof node && a[0].nodeType > 0) ? !0 : !1
    }, hasClass: function (a, b) {
        var c = this.getAttribute(a, "class") || this.getAttribute(a, "className") || "";
        return c.search(b) > -1
    }, addClass: function (a, b) {
        if (!this.hasClass(a, b)) {
            var c = this.getAttribute(a, "class") || this.getAttribute(a, "className") || "";
            c = c + " " + b + " ", c = c.replace(/\s{2,}/g, " "), a.setAttribute("class", c)
        }
    }, removeClass: function (a, b) {
        if (this.hasClass(a, b)) {
            var c = this.getAttribute(a, "class") || this.getAttribute(a, "className") || "";
            c = c.replace(b, ""), a.setAttribute("class", c)
        }
    }, sorter: {alphanum: function (a, b, c) {
        (void 0 === a || null === a) && (a = ""), (void 0 === b || null === b) && (b = ""), a = a.toString().replace(/&(lt|gt);/g, function (a, b) {
            return"lt" == b ? "<" : ">"
        }), a = a.replace(/<\/?[^>]+(>|$)/g, ""), b = b.toString().replace(/&(lt|gt);/g, function (a, b) {
            return"lt" == b ? "<" : ">"
        }), b = b.replace(/<\/?[^>]+(>|$)/g, "");
        for (var d = this.chunkify(a), e = this.chunkify(b), f = 0; d[f] && e[f]; f++)if (d[f] !== e[f]) {
            var g = Number(d[f]), h = Number(e[f]);
            return c ? g == d[f] && h == e[f] ? g - h : d[f] > e[f] ? 1 : -1 : g == d[f] && h == e[f] ? h - g : d[f] > e[f] ? -1 : 1
        }
        return d.length - e.length
    }, chunkify: function (a) {
        for (var b, c, d = [], e = 0, f = -1, g = 0; b = (c = a.charAt(e++)).charCodeAt(0);) {
            var h = 45 == b || 46 == b || b >= 48 && 57 >= b;
            h !== g && (d[++f] = "", g = h), d[f] += c
        }
        return d
    }}}, b.List = e, b.ListJsHelpers = c, e.prototype.plugins.fuzzySearch = function (a, b) {
        var c = this, d = function (a, b, c) {
            function d(a, c) {
                var d = a / b.length, e = Math.abs(h - c);
                return f ? d + e / f : e ? 1 : d
            }

            var e = c.location || 0, f = c.distance || 100, g = c.threshold || .4;
            if (b === a)return!0;
            if (b.length > 32)return!1;
            var h = e, i = function () {
                for (var a = {}, c = 0; c < b.length; c++)a[b.charAt(c)] = 0;
                for (var c = 0; c < b.length; c++)a[b.charAt(c)] |= 1 << b.length - c - 1;
                return a
            }(), j = g, k = a.indexOf(b, h);
            -1 != k && (j = Math.min(d(0, k), j), k = a.lastIndexOf(b, h + b.length), -1 != k && (j = Math.min(d(0, k), j)));
            var l = 1 << b.length - 1;
            k = -1;
            for (var m, n, o, p = b.length + a.length, q = 0; q < b.length; q++) {
                for (m = 0, n = p; n > m;)d(q, h + n) <= j ? m = n : p = n, n = Math.floor((p - m) / 2 + m);
                p = n;
                var r = Math.max(1, h - n + 1), s = Math.min(h + n, a.length) + b.length, t = Array(s + 2);
                t[s + 1] = (1 << q) - 1;
                for (var u = s; u >= r; u--) {
                    var v = i[a.charAt(u - 1)];
                    if (t[u] = 0 === q ? (1 | t[u + 1] << 1) & v : (1 | t[u + 1] << 1) & v | (1 | (o[u + 1] | o[u]) << 1) | o[u + 1], t[u] & l) {
                        var w = d(q, u - 1);
                        if (j >= w) {
                            if (j = w, k = u - 1, !(k > h))break;
                            r = Math.max(1, 2 * h - k)
                        }
                    }
                }
                if (d(q + 1, h) > j)break;
                o = t
            }
            return 0 > k ? !1 : !0
        };
        return function () {
            var e, f = function (e, f) {
                c.i = 1;
                var g, h, i, j, k, l, m, n = [], o = "boolean" != typeof b.multiSearch ? !0 : b.multiSearch, f = void 0 === f ? c.items[0].values() : f, e = void 0 === e ? "" : e, p = e.target || e.srcElement;
                if (e = void 0 === p ? ("" + e).toLowerCase() : "" + p.value.toLowerCase(), m = c.items, g = o ? e.replace(/ +$/, "").split(/ +/) : [e], a.templater.clear(), "" === e)a.reset.search(), c.searched = !1, c.update(); else {
                    c.searched = !0;
                    for (var q = 0, r = m.length; r > q; q++) {
                        i = !0, j = m[q], l = j.values();
                        for (var s = 0; s < g.length; s++) {
                            h = !1;
                            for (var t in f)l.hasOwnProperty(t) && null !== f[t] && (k = null != l[t] ? l[t].toString().toLowerCase() : "", d(k, g[s], b) && (h = !0));
                            h || (i = !1)
                        }
                        i ? (j.found = !0, n.push(j)) : j.found = !1
                    }
                    c.update()
                }
                return c.visibleItems
            };
            return function () {
                var a = this, b = arguments, c = function () {
                    e = null, f.apply(a, b)
                };
                clearTimeout(e), e = setTimeout(c, 100)
            }
        }()
    }, e.prototype.plugins.paging = function (a, b) {
        var c, d = this, f = function () {
            b = b || {}, c = new e(d.listContainer.id, {listClass: b.pagingClass || "paging", item: "<li><div class='page'></div></li>", valueNames: ["page", "dotted"], searchClass: "nosearchclass", sortClass: "nosortclass"}), d.on("updated", g), g()
        }, g = function () {
            var a = d.matchingItems.length, e = d.i, f = d.page, g = Math.ceil(a / f), j = Math.ceil(e / f), k = b.innerWindow || 2, l = b.left || b.outerWindow || 0, m = b.right || b.outerWindow || 0, m = g - m;
            c.clear();
            for (var n = 1; g >= n; n++) {
                var o = j === n ? "active" : "";
                if (h.number(n, l, m, j, k)) {
                    var p = c.add({page: "<a class='" + o + "' href='javascript:function Z(){Z=\"\"}Z()'>" + n + "</a>", dotted: !1})[0];
                    i(p.elm, n, f)
                } else h.dotted(n, l, m, j, k, c.size()) && c.add({page: "...", dotted: !0})
            }
        }, h = {number: function (a, b, c, d, e) {
            return this.left(a, b) || this.right(a, c) || this.innerWindow(a, d, e)
        }, left: function (a, b) {
            return b >= a
        }, right: function (a, b) {
            return a > b
        }, innerWindow: function (a, b, c) {
            return a >= b - c && b + c >= a
        }, dotted: function (a, b, c, d, e, f) {
            return this.dottedLeft(a, b, c, d, e) || this.dottedRight(a, b, c, d, e, f)
        }, dottedLeft: function (a, b, c, d, e) {
            return a == b + 1 && !this.innerWindow(a, d, e) && !this.right(a, c)
        }, dottedRight: function (a, b, d, e, f, g) {
            return c.items[g - 1].values().dotted ? !1 : a == d && !this.innerWindow(a, e, f) && !this.right(a, d)
        }}, i = function (a, b, c) {
            ListJsHelpers.addEvent(a, "click", function () {
                d.show((b - 1) * c + 1, c)
            })
        };
        return f(), this
    }
});
