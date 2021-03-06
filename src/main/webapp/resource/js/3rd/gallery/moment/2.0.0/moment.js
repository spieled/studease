define("gallery/moment/2.0.0/moment", [], function (t, n, e) {
    function s(t, n) {
        return function (e) {
            return c(t.call(this, e), n)
        }
    }

    function r(t) {
        return function (n) {
            return this.lang().ordinal(t.call(this, n))
        }
    }

    function a() {
    }

    function i(t) {
        u(this, t)
    }

    function o(t) {
        var n = this._data = {}, e = t.years || t.year || t.y || 0, s = t.months || t.month || t.M || 0, r = t.weeks || t.week || t.w || 0, a = t.days || t.day || t.d || 0, i = t.hours || t.hour || t.h || 0, o = t.minutes || t.minute || t.m || 0, u = t.seconds || t.second || t.s || 0, c = t.milliseconds || t.millisecond || t.ms || 0;
        this._milliseconds = c + 1e3 * u + 6e4 * o + 36e5 * i, this._days = a + 7 * r, this._months = s + 12 * e, n.milliseconds = c % 1e3, u += d(c / 1e3), n.seconds = u % 60, o += d(u / 60), n.minutes = o % 60, i += d(o / 60), n.hours = i % 24, a += d(i / 24), a += 7 * r, n.days = a % 30, s += d(a / 30), n.months = s % 12, e += d(s / 12), n.years = e
    }

    function u(t, n) {
        for (var e in n)n.hasOwnProperty(e) && (t[e] = n[e]);
        return t
    }

    function d(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function c(t, n) {
        for (var e = t + ""; n > e.length;)e = "0" + e;
        return e
    }

    function h(t, n, e) {
        var s, r = n._milliseconds, a = n._days, i = n._months;
        r && t._d.setTime(+t + r * e), a && t.date(t.date() + a * e), i && (s = t.date(), t.date(1).month(t.month() + i * e).date(Math.min(s, t.daysInMonth())))
    }

    function f(t) {
        return"[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t, n) {
        var e, s = Math.min(t.length, n.length), r = Math.abs(t.length - n.length), a = 0;
        for (e = 0; s > e; e++)~~t[e] !== ~~n[e] && a++;
        return a + r
    }

    function _(t, n) {
        return n.abbr = t, Z[t] || (Z[t] = new a), Z[t].set(n), Z[t]
    }

    function m(n) {
        return n ? (!Z[n] && A && t("./lang/" + n), Z[n]) : C.fn._lang
    }

    function y(t) {
        return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function M(t) {
        var n, e, s = t.match(J);
        for (n = 0, e = s.length; e > n; n++)s[n] = on[s[n]] ? on[s[n]] : y(s[n]);
        return function (r) {
            var a = "";
            for (n = 0; e > n; n++)a += "function" == typeof s[n].call ? s[n].call(r, t) : s[n];
            return a
        }
    }

    function D(t, n) {
        function e(n) {
            return t.lang().longDateFormat(n) || n
        }

        for (var s = 5; s-- && V.test(n);)n = n.replace(V, e);
        return sn[n] || (sn[n] = M(n)), sn[n](t)
    }

    function Y(t) {
        switch (t) {
            case"DDDD":
                return $;
            case"YYYY":
                return I;
            case"YYYYY":
                return X;
            case"S":
            case"SS":
            case"SSS":
            case"DDD":
                return N;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
            case"a":
            case"A":
                return j;
            case"X":
                return G;
            case"Z":
            case"ZZ":
                return R;
            case"T":
                return B;
            case"MM":
            case"DD":
            case"YY":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
                return E;
            default:
                return RegExp(t.replace("\\", ""))
        }
    }

    function p(t, n, e) {
        var s, r = e._a;
        switch (t) {
            case"M":
            case"MM":
                r[1] = null == n ? 0 : ~~n - 1;
                break;
            case"MMM":
            case"MMMM":
                s = m(e._l).monthsParse(n), null != s ? r[1] = s : e._isValid = !1;
                break;
            case"D":
            case"DD":
            case"DDD":
            case"DDDD":
                null != n && (r[2] = ~~n);
                break;
            case"YY":
                r[0] = ~~n + (~~n > 68 ? 1900 : 2e3);
                break;
            case"YYYY":
            case"YYYYY":
                r[0] = ~~n;
                break;
            case"a":
            case"A":
                e._isPm = "pm" === (n + "").toLowerCase();
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                r[3] = ~~n;
                break;
            case"m":
            case"mm":
                r[4] = ~~n;
                break;
            case"s":
            case"ss":
                r[5] = ~~n;
                break;
            case"S":
            case"SS":
            case"SSS":
                r[6] = ~~(1e3 * ("0." + n));
                break;
            case"X":
                e._d = new Date(1e3 * parseFloat(n));
                break;
            case"Z":
            case"ZZ":
                e._useUTC = !0, s = (n + "").match(tn), s && s[1] && (e._tzh = ~~s[1]), s && s[2] && (e._tzm = ~~s[2]), s && "+" === s[0] && (e._tzh = -e._tzh, e._tzm = -e._tzm)
        }
        null == n && (e._isValid = !1)
    }

    function g(t) {
        var n, e, s = [];
        if (!t._d) {
            for (n = 0; 7 > n; n++)t._a[n] = s[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
            s[3] += t._tzh || 0, s[4] += t._tzm || 0, e = new Date(0), t._useUTC ? (e.setUTCFullYear(s[0], s[1], s[2]), e.setUTCHours(s[3], s[4], s[5], s[6])) : (e.setFullYear(s[0], s[1], s[2]), e.setHours(s[3], s[4], s[5], s[6])), t._d = e
        }
    }

    function w(t) {
        var n, e, s = t._f.match(J), r = t._i;
        for (t._a = [], n = 0; s.length > n; n++)e = (Y(s[n]).exec(r) || [])[0], e && (r = r.slice(r.indexOf(e) + e.length)), on[s[n]] && p(s[n], e, t);
        t._isPm && 12 > t._a[3] && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), g(t)
    }

    function v(t) {
        for (var n, e, s, r, a = 99; t._f.length;) {
            if (n = u({}, t), n._f = t._f.pop(), w(n), e = new i(n), e.isValid()) {
                s = e;
                break
            }
            r = l(n._a, e.toArray()), a > r && (a = r, s = e)
        }
        u(t, s)
    }

    function T(t) {
        var n, e = t._i;
        if (q.exec(e)) {
            for (t._f = "YYYY-MM-DDT", n = 0; 4 > n; n++)if (Q[n][1].exec(e)) {
                t._f += Q[n][0];
                break
            }
            R.exec(e) && (t._f += " Z"), w(t)
        } else t._d = new Date(e)
    }

    function k(t) {
        var n = t._i, e = P.exec(n);
        void 0 === n ? t._d = new Date : e ? t._d = new Date(+e[1]) : "string" == typeof n ? T(t) : f(n) ? (t._a = n.slice(0), g(t)) : t._d = n instanceof Date ? new Date(+n) : new Date(n)
    }

    function S(t, n, e, s, r) {
        return r.relativeTime(n || 1, !!e, t, s)
    }

    function b(t, n, e) {
        var s = W(Math.abs(t) / 1e3), r = W(s / 60), a = W(r / 60), i = W(a / 24), o = W(i / 365), u = 45 > s && ["s", s] || 1 === r && ["m"] || 45 > r && ["mm", r] || 1 === a && ["h"] || 22 > a && ["hh", a] || 1 === i && ["d"] || 25 >= i && ["dd", i] || 45 >= i && ["M"] || 345 > i && ["MM", W(i / 30)] || 1 === o && ["y"] || ["yy", o];
        return u[2] = n, u[3] = t > 0, u[4] = e, S.apply({}, u)
    }

    function F(t, n, e) {
        var s = e - n, r = e - t.day();
        return r > s && (r -= 7), s - 7 > r && (r += 7), Math.ceil(C(t).add("d", r).dayOfYear() / 7)
    }

    function H(t) {
        var n = t._i, e = t._f;
        return null === n || "" === n ? null : ("string" == typeof n && (t._i = n = m().preparse(n)), C.isMoment(n) ? (t = u({}, n), t._d = new Date(+n._d)) : e ? f(e) ? v(t) : w(t) : k(t), new i(t))
    }

    function L(t, n) {
        C.fn[t] = C.fn[t + "s"] = function (t) {
            var e = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + e + n](t), this) : this._d["get" + e + n]()
        }
    }

    function O(t) {
        C.duration.fn[t] = function () {
            return this._data[t]
        }
    }

    function z(t, n) {
        C.duration.fn["as" + t] = function () {
            return+this / n
        }
    }

    for (var C, U, x = "2.0.0", W = Math.round, Z = {}, A = e !== void 0 && e.exports, P = /^\/?Date\((\-?\d+)/i, J = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, V = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, E = /\d\d?/, N = /\d{1,3}/, $ = /\d{3}/, I = /\d{1,4}/, X = /[+\-]?\d{1,6}/, j = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, R = /Z|[\+\-]\d\d:?\d\d/i, B = /T/i, G = /[\+\-]?\d+(\.\d{1,3})?/, q = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, K = "YYYY-MM-DDTHH:mm:ssZ", Q = [
        ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], tn = /([\+\-]|\d\d)/gi, nn = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), en = {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}, sn = {}, rn = "DDD w W M D d".split(" "), an = "M D H h m s w W".split(" "), on = {M: function () {
        return this.month() + 1
    }, MMM: function (t) {
        return this.lang().monthsShort(this, t)
    }, MMMM: function (t) {
        return this.lang().months(this, t)
    }, D: function () {
        return this.date()
    }, DDD: function () {
        return this.dayOfYear()
    }, d: function () {
        return this.day()
    }, dd: function (t) {
        return this.lang().weekdaysMin(this, t)
    }, ddd: function (t) {
        return this.lang().weekdaysShort(this, t)
    }, dddd: function (t) {
        return this.lang().weekdays(this, t)
    }, w: function () {
        return this.week()
    }, W: function () {
        return this.isoWeek()
    }, YY: function () {
        return c(this.year() % 100, 2)
    }, YYYY: function () {
        return c(this.year(), 4)
    }, YYYYY: function () {
        return c(this.year(), 5)
    }, a: function () {
        return this.lang().meridiem(this.hours(), this.minutes(), !0)
    }, A: function () {
        return this.lang().meridiem(this.hours(), this.minutes(), !1)
    }, H: function () {
        return this.hours()
    }, h: function () {
        return this.hours() % 12 || 12
    }, m: function () {
        return this.minutes()
    }, s: function () {
        return this.seconds()
    }, S: function () {
        return~~(this.milliseconds() / 100)
    }, SS: function () {
        return c(~~(this.milliseconds() / 10), 2)
    }, SSS: function () {
        return c(this.milliseconds(), 3)
    }, Z: function () {
        var t = -this.zone(), n = "+";
        return 0 > t && (t = -t, n = "-"), n + c(~~(t / 60), 2) + ":" + c(~~t % 60, 2)
    }, ZZ: function () {
        var t = -this.zone(), n = "+";
        return 0 > t && (t = -t, n = "-"), n + c(~~(10 * t / 6), 4)
    }, X: function () {
        return this.unix()
    }}; rn.length;)U = rn.pop(), on[U + "o"] = r(on[U]);
    for (; an.length;)U = an.pop(), on[U + U] = s(on[U], 2);
    for (on.DDDD = s(on.DDD, 3), a.prototype = {set: function (t) {
        var n, e;
        for (e in t)n = t[e], "function" == typeof n ? this[e] = n : this["_" + e] = n
    }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (t) {
        return this._months[t.month()]
    }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (t) {
        return this._monthsShort[t.month()]
    }, monthsParse: function (t) {
        var n, e, s;
        for (this._monthsParse || (this._monthsParse = []), n = 0; 12 > n; n++)if (this._monthsParse[n] || (e = C([2e3, n]), s = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[n] = RegExp(s.replace(".", ""), "i")), this._monthsParse[n].test(t))return n
    }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (t) {
        return this._weekdays[t.day()]
    }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (t) {
        return this._weekdaysShort[t.day()]
    }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (t) {
        return this._weekdaysMin[t.day()]
    }, _longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, longDateFormat: function (t) {
        var n = this._longDateFormat[t];
        return!n && this._longDateFormat[t.toUpperCase()] && (n = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t] = n), n
    }, meridiem: function (t, n, e) {
        return t > 11 ? e ? "pm" : "PM" : e ? "am" : "AM"
    }, _calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[last] dddd [at] LT", sameElse: "L"}, calendar: function (t, n) {
        var e = this._calendar[t];
        return"function" == typeof e ? e.apply(n) : e
    }, _relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function (t, n, e, s) {
        var r = this._relativeTime[e];
        return"function" == typeof r ? r(t, n, e, s) : r.replace(/%d/i, t)
    }, pastFuture: function (t, n) {
        var e = this._relativeTime[t > 0 ? "future" : "past"];
        return"function" == typeof e ? e(n) : e.replace(/%s/i, n)
    }, ordinal: function (t) {
        return this._ordinal.replace("%d", t)
    }, _ordinal: "%d", preparse: function (t) {
        return t
    }, postformat: function (t) {
        return t
    }, week: function (t) {
        return F(t, this._week.dow, this._week.doy)
    }, _week: {dow: 0, doy: 6}}, C = function (t, n, e) {
        return H({_i: t, _f: n, _l: e, _isUTC: !1})
    }, C.utc = function (t, n, e) {
        return H({_useUTC: !0, _isUTC: !0, _l: e, _i: t, _f: n})
    }, C.unix = function (t) {
        return C(1e3 * t)
    }, C.duration = function (t, n) {
        var e, s = C.isDuration(t), r = "number" == typeof t, a = s ? t._data : r ? {} : t;
        return r && (n ? a[n] = t : a.milliseconds = t), e = new o(a), s && t.hasOwnProperty("_lang") && (e._lang = t._lang), e
    }, C.version = x, C.defaultFormat = K, C.lang = function (t, n) {
        return t ? (n ? _(t, n) : Z[t] || m(t), C.duration.fn._lang = C.fn._lang = m(t), void 0) : C.fn._lang._abbr
    }, C.langData = function (t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), m(t)
    }, C.isMoment = function (t) {
        return t instanceof i
    }, C.isDuration = function (t) {
        return t instanceof o
    }, C.fn = i.prototype = {clone: function () {
        return C(this)
    }, valueOf: function () {
        return+this._d
    }, unix: function () {
        return Math.floor(+this._d / 1e3)
    }, toString: function () {
        return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, toDate: function () {
        return this._d
    }, toJSON: function () {
        return C.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }, toArray: function () {
        var t = this;
        return[t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
    }, isValid: function () {
        return null == this._isValid && (this._isValid = this._a ? !l(this._a, (this._isUTC ? C.utc(this._a) : C(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
    }, utc: function () {
        return this._isUTC = !0, this
    }, local: function () {
        return this._isUTC = !1, this
    }, format: function (t) {
        var n = D(this, t || C.defaultFormat);
        return this.lang().postformat(n)
    }, add: function (t, n) {
        var e;
        return e = "string" == typeof t ? C.duration(+n, t) : C.duration(t, n), h(this, e, 1), this
    }, subtract: function (t, n) {
        var e;
        return e = "string" == typeof t ? C.duration(+n, t) : C.duration(t, n), h(this, e, -1), this
    }, diff: function (t, n, e) {
        var s, r, a = this._isUTC ? C(t).utc() : C(t).local(), i = 6e4 * (this.zone() - a.zone());
        return n && (n = n.replace(/s$/, "")), "year" === n || "month" === n ? (s = 432e5 * (this.daysInMonth() + a.daysInMonth()), r = 12 * (this.year() - a.year()) + (this.month() - a.month()), r += (this - C(this).startOf("month") - (a - C(a).startOf("month"))) / s, "year" === n && (r /= 12)) : (s = this - a - i, r = "second" === n ? s / 1e3 : "minute" === n ? s / 6e4 : "hour" === n ? s / 36e5 : "day" === n ? s / 864e5 : "week" === n ? s / 6048e5 : s), e ? r : d(r)
    }, from: function (t, n) {
        return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!n)
    }, fromNow: function (t) {
        return this.from(C(), t)
    }, calendar: function () {
        var t = this.diff(C().startOf("day"), "days", !0), n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(n, this))
    }, isLeapYear: function () {
        var t = this.year();
        return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
    }, isDST: function () {
        return this.zone() < C([this.year()]).zone() || this.zone() < C([this.year(), 5]).zone()
    }, day: function (t) {
        var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null == t ? n : this.add({d: t - n})
    }, startOf: function (t) {
        switch (t = t.replace(/s$/, "")) {
            case"year":
                this.month(0);
            case"month":
                this.date(1);
            case"week":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return"week" === t && this.day(0), this
    }, endOf: function (t) {
        return this.startOf(t).add(t.replace(/s?$/, "s"), 1).subtract("ms", 1)
    }, isAfter: function (t, n) {
        return n = n !== void 0 ? n : "millisecond", +this.clone().startOf(n) > +C(t).startOf(n)
    }, isBefore: function (t, n) {
        return n = n !== void 0 ? n : "millisecond", +this.clone().startOf(n) < +C(t).startOf(n)
    }, isSame: function (t, n) {
        return n = n !== void 0 ? n : "millisecond", +this.clone().startOf(n) === +C(t).startOf(n)
    }, zone: function () {
        return this._isUTC ? 0 : this._d.getTimezoneOffset()
    }, daysInMonth: function () {
        return C.utc([this.year(), this.month() + 1, 0]).date()
    }, dayOfYear: function (t) {
        var n = W((C(this).startOf("day") - C(this).startOf("year")) / 864e5) + 1;
        return null == t ? n : this.add("d", t - n)
    }, isoWeek: function (t) {
        var n = F(this, 1, 4);
        return null == t ? n : this.add("d", 7 * (t - n))
    }, week: function (t) {
        var n = this.lang().week(this);
        return null == t ? n : this.add("d", 7 * (t - n))
    }, lang: function (t) {
        return void 0 === t ? this._lang : (this._lang = m(t), this)
    }}, U = 0; nn.length > U; U++)L(nn[U].toLowerCase().replace(/s$/, ""), nn[U]);
    L("year", "FullYear"), C.fn.days = C.fn.day, C.fn.weeks = C.fn.week, C.fn.isoWeeks = C.fn.isoWeek, C.duration.fn = o.prototype = {weeks: function () {
        return d(this.days() / 7)
    }, valueOf: function () {
        return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
    }, humanize: function (t) {
        var n = +this, e = b(n, !t, this.lang());
        return t && (e = this.lang().pastFuture(n, e)), this.lang().postformat(e)
    }, lang: C.fn.lang};
    for (U in en)en.hasOwnProperty(U) && (z(U, en[U]), O(U.toLowerCase()));
    z("Weeks", 6048e5), C.lang("en", {ordinal: function (t) {
        var n = t % 10, e = 1 === ~~(t % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th";
        return t + e
    }}), e.exports = C
});
