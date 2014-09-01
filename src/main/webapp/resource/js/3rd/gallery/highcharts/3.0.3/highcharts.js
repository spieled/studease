define("gallery/highcharts/3.0.3/highcharts", ["$"], function (mb, Zb, nb) {
    var I = mb("$"), Aa = {};
    (function () {
        function r(a, b) {
            var c;
            a || (a = {});
            for (c in b)a[c] = b[c];
            return a
        }

        function w() {
            var a, b = arguments.length, c = {}, d = function (a, b) {
                var c, h;
                typeof a !== "object" && (a = {});
                for (h in b)b.hasOwnProperty(h) && (c = b[h], a[h] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && typeof c.nodeType !== "number" ? d(a[h] || {}, c) : b[h]);
                return a
            };
            for (a = 0; a < b; a++)c = d(c, arguments[a]);
            return c
        }

        function A(a, b) {
            return parseInt(a,
                    b || 10)
        }

        function ea(a) {
            return typeof a === "string"
        }

        function V(a) {
            return typeof a === "object"
        }

        function Ja(a) {
            return Object.prototype.toString.call(a) === "[object Array]"
        }

        function qa(a) {
            return typeof a === "number"
        }

        function na(a) {
            return R.log(a) / R.LN10
        }

        function fa(a) {
            return R.pow(10, a)
        }

        function ga(a, b) {
            for (var c = a.length; c--;)if (a[c] === b) {
                a.splice(c, 1);
                break
            }
        }

        function s(a) {
            return a !== v && a !== null
        }

        function x(a, b, c) {
            var d, e;
            if (ea(b))s(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (s(b) &&
                V(b))for (d in b)a.setAttribute(d, b[d]);
            return e
        }

        function ia(a) {
            return Ja(a) ? a : [a]
        }

        function n() {
            var a = arguments, b, c, d = a.length;
            for (b = 0; b < d; b++)if (c = a[b], typeof c !== "undefined" && c !== null)return c
        }

        function M(a, b) {
            if (ra && b && b.opacity !== v)b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
            r(a.style, b)
        }

        function U(a, b, c, d, e) {
            a = y.createElement(a);
            b && r(a, b);
            e && M(a, {padding: 0, border: S, margin: 0});
            c && M(a, c);
            d && d.appendChild(a);
            return a
        }

        function ha(a, b) {
            var c = function () {
            };
            c.prototype = new a;
            r(c.prototype, b);
            return c
        }

        function Ba(a, b, c, d) {
            var e = O.lang, a = +a || 0, f = b === -1 ? (a.toString().split(".")[1] || "").length : isNaN(b = P(b)) ? 2 : b, b = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = a < 0 ? "-" : "", c = String(A(a = P(a).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0;
            return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + P(a - c).toFixed(f).slice(2) : "")
        }

        function Ca(a, b) {
            return Array((b || 2) + 1 - String(a).length).join(0) + a
        }

        function Eb(a, b, c) {
            var d = a[b];
            a[b] = function () {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(d);
                return c.apply(this, a)
            }
        }

        function Da(a, b) {
            for (var c = "{", d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1;) {
                e = a.slice(0, c);
                if (d) {
                    f = e.split(":");
                    g = f.shift().split(".");
                    i = g.length;
                    e = b;
                    for (h = 0; h < i; h++)e = e[g[h]];
                    if (f.length)f = f.join(":"), g = /\.([0-9])/, h = O.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e = Ba(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : "")) : e = Za(f, e)
                }
                j.push(e);
                a = a.slice(c + 1);
                c = (d = !d) ? "}" : "{"
            }
            j.push(a);
            return j.join("")
        }

        function ob(a) {
            return R.pow(10, T(R.log(a) / R.LN10))
        }

        function pb(a, b, c, d) {
            var e, c = n(c, 1);
            e = a / c;
            b || (b = [1, 2, 2.5, 5, 10], d && d.allowDecimals === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
            for (d = 0; d < b.length; d++)if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2)break;
            a *= c;
            return a
        }

        function Fb(a, b) {
            var c = b || [
                [Gb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                [qb, [1, 2, 5, 10, 15, 30]],
                [$a, [1, 2, 5, 10, 15, 30]],
                [Sa, [1, 2, 3, 4, 6, 8, 12]],
                [sa, [1, 2]],
                [ab, [1, 2]],
                [Ta, [1, 2, 3, 4, 6]],
                [ta, null]
            ], d = c[c.length - 1], e = z[d[0]], f = d[1], g;
            for (g = 0; g < c.length; g++)if (d = c[g], e = z[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] +
                z[c[g + 1][0]]) / 2)break;
            e === z[ta] && a < 5 * e && (f = [1, 2, 5]);
            e === z[ta] && a < 5 * e && (f = [1, 2, 5]);
            c = pb(a / e, f, d[0] === ta ? ob(a / e) : 1);
            return{unitRange: e, count: c, unitName: d[0]}
        }

        function Hb(a, b, c, d) {
            var e = [], f = {}, g = O.global.useUTC, h, i = new Date(b), j = a.unitRange, k = a.count;
            if (s(b)) {
                j >= z[qb] && (i.setMilliseconds(0), i.setSeconds(j >= z[$a] ? 0 : k * T(i.getSeconds() / k)));
                if (j >= z[$a])i[Ib](j >= z[Sa] ? 0 : k * T(i[rb]() / k));
                if (j >= z[Sa])i[Jb](j >= z[sa] ? 0 : k * T(i[sb]() / k));
                if (j >= z[sa])i[tb](j >= z[Ta] ? 1 : k * T(i[Ua]() / k));
                j >= z[Ta] && (i[Kb](j >= z[ta] ? 0 :
                    k * T(i[bb]() / k)), h = i[cb]());
                j >= z[ta] && (h -= h % k, i[Lb](h));
                if (j === z[ab])i[tb](i[Ua]() - i[ub]() + n(d, 1));
                b = 1;
                h = i[cb]();
                for (var d = i.getTime(), l = i[bb](), m = i[Ua](), p = g ? 0 : (864E5 + i.getTimezoneOffset() * 6E4) % 864E5; d < c;)e.push(d), j === z[ta] ? d = db(h + b * k, 0) : j === z[Ta] ? d = db(h, l + b * k) : !g && (j === z[sa] || j === z[ab]) ? d = db(h, l, m + b * k * (j === z[sa] ? 1 : 7)) : d += j * k, b++;
                e.push(d);
                o(vb(e, function (a) {
                    return j <= z[Sa] && a % z[sa] === p
                }), function (a) {
                    f[a] = sa
                })
            }
            e.info = r(a, {higherRanks: f, totalRange: j * k});
            return e
        }

        function Mb() {
            this.symbol = this.color =
                0
        }

        function Nb(a, b) {
            var c = a.length, d, e;
            for (e = 0; e < c; e++)a[e].ss_i = e;
            a.sort(function (a, c) {
                d = b(a, c);
                return d === 0 ? a.ss_i - c.ss_i : d
            });
            for (e = 0; e < c; e++)delete a[e].ss_i
        }

        function Ka(a) {
            for (var b = a.length, c = a[0]; b--;)a[b] < c && (c = a[b]);
            return c
        }

        function ua(a) {
            for (var b = a.length, c = a[0]; b--;)a[b] > c && (c = a[b]);
            return c
        }

        function La(a, b) {
            for (var c in a)a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
        }

        function Va(a) {
            eb || (eb = U(Ea));
            a && eb.appendChild(a);
            eb.innerHTML = ""
        }

        function va(a, b) {
            var c = "Highcharts error #" +
                a + ": www.highcharts.com/errors/" + a;
            if (b)throw c; else N.console && console.log(c)
        }

        function ja(a) {
            return parseFloat(a.toPrecision(14))
        }

        function Ma(a, b) {
            Fa = n(a, b.animation)
        }

        function Ob() {
            var a = O.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set";
            db = a ? Date.UTC : function (a, b, c, g, h, i) {
                return(new Date(a, b, n(c, 1), n(g, 0), n(h, 0), n(i, 0))).getTime()
            };
            rb = b + "Minutes";
            sb = b + "Hours";
            ub = b + "Day";
            Ua = b + "Date";
            bb = b + "Month";
            cb = b + "FullYear";
            Ib = c + "Minutes";
            Jb = c + "Hours";
            tb = c + "Date";
            Kb = c + "Month";
            Lb = c + "FullYear"
        }

        function wa() {
        }

        function Na(a, b, c, d) {
            this.axis = a;
            this.pos = b;
            this.type = c || "";
            this.isNew = !0;
            !c && !d && this.addLabel()
        }

        function wb(a, b) {
            this.axis = a;
            if (b)this.options = b, this.id = b.id
        }

        function Pb(a, b, c, d, e, f) {
            var g = a.chart.inverted;
            this.axis = a;
            this.isNegative = c;
            this.options = b;
            this.x = d;
            this.total = 0;
            this.points = {};
            this.stack = e;
            this.percent = f === "percent";
            this.alignOptions = {align: b.align || (g ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (g ? "middle" : c ? "bottom" : "top"), y: n(b.y, g ? 4 : c ? 14 : -6), x: n(b.x, g ? c ? -6 : 6 : 0)};
            this.textAlign =
                b.textAlign || (g ? c ? "right" : "left" : "center")
        }

        function fb() {
            this.init.apply(this, arguments)
        }

        function xb() {
            this.init.apply(this, arguments)
        }

        function yb(a, b) {
            this.init(a, b)
        }

        function zb(a, b) {
            this.init(a, b)
        }

        function Ab() {
            this.init.apply(this, arguments)
        }

        var v, y = document, N = window, R = Math, t = R.round, T = R.floor, ka = R.ceil, u = R.max, J = R.min, P = R.abs, W = R.cos, ca = R.sin, Oa = R.PI, Wa = Oa * 2 / 360, Ga = navigator.userAgent, Qb = N.opera, ra = /msie/i.test(Ga) && !Qb, gb = y.documentMode === 8, hb = /AppleWebKit/.test(Ga), ib = /Firefox/.test(Ga), Rb =
                /(Mobile|Android|Windows Phone)/.test(Ga), xa = "http://www.w3.org/2000/svg", Z = !!y.createElementNS && !!y.createElementNS(xa, "svg").createSVGRect, mb = ib && parseInt(Ga.split("Firefox/")[1], 10) < 4, $ = !Z && !ra && !!y.createElement("canvas").getContext, Xa, jb = y.documentElement.ontouchstart !== v, Sb = {}, Bb = 0, eb, O, Za, Fa, Cb, z, ya = function () {
            }, Ha = [], Ea = "div", S = "none", Tb = "rgba(192,192,192," + (Z ? 1.0E-4 : 0.002) + ")", Gb = "millisecond", qb = "second", $a = "minute", Sa = "hour", sa = "day", ab = "week", Ta = "month", ta = "year", Ub = "stroke-width", db,
            rb, sb, ub, Ua, bb, cb, Ib, Jb, tb, Kb, Lb, aa = {};
        N.Highcharts = N.Highcharts ? va(16, !0) : {};
        Za = function (a, b, c) {
            if (!s(b) || isNaN(b))return"Invalid date";
            var a = n(a, "%Y-%m-%d %H:%M:%S"), d = new Date(b), e, f = d[sb](), g = d[ub](), h = d[Ua](), i = d[bb](), j = d[cb](), k = O.lang, l = k.weekdays, d = r({a: l[g].substr(0, 3), A: l[g], d: Ca(h), e: h, b: k.shortMonths[i], B: k.months[i], m: Ca(i + 1), y: j.toString().substr(2, 2), Y: j, H: Ca(f), I: Ca(f % 12 || 12), l: f % 12 || 12, M: Ca(d[rb]()), p: f < 12 ? "AM" : "PM", P: f < 12 ? "am" : "pm", S: Ca(d.getSeconds()), L: Ca(t(b % 1E3), 3)}, Aa.dateFormats);
            for (e in d)for (; a.indexOf("%" + e) !== -1;)a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
            return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
        };
        Mb.prototype = {wrapColor: function (a) {
            if (this.color >= a)this.color = 0
        }, wrapSymbol: function (a) {
            if (this.symbol >= a)this.symbol = 0
        }};
        z = function () {
            for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++)d[b[a++]] = b[a];
            return d
        }(Gb, 1, qb, 1E3, $a, 6E4, Sa, 36E5, sa, 864E5, ab, 6048E5, Ta, 26784E5, ta, 31556952E3);
        Cb = {init: function (a, b, c) {
            var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ?
                7 : 3, g, b = b.split(" "), c = [].concat(c), h, i, j = function (a) {
                for (g = a.length; g--;)a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
            };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f)for (; d--;)c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)for (a = c.length; b.length < a;)d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return[b, c]
        }, step: function (a, b, c, d) {
            var e = [], f = a.length;
            if (c === 1)e =
                d; else if (f === b.length && c < 1)for (; f--;)d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
            return e
        }};
        N.HighchartsAdapter = N.HighchartsAdapter || I && {init: function (a) {
            var b = I.fx, c = b.step, d, e = I.Tween, f = e && e.propHooks;
            d = I.cssHooks.opacity;
            I.extend(I.easing, {easeOutQuad: function (a, b, c, d, e) {
                return-d * (b /= e) * (b - 2) + c
            }});
            I.each(["cur", "_default", "width", "height", "opacity"], function (a, d) {
                var i = c, j, k;
                d === "cur" ? i = b.prototype : d === "_default" && e && (i = f[d], d = "set");
                (j = i[d]) && (i[d] = function (b) {
                    b = a ? b :
                        this;
                    k = b.elem;
                    return k.attr ? k.attr(b.prop, d === "cur" ? v : b.now) : j.apply(this, arguments)
                })
            });
            Eb(d, "get", function (a, b, c) {
                return b.attr ? b.opacity || 0 : a.call(this, b, c)
            });
            d = function (b) {
                var c = b.elem, d;
                if (!b.started)d = a.init(c, c.d, c.toD), b.start = d[0], b.end = d[1], b.started = !0;
                c.attr("d", a.step(b.start, b.end, b.pos, c.toD))
            };
            e ? f.d = {set: d} : c.d = d;
            this.each = Array.prototype.forEach ? function (a, b) {
                return Array.prototype.forEach.call(a, b)
            } : function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)if (b.call(a[c], a[c], c, a) === !1)return c
            };
            I.fn.highcharts = function () {
                var a = "Chart", b = arguments, c, d;
                ea(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));
                c = b[0];
                if (c !== v)c.chart = c.chart || {}, c.chart.renderTo = this[0], new Aa[a](c, b[1]), d = this;
                c === v && (d = Ha[x(this[0], "data-highcharts-chart")]);
                return d
            }
        }, getScript: I.getScript, inArray: I.inArray, adapterRun: function (a, b) {
            return I(a)[b]()
        }, grep: I.grep, map: function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = b.call(a[d], a[d], d, a);
            return c
        }, offset: function (a) {
            return I(a).offset()
        }, addEvent: function (a, b, c) {
            I(a).bind(b, c)
        }, removeEvent: function (a, b, c) {
            var d = y.removeEventListener ? "removeEventListener" : "detachEvent";
            y[d] && a && !a[d] && (a[d] = function () {
            });
            I(a).unbind(b, c)
        }, fireEvent: function (a, b, c, d) {
            var e = I.Event(b), f = "detached" + b, g;
            !ra && c && (delete c.layerX, delete c.layerY);
            r(e, c);
            a[b] && (a[f] = a[b], a[b] = null);
            I.each(["preventDefault", "stopPropagation"], function (a, b) {
                var c = e[b];
                e[b] = function () {
                    try {
                        c.call(e)
                    } catch (a) {
                        b === "preventDefault" && (g = !0)
                    }
                }
            });
            I(a).trigger(e);
            a[f] && (a[b] = a[f], a[f] = null);
            d && !e.isDefaultPrevented() && !g && d(e)
        }, washMouseEvent: function (a) {
            var b = a.originalEvent || a;
            if (b.pageX === v)b.pageX = a.pageX, b.pageY = a.pageY;
            return b
        }, animate: function (a, b, c) {
            var d = I(a);
            if (!a.style)a.style = {};
            if (b.d)a.toD = b.d, b.d = 1;
            d.stop();
            d.animate(b, c)
        }, stop: function (a) {
            I(a).stop()
        }};
        var X = N.HighchartsAdapter, L = X || {};
        X && X.init.call(X, Cb);
        var kb = L.adapterRun, nb = L.getScript, oa = L.inArray, o = L.each, vb = L.grep, Yb = L.offset, Pa = L.map, K = L.addEvent, ba = L.removeEvent, B = L.fireEvent, Vb = L.washMouseEvent, Db = L.animate, Ya = L.stop, L = {enabled: !0, x: 0,
            y: 15, style: {color: "#666", cursor: "default", fontSize: "11px", lineHeight: "14px"}};
        O = {colors: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {loading: "Loading...", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday",
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], decimalPoint: ".", numericSymbols: ["k", "M", "G", "T", "P", "E"], resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: ","}, global: {useUTC: !0, canvasToolsURL: "http://code.highcharts.com/3.0.3/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com/3.0.3/gfx/vml-radial-gradient.png"}, chart: {borderColor: "#4572A7", borderRadius: 5, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacingTop: 10, spacingRight: 10, spacingBottom: 15,
            spacingLeft: 10, style: {fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: "12px"}, backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}}, title: {text: "Chart title", align: "center", margin: 15, style: {color: "#274b6d", fontSize: "16px"}}, subtitle: {text: "", align: "center", style: {color: "#4d759e"}}, plotOptions: {line: {allowPointSelect: !1, showCheckbox: !1, animation: {duration: 1E3}, events: {}, lineWidth: 2,
            marker: {enabled: !0, lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: {hover: {enabled: !0}, select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}}}, point: {events: {}}, dataLabels: w(L, {align: "center", enabled: !1, formatter: function () {
                return this.y === null ? "" : Ba(this.y, -1)
            }, verticalAlign: "bottom", y: 0}), cropThreshold: 300, pointRange: 0, showInLegend: !0, states: {hover: {marker: {}}, select: {marker: {}}}, stickyTracking: !0}}, labels: {style: {position: "absolute", color: "#3E576F"}}, legend: {enabled: !0, align: "center", layout: "horizontal",
            labelFormatter: function () {
                return this.name
            }, borderWidth: 1, borderColor: "#909090", borderRadius: 5, navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"}, shadow: !1, itemStyle: {cursor: "pointer", color: "#274b6d", fontSize: "12px"}, itemHoverStyle: {color: "#000"}, itemHiddenStyle: {color: "#CCC"}, itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"}, symbolWidth: 16, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: {style: {fontWeight: "bold"}}}, loading: {labelStyle: {fontWeight: "bold", position: "relative",
            top: "1em"}, style: {position: "absolute", backgroundColor: "white", opacity: 0.5, textAlign: "center"}}, tooltip: {enabled: !0, animation: Z, backgroundColor: "rgba(255, 255, 255, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: {millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y"}, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shadow: !0, snap: Rb ? 25 : 10, style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}}, credits: {enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: {align: "right", x: -10, verticalAlign: "bottom", y: -5}, style: {cursor: "pointer", color: "#909090", fontSize: "9px"}}};
        var Y = O.plotOptions, X = Y.line;
        Ob();
        var pa = function (a) {
            var b = [], c, d;
            (function (a) {
                a && a.stops ? d = Pa(a.stops, function (a) {
                    return pa(a[1])
                }) : (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a)) ?
                    b = [A(c[1]), A(c[2]), A(c[3]), parseFloat(c[4], 10)] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) ? b = [A(c[1], 16), A(c[2], 16), A(c[3], 16), 1] : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a)) && (b = [A(c[1]), A(c[2]), A(c[3]), 1])
            })(a);
            return{get: function (c) {
                var f;
                d ? (f = w(a), f.stops = [].concat(f.stops), o(d, function (a, b) {
                    f.stops[b] = [f.stops[b][0], a.get(c)]
                })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a;
                return f
            },
                brighten: function (a) {
                    if (d)o(d, function (b) {
                        b.brighten(a)
                    }); else if (qa(a) && a !== 0) {
                        var c;
                        for (c = 0; c < 3; c++)b[c] += A(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
                    }
                    return this
                }, rgba: b, setOpacity: function (a) {
                    b[3] = a;
                    return this
                }}
        };
        wa.prototype = {init: function (a, b) {
            this.element = b === "span" ? U(b) : y.createElementNS(xa, b);
            this.renderer = a;
            this.attrSetters = {}
        }, opacity: 1, animate: function (a, b, c) {
            b = n(b, Fa, !0);
            Ya(this);
            if (b) {
                b = w(b);
                if (c)b.complete = c;
                Db(this, a, b)
            } else this.attr(a), c && c()
        }, attr: function (a, b) {
            var c, d, e, f, g =
                this.element, h = g.nodeName.toLowerCase(), i = this.renderer, j, k = this.attrSetters, l = this.shadows, m, p, q = this;
            ea(a) && s(b) && (c = a, a = {}, a[c] = b);
            if (ea(a))c = a, h === "circle" ? c = {x: "cx", y: "cy"}[c] || c : c === "strokeWidth" && (c = "stroke-width"), q = x(g, c) || this[c] || 0, c !== "d" && c !== "visibility" && (q = parseFloat(q)); else {
                for (c in a)if (j = !1, d = a[c], e = k[c] && k[c].call(this, d, c), e !== !1) {
                    e !== v && (d = e);
                    if (c === "d")d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) && (d = "M 0 0"); else if (c === "x" && h === "text")for (e = 0; e < g.childNodes.length; e++)f =
                        g.childNodes[e], x(f, "x") === x(g, "x") && x(f, "x", d); else if (this.rotation && (c === "x" || c === "y"))p = !0; else if (c === "fill")d = i.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y"))c = {x: "cx", y: "cy"}[c] || c; else if (h === "rect" && c === "r")x(g, {rx: d, ry: d}), j = !0; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign" || c === "scaleX" || c === "scaleY")j = p = !0; else if (c === "stroke")d = i.color(d, g, c); else if (c === "dashstyle")if (c = "stroke-dasharray", d = d && d.toLowerCase(), d === "solid")d = S; else {
                        if (d) {
                            d = d.replace("shortdashdotdot",
                                "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                            for (e = d.length; e--;)d[e] = A(d[e]) * n(a["stroke-width"], this["stroke-width"]);
                            d = d.join(",")
                        }
                    } else if (c === "width")d = A(d); else if (c === "align")c = "text-anchor", d = {left: "start", center: "middle", right: "end"}[d]; else if (c === "title")e = g.getElementsByTagName("title")[0], e || (e = y.createElementNS(xa, "title"), g.appendChild(e)),
                        e.textContent = d;
                    c === "strokeWidth" && (c = "stroke-width");
                    if (c === "stroke-width" || c === "stroke") {
                        this[c] = d;
                        if (this.stroke && this["stroke-width"])x(g, "stroke", this.stroke), x(g, "stroke-width", this["stroke-width"]), this.hasStroke = !0; else if (c === "stroke-width" && d === 0 && this.hasStroke)g.removeAttribute("stroke"), this.hasStroke = !1;
                        j = !0
                    }
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (m || (this.symbolAttr(a), m = !0), j = !0);
                    if (l && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c))for (e =
                                                                                                    l.length; e--;)x(l[e], c, c === "height" ? u(d - (l[e].cutHeight || 0), 0) : d);
                    if ((c === "width" || c === "height") && h === "rect" && d < 0)d = 0;
                    this[c] = d;
                    c === "text" ? (d !== this.textStr && delete this.bBox, this.textStr = d, this.added && i.buildText(this)) : j || x(g, c, d)
                }
                p && this.updateTransform()
            }
            return q
        }, addClass: function (a) {
            var b = this.element, c = x(b, "class") || "";
            c.indexOf(a) === -1 && x(b, "class", c + " " + a);
            return this
        }, symbolAttr: function (a) {
            var b = this;
            o(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function (c) {
                b[c] =
                    n(a[c], b[c])
            });
            b.attr({d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)})
        }, clip: function (a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : S)
        }, crisp: function (a, b, c, d, e) {
            var f, g = {}, h = {}, i, a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            i = t(a) % 2 / 2;
            h.x = T(b || this.x || 0) + i;
            h.y = T(c || this.y || 0) + i;
            h.width = T((d || this.width || 0) - 2 * i);
            h.height = T((e || this.height || 0) - 2 * i);
            h.strokeWidth = a;
            for (f in h)this[f] !== h[f] && (this[f] = g[f] = h[f]);
            return g
        }, css: function (a) {
            var b =
                this.element, c = a && a.width && b.nodeName.toLowerCase() === "text", d, e = "", f = function (a, b) {
                return"-" + b.toLowerCase()
            };
            if (a && a.color)a.fill = a.color;
            this.styles = a = r(this.styles, a);
            $ && c && delete a.width;
            if (ra && !Z)c && delete a.width, M(this.element, a); else {
                for (d in a)e += d.replace(/([A-Z])/g, f) + ":" + a[d] + ";";
                x(b, "style", e)
            }
            c && this.added && this.renderer.buildText(this);
            return this
        }, on: function (a, b) {
            var c = this.element;
            if (jb && a === "click")c.ontouchstart = function (a) {
                a.preventDefault();
                b.call(c, a)
            };
            c["on" + a] = b;
            return this
        },
            setRadialReference: function (a) {
                this.element.radialReference = a;
                return this
            }, translate: function (a, b) {
                return this.attr({translateX: a, translateY: b})
            }, invert: function () {
                this.inverted = !0;
                this.updateTransform();
                return this
            }, htmlCss: function (a) {
                var b = this.element;
                if (b = a && b.tagName === "SPAN" && a.width)delete a.width, this.textWidth = b, this.updateTransform();
                this.styles = r(this.styles, a);
                M(this.element, a);
                return this
            }, htmlGetBBox: function () {
                var a = this.element, b = this.bBox;
                if (!b) {
                    if (a.nodeName === "text")a.style.position =
                        "absolute";
                    b = this.bBox = {x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight}
                }
                return b
            }, htmlUpdateTransform: function () {
                if (this.added) {
                    var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {left: 0, center: 0.5, right: 1}[g], i = g && g !== "left", j = this.shadows;
                    M(b, {marginLeft: c, marginTop: d});
                    j && o(j, function (a) {
                        M(a, {marginLeft: c + 1, marginTop: d + 1})
                    });
                    this.inverted && o(b.childNodes, function (c) {
                        a.invertChild(c, b)
                    });
                    if (b.tagName ===
                        "SPAN") {
                        var k, l, j = this.rotation, m;
                        k = 0;
                        var p = 1, q = 0, la;
                        m = A(this.textWidth);
                        var C = this.xCorr || 0, F = this.yCorr || 0, Wb = [j, g, b.innerHTML, this.textWidth].join(",");
                        if (Wb !== this.cTT) {
                            s(j) && (k = j * Wa, p = W(k), q = ca(k), this.setSpanRotation(j, q, p));
                            k = n(this.elemWidth, b.offsetWidth);
                            l = n(this.elemHeight, b.offsetHeight);
                            if (k > m && /[ \-]/.test(b.textContent || b.innerText))M(b, {width: m + "px", display: "block", whiteSpace: "normal"}), k = m;
                            m = a.fontMetrics(b.style.fontSize).b;
                            C = p < 0 && -k;
                            F = q < 0 && -l;
                            la = p * q < 0;
                            C += q * m * (la ? 1 - h : h);
                            F -= p * m * (j ?
                                la ? h : 1 - h : 1);
                            i && (C -= k * h * (p < 0 ? -1 : 1), j && (F -= l * h * (q < 0 ? -1 : 1)), M(b, {textAlign: g}));
                            this.xCorr = C;
                            this.yCorr = F
                        }
                        M(b, {left: e + C + "px", top: f + F + "px"});
                        if (hb)l = b.offsetHeight;
                        this.cTT = Wb
                    }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (a) {
                var b = {};
                b[ra ? "-ms-transform" : hb ? "-webkit-transform" : ib ? "MozTransform" : Qb ? "-o-transform" : ""] = b.transform = "rotate(" + a + "deg)";
                M(this.element, b)
            }, updateTransform: function () {
                var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation;
                e && (a += this.attr("width"), b += this.attr("height"));
                a = ["translate(" + a + "," + b + ")"];
                e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (this.x || 0) + " " + (this.y || 0) + ")");
                (s(c) || s(d)) && a.push("scale(" + n(c, 1) + " " + n(d, 1) + ")");
                a.length && x(this.element, "transform", a.join(" "))
            }, toFront: function () {
                var a = this.element;
                a.parentNode.appendChild(a);
                return this
            }, align: function (a, b, c) {
                var d, e, f, g, h = {};
                e = this.renderer;
                f = e.alignedObjects;
                if (a) {
                    if (this.alignOptions = a, this.alignByTranslate = b, !c || ea(c))this.alignTo =
                        d = c || "renderer", ga(f, this), f.push(this), c = null
                } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
                c = n(c, e[d], e);
                d = a.align;
                e = a.verticalAlign;
                f = (c.x || 0) + (a.x || 0);
                g = (c.y || 0) + (a.y || 0);
                if (d === "right" || d === "center")f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d];
                h[b ? "translateX" : "x"] = t(f);
                if (e === "bottom" || e === "middle")g += (c.height - (a.height || 0)) / ({bottom: 1, middle: 2}[e] || 1);
                h[b ? "translateY" : "y"] = t(g);
                this[this.placed ? "animate" : "attr"](h);
                this.placed = !0;
                this.alignAttr = h;
                return this
            }, getBBox: function () {
                var a =
                    this.bBox, b = this.renderer, c, d = this.rotation;
                c = this.element;
                var e = this.styles, f = d * Wa;
                if (!a) {
                    if (c.namespaceURI === xa || b.forExport) {
                        try {
                            a = c.getBBox ? r({}, c.getBBox()) : {width: c.offsetWidth, height: c.offsetHeight}
                        } catch (g) {
                        }
                        if (!a || a.width < 0)a = {width: 0, height: 0}
                    } else a = this.htmlGetBBox();
                    if (b.isSVG) {
                        b = a.width;
                        c = a.height;
                        if (ra && e && e.fontSize === "11px" && c.toPrecision(3) === "22.7")a.height = c = 14;
                        if (d)a.width = P(c * ca(f)) + P(b * W(f)), a.height = P(c * W(f)) + P(b * ca(f))
                    }
                    this.bBox = a
                }
                return a
            }, show: function () {
                return this.attr({visibility: "visible"})
            },
            hide: function () {
                return this.attr({visibility: "hidden"})
            }, fadeOut: function (a) {
                var b = this;
                b.animate({opacity: 0}, {duration: a || 150, complete: function () {
                    b.hide()
                }})
            }, add: function (a) {
                var b = this.renderer, c = a || b, d = c.element || b.box, e = d.childNodes, f = this.element, g = x(f, "zIndex"), h;
                if (a)this.parentGroup = a;
                this.parentInverted = a && a.inverted;
                this.textStr !== void 0 && b.buildText(this);
                if (g)c.handleZ = !0, g = A(g);
                if (c.handleZ)for (c = 0; c < e.length; c++)if (a = e[c], b = x(a, "zIndex"), a !== f && (A(b) > g || !s(g) && s(b))) {
                    d.insertBefore(f,
                        a);
                    h = !0;
                    break
                }
                h || d.appendChild(f);
                this.added = !0;
                B(this, "add");
                return this
            }, safeRemoveChild: function (a) {
                var b = a.parentNode;
                b && b.removeChild(a)
            }, destroy: function () {
                var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && b.nodeName === "SPAN" && b.parentNode, e, f;
                b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
                Ya(a);
                if (a.clipPath)a.clipPath = a.clipPath.destroy();
                if (a.stops) {
                    for (f = 0; f < a.stops.length; f++)a.stops[f] = a.stops[f].destroy();
                    a.stops = null
                }
                a.safeRemoveChild(b);
                for (c && o(c, function (b) {
                    a.safeRemoveChild(b)
                }); d &&
                         d.childNodes.length === 0;)b = d.parentNode, a.safeRemoveChild(d), d = b;
                a.alignTo && ga(a.renderer.alignedObjects, a);
                for (e in a)delete a[e];
                return null
            }, shadow: function (a, b, c) {
                var d = [], e, f, g = this.element, h, i, j, k;
                if (a) {
                    i = n(a.width, 3);
                    j = (a.opacity || 0.15) / i;
                    k = this.parentInverted ? "(-1,-1)" : "(" + n(a.offsetX, 1) + ", " + n(a.offsetY, 1) + ")";
                    for (e = 1; e <= i; e++) {
                        f = g.cloneNode(0);
                        h = i * 2 + 1 - 2 * e;
                        x(f, {isShadow: "true", stroke: a.color || "black", "stroke-opacity": j * e, "stroke-width": h, transform: "translate" + k, fill: S});
                        if (c)x(f, "height",
                            u(x(f, "height") - h, 0)), f.cutHeight = h;
                        b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                        d.push(f)
                    }
                    this.shadows = d
                }
                return this
            }};
        var Ia = function () {
            this.init.apply(this, arguments)
        };
        Ia.prototype = {Element: wa, init: function (a, b, c, d) {
            var e = location, f, g;
            f = this.createElement("svg").attr({version: "1.1"});
            g = f.element;
            a.appendChild(g);
            a.innerHTML.indexOf("xmlns") === -1 && x(g, "xmlns", xa);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = f;
            this.alignedObjects = [];
            this.url = (ib || hb) && y.getElementsByTagName("base").length ?
                e.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(y.createTextNode("Created with Highcharts 3.0.3"));
            this.defs = this.createElement("defs").add();
            this.forExport = d;
            this.gradients = {};
            this.setSize(b, c, !1);
            var h;
            if (ib && a.getBoundingClientRect)this.subPixelFix = b = function () {
                M(a, {left: 0, top: 0});
                h = a.getBoundingClientRect();
                M(a, {left: ka(h.left) - h.left + "px", top: ka(h.top) - h.top + "px"})
            }, b(), K(N, "resize", b)
        }, isHidden: function () {
            return!this.boxWrapper.getBBox().width
        },
            destroy: function () {
                var a = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                La(this.gradients || {});
                this.gradients = null;
                if (a)this.defs = a.destroy();
                this.subPixelFix && ba(N, "resize", this.subPixelFix);
                return this.alignedObjects = null
            }, createElement: function (a) {
                var b = new this.Element;
                b.init(this, a);
                return b
            }, draw: function () {
            }, buildText: function (a) {
                for (var b = a.element, c = this, d = c.forExport, e = n(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g,
                    '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), f = b.childNodes, g = /style="([^"]+)"/, h = /href="(http[^"]+)"/, i = x(b, "x"), j = a.styles, k = j && j.width && A(j.width), l = j && j.lineHeight, m = f.length; m--;)b.removeChild(f[m]);
                k && !a.added && this.box.appendChild(b);
                e[e.length - 1] === "" && e.pop();
                o(e, function (e, f) {
                    var m, n = 0, e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                    m = e.split("|||");
                    o(m, function (e) {
                        if (e !== "" || m.length === 1) {
                            var p =
                            {}, o = y.createElementNS(xa, "tspan"), s;
                            g.test(e) && (s = e.match(g)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), x(o, "style", s));
                            h.test(e) && !d && (x(o, "onclick", 'location.href="' + e.match(h)[1] + '"'), M(o, {cursor: "pointer"}));
                            e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                            if (e !== " " && (o.appendChild(y.createTextNode(e)), n ? p.dx = 0 : p.x = i, x(o, p), !n && f && (!Z && d && M(o, {display: "block"}), x(o, "dy", l || c.fontMetrics(/px$/.test(o.style.fontSize) ? o.style.fontSize : j.fontSize).h, hb && o.offsetHeight)),
                                b.appendChild(o), n++, k))for (var e = e.replace(/([^\^])-/g, "$1- ").split(" "), u, t = []; e.length || t.length;)delete a.bBox, u = a.getBBox().width, p = u > k, !p || e.length === 1 ? (e = t, t = [], e.length && (o = y.createElementNS(xa, "tspan"), x(o, {dy: l || 16, x: i}), s && x(o, "style", s), b.appendChild(o), u > k && (k = u))) : (o.removeChild(o.firstChild), t.unshift(e.pop())), e.length && o.appendChild(y.createTextNode(e.join(" ").replace(/- /g, "-")))
                        }
                    })
                })
            }, button: function (a, b, c, d, e, f, g) {
                var h = this.label(a, b, c, null, null, null, null, null, "button"), i = 0,
                    j, k, l, m, p, a = {x1: 0, y1: 0, x2: 0, y2: 1}, e = w({"stroke-width": 1, stroke: "#CCCCCC", fill: {linearGradient: a, stops: [
                        [0, "#FEFEFE"],
                        [1, "#F6F6F6"]
                    ]}, r: 2, padding: 5, style: {color: "black"}}, e);
                l = e.style;
                delete e.style;
                f = w(e, {stroke: "#68A", fill: {linearGradient: a, stops: [
                    [0, "#FFF"],
                    [1, "#ACF"]
                ]}}, f);
                m = f.style;
                delete f.style;
                g = w(e, {stroke: "#68A", fill: {linearGradient: a, stops: [
                    [0, "#9BD"],
                    [1, "#CDF"]
                ]}}, g);
                p = g.style;
                delete g.style;
                K(h.element, ra ? "mouseover" : "mouseenter", function () {
                    h.attr(f).css(m)
                });
                K(h.element, ra ? "mouseout" :
                    "mouseleave", function () {
                    j = [e, f, g][i];
                    k = [l, m, p][i];
                    h.attr(j).css(k)
                });
                h.setState = function (a) {
                    (i = a) ? a === 2 && h.attr(g).css(p) : h.attr(e).css(l)
                };
                return h.on("click", function () {
                    d.call(h)
                }).attr(e).css(r({cursor: "default"}, l))
            }, crispLine: function (a, b) {
                a[1] === a[4] && (a[1] = a[4] = t(a[1]) - b % 2 / 2);
                a[2] === a[5] && (a[2] = a[5] = t(a[2]) + b % 2 / 2);
                return a
            }, path: function (a) {
                var b = {fill: S};
                Ja(a) ? b.d = a : V(a) && r(b, a);
                return this.createElement("path").attr(b)
            }, circle: function (a, b, c) {
                a = V(a) ? a : {x: a, y: b, r: c};
                return this.createElement("circle").attr(a)
            },
            arc: function (a, b, c, d, e, f) {
                if (V(a))b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
                a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0});
                a.r = c;
                return a
            }, rect: function (a, b, c, d, e, f) {
                e = V(a) ? a.r : e;
                e = this.createElement("rect").attr({rx: e, ry: e, fill: S});
                return e.attr(V(a) ? a : e.crisp(f, a, b, u(c, 0), u(d, 0)))
            }, setSize: function (a, b, c) {
                var d = this.alignedObjects, e = d.length;
                this.width = a;
                this.height = b;
                for (this.boxWrapper[n(c, !0) ? "animate" : "attr"]({width: a, height: b}); e--;)d[e].align()
            }, g: function (a) {
                var b =
                    this.createElement("g");
                return s(a) ? b.attr({"class": "highcharts-" + a}) : b
            }, image: function (a, b, c, d, e) {
                var f = {preserveAspectRatio: S};
                arguments.length > 1 && r(f, {x: b, y: c, width: d, height: e});
                f = this.createElement("image").attr(f);
                f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
                return f
            }, symbol: function (a, b, c, d, e, f) {
                var g, h = this.symbols[a], h = h && h(t(b), t(c), d, e, f), i = /^url\((.*?)\)$/, j, k;
                if (h)g = this.path(h), r(g, {symbolName: a, x: b,
                    y: c, width: d, height: e}), f && r(g, f); else if (i.test(a))k = function (a, b) {
                    a.element && (a.attr({width: b[0], height: b[1]}), a.alignByTranslate || a.translate(t((d - b[0]) / 2), t((e - b[1]) / 2)))
                }, j = a.match(i)[1], a = Sb[j], g = this.image(j).attr({x: b, y: c}), g.isImg = !0, a ? k(g, a) : (g.attr({width: 0, height: 0}), U("img", {onload: function () {
                    k(g, Sb[j] = [this.width, this.height])
                }, src: j}));
                return g
            }, symbols: {circle: function (a, b, c, d) {
                var e = 0.166 * c;
                return["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            }, square: function (a, b, c, d) {
                return["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function (a, b, c, d) {
                return["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            }, "triangle-down": function (a, b, c, d) {
                return["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            }, diamond: function (a, b, c, d) {
                return["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            }, arc: function (a, b, c, d, e) {
                var f = e.start, c = e.r || c || d, g = e.end - 0.001, d = e.innerR, h = e.open, i = W(f), j = ca(f), k = W(g), g = ca(g), e = e.end - f < Oa ? 0 : 1;
                return["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i,
                        b + d * j, h ? "" : "Z"]
            }}, clipRect: function (a, b, c, d) {
                var e = "highcharts-" + Bb++, f = this.createElement("clipPath").attr({id: e}).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
                a.id = e;
                a.clipPath = f;
                return a
            }, color: function (a, b, c) {
                var d = this, e, f = /^rgba/, g, h, i, j, k, l, m, p = [];
                a && a.linearGradient ? g = "linearGradient" : a && a.radialGradient && (g = "radialGradient");
                if (g) {
                    c = a[g];
                    h = d.gradients;
                    j = a.stops;
                    b = b.radialReference;
                    Ja(c) && (a[g] = c = {x1: c[0], y1: c[1], x2: c[2], y2: c[3], gradientUnits: "userSpaceOnUse"});
                    g === "radialGradient" && b && !s(c.gradientUnits) &&
                    (c = w(c, {cx: b[0] - b[2] / 2 + c.cx * b[2], cy: b[1] - b[2] / 2 + c.cy * b[2], r: c.r * b[2], gradientUnits: "userSpaceOnUse"}));
                    for (m in c)m !== "id" && p.push(m, c[m]);
                    for (m in j)p.push(j[m]);
                    p = p.join(",");
                    h[p] ? a = h[p].id : (c.id = a = "highcharts-" + Bb++, h[p] = i = d.createElement(g).attr(c).add(d.defs), i.stops = [], o(j, function (a) {
                        f.test(a[1]) ? (e = pa(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], l = 1);
                        a = d.createElement("stop").attr({offset: a[0], "stop-color": k, "stop-opacity": l}).add(i);
                        i.stops.push(a)
                    }));
                    return"url(" + d.url + "#" + a + ")"
                } else return f.test(a) ?
                    (e = pa(a), x(b, c + "-opacity", e.get("a")), e.get("rgb")) : (b.removeAttribute(c + "-opacity"), a)
            }, text: function (a, b, c, d) {
                var e = O.chart.style, f = $ || !Z && this.forExport;
                if (d && !this.forExport)return this.html(a, b, c);
                b = t(n(b, 0));
                c = t(n(c, 0));
                a = this.createElement("text").attr({x: b, y: c, text: a}).css({fontFamily: e.fontFamily, fontSize: e.fontSize});
                f && a.css({position: "absolute"});
                a.x = b;
                a.y = c;
                return a
            }, html: function (a, b, c) {
                var d = O.chart.style, e = this.createElement("span"), f = e.attrSetters, g = e.element, h = e.renderer;
                f.text =
                    function (a) {
                        a !== g.innerHTML && delete this.bBox;
                        g.innerHTML = a;
                        return!1
                    };
                f.x = f.y = f.align = function (a, b) {
                    b === "align" && (b = "textAlign");
                    e[b] = a;
                    e.htmlUpdateTransform();
                    return!1
                };
                e.attr({text: a, x: t(b), y: t(c)}).css({position: "absolute", whiteSpace: "nowrap", fontFamily: d.fontFamily, fontSize: d.fontSize});
                e.css = e.htmlCss;
                if (h.isSVG)e.add = function (a) {
                    var b, c = h.box.parentNode, d = [];
                    if (a) {
                        if (b = a.div, !b) {
                            for (; a;)d.push(a), a = a.parentGroup;
                            o(d.reverse(), function (a) {
                                var d;
                                b = a.div = a.div || U(Ea, {className: x(a.element, "class")},
                                    {position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px"}, b || c);
                                d = b.style;
                                r(a.attrSetters, {translateX: function (a) {
                                    d.left = a + "px"
                                }, translateY: function (a) {
                                    d.top = a + "px"
                                }, visibility: function (a, b) {
                                    d[b] = a
                                }})
                            })
                        }
                    } else b = c;
                    b.appendChild(g);
                    e.added = !0;
                    e.alignOnAdd && e.htmlUpdateTransform();
                    return e
                };
                return e
            }, fontMetrics: function (a) {
                var a = A(a || 11), a = a < 24 ? a + 4 : t(a * 1.2), b = t(a * 0.8);
                return{h: a, b: b}
            }, label: function (a, b, c, d, e, f, g, h, i) {
                function j() {
                    var a, b;
                    a = n.element.style;
                    F = (Qa === void 0 || D === void 0 ||
                        q.styles.textAlign) && n.getBBox();
                    q.width = (Qa || F.width || 0) + 2 * da + lb;
                    q.height = (D || F.height || 0) + 2 * da;
                    A = da + p.fontMetrics(a && a.fontSize).b;
                    if (y) {
                        if (!C)a = t(-u * da), b = h ? -A : 0, q.box = C = d ? p.symbol(d, a, b, q.width, q.height) : p.rect(a, b, q.width, q.height, 0, x[Ub]), C.add(q);
                        C.isImg || C.attr(w({width: q.width, height: q.height}, x));
                        x = null
                    }
                }

                function k() {
                    var a = q.styles, a = a && a.textAlign, b = lb + da * (1 - u), c;
                    c = h ? 0 : A;
                    if (s(Qa) && (a === "center" || a === "right"))b += {center: 0.5, right: 1}[a] * (Qa - F.width);
                    (b !== n.x || c !== n.y) && n.attr({x: b, y: c});
                    n.x = b;
                    n.y = c
                }

                function l(a, b) {
                    C ? C.attr(a, b) : x[a] = b
                }

                function m() {
                    n.add(q);
                    q.attr({text: a, x: b, y: c});
                    C && s(e) && q.attr({anchorX: e, anchorY: f})
                }

                var p = this, q = p.g(i), n = p.text("", 0, 0, g).attr({zIndex: 1}), C, F, u = 0, da = 3, lb = 0, Qa, D, H, za, G = 0, x = {}, A, g = q.attrSetters, y;
                K(q, "add", m);
                g.width = function (a) {
                    Qa = a;
                    return!1
                };
                g.height = function (a) {
                    D = a;
                    return!1
                };
                g.padding = function (a) {
                    s(a) && a !== da && (da = a, k());
                    return!1
                };
                g.paddingLeft = function (a) {
                    s(a) && a !== lb && (lb = a, k());
                    return!1
                };
                g.align = function (a) {
                    u = {left: 0, center: 0.5, right: 1}[a];
                    return!1
                };
                g.text = function (a, b) {
                    n.attr(b, a);
                    j();
                    k();
                    return!1
                };
                g[Ub] = function (a, b) {
                    y = !0;
                    G = a % 2 / 2;
                    l(b, a);
                    return!1
                };
                g.stroke = g.fill = g.r = function (a, b) {
                    b === "fill" && (y = !0);
                    l(b, a);
                    return!1
                };
                g.anchorX = function (a, b) {
                    e = a;
                    l(b, a + G - H);
                    return!1
                };
                g.anchorY = function (a, b) {
                    f = a;
                    l(b, a - za);
                    return!1
                };
                g.x = function (a) {
                    q.x = a;
                    a -= u * ((Qa || F.width) + da);
                    H = t(a);
                    q.attr("translateX", H);
                    return!1
                };
                g.y = function (a) {
                    za = q.y = t(a);
                    q.attr("translateY", za);
                    return!1
                };
                var z = q.css;
                return r(q, {css: function (a) {
                    if (a) {
                        var b = {}, a = w(a);
                        o(["fontSize",
                            "fontWeight", "fontFamily", "color", "lineHeight", "width", "textDecoration"], function (c) {
                            a[c] !== v && (b[c] = a[c], delete a[c])
                        });
                        n.css(b)
                    }
                    return z.call(q, a)
                }, getBBox: function () {
                    return{width: F.width + 2 * da, height: F.height + 2 * da, x: F.x - da, y: F.y - da}
                }, shadow: function (a) {
                    C && C.shadow(a);
                    return q
                }, destroy: function () {
                    ba(q, "add", m);
                    ba(q.element, "mouseenter");
                    ba(q.element, "mouseleave");
                    n && (n = n.destroy());
                    C && (C = C.destroy());
                    wa.prototype.destroy.call(q);
                    q = p = j = k = l = m = null
                }})
            }};
        Xa = Ia;
        var E;
        if (!Z && !$) {
            Aa.VMLElement = E = {init: function (a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", "absolute", ";"], e = b === Ea;
                (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                if (b)c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = U(c);
                this.renderer = a;
                this.attrSetters = {}
            }, add: function (a) {
                var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform &&
                this.updateTransform();
                B(this, "add");
                return this
            }, updateTransform: wa.prototype.htmlUpdateTransform, setSpanRotation: function (a, b, c) {
                M(this.element, {filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", c, ", M12=", -b, ", M21=", b, ", M22=", c, ", sizingMethod='auto expand')"].join("") : S})
            }, attr: function (a, b) {
                var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, i = this.renderer, j = this.symbolName, k, l = this.shadows, m, p = this.attrSetters, q = this;
                ea(a) && s(b) && (c = a, a = {}, a[c] = b);
                if (ea(a))c = a, q = c === "strokeWidth" ||
                    c === "stroke-width" ? this.strokeweight : this[c]; else for (c in a)if (d = a[c], m = !1, e = p[c] && p[c].call(this, d, c), e !== !1 && d !== null) {
                    e !== v && (d = e);
                    if (j && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c))k || (this.symbolAttr(a), k = !0), m = !0; else if (c === "d") {
                        d = d || [];
                        this.d = d.join(" ");
                        e = d.length;
                        m = [];
                        for (var n; e--;)if (qa(d[e]))m[e] = t(d[e] * 10) - 5; else if (d[e] === "Z")m[e] = "x"; else if (m[e] = d[e], d.isArc && (d[e] === "wa" || d[e] === "at"))n = d[e] === "wa" ? 1 : -1, m[e + 5] === m[e + 7] && (m[e + 7] -= n), m[e + 6] === m[e + 8] && (m[e + 8] -=
                            n);
                        d = m.join(" ") || "x";
                        f.path = d;
                        if (l)for (e = l.length; e--;)l[e].path = l[e].cutOff ? this.cutOffPath(d, l[e].cutOff) : d;
                        m = !0
                    } else if (c === "visibility") {
                        if (l)for (e = l.length; e--;)l[e].style[c] = d;
                        h === "DIV" && (d = d === "hidden" ? "-999em" : 0, gb || (g[c] = d ? "visible" : "hidden"), c = "top");
                        g[c] = d;
                        m = !0
                    } else if (c === "zIndex")d && (g[c] = d), m = !0; else if (oa(c, ["x", "y", "width", "height"]) !== -1)this[c] = d, c === "x" || c === "y" ? c = {x: "left", y: "top"}[c] : d = u(0, d), this.updateClipping ? (this[c] = d, this.updateClipping()) : g[c] = d, m = !0; else if (c === "class" &&
                        h === "DIV")f.className = d; else if (c === "stroke")d = i.color(d, f, c), c = "strokecolor"; else if (c === "stroke-width" || c === "strokeWidth")f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, qa(d) && (d += "px"); else if (c === "dashstyle")(f.getElementsByTagName("stroke")[0] || U(i.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid", this.dashstyle = d, m = !0; else if (c === "fill")if (h === "SPAN")g.color = d; else {
                        if (h !== "IMG")f.filled = d !== S ? !0 : !1, d = i.color(d, f, c, this), c = "fillcolor"
                    } else if (c === "opacity")m = !0; else if (h === "shape" && c === "rotation")this[c] =
                        f.style[c] = d, f.style.left = -t(ca(d * Wa) + 1) + "px", f.style.top = t(W(d * Wa)) + "px"; else if (c === "translateX" || c === "translateY" || c === "rotation")this[c] = d, this.updateTransform(), m = !0; else if (c === "text")this.bBox = null, f.innerHTML = d, m = !0;
                    m || (gb ? f[c] = d : x(f, c, d))
                }
                return q
            }, clip: function (a) {
                var b = this, c;
                a ? (c = a.members, ga(c, b), c.push(b), b.destroyClip = function () {
                    ga(c, b)
                }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {clip: gb ? "inherit" : "rect(auto)"});
                return b.css(a)
            }, css: wa.prototype.htmlCss, safeRemoveChild: function (a) {
                a.parentNode &&
                Va(a)
            }, destroy: function () {
                this.destroyClip && this.destroyClip();
                return wa.prototype.destroy.apply(this)
            }, on: function (a, b) {
                this.element["on" + a] = function () {
                    var a = N.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            }, cutOffPath: function (a, b) {
                var c, a = a.split(/[ ,]/);
                c = a.length;
                if (c === 9 || c === 11)a[c - 4] = a[c - 2] = A(a[c - 2]) - 10 * b;
                return a.join(" ")
            }, shadow: function (a, b, c) {
                var d = [], e, f = this.element, g = this.renderer, h, i = f.style, j, k = f.path, l, m, p, q;
                k && typeof k.value !== "string" && (k = "x");
                m = k;
                if (a) {
                    p = n(a.width, 3);
                    q = (a.opacity ||
                        0.15) / p;
                    for (e = 1; e <= 3; e++) {
                        l = p * 2 + 1 - 2 * e;
                        c && (m = this.cutOffPath(k.value, l + 0.5));
                        j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText, '" />'];
                        h = U(g.prepVML(j), null, {left: A(i.left) + n(a.offsetX, 1), top: A(i.top) + n(a.offsetY, 1)});
                        if (c)h.cutOff = l + 1;
                        j = ['<stroke color="', a.color || "black", '" opacity="', q * e, '"/>'];
                        U(g.prepVML(j), null, null, h);
                        b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                        d.push(h)
                    }
                    this.shadows = d
                }
                return this
            }};
            E = ha(wa, E);
            var ma = {Element: E, isIE8: Ga.indexOf("MSIE 8.0") > -1, init: function (a, b, c) {
                var d, e;
                this.alignedObjects = [];
                d = this.createElement(Ea);
                e = d.element;
                e.style.position = "relative";
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.setSize(b, c, !1);
                if (!y.namespaces.hcv)y.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), y.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
            }, isHidden: function () {
                return!this.box.offsetWidth
            },
                clipRect: function (a, b, c, d) {
                    var e = this.createElement(), f = V(a);
                    return r(e, {members: [], left: f ? a.x : a, top: f ? a.y : b, width: f ? a.width : c, height: f ? a.height : d, getCSS: function (a) {
                        var b = a.element, c = b.nodeName, a = a.inverted, d = this.top - (c === "shape" ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = {clip: "rect(" + t(a ? e : d) + "px," + t(a ? f : b) + "px," + t(a ? b : f) + "px," + t(a ? d : e) + "px)"};
                        !a && gb && c === "DIV" && r(d, {width: b + "px", height: f + "px"});
                        return d
                    }, updateClipping: function () {
                        o(e.members, function (a) {
                            a.css(e.getCSS(a))
                        })
                    }})
                },
                color: function (a, b, c, d) {
                    var e = this, f, g = /^rgba/, h, i, j = S;
                    a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
                    if (i) {
                        var k, l, m = a.linearGradient || a.radialGradient, p, q, n, C, F, u = "", a = a.stops, s, t = [], v = function () {
                            h = ['<fill colors="' + t.join(",") + '" opacity="', n, '" o:opacity2="', q, '" type="', i, '" ', u, 'focus="100%" method="any" />'];
                            U(e.prepVML(h), null, null, b)
                        };
                        p = a[0];
                        s = a[a.length - 1];
                        p[0] > 0 && a.unshift([0, p[1]]);
                        s[0] < 1 && a.push([1, s[1]]);
                        o(a, function (a, b) {
                            g.test(a[1]) ? (f = pa(a[1]), k = f.get("rgb"),
                                l = f.get("a")) : (k = a[1], l = 1);
                            t.push(a[0] * 100 + "% " + k);
                            b ? (n = l, C = k) : (q = l, F = k)
                        });
                        if (c === "fill")if (i === "gradient")c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, p = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, u = 'angle="' + (90 - R.atan((m - a) / (p - c)) * 180 / Oa) + '"', v(); else {
                            var j = m.r, D = j * 2, H = j * 2, r = m.cx, G = m.cy, x = b.radialReference, w, j = function () {
                                x && (w = d.getBBox(), r += (x[0] - w.x) / w.width - 0.5, G += (x[1] - w.y) / w.height - 0.5, D *= x[2] / w.width, H *= x[2] / w.height);
                                u = 'src="' + O.global.VMLRadialGradientURL + '" size="' + D + "," + H + '" origin="0.5,0.5" position="' + r + "," +
                                    G + '" color2="' + F + '" ';
                                v()
                            };
                            d.added ? j() : K(d, "add", j);
                            j = C
                        } else j = k
                    } else if (g.test(a) && b.tagName !== "IMG")f = pa(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], U(this.prepVML(h), null, null, b), j = f.get("rgb"); else {
                        j = b.getElementsByTagName(c);
                        if (j.length)j[0].opacity = 1, j[0].type = "solid";
                        j = a
                    }
                    return j
                }, prepVML: function (a) {
                    var b = this.isIE8, a = a.join("");
                    b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') :
                        a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                    return a
                }, text: Ia.prototype.html, path: function (a) {
                    var b = {coordsize: "10 10"};
                    Ja(a) ? b.d = a : V(a) && r(b, a);
                    return this.createElement("shape").attr(b)
                }, circle: function (a, b, c) {
                    var d = this.symbol("circle");
                    if (V(a))c = a.r, b = a.y, a = a.x;
                    d.isCircle = !0;
                    return d.attr({x: a, y: b, width: 2 * c, height: 2 * c})
                }, g: function (a) {
                    var b;
                    a && (b = {className: "highcharts-" + a, "class": "highcharts-" + a});
                    return this.createElement(Ea).attr(b)
                },
                image: function (a, b, c, d, e) {
                    var f = this.createElement("img").attr({src: a});
                    arguments.length > 1 && f.attr({x: b, y: c, width: d, height: e});
                    return f
                }, rect: function (a, b, c, d, e, f) {
                    if (V(a))b = a.y, c = a.width, d = a.height, f = a.strokeWidth, a = a.x;
                    var g = this.symbol("rect");
                    g.r = e;
                    return g.attr(g.crisp(f, a, b, u(c, 0), u(d, 0)))
                }, invertChild: function (a, b) {
                    var c = b.style;
                    M(a, {flip: "x", left: A(c.width) - 1, top: A(c.height) - 1, rotation: -90})
                }, symbols: {arc: function (a, b, c, d, e) {
                    var f = e.start, g = e.end, h = e.r || c || d, c = e.innerR, d = W(f), i = ca(f), j = W(g),
                        k = ca(g);
                    if (g - f === 0)return["x"];
                    f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");
                    f.isArc = !0;
                    return f
                }, circle: function (a, b, c, d, e) {
                    e && e.isCircle && (a -= c / 2, b -= d / 2);
                    return["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                }, rect: function (a, b, c, d, e) {
                    var f = a + c, g = b + d, h;
                    !s(e) || !e.r ? f = Ia.prototype.symbols.square.apply(0, arguments) : (h = J(e.r, c, d), f = ["M", a + h, b, "L", f - h, b, "wa", f - 2 * h, b, f, b + 2 * h, f - h, b, f, b + h, "L", f, g - h, "wa", f - 2 * h, g - 2 *
                        h, f, g, f, g - h, f - h, g, "L", a + h, g, "wa", a, g - 2 * h, a + 2 * h, g, a + h, g, a, g - h, "L", a, b + h, "wa", a, b, a + 2 * h, b + 2 * h, a, b + h, a + h, b, "x", "e"]);
                    return f
                }}};
            Aa.VMLRenderer = E = function () {
                this.init.apply(this, arguments)
            };
            E.prototype = w(Ia.prototype, ma);
            Xa = E
        }
        var Xb;
        if ($)Aa.CanVGRenderer = E = function () {
            xa = "http://www.w3.org/1999/xhtml"
        }, E.prototype.symbols = {}, Xb = function () {
            function a() {
                var a = b.length, d;
                for (d = 0; d < a; d++)b[d]();
                b = []
            }

            var b = [];
            return{push: function (c, d) {
                b.length === 0 && nb(d, a);
                b.push(c)
            }}
        }(), Xa = E;
        Na.prototype = {addLabel: function () {
            var a =
                this.axis, b = a.options, c = a.chart, d = a.horiz, e = a.categories, f = a.series[0] && a.series[0].names, g = this.pos, h = b.labels, i = a.tickPositions, d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / i.length || !d && (c.optionsMarginLeft || c.chartWidth * 0.33), j = g === i[0], k = g === i[i.length - 1], f = e ? n(e[g], f && f[g], g) : g, e = this.label, i = i.info, l;
            a.isDatetimeAxis && i && (l = b.dateTimeLabelFormats[i.higherRanks[g] || i.unitName]);
            this.isFirst = j;
            this.isLast = k;
            b = a.labelFormatter.call({axis: a, chart: c, isFirst: j, isLast: k, dateTimeLabelFormat: l,
                value: a.isLog ? ja(fa(f)) : f});
            g = d && {width: u(1, t(d - 2 * (h.padding || 10))) + "px"};
            g = r(g, h.style);
            if (s(e))e && e.attr({text: b}).css(g); else {
                d = {align: a.labelAlign};
                if (qa(h.rotation))d.rotation = h.rotation;
                this.label = s(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(d).css(g).add(a.labelGroup) : null
            }
        }, getLabelSize: function () {
            var a = this.label, b = this.axis;
            return a ? (this.labelBBox = a.getBBox())[b.horiz ? "height" : "width"] : 0
        }, getLabelSides: function () {
            var a = this.axis, b = this.labelBBox.width, a = b * {left: 0, center: 0.5, right: 1}[a.labelAlign] -
                a.options.labels.x;
            return[-a, b - a]
        }, handleOverflow: function (a, b) {
            var c = !0, d = this.axis, e = d.chart, f = this.isFirst, g = this.isLast, h = b.x, i = d.reversed, j = d.tickPositions;
            if (f || g) {
                var k = this.getLabelSides(), l = k[0], k = k[1], e = e.plotLeft, m = e + d.len, j = (d = d.ticks[j[a + (f ? 1 : -1)]]) && d.label.xy && d.label.xy.x + d.getLabelSides()[f ? 0 : 1];
                f && !i || g && i ? h + l < e && (h = e - l, d && h + k > j && (c = !1)) : h + k > m && (h = m - k, d && h + l < j && (c = !1));
                b.x = h
            }
            return c
        }, getPosition: function (a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return{x: a ?
                e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB}
        }, getLabelPosition: function (a, b, c, d, e, f, g, h) {
            var i = this.axis, j = i.transA, k = i.reversed, l = i.staggerLines, m = i.chart.renderer.fontMetrics(e.style.fontSize).b, p = e.rotation, a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0);
            p && i.side === 2 && (b -= m - m * W(p * Wa));
            !s(e.y) && !p && (b += m - c.getBBox().height /
                2);
            l && (b += g / (h || 1) % l * (i.labelOffset / l));
            return{x: a, y: b}
        }, getMarkPath: function (a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        }, render: function (a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, i = this.label, j = this.pos, k = e.labels, l = this.gridLine, m = h ? h + "Grid" : "grid", p = h ? h + "Tick" : "tick", q = e[m + "LineWidth"], o = e[m + "LineColor"], C = e[m + "LineDashStyle"], F = e[p + "Length"], m = e[p + "Width"] || 0, u = e[p + "Color"], s = e[p + "Position"], p = this.mark, t = k.step, r = !0, D = d.tickmarkOffset,
                H = this.getPosition(g, j, D, b), w = H.x, H = H.y, G = g && w === d.pos || !g && H === d.pos + d.len ? -1 : 1, x = d.staggerLines;
            this.isActive = !0;
            if (q) {
                j = d.getPlotLinePath(j + D, q * G, b, !0);
                if (l === v) {
                    l = {stroke: o, "stroke-width": q};
                    if (C)l.dashstyle = C;
                    if (!h)l.zIndex = 1;
                    if (b)l.opacity = 0;
                    this.gridLine = l = q ? f.path(j).attr(l).add(d.gridGroup) : null
                }
                if (!b && l && j)l[this.isNew ? "attr" : "animate"]({d: j, opacity: c})
            }
            if (m && F)s === "inside" && (F = -F), d.opposite && (F = -F), b = this.getMarkPath(w, H, F, m * G, g, f), p ? p.animate({d: b, opacity: c}) : this.mark = f.path(b).attr({stroke: u,
                "stroke-width": m, opacity: c}).add(d.axisGroup);
            if (i && !isNaN(w))i.xy = H = this.getLabelPosition(w, H, i, g, k, D, a, t), this.isFirst && !n(e.showFirstLabel, 1) || this.isLast && !n(e.showLastLabel, 1) ? r = !1 : !x && g && k.overflow === "justify" && !this.handleOverflow(a, H) && (r = !1), t && a % t && (r = !1), r && !isNaN(H.y) ? (H.opacity = c, i[this.isNew ? "attr" : "animate"](H), this.isNew = !1) : i.attr("y", -9999)
        }, destroy: function () {
            La(this, this.axis)
        }};
        wb.prototype = {render: function () {
            var a = this, b = a.axis, c = b.horiz, d = (b.pointRange || 0) / 2, e = a.options, f = e.label,
                g = a.label, h = e.width, i = e.to, j = e.from, k = s(j) && s(i), l = e.value, m = e.dashStyle, p = a.svgElem, q = [], o, C = e.color, F = e.zIndex, t = e.events, r = b.chart.renderer;
            b.isLog && (j = na(j), i = na(i), l = na(l));
            if (h) {
                if (q = b.getPlotLinePath(l, h), d = {stroke: C, "stroke-width": h}, m)d.dashstyle = m
            } else if (k) {
                if (j = u(j, b.min - d), i = J(i, b.max + d), q = b.getPlotBandPath(j, i, e), d = {fill: C}, e.borderWidth)d.stroke = e.borderColor, d["stroke-width"] = e.borderWidth
            } else return;
            if (s(F))d.zIndex = F;
            if (p)q ? p.animate({d: q}, null, p.onGetPath) : (p.hide(), p.onGetPath =
                function () {
                    p.show()
                }); else if (q && q.length && (a.svgElem = p = r.path(q).attr(d).add(), t))for (o in e = function (b) {
                p.on(b, function (c) {
                    t[b].apply(a, [c])
                })
            }, t)e(o);
            if (f && s(f.text) && q && q.length && b.width > 0 && b.height > 0) {
                f = w({align: c && k && "center", x: c ? !k && 4 : 10, verticalAlign: !c && k && "middle", y: c ? k ? 16 : 10 : k ? 6 : -4, rotation: c && !k && 90}, f);
                if (!g)a.label = g = r.text(f.text, 0, 0, f.useHTML).attr({align: f.textAlign || f.align, rotation: f.rotation, zIndex: F}).css(f.style).add();
                b = [q[1], q[4], n(q[6], q[1])];
                q = [q[2], q[5], n(q[7], q[2])];
                c =
                    Ka(b);
                k = Ka(q);
                g.align(f, !1, {x: c, y: k, width: ua(b) - c, height: ua(q) - k});
                g.show()
            } else g && g.hide();
            return a
        }, destroy: function () {
            ga(this.axis.plotLinesAndBands, this);
            La(this, this.axis)
        }};
        Pb.prototype = {destroy: function () {
            La(this, this.axis)
        }, setTotal: function (a) {
            this.cum = this.total = a
        }, addValue: function (a) {
            this.setTotal(ja(this.total + a))
        }, render: function (a) {
            var b = this.options, c = b.format, c = c ? Da(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({text: c, visibility: "hidden"}) : this.label = this.axis.chart.renderer.text(c,
                0, 0, b.useHTML).css(b.style).attr({align: this.textAlign, rotation: b.rotation, visibility: "hidden"}).add(a)
        }, cacheExtremes: function (a, b) {
            this.points[a.index] = b
        }, setOffset: function (a, b) {
            var c = this.axis, d = c.chart, e = d.inverted, f = this.isNegative, g = c.translate(this.percent ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = P(g - c), h = d.xAxis[0].translate(this.x) + a, i = d.plotHeight, f = {x: e ? f ? g : g - c : h, y: e ? i - h - b : f ? i - g - c : i - g, width: e ? c : b, height: e ? b : c};
            if (e = this.label)e.align(this.alignOptions, null, f), f = e.alignAttr, e.attr({visibility: this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? Z ? "inherit" : "visible" : "hidden"})
        }};
        fb.prototype = {defaultOptions: {dateTimeLabelFormats: {millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"}, endOnTick: !1, gridLineColor: "#C0C0C0", labels: L, lineColor: "#C0D0E0", lineWidth: 1, minPadding: 0.01, maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0",
            tickLength: 5, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: {align: "middle", style: {color: "#4d759e", fontWeight: "bold"}}, type: "linear"}, defaultYAxisOptions: {endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: {x: -8, y: 3}, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05, startOnTick: !0, tickWidth: 0, title: {rotation: 270, text: "Values"}, stackLabels: {enabled: !1, formatter: function () {
            return Ba(this.total, -1)
        }, style: L.style}}, defaultLeftAxisOptions: {labels: {x: -8,
            y: null}, title: {rotation: 270}}, defaultRightAxisOptions: {labels: {x: 8, y: null}, title: {rotation: 90}}, defaultBottomAxisOptions: {labels: {x: 0, y: 14}, title: {rotation: 0}}, defaultTopAxisOptions: {labels: {x: 0, y: -5}, title: {rotation: 0}}, init: function (a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.xOrY = (this.isXAxis = c) ? "x" : "y";
            this.opposite = b.opposite;
            this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3;
            this.setOptions(b);
            var d = this.options, e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = s(d.linkedTo);
            this.tickmarkOffset = this.categories && d.tickmarkPlacement === "between" ? 0.5 : 0;
            this.ticks = {};
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset =
                d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksMax = {};
            this._stacksTouched = 0;
            this.min = this.max = null;
            var f, d = this.options.events;
            oa(this, a.axes) === -1 && (a.axes.push(this), a[c ? "xAxis" : "yAxis"].push(this));
            this.series = this.series || [];
            if (a.inverted && c && this.reversed === v)this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d)K(this, f, d[f]);
            if (this.isLog)this.val2lin = na, this.lin2val = fa
        }, setOptions: function (a) {
            this.options = w(this.defaultOptions, this.isXAxis ?
            {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], w(O[this.isXAxis ? "xAxis" : "yAxis"], a))
        }, update: function (a, b) {
            var c = this.chart, a = c.options[this.xOrY + "Axis"][this.options.index] = w(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = !1;
            this.init(c, r(a, {events: v}));
            c.isDirtyBox = !0;
            n(b, !0) && c.redraw()
        }, remove: function (a) {
            var b = this.chart, c = this.xOrY + "Axis";
            o(this.series, function (a) {
                a.remove(!1)
            });
            ga(b.axes, this);
            ga(b[c], this);
            b.options[c].splice(this.options.index, 1);
            o(b[c], function (a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            n(a, !0) && b.redraw()
        }, defaultLabelFormatter: function () {
            var a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = O.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h)g = Da(h, this); else if (c)g = b; else if (d)g = Za(d, b); else if (f && a >= 1E3)for (; f-- && g === v;)c = Math.pow(1E3, f + 1), a >= c && e[f] !== null && (g = Ba(b / c, -1) +
                e[f]);
            g === v && (g = b >= 1E3 ? Ba(b, 0) : Ba(b, -1));
            return g
        }, getSeriesExtremes: function () {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = null;
            a.stacksMax = {};
            a.buildStacks();
            o(a.series, function (c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options, e;
                    e = d.threshold;
                    a.hasVisibleSeries = !0;
                    a.isLog && e <= 0 && (e = null);
                    if (a.isXAxis) {
                        if (e = c.xData, e.length)a.dataMin = J(n(a.dataMin, e[0]), Ka(e)), a.dataMax = u(n(a.dataMax, e[0]), ua(e))
                    } else {
                        d = d.stacking;
                        a.usePercentage = d === "percent";
                        if (a.usePercentage)a.dataMin =
                            0, a.dataMax = 99;
                        c.getExtremes();
                        d = c.dataMax;
                        c = c.dataMin;
                        if (!a.usePercentage && s(c) && s(d))a.dataMin = J(n(a.dataMin, c), c), a.dataMax = u(n(a.dataMax, d), d);
                        if (s(e))if (a.dataMin >= e)a.dataMin = e, a.ignoreMinPadding = !0; else if (a.dataMax < e)a.dataMax = e, a.ignoreMaxPadding = !0
                    }
                }
            })
        }, translate: function (a, b, c, d, e, f) {
            var g = this.len, h = 1, i = 0, j = d ? this.oldTransA : this.transA, d = d ? this.oldMin : this.min, k = this.minPixelPadding, e = (this.options.ordinal || this.isLog && e) && this.lin2val;
            if (!j)j = this.transA;
            c && (h *= -1, i = g);
            this.reversed &&
            (h *= -1, i -= h * g);
            b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (qa(f) ? j * f * this.pointRange : 0));
            return a
        }, toPixels: function (a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        }, toValue: function (a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        }, getPlotLinePath: function (a, b, c, d) {
            var e = this.chart, f = this.left, g = this.top, h, i, j, a = this.translate(a, null, null, c), k = c && e.oldChartHeight || e.chartHeight, l = c && e.oldChartWidth ||
                e.chartWidth, m;
            h = this.transB;
            c = i = t(a + h);
            h = j = t(k - a - h);
            if (isNaN(a))m = !0; else if (this.horiz) {
                if (h = g, j = k - this.bottom, c < f || c > f + this.width)m = !0
            } else if (c = f, i = l - this.right, h < g || h > g + this.height)m = !0;
            return m && !d ? null : e.renderer.crispLine(["M", c, h, "L", i, j], b || 0)
        }, getPlotBandPath: function (a, b) {
            var c = this.getPlotLinePath(b), d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        }, getLinearTickPositions: function (a, b, c) {
            for (var d, b = ja(T(b / a) * a), c = ja(ka(c / a) * a), e = []; b <= c;) {
                e.push(b);
                b = ja(b + a);
                if (b === d)break;
                d = b
            }
            return e
        }, getLogTickPositions: function (a, b, c, d) {
            var e = this.options, f = this.len, g = [];
            if (!d)this._minorAutoInterval = null;
            if (a >= 0.5)a = t(a), g = this.getLinearTickPositions(a, b, c); else if (a >= 0.08)for (var f = T(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
                i = e.length;
                for (h = 0; h < i && !l; h++)j = na(fa(f) * e[h]), j > b && (!d || k <= c) && g.push(k), k > c && (l = !0), k = j
            } else if (b = fa(b), c = fa(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = n(a === "auto" ? null : a, this._minorAutoInterval,
                    (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = pb(a, null, ob(a)), g = Pa(this.getLinearTickPositions(a, b, c), na), !d)this._minorAutoInterval = a / 5;
            if (!d)this.tickInterval = a;
            return g
        }, getMinorTickPositions: function () {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e;
            if (this.isLog) {
                e = b.length;
                for (a = 1; a < e; a++)d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0))
            } else if (this.isDatetimeAxis && a.minorTickInterval === "auto")d = d.concat(Hb(Fb(c), this.min, this.max,
                a.startOfWeek)), d[0] < this.min && d.shift(); else for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c)d.push(b);
            return d
        }, adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, i, j;
            if (this.isXAxis && this.minRange === v && !this.isLog)s(a.min) || s(a.max) ? this.minRange = null : (o(this.series, function (a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)if (h = i[g] - i[g - 1], f === v || h < f)f = h
            }), this.minRange = J(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                var k =
                    this.minRange;
                d = (k - c + b) / 2;
                d = [b - d, n(a.min, b - d)];
                if (e)d[2] = this.dataMin;
                b = ua(d);
                c = [b + k, n(a.max, b + k)];
                if (e)c[2] = this.dataMax;
                c = Ka(c);
                c - b < k && (d[0] = c - k, d[1] = n(a.min, c - k), b = ua(d))
            }
            this.min = b;
            this.max = c
        }, setAxisTranslation: function (a) {
            var b = this.max - this.min, c = 0, d, e = 0, f = 0, g = this.linkedParent, h = this.transA;
            if (this.isXAxis)g ? (e = g.minPointOffset, f = g.pointRangePadding) : o(this.series, function (a) {
                var g = a.pointRange, h = a.options.pointPlacement, l = a.closestPointRange;
                g > b && (g = 0);
                c = u(c, g);
                e = u(e, ea(h) ? 0 : g / 2);
                f = u(f, h ===
                    "on" ? 0 : g);
                !a.noSharedTooltip && s(l) && (d = s(d) ? J(d, l) : l)
            }), g = this.ordinalSlope && d ? this.ordinalSlope / d : 1, this.minPointOffset = e *= g, this.pointRangePadding = f *= g, this.pointRange = J(c, b), this.closestPointRange = d;
            if (a)this.oldTransA = h;
            this.translationSlope = this.transA = h = this.len / (b + f || 1);
            this.transB = this.horiz ? this.left : this.bottom;
            this.minPixelPadding = h * e
        }, setTickPositions: function (a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, i = b.options.tickPositioner, j = d.maxPadding,
                k = d.minPadding, l = d.tickInterval, m = d.minTickInterval, p = d.tickPixelInterval, q = b.categories;
            h ? (b.linkedParent = c[g ? "xAxis" : "yAxis"][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = n(c.min, c.dataMin), b.max = n(c.max, c.dataMax), d.type !== b.linkedParent.options.type && va(11, 1)) : (b.min = n(b.userMin, d.min, b.dataMin), b.max = n(b.userMax, d.max, b.dataMax));
            if (e)!a && J(b.min, n(b.dataMin, b.min)) <= 0 && va(10, 1), b.min = ja(na(b.min)), b.max = ja(na(b.max));
            if (b.range && (b.userMin = b.min = u(b.min, b.max - b.range), b.userMax = b.max, a))b.range =
                null;
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!q && !b.usePercentage && !h && s(b.min) && s(b.max) && (c = b.max - b.min)) {
                if (!s(d.min) && !s(b.userMin) && k && (b.dataMin < 0 || !b.ignoreMinPadding))b.min -= c * k;
                if (!s(d.max) && !s(b.userMax) && j && (b.dataMax > 0 || !b.ignoreMaxPadding))b.max += c * j
            }
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !l && p === b.linkedParent.options.tickPixelInterval ? b.linkedParent.tickInterval : n(l, q ? 1 : (b.max - b.min) * p / (b.len || 1));
            g && !a && o(b.series, function (a) {
                a.processData(b.min !==
                    b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval)b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange)b.tickInterval = u(b.pointRange, b.tickInterval);
            if (!l && b.tickInterval < m)b.tickInterval = m;
            if (!f && !e && !l)b.tickInterval = pb(b.tickInterval, null, ob(b.tickInterval), d);
            b.minorTickInterval = d.minorTickInterval === "auto" && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions = a = d.tickPositions ?
                [].concat(d.tickPositions) : i && i.apply(b, [b.min, b.max]);
            if (!a)a = f ? (b.getNonLinearTimeTicks || Hb)(Fb(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), b.tickPositions = a;
            if (!h)e = a[0], f = a[a.length - 1], h = b.minPointOffset || 0, d.startOnTick ? b.min = e : b.min - h > e && a.shift(), d.endOnTick ? b.max = f : b.max + h < f && a.pop(), a.length === 1 && (b.min -= 0.001, b.max += 0.001)
        }, setMaxTicks: function () {
            var a =
                this.chart, b = a.maxTicks || {}, c = this.tickPositions, d = this._maxTicksKey = [this.xOrY, this.pos, this.len].join("-");
            if (!this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && this.options.alignTicks !== !1)b[d] = c.length;
            a.maxTicks = b
        }, adjustTickAmount: function () {
            var a = this._maxTicksKey, b = this.tickPositions, c = this.chart.maxTicks;
            if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) {
                var d = this.tickAmount, e = b.length;
                this.tickAmount = a = c[a];
                if (e < a) {
                    for (; b.length <
                               a;)b.push(ja(b[b.length - 1] + this.tickInterval));
                    this.transA *= (e - 1) / (a - 1);
                    this.max = b[b.length - 1]
                }
                if (s(d) && a !== d)this.isDirty = !0
            }
        }, setScale: function () {
            var a = this.stacks, b, c, d, e;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            o(this.series, function (a) {
                if (a.isDirtyData || a.isDirty || a.xAxis.isDirty)d = !0
            });
            if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis)for (b in a)for (c in a[b])a[b][c].total =
                    null;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                if (!this.isDirty)this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax
            } else if (!this.isXAxis) {
                if (this.oldStacks)a = this.stacks = this.oldStacks;
                for (b in a)for (c in a[b])a[b][c].cum = a[b][c].total
            }
            this.setMaxTicks()
        }, setExtremes: function (a, b, c, d, e) {
            var f = this, g = f.chart, c = n(c, !0), e = r(e, {min: a, max: b});
            B(f, "setExtremes", e, function () {
                f.userMin = a;
                f.userMax = b;
                f.isDirtyExtremes = !0;
                c && g.redraw(d)
            })
        }, zoom: function (a, b) {
            this.allowZoomOutside || (s(this.dataMin) && a <= this.dataMin && (a = v), s(this.dataMax) && b >= this.dataMax && (b = v));
            this.displayBtn = a !== v || b !== v;
            this.setExtremes(a, b, !1, v, {trigger: "zoom"});
            return!0
        }, setAxisSize: function () {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = b.offsetRight || 0, e = this.horiz, f, g;
            this.left = g = n(b.left, a.plotLeft + c);
            this.top = f = n(b.top, a.plotTop);
            this.width = c = n(b.width, a.plotWidth - c + d);
            this.height = b = n(b.height, a.plotHeight);
            this.bottom = a.chartHeight -
                b - f;
            this.right = a.chartWidth - c - g;
            this.len = u(e ? c : b, 0);
            this.pos = e ? g : f
        }, getExtremes: function () {
            var a = this.isLog;
            return{min: a ? ja(fa(this.min)) : this.min, max: a ? ja(fa(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax}
        }, getThreshold: function (a) {
            var b = this.isLog, c = b ? fa(this.min) : this.min, b = b ? fa(this.max) : this.max;
            c > a || a === null ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        }, addPlotBand: function (a) {
            this.addPlotBandOrLine(a, "plotBands")
        }, addPlotLine: function (a) {
            this.addPlotBandOrLine(a,
                "plotLines")
        }, addPlotBandOrLine: function (a, b) {
            var c = (new wb(this, a)).render(), d = this.userOptions;
            b && (d[b] = d[b] || [], d[b].push(a));
            this.plotLinesAndBands.push(c);
            return c
        }, autoLabelAlign: function (a) {
            a = (n(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        }, getOffset: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i = b.inverted ? [1, 0, 3, 2][h] : h, j, k = 0, l, m = 0, p = d.title, q = d.labels, la = 0, C = b.axisOffset, F = b.clipOffset, t = [-1,
                1, 1, -1][h], r, w = 1, x = n(q.maxStaggerLines, 5), D, H, za;
            a.hasData = j = a.hasVisibleSeries || s(a.min) && s(a.max) && !!e;
            a.showAxis = b = j || n(d.showEmpty, !0);
            a.staggerLines = a.horiz && q.staggerLines;
            if (!a.axisGroup)a.gridGroup = c.g("grid").attr({zIndex: d.gridZIndex || 1}).add(), a.axisGroup = c.g("axis").attr({zIndex: d.zIndex || 2}).add(), a.labelGroup = c.g("axis-labels").attr({zIndex: q.zIndex || 7}).add();
            if (j || a.isLinked) {
                a.labelAlign = n(q.align || a.autoLabelAlign(q.rotation));
                o(e, function (b) {
                    f[b] ? f[b].addLabel() : f[b] = new Na(a, b)
                });
                if (a.horiz && !a.staggerLines && x && !q.rotation) {
                    for (; w < x;) {
                        r = [];
                        j = !1;
                        for (q = 0; q < e.length; q++)D = e[q], H = (H = f[D].label && f[D].label.bBox) ? H.width : 0, za = q % w, H && (D = a.translate(D), r[za] !== v && D < r[za] && (j = !0), r[za] = D + H);
                        if (j)w++; else break
                    }
                    if (w > 1)a.staggerLines = w
                }
                o(e, function (b) {
                    if (h === 0 || h === 2 || {1: "left", 3: "right"}[h] === a.labelAlign)la = u(f[b].getLabelSize(), la)
                });
                if (a.staggerLines)la *= a.staggerLines, a.labelOffset = la
            } else for (r in f)f[r].destroy(), delete f[r];
            if (p && p.text && p.enabled !== !1) {
                if (!a.axisTitle)a.axisTitle =
                    c.text(p.text, 0, 0, p.useHTML).attr({zIndex: 7, rotation: p.rotation || 0, align: p.textAlign || {low: "left", middle: "center", high: "right"}[p.align]}).css(p.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (b)k = a.axisTitle.getBBox()[g ? "height" : "width"], m = n(p.margin, g ? 5 : 10), l = p.offset;
                a.axisTitle[b ? "show" : "hide"]()
            }
            a.offset = t * n(d.offset, C[h]);
            a.axisTitleMargin = n(l, la + m + (h !== 2 && la && t * d.labels[g ? "y" : "x"]));
            C[h] = u(C[h], a.axisTitleMargin + k + t * a.offset);
            F[i] = u(F[i], d.lineWidth)
        }, getLinePath: function (a) {
            var b = this.chart,
                c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d;
            this.lineTop = d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c || (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        }, getTitlePosition: function () {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, i = A(e.style.fontSize || 12), d = {low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0)}[e.align], b = (a ? c + this.height :
                b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? i : 0);
            return{x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0), y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)}
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.isLinked, g = a.tickPositions, h = a.axisTitle, i = a.stacks, j = a.ticks, k = a.minorTicks, l = a.alternateBands, m = d.stackLabels, p = d.alternateGridColor, q = a.tickmarkOffset, n = d.lineWidth, C, F = b.hasRendered && s(a.oldMin) && !isNaN(a.oldMin);
            C = a.hasData;
            var u = a.showAxis, t, r;
            o([j, k, l], function (a) {
                for (var b in a)a[b].isActive = !1
            });
            if (C || f)if (a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function (b) {
                k[b] || (k[b] = new Na(a, b, "minor"));
                F && k[b].isNew && k[b].render(null, !0);
                k[b].render(null, !1, 1)
            }), g.length && (o(g.slice(1).concat([g[0]]), function (b, c) {
                c = c === g.length - 1 ? 0 : c + 1;
                if (!f || b >= a.min && b <= a.max)j[b] || (j[b] = new Na(a, b)), F && j[b].isNew && j[b].render(c, !0), j[b].render(c, !1, 1)
            }), q && a.min === 0 && (j[-1] || (j[-1] = new Na(a, -1, null, !0)), j[-1].render(-1))), p && o(g, function (b, c) {
                if (c % 2 === 0 && b < a.max)l[b] || (l[b] = new wb(a)),
                    t = b + q, r = g[c + 1] !== v ? g[c + 1] + q : a.max, l[b].options = {from: e ? fa(t) : t, to: e ? fa(r) : r, color: p}, l[b].render(), l[b].isActive = !0
            }), !a._addedPlotLB)o((d.plotLines || []).concat(d.plotBands || []), function (b) {
                a.addPlotBandOrLine(b)
            }), a._addedPlotLB = !0;
            o([j, k, l], function (a) {
                var c, d, e = [], f = Fa ? Fa.duration || 500 : 0, g = function () {
                    for (d = e.length; d--;)a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                };
                for (c in a)if (!a[c].isActive)a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
                a === l || !b.hasRendered || !f ? g() : f && setTimeout(g,
                    f)
            });
            if (n)C = a.getLinePath(n), a.axisLine ? a.axisLine.animate({d: C}) : a.axisLine = c.path(C).attr({stroke: d.lineColor, "stroke-width": n, zIndex: 7}).add(a.axisGroup), a.axisLine[u ? "show" : "hide"]();
            if (h && u)h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1;
            if (m && m.enabled) {
                var w, D, d = a.stackTotalGroup;
                if (!d)a.stackTotalGroup = d = c.g("stack-labels").attr({visibility: "visible", zIndex: 6}).add();
                d.translate(b.plotLeft, b.plotTop);
                for (w in i)for (D in c = i[w], c)c[D].render(d)
            }
            a.isDirty = !1
        }, removePlotBandOrLine: function (a) {
            for (var b =
                this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;)b[e].id === a && b[e].destroy();
            o([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
                for (e = b.length; e--;)b[e].id === a && ga(b, b[e])
            })
        }, setTitle: function (a, b) {
            this.update({title: a}, b)
        }, redraw: function () {
            var a = this.chart.pointer;
            a.reset && a.reset(!0);
            this.render();
            o(this.plotLinesAndBands, function (a) {
                a.render()
            });
            o(this.series, function (a) {
                a.isDirty = !0
            })
        }, buildStacks: function () {
            if (!this.isXAxis) {
                var a = this.series,
                    b = a.length - 1;
                o(a, function (a, d) {
                    a.setStackedPoints(d === b)
                })
            }
        }, setCategories: function (a, b) {
            this.update({categories: a}, b)
        }, destroy: function (a) {
            var b = this, c = b.stacks, d;
            a || ba(b);
            for (d in c)La(c[d]), c[d] = null;
            o([b.ticks, b.minorTicks, b.alternateBands, b.plotLinesAndBands], function (a) {
                La(a)
            });
            o(["stackTotalGroup", "axisLine", "axisGroup", "gridGroup", "labelGroup", "axisTitle"], function (a) {
                b[a] && (b[a] = b[a].destroy())
            })
        }};
        xb.prototype = {init: function (a, b) {
            var c = b.borderWidth, d = b.style, e = A(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {x: 0, y: 0};
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape, null, null, b.useHTML, null, "tooltip").attr({padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8}).css(d).css({padding: 0}).hide().add();
            $ || this.label.shadow(b.shadow);
            this.shared = b.shared
        }, destroy: function () {
            o(this.crosshairs, function (a) {
                a && a.destroy()
            });
            if (this.label)this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        }, move: function (a, b, c, d) {
            var e = this, f = e.now, g = e.options.animation !== !1 && !e.isHidden;
            r(f, {x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: g ? (2 * f.anchorX + c) / 3 : c, anchorY: g ? (f.anchorY + d) / 2 : d});
            e.label.attr(f);
            if (g && (P(a - f.x) > 1 || P(b - f.y) > 1))clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                e && e.move(a, b, c, d)
            }, 32)
        }, hide: function () {
            var a = this, b;
            clearTimeout(this.hideTimer);
            if (!this.isHidden)b = this.chart.hoverPoints, this.hideTimer = setTimeout(function () {
                a.label.fadeOut();
                a.isHidden = !0
            }, n(this.options.hideDelay,
                500)), b && o(b, function (a) {
                a.setState()
            }), this.chart.hoverPoints = null
        }, hideCrosshairs: function () {
            o(this.crosshairs, function (a) {
                a && a.hide()
            })
        }, getAnchor: function (a, b) {
            var c, d = this.chart, e = d.inverted, f = d.plotTop, g = 0, h = 0, i, a = ia(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === v && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (o(a, function (a) {
                i = a.series.yAxis;
                g += a.plotX;
                h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && i ? i.top - f : 0)
            }), g /= a.length, h /= a.length, c = [e ? d.plotWidth -
                h : g, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - g : h]);
            return Pa(c, t)
        }, getPosition: function (a, b, c) {
            var d = this.chart, e = d.plotLeft, f = d.plotTop, g = d.plotWidth, h = d.plotHeight, i = n(this.options.distance, 12), j = c.plotX, c = c.plotY, d = j + e + (d.inverted ? i : -a - i), k = c - b + f + 15, l;
            d < 7 && (d = e + u(j, 0) + i);
            d + a > e + g && (d -= d + a - (e + g), k = c - b + f - i, l = !0);
            k < f + 5 && (k = f + 5, l && c >= k && c <= k + b && (k = c + f + i));
            k + b > f + h && (k = u(f, f + h - b - i));
            return{x: d, y: k}
        }, defaultFormatter: function (a) {
            var b = this.points || ia(this), c = b[0].series, d;
            d = [c.tooltipHeaderFormatter(b[0])];
            o(b, function (a) {
                c = a.series;
                d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat))
            });
            d.push(a.options.footerFormat || "");
            return d.join("")
        }, refresh: function (a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h, i = {}, j, k = [];
            j = e.formatter || this.defaultFormatter;
            var i = c.hoverPoints, l, m = e.crosshairs;
            h = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = ia(a)[0].series.tooltipOptions.followPointer;
            g = this.getAnchor(a, b);
            f = g[0];
            g = g[1];
            h && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, i && o(i, function (a) {
                a.setState()
            }), o(a, function (a) {
                a.setState("hover");
                k.push(a.getLabelConfig())
            }), i = {x: a[0].category, y: a[0].y}, i.points = k, a = a[0]) : i = a.getLabelConfig();
            j = j.call(i, this);
            i = a.series;
            h = h || !i.isCartesian || i.tooltipOutsidePlot || c.isInsidePlot(f, g);
            j === !1 || !h ? this.hide() : (this.isHidden && (Ya(d), d.attr("opacity", 1).show()), d.attr({text: j}), l = e.borderColor || a.color || i.color || "#606060", d.attr({stroke: l}), this.updatePosition({plotX: f, plotY: g}), this.isHidden = !1);
            if (m) {
                m = ia(m);
                for (d = m.length; d--;)if (i = a.series, e = i[d ? "yAxis" : "xAxis"], m[d] && e)if (h = d ? n(a.stackY, a.y) : a.x, e.isLog && (h = na(h)), i.modifyValue && (h = i.modifyValue(h)), e = e.getPlotLinePath(h, 1), this.crosshairs[d])this.crosshairs[d].attr({d: e, visibility: "visible"}); else {
                    h = {"stroke-width": m[d].width || 1, stroke: m[d].color || "#C0C0C0", zIndex: m[d].zIndex || 2};
                    if (m[d].dashStyle)h.dashstyle = m[d].dashStyle;
                    this.crosshairs[d] = c.renderer.path(e).attr(h).add()
                }
            }
            B(c, "tooltipRefresh", {text: j, x: f + c.plotLeft, y: g + c.plotTop,
                borderColor: l})
        }, updatePosition: function (a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(t(c.x), t(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }};
        yb.prototype = {init: function (a, b) {
            var c = $ ? "" : b.chart.zoomType, d = a.inverted, e;
            this.options = b;
            this.chart = a;
            this.zoomX = e = /x/.test(c);
            this.zoomY = c = /y/.test(c);
            this.zoomHor = e && !d || c && d;
            this.zoomVert = c && !d || e && d;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (b.tooltip.enabled)a.tooltip = new xb(a, b.tooltip);
            this.setDOMEvents()
        }, normalize: function (a) {
            var b, c, a = a || N.event;
            if (!a.target)a.target = a.srcElement;
            a = Vb(a);
            c = a.touches ? a.touches.item(0) : a;
            this.chartPosition = b = Yb(this.chart.container);
            return r(a, {chartX: t(n(c.pageX, c.clientX) - b.left), chartY: t(n(c.pageY, c.clientY) - b.top)})
        }, getCoordinates: function (a) {
            var b = {xAxis: [], yAxis: []};
            o(this.chart.axes, function (c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"])})
            });
            return b
        }, getIndex: function (a) {
            var b = this.chart;
            return b.inverted ?
                b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        }, runPointActions: function (a) {
            var b = this.chart, c = b.series, d = b.tooltip, e, f = b.hoverPoint, g = b.hoverSeries, h, i, j = b.chartWidth, k = this.getIndex(a);
            if (d && this.options.tooltip.shared && (!g || !g.noSharedTooltip)) {
                e = [];
                h = c.length;
                for (i = 0; i < h; i++)if (c[i].visible && c[i].options.enableMouseTracking !== !1 && !c[i].noSharedTooltip && c[i].tooltipPoints.length && (b = c[i].tooltipPoints[k], b.series))b._dist = P(k - b.clientX), j = J(j, b._dist), e.push(b);
                for (h = e.length; h--;)e[h]._dist >
                j && e.splice(h, 1);
                if (e.length && e[0].clientX !== this.hoverX)d.refresh(e, a), this.hoverX = e[0].clientX
            }
            if (g && g.tracker) {
                if ((b = g.tooltipPoints[k]) && b !== f)b.onMouseOver(a)
            } else d && d.followPointer && !d.isHidden && (a = d.getAnchor([
                {}
            ], a), d.updatePosition({plotX: a[0], plotY: a[1]}))
        }, reset: function (a) {
            var b = this.chart, c = b.hoverSeries, d = b.hoverPoint, e = b.tooltip, b = e && e.shared ? b.hoverPoints : d;
            (a = a && e && b) && ia(b)[0].plotX === v && (a = !1);
            if (a)e.refresh(b); else {
                if (d)d.onMouseOut();
                if (c)c.onMouseOut();
                e && (e.hide(), e.hideCrosshairs());
                this.hoverX = null
            }
        }, scaleGroups: function (a, b) {
            var c = this.chart, d;
            o(c.series, function (e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        }, pinchTranslateDirection: function (a, b, c, d, e, f, g) {
            var h = this.chart, i = a ? "x" : "y", j = a ? "X" : "Y", k = "chart" + j, l = a ? "width" : "height", m = h["plot" + (a ? "Left" : "Top")], p, q, n = 1, o = h.inverted, u = h.bounds[a ? "h" : "v"],
                t = b.length === 1, s = b[0][k], r = c[0][k], w = !t && b[1][k], v = !t && c[1][k], x, c = function () {
                    !t && P(s - w) > 20 && (n = P(r - v) / P(s - w));
                    q = (m - r) / n + s;
                    p = h["plot" + (a ? "Width" : "Height")] / n
                };
            c();
            b = q;
            b < u.min ? (b = u.min, x = !0) : b + p > u.max && (b = u.max - p, x = !0);
            x ? (r -= 0.8 * (r - g[i][0]), t || (v -= 0.8 * (v - g[i][1])), c()) : g[i] = [r, v];
            o || (f[i] = q - m, f[l] = p);
            f = o ? 1 / n : n;
            e[l] = p;
            e[i] = b;
            d[o ? a ? "scaleY" : "scaleX" : "scale" + j] = n;
            d["translate" + j] = f * m + (r - f * s)
        }, pinch: function (a) {
            var b = this, c = b.chart, d = b.pinchDown, e = c.tooltip && c.tooltip.options.followTouchMove, f = a.touches,
                g = f.length, h = b.lastValidTouch, i = b.zoomHor || b.pinchHor, j = b.zoomVert || b.pinchVert, k = i || j, l = b.selectionMarker, m = {}, p = {};
            a.type === "touchstart" && (e || k) && a.preventDefault();
            Pa(f, function (a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart")o(f, function (a, b) {
                d[b] = {chartX: a.chartX, chartY: a.chartY}
            }), h.x = [d[0].chartX, d[1] && d[1].chartX], h.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes, function (a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(a.dataMin), f = a.toPixels(a.dataMax),
                        g = J(e, f), e = u(e, f);
                    b.min = J(a.pos, g - d);
                    b.max = u(a.pos + a.len, e + d)
                }
            }); else if (d.length) {
                if (!l)b.selectionMarker = l = r({destroy: ya}, c.plotBox);
                i && b.pinchTranslateDirection(!0, d, f, m, l, p, h);
                j && b.pinchTranslateDirection(!1, d, f, m, l, p, h);
                b.hasPinched = k;
                b.scaleGroups(m, p);
                !k && e && g === 1 && this.runPointActions(b.normalize(a))
            }
        }, dragStart: function (a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            this.mouseDownY = a.chartY
        }, drag: function (a) {
            var b = this.chart, c = b.options.chart,
                d = a.chartX, a = a.chartY, e = this.zoomHor, f = this.zoomVert, g = b.plotLeft, h = b.plotTop, i = b.plotWidth, j = b.plotHeight, k, l = this.mouseDownX, m = this.mouseDownY;
            d < g ? d = g : d > g + i && (d = g + i);
            a < h ? a = h : a > h + j && (a = h + j);
            this.hasDragged = Math.sqrt(Math.pow(l - d, 2) + Math.pow(m - a, 2));
            if (this.hasDragged > 10) {
                k = b.isInsidePlot(l - g, m - h);
                if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && k && !this.selectionMarker)this.selectionMarker = b.renderer.rect(g, h, e ? 1 : i, f ? 1 : j, 0).attr({fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7}).add();
                this.selectionMarker && e && (e = d - l, this.selectionMarker.attr({width: P(e), x: (e > 0 ? 0 : e) + l}));
                this.selectionMarker && f && (e = a - m, this.selectionMarker.attr({height: P(e), y: (e > 0 ? 0 : e) + m}));
                k && !this.selectionMarker && c.panning && b.pan(d)
            }
        }, drop: function (a) {
            var b = this.chart, c = this.hasPinched;
            if (this.selectionMarker) {
                var d = {xAxis: [], yAxis: [], originalEvent: a.originalEvent || a}, e = this.selectionMarker, f = e.x, g = e.y, h;
                if (this.hasDragged || c)o(b.axes, function (a) {
                    if (a.zoomEnabled) {
                        var b = a.horiz, c = a.toValue(b ? f : g), b = a.toValue(b ?
                            f + e.width : g + e.height);
                        !isNaN(c) && !isNaN(b) && (d[a.xOrY + "Axis"].push({axis: a, min: J(c, b), max: u(c, b)}), h = !0)
                    }
                }), h && B(b, "selection", d, function (a) {
                    b.zoom(r(a, c ? {animation: !1} : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                c && this.scaleGroups()
            }
            if (b)M(b.container, {cursor: b._cursor}), b.cancelClick = this.hasDragged > 10, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        }, onContainerMouseDown: function (a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
            onDocumentMouseUp: function (a) {
                this.drop(a)
            }, onDocumentMouseMove: function (a) {
                var b = this.chart, c = this.chartPosition, d = b.hoverSeries, a = Vb(a);
                c && d && d.isCartesian && !b.isInsidePlot(a.pageX - c.left - b.plotLeft, a.pageY - c.top - b.plotTop) && this.reset()
            }, onContainerMouseLeave: function () {
                this.reset();
                this.chartPosition = null
            }, onContainerMouseMove: function (a) {
                var b = this.chart, a = this.normalize(a);
                a.returnValue = !1;
                b.mouseIsDown === "mousedown" && this.drag(a);
                b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && !b.openMenu &&
                this.runPointActions(a)
            }, inClass: function (a, b) {
                for (var c; a;) {
                    if (c = x(a, "class"))if (c.indexOf(b) !== -1)return!0; else if (c.indexOf("highcharts-container") !== -1)return!1;
                    a = a.parentNode
                }
            }, onTrackerMouseOut: function (a) {
                var b = this.chart.hoverSeries;
                if (b && !b.options.stickyTracking && !this.inClass(a.toElement || a.relatedTarget, "highcharts-tooltip"))b.onMouseOut()
            }, onContainerClick: function (a) {
                var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop, f = b.inverted, g, h, i, a = this.normalize(a);
                a.cancelBubble = !0;
                if (!b.cancelClick)c &&
                this.inClass(a.target, "highcharts-tracker") ? (g = this.chartPosition, h = c.plotX, i = c.plotY, r(c, {pageX: g.left + d + (f ? b.plotWidth - i : h), pageY: g.top + e + (f ? b.plotHeight - h : i)}), B(c.series, "click", r(a, {point: c})), b.hoverPoint && c.firePointEvent("click", a)) : (r(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && B(b, "click", a))
            }, onContainerTouchStart: function (a) {
                var b = this.chart;
                a.touches.length === 1 ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) :
                    this.reset()) : a.touches.length === 2 && this.pinch(a)
            }, onContainerTouchMove: function (a) {
                (a.touches.length === 1 || a.touches.length === 2) && this.pinch(a)
            }, onDocumentTouchEnd: function (a) {
                this.drop(a)
            }, setDOMEvents: function () {
                var a = this, b = a.chart.container, c;
                this._events = c = [
                    [b, "onmousedown", "onContainerMouseDown"],
                    [b, "onmousemove", "onContainerMouseMove"],
                    [b, "onclick", "onContainerClick"],
                    [b, "mouseleave", "onContainerMouseLeave"],
                    [y, "mousemove", "onDocumentMouseMove"],
                    [y, "mouseup", "onDocumentMouseUp"]
                ];
                jb && c.push([b,
                    "ontouchstart", "onContainerTouchStart"], [b, "ontouchmove", "onContainerTouchMove"], [y, "touchend", "onDocumentTouchEnd"]);
                o(c, function (b) {
                    a["_" + b[2]] = function (c) {
                        a[b[2]](c)
                    };
                    b[1].indexOf("on") === 0 ? b[0][b[1]] = a["_" + b[2]] : K(b[0], b[1], a["_" + b[2]])
                })
            }, destroy: function () {
                var a = this;
                o(a._events, function (b) {
                    b[1].indexOf("on") === 0 ? b[0][b[1]] = null : ba(b[0], b[1], a["_" + b[2]])
                });
                delete a._events;
                clearInterval(a.tooltipTimeout)
            }};
        zb.prototype = {init: function (a, b) {
            var c = this, d = b.itemStyle, e = n(b.padding, 8), f = b.itemMarginTop ||
                0;
            this.options = b;
            if (b.enabled)c.baseline = A(d.fontSize) + 3 + f, c.itemStyle = d, c.itemHiddenStyle = w(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.render(), K(c.chart, "endResize", function () {
                c.positionCheckboxes()
            })
        }, colorizeItem: function (a, b) {
            var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.color : g, g = a.options && a.options.marker,
                i = {stroke: h, fill: h}, j;
            d && d.css({fill: c, color: c});
            e && e.attr({stroke: h});
            if (f) {
                if (g && f.isMarker)for (j in g = a.convertAttribs(g), g)d = g[j], d !== v && (i[j] = d);
                f.attr(i)
            }
        }, positionItem: function (a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f)f.x = e, f.y = d
        }, destroyItem: function (a) {
            var b = a.checkbox;
            o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Va(a.checkbox)
        }, destroy: function () {
            var a = this.group, b = this.box;
            if (b)this.box = b.destroy();
            if (a)this.group = a.destroy()
        }, positionCheckboxes: function (a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight;
            if (b)c = b.translateY, o(this.allItems, function (e) {
                var f = e.checkbox, g;
                f && (g = c + f.y + (a || 0) + 3, M(f, {left: b.translateX + e.legendItemWidth + f.x - 20 + "px", top: g + "px", display: g > c - 6 && g < c + d - 6 ? "" : S}))
            })
        }, renderTitle: function () {
            var a = this.padding, b = this.options.title, c = 0;
            if (b.text) {
                if (!this.title)this.title =
                    this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({translateY: c})
            }
            this.titleHeight = c
        }, renderItem: function (a) {
            var C;
            var b = this, c = b.chart, d = c.renderer, e = b.options, f = e.layout === "horizontal", g = e.symbolWidth, h = e.symbolPadding, i = b.itemStyle, j = b.itemHiddenStyle, k = b.padding, l = f ? n(e.itemDistance, 8) : 0, m = !e.rtl, p = e.width, q = e.itemMarginBottom || 0, o = b.itemMarginTop,
                t = b.initialItemX, s = a.legendItem, r = a.series || a, v = r.options, x = v.showCheckbox, A = e.useHTML;
            if (!s && (a.legendGroup = d.g("legend-item").attr({zIndex: 1}).add(b.scrollGroup), r.drawLegendSymbol(b, a), a.legendItem = s = d.text(e.labelFormat ? Da(e.labelFormat, a) : e.labelFormatter.call(a), m ? g + h : -h, b.baseline, A).css(w(a.visible ? i : j)).attr({align: m ? "left" : "right", zIndex: 2}).add(a.legendGroup), (A ? s : a.legendGroup).on("mouseover", function () {
                a.setState("hover");
                s.css(b.options.itemHoverStyle)
            }).on("mouseout", function () {
                s.css(a.visible ?
                    i : j);
                a.setState()
            }).on("click", function (b) {
                var c = function () {
                    a.setVisible()
                }, b = {browserEvent: b};
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : B(a, "legendItemClick", b, c)
            }), b.colorizeItem(a, a.visible), v && x))a.checkbox = U("input", {type: "checkbox", checked: a.selected, defaultChecked: a.selected}, e.itemCheckboxStyle, c.container), K(a.checkbox, "click", function (b) {
                B(a, "checkboxClick", {checked: b.target.checked}, function () {
                    a.select()
                })
            });
            d = s.getBBox();
            C = a.legendItemWidth = e.itemWidth || g + h + d.width + l + (x ?
                20 : 0), e = C;
            b.itemHeight = g = d.height;
            if (f && b.itemX - t + e > (p || c.chartWidth - 2 * k - t))b.itemX = t, b.itemY += o + b.lastLineHeight + q, b.lastLineHeight = 0;
            b.maxItemWidth = u(b.maxItemWidth, e);
            b.lastItemY = o + b.itemY + q;
            b.lastLineHeight = u(g, b.lastLineHeight);
            a._legendItemPos = [b.itemX, b.itemY];
            f ? b.itemX += e : (b.itemY += o + g + q, b.lastLineHeight = g);
            b.offsetWidth = p || u((f ? b.itemX - t - l : e) + k, b.offsetWidth)
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, i = a.box, j = a.options, k = a.padding, l = j.borderWidth, m = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d)a.group = d = c.g("legend").attr({zIndex: 7}).add(), a.contentGroup = c.g().attr({zIndex: 1}).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = [];
            o(b.series, function (a) {
                var b = a.options;
                b.showInLegend && !s(b.linkedTo) && (e = e.concat(a.legendItems || (b.legendType === "point" ? a.data : a)))
            });
            Nb(e, function (a, b) {
                return(a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            j.reversed && e.reverse();
            a.allItems =
                e;
            a.display = f = !!e.length;
            o(e, function (b) {
                a.renderItem(b)
            });
            g = j.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            if (l || m) {
                g += k;
                h += k;
                if (i) {
                    if (g > 0 && h > 0)i[i.isNew ? "attr" : "animate"](i.crisp(null, null, null, g, h)), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({stroke: j.borderColor, "stroke-width": l || 0, fill: m || S}).add(d).shadow(j.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            o(e, function (b) {
                a.positionItem(b)
            });
            f && d.align(r({width: g,
                height: h}, j), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding, g = e.maxHeight, h = this.clipRect, i = e.navigation, j = n(i.animation, !0), k = i.arrowSize || 12, l = this.nav;
            e.layout === "horizontal" && (f /= 2);
            g && (f = J(f, g));
            if (a > f && !e.useHTML) {
                this.clipHeight = c = f - 20 - this.titleHeight;
                this.pageCount = ka(a / c);
                this.currentPage = n(this.currentPage, 1);
                this.fullHeight = a;
                if (!h)h = b.clipRect = d.clipRect(0, 0, 9999, 0), b.contentGroup.clip(h);
                h.attr({height: c});
                if (!l)this.nav = l = d.g().attr({zIndex: 1}).add(this.group), this.up = d.symbol("triangle", 0, 0, k, k).on("click", function () {
                    b.scroll(-1, j)
                }).add(l), this.pager = d.text("", 15, 10).css(i.style).add(l), this.down = d.symbol("triangle-down", 0, 0, k, k).on("click", function () {
                    b.scroll(1, j)
                }).add(l);
                b.scroll(0);
                a = f
            } else if (l)h.attr({height: c.chartHeight}), l.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0;
            return a
        }, scroll: function (a, b) {
            var c = this.pageCount, d = this.currentPage + a, e = this.clipHeight, f = this.options.navigation, g = f.activeColor, h = f.inactiveColor, f = this.pager, i = this.padding;
            d > c && (d = c);
            if (d > 0)b !== v && Ma(b, this.chart), this.nav.attr({translateX: i, translateY: e + 7 + this.titleHeight, visibility: "visible"}), this.up.attr({fill: d === 1 ? h : g}).css({cursor: d === 1 ? "default" : "pointer"}), f.attr({text: d + "/" + this.pageCount}), this.down.attr({x: 18 + this.pager.getBBox().width, fill: d === c ? h : g}).css({cursor: d === c ? "default" : "pointer"}), e = -J(e * (d - 1),
                    this.fullHeight - e + i) + 1, this.scrollGroup.animate({translateY: e}), f.attr({text: d + "/" + c}), this.currentPage = d, this.positionCheckboxes(e)
        }};
        Ab.prototype = {init: function (a, b) {
            var c, d = a.series;
            a.series = null;
            c = w(O, a);
            c.series = a.series = d;
            var d = c.chart, e = d.margin, e = V(e) ? e : [e, e, e, e];
            this.optionsMarginTop = n(d.marginTop, e[0]);
            this.optionsMarginRight = n(d.marginRight, e[1]);
            this.optionsMarginBottom = n(d.marginBottom, e[2]);
            this.optionsMarginLeft = n(d.marginLeft, e[3]);
            e = d.events;
            this.bounds = {h: {}, v: {}};
            this.callback =
                b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this, g;
            f.index = Ha.length;
            Ha.push(f);
            d.reflow !== !1 && K(f, "load", function () {
                f.initReflow()
            });
            if (e)for (g in e)K(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = $ ? !1 : n(d.animation, !0);
            f.pointCount = 0;
            f.counters = new Mb;
            f.firstRender()
        }, initSeries: function (a) {
            var b = this.options.chart;
            (b = aa[a.type || b.type || b.defaultSeriesType]) || va(17, !0);
            b = new b;
            b.init(this, a);
            return b
        }, addSeries: function (a, b, c) {
            var d, e = this;
            a && (b = n(b, !0), B(e, "addSeries", {options: a}, function () {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                b && e.redraw(c)
            }));
            return d
        }, addAxis: function (a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options;
            new fb(this, w(a, {index: this[e].length, isX: b}));
            f[e] = ia(f[e] || {});
            f[e].push(a);
            n(c, !0) && this.redraw(d)
        }, isInsidePlot: function (a, b, c) {
            var d = c ? b : a, a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        }, adjustTickAmounts: function () {
            this.options.chart.alignTicks !== !1 && o(this.axes, function (a) {
                a.adjustTickAmount()
            });
            this.maxTicks = null
        }, redraw: function (a) {
            var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, i = this.isDirtyBox, j = c.length, k = j, l = this.renderer, m = l.isHidden(), p = [];
            Ma(a, this);
            m && this.cloneRenderTo();
            for (this.layOutTitles(); k--;)if (a = c[k], a.options.stacking && (g = !0, a.isDirty)) {
                h = !0;
                break
            }
            if (h)for (k = j; k--;)if (a = c[k], a.options.stacking)a.isDirty = !0;
            o(c, function (a) {
                a.isDirty && a.options.legendType === "point" && (f = !0)
            });
            if (f && e.options.enabled)e.render(), this.isDirtyLegend = !1;
            g &&
            this.getStacks();
            if (this.hasCartesianSeries)this.isResizing ? o(b, function (a) {
                a.buildStacks()
            }) : (this.maxTicks = null, o(b, function (a) {
                a.setScale()
            })), this.adjustTickAmounts(), this.getMargins(), o(b, function (a) {
                if (a.isDirtyExtremes)a.isDirtyExtremes = !1, p.push(function () {
                    B(a, "afterSetExtremes", a.getExtremes())
                });
                if (a.isDirty || i || g)a.redraw(), i = !0
            });
            i && this.drawChartBox();
            o(c, function (a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset && d.reset(!0);
            l.draw();
            B(this, "redraw");
            m && this.cloneRenderTo(!0);
            o(p, function (a) {
                a.call()
            })
        }, showLoading: function (a) {
            var b = this.options, c = this.loadingDiv, d = b.loading;
            if (!c)this.loadingDiv = c = U(Ea, {className: "highcharts-loading"}, r(d.style, {zIndex: 10, display: S}), this.container), this.loadingSpan = U("span", null, d.labelStyle, c);
            this.loadingSpan.innerHTML = a || b.lang.loading;
            if (!this.loadingShown)M(c, {opacity: 0, display: "", left: this.plotLeft + "px", top: this.plotTop + "px", width: this.plotWidth + "px", height: this.plotHeight + "px"}), Db(c, {opacity: d.style.opacity}, {duration: d.showDuration ||
                0}), this.loadingShown = !0
        }, hideLoading: function () {
            var a = this.options, b = this.loadingDiv;
            b && Db(b, {opacity: 0}, {duration: a.loading.hideDuration || 100, complete: function () {
                M(b, {display: S})
            }});
            this.loadingShown = !1
        }, get: function (a) {
            var b = this.axes, c = this.series, d, e;
            for (d = 0; d < b.length; d++)if (b[d].options.id === a)return b[d];
            for (d = 0; d < c.length; d++)if (c[d].options.id === a)return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)if (e[b].id === a)return e[b]
            }
            return null
        }, getAxes: function () {
            var a =
                this, b = this.options, c = b.xAxis = ia(b.xAxis || {}), b = b.yAxis = ia(b.yAxis || {});
            o(c, function (a, b) {
                a.index = b;
                a.isX = !0
            });
            o(b, function (a, b) {
                a.index = b
            });
            c = c.concat(b);
            o(c, function (b) {
                new fb(a, b)
            });
            a.adjustTickAmounts()
        }, getSelectedPoints: function () {
            var a = [];
            o(this.series, function (b) {
                a = a.concat(vb(b.points || [], function (a) {
                    return a.selected
                }))
            });
            return a
        }, getSelectedSeries: function () {
            return vb(this.series, function (a) {
                return a.selected
            })
        }, getStacks: function () {
            var a = this;
            o(a.yAxis, function (a) {
                if (a.stacks && a.hasVisibleSeries)a.oldStacks =
                    a.stacks
            });
            o(a.series, function (b) {
                if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1))b.stackKey = b.type + n(b.options.stack, "")
            })
        }, showResetZoom: function () {
            var a = this, b = O.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
                a.zoomOut()
            }, d, e && e.hover).attr({align: c.position.align, title: b.resetZoomTitle}).add().align(c.position, !1, f)
        }, zoomOut: function () {
            var a =
                this;
            B(a, "selection", {resetSelection: !0}, function () {
                a.zoom()
            })
        }, zoom: function (a) {
            var b, c = this.pointer, d = !1, e;
            !a || a.resetSelection ? o(this.axes, function (a) {
                b = a.zoom()
            }) : o(a.xAxis.concat(a.yAxis), function (a) {
                var e = a.axis, h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"])b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e)this.showResetZoom(); else if (!d && V(e))this.resetZoomButton = e.destroy();
            b && this.redraw(n(this.options.chart.animation, a && a.animation, this.pointCount <
                100))
        }, pan: function (a) {
            var b = this.xAxis[0], c = this.mouseDownX, d = b.pointRange / 2, e = b.getExtremes(), f = b.translate(c - a, !0) + d, c = b.translate(c + this.plotWidth - a, !0) - d;
            (d = this.hoverPoints) && o(d, function (a) {
                a.setState()
            });
            b.series.length && f > J(e.dataMin, e.min) && c < u(e.dataMax, e.max) && b.setExtremes(f, c, !0, !1, {trigger: "pan"});
            this.mouseDownX = a;
            M(this.container, {cursor: "move"})
        }, setTitle: function (a, b) {
            var f;
            var c = this, d = c.options, e;
            e = d.title = w(d.title, a);
            f = d.subtitle = w(d.subtitle, b), d = f;
            o([
                ["title", a, e],
                ["subtitle",
                    b, d]
            ], function (a) {
                var b = a[0], d = c[b], e = a[1], a = a[2];
                d && e && (c[b] = d = d.destroy());
                a && a.text && !d && (c[b] = c.renderer.text(a.text, 0, 0, a.useHTML).attr({align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4}).css(a.style).add())
            });
            c.layOutTitles()
        }, layOutTitles: function () {
            var a = 0, b = this.title, c = this.subtitle, d = this.options, e = d.title, d = d.subtitle, f = this.spacingBox.width - 44;
            if (b && (b.css({width: (e.width || f) + "px"}).align(r({y: 15}, e), !1, "spacingBox"), !e.floating && !e.verticalAlign))a = b.getBBox().height, a >= 18 &&
                a <= 25 && (a = 15);
            c && (c.css({width: (d.width || f) + "px"}).align(r({y: a + e.margin}, d), !1, "spacingBox"), !d.floating && !d.verticalAlign && (a = ka(a + c.getBBox().height)));
            this.titleOffset = a
        }, getChartSize: function () {
            var a = this.options.chart, b = this.renderToClone || this.renderTo;
            this.containerWidth = kb(b, "width");
            this.containerHeight = kb(b, "height");
            this.chartWidth = u(0, a.width || this.containerWidth || 600);
            this.chartHeight = u(0, n(a.height, this.containerHeight > 19 ? this.containerHeight : 400))
        }, cloneRenderTo: function (a) {
            var b =
                this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), Va(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), M(b, {position: "absolute", top: "-9999px", display: "block"}), y.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var a, b = this.options.chart, c, d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + Bb++;
            if (ea(a))this.renderTo = a = y.getElementById(a);
            a || va(13, !0);
            c = A(x(a, "data-highcharts-chart"));
            !isNaN(c) && Ha[c] && Ha[c].destroy();
            x(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = U(Ea, {className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e}, r({position: "relative", overflow: "hidden", width: c + "px", height: d + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"}, b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer =
                b.forExport ? new Ia(a, c, d, !0) : new Xa(a, c, d);
            $ && this.renderer.create(this, a, c, d)
        }, getMargins: function () {
            var a = this.options.chart, b = a.spacingTop, c = a.spacingRight, d = a.spacingBottom, a = a.spacingLeft, e, f = this.legend, g = this.optionsMarginTop, h = this.optionsMarginLeft, i = this.optionsMarginRight, j = this.optionsMarginBottom, k = this.options.legend, l = n(k.margin, 10), m = k.x, p = k.y, q = k.align, t = k.verticalAlign, r = this.titleOffset;
            this.resetMargins();
            e = this.axisOffset;
            if (r && !s(g))this.plotTop = u(this.plotTop, r + this.options.title.margin +
                b);
            if (f.display && !k.floating)if (q === "right") {
                if (!s(i))this.marginRight = u(this.marginRight, f.legendWidth - m + l + c)
            } else if (q === "left") {
                if (!s(h))this.plotLeft = u(this.plotLeft, f.legendWidth + m + l + a)
            } else if (t === "top") {
                if (!s(g))this.plotTop = u(this.plotTop, f.legendHeight + p + l + b)
            } else if (t === "bottom" && !s(j))this.marginBottom = u(this.marginBottom, f.legendHeight - p + l + d);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries &&
            o(this.axes, function (a) {
                a.getOffset()
            });
            s(h) || (this.plotLeft += e[3]);
            s(g) || (this.plotTop += e[0]);
            s(j) || (this.marginBottom += e[2]);
            s(i) || (this.marginRight += e[1]);
            this.setChartSize()
        }, initReflow: function () {
            function a(a) {
                var g = c.width || kb(d, "width"), h = c.height || kb(d, "height"), a = a ? a.target : N;
                if (!b.hasUserSize && g && h && (a === N || a === y)) {
                    if (g !== b.containerWidth || h !== b.containerHeight)clearTimeout(e), b.reflowTimeout = e = setTimeout(function () {
                        if (b.container)b.setSize(g, h, !1), b.hasUserSize = null
                    }, 100);
                    b.containerWidth =
                        g;
                    b.containerHeight = h
                }
            }

            var b = this, c = b.options.chart, d = b.renderTo, e;
            K(N, "resize", a);
            K(b, "destroy", function () {
                ba(N, "resize", a)
            })
        }, setSize: function (a, b, c) {
            var d = this, e, f, g;
            d.isResizing += 1;
            g = function () {
                d && B(d, "endResize", null, function () {
                    d.isResizing -= 1
                })
            };
            Ma(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (s(a))d.chartWidth = e = u(0, t(a)), d.hasUserSize = !!e;
            if (s(b))d.chartHeight = f = u(0, t(b));
            M(d.container, {width: e + "px", height: f + "px"});
            d.setChartSize(!0);
            d.renderer.setSize(e, f, c);
            d.maxTicks =
                null;
            o(d.axes, function (a) {
                a.isDirty = !0;
                a.setScale()
            });
            o(d.series, function (a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            B(d, "resize");
            Fa === !1 ? g() : setTimeout(g, Fa && Fa.duration || 500)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = f.spacingTop, h = f.spacingRight, i = f.spacingBottom, j = f.spacingLeft, k = this.clipOffset, l, m, p, n;
            this.plotLeft = l = t(this.plotLeft);
            this.plotTop = m = t(this.plotTop);
            this.plotWidth = p = u(0, t(d - l - this.marginRight));
            this.plotHeight = n = u(0, t(e - m - this.marginBottom));
            this.plotSizeX = b ? n : p;
            this.plotSizeY = b ? p : n;
            this.plotBorderWidth = b = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {x: j, y: g, width: d - j - h, height: e - g - i};
            this.plotBox = c.plotBox = {x: l, y: m, width: p, height: n};
            c = ka(u(b, k[3]) / 2);
            d = ka(u(b, k[0]) / 2);
            this.clipBox = {x: c, y: d, width: T(this.plotSizeX - u(b, k[1]) / 2 - c), height: T(this.plotSizeY - u(b, k[2]) / 2 - d)};
            a || o(this.axes, function (a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        }, resetMargins: function () {
            var a =
                this.options.chart, b = a.spacingRight, c = a.spacingBottom, d = a.spacingLeft;
            this.plotTop = n(this.optionsMarginTop, a.spacingTop);
            this.marginRight = n(this.optionsMarginRight, b);
            this.marginBottom = n(this.optionsMarginBottom, c);
            this.plotLeft = n(this.optionsMarginLeft, d);
            this.axisOffset = [0, 0, 0, 0];
            this.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth ||
                0, j = a.backgroundColor, k = a.plotBackgroundColor, l = a.plotBackgroundImage, m = a.plotBorderWidth || 0, p, n = this.plotLeft, o = this.plotTop, t = this.plotWidth, s = this.plotHeight, u = this.plotBox, r = this.clipRect, w = this.clipBox;
            p = i + (a.shadow ? 8 : 0);
            if (i || j)if (e)e.animate(e.crisp(null, null, null, c - p, d - p)); else {
                e = {fill: j || S};
                if (i)e.stroke = a.borderColor, e["stroke-width"] = i;
                this.chartBackground = b.rect(p / 2, p / 2, c - p, d - p, a.borderRadius, i).attr(e).add().shadow(a.shadow)
            }
            if (k)f ? f.animate(u) : this.plotBackground = b.rect(n, o, t, s, 0).attr({fill: k}).add().shadow(a.plotShadow);
            if (l)h ? h.animate(u) : this.plotBGImage = b.image(l, n, o, t, s).add();
            r ? r.animate({width: w.width, height: w.height}) : this.clipRect = b.clipRect(w);
            if (m)g ? g.animate(g.crisp(null, n, o, t, s)) : this.plotBorder = b.rect(n, o, t, s, 0, m).attr({stroke: a.plotBorderColor, "stroke-width": m, zIndex: 1}).add();
            this.isDirtyBox = !1
        }, propFromSeries: function () {
            var a = this, b = a.options.chart, c, d = a.options.series, e, f;
            o(["inverted", "angular", "polar"], function (g) {
                c = aa[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f &&
                    e--;)(c = aa[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        }, render: function () {
            var a = this, b = a.axes, c = a.renderer, d = a.options, e = d.labels, f = d.credits, g;
            a.setTitle();
            a.legend = new zb(a, d.legend);
            a.getStacks();
            o(b, function (a) {
                a.setScale()
            });
            a.getMargins();
            a.maxTicks = null;
            o(b, function (a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            });
            a.adjustTickAmounts();
            a.getMargins();
            a.drawChartBox();
            a.hasCartesianSeries && o(b, function (a) {
                a.render()
            });
            if (!a.seriesGroup)a.seriesGroup = c.g("series-group").attr({zIndex: 3}).add();
            o(a.series,
                function (a) {
                    a.translate();
                    a.setTooltipPoints();
                    a.render()
                });
            e.items && o(e.items, function (b) {
                var d = r(e.style, b.style), f = A(d.left) + a.plotLeft, g = A(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                c.text(b.html, f, g).attr({zIndex: 2}).css(d).add()
            });
            if (f.enabled && !a.credits)g = f.href, a.credits = c.text(f.text, 0, 0).on("click", function () {
                if (g)location.href = g
            }).attr({align: f.position.align, zIndex: 8}).css(f.style).add().align(f.position);
            a.hasRendered = !0
        }, destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container,
                e, f = d && d.parentNode;
            B(a, "destroy");
            Ha[a.index] = v;
            a.renderTo.removeAttribute("data-highcharts-chart");
            ba(a);
            for (e = b.length; e--;)b[e] = b[e].destroy();
            for (e = c.length; e--;)c[e] = c[e].destroy();
            o(["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "scroller", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"], function (b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            if (d)d.innerHTML = "", ba(d), f && Va(d);
            for (e in a)delete a[e]
        },
            isReadyToRender: function () {
                var a = this;
                if (!Z && N == N.top && y.readyState !== "complete" || $ && !N.canvg)return $ ? Xb.push(function () {
                    a.firstRender()
                }, a.options.global.canvasToolsURL) : y.attachEvent("onreadystatechange", function () {
                    y.detachEvent("onreadystatechange", a.firstRender);
                    y.readyState === "complete" && a.firstRender()
                }), !1;
                return!0
            }, firstRender: function () {
                var a = this, b = a.options, c = a.callback;
                if (a.isReadyToRender())a.getContainer(), B(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(),
                    o(b.series || [], function (b) {
                        a.initSeries(b)
                    }), B(a, "beforeRender"), a.pointer = new yb(a, b), a.render(), a.renderer.draw(), c && c.apply(a, [a]), o(a.callbacks, function (b) {
                    b.apply(a, [a])
                }), a.cloneRenderTo(!0), B(a, "load")
            }};
        Ab.prototype.callbacks = [];
        var Ra = function () {
        };
        Ra.prototype = {init: function (a, b, c) {
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length))a.colorCounter =
                0;
            a.chart.pointCount++;
            return this
        }, applyOptions: function (a, b) {
            var c = this.series, d = c.pointValKey, a = Ra.prototype.optionsToObject.call(this, a);
            r(this, a);
            this.options = this.options ? r(this.options, a) : a;
            if (d)this.y = this[d];
            if (this.x === v && c)this.x = b === v ? c.autoIncrement() : b;
            return this
        }, optionsToObject: function (a) {
            var b, c = this.series, d = c.pointArrayMap || ["y"], e = d.length, f = 0, g = 0;
            if (typeof a === "number" || a === null)b = {y: a}; else if (Ja(a)) {
                b = {};
                if (a.length > e) {
                    c = typeof a[0];
                    if (c === "string")b.name = a[0]; else if (c ===
                        "number")b.x = a[0];
                    f++
                }
                for (; g < e;)b[d[g++]] = a[f++]
            } else if (typeof a === "object") {
                b = a;
                if (a.dataLabels)c._hasPointLabels = !0;
                if (a.marker)c._hasPointMarkers = !0
            }
            return b
        }, destroy: function () {
            var a = this.series.chart, b = a.hoverPoints, c;
            a.pointCount--;
            if (b && (this.setState(), ga(b, this), !b.length))a.hoverPoints = null;
            if (this === a.hoverPoint)this.onMouseOut();
            if (this.graphic || this.dataLabel)ba(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this)this[c] = null
        }, destroyElements: function () {
            for (var a =
                ["graphic", "dataLabel", "dataLabelUpper", "group", "connector", "shadowGroup"], b, c = 6; c--;)b = a[c], this[b] && (this[b] = this[b].destroy())
        }, getLabelConfig: function () {
            return{x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal}
        }, select: function (a, b) {
            var c = this, d = c.series, e = d.chart, a = n(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function () {
                c.selected = c.options.selected = a;
                d.options.data[oa(c, d.data)] =
                    c.options;
                c.setState(a && "select");
                b || o(e.getSelectedPoints(), function (a) {
                    if (a.selected && a !== c)a.selected = a.options.selected = !1, d.options.data[oa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        }, onMouseOver: function (a) {
            var b = this.series, c = b.chart, d = c.tooltip, e = c.hoverPoint;
            if (e && e !== this)e.onMouseOut();
            this.firePointEvent("mouseOver");
            d && (!d.shared || b.noSharedTooltip) && d.refresh(this, a);
            this.setState("hover");
            c.hoverPoint = this
        }, onMouseOut: function () {
            var a = this.series.chart, b = a.hoverPoints;
            if (!b || oa(this, b) === -1)this.firePointEvent("mouseOut"), this.setState(), a.hoverPoint = null
        }, tooltipFormatter: function (a) {
            var b = this.series, c = b.tooltipOptions, d = n(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            o(b.pointArrayMap || ["y"], function (b) {
                b = "{point." + b;
                if (e || f)a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Da(a, {point: this, series: this.series})
        }, update: function (a, b, c) {
            var d = this, e = d.series, f = d.graphic, g, h = e.data, i = e.chart, j = e.options, b = n(b, !0);
            d.firePointEvent("update",
                {options: a}, function () {
                    d.applyOptions(a);
                    V(a) && (e.getAttribs(), f && f.attr(d.pointAttr[e.state]));
                    g = oa(d, h);
                    e.xData[g] = d.x;
                    e.yData[g] = e.toYData ? e.toYData(d) : d.y;
                    e.zData[g] = d.z;
                    j.data[g] = d.options;
                    e.isDirty = e.isDirtyData = i.isDirtyBox = !0;
                    j.legendType === "point" && i.legend.destroyItem(d);
                    b && i.redraw(c)
                })
        }, remove: function (a, b) {
            var c = this, d = c.series, e = d.chart, f, g = d.data;
            Ma(b, e);
            a = n(a, !0);
            c.firePointEvent("remove", null, function () {
                f = oa(c, g);
                g.splice(f, 1);
                d.options.data.splice(f, 1);
                d.xData.splice(f, 1);
                d.yData.splice(f,
                    1);
                d.zData.splice(f, 1);
                c.destroy();
                d.isDirty = !0;
                d.isDirtyData = !0;
                a && e.redraw()
            })
        }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function (a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            B(this, a, b, c)
        }, importEvents: function () {
            if (!this.hasImportedEvents) {
                var a = w(this.series.options.point, this.options).events, b;
                this.events = a;
                for (b in a)K(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        }, setState: function (a) {
            var b = this.plotX, c = this.plotY, d = this.series, e = d.options.states, f = Y[d.type].marker && d.options.marker, g = f && !f.enabled, h = f && f.states[a], i = h && h.enabled === !1, j = d.stateMarkerGraphic, k = this.marker || {}, l = d.chart, m = this.pointAttr, a = a || "";
            if (!(a === this.state || this.selected && a !== "select" || e[a] && e[a].enabled === !1 || a && (i || g && !h.enabled))) {
                if (this.graphic)e = f && this.graphic.symbolName && m[a].r, this.graphic.attr(w(m[a], e ? {x: b - e, y: c - e, width: 2 * e, height: 2 * e} : {})); else {
                    if (a && h)e = h.radius, k = k.symbol ||
                        d.symbol, j && j.currentSymbol !== k && (j = j.destroy()), j ? j.attr({x: b - e, y: c - e}) : (d.stateMarkerGraphic = j = l.renderer.symbol(k, b - e, c - e, 2 * e, 2 * e).attr(m[a]).add(d.markerGroup), j.currentSymbol = k);
                    if (j)j[a && l.isInsidePlot(b, c) ? "show" : "hide"]()
                }
                this.state = a
            }
        }};
        var Q = function () {
        };
        Q.prototype = {isCartesian: !0, type: "line", pointClass: Ra, sorted: !0, requireSorting: !0, pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"}, colorCounter: 0, init: function (a, b) {
            var c, d, e = a.series;
            this.chart =
                a;
            this.options = b = this.setOptions(b);
            this.bindAxes();
            r(this, {name: b.name, state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0});
            if ($)b.animation = !1;
            d = b.events;
            for (c in d)K(this, c, d[c]);
            if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)a.runTrackerClick = !0;
            this.getColor();
            this.getSymbol();
            this.setData(b.data, !1);
            if (this.isCartesian)a.hasCartesianSeries = !0;
            e.push(this);
            this._i = e.length - 1;
            Nb(e, function (a, b) {
                return n(a.options.index, a._i) - n(b.options.index,
                    a._i)
            });
            o(e, function (a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            });
            c = b.linkedTo;
            this.linkedSeries = [];
            if (ea(c) && (c = c === ":previous" ? e[this.index - 1] : a.get(c)))c.linkedSeries.push(this), this.linkedParent = c
        }, bindAxes: function () {
            var a = this, b = a.options, c = a.chart, d;
            a.isCartesian && o(["xAxis", "yAxis"], function (e) {
                o(c[e], function (c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== v && b[e] === d.id || b[e] === v && d.index === 0)c.series.push(a), a[e] = c, c.isDirty = !0
                });
                a[e] || va(18, !0)
            })
        }, autoIncrement: function () {
            var a = this.options,
                b = this.xIncrement, b = n(b, a.pointStart, 0);
            this.pointInterval = n(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        }, getSegments: function () {
            var a = -1, b = [], c, d = this.points, e = d.length;
            if (e)if (this.options.connectNulls) {
                for (c = e; c--;)d[c].y === null && d.splice(c, 1);
                d.length && (b = [d])
            } else o(d, function (c, g) {
                c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
            });
            this.segments = b
        }, setOptions: function (a) {
            var b = this.chart.options, c = b.plotOptions, d = c[this.type];
            this.userOptions = a;
            a = w(d, c.series, a);
            this.tooltipOptions = w(b.tooltip, a.tooltip);
            d.marker === null && delete a.marker;
            return a
        }, getColor: function () {
            var a = this.options, b = this.userOptions, c = this.chart.options.colors, d = this.chart.counters, e;
            e = a.color || Y[this.type].color;
            if (!e && !a.colorByPoint)s(b._colorIndex) ? a = b._colorIndex : (b._colorIndex = d.color, a = d.color++), e = c[a];
            this.color = e;
            d.wrapColor(c.length)
        }, getSymbol: function () {
            var a = this.userOptions, b = this.options.marker, c = this.chart, d = c.options.symbols, c = c.counters;
            this.symbol = b.symbol;
            if (!this.symbol)s(a._symbolIndex) ? a = a._symbolIndex : (a._symbolIndex = c.symbol, a = c.symbol++), this.symbol = d[a];
            if (/^url/.test(this.symbol))b.radius = 0;
            c.wrapSymbol(d.length)
        }, drawLegendSymbol: function (a) {
            var b = this.options, c = b.marker, d = a.options, e;
            e = d.symbolWidth;
            var f = this.chart.renderer, g = this.legendGroup, a = a.baseline - t(f.fontMetrics(d.itemStyle.fontSize).b * 0.3);
            if (b.lineWidth) {
                d = {"stroke-width": b.lineWidth};
                if (b.dashStyle)d.dashstyle = b.dashStyle;
                this.legendLine = f.path(["M", 0, a,
                    "L", e, a]).attr(d).add(g)
            }
            if (c && c.enabled)b = c.radius, this.legendSymbol = e = f.symbol(this.symbol, e / 2 - b, a - b, 2 * b, 2 * b).add(g), e.isMarker = !0
        }, addPoint: function (a, b, c, d) {
            var e = this.options, f = this.data, g = this.graph, h = this.area, i = this.chart, j = this.xData, k = this.yData, l = this.zData, m = this.names, p = g && g.shift || 0, q = e.data;
            Ma(d, i);
            c && o([g, h, this.graphNeg, this.areaNeg], function (a) {
                if (a)a.shift = p + 1
            });
            if (h)h.isArea = !0;
            b = n(b, !0);
            d = {series: this};
            this.pointClass.prototype.applyOptions.apply(d, [a]);
            j.push(d.x);
            k.push(this.toYData ?
                this.toYData(d) : d.y);
            l.push(d.z);
            if (m)m[d.x] = d.name;
            q.push(a);
            e.legendType === "point" && this.generatePoints();
            c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), j.shift(), k.shift(), l.shift(), q.shift()));
            this.isDirtyData = this.isDirty = !0;
            b && (this.getAttribs(), i.redraw())
        }, setData: function (a, b) {
            var c = this.points, d = this.options, e = this.chart, f = null, g = this.xAxis, h = g && g.categories && !g.categories.length ? [] : null, i;
            this.xIncrement = null;
            this.pointRange = g && g.categories ? 1 : d.pointRange;
            this.colorCounter = 0;
            var j = [],
                k = [], l = [], m = a ? a.length : [];
            i = n(d.turboThreshold, 1E3);
            var p = this.pointArrayMap, p = p && p.length, o = !!this.toYData;
            if (i && m > i) {
                for (i = 0; f === null && i < m;)f = a[i], i++;
                if (qa(f)) {
                    f = n(d.pointStart, 0);
                    d = n(d.pointInterval, 1);
                    for (i = 0; i < m; i++)j[i] = f, k[i] = a[i], f += d;
                    this.xIncrement = f
                } else if (Ja(f))if (p)for (i = 0; i < m; i++)d = a[i], j[i] = d[0], k[i] = d.slice(1, p + 1); else for (i = 0; i < m; i++)d = a[i], j[i] = d[0], k[i] = d[1]
            } else for (i = 0; i < m; i++)if (a[i] !== v && (d = {series: this}, this.pointClass.prototype.applyOptions.apply(d, [a[i]]), j[i] = d.x, k[i] =
                o ? this.toYData(d) : d.y, l[i] = d.z, h && d.name))h[d.x] = d.name;
            ea(k[0]) && va(14, !0);
            this.data = [];
            this.options.data = a;
            this.xData = j;
            this.yData = k;
            this.zData = l;
            this.names = h;
            for (i = c && c.length || 0; i--;)c[i] && c[i].destroy && c[i].destroy();
            if (g)g.minRange = g.userMinRange;
            this.isDirty = this.isDirtyData = e.isDirtyBox = !0;
            n(b, !0) && e.redraw(!1)
        }, remove: function (a, b) {
            var c = this, d = c.chart, a = n(a, !0);
            if (!c.isRemoving)c.isRemoving = !0, B(c, "remove", null, function () {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                a && d.redraw(b)
            });
            c.isRemoving = !1
        }, processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length, e;
            e = 0;
            var f, g, h = this.xAxis, i = this.options, j = i.cropThreshold, k = this.isCartesian;
            if (k && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a)return!1;
            if (k && this.sorted && (!j || d > j || this.forceCrop))if (a = h.min, h = h.max, b[d - 1] < a || b[0] > h)b = [], c = []; else if (b[0] < a || b[d - 1] > h)e = this.cropData(this.xData, this.yData, a, h), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (h = b.length - 1; h >= 0; h--)d = b[h] - b[h - 1], d > 0 && (g === v || d < g) ? g = d : d < 0 && this.requireSorting && va(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            if (i.pointRange === null)this.pointRange = g || 1;
            this.closestPointRange = g
        }, cropData: function (a, b, c, d) {
            var e = a.length, f = 0, g = e, h;
            for (h = 0; h < e; h++)if (a[h] >= c) {
                f = u(0, h - 1);
                break
            }
            for (; h < e; h++)if (a[h] > d) {
                g = h + 1;
                break
            }
            return{xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g}
        }, generatePoints: function () {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, j =
                this.hasGroupedData, k, l = [], m;
            if (!b && !j)b = [], b.length = a.length, b = this.data = b;
            for (m = 0; m < g; m++)i = h + m, j ? l[m] = (new f).init(this, [d[m]].concat(ia(e[m]))) : (b[i] ? k = b[i] : a[i] !== v && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k);
            if (b && (g !== (c = b.length) || j))for (m = 0; m < c; m++)if (m === h && !j && (m += g), b[m])b[m].destroyElements(), b[m].plotX = v;
            this.data = b;
            this.points = l
        }, setStackedPoints: function () {
            if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
                var a = this.processedXData,
                    b = this.processedYData, c = b.length, d = this.options, e = d.threshold, f = d.stack, d = d.stacking, g = this.stackKey, h = "-" + g, i = this.yAxis, j = i.stacks, k = i.oldStacks, l = i.stacksMax, m, p, n, o, t, s;
                for (t = 0; t < c; t++)if (p = a[t], s = b[t], o = (m = s < e) ? h : g, l[o] || (l[o] = s), j[o] || (j[o] = {}), k[o] && k[o][p] ? (j[o][p] = k[o][p], j[o][p].total = null) : j[o][p] || (j[o][p] = new Pb(i, i.options.stackLabels, m, p, f, d)), n = j[o][p], p = n.total, n.addValue(s), n.cacheExtremes(this, [p, p + s]), n.total > l[o] && !m)l[o] = n.total; else if (n.total < l[o] && m)l[o] = n.total;
                i.oldStacks =
                {}
            }
        }, getExtremes: function () {
            var a = this.xAxis, b = this.yAxis, c = this.stackKey, d = this.options, e = d.threshold, f = this.processedXData, g = this.processedYData, h = g.length, i = [], j = 0, k = a.min, a = a.max, l, m, p;
            d.stacking && (m = b.stacksMax["-" + c] || e, p = b.stacksMax[c] || e);
            if (!s(m) || !s(p)) {
                for (d = 0; d < h; d++)if (l = f[d], c = g[d], e = c !== null && c !== v && (!b.isLog || c.length || c > 0), l = this.getExtremesFromAll || this.cropped || (f[d + 1] || l) >= k && (f[d - 1] || l) <= a, e && l)if (e = c.length)for (; e--;)c[e] !== null && (i[j++] = c[e]); else i[j++] = c;
                m = n(m, Ka(i));
                p = n(p,
                    ua(i))
            }
            this.dataMin = m;
            this.dataMax = p
        }, translate: function () {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || qa(i), k = a.threshold, a = 0; a < g; a++) {
                var l = f[a], m = l.x, p = l.y, o = l.low, u = e.stacks[(p < k ? "-" : "") + this.stackKey], r;
                if (e.isLog && p <= 0)l.y = p = null;
                l.plotX = c.translate(m, 0, 0, 0, 1, i);
                if (b && this.visible && u && u[m])u = u[m], r = u.total, u.cum = o = u.cum -
                    p, p = o + p, u.cum === 0 && (o = n(k, e.min)), e.isLog && o <= 0 && (o = null), b === "percent" && (o = r ? o * 100 / r : 0, p = r ? p * 100 / r : 0), l.percentage = r ? l.y * 100 / r : 0, l.total = l.stackTotal = r, l.stackY = p, u.setOffset(this.pointXOffset || 0, this.barW || 0);
                l.yBottom = s(o) ? e.translate(o, 0, 1, 0, 1) : null;
                h && (p = this.modifyValue(p, l));
                l.plotY = typeof p === "number" && p !== Infinity ? t(e.translate(p, 0, 1, 0, 1) * 10) / 10 : v;
                l.clientX = j ? c.translate(m, 0, 0, 0, 1) : l.plotX;
                l.negative = l.y < (k || 0);
                l.category = d && d[l.x] !== v ? d[l.x] : l.x
            }
            this.getSegments()
        }, setTooltipPoints: function (a) {
            var b =
                [], c, d, e = (c = this.xAxis) ? c.tooltipLen || c.len : this.chart.plotSizeX, f, g, h, i = [];
            if (this.options.enableMouseTracking !== !1) {
                if (a)this.tooltipPoints = null;
                o(this.segments || this.points, function (a) {
                    b = b.concat(a)
                });
                c && c.reversed && (b = b.reverse());
                this.orderTooltipPoints && this.orderTooltipPoints(b);
                a = b.length;
                for (h = 0; h < a; h++) {
                    f = b[h];
                    g = b[h + 1];
                    c = b[h - 1] ? d + 1 : 0;
                    for (d = b[h + 1] ? J(u(0, T((f.clientX + (g ? g.wrappedClientX || g.clientX : e)) / 2)), e) : e; c >= 0 && c <= d;)i[c++] = f
                }
                this.tooltipPoints = i
            }
        }, tooltipHeaderFormatter: function (a) {
            var b =
                this.tooltipOptions, c = b.xDateFormat, d = b.dateTimeLabelFormats, e = this.xAxis, f = e && e.options.type === "datetime", b = b.headerFormat, e = e && e.closestPointRange, g;
            if (f && !c)if (e)for (g in z) {
                if (z[g] >= e) {
                    c = d[g];
                    break
                }
            } else c = d.day;
            f && c && qa(a.key) && (b = b.replace("{point.key}", "{point.key:" + c + "}"));
            return Da(b, {point: a, series: this})
        }, onMouseOver: function () {
            var a = this.chart, b = a.hoverSeries;
            if (b && b !== this)b.onMouseOut();
            this.options.events.mouseOver && B(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        }, onMouseOut: function () {
            var a =
                this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            if (d)d.onMouseOut();
            this && a.events.mouseOut && B(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState();
            b.hoverSeries = null
        }, animate: function (a) {
            var b = this, c = b.chart, d = c.renderer, e;
            e = b.options.animation;
            var f = c.clipBox, g = c.inverted, h;
            if (e && !V(e))e = Y[b.type].animation;
            h = "_sharedClip" + e.duration + e.easing;
            if (a)a = c[h], e = c[h + "m"], a || (c[h] = a = d.clipRect(r(f, {width: 0})), c[h + "m"] = e = d.clipRect(-99, g ? -c.plotLeft : -c.plotTop,
                99, g ? c.chartWidth : c.chartHeight)), b.group.clip(a), b.markerGroup.clip(e), b.sharedClipKey = h; else {
                if (a = c[h])a.animate({width: c.plotSizeX}, e), c[h + "m"].animate({width: c.plotSizeX + 99}, e);
                b.animate = null;
                b.animationTimeout = setTimeout(function () {
                    b.afterAnimate()
                }, e.duration)
            }
        }, afterAnimate: function () {
            var a = this.chart, b = this.sharedClipKey, c = this.group;
            c && this.options.clip !== !1 && (c.clip(a.clipRect), this.markerGroup.clip());
            setTimeout(function () {
                b && a[b] && (a[b] = a[b].destroy(), a[b + "m"] = a[b + "m"].destroy())
            }, 100)
        },
            drawPoints: function () {
                var a, b = this.points, c = this.chart, d, e, f, g, h, i, j, k, l = this.options.marker, m, p = this.markerGroup;
                if (l.enabled || this._hasPointMarkers)for (f = b.length; f--;)if (g = b[f], d = T(g.plotX), e = g.plotY, k = g.graphic, i = g.marker || {}, a = l.enabled && i.enabled === v || i.enabled, m = c.isInsidePlot(t(d), e, c.inverted), a && e !== v && !isNaN(e) && g.y !== null)if (a = g.pointAttr[g.selected ? "select" : ""], h = a.r, i = n(i.symbol, this.symbol), j = i.indexOf("url") === 0, k)k.attr({visibility: m ? Z ? "inherit" : "visible" : "hidden"}).animate(r({x: d -
                    h, y: e - h}, k.symbolName ? {width: 2 * h, height: 2 * h} : {})); else {
                    if (m && (h > 0 || j))g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h).attr(a).add(p)
                } else if (k)g.graphic = k.destroy()
            }, convertAttribs: function (a, b, c, d) {
                var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {};
                for (f in e)g = e[f], h[f] = n(a[g], b[f], c[f], d[f]);
                return h
            }, getAttribs: function () {
                var a = this, b = a.options, c = Y[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = {stroke: g, fill: g}, i = a.points || [], j = [], k, l = a.pointAttrToOptions, m = b.negativeColor,
                    p;
                b.marker ? (e.radius = e.radius || c.radius + 2, e.lineWidth = e.lineWidth || c.lineWidth + 1) : e.color = e.color || pa(e.color || g).brighten(e.brightness).get();
                j[""] = a.convertAttribs(c, h);
                o(["hover", "select"], function (b) {
                    j[b] = a.convertAttribs(d[b], j[""])
                });
                a.pointAttr = j;
                for (g = i.length; g--;) {
                    h = i[g];
                    if ((c = h.options && h.options.marker || h.options) && c.enabled === !1)c.radius = 0;
                    if (h.negative && m)h.color = h.fillColor = m;
                    f = b.colorByPoint || h.color;
                    if (h.options)for (p in l)s(c[l[p]]) && (f = !0);
                    if (f) {
                        c = c || {};
                        k = [];
                        d = c.states || {};
                        f = d.hover =
                            d.hover || {};
                        if (!b.marker)f.color = pa(f.color || h.color).brighten(f.brightness || e.brightness).get();
                        k[""] = a.convertAttribs(r({color: h.color}, c), j[""]);
                        k.hover = a.convertAttribs(d.hover, j.hover, k[""]);
                        k.select = a.convertAttribs(d.select, j.select, k[""]);
                        if (h.negative && b.marker && m)k[""].fill = k.hover.fill = k.select.fill = a.convertAttribs({fillColor: m}).fill
                    } else k = j;
                    h.pointAttr = k
                }
            }, update: function (a, b) {
                var c = this.chart, d = this.type, a = w(this.userOptions, {animation: !1, index: this.index, pointStart: this.xData[0]},
                    {data: this.options.data}, a);
                this.remove(!1);
                r(this, aa[a.type || d].prototype);
                this.init(c, a);
                n(b, !0) && c.redraw(!1)
            }, destroy: function () {
                var a = this, b = a.chart, c = /AppleWebKit\/533/.test(Ga), d, e, f = a.data || [], g, h, i;
                B(a, "destroy");
                ba(a);
                o(["xAxis", "yAxis"], function (b) {
                    if (i = a[b])ga(i.series, a), i.isDirty = i.forceRedraw = !0
                });
                a.legendItem && a.chart.legend.destroyItem(a);
                for (e = f.length; e--;)(g = f[e]) && g.destroy && g.destroy();
                a.points = null;
                clearTimeout(a.animationTimeout);
                o(["area", "graph", "dataLabelsGroup", "group",
                    "markerGroup", "tracker", "graphNeg", "areaNeg", "posClip", "negClip"], function (b) {
                    a[b] && (d = c && b === "group" ? "hide" : "destroy", a[b][d]())
                });
                if (b.hoverSeries === a)b.hoverSeries = null;
                ga(b.series, a);
                for (h in a)delete a[h]
            }, drawDataLabels: function () {
                var a = this, b = a.options.dataLabels, c = a.points, d, e, f, g;
                if (b.enabled || a._hasPointLabels)a.dlProcessOptions && a.dlProcessOptions(b), g = a.plotGroup("dataLabelsGroup", "data-labels", a.visible ? "visible" : "hidden", b.zIndex || 6), e = b, o(c, function (c) {
                    var i, j = c.dataLabel, k, l, m = c.connector,
                        p = !0;
                    d = c.options && c.options.dataLabels;
                    i = e.enabled || d && d.enabled;
                    if (j && !i)c.dataLabel = j.destroy(); else if (i) {
                        b = w(e, d);
                        i = b.rotation;
                        k = c.getLabelConfig();
                        f = b.format ? Da(b.format, k) : b.formatter.call(k, b);
                        b.style.color = n(b.color, b.style.color, a.color, "black");
                        if (j)if (s(f))j.attr({text: f}), p = !1; else {
                            if (c.dataLabel = j = j.destroy(), m)c.connector = m.destroy()
                        } else if (s(f)) {
                            j = {fill: b.backgroundColor, stroke: b.borderColor, "stroke-width": b.borderWidth, r: b.borderRadius || 0, rotation: i, padding: b.padding, zIndex: 1};
                            for (l in j)j[l] ===
                            v && delete j[l];
                            j = c.dataLabel = a.chart.renderer[i ? "text" : "label"](f, 0, -999, null, null, null, b.useHTML).attr(j).css(b.style).add(g).shadow(b.shadow)
                        }
                        j && a.alignDataLabel(c, j, b, null, p)
                    }
                })
            }, alignDataLabel: function (a, b, c, d, e) {
                var f = this.chart, g = f.inverted, h = n(a.plotX, -999), i = n(a.plotY, -999), a = b.getBBox(), d = r({x: g ? f.plotWidth - i : h, y: t(g ? f.plotHeight - h : i), width: 0, height: 0}, d);
                r(c, {width: a.width, height: a.height});
                c.rotation ? (d = {align: c.align, x: d.x + c.x + d.width / 2, y: d.y + c.y + d.height / 2}, b[e ? "attr" : "animate"](d)) :
                    (b.align(c, null, d), d = b.alignAttr);
                b.attr({visibility: c.crop === !1 || f.isInsidePlot(d.x, d.y) && f.isInsidePlot(d.x + a.width, d.y + a.height) ? f.renderer.isSVG ? "inherit" : "visible" : "hidden"})
            }, getSegmentPath: function (a) {
                var b = this, c = [], d = b.options.step;
                o(a, function (e, f) {
                    var g = e.plotX, h = e.plotY, i;
                    b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h) : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, (i.plotX + g) / 2, h) : c.push(g, i.plotY)), c.push(e.plotX, e.plotY))
                });
                return c
            }, getGraphPath: function () {
                var a = this, b = [], c, d = [];
                o(a.segments, function (e) {
                    c = a.getSegmentPath(e);
                    e.length > 1 ? b = b.concat(c) : d.push(e[0])
                });
                a.singlePoints = d;
                return a.graphPath = b
            }, drawGraph: function () {
                var a = this, b = this.options, c = [
                    ["graph", b.lineColor || this.color]
                ], d = b.lineWidth, e = b.dashStyle, f = this.getGraphPath(), g = b.negativeColor;
                g && c.push(["graphNeg", g]);
                o(c, function (c, g) {
                    var j = c[0], k = a[j];
                    if (k)Ya(k), k.animate({d: f}); else if (d && f.length) {
                        k = {stroke: c[1], "stroke-width": d, zIndex: 1};
                        if (e)k.dashstyle =
                            e;
                        a[j] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(!g && b.shadow)
                    }
                })
            }, clipNeg: function () {
                var a = this.options, b = this.chart, c = b.renderer, d = a.negativeColor || a.negativeFillColor, e, f = this.graph, g = this.area, h = this.posClip, i = this.negClip;
                e = b.chartWidth;
                var j = b.chartHeight, k = u(e, j), l = this.yAxis;
                if (d && (f || g)) {
                    d = t(l.toPixels(a.threshold || 0, !0));
                    a = {x: 0, y: 0, width: k, height: d};
                    k = {x: 0, y: d, width: k, height: k};
                    if (b.inverted)a.height = k.y = b.plotWidth - d, c.isVML && (a = {x: b.plotWidth - d - b.plotLeft, y: 0, width: e, height: j},
                        k = {x: d + b.plotLeft - e, y: 0, width: b.plotLeft + d, height: e});
                    l.reversed ? (b = k, e = a) : (b = a, e = k);
                    h ? (h.animate(b), i.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = i = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(i)), g && (g.clip(h), this.areaNeg.clip(i)))
                }
            }, invertGroups: function () {
                function a() {
                    var a = {width: b.yAxis.len, height: b.xAxis.len};
                    o(["group", "markerGroup"], function (c) {
                        b[c] && b[c].attr(a).invert()
                    })
                }

                var b = this, c = b.chart;
                if (b.xAxis)K(c, "resize", a), K(b, "destroy", function () {
                    ba(c, "resize",
                        a)
                }), a(), b.invertGroups = a
            }, plotGroup: function (a, b, c, d, e) {
                var f = this[a], g = !f;
                g && (this[a] = f = this.chart.renderer.g(b).attr({visibility: c, zIndex: d || 0.1}).add(e));
                f[g ? "attr" : "animate"](this.getPlotBox());
                return f
            }, getPlotBox: function () {
                return{translateX: this.xAxis ? this.xAxis.left : this.chart.plotLeft, translateY: this.yAxis ? this.yAxis.top : this.chart.plotTop, scaleX: 1, scaleY: 1}
            }, render: function () {
                var a = this.chart, b, c = this.options, d = c.animation && !!this.animate && a.renderer.isSVG, e = this.visible ? "visible" : "hidden",
                    f = c.zIndex, g = this.hasRendered, h = a.seriesGroup;
                b = this.plotGroup("group", "series", e, f, h);
                this.markerGroup = this.plotGroup("markerGroup", "markers", e, f, h);
                d && this.animate(!0);
                this.getAttribs();
                b.inverted = this.isCartesian ? a.inverted : !1;
                this.drawGraph && (this.drawGraph(), this.clipNeg());
                this.drawDataLabels();
                this.drawPoints();
                this.options.enableMouseTracking !== !1 && this.drawTracker();
                a.inverted && this.invertGroups();
                c.clip !== !1 && !this.sharedClipKey && !g && b.clip(a.clipRect);
                d ? this.animate() : g || this.afterAnimate();
                this.isDirty = this.isDirtyData = !1;
                this.hasRendered = !0
            }, redraw: function () {
                var a = this.chart, b = this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis;
                c && (a.inverted && c.attr({width: a.plotWidth, height: a.plotHeight}), c.animate({translateX: n(d && d.left, a.plotLeft), translateY: n(e && e.top, a.plotTop)}));
                this.translate();
                this.setTooltipPoints(!0);
                this.render();
                b && B(this, "updatedData")
            }, setState: function (a) {
                var b = this.options, c = this.graph, d = this.graphNeg, e = b.states, b = b.lineWidth, a = a || "";
                if (this.state !== a)this.state =
                    a, e[a] && e[a].enabled === !1 || (a && (b = e[a].lineWidth || b + 1), c && !c.dashstyle && (a = {"stroke-width": b}, c.attr(a), d && d.attr(a)))
            }, setVisible: function (a, b) {
                var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
                f = (c.visible = a = c.userOptions.visible = a === v ? !h : a) ? "show" : "hide";
                o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
                    if (c[a])c[a][f]()
                });
                if (d.hoverSeries === c)c.onMouseOut();
                e && d.legend.colorizeItem(c, a);
                c.isDirty = !0;
                c.options.stacking && o(d.series, function (a) {
                    if (a.options.stacking &&
                        a.visible)a.isDirty = !0
                });
                o(c.linkedSeries, function (b) {
                    b.setVisible(a, !1)
                });
                if (g)d.isDirtyBox = !0;
                b !== !1 && d.redraw();
                B(c, f)
            }, show: function () {
                this.setVisible(!0)
            }, hide: function () {
                this.setVisible(!1)
            }, select: function (a) {
                this.selected = a = a === v ? !this.selected : a;
                if (this.checkbox)this.checkbox.checked = a;
                B(this, a ? "select" : "unselect")
            }, drawTracker: function () {
                var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, i = f.options.tooltip.snap, j = a.tracker,
                    k = b.cursor, k = k && {cursor: k}, l = a.singlePoints, m, p = function () {
                        if (f.hoverSeries !== a)a.onMouseOver()
                    };
                if (e && !c)for (m = e + 1; m--;)d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + i, d[m - 1]);
                for (m = 0; m < l.length; m++)e = l[m], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
                if (j)j.attr({d: d}); else if (a.tracker = j = h.path(d).attr({"class": "highcharts-tracker", "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: Tb, fill: c ? Tb : S, "stroke-width": b.lineWidth +
                    (c ? 0 : 2 * i), zIndex: 2}).addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (a) {
                    g.onTrackerMouseOut(a)
                }).css(k).add(a.markerGroup), jb)j.on("touchstart", p)
            }};
        L = ha(Q);
        aa.line = L;
        Y.area = w(X, {threshold: 0});
        L = ha(Q, {type: "area", getSegments: function () {
            var a = [], b = [], c = [], d = this.xAxis, e = this.yAxis, f = e.stacks[this.stackKey], g = {}, h, i, j = this.points, k, l, m;
            if (this.options.stacking && !this.cropped) {
                for (l = 0; l < j.length; l++)g[j[l].x] = j[l];
                for (m in f)c.push(+m);
                c.sort(function (a, b) {
                    return a - b
                });
                o(c, function (a) {
                    g[a] ?
                        b.push(g[a]) : (h = d.translate(a), k = f[a].percent ? f[a].total ? f[a].cum * 100 / f[a].total : 0 : f[a].cum, i = e.toPixels(k, !0), b.push({y: null, plotX: h, clientX: h, plotY: i, yBottom: i, onMouseOver: ya}))
                });
                b.length && a.push(b)
            } else Q.prototype.getSegments.call(this), a = this.segments;
            this.segments = a
        }, getSegmentPath: function (a) {
            var b = Q.prototype.getSegmentPath.call(this, a), c = [].concat(b), d, e = this.options;
            b.length === 3 && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)for (d = a.length - 1; d >= 0; d--)d < a.length - 1 && e.step && c.push(a[d +
                1].plotX, a[d].yBottom), c.push(a[d].plotX, a[d].yBottom); else this.closeSegment(c, a);
            this.areaPath = this.areaPath.concat(c);
            return b
        }, closeSegment: function (a, b) {
            var c = this.yAxis.getThreshold(this.options.threshold);
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        }, drawGraph: function () {
            this.areaPath = [];
            Q.prototype.drawGraph.apply(this);
            var a = this, b = this.areaPath, c = this.options, d = c.negativeColor, e = c.negativeFillColor, f = [
                ["area", this.color, c.fillColor]
            ];
            (d || e) && f.push(["areaNeg", d, e]);
            o(f, function (d) {
                var e =
                    d[0], f = a[e];
                f ? f.animate({d: b}) : a[e] = a.chart.renderer.path(b).attr({fill: n(d[2], pa(d[1]).setOpacity(n(c.fillOpacity, 0.75)).get()), zIndex: 0}).add(a.group)
            })
        }, drawLegendSymbol: function (a, b) {
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, a.options.symbolWidth, 12, 2).attr({zIndex: 3}).add(b.legendGroup)
        }});
        aa.area = L;
        Y.spline = w(X);
        E = ha(Q, {type: "spline", getPointSpline: function (a, b, c) {
            var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, i, j, k;
            if (f && g) {
                a = f.plotY;
                j = g.plotX;
                var g = g.plotY, l;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                j = (1.5 * d + j) / 2.5;
                k = (1.5 * e + g) / 2.5;
                l = (k - i) * (j - d) / (j - h) + e - k;
                i += l;
                k += l;
                i > a && i > e ? (i = u(a, e), k = 2 * e - i) : i < a && i < e && (i = J(a, e), k = 2 * e - i);
                k > g && k > e ? (k = u(g, e), i = 2 * e - k) : k < g && k < e && (k = J(g, e), i = 2 * e - k);
                b.rightContX = j;
                b.rightContY = k
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];
            return b
        }});
        aa.spline = E;
        Y.areaspline = w(Y.area);
        ma = L.prototype;
        E = ha(E, {type: "areaspline", closedStacks: !0, getSegmentPath: ma.getSegmentPath, closeSegment: ma.closeSegment,
            drawGraph: ma.drawGraph, drawLegendSymbol: ma.drawLegendSymbol});
        aa.areaspline = E;
        Y.column = w(X, {borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 0, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {hover: {brightness: 0.1, shadow: !1}, select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}}, dataLabels: {align: null, verticalAlign: null, y: null}, stickyTracking: !1, threshold: 0});
        E = ha(Q, {type: "column", tooltipOutsidePlot: !0, pointAttrToOptions: {stroke: "borderColor",
            "stroke-width": "borderWidth", fill: "color", r: "borderRadius"}, trackerGroups: ["group", "dataLabelsGroup"], init: function () {
            Q.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasRendered && o(b.series, function (b) {
                if (b.type === a.type)b.isDirty = !0
            })
        }, getColumnMetrics: function () {
            var a = this, b = a.options, c = this.xAxis, d = c.reversed, e, f = {}, g, h = 0;
            b.grouping === !1 ? h = 1 : o(a.yAxis.series, function (b) {
                var c = b.options;
                if (b.type === a.type && b.visible && a.options.group === c.group)c.stacking ? (e = b.stackKey, f[e] === v && (f[e] =
                    h++), g = f[e]) : c.grouping !== !1 && (g = h++), b.columnIndex = g
            });
            var c = J(P(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || 1), c.len), i = c * b.groupPadding, j = (c - 2 * i) / h, k = b.pointWidth, b = s(k) ? (j - k) / 2 : j * b.pointPadding, k = n(k, j - 2 * b);
            return a.columnMetrics = {width: k, offset: b + (i + ((d ? h - (a.columnIndex || 0) : a.columnIndex) || 0) * j - c / 2) * (d ? -1 : 1)}
        }, translate: function () {
            var a = this.chart, b = this.options, c = b.borderWidth, d = this.yAxis, e = this.translatedThreshold = d.getThreshold(b.threshold), f = n(b.minPointLength, 5), b = this.getColumnMetrics(),
                g = b.width, h = this.barW = ka(u(g, 1 + 2 * c)), i = this.pointXOffset = b.offset;
            Q.prototype.translate.apply(this);
            o(this.points, function (b) {
                var k = J(u(-999, b.plotY), d.len + 999), l = n(b.yBottom, e), m = b.plotX + i, o = ka(J(k, l)), k = ka(u(k, l) - o);
                P(k) < f && f && (k = f, o = t(P(o - e) > f ? l - f : e - (d.translate(b.y, 0, 1, 0, 1) <= e ? f : 0)));
                b.barX = m;
                b.pointWidth = g;
                b.shapeType = "rect";
                b.shapeArgs = b = a.renderer.Element.prototype.crisp.call(0, c, m, o, h, k);
                c % 2 && (b.y -= 1, b.height += 1)
            })
        }, getSymbol: ya, drawLegendSymbol: L.prototype.drawLegendSymbol, drawGraph: ya, drawPoints: function () {
            var a =
                this, b = a.options, c = a.chart.renderer, d;
            o(a.points, function (e) {
                var f = e.plotY, g = e.graphic;
                if (f !== v && !isNaN(f) && e.y !== null)d = e.shapeArgs, g ? (Ya(g), g.animate(w(d))) : e.graphic = c[e.shapeType](d).attr(e.pointAttr[e.selected ? "select" : ""]).add(a.group).shadow(b.shadow, null, b.stacking && !b.borderRadius); else if (g)e.graphic = g.destroy()
            })
        }, drawTracker: function () {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor: d}, f = function (c) {
                var d = c.target, e;
                if (b.hoverSeries !== a)a.onMouseOver();
                for (; d && !e;)e = d.point,
                    d = d.parentNode;
                if (e !== v && e !== b.hoverPoint)e.onMouseOver(c)
            };
            o(a.points, function (a) {
                if (a.graphic)a.graphic.element.point = a;
                if (a.dataLabel)a.dataLabel.element.point = a
            });
            a._hasTracking ? a._hasTracking = !0 : o(a.trackerGroups, function (b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) {
                    c.onTrackerMouseOut(a)
                }).css(e), jb))a[b].on("touchstart", f)
            })
        }, alignDataLabel: function (a, b, c, d, e) {
            var f = this.chart, g = f.inverted, h = a.dlBox || a.shapeArgs, i = a.below || a.plotY > n(this.translatedThreshold,
                f.plotSizeY), j = n(c.inside, !!this.options.stacking);
            if (h && (d = w(h), g && (d = {x: f.plotWidth - d.y - d.height, y: f.plotHeight - d.x - d.width, width: d.height, height: d.width}), !j))g ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
            c.align = n(c.align, !g || j ? "center" : i ? "right" : "left");
            c.verticalAlign = n(c.verticalAlign, g || j ? "middle" : i ? "top" : "bottom");
            Q.prototype.alignDataLabel.call(this, a, b, c, d, e)
        }, animate: function (a) {
            var b = this.yAxis, c = this.options, d = this.chart.inverted, e = {};
            if (Z)a ? (e.scaleY = 0.001, a = J(b.pos +
                b.len, u(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        }, remove: function () {
            var a = this, b = a.chart;
            b.hasRendered && o(b.series, function (b) {
                if (b.type === a.type)b.isDirty = !0
            });
            Q.prototype.remove.apply(a, arguments)
        }});
        aa.column = E;
        Y.bar = w(Y.column);
        ma = ha(E, {type: "bar", inverted: !0});
        aa.bar = ma;
        Y.scatter = w(X, {lineWidth: 0, tooltip: {headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>", followPointer: !0}, stickyTracking: !1});
        ma = ha(Q, {type: "scatter", sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["markerGroup"], drawTracker: E.prototype.drawTracker, setTooltipPoints: ya});
        aa.scatter = ma;
        Y.pie = w(X, {borderColor: "#FFFFFF", borderWidth: 1, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {distance: 30, enabled: !0, formatter: function () {
            return this.point.name
        }}, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null,
            showInLegend: !1, slicedOffset: 10, states: {hover: {brightness: 0.1, shadow: !1}}, stickyTracking: !1, tooltip: {followPointer: !0}});
        X = {type: "pie", isCartesian: !1, pointClass: ha(Ra, {init: function () {
            Ra.prototype.init.apply(this, arguments);
            var a = this, b;
            if (a.y < 0)a.y = null;
            r(a, {visible: a.visible !== !1, name: n(a.name, "Slice")});
            b = function (b) {
                a.slice(b.type === "select")
            };
            K(a, "select", b);
            K(a, "unselect", b);
            return a
        }, setVisible: function (a) {
            var b = this, c = b.series, d = c.chart, e;
            b.visible = b.options.visible = a = a === v ? !b.visible : a;
            c.options.data[oa(b,
                c.data)] = b.options;
            e = a ? "show" : "hide";
            o(["graphic", "dataLabel", "connector", "shadowGroup"], function (a) {
                if (b[a])b[a][e]()
            });
            b.legendItem && d.legend.colorizeItem(b, a);
            if (!c.isDirty && c.options.ignoreHiddenPoint)c.isDirty = !0, d.redraw()
        }, slice: function (a, b, c) {
            var d = this.series;
            Ma(c, d.chart);
            n(b, !0);
            this.sliced = this.options.sliced = a = s(a) ? a : !this.sliced;
            d.options.data[oa(this, d.data)] = this.options;
            a = a ? this.slicedTranslation : {translateX: 0, translateY: 0};
            this.graphic.animate(a);
            this.shadowGroup && this.shadowGroup.animate(a)
        }}),
            requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"}, getColor: ya, animate: function (a) {
                var b = this, c = b.points, d = b.startAngleRad;
                if (!a)o(c, function (a) {
                    var c = a.graphic, a = a.shapeArgs;
                    c && (c.attr({r: b.center[3] / 2, start: d, end: d}), c.animate({r: a.r, start: a.start, end: a.end}, b.options.animation))
                }), b.animate = null
            }, setData: function (a, b) {
                Q.prototype.setData.call(this, a, !1);
                this.processData();
                this.generatePoints();
                n(b, !0) && this.chart.redraw()
            }, generatePoints: function () {
                var a, b = 0, c, d, e, f = this.options.ignoreHiddenPoint;
                Q.prototype.generatePoints.call(this);
                c = this.points;
                d = c.length;
                for (a = 0; a < d; a++)e = c[a], b += f && !e.visible ? 0 : e.y;
                this.total = b;
                for (a = 0; a < d; a++)e = c[a], e.percentage = e.y / b * 100, e.total = b
            }, getCenter: function () {
                var a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d, e = b.plotWidth - 2 * c, f = b.plotHeight - 2 * c, b = a.center, a = [n(b[0], "50%"), n(b[1], "50%"), a.size || "100%", a.innerSize || 0], g = J(e, f), h;
                return Pa(a, function (a, b) {
                    h = /%$/.test(a);
                    d = b < 2 || b === 2 && h;
                    return(h ? [e, f, g, g][b] * A(a) / 100 : a) + (d ? c : 0)
                })
            }, translate: function (a) {
                this.generatePoints();
                var b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g, h, i = this.startAngleRad = Oa / 180 * ((c.startAngle || 0) % 360 - 90), j = this.points, k = 2 * Oa, l = c.dataLabels.distance, c = c.ignoreHiddenPoint, m, o = j.length, n;
                if (!a)this.center = a = this.getCenter();
                this.getX = function (b, c) {
                    h = R.asin((b - a[1]) / (a[2] / 2 + l));
                    return a[0] + (c ? -1 : 1) * W(h) * (a[2] / 2 + l)
                };
                for (m = 0; m < o; m++) {
                    n = j[m];
                    f = t((i + b * k) * 1E3) / 1E3;
                    if (!c ||
                        n.visible)b += n.percentage / 100;
                    g = t((i + b * k) * 1E3) / 1E3;
                    n.shapeType = "arc";
                    n.shapeArgs = {x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: f, end: g};
                    h = (g + f) / 2;
                    h > 0.75 * k && (h -= 2 * Oa);
                    n.slicedTranslation = {translateX: t(W(h) * d), translateY: t(ca(h) * d)};
                    f = W(h) * a[2] / 2;
                    g = ca(h) * a[2] / 2;
                    n.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];
                    n.half = h < k / 4 ? 0 : 1;
                    n.angle = h;
                    e = J(e, l / 2);
                    n.labelPos = [a[0] + f + W(h) * l, a[1] + g + ca(h) * l, a[0] + f + W(h) * e, a[1] + g + ca(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : n.half ? "right" : "left", h]
                }
                this.setTooltipPoints()
            }, drawGraph: null, drawPoints: function () {
                var a =
                    this, b = a.chart.renderer, c, d, e = a.options.shadow, f, g;
                if (e && !a.shadowGroup)a.shadowGroup = b.g("shadow").add(a.group);
                o(a.points, function (h) {
                    d = h.graphic;
                    g = h.shapeArgs;
                    f = h.shadowGroup;
                    if (e && !f)f = h.shadowGroup = b.g("shadow").add(a.shadowGroup);
                    c = h.sliced ? h.slicedTranslation : {translateX: 0, translateY: 0};
                    f && f.attr(c);
                    d ? d.animate(r(g, c)) : h.graphic = d = b.arc(g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({"stroke-linejoin": "round"}).attr(c).add(a.group).shadow(e, f);
                    h.visible === !1 &&
                    h.setVisible(!1)
                })
            }, drawDataLabels: function () {
                var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = n(e.connectorPadding, 10), g = n(e.connectorWidth, 1), h = d.plotWidth, d = d.plotHeight, i, j, k = n(e.softConnector, !0), l = e.distance, m = a.center, p = m[2] / 2, q = m[1], s = l > 0, r, w, v, x, A = [
                    [],
                    []
                ], y, D, H, z, G, B = [0, 0, 0, 0], J = function (a, b) {
                    return b.y - a.y
                }, M = function (a, b) {
                    a.sort(function (a, c) {
                        return a.angle !== void 0 && (c.angle - a.angle) * b
                    })
                };
                if (a.visible && (e.enabled || a._hasPointLabels)) {
                    Q.prototype.drawDataLabels.apply(a);
                    o(b, function (a) {
                        a.dataLabel &&
                        A[a.half].push(a)
                    });
                    for (z = 0; !x && b[z];)x = b[z] && b[z].dataLabel && (b[z].dataLabel.getBBox().height || 21), z++;
                    for (z = 2; z--;) {
                        var b = [], L = [], I = A[z], K = I.length, E;
                        M(I, z - 0.5);
                        if (l > 0) {
                            for (G = q - p - l; G <= q + p + l; G += x)b.push(G);
                            w = b.length;
                            if (K > w) {
                                c = [].concat(I);
                                c.sort(J);
                                for (G = K; G--;)c[G].rank = G;
                                for (G = K; G--;)I[G].rank >= w && I.splice(G, 1);
                                K = I.length
                            }
                            for (G = 0; G < K; G++) {
                                c = I[G];
                                v = c.labelPos;
                                c = 9999;
                                var O, N;
                                for (N = 0; N < w; N++)O = P(b[N] - v[1]), O < c && (c = O, E = N);
                                if (E < G && b[G] !== null)E = G; else for (w < K - G + E && b[G] !== null && (E = w - K + G); b[E] === null;)E++;
                                L.push({i: E, y: b[E]});
                                b[E] = null
                            }
                            L.sort(J)
                        }
                        for (G = 0; G < K; G++) {
                            c = I[G];
                            v = c.labelPos;
                            r = c.dataLabel;
                            H = c.visible === !1 ? "hidden" : "visible";
                            c = v[1];
                            if (l > 0) {
                                if (w = L.pop(), E = w.i, D = w.y, c > D && b[E + 1] !== null || c < D && b[E - 1] !== null)D = c
                            } else D = c;
                            y = e.justify ? m[0] + (z ? -1 : 1) * (p + l) : a.getX(E === 0 || E === b.length - 1 ? c : D, z);
                            r._attr = {visibility: H, align: v[6]};
                            r._pos = {x: y + e.x + ({left: f, right: -f}[v[6]] || 0), y: D + e.y - 10};
                            r.connX = y;
                            r.connY = D;
                            if (this.options.size === null)w = r.width, y - w < f ? B[3] = u(t(w - y + f), B[3]) : y + w > h - f && (B[1] = u(t(y + w - h + f), B[1])), D -
                                x / 2 < 0 ? B[0] = u(t(-D + x / 2), B[0]) : D + x / 2 > d && (B[2] = u(t(D + x / 2 - d), B[2]))
                        }
                    }
                    if (ua(B) === 0 || this.verifyDataLabelOverflow(B))this.placeDataLabels(), s && g && o(this.points, function (b) {
                        i = b.connector;
                        v = b.labelPos;
                        if ((r = b.dataLabel) && r._pos)H = r._attr.visibility, y = r.connX, D = r.connY, j = k ? ["M", y + (v[6] === "left" ? 5 : -5), D, "C", y, D, 2 * v[2] - v[4], 2 * v[3] - v[5], v[2], v[3], "L", v[4], v[5]] : ["M", y + (v[6] === "left" ? 5 : -5), D, "L", v[2], v[3], "L", v[4], v[5]], i ? (i.animate({d: j}), i.attr("visibility", H)) : b.connector = i = a.chart.renderer.path(j).attr({"stroke-width": g,
                            stroke: e.connectorColor || b.color || "#606060", visibility: H}).add(a.group); else if (i)b.connector = i.destroy()
                    })
                }
            }, verifyDataLabelOverflow: function (a) {
                var b = this.center, c = this.options, d = c.center, e = c = c.minSize || 80, f;
                d[0] !== null ? e = u(b[2] - u(a[1], a[3]), c) : (e = u(b[2] - a[1] - a[3], c), b[0] += (a[3] - a[1]) / 2);
                d[1] !== null ? e = u(J(e, b[2] - u(a[0], a[2])), c) : (e = u(J(e, b[2] - a[0] - a[2]), c), b[1] += (a[0] - a[2]) / 2);
                e < b[2] ? (b[2] = e, this.translate(b), o(this.points, function (a) {
                    if (a.dataLabel)a.dataLabel._pos = null
                }), this.drawDataLabels()) :
                    f = !0;
                return f
            }, placeDataLabels: function () {
                o(this.points, function (a) {
                    var a = a.dataLabel, b;
                    if (a)(b = a._pos) ? (a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({y: -999})
                })
            }, alignDataLabel: ya, drawTracker: E.prototype.drawTracker, drawLegendSymbol: L.prototype.drawLegendSymbol, getSymbol: ya};
        X = ha(Q, X);
        aa.pie = X;
        r(Aa, {Axis: fb, Chart: Ab, Color: pa, Legend: zb, Pointer: yb, Point: Ra, Tick: Na, Tooltip: xb, Renderer: Xa, Series: Q, SVGElement: wa, SVGRenderer: Ia, arrayMin: Ka, arrayMax: ua, charts: Ha, dateFormat: Za, format: Da,
            pathAnim: Cb, getOptions: function () {
                return O
            }, hasBidiBug: mb, isTouchDevice: Rb, numberFormat: Ba, seriesTypes: aa, setOptions: function (a) {
                O = w(O, a);
                Ob();
                return O
            }, addEvent: K, removeEvent: ba, createElement: U, discardElement: Va, css: M, each: o, extend: r, map: Pa, merge: w, pick: n, splat: ia, extendClass: ha, pInt: A, wrap: Eb, svg: Z, canvas: $, vml: !Z && !$, product: "Highcharts", version: "3.0.3"})
    })();
    nb.exports = Aa
});
