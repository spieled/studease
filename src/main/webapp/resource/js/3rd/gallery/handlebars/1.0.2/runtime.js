define("gallery/handlebars/1.0.2/runtime", [], function (t, e, s) {
    var i = {};
    (function (t, e) {
        t.VERSION = "1.0.0-rc.4", t.COMPILER_REVISION = 3, t.REVISION_CHANGES = {1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: ">= 1.0.0-rc.4"}, t.helpers = {}, t.partials = {};
        var s = Object.prototype.toString, i = "[object Function]", n = "[object Object]";
        t.registerHelper = function (e, i, r) {
            if (s.call(e) === n) {
                if (r || i)throw new t.Exception("Arg not supported with multiple helpers");
                t.Utils.extend(this.helpers, e)
            } else r && (i.not = r), this.helpers[e] = i
        }, t.registerPartial = function (e, i) {
            s.call(e) === n ? t.Utils.extend(this.partials, e) : this.partials[e] = i
        }, t.registerHelper("helperMissing", function (t) {
            if (2 === arguments.length)return e;
            throw Error("Could not find property '" + t + "'")
        }), t.registerHelper("blockHelperMissing", function (e, n) {
            var r = n.inverse || function () {
            }, o = n.fn, a = s.call(e);
            return a === i && (e = e.call(this)), e === !0 ? o(this) : e === !1 || null == e ? r(this) : "[object Array]" === a ? e.length > 0 ? t.helpers.each(e, n) : r(this) : o(e)
        }), t.K = function () {
        }, t.createFrame = Object.create || function (e) {
            t.K.prototype = e;
            var s = new t.K;
            return t.K.prototype = null, s
        }, t.logger = {DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3, methodMap: {0: "debug", 1: "info", 2: "warn", 3: "error"}, log: function (e, s) {
            if (e >= t.logger.level) {
                var i = t.logger.methodMap[e];
                "undefined" != typeof console && console[i] && console[i].call(console, s)
            }
        }}, t.log = function (e, s) {
            t.logger.log(e, s)
        }, t.registerHelper("each", function (e, s) {
            var i, n = s.fn, r = s.inverse, o = 0, a = "";
            if (s.data && (i = t.createFrame(s.data)), e && "object" == typeof e)if (e instanceof Array)for (var h = e.length; h > o; o++)i && (i.index = o), a += n(e[o], {data: i}); else for (var l in e)e.hasOwnProperty(l) && (i && (i.key = l), a += n(e[l], {data: i}), o++);
            return 0 === o && (a = r(this)), a
        }), t.registerHelper("if", function (e, n) {
            var r = s.call(e);
            return r === i && (e = e.call(this)), !e || t.Utils.isEmpty(e) ? n.inverse(this) : n.fn(this)
        }), t.registerHelper("unless", function (e, s) {
            return t.helpers["if"].call(this, e, {fn: s.inverse, inverse: s.fn})
        }), t.registerHelper("with", function (s, i) {
            return t.Utils.isEmpty(s) ? e : i.fn(s)
        }), t.registerHelper("log", function (e, s) {
            var i = s.data && null != s.data.level ? parseInt(s.data.level, 10) : 1;
            t.log(i, e)
        });
        var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        t.Exception = function () {
            for (var t = Error.prototype.constructor.apply(this, arguments), e = 0; r.length > e; e++)this[r[e]] = t[r[e]]
        }, t.Exception.prototype = Error(), t.SafeString = function (t) {
            this.string = t
        }, t.SafeString.prototype.toString = function () {
            return"" + this.string
        };
        var o = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, a = /[&<>"'`]/g, h = /[&<>"'`]/, l = function (t) {
            return o[t] || "&amp;"
        };
        t.Utils = {extend: function (t, e) {
            for (var s in e)e.hasOwnProperty(s) && (t[s] = e[s])
        }, escapeExpression: function (e) {
            return e instanceof t.SafeString ? "" + e : null == e || e === !1 ? "" : (e = "" + e, h.test(e) ? e.replace(a, l) : e)
        }, isEmpty: function (t) {
            return t || 0 === t ? "[object Array]" === s.call(t) && 0 === t.length ? !0 : !1 : !0
        }}, t.VM = {template: function (e) {
            var s = {escapeExpression: t.Utils.escapeExpression, invokePartial: t.VM.invokePartial, programs: [], program: function (e, s, i) {
                var n = this.programs[e];
                return i ? n = t.VM.program(e, s, i) : n || (n = this.programs[e] = t.VM.program(e, s)), n
            }, programWithDepth: t.VM.programWithDepth, noop: t.VM.noop, compilerInfo: null};
            return function (i, n) {
                n = n || {};
                var r = e.call(s, t, i, n.helpers, n.partials, n.data), o = s.compilerInfo || [], a = o[0] || 1, h = t.COMPILER_REVISION;
                if (a !== h) {
                    if (h > a) {
                        var l = t.REVISION_CHANGES[h], c = t.REVISION_CHANGES[a];
                        throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + l + ") or downgrade your runtime to an older version (" + c + ")."
                    }
                    throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + o[1] + ")."
                }
                return r
            }
        }, programWithDepth: function (t, e, s) {
            var i = Array.prototype.slice.call(arguments, 3), n = function (t, n) {
                return n = n || {}, e.apply(this, [t, n.data || s].concat(i))
            };
            return n.program = t, n.depth = i.length, n
        }, program: function (t, e, s) {
            var i = function (t, i) {
                return i = i || {}, e(t, i.data || s)
            };
            return i.program = t, i.depth = 0, i
        }, noop: function () {
            return""
        }, invokePartial: function (s, i, n, r, o, a) {
            var h = {helpers: r, partials: o, data: a};
            if (s === e)throw new t.Exception("The partial " + i + " could not be found");
            if (s instanceof Function)return s(n, h);
            if (t.compile)return o[i] = t.compile(s, {data: a !== e}), o[i](n, h);
            throw new t.Exception("The partial " + i + " could not be compiled when running in runtime-only mode")
        }}, t.template = t.VM.template
    })(i), s.exports = i
});
