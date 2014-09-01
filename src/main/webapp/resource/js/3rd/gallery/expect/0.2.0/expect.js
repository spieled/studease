define("gallery/expect/0.2.0/expect", [], function (require, exports, module) {
    (function (global, module) {
        function expect(e) {
            return new Assertion(e)
        }

        function Assertion(e, t, n) {
            this.obj = e, this.flags = {};
            if (undefined != n) {
                this.flags[t] = !0;
                for (var r in n.flags)n.flags.hasOwnProperty(r) && (this.flags[r] = !0)
            }
            var i = t ? flags[t] : keys(flags), s = this;
            if (i)for (var r = 0, o = i.length; r < o; r++) {
                if (this.flags[i[r]])continue;
                var u = i[r], a = new Assertion(this.obj, u, this);
                if ("function" == typeof Assertion.prototype[u]) {
                    var f = this[u];
                    this[u] = function () {
                        return f.apply(s, arguments)
                    };
                    for (var l in Assertion.prototype)Assertion.prototype.hasOwnProperty(l) && l != u && (this[u][l] = bind(a[l], a))
                } else this[u] = a
            }
        }

        function bind(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        function every(e, t, n) {
            var r = n || global;
            for (var i = 0, s = e.length; i < s; ++i)if (!t.call(r, e[i], i, e))return!1;
            return!0
        }

        function indexOf(e, t, n) {
            if (Array.prototype.indexOf)return Array.prototype.indexOf.call(e, t, n);
            if (e.length === undefined)return-1;
            for (var r = e.length, n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++);
            return r <= n ? -1 : n
        }

        function i(e, t, n) {
            function i(e) {
                return e
            }

            function s(e, n) {
                if (e && typeof e.inspect == "function" && e !== exports && (!e.constructor || e.constructor.prototype !== e))return e.inspect(n);
                switch (typeof e) {
                    case"undefined":
                        return i("undefined", "undefined");
                    case"string":
                        var o = "'" + json.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return i(o, "string");
                    case"number":
                        return i("" + e, "number");
                    case"boolean":
                        return i("" + e, "boolean")
                }
                if (e === null)return i("null", "null");
                if (isDOMElement(e))return getOuterHTML(e);
                var u = keys(e), a = t ? Object.getOwnPropertyNames(e) : u;
                if (typeof e == "function" && a.length === 0) {
                    if (isRegExp(e))return i("" + e, "regexp");
                    var f = e.name ? ": " + e.name : "";
                    return i("[Function" + f + "]", "special")
                }
                if (isDate(e) && a.length === 0)return i(e.toUTCString(), "date");
                var l, c, h;
                isArray(e) ? (c = "Array", h = ["[", "]"]) : (c = "Object", h = ["{", "}"]);
                if (typeof e == "function") {
                    var p = e.name ? ": " + e.name : "";
                    l = isRegExp(e) ? " " + e : " [Function" + p + "]"
                } else l = "";
                isDate(e) && (l = " " + e.toUTCString());
                if (a.length === 0)return h[0] + l + h[1];
                if (n < 0)return isRegExp(e) ? i("" + e, "regexp") : i("[Object]", "special");
                r.push(e);
                var d = map(a, function (t) {
                    var o, a;
                    e.__lookupGetter__ && (e.__lookupGetter__(t) ? e.__lookupSetter__(t) ? a = i("[Getter/Setter]", "special") : a = i("[Getter]", "special") : e.__lookupSetter__(t) && (a = i("[Setter]", "special"))), indexOf(u, t) < 0 && (o = "[" + t + "]"), a || (indexOf(r, e[t]) < 0 ? (n === null ? a = s(e[t]) : a = s(e[t], n - 1), a.indexOf("\n") > -1 && (isArray(e) ? a = map(a.split("\n"), function (e) {
                        return"  " + e
                    }).join("\n").substr(2) : a = "\n" + map(a.split("\n"), function (e) {
                        return"   " + e
                    }).join("\n"))) : a = i("[Circular]", "special"));
                    if (typeof o == "undefined") {
                        if (c === "Array" && t.match(/^\d+$/))return a;
                        o = json.stringify("" + t), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = i(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = i(o, "string"))
                    }
                    return o + ": " + a
                });
                r.pop();
                var v = 0, m = reduce(d, function (e, t) {
                    return v++, indexOf(t, "\n") >= 0 && v++, e + t.length + 1
                }, 0);
                return m > 50 ? d = h[0] + (l === "" ? "" : l + "\n ") + " " + d.join(",\n  ") + " " + h[1] : d = h[0] + l + " " + d.join(", ") + " " + h[1], d
            }

            var r = [];
            return s(e, typeof n == "undefined" ? 2 : n)
        }

        function isArray(e) {
            return Object.prototype.toString.call(e) == "[object Array]"
        }

        function isRegExp(e) {
            var t;
            try {
                t = "" + e
            } catch (n) {
                return!1
            }
            return e instanceof RegExp || typeof e == "function" && e.constructor.name === "RegExp" && e.compile && e.test && e.exec && t.match(/^\/.*\/[gim]{0,3}$/)
        }

        function isDate(e) {
            return e instanceof Date ? !0 : !1
        }

        function keys(e) {
            if (Object.keys)return Object.keys(e);
            var t = [];
            for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }

        function map(e, t, n) {
            if (Array.prototype.map)return Array.prototype.map.call(e, t, n);
            var r = new Array(e.length);
            for (var i = 0, s = e.length; i < s; i++)i in e && (r[i] = t.call(n, e[i], i, e));
            return r
        }

        function reduce(e, t) {
            if (Array.prototype.reduce)return Array.prototype.reduce.apply(e, Array.prototype.slice.call(arguments, 1));
            var n = +this.length;
            if (typeof t != "function")throw new TypeError;
            if (n === 0 && arguments.length === 1)throw new TypeError;
            var r = 0;
            if (arguments.length >= 2)var i = arguments[1]; else do {
                if (r in this) {
                    i = this[r++];
                    break
                }
                if (++r >= n)throw new TypeError
            } while (!0);
            for (; r < n; r++)r in this && (i = t.call(null, i, this[r], r, this));
            return i
        }

        function isUndefinedOrNull(e) {
            return e === null || e === undefined
        }

        function isArguments(e) {
            return Object.prototype.toString.call(e) == "[object Arguments]"
        }

        function objEquiv(e, t) {
            if (isUndefinedOrNull(e) || isUndefinedOrNull(t))return!1;
            if (e.prototype !== t.prototype)return!1;
            if (isArguments(e))return isArguments(t) ? (e = pSlice.call(e), t = pSlice.call(t), expect.eql(e, t)) : !1;
            try {
                var n = keys(e), r = keys(t), i, s
            } catch (o) {
                return!1
            }
            if (n.length != r.length)return!1;
            n.sort(), r.sort();
            for (s = n.length - 1; s >= 0; s--)if (n[s] != r[s])return!1;
            for (s = n.length - 1; s >= 0; s--) {
                i = n[s];
                if (!expect.eql(e[i], t[i]))return!1
            }
            return!0
        }

        if ("undefined" == typeof module)var module = {exports: {}}, exports = module.exports;
        module.exports = expect, expect.Assertion = Assertion, expect.version = "0.1.2";
        var flags = {not: ["to", "be", "have", "include", "only"], to: ["be", "have", "include", "only", "not"], only: ["have"], have: ["own"], be: ["an"]};
        Assertion.prototype.assert = function (e, t, n) {
            var t = this.flags.not ? n : t, r = this.flags.not ? !e : e;
            if (!r)throw new Error(t.call(this));
            this.and = new Assertion(this.obj)
        }, Assertion.prototype.ok = function () {
            this.assert(!!this.obj, function () {
                return"expected " + i(this.obj) + " to be truthy"
            }, function () {
                return"expected " + i(this.obj) + " to be falsy"
            })
        }, Assertion.prototype.throwError = Assertion.prototype.throwException = function (e) {
            expect(this.obj).to.be.a("function");
            var t = !1, n = this.flags.not;
            try {
                this.obj()
            } catch (r) {
                if ("function" == typeof e)e(r); else if ("object" == typeof e) {
                    var i = "string" == typeof r ? r : r.message;
                    n ? expect(i).to.not.match(e) : expect(i).to.match(e)
                }
                t = !0
            }
            "object" == typeof e && n && (this.flags.not = !1);
            var s = this.obj.name || "fn";
            this.assert(t, function () {
                return"expected " + s + " to throw an exception"
            }, function () {
                return"expected " + s + " not to throw an exception"
            })
        }, Assertion.prototype.empty = function () {
            var e;
            return"object" == typeof this.obj && null !== this.obj && !isArray(this.obj) ? "number" == typeof this.obj.length ? e = !this.obj.length : e = !keys(this.obj).length : ("string" != typeof this.obj && expect(this.obj).to.be.an("object"), expect(this.obj).to.have.property("length"), e = !this.obj.length), this.assert(e, function () {
                return"expected " + i(this.obj) + " to be empty"
            }, function () {
                return"expected " + i(this.obj) + " to not be empty"
            }), this
        }, Assertion.prototype.be = Assertion.prototype.equal = function (e) {
            return this.assert(e === this.obj, function () {
                return"expected " + i(this.obj) + " to equal " + i(e)
            }, function () {
                return"expected " + i(this.obj) + " to not equal " + i(e)
            }), this
        }, Assertion.prototype.eql = function (e) {
            return this.assert(expect.eql(e, this.obj), function () {
                return"expected " + i(this.obj) + " to sort of equal " + i(e)
            }, function () {
                return"expected " + i(this.obj) + " to sort of not equal " + i(e)
            }), this
        }, Assertion.prototype.within = function (e, t) {
            var n = e + ".." + t;
            return this.assert(this.obj >= e && this.obj <= t, function () {
                return"expected " + i(this.obj) + " to be within " + n
            }, function () {
                return"expected " + i(this.obj) + " to not be within " + n
            }), this
        }, Assertion.prototype.a = Assertion.prototype.an = function (e) {
            if ("string" == typeof e) {
                var t = /^[aeiou]/.test(e) ? "n" : "";
                this.assert("array" == e ? isArray(this.obj) : "object" == e ? "object" == typeof this.obj && null !== this.obj : e == typeof this.obj, function () {
                    return"expected " + i(this.obj) + " to be a" + t + " " + e
                }, function () {
                    return"expected " + i(this.obj) + " not to be a" + t + " " + e
                })
            } else {
                var n = e.name || "supplied constructor";
                this.assert(this.obj instanceof e, function () {
                    return"expected " + i(this.obj) + " to be an instance of " + n
                }, function () {
                    return"expected " + i(this.obj) + " not to be an instance of " + n
                })
            }
            return this
        }, Assertion.prototype.greaterThan = Assertion.prototype.above = function (e) {
            return this.assert(this.obj > e, function () {
                return"expected " + i(this.obj) + " to be above " + e
            }, function () {
                return"expected " + i(this.obj) + " to be below " + e
            }), this
        }, Assertion.prototype.lessThan = Assertion.prototype.below = function (e) {
            return this.assert(this.obj < e, function () {
                return"expected " + i(this.obj) + " to be below " + e
            }, function () {
                return"expected " + i(this.obj) + " to be above " + e
            }), this
        }, Assertion.prototype.match = function (e) {
            return this.assert(e.exec(this.obj), function () {
                return"expected " + i(this.obj) + " to match " + e
            }, function () {
                return"expected " + i(this.obj) + " not to match " + e
            }), this
        }, Assertion.prototype.length = function (e) {
            expect(this.obj).to.have.property("length");
            var t = this.obj.length;
            return this.assert(e == t, function () {
                return"expected " + i(this.obj) + " to have a length of " + e + " but got " + t
            }, function () {
                return"expected " + i(this.obj) + " to not have a length of " + t
            }), this
        }, Assertion.prototype.property = function (e, t) {
            if (this.flags.own)return this.assert(Object.prototype.hasOwnProperty.call(this.obj, e), function () {
                return"expected " + i(this.obj) + " to have own property " + i(e)
            }, function () {
                return"expected " + i(this.obj) + " to not have own property " + i(e)
            }), this;
            if (this.flags.not && undefined !== t) {
                if (undefined === this.obj[e])throw new Error(i(this.obj) + " has no property " + i(e))
            } else {
                var n;
                try {
                    n = e in this.obj
                } catch (r) {
                    n = undefined !== this.obj[e]
                }
                this.assert(n, function () {
                    return"expected " + i(this.obj) + " to have a property " + i(e)
                }, function () {
                    return"expected " + i(this.obj) + " to not have a property " + i(e)
                })
            }
            return undefined !== t && this.assert(t === this.obj[e], function () {
                return"expected " + i(this.obj) + " to have a property " + i(e) + " of " + i(t) + ", but got " + i(this.obj[e])
            }, function () {
                return"expected " + i(this.obj) + " to not have a property " + i(e) + " of " + i(t)
            }), this.obj = this.obj[e], this
        }, Assertion.prototype.string = Assertion.prototype.contain = function (e) {
            return"string" == typeof this.obj ? this.assert(~this.obj.indexOf(e), function () {
                return"expected " + i(this.obj) + " to contain " + i(e)
            }, function () {
                return"expected " + i(this.obj) + " to not contain " + i(e)
            }) : this.assert(~indexOf(this.obj, e), function () {
                return"expected " + i(this.obj) + " to contain " + i(e)
            }, function () {
                return"expected " + i(this.obj) + " to not contain " + i(e)
            }), this
        }, Assertion.prototype.key = Assertion.prototype.keys = function (e) {
            var t, n = !0;
            e = isArray(e) ? e : Array.prototype.slice.call(arguments);
            if (!e.length)throw new Error("keys required");
            var r = keys(this.obj), s = e.length;
            n = every(e, function (e) {
                return~indexOf(r, e)
            }), !this.flags.not && this.flags.only && (n = n && e.length == r.length);
            if (s > 1) {
                e = map(e, function (e) {
                    return i(e)
                });
                var o = e.pop();
                t = e.join(", ") + ", and " + o
            } else t = i(e[0]);
            return t = (s > 1 ? "keys " : "key ") + t, t = (this.flags.only ? "only have " : "include ") + t, this.assert(n, function () {
                return"expected " + i(this.obj) + " to " + t
            }, function () {
                return"expected " + i(this.obj) + " to not " + t
            }), this
        }, Assertion.prototype.fail = function (e) {
            return e = e || "explicit failure", this.assert(!1, e, e), this
        };
        var getOuterHTML = function (e) {
            if ("outerHTML"in e)return e.outerHTML;
            var t = "http://www.w3.org/1999/xhtml", n = document.createElementNS(t, "_"), r = (window.HTMLElement || window.Element).prototype, i = new XMLSerializer, s;
            return document.xmlVersion ? i.serializeToString(e) : (n.appendChild(e.cloneNode(!1)), s = n.innerHTML.replace("><", ">" + e.innerHTML + "<"), n.innerHTML = "", s)
        }, isDOMElement = function (e) {
            return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string"
        };
        expect.eql = function (t, n) {
            if (t === n)return!0;
            if ("undefined" != typeof Buffer && Buffer.isBuffer(t) && Buffer.isBuffer(n)) {
                if (t.length != n.length)return!1;
                for (var r = 0; r < t.length; r++)if (t[r] !== n[r])return!1;
                return!0
            }
            return t instanceof Date && n instanceof Date ? t.getTime() === n.getTime() : typeof t != "object" && typeof n != "object" ? t == n : objEquiv(t, n)
        };
        var json = function () {
            "use strict";
            function f(e) {
                return e < 10 ? "0" + e : e
            }

            function date(e, t) {
                return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
            }

            function quote(e) {
                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                    var t = meta[e];
                    return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }

            function str(e, t) {
                var n, r, i, s, o = gap, u, a = t[e];
                a instanceof Date && (a = date(e)), typeof rep == "function" && (a = rep.call(t, e, a));
                switch (typeof a) {
                    case"string":
                        return quote(a);
                    case"number":
                        return isFinite(a) ? String(a) : "null";
                    case"boolean":
                    case"null":
                        return String(a);
                    case"object":
                        if (!a)return"null";
                        gap += indent, u = [];
                        if (Object.prototype.toString.apply(a) === "[object Array]") {
                            s = a.length;
                            for (n = 0; n < s; n += 1)u[n] = str(n, a) || "null";
                            return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                        }
                        if (rep && typeof rep == "object") {
                            s = rep.length;
                            for (n = 0; n < s; n += 1)typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                        } else for (r in a)Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                        return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
                }
            }

            if ("object" == typeof JSON && JSON.parse && JSON.stringify)return{parse: nativeJSON.parse, stringify: nativeJSON.stringify};
            var JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
            return JSON.stringify = function (e, t, n) {
                var r;
                gap = "", indent = "";
                if (typeof n == "number")for (r = 0; r < n; r += 1)indent += " "; else typeof n == "string" && (indent = n);
                rep = t;
                if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")return str("", {"": e});
                throw new Error("JSON.stringify")
            }, JSON.parse = function (text, reviver) {
                function walk(e, t) {
                    var n, r, i = e[t];
                    if (i && typeof i == "object")for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                    return reviver.call(e, t, i)
                }

                var j;
                text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                    return"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }));
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
                throw new SyntaxError("JSON.parse")
            }, JSON
        }();
        "undefined" != typeof window && (window.expect = module.exports)
    })(this, "undefined" != typeof module ? module : {}, "undefined" != typeof exports ? exports : {})
});
