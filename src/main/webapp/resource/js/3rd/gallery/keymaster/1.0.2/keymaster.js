define("gallery/keymaster/1.0.2/keymaster", [], function (e, t, n) {
    var r = {}, i = function (e, t, n) {
        r.key(e, t, n)
    };
    (function () {
        (function (e) {
            function l(e, t) {
                var n = e.length;
                while (n--)if (e[n] === t)return n;
                return-1
            }

            function c(e, t) {
                var n, i, o, a, c;
                n = e.keyCode, l(f, n) == -1 && f.push(n);
                if (n == 93 || n == 224)n = 91;
                if (n in s) {
                    s[n] = !0;
                    for (o in u)u[o] == n && (d[o] = !0);
                    return
                }
                if (!d.filter.call(this, e))return;
                if (!(n in r))return;
                for (a = 0; a < r[n].length; a++) {
                    i = r[n][a];
                    if (i.scope == t || i.scope == "all") {
                        c = i.mods.length > 0;
                        for (o in s)if (!s[o] && l(i.mods, +o) > -1 || s[o] && l(i.mods, +o) == -1)c = !1;
                        (i.mods.length == 0 && !s[16] && !s[18] && !s[17] && !s[91] || c) && i.method(e, i) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
                    }
                }
            }

            function h(e) {
                var t = e.keyCode, n, r = l(f, t);
                r >= 0 && f.splice(r, 1);
                if (t == 93 || t == 224)t = 91;
                if (t in s) {
                    s[t] = !1;
                    for (n in u)u[n] == t && (d[n] = !1)
                }
            }

            function p() {
                for (t in s)s[t] = !1;
                for (t in u)d[t] = !1
            }

            function d(e, t, n) {
                var i, s, o, f;
                n === undefined && (n = t, t = "all"), e = e.replace(/\s/g, ""), i = e.split(","), i[i.length - 1] == "" && (i[i.length - 2] += ",");
                for (o = 0; o < i.length; o++) {
                    s = [], e = i[o].split("+");
                    if (e.length > 1) {
                        s = e.slice(0, e.length - 1);
                        for (f = 0; f < s.length; f++)s[f] = u[s[f]];
                        e = [e[e.length - 1]]
                    }
                    e = e[0], e = a[e] || e.toUpperCase().charCodeAt(0), e in r || (r[e] = []), r[e].push({shortcut: i[o], scope: t, method: n, key: i[o], mods: s})
                }
            }

            function v(e) {
                if (typeof e == "string") {
                    if (e.length != 1)return!1;
                    e = e.toUpperCase().charCodeAt(0)
                }
                return l(f, e) != -1
            }

            function m() {
                return f
            }

            function g(e) {
                var t = (e.target || e.srcElement).tagName;
                return t != "INPUT" && t != "SELECT" && t != "TEXTAREA"
            }

            function y(e) {
                o = e || "all"
            }

            function b() {
                return o || "all"
            }

            function w(e) {
                var t, n, i;
                for (t in r) {
                    n = r[t];
                    for (i = 0; i < n.length;)n[i].scope === e ? n.splice(i, 1) : i++
                }
            }

            function E(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function () {
                    n(window.event)
                })
            }

            function x() {
                var t = e.key;
                return e.key = S, t
            }

            var t, r = {}, s = {16: !1, 18: !1, 17: !1, 91: !1}, o = "all", u = {"⇧": 16, shift: 16, "⌥": 18, alt: 18, option: 18, "⌃": 17, ctrl: 17, control: 17, "⌘": 91, command: 91}, a = {backspace: 8, tab: 9, clear: 12, enter: 13, "return": 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, "delete": 46, home: 36, end: 35, pageup: 33, pagedown: 34, ",": 188, ".": 190, "/": 191, "`": 192, "-": 189, "=": 187, ";": 186, "'": 222, "[": 219, "]": 221, "\\": 220}, f = [];
            for (t = 1; t < 20; t++)u["f" + t] = 111 + t;
            for (t in u)d[t] = !1;
            E(document, "keydown", function (e) {
                c(e, o)
            }), E(document, "keyup", h), E(window, "focus", p);
            var S = e.key;
            e.key = d, e.key.setScope = y, e.key.getScope = b, e.key.deleteScope = w, e.key.filter = g, e.key.isPressed = v, e.key.getPressedKeyCodes = m, e.key.noConflict = x, typeof n != "undefined" && (n.exports = e.key)
        })(this)
    }).call(r)
});
