function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function (n) {
        var f = "",
            e,
            t,
            i,
            s,
            h,
            o,
            r,
            u = 0;
        for (n = _utf8_encode(n); u < n.length; )
            (e = n.charCodeAt(u++)),
                (t = n.charCodeAt(u++)),
                (i = n.charCodeAt(u++)),
                (s = e >> 2),
                (h = ((e & 3) << 4) | (t >> 4)),
                (o = ((t & 15) << 2) | (i >> 6)),
                (r = i & 63),
                isNaN(t) ? (o = r = 64) : isNaN(i) && (r = 64),
                (f = f + _keyStr.charAt(s) + _keyStr.charAt(h) + _keyStr.charAt(o) + _keyStr.charAt(r));
        return f;
    };
    this.decode = function (n) {
        var t = "",
            e,
            o,
            s,
            h,
            u,
            r,
            f,
            i = 0;
        for (n = n.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < n.length; )
            (h = _keyStr.indexOf(n.charAt(i++))),
                (u = _keyStr.indexOf(n.charAt(i++))),
                (r = _keyStr.indexOf(n.charAt(i++))),
                (f = _keyStr.indexOf(n.charAt(i++))),
                (e = (h << 2) | (u >> 4)),
                (o = ((u & 15) << 4) | (r >> 2)),
                (s = ((r & 3) << 6) | f),
                (t = t + String.fromCharCode(e)),
                r != 64 && (t = t + String.fromCharCode(o)),
                f != 64 && (t = t + String.fromCharCode(s));
        return _utf8_decode(t);
    };
    _utf8_encode = function (n) {
        var i, r, t;
        for (n = n.replace(/\r\n/g, "\n"), i = "", r = 0; r < n.length; r++)
            (t = n.charCodeAt(r)),
                t < 128
                    ? (i += String.fromCharCode(t))
                    : t > 127 && t < 2048
                      ? ((i += String.fromCharCode((t >> 6) | 192)), (i += String.fromCharCode((t & 63) | 128)))
                      : ((i += String.fromCharCode((t >> 12) | 224)),
                        (i += String.fromCharCode(((t >> 6) & 63) | 128)),
                        (i += String.fromCharCode((t & 63) | 128)));
        return i;
    };
    _utf8_decode = function (n) {
        for (var r = "", t = 0, i = (c1 = c2 = 0); t < n.length; )
            (i = n.charCodeAt(t)),
                i < 128
                    ? ((r += String.fromCharCode(i)), t++)
                    : i > 191 && i < 224
                      ? ((c2 = n.charCodeAt(t + 1)), (r += String.fromCharCode(((i & 31) << 6) | (c2 & 63))), (t += 2))
                      : ((c2 = n.charCodeAt(t + 1)),
                        (c3 = n.charCodeAt(t + 2)),
                        (r += String.fromCharCode(((i & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))),
                        (t += 3));
        return r;
    };
}
function _0x43bd() {
    var n = [
        "&DC_",
        "cdef",
        "toSt",
        "subs",
        "a372",
        "1529256OKtegX",
        "2567575WYMovn",
        "tamp",
        "TIME",
        "imeS",
        "toUp",
        "b3f8",
        "zROt",
        "floo",
        "78f8",
        "89ab",
        "f54c",
        "QRST",
        "CDEF",
        "vice",
        "7451",
        "7372",
        "3211560QQieSz",
        "zNIR",
        "-twe",
        "equo",
        "abc",
        "conc",
        "811f",
        "uokh",
        "3f7d",
        "3317",
        "0123",
        "ust",
        "-ser",
        "opqr",
        "EFGH",
        "NSPx",
        "FCOY",
        "perC",
        "UoFT",
        "Jccs",
        "0837",
        "7te1",
        "1737",
        "lmZb",
        "8a37",
        "char",
        "173222XBBwWV",
        "getT",
        "cda4",
        "yLYL",
        "ime",
        "STAM",
        "Code",
        "11ff",
        "4fb0",
        "HgKE",
        "581364JLgLvg",
        "from",
        "2331",
        "werC",
        "MNOP",
        "time",
        "4567",
        "sgir",
        "iTzt",
        "IJKL",
        "5465",
        "da42",
        "otes",
        "dcqu",
        "9bae",
        "FAEY",
        "toLo",
        "xqha",
        "6fJAGtc",
        "wxyz",
        "ring",
        "28e1",
        "APP_",
        "89+/",
        "ab54",
        "Char",
        "stuv",
        "klmn",
        "817524LKvTCn",
        "AIwY",
        "ase",
        "YZab",
        "UVWX",
        "leng",
        "552924hqiFht",
        "SIGN",
        "ceil",
        "te18",
        "KEY=",
        "2705",
        "7f72",
        "log",
        "aram",
        "CFeG",
        "KeEd",
        "4c7e",
    ];
    return (
        (_0x43bd = function () {
            return n;
        }),
        _0x43bd()
    );
}
function _0x4bbb(n, t) {
    var i = _0x43bd();
    return (
        (_0x4bbb = function (n) {
            n = n - 355;
            return i[n];
        }),
        _0x4bbb(n, t)
    );
}
var lib_emtrade_quote, EMTradeEncrypt, EmbedTools, EmbedPCTools;
(function (n, t) {
    function yu(n) {
        var t = (wt[n] = {});
        return (
            i.each(n.split(h), function (n, i) {
                t[i] = !0;
            }),
            t
        );
    }
    function ui(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(sr, "-$1").toLowerCase();
            if (((u = n.getAttribute(f)), typeof u == "string")) {
                try {
                    u =
                        u === "true"
                            ? !0
                            : u === "false"
                              ? !1
                              : u === "null"
                                ? null
                                : +u + "" === u
                                  ? +u
                                  : or.test(u)
                                    ? i.parseJSON(u)
                                    : u;
                } catch (e) {}
                i.data(n, r, u);
            } else u = t;
        }
        return u;
    }
    function at(n) {
        var t;
        for (t in n) if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0;
    }
    function v() {
        return !1;
    }
    function g() {
        return !0;
    }
    function k(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11;
    }
    function fi(n, t) {
        do n = n[t];
        while (n && n.nodeType !== 1);
        return n;
    }
    function ei(n, t, r) {
        if (((t = t || 0), i.isFunction(t)))
            return i.grep(n, function (n, i) {
                var u = !!t.call(n, i, n);
                return u === r;
            });
        if (t.nodeType)
            return i.grep(n, function (n) {
                return (n === t) === r;
            });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1;
            });
            if (fe.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u);
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r;
        });
    }
    function oi(n) {
        var i = kr.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t;
    }
    function pu(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t));
    }
    function si(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u,
                f,
                o,
                s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e) for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f]);
            }
            r.data && (r.data = i.extend({}, r.data));
        }
    }
    function hi(n, t) {
        var r;
        t.nodeType === 1 &&
            (t.clearAttributes && t.clearAttributes(),
            t.mergeAttributes && t.mergeAttributes(n),
            (r = t.nodeName.toLowerCase()),
            r === "object"
                ? (t.parentNode && (t.outerHTML = n.outerHTML),
                  i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML))
                : r === "input" && nu.test(n.type)
                  ? ((t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value))
                  : r === "option"
                    ? (t.selected = n.defaultSelected)
                    : r === "input" || r === "textarea"
                      ? (t.defaultValue = n.defaultValue)
                      : r === "script" && t.text !== n.text && (t.text = n.text),
            t.removeAttribute(i.expando));
    }
    function nt(n) {
        return typeof n.getElementsByTagName != "undefined"
            ? n.getElementsByTagName("*")
            : typeof n.querySelectorAll != "undefined"
              ? n.querySelectorAll("*")
              : [];
    }
    function ci(n) {
        nu.test(n.type) && (n.defaultChecked = n.checked);
    }
    function li(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = fu.length; i--; )
            if (((t = fu[i] + r), t in n)) return t;
        return u;
    }
    function tt(n, t) {
        return (n = t || n), i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n);
    }
    function ai(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)
            ((r = n[f]), r.style) &&
                ((e[f] = i._data(r, "olddisplay")),
                t
                    ? (!e[f] && r.style.display === "none" && (r.style.display = ""),
                      r.style.display === "" && tt(r) && (e[f] = i._data(r, "olddisplay", wi(r.nodeName))))
                    : ((o = u(r, "display")), !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)
            ((r = n[f]), r.style) &&
                ((t && r.style.display !== "none" && r.style.display !== "") ||
                    (r.style.display = t ? e[f] || "" : "none"));
        return n;
    }
    function vi(n, t, i) {
        var r = be.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
    }
    function yi(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
            r === "margin" && (o += i.css(n, r + c[e], !0)),
                f
                    ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0),
                      r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0))
                    : ((o += parseFloat(u(n, "padding" + c[e])) || 0),
                      r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
        return o;
    }
    function pi(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = !0,
            o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0 || f == null) {
            if (((f = u(n, t)), (f < 0 || f == null) && (f = n.style[t]), ot.test(f))) return f;
            e = o && (i.support.boxSizingReliable || f === n.style[t]);
            f = parseFloat(f) || 0;
        }
        return f + yi(n, t, r || (o ? "border" : "content"), e) + "px";
    }
    function wi(n) {
        if (ti[n]) return ti[n];
        var f = i("<" + n + ">").appendTo(r.body),
            t = f.css("display");
        return (
            f.remove(),
            (t === "none" || t === "") &&
                ((y = r.body.appendChild(
                    y || i.extend(r.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 })
                )),
                (p && y.createElement) ||
                    ((p = (y.contentWindow || y.contentDocument).document),
                    p.write("<!doctype html><html><body>"),
                    p.close()),
                (f = p.body.appendChild(p.createElement(n))),
                (t = u(f, "display")),
                r.body.removeChild(y)),
            (ti[n] = t),
            t
        );
    }
    function vt(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function (t, i) {
                r || to.test(n) ? u(n, i) : vt(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u);
            });
        else if (r || i.type(t) !== "object") u(n, t);
        else for (f in t) vt(n + "[" + f + "]", t[f], r, u);
    }
    function bi(n) {
        return function (t, r) {
            typeof t != "string" && ((r = t), (t = "*"));
            var u,
                o,
                f,
                s = t.toLowerCase().split(h),
                e = 0,
                c = s.length;
            if (i.isFunction(r))
                for (; e < c; e++)
                    (u = s[e]),
                        (f = /^\+/.test(u)),
                        f && (u = u.substr(1) || "*"),
                        (o = n[u] = n[u] || []),
                        o[f ? "unshift" : "push"](r);
        };
    }
    function it(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === ii; h < l && (c || !o); h++)
            (o = s[h](i, r, u)),
                typeof o == "string" && (!c || e[o] ? (o = t) : (i.dataTypes.unshift(o), (o = it(n, i, r, u, o, e))));
        return (c || !o) && !e["*"] && (o = it(n, i, r, u, "*", e)), o;
    }
    function ki(n, r) {
        var u,
            f,
            e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f);
    }
    function wu(n, i, r) {
        var o,
            u,
            e,
            s,
            h = n.contents,
            f = n.dataTypes,
            c = n.responseFields;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in h)
                if (h[u] && h[u].test(o)) {
                    f.unshift(u);
                    break;
                }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break;
                }
                s || (s = u);
            }
            e = e || s;
        }
        if (e) return e !== f[0] && f.unshift(e), r[e];
    }
    function bu(n, t) {
        var i,
            o,
            r,
            e,
            s = n.dataTypes.slice(),
            f = s[0],
            u = {},
            h = 0;
        if ((n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1]))
            for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
        for (; (r = s[++h]); )
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (((i = u[f + " " + r] || u["* " + r]), !i))
                        for (o in u)
                            if (((e = o.split(" ")), e[1] === r && ((i = u[f + " " + e[0]] || u["* " + e[0]]), i))) {
                                i === !0 ? (i = u[o]) : u[o] !== !0 && ((r = e[0]), s.splice(h--, 0, r));
                                break;
                            }
                    if (i !== !0)
                        if (i && n.throws) t = i(t);
                        else
                            try {
                                t = i(t);
                            } catch (c) {
                                return { state: "parsererror", error: i ? c : "No conversion from " + f + " to " + r };
                            }
                }
                f = r;
            }
        return { state: "success", data: t };
    }
    function di() {
        try {
            return new n.XMLHttpRequest();
        } catch (t) {}
    }
    function ku() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function gi() {
        return (
            setTimeout(function () {
                b = t;
            }, 0),
            (b = i.now())
        );
    }
    function du(n, t) {
        i.each(t, function (t, i) {
            for (var u = (d[t] || []).concat(d["*"]), r = 0, f = u.length; r < f; r++) if (u[r].call(n, t, i)) return;
        });
    }
    function nr(n, t, r) {
        var e,
            o = 0,
            c = lt.length,
            f = i.Deferred().always(function () {
                delete h.elem;
            }),
            h = function () {
                for (
                    var o = b || gi(),
                        t = Math.max(0, u.startTime + u.duration - o),
                        s = t / u.duration || 0,
                        i = 1 - s,
                        r = 0,
                        e = u.tweens.length;
                    r < e;
                    r++
                )
                    u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1);
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, { specialEasing: {} }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || gi(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f;
                },
                stop: function (t) {
                    for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this;
                },
            }),
            s = u.props;
        for (gu(s, u.opts.specialEasing); o < c; o++) if (((e = lt[o].call(u, n, s, u.opts)), e)) return e;
        return (
            du(u, s),
            i.isFunction(u.opts.start) && u.opts.start.call(n, u),
            i.fx.timer(i.extend(h, { anim: u, queue: u.opts.queue, elem: n })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        );
    }
    function gu(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (
                ((f = i.camelCase(r)),
                (e = t[f]),
                (u = n[r]),
                i.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
                r !== f && ((n[f] = u), delete n[r]),
                (o = i.cssHooks[f]),
                o && "expand" in o)
            ) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || ((n[r] = u[r]), (t[r] = e));
            } else t[f] = e;
    }
    function nf(n, t, r) {
        var o,
            u,
            a,
            v,
            s,
            y,
            l,
            f,
            b,
            h = this,
            e = n.style,
            p = {},
            w = [],
            c = n.nodeType && tt(n);
        r.queue ||
            ((f = i._queueHooks(n, "fx")),
            f.unqueued == null &&
                ((f.unqueued = 0),
                (b = f.empty.fire),
                (f.empty.fire = function () {
                    f.unqueued || b();
                })),
            f.unqueued++,
            h.always(function () {
                h.always(function () {
                    f.unqueued--;
                    i.queue(n, "fx").length || f.empty.fire();
                });
            }));
        n.nodeType === 1 &&
            ("height" in t || "width" in t) &&
            ((r.overflow = [e.overflow, e.overflowX, e.overflowY]),
            i.css(n, "display") === "inline" &&
                i.css(n, "float") === "none" &&
                (!i.support.inlineBlockNeedsLayout || wi(n.nodeName) === "inline"
                    ? (e.display = "inline-block")
                    : (e.zoom = 1)));
        r.overflow &&
            ((e.overflow = "hidden"),
            i.support.shrinkWrapBlocks ||
                h.done(function () {
                    e.overflow = r.overflow[0];
                    e.overflowX = r.overflow[1];
                    e.overflowY = r.overflow[2];
                }));
        for (o in t)
            if (((a = t[o]), ao.exec(a))) {
                if ((delete t[o], (y = y || a === "toggle"), a === (c ? "hide" : "show"))) continue;
                w.push(o);
            }
        if (((v = w.length), v))
            for (
                s = i._data(n, "fxshow") || i._data(n, "fxshow", {}),
                    ("hidden" in s) && (c = s.hidden),
                    y && (s.hidden = !c),
                    c
                        ? i(n).show()
                        : h.done(function () {
                              i(n).hide();
                          }),
                    h.done(function () {
                        var t;
                        i.removeData(n, "fxshow", !0);
                        for (t in p) i.style(n, t, p[t]);
                    }),
                    o = 0;
                o < v;
                o++
            )
                (u = w[o]),
                    (l = h.createTween(u, c ? s[u] : 0)),
                    (p[u] = s[u] || i.style(n, u)),
                    u in s ||
                        ((s[u] = l.start),
                        c && ((l.end = l.start), (l.start = u === "width" || u === "height" ? 1 : 0)));
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u);
    }
    function rt(n, t) {
        var r,
            i = { height: n },
            u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) (r = c[u]), (i["margin" + r] = i["padding" + r] = n);
        return t && (i.opacity = i.width = n), i;
    }
    function tr(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1;
    }
    var ir,
        ut,
        r = n.document,
        tf = n.location,
        rf = n.navigator,
        uf = n.jQuery,
        ff = n.$,
        rr = Array.prototype.push,
        o = Array.prototype.slice,
        ur = Array.prototype.indexOf,
        ef = Object.prototype.toString,
        yt = Object.prototype.hasOwnProperty,
        pt = String.prototype.trim,
        i = function (n, t) {
            return new i.fn.init(n, t, ir);
        },
        ft = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        of = /\S/,
        h = /\s+/,
        sf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        hf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        fr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        cf = /^[\],:{}\s]*$/,
        lf = /(?:^|:|,)(?:\s*\[)+/g,
        af = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        vf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        yf = /^-ms-/,
        pf = /-([\da-z])/gi,
        wf = function (n, t) {
            return (t + "").toUpperCase();
        },
        et = function () {
            r.addEventListener
                ? (r.removeEventListener("DOMContentLoaded", et, !1), i.ready())
                : r.readyState === "complete" && (r.detachEvent("onreadystatechange", et), i.ready());
        },
        er = {},
        wt,
        or,
        sr,
        w,
        ht,
        vu,
        ri;
    i.fn = i.prototype = {
        constructor: i,
        init: function (n, u, f) {
            var e, o, s;
            if (!n) return this;
            if (n.nodeType) return (this.context = this[0] = n), (this.length = 1), this;
            if (typeof n == "string") {
                if (
                    ((e =
                        n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3
                            ? [null, n, null]
                            : hf.exec(n)),
                    e && (e[1] || !u))
                ) {
                    if (e[1])
                        return (
                            (u = u instanceof i ? u[0] : u),
                            (s = u && u.nodeType ? u.ownerDocument || u : r),
                            (n = i.parseHTML(e[1], s, !0)),
                            fr.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0),
                            i.merge(this, n)
                        );
                    if (((o = r.getElementById(e[2])), o && o.parentNode)) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1;
                        this[0] = o;
                    }
                    return (this.context = r), (this.selector = n), this;
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
            }
            return i.isFunction(n)
                ? f.ready(n)
                : (n.selector !== t && ((this.selector = n.selector), (this.context = n.context)),
                  i.makeArray(n, this));
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length;
        },
        toArray: function () {
            return o.call(this);
        },
        get: function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n];
        },
        pushStack: function (n, t, r) {
            var u = i.merge(this.constructor(), n);
            return (
                (u.prevObject = this),
                (u.context = this.context),
                t === "find"
                    ? (u.selector = this.selector + (this.selector ? " " : "") + r)
                    : t && (u.selector = this.selector + "." + t + "(" + r + ")"),
                u
            );
        },
        each: function (n, t) {
            return i.each(this, n, t);
        },
        ready: function (n) {
            return i.ready.promise().done(n), this;
        },
        eq: function (n) {
            return (n = +n), n === -1 ? this.slice(n) : this.slice(n, n + 1);
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","));
        },
        map: function (n) {
            return this.pushStack(
                i.map(this, function (t, i) {
                    return n.call(t, i, t);
                })
            );
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: rr,
        sort: [].sort,
        splice: [].splice,
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function () {
        var o,
            e,
            u,
            r,
            s,
            h,
            n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for (
            typeof n == "boolean" && ((c = n), (n = arguments[1] || {}), (f = 2)),
                typeof n != "object" && !i.isFunction(n) && (n = {}),
                l === f && ((n = this), --f);
            f < l;
            f++
        )
            if ((o = arguments[f]) != null)
                for (e in o)
                    ((u = n[e]), (r = o[e]), n !== r) &&
                        (c && r && (i.isPlainObject(r) || (s = i.isArray(r)))
                            ? (s
                                  ? ((s = !1), (h = u && i.isArray(u) ? u : []))
                                  : (h = u && i.isPlainObject(u) ? u : {}),
                              (n[e] = i.extend(c, h, r)))
                            : r !== t && (n[e] = r));
        return n;
    };
    i.extend({
        noConflict: function (t) {
            return n.$ === i && (n.$ = ff), t && n.jQuery === i && (n.jQuery = uf), i;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0);
        },
        ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready, 1);
                ((i.isReady = !0), n !== !0 && --i.readyWait > 0) ||
                    (ut.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"));
            }
        },
        isFunction: function (n) {
            return i.type(n) === "function";
        },
        isArray:
            Array.isArray ||
            function (n) {
                return i.type(n) === "array";
            },
        isWindow: function (n) {
            return n != null && n == n.window;
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        type: function (n) {
            return n == null ? String(n) : er[ef.call(n)] || "object";
        },
        isPlainObject: function (n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !yt.call(n, "constructor") && !yt.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1;
            } catch (u) {
                return !1;
            }
            var r;
            for (r in n);
            return r === t || yt.call(n, r);
        },
        isEmptyObject: function (n) {
            var t;
            for (t in n) return !1;
            return !0;
        },
        error: function (n) {
            throw new Error(n);
        },
        parseHTML: function (n, t, u) {
            var f;
            return !n || typeof n != "string"
                ? null
                : (typeof t == "boolean" && ((u = t), (t = 0)),
                  (t = t || r),
                  (f = fr.exec(n))
                      ? [t.createElement(f[1])]
                      : ((f = i.buildFragment([n], t, u ? null : [])),
                        i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)));
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            if (((t = i.trim(t)), n.JSON && n.JSON.parse)) return n.JSON.parse(t);
            if (cf.test(t.replace(af, "@").replace(vf, "]").replace(lf, ""))) return new Function("return " + t)();
            i.error("Invalid JSON: " + t);
        },
        parseXML: function (r) {
            var u, f;
            if (!r || typeof r != "string") return null;
            try {
                n.DOMParser
                    ? ((f = new DOMParser()), (u = f.parseFromString(r, "text/xml")))
                    : ((u = new ActiveXObject("Microsoft.XMLDOM")), (u.async = "false"), u.loadXML(r));
            } catch (e) {
                u = t;
            }
            return (
                (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) &&
                    i.error("Invalid XML: " + r),
                u
            );
        },
        noop: function () {},
        globalEval: function (t) {
            t &&
                of.test(t) &&
                (
                    n.execScript ||
                    function (t) {
                        n.eval.call(n, t);
                    }
                )(t);
        },
        camelCase: function (n) {
            return n.replace(yf, "ms-").replace(pf, wf);
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (n, r, u) {
            var f,
                e = 0,
                o = n.length,
                s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (f in n) if (r.apply(n[f], u) === !1) break;
                } else for (; e < o; ) if (r.apply(n[e++], u) === !1) break;
            } else if (s) {
                for (f in n) if (r.call(n[f], f, n[f]) === !1) break;
            } else for (; e < o; ) if (r.call(n[e], e, n[e++]) === !1) break;
            return n;
        },
        trim:
            pt && !pt.call("﻿ ")
                ? function (n) {
                      return n == null ? "" : pt.call(n);
                  }
                : function (n) {
                      return n == null ? "" : (n + "").replace(sf, "");
                  },
        makeArray: function (n, t) {
            var r,
                u = t || [];
            return (
                n != null &&
                    ((r = i.type(n)),
                    n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n)
                        ? rr.call(u, n)
                        : i.merge(u, n)),
                u
            );
        },
        inArray: function (n, t, i) {
            var r;
            if (t) {
                if (ur) return ur.call(t, n, i);
                for (r = t.length, i = i ? (i < 0 ? Math.max(0, r + i) : i) : 0; i < r; i++)
                    if (i in t && t[i] === n) return i;
            }
            return -1;
        },
        merge: function (n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number") for (; r < f; r++) n[u++] = i[r];
            else while (i[r] !== t) n[u++] = i[r++];
            return (n.length = u), n;
        },
        grep: function (n, t, i) {
            var u,
                f = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) (u = !!t(n[r], r)), i !== u && f.push(n[r]);
            return f;
        },
        map: function (n, r, u) {
            var f,
                h,
                e = [],
                s = 0,
                o = n.length,
                c =
                    n instanceof i ||
                    (o !== t && typeof o == "number" && ((o > 0 && n[0] && n[o - 1]) || o === 0 || i.isArray(n)));
            if (c) for (; s < o; s++) (f = r(n[s], s, u)), f != null && (e[e.length] = f);
            else for (h in n) (f = r(n[h], h, u)), f != null && (e[e.length] = f);
            return e.concat.apply([], e);
        },
        guid: 1,
        proxy: function (n, r) {
            var f, e, u;
            return (
                typeof r == "string" && ((f = n[r]), (r = n), (n = f)),
                i.isFunction(n)
                    ? ((e = o.call(arguments, 2)),
                      (u = function () {
                          return n.apply(r, e.concat(o.call(arguments)));
                      }),
                      (u.guid = n.guid = n.guid || i.guid++),
                      u)
                    : t
            );
        },
        access: function (n, r, u, f, e, o, s) {
            var c,
                l = u == null,
                h = 0,
                a = n.length;
            if (u && typeof u == "object") {
                for (h in u) i.access(n, r, h, u[h], 1, o, f);
                e = 1;
            } else if (f !== t) {
                if (
                    ((c = s === t && i.isFunction(f)),
                    l &&
                        (c
                            ? ((c = r),
                              (r = function (n, t, r) {
                                  return c.call(i(n), r);
                              }))
                            : (r.call(n, f), (r = null))),
                    r)
                )
                    for (; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1;
            }
            return e ? n : l ? r.call(n) : a ? r(n[0], u) : o;
        },
        now: function () {
            return new Date().getTime();
        },
    });
    i.ready.promise = function (t) {
        if (!ut)
            if (((ut = i.Deferred()), r.readyState === "complete")) setTimeout(i.ready, 1);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", et, !1), n.addEventListener("load", i.ready, !1);
            else {
                r.attachEvent("onreadystatechange", et);
                n.attachEvent("onload", i.ready);
                var u = !1;
                try {
                    u = n.frameElement == null && r.documentElement;
                } catch (e) {}
                u &&
                    u.doScroll &&
                    (function f() {
                        if (!i.isReady) {
                            try {
                                u.doScroll("left");
                            } catch (n) {
                                return setTimeout(f, 50);
                            }
                            i.ready();
                        }
                    })();
            }
        return ut.promise(t);
    };
    i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
        er["[object " + t + "]"] = t.toLowerCase();
    });
    ir = i(r);
    wt = {};
    i.Callbacks = function (n) {
        n = typeof n == "string" ? wt[n] || yu(n) : i.extend({}, n);
        var f,
            c,
            o,
            l,
            s,
            e,
            r = [],
            u = !n.once && [],
            a = function (t) {
                for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++)
                    if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break;
                    }
                o = !1;
                r && (u ? u.length && a(u.shift()) : f ? (r = []) : h.disable());
            },
            h = {
                add: function () {
                    if (r) {
                        var t = r.length;
                        (function u(t) {
                            i.each(t, function (t, f) {
                                var e = i.type(f);
                                e === "function"
                                    ? (!n.unique || !h.has(f)) && r.push(f)
                                    : f && f.length && e !== "string" && u(f);
                            });
                        })(arguments);
                        o ? (s = r.length) : f && ((l = t), a(f));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        r &&
                            i.each(arguments, function (n, t) {
                                for (var u; (u = i.inArray(t, r, u)) > -1; )
                                    r.splice(u, 1), o && (u <= s && s--, u <= e && e--);
                            }),
                        this
                    );
                },
                has: function (n) {
                    return i.inArray(n, r) > -1;
                },
                empty: function () {
                    return (r = []), this;
                },
                disable: function () {
                    return (r = u = f = t), this;
                },
                disabled: function () {
                    return !r;
                },
                lock: function () {
                    return (u = t), f || h.disable(), this;
                },
                locked: function () {
                    return !u;
                },
                fireWith: function (n, t) {
                    return (
                        (t = t || []),
                        (t = [n, t.slice ? t.slice() : t]),
                        r && (!c || u) && (o ? u.push(t) : a(t)),
                        this
                    );
                },
                fire: function () {
                    return h.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                },
            };
        return h;
    };
    i.extend({
        Deferred: function (n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")],
                ],
                f = "pending",
                r = {
                    state: function () {
                        return f;
                    },
                    always: function () {
                        return t.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                        var n = arguments;
                        return i
                            .Deferred(function (r) {
                                i.each(u, function (u, f) {
                                    var e = f[0],
                                        o = n[u];
                                    t[f[1]](
                                        i.isFunction(o)
                                            ? function () {
                                                  var n = o.apply(this, arguments);
                                                  n && i.isFunction(n.promise)
                                                      ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify)
                                                      : r[e + "With"](this === t ? r : this, [n]);
                                              }
                                            : r[e]
                                    );
                                });
                                n = null;
                            })
                            .promise();
                    },
                    promise: function (n) {
                        return n != null ? i.extend(n, r) : r;
                    },
                },
                t = {};
            return (
                (r.pipe = r.then),
                i.each(u, function (n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o &&
                        e.add(
                            function () {
                                f = o;
                            },
                            u[n ^ 1][2].disable,
                            u[2][2].lock
                        );
                    t[i[0]] = e.fire;
                    t[i[0] + "With"] = e.fireWith;
                }),
                r.promise(t),
                n && n.call(t, t),
                t
            );
        },
        when: function (n) {
            var t = 0,
                u = o.call(arguments),
                r = u.length,
                e = r !== 1 || (n && i.isFunction(n.promise)) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                c = function (n, t, i) {
                    return function (r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? o.call(arguments) : r;
                        i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i);
                    };
                },
                s,
                l,
                h;
            if (r > 1)
                for (s = new Array(r), l = new Array(r), h = new Array(r); t < r; t++)
                    u[t] && i.isFunction(u[t].promise)
                        ? u[t]
                              .promise()
                              .done(c(t, h, u))
                              .fail(f.reject)
                              .progress(c(t, l, s))
                        : --e;
            return e || f.resolveWith(h, u), f.promise();
        },
    });
    i.support = (function () {
        var u,
            h,
            e,
            c,
            l,
            f,
            o,
            a,
            v,
            s,
            y,
            t = r.createElement("div");
        if (
            (t.setAttribute("className", "t"),
            (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (h = t.getElementsByTagName("*")),
            (e = t.getElementsByTagName("a")[0]),
            !h || !e || !h.length)
        )
            return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1,
        };
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test;
        } catch (p) {
            u.deleteExpando = !1;
        }
        if (
            (!t.addEventListener &&
                t.attachEvent &&
                t.fireEvent &&
                (t.attachEvent(
                    "onclick",
                    (y = function () {
                        u.noCloneEvent = !1;
                    })
                ),
                t.cloneNode(!0).fireEvent("onclick"),
                t.detachEvent("onclick", y)),
            (f = r.createElement("input")),
            (f.value = "t"),
            f.setAttribute("type", "radio"),
            (u.radioValue = f.value === "t"),
            f.setAttribute("checked", "checked"),
            f.setAttribute("name", "t"),
            t.appendChild(f),
            (o = r.createDocumentFragment()),
            o.appendChild(t.lastChild),
            (u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (u.appendChecked = f.checked),
            o.removeChild(f),
            o.appendChild(t),
            t.attachEvent)
        )
            for (v in { submit: !0, change: !0, focusin: !0 })
                (a = "on" + v),
                    (s = a in t),
                    s || (t.setAttribute(a, "return;"), (s = typeof t[a] == "function")),
                    (u[v + "Bubbles"] = s);
        return (
            i(function () {
                var i,
                    t,
                    f,
                    e,
                    h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    o = r.getElementsByTagName("body")[0];
                o &&
                    ((i = r.createElement("div")),
                    (i.style.cssText =
                        "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
                    o.insertBefore(i, o.firstChild),
                    (t = r.createElement("div")),
                    i.appendChild(t),
                    (t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                    (f = t.getElementsByTagName("td")),
                    (f[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
                    (s = f[0].offsetHeight === 0),
                    (f[0].style.display = ""),
                    (f[1].style.display = "none"),
                    (u.reliableHiddenOffsets = s && f[0].offsetHeight === 0),
                    (t.innerHTML = ""),
                    (t.style.cssText =
                        "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
                    (u.boxSizing = t.offsetWidth === 4),
                    (u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1),
                    n.getComputedStyle &&
                        ((u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%"),
                        (u.boxSizingReliable = (n.getComputedStyle(t, null) || { width: "4px" }).width === "4px"),
                        (e = r.createElement("div")),
                        (e.style.cssText = t.style.cssText = h),
                        (e.style.marginRight = e.style.width = "0"),
                        (t.style.width = "1px"),
                        t.appendChild(e),
                        (u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight))),
                    typeof t.style.zoom != "undefined" &&
                        ((t.innerHTML = ""),
                        (t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1"),
                        (u.inlineBlockNeedsLayout = t.offsetWidth === 3),
                        (t.style.display = "block"),
                        (t.style.overflow = "visible"),
                        (t.innerHTML = "<div></div>"),
                        (t.firstChild.style.width = "5px"),
                        (u.shrinkWrapBlocks = t.offsetWidth !== 3),
                        (i.style.zoom = 1)),
                    o.removeChild(i),
                    (i = t = f = e = null));
            }),
            o.removeChild(t),
            (h = e = c = l = f = o = t = null),
            u
        );
    })();
    or = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    sr = /([A-Z])/g;
    i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function (n) {
            return (n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando]), !!n && !at(n);
        },
        data: function (n, r, u, f) {
            if (i.acceptData(n)) {
                var s,
                    h,
                    c = i.expando,
                    a = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if ((e && o[e] && (f || o[e].data)) || !a || u !== t)
                    return (
                        e || (l ? (n[c] = e = i.deletedIds.pop() || i.guid++) : (e = c)),
                        o[e] || ((o[e] = {}), l || (o[e].toJSON = i.noop)),
                        (typeof r == "object" || typeof r == "function") &&
                            (f ? (o[e] = i.extend(o[e], r)) : (o[e].data = i.extend(o[e].data, r))),
                        (s = o[e]),
                        f || (s.data || (s.data = {}), (s = s.data)),
                        u !== t && (s[i.camelCase(r)] = u),
                        a ? ((h = s[r]), h == null && (h = s[i.camelCase(r)])) : (h = s),
                        h
                    );
            }
        },
        removeData: function (n, t, r) {
            if (i.acceptData(n)) {
                var e,
                    o,
                    h,
                    s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && ((e = r ? u[f] : u[f].data), e)) {
                        for (
                            i.isArray(t) ||
                                ((t in e) ? (t = [t]) : ((t = i.camelCase(t)), (t = (t in e) ? [t] : t.split(" ")))),
                                o = 0,
                                h = t.length;
                            o < h;
                            o++
                        )
                            delete e[t[o]];
                        if (!(r ? at : i.isEmptyObject)(e)) return;
                    }
                    (r || (delete u[f].data, at(u[f]))) &&
                        (s
                            ? i.cleanData([n], !0)
                            : i.support.deleteExpando || u != u.window
                              ? delete u[f]
                              : (u[f] = null));
                }
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0);
        },
        acceptData: function (n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || (t !== !0 && n.getAttribute("classid") === t);
        },
    });
    i.fn.extend({
        data: function (n, r) {
            var u,
                s,
                h,
                o,
                l,
                e = this[0],
                c = 0,
                f = null;
            if (n === t) {
                if (this.length && ((f = i.data(e)), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes, l = h.length; c < l; c++)
                        (o = h[c].name), o.indexOf("data-") || ((o = i.camelCase(o.substring(5))), ui(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0);
                }
                return f;
            }
            return typeof n == "object"
                ? this.each(function () {
                      i.data(this, n);
                  })
                : ((u = n.split(".", 2)),
                  (u[1] = u[1] ? "." + u[1] : ""),
                  (s = u[1] + "!"),
                  i.access(
                      this,
                      function (r) {
                          if (r === t)
                              return (
                                  (f = this.triggerHandler("getData" + s, [u[0]])),
                                  f === t && e && ((f = i.data(e, n)), (f = ui(e, n, f))),
                                  f === t && u[1] ? this.data(u[0]) : f
                              );
                          u[1] = r;
                          this.each(function () {
                              var t = i(this);
                              t.triggerHandler("setData" + s, u);
                              i.data(this, n, r);
                              t.triggerHandler("changeData" + s, u);
                          });
                      },
                      null,
                      r,
                      arguments.length > 1,
                      null,
                      !1
                  ));
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n);
            });
        },
    });
    i.extend({
        queue: function (n, t, r) {
            var u;
            if (n)
                return (
                    (t = (t || "fx") + "queue"),
                    (u = i._data(n, t)),
                    r && (!u || i.isArray(r) ? (u = i._data(n, t, i.makeArray(r))) : u.push(r)),
                    u || []
                );
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t);
                };
            u === "inprogress" && ((u = r.shift()), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire();
        },
        _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return (
                i._data(n, r) ||
                i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function () {
                        i.removeData(n, t + "queue", !0);
                        i.removeData(n, r, !0);
                    }),
                })
            );
        },
    });
    i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return (
                typeof n != "string" && ((r = n), (n = "fx"), u--),
                arguments.length < u
                    ? i.queue(this[0], n)
                    : r === t
                      ? this
                      : this.each(function () {
                            var t = i.queue(this, n, r);
                            i._queueHooks(this, n);
                            n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n);
                        })
            );
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n);
            });
        },
        delay: function (n, t) {
            return (
                (n = i.fx ? i.fx.speeds[n] || n : n),
                (t = t || "fx"),
                this.queue(t, function (t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function () {
                        clearTimeout(r);
                    };
                })
            );
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", []);
        },
        promise: function (n, r) {
            var u,
                e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function () {
                    --e || o.resolveWith(f, [f]);
                };
            for (typeof n != "string" && ((r = n), (n = t)), n = n || "fx"; s--; )
                (u = i._data(f[s], n + "queueHooks")), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(r);
        },
    });
    var s,
        hr,
        cr,
        lr = /[\t\r\n]/g,
        bf = /\r/g,
        kf = /^(?:button|input)$/i,
        df = /^(?:button|input|object|select|textarea)$/i,
        gf = /^a(?:rea|)$/i,
        ar =
            /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        vr = i.support.getSetAttribute;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1);
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n);
            });
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1);
        },
        removeProp: function (n) {
            return (
                (n = i.propFix[n] || n),
                this.each(function () {
                    try {
                        this[n] = t;
                        delete this[n];
                    } catch (i) {}
                })
            );
        },
        addClass: function (n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n))
                return this.each(function (t) {
                    i(this).addClass(n.call(this, t, this.className));
                });
            if (n && typeof n == "string")
                for (r = n.split(h), f = 0, o = this.length; f < o; f++)
                    if (((t = this[f]), t.nodeType === 1))
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++)
                                e.indexOf(" " + r[u] + " ") < 0 && (e += r[u] + " ");
                            t.className = i.trim(e);
                        } else t.className = n;
            return this;
        },
        removeClass: function (n) {
            var e, r, u, f, s, o, c;
            if (i.isFunction(n))
                return this.each(function (t) {
                    i(this).removeClass(n.call(this, t, this.className));
                });
            if ((n && typeof n == "string") || n === t)
                for (e = (n || "").split(h), o = 0, c = this.length; o < c; o++)
                    if (((u = this[o]), u.nodeType === 1 && u.className)) {
                        for (r = (" " + u.className + " ").replace(lr, " "), f = 0, s = e.length; f < s; f++)
                            while (r.indexOf(" " + e[f] + " ") >= 0) r = r.replace(" " + e[f] + " ", " ");
                        u.className = n ? i.trim(r) : "";
                    }
            return this;
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n)
                ? this.each(function (r) {
                      i(this).toggleClass(n.call(this, r, this.className, t), t);
                  })
                : this.each(function () {
                      if (r === "string")
                          for (var f, s = 0, o = i(this), e = t, c = n.split(h); (f = c[s++]); )
                              (e = u ? e : !o.hasClass(f)), o[e ? "addClass" : "removeClass"](f);
                      else
                          (r === "undefined" || r === "boolean") &&
                              (this.className && i._data(this, "__className__", this.className),
                              (this.className =
                                  this.className || n === !1 ? "" : i._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(lr, " ").indexOf(i) >= 0)
                    return !0;
            return !1;
        },
        val: function (n) {
            var r,
                u,
                e,
                f = this[0];
            return arguments.length
                ? ((e = i.isFunction(n)),
                  this.each(function (u) {
                      var f,
                          o = i(this);
                      this.nodeType === 1 &&
                          ((f = e ? n.call(this, u, o.val()) : n),
                          f == null
                              ? (f = "")
                              : typeof f == "number"
                                ? (f += "")
                                : i.isArray(f) &&
                                  (f = i.map(f, function (n) {
                                      return n == null ? "" : n + "";
                                  })),
                          (r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]),
                          (r && "set" in r && r.set(this, f, "value") !== t) || (this.value = f));
                  }))
                : f
                  ? ((r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]),
                    r && "get" in r && (u = r.get(f, "value")) !== t
                        ? u
                        : ((u = f.value), typeof u == "string" ? u.replace(bf, "") : u == null ? "" : u))
                  : void 0;
        },
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text;
                },
            },
            select: {
                get: function (n) {
                    for (
                        var e,
                            t,
                            o = n.options,
                            r = n.selectedIndex,
                            u = n.type === "select-one" || r < 0,
                            s = u ? null : [],
                            h = u ? r + 1 : o.length,
                            f = r < 0 ? h : u ? r : 0;
                        f < h;
                        f++
                    )
                        if (
                            ((t = o[f]),
                            (t.selected || f === r) &&
                                (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) &&
                                (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup")))
                        ) {
                            if (((e = i(t).val()), u)) return e;
                            s.push(e);
                        }
                    return s;
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return (
                        i(n)
                            .find("option")
                            .each(function () {
                                this.selected = i.inArray(i(this).val(), r) >= 0;
                            }),
                        r.length || (n.selectedIndex = -1),
                        r
                    );
                },
            },
        },
        attrFn: {},
        attr: function (n, r, u, f) {
            var e,
                o,
                h,
                c = n.nodeType;
            if (n && c !== 3 && c !== 8 && c !== 2) {
                if (f && i.isFunction(i.fn[r])) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (
                    ((h = c !== 1 || !i.isXMLDoc(n)),
                    h && ((r = r.toLowerCase()), (o = i.attrHooks[r] || (ar.test(r) ? hr : s))),
                    u !== t)
                ) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return;
                    }
                    return o && "set" in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u);
                }
                return o && "get" in o && h && (e = o.get(n, r)) !== null
                    ? e
                    : ((e = n.getAttribute(r)), e === null ? t : e);
            }
        },
        removeAttr: function (n, t) {
            var u,
                f,
                r,
                e,
                o = 0;
            if (t && n.nodeType === 1)
                for (f = t.split(h); o < f.length; o++)
                    (r = f[o]),
                        r &&
                            ((u = i.propFix[r] || r),
                            (e = ar.test(r)),
                            e || i.attr(n, r, ""),
                            n.removeAttribute(vr ? r : u),
                            e && u in n && (n[u] = !1));
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (kf.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t;
                    }
                },
            },
            value: {
                get: function (n, t) {
                    return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null;
                },
                set: function (n, t, r) {
                    if (s && i.nodeName(n, "button")) return s.set(n, t, r);
                    n.value = t;
                },
            },
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable",
        },
        prop: function (n, r, u) {
            var e,
                f,
                s,
                o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2)
                return (
                    (s = o !== 1 || !i.isXMLDoc(n)),
                    s && ((r = i.propFix[r] || r), (f = i.propHooks[r])),
                    u !== t
                        ? f && "set" in f && (e = f.set(n, u, r)) !== t
                            ? e
                            : (n[r] = u)
                        : f && "get" in f && (e = f.get(n, r)) !== null
                          ? e
                          : n[r]
                );
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified
                        ? parseInt(i.value, 10)
                        : df.test(n.nodeName) || (gf.test(n.nodeName) && n.href)
                          ? 0
                          : t;
                },
            },
        },
    });
    hr = {
        get: function (n, r) {
            var u,
                f = i.prop(n, r);
            return f === !0 || (typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1)
                ? r.toLowerCase()
                : t;
        },
        set: function (n, t, r) {
            var u;
            return (
                t === !1
                    ? i.removeAttr(n, r)
                    : ((u = i.propFix[r] || r), u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())),
                r
            );
        },
    };
    vr ||
        ((cr = { name: !0, id: !0, coords: !0 }),
        (s = i.valHooks.button =
            {
                get: function (n, i) {
                    var r;
                    return (r = n.getAttributeNode(i)), r && (cr[i] ? r.value !== "" : r.specified) ? r.value : t;
                },
                set: function (n, t, i) {
                    var u = n.getAttributeNode(i);
                    return u || ((u = r.createAttribute(i)), n.setAttributeNode(u)), (u.value = t + "");
                },
            }),
        i.each(["width", "height"], function (n, t) {
            i.attrHooks[t] = i.extend(i.attrHooks[t], {
                set: function (n, i) {
                    if (i === "") return n.setAttribute(t, "auto"), i;
                },
            });
        }),
        (i.attrHooks.contenteditable = {
            get: s.get,
            set: function (n, t, i) {
                t === "" && (t = "false");
                s.set(n, t, i);
            },
        }));
    i.support.hrefNormalized ||
        i.each(["href", "src", "width", "height"], function (n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
                get: function (n) {
                    var i = n.getAttribute(r, 2);
                    return i === null ? t : i;
                },
            });
        });
    i.support.style ||
        (i.attrHooks.style = {
            get: function (n) {
                return n.style.cssText.toLowerCase() || t;
            },
            set: function (n, t) {
                return (n.style.cssText = t + "");
            },
        });
    i.support.optSelected ||
        (i.propHooks.selected = i.extend(i.propHooks.selected, {
            get: function (n) {
                var t = n.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
            },
        }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn ||
        i.each(["radio", "checkbox"], function () {
            i.valHooks[this] = {
                get: function (n) {
                    return n.getAttribute("value") === null ? "on" : n.value;
                },
            };
        });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return (n.checked = i.inArray(i(n).val(), t) >= 0);
            },
        });
    });
    var bt = /^(?:textarea|input|select)$/i,
        yr = /^([^\.]*|)(?:\.(.+)|)$/,
        ne = /(?:^|\s)hover(\.\S+|)\b/,
        te = /^key/,
        ie = /^(?:mouse|contextmenu)|click/,
        pr = /^(?:focusinfocus|focusoutblur)$/,
        wr = function (n) {
            return i.event.special.hover ? n : n.replace(ne, "mouseenter$1 mouseleave$1");
        };
    i.event = {
        add: function (n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
                for (
                    u.handler && ((w = u), (u = w.handler), (e = w.selector)),
                        u.guid || (u.guid = i.guid++),
                        v = a.events,
                        v || (a.events = v = {}),
                        s = a.handle,
                        s ||
                            ((a.handle = s =
                                function (n) {
                                    return typeof i == "undefined" || (!!n && i.event.triggered === n.type)
                                        ? t
                                        : i.event.dispatch.apply(s.elem, arguments);
                                }),
                            (s.elem = n)),
                        r = i.trim(wr(r)).split(" "),
                        y = 0;
                    y < r.length;
                    y++
                )
                    (p = yr.exec(r[y]) || []),
                        (o = p[1]),
                        (b = (p[2] || "").split(".").sort()),
                        (h = i.event.special[o] || {}),
                        (o = (e ? h.delegateType : h.bindType) || o),
                        (h = i.event.special[o] || {}),
                        (l = i.extend(
                            {
                                type: o,
                                origType: p[1],
                                data: f,
                                handler: u,
                                guid: u.guid,
                                selector: e,
                                needsContext: e && i.expr.match.needsContext.test(e),
                                namespace: b.join("."),
                            },
                            w
                        )),
                        (c = v[o]),
                        c ||
                            ((c = v[o] = []),
                            (c.delegateCount = 0),
                            (h.setup && h.setup.call(n, f, b, s) !== !1) ||
                                (n.addEventListener
                                    ? n.addEventListener(o, s, !1)
                                    : n.attachEvent && n.attachEvent("on" + o, s))),
                        h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)),
                        e ? c.splice(c.delegateCount++, 0, l) : c.push(l),
                        (i.event.global[o] = !0);
                n = null;
            }
        },
        global: {},
        remove: function (n, t, r, u, f) {
            var l,
                p,
                e,
                w,
                h,
                b,
                a,
                v,
                c,
                o,
                s,
                y = i.hasData(n) && i._data(n);
            if (y && (v = y.events)) {
                for (t = i.trim(wr(t || "")).split(" "), l = 0; l < t.length; l++) {
                    if (((p = yr.exec(t[l]) || []), (e = w = p[1]), (h = p[2]), !e)) {
                        for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                        continue;
                    }
                    for (
                        c = i.event.special[e] || {},
                            e = (u ? c.delegateType : c.bindType) || e,
                            o = v[e] || [],
                            b = o.length,
                            h = h
                                ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)")
                                : null,
                            a = 0;
                        a < o.length;
                        a++
                    )
                        (s = o[a]),
                            (f || w === s.origType) &&
                                (!r || r.guid === s.guid) &&
                                (!h || h.test(s.namespace)) &&
                                (!u || u === s.selector || (u === "**" && s.selector)) &&
                                (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                    o.length === 0 &&
                        b !== o.length &&
                        ((!c.teardown || c.teardown.call(n, h, y.handle) === !1) && i.removeEvent(n, e, y.handle),
                        delete v[e]);
                }
                i.isEmptyObject(v) && (delete y.handle, i.removeData(n, "events", !0));
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function (u, f, e, o) {
            if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
                var w,
                    d,
                    c,
                    h,
                    l,
                    v,
                    a,
                    y,
                    p,
                    k,
                    s = u.type || u,
                    b = [];
                if (pr.test(s + i.event.triggered)) return;
                if (
                    (s.indexOf("!") >= 0 && ((s = s.slice(0, -1)), (d = !0)),
                    s.indexOf(".") >= 0 && ((b = s.split(".")), (s = b.shift()), b.sort()),
                    (!e || i.event.customEvent[s]) && !i.event.global[s])
                )
                    return;
                if (
                    ((u = typeof u == "object" ? (u[i.expando] ? u : new i.Event(s, u)) : new i.Event(s)),
                    (u.type = s),
                    (u.isTrigger = !0),
                    (u.exclusive = d),
                    (u.namespace = b.join(".")),
                    (u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (v = s.indexOf(":") < 0 ? "on" + s : ""),
                    !e)
                ) {
                    w = i.cache;
                    for (c in w) w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
                    return;
                }
                if (
                    ((u.result = t),
                    u.target || (u.target = e),
                    (f = f != null ? i.makeArray(f) : []),
                    f.unshift(u),
                    (a = i.event.special[s] || {}),
                    a.trigger && a.trigger.apply(e, f) === !1)
                )
                    return;
                if (((p = [[e, a.bindType || s]]), !o && !a.noBubble && !i.isWindow(e))) {
                    for (k = a.delegateType || s, h = pr.test(k + s) ? e : e.parentNode, l = e; h; h = h.parentNode)
                        p.push([h, k]), (l = h);
                    l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k]);
                }
                for (c = 0; c < p.length && !u.isPropagationStopped(); c++)
                    (h = p[c][0]),
                        (u.type = p[c][1]),
                        (y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle")),
                        y && y.apply(h, f),
                        (y = v && h[v]),
                        y && i.acceptData(h) && y.apply && y.apply(h, f) === !1 && u.preventDefault();
                return (
                    (u.type = s),
                    !o &&
                        !u.isDefaultPrevented() &&
                        (!a._default || a._default.apply(e.ownerDocument, f) === !1) &&
                        (s !== "click" || !i.nodeName(e, "a")) &&
                        i.acceptData(e) &&
                        v &&
                        e[s] &&
                        ((s !== "focus" && s !== "blur") || u.target.offsetWidth !== 0) &&
                        !i.isWindow(e) &&
                        ((l = e[v]),
                        l && (e[v] = null),
                        (i.event.triggered = s),
                        e[s](),
                        (i.event.triggered = t),
                        l && (e[v] = l)),
                    u.result
                );
            }
            return;
        },
        dispatch: function (r) {
            r = i.event.fix(r || n.event);
            var f,
                c,
                e,
                l,
                a,
                h,
                v,
                u,
                s,
                y = (i._data(this, "events") || {})[r.type] || [],
                p = y.delegateCount,
                k = o.call(arguments),
                d = !r.exclusive && !r.namespace,
                w = i.event.special[r.type] || {},
                b = [];
            if (((k[0] = r), (r.delegateTarget = this), !w.preDispatch || w.preDispatch.call(this, r) !== !1)) {
                if (p && (!r.button || r.type !== "click"))
                    for (e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0 || r.type !== "click") {
                            for (a = {}, v = [], f = 0; f < p; f++)
                                (u = y[f]),
                                    (s = u.selector),
                                    a[s] === t &&
                                        (a[s] = u.needsContext
                                            ? i(s, this).index(e) >= 0
                                            : i.find(s, this, null, [e]).length),
                                    a[s] && v.push(u);
                            v.length && b.push({ elem: e, matches: v });
                        }
                for (
                    y.length > p && b.push({ elem: this, matches: y.slice(p) }), f = 0;
                    f < b.length && !r.isPropagationStopped();
                    f++
                )
                    for (
                        h = b[f], r.currentTarget = h.elem, c = 0;
                        c < h.matches.length && !r.isImmediatePropagationStopped();
                        c++
                    )
                        (u = h.matches[c]),
                            (d ||
                                (!r.namespace && !u.namespace) ||
                                (r.namespace_re && r.namespace_re.test(u.namespace))) &&
                                ((r.data = u.data),
                                (r.handleObj = u),
                                (l = ((i.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, k)),
                                l !== t && ((r.result = l), l === !1 && (r.preventDefault(), r.stopPropagation())));
                return w.postDispatch && w.postDispatch.call(this, r), r.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (n, i) {
                var o,
                    u,
                    f,
                    e = i.button,
                    s = i.fromElement;
                return (
                    n.pageX == null &&
                        i.clientX != null &&
                        ((o = n.target.ownerDocument || r),
                        (u = o.documentElement),
                        (f = o.body),
                        (n.pageX =
                            i.clientX +
                            ((u && u.scrollLeft) || (f && f.scrollLeft) || 0) -
                            ((u && u.clientLeft) || (f && f.clientLeft) || 0)),
                        (n.pageY =
                            i.clientY +
                            ((u && u.scrollTop) || (f && f.scrollTop) || 0) -
                            ((u && u.clientTop) || (f && f.clientTop) || 0))),
                    !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                    !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                    n
                );
            },
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var f,
                e,
                t = n,
                u = i.event.fixHooks[n.type] || {},
                o = u.props ? this.props.concat(u.props) : this.props;
            for (n = i.Event(t), f = o.length; f; ) (e = o[--f]), (n[e] = t[e]);
            return (
                n.target || (n.target = t.srcElement || r),
                n.target.nodeType === 3 && (n.target = n.target.parentNode),
                (n.metaKey = !!n.metaKey),
                u.filter ? u.filter(n, t) : n
            );
        },
        special: {
            load: { noBubble: !0 },
            focus: { delegateType: "focusin" },
            blur: { delegateType: "focusout" },
            beforeunload: {
                setup: function (n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r);
                },
                teardown: function (n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null);
                },
            },
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event(), r, { type: n, isSimulated: !0, originalEvent: {} });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault();
        },
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener
        ? function (n, t, i) {
              n.removeEventListener && n.removeEventListener(t, i, !1);
          }
        : function (n, t, i) {
              var r = "on" + t;
              n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i));
          };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type
            ? ((this.originalEvent = n),
              (this.type = n.type),
              (this.isDefaultPrevented =
                  n.defaultPrevented || n.returnValue === !1 || (n.getPreventDefault && n.getPreventDefault()) ? g : v))
            : (this.type = n);
        t && i.extend(this, t);
        this.timeStamp = (n && n.timeStamp) || i.now();
        this[i.expando] = !0;
    };
    i.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = g;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1));
        },
        stopPropagation: function () {
            this.isPropagationStopped = g;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(), (n.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g;
            this.stopPropagation();
        },
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
    };
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var f,
                    e = this,
                    r = n.relatedTarget,
                    u = n.handleObj,
                    o = u.selector;
                return (
                    (r && (r === e || i.contains(e, r))) ||
                        ((n.type = u.origType), (f = u.handler.apply(this, arguments)), (n.type = t)),
                    f
                );
            },
        };
    });
    i.support.submitBubbles ||
        (i.event.special.submit = {
            setup: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function (n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r &&
                        !i._data(r, "_submit_attached") &&
                        (i.event.add(r, "submit._submit", function (n) {
                            n._submit_bubble = !0;
                        }),
                        i._data(r, "_submit_attached", !0));
                });
            },
            postDispatch: function (n) {
                n._submit_bubble &&
                    (delete n._submit_bubble,
                    this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0));
            },
            teardown: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit");
            },
        });
    i.support.changeBubbles ||
        (i.event.special.change = {
            setup: function () {
                if (bt.test(this.nodeName))
                    return (
                        (this.type === "checkbox" || this.type === "radio") &&
                            (i.event.add(this, "propertychange._change", function (n) {
                                n.originalEvent.propertyName === "checked" && (this._just_changed = !0);
                            }),
                            i.event.add(this, "click._change", function (n) {
                                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                                i.event.simulate("change", this, n, !0);
                            })),
                        !1
                    );
                i.event.add(this, "beforeactivate._change", function (n) {
                    var t = n.target;
                    bt.test(t.nodeName) &&
                        !i._data(t, "_change_attached") &&
                        (i.event.add(t, "change._change", function (n) {
                            !this.parentNode ||
                                n.isSimulated ||
                                n.isTrigger ||
                                i.event.simulate("change", this.parentNode, n, !0);
                        }),
                        i._data(t, "_change_attached", !0));
                });
            },
            handle: function (n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || (t.type !== "radio" && t.type !== "checkbox"))
                    return n.handleObj.handler.apply(this, arguments);
            },
            teardown: function () {
                return i.event.remove(this, "._change"), !bt.test(this.nodeName);
            },
        });
    i.support.focusinBubbles ||
        i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
            var u = 0,
                f = function (n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0);
                };
            i.event.special[t] = {
                setup: function () {
                    u++ == 0 && r.addEventListener(n, f, !0);
                },
                teardown: function () {
                    --u == 0 && r.removeEventListener(n, f, !0);
                },
            };
        });
    i.fn.extend({
        on: function (n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && ((u = u || r), (r = t));
                for (s in n) this.on(s, r, u, n[s], e);
                return this;
            }
            if (
                (u == null && f == null
                    ? ((f = r), (u = r = t))
                    : f == null && (typeof r == "string" ? ((f = u), (u = t)) : ((f = u), (u = r), (r = t))),
                f === !1)
            )
                f = v;
            else if (!f) return this;
            return (
                e === 1 &&
                    ((o = f),
                    (f = function (n) {
                        return i().off(n), o.apply(this, arguments);
                    }),
                    (f.guid = o.guid || (o.guid = i.guid++))),
                this.each(function () {
                    i.event.add(this, n, f, u, r);
                })
            );
        },
        one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1);
        },
        off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return (
                    (f = n.handleObj),
                    i(n.delegateTarget).off(
                        f.namespace ? f.origType + "." + f.namespace : f.origType,
                        f.selector,
                        f.handler
                    ),
                    this
                );
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this;
            }
            return (
                (r === !1 || typeof r == "function") && ((u = r), (r = t)),
                u === !1 && (u = v),
                this.each(function () {
                    i.event.remove(this, n, u, r);
                })
            );
        },
        bind: function (n, t, i) {
            return this.on(n, null, t, i);
        },
        unbind: function (n, t) {
            return this.off(n, null, t);
        },
        live: function (n, t, r) {
            return i(this.context).on(n, this.selector, t, r), this;
        },
        die: function (n, t) {
            return i(this.context).off(n, this.selector || "**", t), this;
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r);
        },
        undelegate: function (n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i);
        },
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this);
            });
        },
        triggerHandler: function (n, t) {
            if (this[0]) return i.event.trigger(n, t, this[0], !0);
        },
        toggle: function (n) {
            var t = arguments,
                u = n.guid || i.guid++,
                r = 0,
                f = function (u) {
                    var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                    return (
                        i._data(this, "lastToggle" + n.guid, f + 1),
                        u.preventDefault(),
                        t[f].apply(this, arguments) || !1
                    );
                };
            for (f.guid = u; r < t.length; ) t[r++].guid = u;
            return this.click(f);
        },
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n);
        },
    });
    i.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
        ),
        function (n, t) {
            i.fn[t] = function (n, i) {
                return (
                    i == null && ((i = n), (n = null)), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
                );
            };
            te.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
            ie.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks);
        }
    ),
        (function (n, t) {
            function r(n, t, i, r) {
                i = i || [];
                t = t || h;
                var e,
                    u,
                    o,
                    f,
                    s = t.nodeType;
                if (!n || typeof n != "string") return i;
                if (s !== 1 && s !== 9) return [];
                if (((o = it(t)), !o && !r && (e = ki.exec(n))))
                    if ((f = e[1])) {
                        if (s === 9) {
                            if (((u = t.getElementById(f)), !u || !u.parentNode)) return i;
                            if (u.id === f) return i.push(u), i;
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ti(t, u) && u.id === f)
                            return i.push(u), i;
                    } else {
                        if (e[2]) return p.apply(i, w.call(t.getElementsByTagName(n), 0)), i;
                        if ((f = e[3]) && hi && t.getElementsByClassName)
                            return p.apply(i, w.call(t.getElementsByClassName(f), 0)), i;
                    }
                return lt(n.replace(ft, "$1"), t, i, r, o);
            }
            function b(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n;
                };
            }
            function gt(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === n;
                };
            }
            function a(n) {
                return s(function (t) {
                    return (
                        (t = +t),
                        s(function (i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--; )
                                i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
                        })
                    );
                });
            }
            function d(n, t, i) {
                if (n === t) return i;
                for (var r = n.nextSibling; r; ) {
                    if (r === t) return -1;
                    r = r.nextSibling;
                }
                return 1;
            }
            function g(n, t) {
                var o,
                    f,
                    h,
                    s,
                    i,
                    c,
                    l,
                    a = fi[e][n + " "];
                if (a) return t ? 0 : a.slice(0);
                for (i = n, c = [], l = u.preFilter; i; ) {
                    (!o || (f = pi.exec(i))) && (f && (i = i.slice(f[0].length) || i), c.push((h = [])));
                    o = !1;
                    (f = wi.exec(i)) &&
                        (h.push((o = new ri(f.shift()))), (i = i.slice(o.length)), (o.type = f[0].replace(ft, " ")));
                    for (s in u.filter)
                        (f = et[s].exec(i)) &&
                            (!l[s] || (f = l[s](f))) &&
                            (h.push((o = new ri(f.shift()))), (i = i.slice(o.length)), (o.type = s), (o.matches = f));
                    if (!o) break;
                }
                return t ? i.length : i ? r.error(n) : fi(n, c).slice(0);
            }
            function ot(n, t, i) {
                var r = t.dir,
                    u = i && t.dir === "parentNode",
                    f = ai++;
                return t.first
                    ? function (t, i, f) {
                          while ((t = t[r])) if (u || t.nodeType === 1) return n(t, i, f);
                      }
                    : function (t, i, o) {
                          if (o) {
                              while ((t = t[r])) if ((u || t.nodeType === 1) && n(t, i, o)) return t;
                          } else
                              for (var s, h = ut + " " + f + " ", c = h + at; (t = t[r]); )
                                  if (u || t.nodeType === 1) {
                                      if ((s = t[e]) === c) return t.sizset;
                                      if (typeof s == "string" && s.indexOf(h) === 0) {
                                          if (t.sizset) return t;
                                      } else {
                                          if (((t[e] = c), n(t, i, o))) return (t.sizset = !0), t;
                                          t.sizset = !1;
                                      }
                                  }
                      };
            }
            function st(n) {
                return n.length > 1
                    ? function (t, i, r) {
                          for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
                          return !0;
                      }
                    : n[0];
            }
            function nt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                    (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o;
            }
            function ht(n, t, i, r, u, f) {
                return (
                    r && !r[e] && (r = ht(r)),
                    u && !u[e] && (u = ht(u, f)),
                    s(function (f, e, o, s) {
                        var l,
                            c,
                            a,
                            w = [],
                            y = [],
                            b = e.length,
                            k = f || li(t || "*", o.nodeType ? [o] : o, []),
                            v = n && (f || !t) ? nt(k, w, n, o, s) : k,
                            h = i ? (u || (f ? n : b || r) ? [] : e) : v;
                        if ((i && i(v, h, o, s), r))
                            for (l = nt(h, y), r(l, [], o, s), c = l.length; c--; )
                                (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [], c = h.length; c--; ) (a = h[c]) && l.push((v[c] = a));
                                    u(null, (h = []), l, s);
                                }
                                for (c = h.length; c--; )
                                    (a = h[c]) && (l = u ? wt.call(f, a) : w[c]) > -1 && (f[l] = !(e[l] = a));
                            }
                        } else (h = nt(h === e ? h.splice(b, h.length) : h)), u ? u(null, e, h, s) : p.apply(e, h);
                    })
                );
            }
            function ct(n) {
                for (
                    var s,
                        r,
                        i,
                        o = n.length,
                        h = u.relative[n[0].type],
                        c = h || u.relative[" "],
                        t = h ? 1 : 0,
                        l = ot(
                            function (n) {
                                return n === s;
                            },
                            c,
                            !0
                        ),
                        a = ot(
                            function (n) {
                                return wt.call(s, n) > -1;
                            },
                            c,
                            !0
                        ),
                        f = [
                            function (n, t, i) {
                                return (!h && (i || t !== rt)) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i));
                            },
                        ];
                    t < o;
                    t++
                )
                    if ((r = u.relative[n[t].type])) f = [ot(st(f), r)];
                    else {
                        if (((r = u.filter[n[t].type].apply(null, n[t].matches)), r[e])) {
                            for (i = ++t; i < o; i++) if (u.relative[n[i].type]) break;
                            return ht(
                                t > 1 && st(f),
                                t > 1 &&
                                    n
                                        .slice(0, t - 1)
                                        .join("")
                                        .replace(ft, "$1"),
                                r,
                                t < i && ct(n.slice(t, i)),
                                i < o && ct((n = n.slice(i))),
                                i < o && n.join("")
                            );
                        }
                        f.push(r);
                    }
                return st(f);
            }
            function ci(n, t) {
                var f = t.length > 0,
                    e = n.length > 0,
                    i = function (o, s, c, l, a) {
                        var y,
                            b,
                            k,
                            w = [],
                            d = 0,
                            v = "0",
                            g = o && [],
                            tt = a != null,
                            it = rt,
                            et = o || (e && u.find.TAG("*", (a && s.parentNode) || s)),
                            ft = (ut += it == null ? 1 : Math.E);
                        for (tt && ((rt = s !== h && s), (at = i.el)); (y = et[v]) != null; v++) {
                            if (e && y) {
                                for (b = 0; (k = n[b]); b++)
                                    if (k(y, s, c)) {
                                        l.push(y);
                                        break;
                                    }
                                tt && ((ut = ft), (at = ++i.el));
                            }
                            f && ((y = !k && y) && d--, o && g.push(y));
                        }
                        if (((d += v), f && v !== d)) {
                            for (b = 0; (k = t[b]); b++) k(g, w, s, c);
                            if (o) {
                                if (d > 0) while (v--) g[v] || w[v] || (w[v] = vi.call(l));
                                w = nt(w);
                            }
                            p.apply(l, w);
                            tt && !o && w.length > 0 && d + t.length > 1 && r.uniqueSort(l);
                        }
                        return tt && ((ut = ft), (rt = it)), g;
                    };
                return (i.el = 0), f ? s(i) : i;
            }
            function li(n, t, i) {
                for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
                return i;
            }
            function lt(n, t, i, r, f) {
                var o,
                    e,
                    s,
                    c,
                    l,
                    h = g(n),
                    a = h.length;
                if (!r && h.length === 1) {
                    if (
                        ((e = h[0] = h[0].slice(0)),
                        e.length > 2 && (s = e[0]).type === "ID" && t.nodeType === 9 && !f && u.relative[e[1].type])
                    ) {
                        if (((t = u.find.ID(s.matches[0].replace(y, ""), t, f)[0]), !t)) return i;
                        n = n.slice(e.shift().length);
                    }
                    for (o = et.POS.test(n) ? -1 : e.length - 1; o >= 0; o--) {
                        if (((s = e[o]), u.relative[(c = s.type)])) break;
                        if (
                            (l = u.find[c]) &&
                            (r = l(s.matches[0].replace(y, ""), (dt.test(e[0].type) && t.parentNode) || t, f))
                        ) {
                            if ((e.splice(o, 1), (n = r.length && e.join("")), !n)) return p.apply(i, w.call(r, 0)), i;
                            break;
                        }
                    }
                }
                return yt(n, h)(r, t, f, i, dt.test(n)), i;
            }
            function ni() {}
            var at,
                vt,
                u,
                tt,
                it,
                ti,
                yt,
                pt,
                k,
                rt,
                ii = !0,
                c = "undefined",
                e = ("sizcache" + Math.random()).replace(".", ""),
                ri = String,
                h = n.document,
                o = h.documentElement,
                ut = 0,
                ai = 0,
                vi = [].pop,
                p = [].push,
                w = [].slice,
                wt =
                    [].indexOf ||
                    function (n) {
                        for (var t = 0, i = this.length; t < i; t++) if (this[t] === n) return t;
                        return -1;
                    },
                s = function (n, t) {
                    return (n[e] = t == null || t), n;
                },
                bt = function () {
                    var n = {},
                        t = [];
                    return s(function (i, r) {
                        return t.push(i) > u.cacheLength && delete n[t.shift()], (n[i + " "] = r);
                    }, n);
                },
                ui = bt(),
                fi = bt(),
                ei = bt(),
                f = "[\\x20\\t\\r\\n\\f]",
                v = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                yi = v.replace("w", "w#"),
                oi =
                    "\\[" +
                    f +
                    "*(" +
                    v +
                    ")" +
                    f +
                    "*(?:([*^$|!~]?=)" +
                    f +
                    "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
                    yi +
                    ")|)|)" +
                    f +
                    "*\\]",
                kt =
                    ":(" +
                    v +
                    ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
                    oi +
                    ")|[^:]|\\\\.)*|.*))\\)|)",
                si = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)",
                ft = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                pi = new RegExp("^" + f + "*," + f + "*"),
                wi = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"),
                bi = new RegExp(kt),
                ki = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                dt = /[\x20\t\r\n\f]*[+~]/,
                di = /h\d/i,
                gi = /input|select|textarea|button/i,
                y = /\\(?!\\)/g,
                et = {
                    ID: new RegExp("^#(" + v + ")"),
                    CLASS: new RegExp("^\\.(" + v + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + v + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + v.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oi),
                    PSEUDO: new RegExp("^" + kt),
                    POS: new RegExp(si, "i"),
                    CHILD: new RegExp(
                        "^:(only|nth|first|last)-child(?:\\(" +
                            f +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            f +
                            "*(?:([+-]|)" +
                            f +
                            "*(\\d+)|))" +
                            f +
                            "*\\)|)",
                        "i"
                    ),
                    needsContext: new RegExp("^" + f + "*[>+~]|" + si, "i"),
                },
                l = function (n) {
                    var t = h.createElement("div");
                    try {
                        return n(t);
                    } catch (i) {
                        return !1;
                    } finally {
                        t = null;
                    }
                },
                nr = l(function (n) {
                    return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length;
                }),
                tr = l(function (n) {
                    return (
                        (n.innerHTML = "<a href='#'></a>"),
                        n.firstChild &&
                            typeof n.firstChild.getAttribute !== c &&
                            n.firstChild.getAttribute("href") === "#"
                    );
                }),
                ir = l(function (n) {
                    n.innerHTML = "<select></select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string";
                }),
                hi = l(function (n) {
                    return (
                        (n.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>"),
                        !n.getElementsByClassName || !n.getElementsByClassName("e").length
                            ? !1
                            : ((n.lastChild.className = "e"), n.getElementsByClassName("e").length === 2)
                    );
                }),
                rr = l(function (n) {
                    n.id = e + 0;
                    n.innerHTML = "<a name='" + e + "'></a><div name='" + e + "'></div>";
                    o.insertBefore(n, o.firstChild);
                    var t =
                        h.getElementsByName && h.getElementsByName(e).length === 2 + h.getElementsByName(e + 0).length;
                    return (vt = !h.getElementById(e)), o.removeChild(n), t;
                });
            try {
                w.call(o.childNodes, 0)[0].nodeType;
            } catch (ur) {
                w = function (n) {
                    for (var t, i = []; (t = this[n]); n++) i.push(t);
                    return i;
                };
            }
            r.matches = function (n, t) {
                return r(n, null, null, t);
            };
            r.matchesSelector = function (n, t) {
                return r(t, null, null, [n]).length > 0;
            };
            tt = r.getText = function (n) {
                var r,
                    i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string") return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += tt(n);
                    } else if (t === 3 || t === 4) return n.nodeValue;
                } else for (; (r = n[u]); u++) i += tt(r);
                return i;
            };
            it = r.isXML = function (n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? t.nodeName !== "HTML" : !1;
            };
            ti = r.contains = o.contains
                ? function (n, t) {
                      var r = n.nodeType === 9 ? n.documentElement : n,
                          i = t && t.parentNode;
                      return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i));
                  }
                : o.compareDocumentPosition
                  ? function (n, t) {
                        return t && !!(n.compareDocumentPosition(t) & 16);
                    }
                  : function (n, t) {
                        while ((t = t.parentNode)) if (t === n) return !0;
                        return !1;
                    };
            r.attr = function (n, t) {
                var i,
                    r = it(n);
                return (
                    r || (t = t.toLowerCase()),
                    (i = u.attrHandle[t])
                        ? i(n)
                        : r || ir
                          ? n.getAttribute(t)
                          : ((i = n.getAttributeNode(t)),
                            i ? (typeof n[t] == "boolean" ? (n[t] ? t : null) : i.specified ? i.value : null) : null)
                );
            };
            u = r.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: et,
                attrHandle: tr
                    ? {}
                    : {
                          href: function (n) {
                              return n.getAttribute("href", 2);
                          },
                          type: function (n) {
                              return n.getAttribute("type");
                          },
                      },
                find: {
                    ID: vt
                        ? function (n, t, i) {
                              if (typeof t.getElementById !== c && !i) {
                                  var r = t.getElementById(n);
                                  return r && r.parentNode ? [r] : [];
                              }
                          }
                        : function (n, i, r) {
                              if (typeof i.getElementById !== c && !r) {
                                  var u = i.getElementById(n);
                                  return u
                                      ? u.id === n ||
                                        (typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n)
                                          ? [u]
                                          : t
                                      : [];
                              }
                          },
                    TAG: nr
                        ? function (n, t) {
                              if (typeof t.getElementsByTagName !== c) return t.getElementsByTagName(n);
                          }
                        : function (n, t) {
                              var f = t.getElementsByTagName(n),
                                  i,
                                  r,
                                  u;
                              if (n === "*") {
                                  for (r = [], u = 0; (i = f[u]); u++) i.nodeType === 1 && r.push(i);
                                  return r;
                              }
                              return f;
                          },
                    NAME:
                        rr &&
                        function (n, t) {
                            if (typeof t.getElementsByName !== c) return t.getElementsByName(name);
                        },
                    CLASS:
                        hi &&
                        function (n, t, i) {
                            if (typeof t.getElementsByClassName !== c && !i) return t.getElementsByClassName(n);
                        },
                },
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (n) {
                        return (
                            (n[1] = n[1].replace(y, "")),
                            (n[3] = (n[4] || n[5] || "").replace(y, "")),
                            n[2] === "~=" && (n[3] = " " + n[3] + " "),
                            n.slice(0, 4)
                        );
                    },
                    CHILD: function (n) {
                        return (
                            (n[1] = n[1].toLowerCase()),
                            n[1] === "nth"
                                ? (n[2] || r.error(n[0]),
                                  (n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd"))),
                                  (n[4] = +(n[6] + n[7] || n[2] === "odd")))
                                : n[2] && r.error(n[0]),
                            n
                        );
                    },
                    PSEUDO: function (n) {
                        var t, i;
                        return et.CHILD.test(n[0])
                            ? null
                            : (n[3]
                                  ? (n[2] = n[3])
                                  : (t = n[4]) &&
                                    (bi.test(t) &&
                                        (i = g(t, !0)) &&
                                        (i = t.indexOf(")", t.length - i) - t.length) &&
                                        ((t = t.slice(0, i)), (n[0] = n[0].slice(0, i))),
                                    (n[2] = t)),
                              n.slice(0, 3));
                    },
                },
                filter: {
                    ID: vt
                        ? function (n) {
                              return (
                                  (n = n.replace(y, "")),
                                  function (t) {
                                      return t.getAttribute("id") === n;
                                  }
                              );
                          }
                        : function (n) {
                              return (
                                  (n = n.replace(y, "")),
                                  function (t) {
                                      var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
                                      return i && i.value === n;
                                  }
                              );
                          },
                    TAG: function (n) {
                        return n === "*"
                            ? function () {
                                  return !0;
                              }
                            : ((n = n.replace(y, "").toLowerCase()),
                              function (t) {
                                  return t.nodeName && t.nodeName.toLowerCase() === n;
                              });
                    },
                    CLASS: function (n) {
                        var t = ui[e][n + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) &&
                                ui(n, function (n) {
                                    return t.test(
                                        n.className || (typeof n.getAttribute !== c && n.getAttribute("class")) || ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, t, i) {
                        return function (u) {
                            var f = r.attr(u, n);
                            return f == null
                                ? t === "!="
                                : t
                                  ? ((f += ""),
                                    t === "="
                                        ? f === i
                                        : t === "!="
                                          ? f !== i
                                          : t === "^="
                                            ? i && f.indexOf(i) === 0
                                            : t === "*="
                                              ? i && f.indexOf(i) > -1
                                              : t === "$="
                                                ? i && f.substr(f.length - i.length) === i
                                                : t === "~="
                                                  ? (" " + f + " ").indexOf(i) > -1
                                                  : t === "|="
                                                    ? f === i || f.substr(0, i.length + 1) === i + "-"
                                                    : !1)
                                  : !0;
                        };
                    },
                    CHILD: function (n, t, i, r) {
                        return n === "nth"
                            ? function (n) {
                                  var t,
                                      u,
                                      f = n.parentNode;
                                  if (i === 1 && r === 0) return !0;
                                  if (f)
                                      for (u = 0, t = f.firstChild; t; t = t.nextSibling)
                                          if (t.nodeType === 1 && (u++, n === t)) break;
                                  return (u -= r), u === i || (u % i == 0 && u / i >= 0);
                              }
                            : function (t) {
                                  var i = t;
                                  switch (n) {
                                      case "only":
                                      case "first":
                                          while ((i = i.previousSibling)) if (i.nodeType === 1) return !1;
                                          if (n === "first") return !0;
                                          i = t;
                                      case "last":
                                          while ((i = i.nextSibling)) if (i.nodeType === 1) return !1;
                                          return !0;
                                  }
                              };
                    },
                    PSEUDO: function (n, t) {
                        var f,
                            i = u.pseudos[n] || u.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return i[e]
                            ? i(t)
                            : i.length > 1
                              ? ((f = [n, n, "", t]),
                                u.setFilters.hasOwnProperty(n.toLowerCase())
                                    ? s(function (n, r) {
                                          for (var u, f = i(n, t), e = f.length; e--; )
                                              (u = wt.call(n, f[e])), (n[u] = !(r[u] = f[e]));
                                      })
                                    : function (n) {
                                          return i(n, 0, f);
                                      })
                              : i;
                    },
                },
                pseudos: {
                    not: s(function (n) {
                        var i = [],
                            r = [],
                            t = yt(n.replace(ft, "$1"));
                        return t[e]
                            ? s(function (n, i, r, u) {
                                  for (var e, o = t(n, null, u, []), f = n.length; f--; )
                                      (e = o[f]) && (n[f] = !(i[f] = e));
                              })
                            : function (n, u, f) {
                                  return (i[0] = n), t(i, null, f, r), !r.pop();
                              };
                    }),
                    has: s(function (n) {
                        return function (t) {
                            return r(n, t).length > 0;
                        };
                    }),
                    contains: s(function (n) {
                        return function (t) {
                            return (t.textContent || t.innerText || tt(t)).indexOf(n) > -1;
                        };
                    }),
                    enabled: function (n) {
                        return n.disabled === !1;
                    },
                    disabled: function (n) {
                        return n.disabled === !0;
                    },
                    checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return (t === "input" && !!n.checked) || (t === "option" && !!n.selected);
                    },
                    selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0;
                    },
                    parent: function (n) {
                        return !u.pseudos.empty(n);
                    },
                    empty: function (n) {
                        var t;
                        for (n = n.firstChild; n; ) {
                            if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
                            n = n.nextSibling;
                        }
                        return !0;
                    },
                    header: function (n) {
                        return di.test(n.nodeName);
                    },
                    text: function (n) {
                        var t, i;
                        return (
                            n.nodeName.toLowerCase() === "input" &&
                            (t = n.type) === "text" &&
                            ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
                        );
                    },
                    radio: b("radio"),
                    checkbox: b("checkbox"),
                    file: b("file"),
                    password: b("password"),
                    image: b("image"),
                    submit: gt("submit"),
                    reset: gt("reset"),
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return (t === "input" && n.type === "button") || t === "button";
                    },
                    input: function (n) {
                        return gi.test(n.nodeName);
                    },
                    focus: function (n) {
                        var t = n.ownerDocument;
                        return (
                            n === t.activeElement &&
                            (!t.hasFocus || t.hasFocus()) &&
                            !!(n.type || n.href || ~n.tabIndex)
                        );
                    },
                    active: function (n) {
                        return n === n.ownerDocument.activeElement;
                    },
                    first: a(function () {
                        return [0];
                    }),
                    last: a(function (n, t) {
                        return [t - 1];
                    }),
                    eq: a(function (n, t, i) {
                        return [i < 0 ? i + t : i];
                    }),
                    even: a(function (n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n;
                    }),
                    odd: a(function (n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n;
                    }),
                    lt: a(function (n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0; ) n.push(r);
                        return n;
                    }),
                    gt: a(function (n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
                        return n;
                    }),
                },
            };
            pt = o.compareDocumentPosition
                ? function (n, t) {
                      return n === t
                          ? ((k = !0), 0)
                          : (
                                  !n.compareDocumentPosition || !t.compareDocumentPosition
                                      ? n.compareDocumentPosition
                                      : n.compareDocumentPosition(t) & 4
                              )
                            ? -1
                            : 1;
                  }
                : function (n, t) {
                      var i;
                      if (n === t) return (k = !0), 0;
                      if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                      var e,
                          h,
                          u = [],
                          f = [],
                          o = n.parentNode,
                          s = t.parentNode,
                          r = o;
                      if (o === s) return d(n, t);
                      if (!o) return -1;
                      if (!s) return 1;
                      while (r) u.unshift(r), (r = r.parentNode);
                      for (r = s; r; ) f.unshift(r), (r = r.parentNode);
                      for (e = u.length, h = f.length, i = 0; i < e && i < h; i++)
                          if (u[i] !== f[i]) return d(u[i], f[i]);
                      return i === e ? d(n, f[i], -1) : d(u[i], t, 1);
                  };
            [0, 0].sort(pt);
            ii = !k;
            r.uniqueSort = function (n) {
                var r,
                    u = [],
                    t = 1,
                    i = 0;
                if (((k = ii), n.sort(pt), k)) {
                    for (; (r = n[t]); t++) r === n[t - 1] && (i = u.push(t));
                    while (i--) n.splice(u[i], 1);
                }
                return n;
            };
            r.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            yt = r.compile = function (n, t) {
                var r,
                    u = [],
                    f = [],
                    i = ei[e][n + " "];
                if (!i) {
                    for (t || (t = g(n)), r = t.length; r--; ) (i = ct(t[r])), i[e] ? u.push(i) : f.push(i);
                    i = ei(n, ci(f, u));
                }
                return i;
            };
            h.querySelectorAll &&
                (function () {
                    var u,
                        s = lt,
                        h = /'|\\/g,
                        c = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        n = [":focus"],
                        t = [":active"],
                        i =
                            o.matchesSelector ||
                            o.mozMatchesSelector ||
                            o.webkitMatchesSelector ||
                            o.oMatchesSelector ||
                            o.msMatchesSelector;
                    l(function (t) {
                        t.innerHTML = "<select><option selected=''></option></select>";
                        t.querySelectorAll("[selected]").length ||
                            n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                        t.querySelectorAll(":checked").length || n.push(":checked");
                    });
                    l(function (t) {
                        t.innerHTML = "<p test=''></p>";
                        t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')");
                        t.innerHTML = "<input type='hidden'/>";
                        t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled");
                    });
                    n = new RegExp(n.join("|"));
                    lt = function (t, i, r, u, f) {
                        if (!u && !f && !n.test(t)) {
                            var o,
                                l,
                                a = !0,
                                c = e,
                                y = i,
                                v = i.nodeType === 9 && t;
                            if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                                for (
                                    o = g(t),
                                        (a = i.getAttribute("id"))
                                            ? (c = a.replace(h, "\\$&"))
                                            : i.setAttribute("id", c),
                                        c = "[id='" + c + "'] ",
                                        l = o.length;
                                    l--;

                                )
                                    o[l] = c + o[l].join("");
                                y = (dt.test(t) && i.parentNode) || i;
                                v = o.join(",");
                            }
                            if (v)
                                try {
                                    return p.apply(r, w.call(y.querySelectorAll(v), 0)), r;
                                } catch (b) {
                                } finally {
                                    a || i.removeAttribute("id");
                                }
                        }
                        return s(t, i, r, u, f);
                    };
                    i &&
                        (l(function (n) {
                            u = i.call(n, "div");
                            try {
                                i.call(n, "[test!='']:sizzle");
                                t.push("!=", kt);
                            } catch (r) {}
                        }),
                        (t = new RegExp(t.join("|"))),
                        (r.matchesSelector = function (f, e) {
                            if (((e = e.replace(c, "='$1']")), !it(f) && !t.test(e) && !n.test(e)))
                                try {
                                    var o = i.call(f, e);
                                    if (o || u || (f.document && f.document.nodeType !== 11)) return o;
                                } catch (s) {}
                            return r(e, null, null, [f]).length > 0;
                        }));
                })();
            u.pseudos.nth = u.pseudos.eq;
            u.filters = ni.prototype = u.pseudos;
            u.setFilters = new ni();
            r.attr = i.attr;
            i.find = r;
            i.expr = r.selectors;
            i.expr[":"] = i.expr.pseudos;
            i.unique = r.uniqueSort;
            i.text = r.getText;
            i.isXMLDoc = r.isXML;
            i.contains = r.contains;
        })(n);
    var re = /Until$/,
        ue = /^(?:parents|prev(?:Until|All))/,
        fe = /^.[^:#\[\.,]*$/,
        br = i.expr.match.needsContext,
        ee = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        find: function (n) {
            var t,
                f,
                o,
                u,
                e,
                r,
                s = this;
            if (typeof n != "string")
                return i(n).filter(function () {
                    for (t = 0, f = s.length; t < f; t++) if (i.contains(s[t], this)) return !0;
                });
            for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
                if (((o = r.length), i.find(n, this[t], r), t > 0))
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break;
                            }
            return r;
        },
        has: function (n) {
            var t,
                r = i(n, this),
                u = r.length;
            return this.filter(function () {
                for (t = 0; t < u; t++) if (i.contains(this, r[t])) return !0;
            });
        },
        not: function (n) {
            return this.pushStack(ei(this, n, !1), "not", n);
        },
        filter: function (n) {
            return this.pushStack(ei(this, n, !0), "filter", n);
        },
        is: function (n) {
            return (
                !!n &&
                (typeof n == "string"
                    ? br.test(n)
                        ? i(n, this.context).index(this[0]) >= 0
                        : i.filter(n, this).length > 0
                    : this.filter(n).length > 0)
            );
        },
        closest: function (n, t) {
            for (
                var r,
                    f = 0,
                    o = this.length,
                    u = [],
                    e = br.test(n) || typeof n != "string" ? i(n, t || this.context) : 0;
                f < o;
                f++
            )
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11; ) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break;
                    }
                    r = r.parentNode;
                }
            return (u = u.length > 1 ? i.unique(u) : u), this.pushStack(u, "closest", n);
        },
        index: function (n) {
            return n
                ? typeof n == "string"
                    ? i.inArray(this[0], i(n))
                    : i.inArray(n.jquery ? n[0] : n, this)
                : this[0] && this[0].parentNode
                  ? this.prevAll().length
                  : -1;
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(k(u[0]) || k(r[0]) ? r : i.unique(r));
        },
        addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n));
        },
    });
    i.fn.andSelf = i.fn.addBack;
    i.each(
        {
            parent: function (n) {
                var t = n.parentNode;
                return t && t.nodeType !== 11 ? t : null;
            },
            parents: function (n) {
                return i.dir(n, "parentNode");
            },
            parentsUntil: function (n, t, r) {
                return i.dir(n, "parentNode", r);
            },
            next: function (n) {
                return fi(n, "nextSibling");
            },
            prev: function (n) {
                return fi(n, "previousSibling");
            },
            nextAll: function (n) {
                return i.dir(n, "nextSibling");
            },
            prevAll: function (n) {
                return i.dir(n, "previousSibling");
            },
            nextUntil: function (n, t, r) {
                return i.dir(n, "nextSibling", r);
            },
            prevUntil: function (n, t, r) {
                return i.dir(n, "previousSibling", r);
            },
            siblings: function (n) {
                return i.sibling((n.parentNode || {}).firstChild, n);
            },
            children: function (n) {
                return i.sibling(n.firstChild);
            },
            contents: function (n) {
                return i.nodeName(n, "iframe")
                    ? n.contentDocument || n.contentWindow.document
                    : i.merge([], n.childNodes);
            },
        },
        function (n, t) {
            i.fn[n] = function (r, u) {
                var f = i.map(this, t, r);
                return (
                    re.test(n) || (u = r),
                    u && typeof u == "string" && (f = i.filter(u, f)),
                    (f = this.length > 1 && !ee[n] ? i.unique(f) : f),
                    this.length > 1 && ue.test(n) && (f = f.reverse()),
                    this.pushStack(f, n, o.call(arguments).join(","))
                );
            };
        }
    );
    i.extend({
        filter: function (n, t, r) {
            return (
                r && (n = ":not(" + n + ")"),
                t.length === 1 ? (i.find.matchesSelector(t[0], n) ? [t[0]] : []) : i.find.matches(n, t)
            );
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); )
                f.nodeType === 1 && e.push(f), (f = f[r]);
            return e;
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i;
        },
    });
    var kr =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        oe = / jQuery\d+="(?:null|\d+)"/g,
        kt = /^\s+/,
        dr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gr = /<([\w:]+)/,
        se = /<tbody/i,
        he = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        le = /<(?:script|object|embed|option|style)/i,
        dt = new RegExp("<(?:" + kr + ")[\\s/>]", "i"),
        nu = /^(?:checkbox|radio)$/,
        tu = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /\/(java|ecma)script/i,
        ve = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""],
        },
        iu = oi(r),
        gt = iu.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.support.htmlSerialize || (e._default = [1, "X<div>", "</div>"]);
    i.fn.extend({
        text: function (n) {
            return i.access(
                this,
                function (n) {
                    return n === t
                        ? i.text(this)
                        : this.empty().append(((this[0] && this[0].ownerDocument) || r).createTextNode(n));
                },
                null,
                n,
                arguments.length
            );
        },
        wrapAll: function (n) {
            if (i.isFunction(n))
                return this.each(function (t) {
                    i(this).wrapAll(n.call(this, t));
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; ) n = n.firstChild;
                    return n;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (n) {
            return i.isFunction(n)
                ? this.each(function (t) {
                      i(this).wrapInner(n.call(this, t));
                  })
                : this.each(function () {
                      var t = i(this),
                          r = t.contents();
                      r.length ? r.wrapAll(n) : t.append(n);
                  });
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n);
            });
        },
        unwrap: function () {
            return this.parent()
                .each(function () {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes);
                })
                .end();
        },
        append: function () {
            return this.domManip(arguments, !0, function (n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n);
            });
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild);
            });
        },
        before: function () {
            if (!k(this[0]))
                return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this);
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(n, this), "before", this.selector);
            }
        },
        after: function () {
            if (!k(this[0]))
                return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this.nextSibling);
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(this, n), "after", this.selector);
            }
        },
        remove: function (n, t) {
            for (var r, u = 0; (r = this[u]) != null; u++)
                (!n || i.filter(n, [r]).length) &&
                    (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])),
                    r.parentNode && r.parentNode.removeChild(r));
            return this;
        },
        empty: function () {
            for (var n, t = 0; (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild; )
                    n.removeChild(n.firstChild);
            return this;
        },
        clone: function (n, t) {
            return (
                (n = n == null ? !1 : n),
                (t = t == null ? n : t),
                this.map(function () {
                    return i.clone(this, n, t);
                })
            );
        },
        html: function (n) {
            return i.access(
                this,
                function (n) {
                    var r = this[0] || {},
                        u = 0,
                        f = this.length;
                    if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(oe, "") : t;
                    if (
                        typeof n == "string" &&
                        !ce.test(n) &&
                        (i.support.htmlSerialize || !dt.test(n)) &&
                        (i.support.leadingWhitespace || !kt.test(n)) &&
                        !e[(gr.exec(n) || ["", ""])[1].toLowerCase()]
                    ) {
                        n = n.replace(dr, "<$1></$2>");
                        try {
                            for (; u < f; u++)
                                (r = this[u] || {}),
                                    r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), (r.innerHTML = n));
                            r = 0;
                        } catch (o) {}
                    }
                    r && this.empty().append(n);
                },
                null,
                n,
                arguments.length
            );
        },
        replaceWith: function (n) {
            return k(this[0])
                ? this.length
                    ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n)
                    : this
                : i.isFunction(n)
                  ? this.each(function (t) {
                        var r = i(this),
                            u = r.html();
                        r.replaceWith(n.call(this, t, u));
                    })
                  : (typeof n != "string" && (n = i(n).detach()),
                    this.each(function () {
                        var t = this.nextSibling,
                            r = this.parentNode;
                        i(this).remove();
                        t ? i(t).before(n) : i(r).append(n);
                    }));
        },
        detach: function (n) {
            return this.remove(n, !0);
        },
        domManip: function (n, r, u) {
            n = [].concat.apply([], n);
            var h,
                o,
                f,
                a,
                e = 0,
                s = n[0],
                c = [],
                l = this.length;
            if (!i.support.checkClone && l > 1 && typeof s == "string" && tu.test(s))
                return this.each(function () {
                    i(this).domManip(n, r, u);
                });
            if (i.isFunction(s))
                return this.each(function (f) {
                    var e = i(this);
                    n[0] = s.call(this, f, r ? e.html() : t);
                    e.domManip(n, r, u);
                });
            if (this[0]) {
                if (
                    ((h = i.buildFragment(n, this, c)),
                    (f = h.fragment),
                    (o = f.firstChild),
                    f.childNodes.length === 1 && (f = o),
                    o)
                )
                    for (r = r && i.nodeName(o, "tr"), a = h.cacheable || l - 1; e < l; e++)
                        u.call(
                            r && i.nodeName(this[e], "table") ? pu(this[e], "tbody") : this[e],
                            e === a ? f : i.clone(f, !0, !0)
                        );
                f = o = null;
                c.length &&
                    i.each(c, function (n, t) {
                        t.src
                            ? i.ajax
                                ? i.ajax({
                                      url: t.src,
                                      type: "GET",
                                      dataType: "script",
                                      async: !1,
                                      global: !1,
                                      throws: !0,
                                  })
                                : i.error("no ajax")
                            : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ve, ""));
                        t.parentNode && t.parentNode.removeChild(t);
                    });
            }
            return this;
        },
    });
    i.buildFragment = function (n, u, f) {
        var o,
            s,
            h,
            e = n[0];
        return (
            (u = u || r),
            (u = (!u.nodeType && u[0]) || u),
            (u = u.ownerDocument || u),
            n.length === 1 &&
                typeof e == "string" &&
                e.length < 512 &&
                u === r &&
                e.charAt(0) === "<" &&
                !le.test(e) &&
                (i.support.checkClone || !tu.test(e)) &&
                (i.support.html5Clone || !dt.test(e)) &&
                ((s = !0), (o = i.fragments[e]), (h = o !== t)),
            o || ((o = u.createDocumentFragment()), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)),
            { fragment: o, cacheable: s }
        );
    };
    i.fragments = {};
    i.each(
        {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
        },
        function (n, t) {
            i.fn[n] = function (r) {
                var o,
                    u = 0,
                    s = [],
                    f = i(r),
                    h = f.length,
                    e = this.length === 1 && this[0].parentNode;
                if ((e == null || (e && e.nodeType === 11 && e.childNodes.length === 1)) && h === 1)
                    return f[t](this[0]), this;
                for (; u < h; u++) (o = (u > 0 ? this.clone(!0) : this).get()), i(f[u])[t](o), (s = s.concat(o));
                return this.pushStack(s, n, f.selector);
            };
        }
    );
    i.extend({
        clone: function (n, t, r) {
            var f, o, u, e;
            if (
                (i.support.html5Clone || i.isXMLDoc(n) || !dt.test("<" + n.nodeName + ">")
                    ? (e = n.cloneNode(!0))
                    : ((gt.innerHTML = n.outerHTML), gt.removeChild((e = gt.firstChild))),
                (!i.support.noCloneEvent || !i.support.noCloneChecked) &&
                    (n.nodeType === 1 || n.nodeType === 11) &&
                    !i.isXMLDoc(n))
            )
                for (hi(n, e), f = nt(n), o = nt(e), u = 0; f[u]; ++u) o[u] && hi(f[u], o[u]);
            if (t && (si(n, e), r)) for (f = nt(n), o = nt(e), u = 0; f[u]; ++u) si(f[u], o[u]);
            return (f = o = null), e;
        },
        clean: function (n, t, u, f) {
            var h,
                c,
                o,
                p,
                v,
                d,
                s,
                w,
                a,
                b,
                k,
                y = t === r && iu,
                l = [];
            for ((t && typeof t.createDocumentFragment != "undefined") || (t = r), h = 0; (o = n[h]) != null; h++)
                if ((typeof o == "number" && (o += ""), o)) {
                    if (typeof o == "string")
                        if (he.test(o)) {
                            for (
                                y = y || oi(t),
                                    s = t.createElement("div"),
                                    y.appendChild(s),
                                    o = o.replace(dr, "<$1></$2>"),
                                    p = (gr.exec(o) || ["", ""])[1].toLowerCase(),
                                    v = e[p] || e._default,
                                    d = v[0],
                                    s.innerHTML = v[1] + o + v[2];
                                d--;

                            )
                                s = s.lastChild;
                            if (!i.support.tbody)
                                for (
                                    w = se.test(o),
                                        a =
                                            p === "table" && !w
                                                ? s.firstChild && s.firstChild.childNodes
                                                : v[1] === "<table>" && !w
                                                  ? s.childNodes
                                                  : [],
                                        c = a.length - 1;
                                    c >= 0;
                                    --c
                                )
                                    i.nodeName(a[c], "tbody") &&
                                        !a[c].childNodes.length &&
                                        a[c].parentNode.removeChild(a[c]);
                            !i.support.leadingWhitespace &&
                                kt.test(o) &&
                                s.insertBefore(t.createTextNode(kt.exec(o)[0]), s.firstChild);
                            o = s.childNodes;
                            s.parentNode.removeChild(s);
                        } else o = t.createTextNode(o);
                    o.nodeType ? l.push(o) : i.merge(l, o);
                }
            if ((s && (o = s = y = null), !i.support.appendChecked))
                for (h = 0; (o = l[h]) != null; h++)
                    i.nodeName(o, "input")
                        ? ci(o)
                        : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), ci);
            if (u)
                for (
                    b = function (n) {
                        if (!n.type || ae.test(n.type))
                            return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n);
                    },
                        h = 0;
                    (o = l[h]) != null;
                    h++
                )
                    (i.nodeName(o, "script") && b(o)) ||
                        (u.appendChild(o),
                        typeof o.getElementsByTagName != "undefined" &&
                            ((k = i.grep(i.merge([], o.getElementsByTagName("script")), b)),
                            l.splice.apply(l, [h + 1, 0].concat(k)),
                            (h += k.length)));
            return l;
        },
        cleanData: function (n, t) {
            for (
                var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special;
                (r = n[h]) != null;
                h++
            )
                if ((t || i.acceptData(r)) && ((u = r[o]), (f = u && s[u]), f)) {
                    if (f.events) for (e in f.events) l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                    s[u] &&
                        (delete s[u],
                        c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : (r[o] = null),
                        i.deletedIds.push(u));
                }
        },
    }),
        (function () {
            var t, n;
            i.uaMatch = function (n) {
                n = n.toLowerCase();
                var t =
                    /(chrome)[ \/]([\w.]+)/.exec(n) ||
                    /(webkit)[ \/]([\w.]+)/.exec(n) ||
                    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) ||
                    /(msie) ([\w.]+)/.exec(n) ||
                    (n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)) ||
                    [];
                return { browser: t[1] || "", version: t[2] || "0" };
            };
            t = i.uaMatch(rf.userAgent);
            n = {};
            t.browser && ((n[t.browser] = !0), (n.version = t.version));
            n.chrome ? (n.webkit = !0) : n.webkit && (n.safari = !0);
            i.browser = n;
            i.sub = function () {
                function n(t, i) {
                    return new n.fn.init(t, i);
                }
                i.extend(!0, n, this);
                n.superclass = this;
                n.fn = n.prototype = this();
                n.fn.constructor = n;
                n.sub = this.sub;
                n.fn.init = function (r, u) {
                    return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t);
                };
                n.fn.init.prototype = n.fn;
                var t = n(r);
                return n;
            };
        })();
    var u,
        y,
        p,
        ni = /alpha\([^)]*\)/i,
        ye = /opacity=([^)]*)/,
        pe = /^(top|right|bottom|left)$/,
        we = /^(none|table(?!-c[ea]).+)/,
        ru = /^margin/,
        be = new RegExp("^(" + ft + ")(.*)$", "i"),
        ot = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
        ke = new RegExp("^([-+])=(" + ft + ")", "i"),
        ti = { BODY: "block" },
        de = { position: "absolute", visibility: "hidden", display: "block" },
        uu = { letterSpacing: 0, fontWeight: 400 },
        c = ["Top", "Right", "Bottom", "Left"],
        fu = ["Webkit", "O", "Moz", "ms"],
        ge = i.fn.toggle;
    i.fn.extend({
        css: function (n, r) {
            return i.access(
                this,
                function (n, r, u) {
                    return u !== t ? i.style(n, r, u) : i.css(n, r);
                },
                n,
                r,
                arguments.length > 1
            );
        },
        show: function () {
            return ai(this, !0);
        },
        hide: function () {
            return ai(this);
        },
        toggle: function (n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t)
                ? ge.apply(this, arguments)
                : this.each(function () {
                      (r ? n : tt(this)) ? i(this).show() : i(this).hide();
                  });
        },
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i;
                    }
                },
            },
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: i.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o,
                    s,
                    e,
                    h = i.camelCase(r),
                    c = n.style;
                if (((r = i.cssProps[h] || (i.cssProps[h] = li(c, h))), (e = i.cssHooks[r] || i.cssHooks[h]), u === t))
                    return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if (
                    ((s = typeof u),
                    s === "string" &&
                        (o = ke.exec(u)) &&
                        ((u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r))), (s = "number")),
                    u != null && (s !== "number" || !isNaN(u))) &&
                    (s !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t)
                )
                    try {
                        c[r] = u;
                    } catch (l) {}
            }
        },
        css: function (n, r, f, e) {
            var o,
                c,
                s,
                h = i.camelCase(r);
            return (
                (r = i.cssProps[h] || (i.cssProps[h] = li(n.style, h))),
                (s = i.cssHooks[r] || i.cssHooks[h]),
                s && "get" in s && (o = s.get(n, !0, e)),
                o === t && (o = u(n, r)),
                o === "normal" && r in uu && (o = uu[r]),
                f || e !== t ? ((c = parseFloat(o)), f || i.isNumeric(c) ? c || 0 : o) : o
            );
        },
        swap: function (n, t, i) {
            var u,
                r,
                f = {};
            for (r in t) (f[r] = n.style[r]), (n.style[r] = t[r]);
            u = i.call(n);
            for (r in t) n.style[r] = f[r];
            return u;
        },
    });
    n.getComputedStyle
        ? (u = function (t, r) {
              var f,
                  o,
                  s,
                  h,
                  e = n.getComputedStyle(t, null),
                  u = t.style;
              return (
                  e &&
                      ((f = e.getPropertyValue(r) || e[r]),
                      f === "" && !i.contains(t.ownerDocument, t) && (f = i.style(t, r)),
                      ot.test(f) &&
                          ru.test(r) &&
                          ((o = u.width),
                          (s = u.minWidth),
                          (h = u.maxWidth),
                          (u.minWidth = u.maxWidth = u.width = f),
                          (f = e.width),
                          (u.width = o),
                          (u.minWidth = s),
                          (u.maxWidth = h))),
                  f
              );
          })
        : r.documentElement.currentStyle &&
          (u = function (n, t) {
              var f,
                  u,
                  i = n.currentStyle && n.currentStyle[t],
                  r = n.style;
              return (
                  i == null && r && r[t] && (i = r[t]),
                  ot.test(i) &&
                      !pe.test(t) &&
                      ((f = r.left),
                      (u = n.runtimeStyle && n.runtimeStyle.left),
                      u && (n.runtimeStyle.left = n.currentStyle.left),
                      (r.left = t === "fontSize" ? "1em" : i),
                      (i = r.pixelLeft + "px"),
                      (r.left = f),
                      u && (n.runtimeStyle.left = u)),
                  i === "" ? "auto" : i
              );
          });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, f) {
                if (r)
                    return n.offsetWidth === 0 && we.test(u(n, "display"))
                        ? i.swap(n, de, function () {
                              return pi(n, t, f);
                          })
                        : pi(n, t, f);
            },
            set: function (n, r, u) {
                return vi(n, r, u ? yi(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0);
            },
        };
    });
    i.support.opacity ||
        (i.cssHooks.opacity = {
            get: function (n, t) {
                return ye.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "")
                    ? 0.01 * parseFloat(RegExp.$1) + ""
                    : t
                      ? "1"
                      : "";
            },
            set: function (n, t) {
                var r = n.style,
                    u = n.currentStyle,
                    e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    f = (u && u.filter) || r.filter || "";
                ((r.zoom = 1),
                t >= 1 &&
                    i.trim(f.replace(ni, "")) === "" &&
                    r.removeAttribute &&
                    (r.removeAttribute("filter"), u && !u.filter)) ||
                    (r.filter = ni.test(f) ? f.replace(ni, e) : f + " " + e);
            },
        });
    i(function () {
        i.support.reliableMarginRight ||
            (i.cssHooks.marginRight = {
                get: function (n, t) {
                    return i.swap(n, { display: "inline-block" }, function () {
                        if (t) return u(n, "marginRight");
                    });
                },
            });
        !i.support.pixelPosition &&
            i.fn.position &&
            i.each(["top", "left"], function (n, t) {
                i.cssHooks[t] = {
                    get: function (n, r) {
                        if (r) {
                            var f = u(n, t);
                            return ot.test(f) ? i(n).position()[t] + "px" : f;
                        }
                    },
                };
            });
    });
    i.expr &&
        i.expr.filters &&
        ((i.expr.filters.hidden = function (n) {
            return (
                (n.offsetWidth === 0 && n.offsetHeight === 0) ||
                (!i.support.reliableHiddenOffsets && ((n.style && n.style.display) || u(n, "display")) === "none")
            );
        }),
        (i.expr.filters.visible = function (n) {
            return !i.expr.filters.hidden(n);
        }));
    i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++)
                    f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f;
            },
        };
        ru.test(n) || (i.cssHooks[n + t].set = vi);
    });
    var no = /%20/g,
        to = /\[\]$/,
        eu = /\r?\n/g,
        io =
            /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ro = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this;
            })
                .filter(function () {
                    return (
                        this.name && !this.disabled && (this.checked || ro.test(this.nodeName) || io.test(this.type))
                    );
                })
                .map(function (n, t) {
                    var r = i(this).val();
                    return r == null
                        ? null
                        : i.isArray(r)
                          ? i.map(r, function (n) {
                                return { name: t.name, value: n.replace(eu, "\r\n") };
                            })
                          : { name: t.name, value: r.replace(eu, "\r\n") };
                })
                .get();
        },
    });
    i.param = function (n, r) {
        var u,
            f = [],
            e = function (n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
            };
        if (
            (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
            i.isArray(n) || (n.jquery && !i.isPlainObject(n)))
        )
            i.each(n, function () {
                e(this.name, this.value);
            });
        else for (u in n) vt(u, n[u], r, e);
        return f.join("&").replace(no, "+");
    };
    var l,
        a,
        uo = /#.*$/,
        fo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        eo = /^(?:GET|HEAD)$/,
        oo = /^\/\//,
        ou = /\?/,
        so = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ho = /([?&])_=[^&]*/,
        su = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        hu = i.fn.load,
        ii = {},
        cu = {},
        lu = ["*/"] + ["*"];
    try {
        a = tf.href;
    } catch (po) {
        a = r.createElement("a");
        a.href = "";
        a = a.href;
    }
    l = su.exec(a.toLowerCase()) || [];
    i.fn.load = function (n, r, u) {
        if (typeof n != "string" && hu) return hu.apply(this, arguments);
        if (!this.length) return this;
        var f,
            o,
            s,
            h = this,
            e = n.indexOf(" ");
        return (
            e >= 0 && ((f = n.slice(e, n.length)), (n = n.slice(0, e))),
            i.isFunction(r) ? ((u = r), (r = t)) : r && typeof r == "object" && (o = "POST"),
            i
                .ajax({
                    url: n,
                    type: o,
                    dataType: "html",
                    data: r,
                    complete: function (n, t) {
                        u && h.each(u, s || [n.responseText, t, n]);
                    },
                })
                .done(function (n) {
                    s = arguments;
                    h.html(f ? i("<div>").append(n.replace(so, "")).find(f) : n);
                }),
            this
        );
    };
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n);
        };
    });
    i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return (
                i.isFunction(u) && ((e = e || f), (f = u), (u = t)),
                i.ajax({ type: r, url: n, data: u, success: f, dataType: e })
            );
        };
    });
    i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script");
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json");
        },
        ajaxSetup: function (n, t) {
            return t ? ki(n, i.ajaxSettings) : ((t = n), (n = i.ajaxSettings)), ki(n, t), n;
        },
        ajaxSettings: {
            url: a,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(l[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": lu,
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: "responseXML", text: "responseText" },
            converters: { "* text": n.String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML },
            flatOptions: { context: !0, url: !0 },
        },
        ajaxPrefilter: bi(ii),
        ajaxTransport: bi(cu),
        ajax: function (n, r) {
            function p(n, r, h, l) {
                var a,
                    tt,
                    w,
                    it,
                    p,
                    v = r;
                e !== 2 &&
                    ((e = 2),
                    d && clearTimeout(d),
                    (c = t),
                    (k = l || ""),
                    (f.readyState = n > 0 ? 4 : 0),
                    h && (it = wu(u, f, h)),
                    (n >= 200 && n < 300) || n === 304
                        ? (u.ifModified &&
                              ((p = f.getResponseHeader("Last-Modified")),
                              p && (i.lastModified[o] = p),
                              (p = f.getResponseHeader("Etag")),
                              p && (i.etag[o] = p)),
                          n === 304
                              ? ((v = "notmodified"), (a = !0))
                              : ((a = bu(u, it)), (v = a.state), (tt = a.data), (w = a.error), (a = !w)))
                        : ((w = v), (!v || n) && ((v = "error"), n < 0 && (n = 0))),
                    (f.status = n),
                    (f.statusText = (r || v) + ""),
                    a ? nt.resolveWith(s, [tt, v, f]) : nt.rejectWith(s, [f, v, w]),
                    f.statusCode(b),
                    (b = t),
                    y && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? tt : w]),
                    ut.fireWith(s, [f, v]),
                    y && (g.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")));
            }
            var tt, rt;
            typeof n == "object" && ((r = n), (n = t));
            r = r || {};
            var o,
                k,
                w,
                c,
                d,
                a,
                y,
                v,
                u = i.ajaxSetup({}, r),
                s = u.context || u,
                g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
                nt = i.Deferred(),
                ut = i.Callbacks("once memory"),
                b = u.statusCode || {},
                ft = {},
                et = {},
                e = 0,
                ot = "canceled",
                f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = et[i] = et[i] || n;
                            ft[n] = t;
                        }
                        return this;
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? k : null;
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!w) for (w = {}; (i = fo.exec(k)); ) w[i[1].toLowerCase()] = i[2];
                            i = w[n.toLowerCase()];
                        }
                        return i === t ? null : i;
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this;
                    },
                    abort: function (n) {
                        return (n = n || ot), c && c.abort(n), p(0, n), this;
                    },
                };
            if (
                (nt.promise(f),
                (f.success = f.done),
                (f.error = f.fail),
                (f.complete = ut.add),
                (f.statusCode = function (n) {
                    if (n) {
                        var t;
                        if (e < 2) for (t in n) b[t] = [b[t], n[t]];
                        else (t = n[f.status]), f.always(t);
                    }
                    return this;
                }),
                (u.url = ((n || u.url) + "").replace(uo, "").replace(oo, l[1] + "//")),
                (u.dataTypes = i
                    .trim(u.dataType || "*")
                    .toLowerCase()
                    .split(h)),
                u.crossDomain == null &&
                    ((a = su.exec(u.url.toLowerCase())),
                    (u.crossDomain = !(
                        !a ||
                        (a[1] === l[1] &&
                            a[2] === l[2] &&
                            (a[3] || (a[1] === "http:" ? 80 : 443)) == (l[3] || (l[1] === "http:" ? 80 : 443)))
                    ))),
                u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
                it(ii, u, r, f),
                e === 2)
            )
                return f;
            y = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !eo.test(u.type);
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent ||
                (u.data && ((u.url += (ou.test(u.url) ? "&" : "?") + u.data), delete u.data),
                (o = u.url),
                u.cache === !1 &&
                    ((tt = i.now()),
                    (rt = u.url.replace(ho, "$1_=" + tt)),
                    (u.url = rt + (rt === u.url ? (ou.test(u.url) ? "&" : "?") + "_=" + tt : ""))));
            ((u.data && u.hasContent && u.contentType !== !1) || r.contentType) &&
                f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified &&
                ((o = o || u.url),
                i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]),
                i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader(
                "Accept",
                u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                    ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + lu + "; q=0.01" : "")
                    : u.accepts["*"]
            );
            for (v in u.headers) f.setRequestHeader(v, u.headers[v]);
            if (!u.beforeSend || (u.beforeSend.call(s, f, u) !== !1 && e !== 2)) {
                ot = "abort";
                for (v in { success: 1, error: 1, complete: 1 }) f[v](u[v]);
                if (((c = it(cu, u, r, f)), c)) {
                    f.readyState = 1;
                    y && g.trigger("ajaxSend", [f, u]);
                    u.async &&
                        u.timeout > 0 &&
                        (d = setTimeout(function () {
                            f.abort("timeout");
                        }, u.timeout));
                    try {
                        e = 1;
                        c.send(ft, p);
                    } catch (st) {
                        if (!(e < 2)) throw st;
                        p(-1, st);
                    }
                } else p(-1, "No Transport");
                return f;
            }
            return f.abort();
        },
        active: 0,
        lastModified: {},
        etag: {},
    });
    var au = [],
        co = /\?/,
        st = /(=)\?(?=&|$)|\?\?/,
        lo = i.now();
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var n = au.pop() || i.expando + "_" + lo++;
            return (this[n] = !0), n;
        },
    });
    i.ajaxPrefilter("json jsonp", function (r, u, f) {
        var e,
            s,
            o,
            h = r.data,
            c = r.url,
            l = r.jsonp !== !1,
            a = l && st.test(c),
            v =
                l &&
                !a &&
                typeof h == "string" &&
                !(r.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                st.test(h);
        if (r.dataTypes[0] === "jsonp" || a || v)
            return (
                (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback),
                (s = n[e]),
                a
                    ? (r.url = c.replace(st, "$1" + e))
                    : v
                      ? (r.data = h.replace(st, "$1" + e))
                      : l && (r.url += (co.test(c) ? "&" : "?") + r.jsonp + "=" + e),
                (r.converters["script json"] = function () {
                    return o || i.error(e + " was not called"), o[0];
                }),
                (r.dataTypes[0] = "json"),
                (n[e] = function () {
                    o = arguments;
                }),
                f.always(function () {
                    n[e] = s;
                    r[e] && ((r.jsonpCallback = u.jsonpCallback), au.push(e));
                    o && i.isFunction(s) && s(o[0]);
                    o = s = t;
                }),
                "script"
            );
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /javascript|ecmascript/ },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n;
            },
        },
    });
    i.ajaxPrefilter("script", function (n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && ((n.type = "GET"), (n.global = !1));
    });
    i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var i,
                u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function (f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function (n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) &&
                            ((i.onload = i.onreadystatechange = null),
                            u && i.parentNode && u.removeChild(i),
                            (i = t),
                            r || e(200, "success"));
                    };
                    u.insertBefore(i, u.firstChild);
                },
                abort: function () {
                    i && i.onload(0, 1);
                },
            };
        }
    });
    ht = n.ActiveXObject
        ? function () {
              for (var n in w) w[n](0, 1);
          }
        : !1;
    vu = 0;
    (i.ajaxSettings.xhr = n.ActiveXObject
        ? function () {
              return (!this.isLocal && di()) || ku();
          }
        : di),
        (function (n) {
            i.extend(i.support, { ajax: !!n, cors: !!n && "withCredentials" in n });
        })(i.ajaxSettings.xhr());
    i.support.ajax &&
        i.ajaxTransport(function (r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function (f, e) {
                        var h,
                            s,
                            o = r.xhr();
                        if (
                            (r.username
                                ? o.open(r.type, r.url, r.async, r.username, r.password)
                                : o.open(r.type, r.url, r.async),
                            r.xhrFields)
                        )
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                        r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s]);
                        } catch (c) {}
                        o.send((r.hasContent && r.data) || null);
                        u = function (n, f) {
                            var s, a, v, c, l;
                            try {
                                if (u && (f || o.readyState === 4))
                                    if (((u = t), h && ((o.onreadystatechange = i.noop), ht && delete w[h]), f))
                                        o.readyState !== 4 && o.abort();
                                    else {
                                        s = o.status;
                                        v = o.getAllResponseHeaders();
                                        c = {};
                                        l = o.responseXML;
                                        l && l.documentElement && (c.xml = l);
                                        try {
                                            c.text = o.responseText;
                                        } catch (p) {}
                                        try {
                                            a = o.statusText;
                                        } catch (p) {
                                            a = "";
                                        }
                                        !s && r.isLocal && !r.crossDomain
                                            ? (s = c.text ? 200 : 404)
                                            : s === 1223 && (s = 204);
                                    }
                            } catch (y) {
                                f || e(-1, y);
                            }
                            c && e(s, a, c, v);
                        };
                        r.async
                            ? o.readyState === 4
                                ? setTimeout(u, 0)
                                : ((h = ++vu),
                                  ht && (w || ((w = {}), i(n).unload(ht)), (w[h] = u)),
                                  (o.onreadystatechange = u))
                            : u();
                    },
                    abort: function () {
                        u && u(0, 1);
                    },
                };
            }
        });
    var b,
        ct,
        ao = /^(?:toggle|show|hide)$/,
        vo = new RegExp("^(?:([-+])=|)(" + ft + ")([a-z%]*)$", "i"),
        yo = /queueHooks$/,
        lt = [nf],
        d = {
            "*": [
                function (n, t) {
                    var o,
                        s,
                        r = this.createTween(n, t),
                        e = vo.exec(t),
                        h = r.cur(),
                        u = +h || 0,
                        f = 1,
                        c = 20;
                    if (e) {
                        if (((o = +e[2]), (s = e[3] || (i.cssNumber[n] ? "" : "px")), s !== "px" && u)) {
                            u = i.css(r.elem, n, !0) || o || 1;
                            do (f = f || ".5"), (u /= f), i.style(r.elem, n, u + s);
                            while (f !== (f = r.cur() / h) && f !== 1 && --c);
                        }
                        r.unit = s;
                        r.start = u;
                        r.end = e[1] ? u + (e[1] + 1) * o : o;
                    }
                    return r;
                },
            ],
        };
    i.Animation = i.extend(nr, {
        tweener: function (n, t) {
            i.isFunction(n) ? ((t = n), (n = ["*"])) : (n = n.split(" "));
            for (var r, u = 0, f = n.length; u < f; u++) (r = n[u]), (d[r] = d[r] || []), d[r].unshift(t);
        },
        prefilter: function (n, t) {
            t ? lt.unshift(n) : lt.push(n);
        },
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px");
        },
        cur: function () {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this);
        },
        run: function (n) {
            var t,
                r = f.propHooks[this.prop];
            return (
                (this.pos = this.options.duration
                    ? (t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration))
                    : (t = n)),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                r && r.set ? r.set(this) : f.propHooks._default.set(this),
                this
            );
        },
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] == null || (!!n.elem.style && n.elem.style[n.prop] != null)
                    ? ((t = i.css(n.elem, n.prop, !1, "")), !t || t === "auto" ? 0 : t)
                    : n.elem[n.prop];
            },
            set: function (n) {
                i.fx.step[n.prop]
                    ? i.fx.step[n.prop](n)
                    : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop])
                      ? i.style(n.elem, n.prop, n.now + n.unit)
                      : (n.elem[n.prop] = n.now);
            },
        },
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
        },
    };
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (u, f, e) {
            return u == null || typeof u == "boolean" || (!n && i.isFunction(u) && i.isFunction(f))
                ? r.apply(this, arguments)
                : this.animate(rt(t, !0), u, f, e);
        };
    });
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(tt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r);
        },
        animate: function (n, t, r, u) {
            var e = i.isEmptyObject(n),
                f = i.speed(t, r, u),
                o = function () {
                    var t = nr(this, i.extend({}, n), f);
                    e && t.stop(!0);
                };
            return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o);
        },
        stop: function (n, r, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop;
                t(u);
            };
            return (
                typeof n != "string" && ((u = r), (r = n), (n = t)),
                r && n !== !1 && this.queue(n || "fx", []),
                this.each(function () {
                    var o = !0,
                        t = n != null && n + "queueHooks",
                        e = i.timers,
                        r = i._data(this);
                    if (t) r[t] && r[t].stop && f(r[t]);
                    else for (t in r) r[t] && r[t].stop && yo.test(t) && f(r[t]);
                    for (t = e.length; t--; )
                        e[t].elem === this &&
                            (n == null || e[t].queue === n) &&
                            (e[t].anim.stop(u), (o = !1), e.splice(t, 1));
                    (o || !u) && i.dequeue(this, n);
                })
            );
        },
    });
    i.each(
        {
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
        },
        function (n, t) {
            i.fn[n] = function (n, i, r) {
                return this.animate(t, n, i, r);
            };
        }
    );
    i.speed = function (n, t, r) {
        var u =
            n && typeof n == "object"
                ? i.extend({}, n)
                : {
                      complete: r || (!r && t) || (i.isFunction(n) && n),
                      duration: n,
                      easing: (r && t) || (t && !i.isFunction(t) && t),
                  };
        return (
            (u.duration = i.fx.off
                ? 0
                : typeof u.duration == "number"
                  ? u.duration
                  : u.duration in i.fx.speeds
                    ? i.fx.speeds[u.duration]
                    : i.fx.speeds._default),
            (u.queue == null || u.queue === !0) && (u.queue = "fx"),
            (u.old = u.complete),
            (u.complete = function () {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue);
            }),
            u
        );
    };
    i.easing = {
        linear: function (n) {
            return n;
        },
        swing: function (n) {
            return 0.5 - Math.cos(n * Math.PI) / 2;
        },
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function () {
        var u,
            n = i.timers,
            r = 0;
        for (b = i.now(); r < n.length; r++) (u = n[r]), u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        b = t;
    };
    i.fx.timer = function (n) {
        n() && i.timers.push(n) && !ct && (ct = setInterval(i.fx.tick, i.fx.interval));
    };
    i.fx.interval = 13;
    i.fx.stop = function () {
        clearInterval(ct);
        ct = null;
    };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fx.step = {};
    i.expr &&
        i.expr.filters &&
        (i.expr.filters.animated = function (n) {
            return i.grep(i.timers, function (t) {
                return n === t.elem;
            }).length;
        });
    ri = /^(?:body|html)$/i;
    i.fn.offset = function (n) {
        if (arguments.length)
            return n === t
                ? this
                : this.each(function (t) {
                      i.offset.setOffset(this, n, t);
                  });
        var u,
            o,
            s,
            h,
            c,
            l,
            a,
            f = { top: 0, left: 0 },
            r = this[0],
            e = r && r.ownerDocument;
        if (e)
            return (o = e.body) === r
                ? i.offset.bodyOffset(r)
                : ((u = e.documentElement),
                  i.contains(u, r)
                      ? (typeof r.getBoundingClientRect != "undefined" && (f = r.getBoundingClientRect()),
                        (s = tr(e)),
                        (h = u.clientTop || o.clientTop || 0),
                        (c = u.clientLeft || o.clientLeft || 0),
                        (l = s.pageYOffset || u.scrollTop),
                        (a = s.pageXOffset || u.scrollLeft),
                        { top: f.top + l - h, left: f.left + a - c })
                      : f);
    };
    i.offset = {
        bodyOffset: function (n) {
            var t = n.offsetTop,
                r = n.offsetLeft;
            return (
                i.support.doesNotIncludeMarginInBodyOffset &&
                    ((t += parseFloat(i.css(n, "marginTop")) || 0), (r += parseFloat(i.css(n, "marginLeft")) || 0)),
                { top: t, left: r }
            );
        },
        setOffset: function (n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n),
                o = e.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                s = {},
                h,
                c;
            v ? ((s = e.position()), (h = s.top), (c = s.left)) : ((h = parseFloat(l) || 0), (c = parseFloat(a) || 0));
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u);
        },
    };
    i.fn.extend({
        position: function () {
            if (this[0]) {
                var u = this[0],
                    n = this.offsetParent(),
                    t = this.offset(),
                    r = ri.test(n[0].nodeName) ? { top: 0, left: 0 } : n.offset();
                return (
                    (t.top -= parseFloat(i.css(u, "marginTop")) || 0),
                    (t.left -= parseFloat(i.css(u, "marginLeft")) || 0),
                    (r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0),
                    (r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0),
                    { top: t.top - r.top, left: t.left - r.left }
                );
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (
                    var n = this.offsetParent || r.body;
                    n && !ri.test(n.nodeName) && i.css(n, "position") === "static";

                )
                    n = n.offsetParent;
                return n || r.body;
            });
        },
    });
    i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(
                this,
                function (n, f, e) {
                    var o = tr(n);
                    if (e === t) return o ? (r in o ? o[r] : o.document.documentElement[f]) : n[f];
                    o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : (n[f] = e);
                },
                n,
                f,
                arguments.length,
                null
            );
        };
    });
    i.each({ Height: "height", Width: "width" }, function (n, r) {
        i.each({ padding: "inner" + n, content: r, "": "outer" + n }, function (u, f) {
            i.fn[f] = function (f, e) {
                var o = arguments.length && (u || typeof f != "boolean"),
                    s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(
                    this,
                    function (r, u, f) {
                        var e;
                        return i.isWindow(r)
                            ? r.document.documentElement["client" + n]
                            : r.nodeType === 9
                              ? ((e = r.documentElement),
                                Math.max(
                                    r.body["scroll" + n],
                                    e["scroll" + n],
                                    r.body["offset" + n],
                                    e["offset" + n],
                                    e["client" + n]
                                ))
                              : f === t
                                ? i.css(r, u, f, s)
                                : i.style(r, u, f, s);
                    },
                    r,
                    o ? f : t,
                    o,
                    null
                );
            };
        });
    });
    n.jQuery = n.$ = i;
    typeof define == "function" &&
        define.amd &&
        define.amd.jQuery &&
        define("jquery", [], function () {
            return i;
        });
})(window),
    (function (n, t) {
        for (
            var r = { _0x51887a: 378, _0x459a7d: 395, _0x2c827f: 362, _0x54bd03: 448, _0x12f18c: 412 },
                i = _0x4bbb,
                u = n(),
                f;
            !![];

        )
            try {
                if (
                    ((f =
                        parseInt(i(438)) / 1 +
                        parseInt(i(r._0x51887a)) / 2 +
                        parseInt(i(372)) / 3 +
                        parseInt(i(r._0x459a7d)) / 4 +
                        (parseInt(i(396)) / 5) * (-parseInt(i(r._0x2c827f)) / 6) +
                        parseInt(i(r._0x54bd03)) / 7 +
                        -parseInt(i(r._0x12f18c)) / 8),
                    f === t)
                )
                    break;
                else u.push(u.shift());
            } catch (e) {
                u.push(u.shift());
            }
    })(_0x43bd, 272598);
(lib_emtrade_quote = {}),
    (function (n) {
        function ht(n) {
            return ct(ft(h(n)));
        }
        function ft(n) {
            var t = _0x4bbb;
            return lt(nt(et(n), n[t(377) + "th"] * 8));
        }
        function ct(n) {
            var t = _0x4bbb,
                r,
                u,
                f,
                i;
            try {
                rt;
            } catch (c) {
                rt = 0;
            }
            for (
                r = rt ? "0123" + t(454) + "89AB" + t(408) : t(p._0x516abe) + t(p._0x267e66) + t(p._0x13703d) + t(391),
                    u = "",
                    i = 0;
                i < n.length;
                i++
            )
                if (t(402) + "g" == t(p._0x4e1e4d) + "g")
                    (f = n["char" + t(p._0x3f9e9e) + "At"](i)),
                        (u += r[t(p._0x95482b) + "At"]((f >>> 4) & 15) + r.charAt(f & 15));
                else {
                    var e = _0x57dbda,
                        o = _0x46fb99,
                        s = _0x4a3603,
                        h = _0x1d1e4a;
                    _0x11bbb3 = _0x4f44ad(
                        _0x2e7e40,
                        _0x43f5ae,
                        _0x361009,
                        _0x5d77fa,
                        _0x353171[_0x1e59ff + 0],
                        7,
                        -680876936
                    );
                    _0x57e0a9 = _0x513e05(
                        _0x539d3d,
                        _0x3786d5,
                        _0x3b385a,
                        _0x6414d7,
                        _0xf458b3[_0x572ba0 + 1],
                        12,
                        -389564586
                    );
                    _0x491edf = _0x130178(
                        _0x50d99c,
                        _0x26f11a,
                        _0x3f6092,
                        _0x22753a,
                        _0x51241a[_0x4b5f7f + 2],
                        17,
                        606105819
                    );
                    _0x43920c = _0x579026(
                        _0x3a3622,
                        _0x508529,
                        _0x44b300,
                        _0x5b0c87,
                        _0x2b7a00[_0x528d1e + 3],
                        22,
                        -1044525330
                    );
                    _0x598635 = _0xfe990(
                        _0x3d4083,
                        _0xe80909,
                        _0x1858f5,
                        _0x255c5b,
                        _0x34dd20[_0x573abe + 4],
                        7,
                        -176418897
                    );
                    _0x5b1843 = _0x5bd792(
                        _0x1fc449,
                        _0x5dc091,
                        _0x5c6f6a,
                        _0x2f3098,
                        _0x6be80f[_0x2ef610 + 5],
                        12,
                        1200080426
                    );
                    _0x51e329 = _0x3ce226(
                        _0x552fe4,
                        _0x575d04,
                        _0x125cb6,
                        _0xf7ea85,
                        _0x46e838[_0x27cab9 + 6],
                        17,
                        -1473231341
                    );
                    _0x3f4afe = _0x5d3bbb(
                        _0x21fc90,
                        _0x4f79e6,
                        _0x2cb3ca,
                        _0x1974f7,
                        _0x3b197d[_0x21a3c8 + 7],
                        22,
                        -45705983
                    );
                    _0x559c7d = _0xe04603(
                        _0x28a26f,
                        _0x199fec,
                        _0x140e2d,
                        _0x52059a,
                        _0x5e3180[_0x506221 + 8],
                        7,
                        1770035416
                    );
                    _0x18fdb4 = _0x4cf57e(
                        _0x18618d,
                        _0x570482,
                        _0x6ea271,
                        _0x5b85b8,
                        _0x131d76[_0x56577f + 9],
                        12,
                        -1958414417
                    );
                    _0x4d00bd = _0x1e073c(
                        _0x508baa,
                        _0x3dd56c,
                        _0x4cd08f,
                        _0x25953a,
                        _0x510f5a[_0x381787 + 10],
                        17,
                        -42063
                    );
                    _0x9ada36 = _0x43dc0c(
                        _0x1d4ec1,
                        _0x8ecddf,
                        _0x245f3c,
                        _0x3249d2,
                        _0x3e8ffc[_0x9e443e + 11],
                        22,
                        -1990404162
                    );
                    _0x367e94 = _0x59e6d1(
                        _0x32f4b0,
                        _0x1d00b9,
                        _0x1559ec,
                        _0x49a3f5,
                        _0x1bfb55[_0x44f7a1 + 12],
                        7,
                        1804603682
                    );
                    _0x4f6a12 = _0x501d4c(
                        _0x294f4c,
                        _0x5d8eab,
                        _0x4ba233,
                        _0xc1bafa,
                        _0x591761[_0x309c70 + 13],
                        12,
                        -40341101
                    );
                    _0xda9595 = _0x89975f(
                        _0x411a31,
                        _0x5e366f,
                        _0x38a5f6,
                        _0x24e4b6,
                        _0x449dac[_0x5ea9e4 + 14],
                        17,
                        -1502002290
                    );
                    _0xe12b3f = _0x5c0baf(
                        _0xfa3440,
                        _0x1f1eae,
                        _0x4a33c4,
                        _0x509c01,
                        _0x5045f6[_0x1dc88c + 15],
                        22,
                        1236535329
                    );
                    _0x1e1fa7 = _0x15f7f6(
                        _0x501f69,
                        _0x23f9a6,
                        _0x561645,
                        _0x376f23,
                        _0x17d75d[_0x4ad01f + 1],
                        5,
                        -165796510
                    );
                    _0x15c4ef = _0x1dcc64(
                        _0x40d813,
                        _0x44e7fd,
                        _0x2c2026,
                        _0x2163e9,
                        _0x12705e[_0x132c32 + 6],
                        9,
                        -1069501632
                    );
                    _0xf1f5f9 = _0x211a81(
                        _0x3314be,
                        _0x2123e7,
                        _0x80e0fe,
                        _0x209c21,
                        _0x25e7fc[_0x3bbe1b + 11],
                        14,
                        643717713
                    );
                    _0x5e5835 = _0x2fca02(
                        _0x93612f,
                        _0x3ed927,
                        _0xb8ff24,
                        _0x739463,
                        _0x8c8c9d[_0x500816 + 0],
                        20,
                        -373897302
                    );
                    _0x3be650 = _0x320a31(
                        _0x468fc6,
                        _0xd2ae65,
                        _0x50b9c7,
                        _0x1d12d1,
                        _0xa8455b[_0x3a3340 + 5],
                        5,
                        -701558691
                    );
                    _0x2299ef = _0x3cba9a(
                        _0x1ccc7a,
                        _0x5c575b,
                        _0x36c404,
                        _0x4d2d26,
                        _0x2b2dbd[_0x3f334b + 10],
                        9,
                        38016083
                    );
                    _0x1ca0ac = _0x30b397(
                        _0x2f0c0a,
                        _0x20a235,
                        _0x4d74fc,
                        _0x5bc6ee,
                        _0x3aeba6[_0x46abb0 + 15],
                        14,
                        -660478335
                    );
                    _0x44167c = _0x5d9db3(
                        _0x47b5bc,
                        _0x39ad52,
                        _0x291a03,
                        _0x4fc7b4,
                        _0x409bae[_0x23c507 + 4],
                        20,
                        -405537848
                    );
                    _0x207c2c = _0x38bc17(
                        _0x5771c6,
                        _0x378b2c,
                        _0x17ec3e,
                        _0x3c15c5,
                        _0x4ab9f6[_0x4d8d15 + 9],
                        5,
                        568446438
                    );
                    _0x40259b = _0x1bdd2e(
                        _0x3f2e4c,
                        _0x3dedd6,
                        _0x2d03de,
                        _0x5efca6,
                        _0x26042b[_0x8f9b3b + 14],
                        9,
                        -1019803690
                    );
                    _0x5ed500 = _0x5628d3(
                        _0x33f505,
                        _0xdfa128,
                        _0x4e591e,
                        _0x345123,
                        _0x5e2cd8[_0x40ba8f + 3],
                        14,
                        -187363961
                    );
                    _0x1c0510 = _0x4fe9d2(
                        _0x2176a6,
                        _0x462a5f,
                        _0xec5ee3,
                        _0x44d486,
                        _0x5a896b[_0x28f34b + 8],
                        20,
                        1163531501
                    );
                    _0x1b1982 = _0x4bb79f(
                        _0x5bdaaf,
                        _0x464947,
                        _0x4fbf18,
                        _0x57db66,
                        _0x29223d[_0x1fe49f + 13],
                        5,
                        -1444681467
                    );
                    _0x3ba3c6 = _0x171230(
                        _0x448383,
                        _0xf91e3f,
                        _0x3f1cb6,
                        _0x50bac1,
                        _0x3497e8[_0x4b703f + 2],
                        9,
                        -51403784
                    );
                    _0x51e7c5 = _0x17980c(
                        _0x41f2a9,
                        _0x74fd83,
                        _0x325e11,
                        _0x4aa0e5,
                        _0x42fdce[_0x5673ee + 7],
                        14,
                        1735328473
                    );
                    _0x32f87d = _0x2144b0(
                        _0x1ade5c,
                        _0xde63d1,
                        _0x2d1e97,
                        _0x3708e1,
                        _0x4490a4[_0x4a24a1 + 12],
                        20,
                        -1926607734
                    );
                    _0x4fdbac = _0x27a20d(
                        _0x382e5f,
                        _0x412df0,
                        _0x4cfe5a,
                        _0x4a8564,
                        _0x3c0b4a[_0x3755d8 + 5],
                        4,
                        -378558
                    );
                    _0x33cbdf = _0x1da99f(
                        _0x2f7743,
                        _0x37721e,
                        _0x326fb8,
                        _0x2bf0c9,
                        _0x311bcb[_0x35b592 + 8],
                        11,
                        -2022574463
                    );
                    _0x55a41b = _0x2aa460(
                        _0x3d7546,
                        _0x4bc5df,
                        _0x319048,
                        _0x866eaa,
                        _0x1a271a[_0x288d09 + 11],
                        16,
                        1839030562
                    );
                    _0x4b40fb = _0x4e8170(
                        _0x505f1b,
                        _0x332dab,
                        _0x43b644,
                        _0x180f94,
                        _0x1c8b26[_0x145f45 + 14],
                        23,
                        -35309556
                    );
                    _0x42d053 = _0x1db26c(
                        _0x2bb98f,
                        _0x2d282b,
                        _0x52062f,
                        _0x5c4caa,
                        _0x12d03c[_0x497f8d + 1],
                        4,
                        -1530992060
                    );
                    _0x357eb8 = _0x43f921(
                        _0x4a599e,
                        _0x274ec5,
                        _0x23b711,
                        _0x1c8c91,
                        _0x4f0e23[_0x38c594 + 4],
                        11,
                        1272893353
                    );
                    _0x5aab0d = _0x53b29f(
                        _0x20af87,
                        _0x54f00f,
                        _0x8810d,
                        _0x4ce6e4,
                        _0x36d08d[_0x417091 + 7],
                        16,
                        -155497632
                    );
                    _0x363b7c = _0x56e84a(
                        _0x452ee6,
                        _0x54c736,
                        _0x2b61f3,
                        _0x1f5a04,
                        _0x3262e6[_0x4e308d + 10],
                        23,
                        -1094730640
                    );
                    _0xa638de = _0x1bb8f8(
                        _0x558c73,
                        _0x37550c,
                        _0x2f7301,
                        _0x29d486,
                        _0x943745[_0xf7dec8 + 13],
                        4,
                        681279174
                    );
                    _0x32876f = _0x43b596(
                        _0x12a1e8,
                        _0x158eb9,
                        _0x2ccecf,
                        _0xaf7304,
                        _0x10a623[_0x595dd5 + 0],
                        11,
                        -358537222
                    );
                    _0x5cb585 = _0x390470(
                        _0x3ed447,
                        _0x5dd982,
                        _0x2eb83f,
                        _0x4ee782,
                        _0x5da418[_0x36e87b + 3],
                        16,
                        -722521979
                    );
                    _0x89691f = _0x2c4587(
                        _0x40b937,
                        _0x1d103e,
                        _0x106342,
                        _0x25cb18,
                        _0xf345c0[_0x5bebec + 6],
                        23,
                        76029189
                    );
                    _0x47b154 = _0x284203(
                        _0x374769,
                        _0x12aa4c,
                        _0x15fbb5,
                        _0x36844d,
                        _0x535b49[_0x34d72e + 9],
                        4,
                        -640364487
                    );
                    _0x1de50d = _0x2fe7b0(
                        _0x255f29,
                        _0x5c4758,
                        _0x57d7f4,
                        _0x5a4c11,
                        _0x9c9a2d[_0x2755bd + 12],
                        11,
                        -421815835
                    );
                    _0x4ec0e1 = _0x3d2a7e(
                        _0x4d4235,
                        _0x4c4b18,
                        _0x3c36d3,
                        _0x1835a1,
                        _0x4937b0[_0x285909 + 15],
                        16,
                        530742520
                    );
                    _0x246234 = _0x247799(
                        _0x229444,
                        _0x78bf3c,
                        _0x24e03c,
                        _0x40e35b,
                        _0x38980d[_0x458d79 + 2],
                        23,
                        -995338651
                    );
                    _0x5b32c7 = _0x30165a(
                        _0x2db4f4,
                        _0x1a0401,
                        _0x167478,
                        _0x1d3b72,
                        _0x6aa3a3[_0x1fc3a7 + 0],
                        6,
                        -198630844
                    );
                    _0x16d94e = _0x3c117e(
                        _0x3dd275,
                        _0x3f8571,
                        _0x4230e2,
                        _0x815329,
                        _0x430aed[_0x45e43f + 7],
                        10,
                        1126891415
                    );
                    _0x1ccc08 = _0x39ef27(
                        _0x501023,
                        _0x2f189a,
                        _0x201d95,
                        _0x56ad8e,
                        _0x2fb2aa[_0x2049f9 + 14],
                        15,
                        -1416354905
                    );
                    _0x2f87b0 = _0x2d5dcf(
                        _0x3f3572,
                        _0x144471,
                        _0x169a32,
                        _0x3bec66,
                        _0x464fbe[_0xc8e9ad + 5],
                        21,
                        -57434055
                    );
                    _0x393960 = _0x1897a0(
                        _0x42ebbe,
                        _0x234efb,
                        _0xbbc675,
                        _0x47a3aa,
                        _0x571877[_0x37ef60 + 12],
                        6,
                        1700485571
                    );
                    _0x4115ba = _0x37688c(
                        _0x2b6bf2,
                        _0x4a9384,
                        _0x97ab4b,
                        _0x5a63bb,
                        _0x1c2454[_0x16eb43 + 3],
                        10,
                        -1894986606
                    );
                    _0x5746e5 = _0x130455(
                        _0x317e2f,
                        _0x39c366,
                        _0x4b4296,
                        _0x4fe6b4,
                        _0x2dc854[_0x22ec3f + 10],
                        15,
                        -1051523
                    );
                    _0x4bd05f = _0x487201(
                        _0x130d19,
                        _0x27dc4d,
                        _0x411f52,
                        _0xabe6f5,
                        _0x7fe054[_0x185fb8 + 1],
                        21,
                        -2054922799
                    );
                    _0x5181e2 = _0x515973(
                        _0xed5327,
                        _0x22158c,
                        _0x5db6a6,
                        _0xce3fe9,
                        _0x4a91fe[_0x5b0caa + 8],
                        6,
                        1873313359
                    );
                    _0x1a2e7c = _0x532e18(
                        _0x3e1387,
                        _0x431982,
                        _0xd47594,
                        _0x9a93d8,
                        _0x8e707c[_0x50eee2 + 15],
                        10,
                        -30611744
                    );
                    _0x3ad820 = _0x3b8b11(
                        _0x169f5d,
                        _0x4882a9,
                        _0x5b8e1b,
                        _0x5b452c,
                        _0x2d1e6a[_0x3c64ac + 6],
                        15,
                        -1560198380
                    );
                    _0x23d70e = _0x4fce52(
                        _0x11ce8e,
                        _0x408c57,
                        _0x28382e,
                        _0xb0aa21,
                        _0x328474[_0x14c71a + 13],
                        21,
                        1309151649
                    );
                    _0x2f1dcb = _0x21513e(
                        _0x49473c,
                        _0x172b66,
                        _0x17a70e,
                        _0x10c3e8,
                        _0x1be63f[_0x15abe7 + 4],
                        6,
                        -145523070
                    );
                    _0x274de5 = _0x3fcdb7(
                        _0x3c03d4,
                        _0x33ef03,
                        _0x5c1e81,
                        _0x40230c,
                        _0x5b6625[_0x36c472 + 11],
                        10,
                        -1120210379
                    );
                    _0x3efdc8 = _0x4edeb0(
                        _0x32d9ea,
                        _0x12234e,
                        _0x53e850,
                        _0x2bcc9a,
                        _0x1a8d1c[_0x5b3e96 + 2],
                        15,
                        718787259
                    );
                    _0x55841b = _0x2b229c(
                        _0xbb7f11,
                        _0xf630e5,
                        _0x29e141,
                        _0x3884ff,
                        _0x591f36[_0x2eef0b + 9],
                        21,
                        -343485551
                    );
                    _0x5842c2 = _0x300644(_0x361f22, e);
                    _0x2d4a1b = _0x178b9b(_0x57dbd9, o);
                    _0x64ee05 = _0x1e4575(_0x57b774, s);
                    _0x2baa91 = _0x4015ce(_0x1e2a1f, h);
                }
            return u;
        }
        function h(n) {
            for (var i = _0x4bbb, r = "", u = -1, t, f; ++u < n[i(377) + "th"]; )
                (t = n["char" + i(444) + "At"](u)),
                    (f = u + 1 < n[i(y._0x3179d6) + "th"] ? n[i(437) + "CodeAt"](u + 1) : 0),
                    55296 <= t &&
                        t <= 56319 &&
                        56320 <= f &&
                        f <= 57343 &&
                        ((t = 65536 + ((t & 1023) << 10) + (f & 1023)), u++),
                    t <= 127
                        ? (r += String[i(449) + i(y._0x4943f1) + "Code"](t))
                        : t <= 2047
                          ? (r += String[i(y._0x8632c0) + i(369) + i(y._0x5a6464)](
                                192 | ((t >>> 6) & 31),
                                128 | (t & 63)
                            ))
                          : t <= 65535
                            ? (r += String[i(449) + i(y._0x15553f) + i(y._0x5a6464)](
                                  224 | ((t >>> 12) & 15),
                                  128 | ((t >>> 6) & 63),
                                  128 | (t & 63)
                              ))
                            : t <= 2097151 &&
                              (r += String[i(449) + "CharCode"](
                                  240 | ((t >>> 18) & 7),
                                  128 | ((t >>> 12) & 63),
                                  128 | ((t >>> 6) & 63),
                                  128 | (t & 63)
                              ));
            return r;
        }
        function et(n) {
            for (var i = _0x4bbb, r = Array(n[i(st._0x174270) + "th"] >> 2), t = 0; t < r[i(377) + "th"]; t++) r[t] = 0;
            for (t = 0; t < n[i(st._0x2a9503) + "th"] * 8; t += 8)
                r[t >> 5] |= (n["char" + i(444) + "At"](t / 8) & 255) << t % 32;
            return r;
        }
        function lt(n) {
            for (var i = _0x4bbb, r = "", t = 0; t < n.length * 32; t += 8)
                r += String[i(449) + i(369) + "Code"]((n[t >> 5] >>> t % 32) & 255);
            return r;
        }
        function nt(n, f) {
            var c;
            n[f >> 5] |= 128 << f % 32;
            n[(((f + 64) >>> 9) << 4) + 14] = f;
            var e = 1732584193,
                o = -271733879,
                s = -1732584194,
                h = 271733878;
            for (c = 0; c < n.length; c += 16) {
                var l = e,
                    a = o,
                    y = s,
                    p = h;
                e = t(e, o, s, h, n[c + 0], 7, -680876936);
                h = t(h, e, o, s, n[c + 1], 12, -389564586);
                s = t(s, h, e, o, n[c + 2], 17, 606105819);
                o = t(o, s, h, e, n[c + 3], 22, -1044525330);
                e = t(e, o, s, h, n[c + 4], 7, -176418897);
                h = t(h, e, o, s, n[c + 5], 12, 1200080426);
                s = t(s, h, e, o, n[c + 6], 17, -1473231341);
                o = t(o, s, h, e, n[c + 7], 22, -45705983);
                e = t(e, o, s, h, n[c + 8], 7, 1770035416);
                h = t(h, e, o, s, n[c + 9], 12, -1958414417);
                s = t(s, h, e, o, n[c + 10], 17, -42063);
                o = t(o, s, h, e, n[c + 11], 22, -1990404162);
                e = t(e, o, s, h, n[c + 12], 7, 1804603682);
                h = t(h, e, o, s, n[c + 13], 12, -40341101);
                s = t(s, h, e, o, n[c + 14], 17, -1502002290);
                o = t(o, s, h, e, n[c + 15], 22, 1236535329);
                e = i(e, o, s, h, n[c + 1], 5, -165796510);
                h = i(h, e, o, s, n[c + 6], 9, -1069501632);
                s = i(s, h, e, o, n[c + 11], 14, 643717713);
                o = i(o, s, h, e, n[c + 0], 20, -373897302);
                e = i(e, o, s, h, n[c + 5], 5, -701558691);
                h = i(h, e, o, s, n[c + 10], 9, 38016083);
                s = i(s, h, e, o, n[c + 15], 14, -660478335);
                o = i(o, s, h, e, n[c + 4], 20, -405537848);
                e = i(e, o, s, h, n[c + 9], 5, 568446438);
                h = i(h, e, o, s, n[c + 14], 9, -1019803690);
                s = i(s, h, e, o, n[c + 3], 14, -187363961);
                o = i(o, s, h, e, n[c + 8], 20, 1163531501);
                e = i(e, o, s, h, n[c + 13], 5, -1444681467);
                h = i(h, e, o, s, n[c + 2], 9, -51403784);
                s = i(s, h, e, o, n[c + 7], 14, 1735328473);
                o = i(o, s, h, e, n[c + 12], 20, -1926607734);
                e = r(e, o, s, h, n[c + 5], 4, -378558);
                h = r(h, e, o, s, n[c + 8], 11, -2022574463);
                s = r(s, h, e, o, n[c + 11], 16, 1839030562);
                o = r(o, s, h, e, n[c + 14], 23, -35309556);
                e = r(e, o, s, h, n[c + 1], 4, -1530992060);
                h = r(h, e, o, s, n[c + 4], 11, 1272893353);
                s = r(s, h, e, o, n[c + 7], 16, -155497632);
                o = r(o, s, h, e, n[c + 10], 23, -1094730640);
                e = r(e, o, s, h, n[c + 13], 4, 681279174);
                h = r(h, e, o, s, n[c + 0], 11, -358537222);
                s = r(s, h, e, o, n[c + 3], 16, -722521979);
                o = r(o, s, h, e, n[c + 6], 23, 76029189);
                e = r(e, o, s, h, n[c + 9], 4, -640364487);
                h = r(h, e, o, s, n[c + 12], 11, -421815835);
                s = r(s, h, e, o, n[c + 15], 16, 530742520);
                o = r(o, s, h, e, n[c + 2], 23, -995338651);
                e = u(e, o, s, h, n[c + 0], 6, -198630844);
                h = u(h, e, o, s, n[c + 7], 10, 1126891415);
                s = u(s, h, e, o, n[c + 14], 15, -1416354905);
                o = u(o, s, h, e, n[c + 5], 21, -57434055);
                e = u(e, o, s, h, n[c + 12], 6, 1700485571);
                h = u(h, e, o, s, n[c + 3], 10, -1894986606);
                s = u(s, h, e, o, n[c + 10], 15, -1051523);
                o = u(o, s, h, e, n[c + 1], 21, -2054922799);
                e = u(e, o, s, h, n[c + 8], 6, 1873313359);
                h = u(h, e, o, s, n[c + 15], 10, -30611744);
                s = u(s, h, e, o, n[c + 6], 15, -1560198380);
                o = u(o, s, h, e, n[c + 13], 21, 1309151649);
                e = u(e, o, s, h, n[c + 4], 6, -145523070);
                h = u(h, e, o, s, n[c + 11], 10, -1120210379);
                s = u(s, h, e, o, n[c + 2], 15, 718787259);
                o = u(o, s, h, e, n[c + 9], 21, -343485551);
                e = v(e, l);
                o = v(o, a);
                s = v(s, y);
                h = v(h, p);
            }
            return Array(e, o, s, h);
        }
        function tt(n, t, i, r, u, f) {
            var e = _0x4bbb;
            return e(388) + "p" == e(yt._0x16e24e) + "p"
                ? v(pt(v(v(t, n), v(r, f)), u), i)
                : _0x42189f(_0x4c0200(_0x33ce01(_0x22c363)), _0x538d02);
        }
        function t(n, t, i, r, u, f, e) {
            return tt((t & i) | (~t & r), n, t, u, f, e);
        }
        function i(n, t, i, r, u, f, e) {
            return tt((t & r) | (i & ~r), n, t, u, f, e);
        }
        function r(n, t, i, r, u, f, e) {
            return tt(t ^ i ^ r, n, t, u, f, e);
        }
        function u(n, t, i, r, u, f, e) {
            return tt(i ^ (t | ~r), n, t, u, f, e);
        }
        function v(n, t) {
            var i = _0x4bbb,
                u,
                s,
                f,
                e,
                o,
                r;
            if (i(431) + "K" == i(431) + "K")
                return (
                    (u = (n & 65535) + (t & 65535)), (s = (n >> 16) + (t >> 16) + (u >> 16)), (s << 16) | (u & 65535)
                );
            try {
                _0x1aed37;
            } catch (h) {
                _0x39ee64 = 0;
            }
            for (
                f = _0xee2849
                    ? "0123" + i(d._0x544677) + "89AB" + i(d._0x4259fe)
                    : i(422) + i(454) + i(d._0x35e7d6) + i(d._0x347b54),
                    e = "",
                    r = 0;
                r < _0x2a981c[i(377) + "th"];
                r++
            )
                (o = _0x12a9b5[i(437) + i(444) + "At"](r)),
                    (e += f[i(437) + "At"]((o >>> 4) & 15) + f[i(d._0x2bab7b) + "At"](o & 15));
            return e;
        }
        function pt(n, t) {
            return (n << t) | (n >>> (32 - t));
        }
        function at() {
            var f = _0x4bbb,
                u;
            if ("uokhv" == f(419) + "v") return f(it._0x4bd747) + f(356) + f(it._0x2544a1) + f(409) + f(414) + "b";
            _0x910306[_0x3be7e3 >> 5] |= 128 << _0x2002a3 % 32;
            _0x25dc6a[(((_0x283eab + 64) >>> 9) << 4) + 14] = _0x5f8121;
            var n = 1732584193,
                t = -271733879,
                i = -1732584194,
                r = 271733878;
            for (u = 0; u < _0x14b7a7[f(it._0x1585af) + "th"]; u += 16) {
                var e = n,
                    o = t,
                    s = i,
                    h = r;
                n = _0x2b5851(n, t, i, r, _0xcbb2a7[u + 0], 7, -680876936);
                r = _0x2fcfd3(r, n, t, i, _0x17a8ca[u + 1], 12, -389564586);
                i = _0x3484c6(i, r, n, t, _0x58fe94[u + 2], 17, 606105819);
                t = _0x11b287(t, i, r, n, _0x395b6a[u + 3], 22, -1044525330);
                n = _0x301735(n, t, i, r, _0x10debe[u + 4], 7, -176418897);
                r = _0x423655(r, n, t, i, _0x1ca47c[u + 5], 12, 1200080426);
                i = _0x20e928(i, r, n, t, _0x695452[u + 6], 17, -1473231341);
                t = _0x20043d(t, i, r, n, _0x55b95e[u + 7], 22, -45705983);
                n = _0x4d7380(n, t, i, r, _0x261014[u + 8], 7, 1770035416);
                r = _0x4f6c11(r, n, t, i, _0x56b38c[u + 9], 12, -1958414417);
                i = _0x5785ca(i, r, n, t, _0x130e77[u + 10], 17, -42063);
                t = _0x5bc14c(t, i, r, n, _0x42c97f[u + 11], 22, -1990404162);
                n = _0x24afd4(n, t, i, r, _0x5239e5[u + 12], 7, 1804603682);
                r = _0xee2e0f(r, n, t, i, _0x587b05[u + 13], 12, -40341101);
                i = _0x3e2ea2(i, r, n, t, _0x52d9a5[u + 14], 17, -1502002290);
                t = _0x4e61d6(t, i, r, n, _0x10c265[u + 15], 22, 1236535329);
                n = _0x173e46(n, t, i, r, _0xb77903[u + 1], 5, -165796510);
                r = _0x3cebdf(r, n, t, i, _0x58da18[u + 6], 9, -1069501632);
                i = _0x20b380(i, r, n, t, _0x4f5e8f[u + 11], 14, 643717713);
                t = _0x5d37d2(t, i, r, n, _0x2cbc84[u + 0], 20, -373897302);
                n = _0x21468b(n, t, i, r, _0x33619e[u + 5], 5, -701558691);
                r = _0xb0eca1(r, n, t, i, _0x190ba0[u + 10], 9, 38016083);
                i = _0x313794(i, r, n, t, _0x37c3fc[u + 15], 14, -660478335);
                t = _0xeb811b(t, i, r, n, _0x55ca2a[u + 4], 20, -405537848);
                n = _0x4acb55(n, t, i, r, _0x7e82f9[u + 9], 5, 568446438);
                r = _0x336612(r, n, t, i, _0x46fac9[u + 14], 9, -1019803690);
                i = _0x5c0388(i, r, n, t, _0x385403[u + 3], 14, -187363961);
                t = _0x2d5760(t, i, r, n, _0x36fd36[u + 8], 20, 1163531501);
                n = _0x2c689b(n, t, i, r, _0xb14c0b[u + 13], 5, -1444681467);
                r = _0x389c6d(r, n, t, i, _0x3c6c9a[u + 2], 9, -51403784);
                i = _0x3a9239(i, r, n, t, _0x511e7d[u + 7], 14, 1735328473);
                t = _0x1cf23c(t, i, r, n, _0x40ca4b[u + 12], 20, -1926607734);
                n = _0xea37e1(n, t, i, r, _0x563fab[u + 5], 4, -378558);
                r = _0x335274(r, n, t, i, _0x408d34[u + 8], 11, -2022574463);
                i = _0x568f28(i, r, n, t, _0x4647c4[u + 11], 16, 1839030562);
                t = _0x3a1a6d(t, i, r, n, _0x330024[u + 14], 23, -35309556);
                n = _0x50f7b2(n, t, i, r, _0x23430f[u + 1], 4, -1530992060);
                r = _0x237344(r, n, t, i, _0x4ed77a[u + 4], 11, 1272893353);
                i = _0xb04b88(i, r, n, t, _0x254eea[u + 7], 16, -155497632);
                t = _0x1b4342(t, i, r, n, _0x4e62e5[u + 10], 23, -1094730640);
                n = _0x6a9229(n, t, i, r, _0xd0a1b4[u + 13], 4, 681279174);
                r = _0x278f51(r, n, t, i, _0x23b6c8[u + 0], 11, -358537222);
                i = _0x3e1061(i, r, n, t, _0x4b6b97[u + 3], 16, -722521979);
                t = _0x556ae0(t, i, r, n, _0x2c775d[u + 6], 23, 76029189);
                n = _0x5bc402(n, t, i, r, _0x3597d9[u + 9], 4, -640364487);
                r = _0x34f33c(r, n, t, i, _0x47e3bb[u + 12], 11, -421815835);
                i = _0x174fb9(i, r, n, t, _0x437d7c[u + 15], 16, 530742520);
                t = _0x189fb1(t, i, r, n, _0x4bc6ec[u + 2], 23, -995338651);
                n = _0x4aa8aa(n, t, i, r, _0x5b74cb[u + 0], 6, -198630844);
                r = _0x239808(r, n, t, i, _0x1e1916[u + 7], 10, 1126891415);
                i = _0x474674(i, r, n, t, _0x100b9d[u + 14], 15, -1416354905);
                t = _0x388486(t, i, r, n, _0x44b1f9[u + 5], 21, -57434055);
                n = _0x2412a4(n, t, i, r, _0x5a28c6[u + 12], 6, 1700485571);
                r = _0x547aaf(r, n, t, i, _0x5462df[u + 3], 10, -1894986606);
                i = _0x58dc09(i, r, n, t, _0x1d9638[u + 10], 15, -1051523);
                t = _0x48a00d(t, i, r, n, _0x260751[u + 1], 21, -2054922799);
                n = _0x5db09b(n, t, i, r, _0x179e29[u + 8], 6, 1873313359);
                r = _0x60faeb(r, n, t, i, _0x5765b2[u + 15], 10, -30611744);
                i = _0x478941(i, r, n, t, _0x2250bb[u + 6], 15, -1560198380);
                t = _0x229f25(t, i, r, n, _0x4c5ea6[u + 13], 21, 1309151649);
                n = _0x3197ac(n, t, i, r, _0xf9b072[u + 4], 6, -145523070);
                r = _0x540e24(r, n, t, i, _0x28e365[u + 11], 10, -1120210379);
                i = _0x2d9738(i, r, n, t, _0x5cf0a9[u + 2], 15, 718787259);
                t = _0x442e11(t, i, r, n, _0x4307f5[u + 9], 21, -343485551);
                n = _0x1c5d8c(n, e);
                t = _0x56d450(t, o);
                i = _0x148522(i, s);
                r = _0x5ca14c(r, h);
            }
            return _0x25ebcd(n, t, i, r);
        }
        function vt() {
            var n = _0x4bbb;
            return window[n(453) + "StampAdj" + n(l._0x34071c)] != undefined
                ? n(427) + "q" != n(427) + "q"
                    ? _0x1af633(_0x23586e(_0x4177ac(_0x19329c)))
                    : (new Date()[n(l._0x150f53) + "ime"]() + window[n(l._0x5ee348) + "StampAdj" + n(l._0x498f02)])[
                          n(392) + n(l._0x30424e)
                      ]()
                : new Date()[n(l._0x150f53) + n(442)]()[n(l._0x29ecb0) + n(l._0x3a9bf5)]();
        }
        function wt() {
            var t = _0x4bbb,
                n = bt();
            return n[t(ot._0x18cf64) + "tr"](0, 4) + n.substr(36, 4) + n[t(ot._0x422e94) + "tr"](72, 2);
        }
        function bt() {
            var n = _0x4bbb;
            return (
                n(415) +
                "c1ea" +
                n(o._0x397e62) +
                n(o._0x45891c) +
                "478f" +
                n(418) +
                n(406) +
                n(o._0x30fd04) +
                n(o._0x55a68d) +
                n(o._0x40cbb6) +
                n(o._0x4fffc0) +
                n(458) +
                "9caa" +
                n(389) +
                n(o._0x130ad3) +
                n(o._0x5ca8c2) +
                n(432) +
                n(o._0x48b236) +
                n(368) +
                n(440) +
                n(o._0x2f1ade) +
                n(o._0x297674) +
                n(436) +
                "25oc1ea1" +
                n(o._0x480a74) +
                "7054" +
                n(404) +
                n(445) +
                "54cda"
            );
        }
        var k = { _0x1dc286: 455, _0x21284f: 400, _0xffa028: 374, _0x58f232: 390, _0x189024: 443 },
            c = { _0x5bafe6: 437, _0x3a7167: 444, _0x550296: 437, _0x585955: 369, _0x213820: 444, _0x2c69ed: 449 },
            o = {
                _0x397e62: 434,
                _0x45891c: 383,
                _0x30fd04: 355,
                _0x55a68d: 421,
                _0x40cbb6: 381,
                _0x4fffc0: 394,
                _0x130ad3: 401,
                _0x5ca8c2: 410,
                _0x48b236: 358,
                _0x2f1ade: 450,
                _0x297674: 433,
                _0x480a74: 411,
            },
            ot = { _0x18cf64: 393, _0x422e94: 393 },
            l = {
                _0x34071c: 423,
                _0x150f53: 439,
                _0x5ee348: 453,
                _0x498f02: 423,
                _0x30424e: 364,
                _0x29ecb0: 392,
                _0x3a9bf5: 364,
            },
            it = { _0x4bd747: 357, _0x2544a1: 424, _0x1585af: 377 },
            d = { _0x544677: 454, _0x4259fe: 408, _0x35e7d6: 405, _0x347b54: 391, _0x2bab7b: 437 },
            yt = { _0x16e24e: 388 },
            st = { _0x174270: 377, _0x2a9503: 377 },
            g = { _0x3558b6: 447, _0x407443: 377, _0x3fa1bf: 369, _0x230fd8: 444, _0x9d6ff6: 444 },
            f = {
                _0x369e50: 361,
                _0x542881: 437,
                _0x333ca4: 444,
                _0x296fb6: 369,
                _0x5d4836: 449,
                _0x49e749: 369,
                _0x144c50: 377,
                _0x1f8167: 444,
            },
            y = { _0x3179d6: 377, _0x4943f1: 369, _0x8632c0: 449, _0x5a6464: 444, _0x15553f: 369 },
            s = {
                _0x15e6ad: 377,
                _0xeab1f4: 380,
                _0x4cb4ee: 377,
                _0x16f30c: 444,
                _0x148774: 377,
                _0x51d933: 377,
                _0x5c227e: 377,
            },
            e = {
                _0x5eddf5: 457,
                _0x339582: 407,
                _0x1349f1: 391,
                _0x456e3e: 425,
                _0x3ba215: 370,
                _0x1e3368: 363,
                _0x44dbcf: 367,
                _0x4b58cd: 377,
                _0x59ec3a: 456,
                _0x143c30: 456,
                _0x36cb00: 437,
                _0x46dfea: 444,
            },
            p = { _0x516abe: 422, _0x267e66: 454, _0x13703d: 405, _0x4e1e4d: 402, _0x3f9e9e: 444, _0x95482b: 437 },
            w = { _0x169e43: 377, _0x22df00: 430, _0x414b6b: 413, _0x5549c7: 377 },
            a = {
                _0x50b3d7: 373,
                _0x484272: 451,
                _0x2a731b: 384,
                _0x2c9dfc: 400,
                _0x4c4729: 429,
                _0x537087: 374,
                _0x5c66fc: 390,
            },
            b = _0x4bbb,
            rt = 0,
            ut = "";
        n[b({ _0x42fe28: 439 }._0x42fe28) + b(399) + b(397)] = function () {
            var t = b,
                i,
                r,
                n,
                u;
            if (t(441) + "x" == t(441) + "x") return vt();
            for (i = "", r = -1; ++r < _0x2154b5.length; )
                (n = _0x463368[t(c._0x5bafe6) + t(c._0x3a7167) + "At"](r)),
                    (u = r + 1 < _0x3c8c11.length ? _0x118ea1[t(c._0x550296) + t(444) + "At"](r + 1) : 0),
                    55296 <= n &&
                        n <= 56319 &&
                        56320 <= u &&
                        u <= 57343 &&
                        ((n = 65536 + ((n & 1023) << 10) + (u & 1023)), r++),
                    n <= 127
                        ? (i += _0x41ef[t(449) + t(369) + t(444)](n))
                        : n <= 2047
                          ? (i += _0x4a5af4["from" + t(c._0x585955) + t(c._0x213820)](
                                192 | ((n >>> 6) & 31),
                                128 | (n & 63)
                            ))
                          : n <= 65535
                            ? (i += _0x3f807b[t(c._0x2c69ed) + "CharCode"](
                                  224 | ((n >>> 12) & 15),
                                  128 | ((n >>> 6) & 63),
                                  128 | (n & 63)
                              ))
                            : n <= 2097151 &&
                              (i += _0x51aa3f[t(c._0x2c69ed) + t(369) + t(c._0x213820)](
                                  240 | ((n >>> 18) & 7),
                                  128 | ((n >>> 12) & 63),
                                  128 | ((n >>> 6) & 63),
                                  128 | (n & 63)
                              ));
            return i;
        };
        n["buildQuoteOAuthP" + b(386) + "s"] = function () {
            var n = b,
                t,
                i;
            return "sgirg" == n(k._0x1dc286) + "g"
                ? ((t = vt()),
                  (i = ht(at() + t + wt())[n(k._0x21284f) + "perC" + n(k._0xffa028)]()),
                  "&DC_" +
                      n(366) +
                      n(382) +
                      at() +
                      (n(k._0x58f232) + n(398) + n(k._0x189024) + "P=") +
                      t +
                      (n(390) + n(379) + "=") +
                      i)
                : _0x498ece(_0x745649(_0x4d8636(_0x2d1bfc), _0x108302(_0x7d7681)));
        };
    })(lib_emtrade_quote);
!(function (n) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        var t;
        t =
            "undefined" != typeof window
                ? window
                : "undefined" != typeof global
                  ? global
                  : "undefined" != typeof self
                    ? self
                    : this;
        t.store = n();
    }
})(function () {
    return (function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (((h = "function" == typeof require && require), !o && h)) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                }
                s = i[f] = { exports: {} };
                t[f][0].call(
                    s.exports,
                    function (n) {
                        var i = t[f][1][n];
                        return u(i ? i : n);
                    },
                    s,
                    s.exports,
                    n,
                    t,
                    i,
                    r
                );
            }
            return i[f].exports;
        }
        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u;
    })(
        {
            1: [
                function (n, t) {
                    "use strict";
                    var i = n("../src/store-engine"),
                        r = n("../storages/all"),
                        u = [n("../plugins/json2")];
                    t.exports = i.createStore(r, u);
                },
                { "../plugins/json2": 2, "../src/store-engine": 4, "../storages/all": 6 },
            ],
            2: [
                function (n, t) {
                    "use strict";
                    function i() {
                        return n("./lib/json2"), {};
                    }
                    t.exports = i;
                },
                { "./lib/json2": 3 },
            ],
            3: [
                function () {
                    "use strict";
                    var n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (n) {
                                  return typeof n;
                              }
                            : function (n) {
                                  return n &&
                                      "function" == typeof Symbol &&
                                      n.constructor === Symbol &&
                                      n !== Symbol.prototype
                                      ? "symbol"
                                      : typeof n;
                              };
                    "object" !== ("undefined" == typeof JSON ? "undefined" : n(JSON)) && (JSON = {}),
                        (function () {
                            function r(n) {
                                return n < 10 ? "0" + n : n;
                            }
                            function e() {
                                return this.valueOf();
                            }
                            function o(n) {
                                return (
                                    (s.lastIndex = 0),
                                    s.test(n)
                                        ? '"' +
                                          n.replace(s, function (n) {
                                              var t = c[n];
                                              return "string" == typeof t
                                                  ? t
                                                  : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
                                          }) +
                                          '"'
                                        : '"' + n + '"'
                                );
                            }
                            function u(r, e) {
                                var h,
                                    a,
                                    c,
                                    v,
                                    l,
                                    y = t,
                                    s = e[r];
                                switch (
                                    (s &&
                                        "object" === ("undefined" == typeof s ? "undefined" : n(s)) &&
                                        "function" == typeof s.toJSON &&
                                        (s = s.toJSON(r)),
                                    "function" == typeof i && (s = i.call(e, r, s)),
                                    "undefined" == typeof s ? "undefined" : n(s))
                                ) {
                                    case "string":
                                        return o(s);
                                    case "number":
                                        return isFinite(s) ? String(s) : "null";
                                    case "boolean":
                                    case "null":
                                        return String(s);
                                    case "object":
                                        if (!s) return "null";
                                        if (
                                            ((t += f),
                                            (l = []),
                                            "[object Array]" === Object.prototype.toString.apply(s))
                                        ) {
                                            for (v = s.length, h = 0; h < v; h += 1) l[h] = u(h, s) || "null";
                                            return (
                                                (c =
                                                    0 === l.length
                                                        ? "[]"
                                                        : t
                                                          ? "[\n" + t + l.join(",\n" + t) + "\n" + y + "]"
                                                          : "[" + l.join(",") + "]"),
                                                (t = y),
                                                c
                                            );
                                        }
                                        if (i && "object" === ("undefined" == typeof i ? "undefined" : n(i)))
                                            for (v = i.length, h = 0; h < v; h += 1)
                                                "string" == typeof i[h] &&
                                                    ((a = i[h]),
                                                    (c = u(a, s)),
                                                    c && l.push(o(a) + (t ? ": " : ":") + c));
                                        else
                                            for (a in s)
                                                Object.prototype.hasOwnProperty.call(s, a) &&
                                                    ((c = u(a, s)), c && l.push(o(a) + (t ? ": " : ":") + c));
                                        return (
                                            (c =
                                                0 === l.length
                                                    ? "{}"
                                                    : t
                                                      ? "{\n" + t + l.join(",\n" + t) + "\n" + y + "}"
                                                      : "{" + l.join(",") + "}"),
                                            (t = y),
                                            c
                                        );
                                }
                            }
                            var l = /^[\],:{}\s]*$/,
                                a = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                                y = /(?:^|:|,)(?:\s*\[)+/g,
                                s =
                                    /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                h =
                                    /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                t,
                                f,
                                c,
                                i;
                            "function" != typeof Date.prototype.toJSON &&
                                ((Date.prototype.toJSON = function () {
                                    return isFinite(this.valueOf())
                                        ? this.getUTCFullYear() +
                                              "-" +
                                              r(this.getUTCMonth() + 1) +
                                              "-" +
                                              r(this.getUTCDate()) +
                                              "T" +
                                              r(this.getUTCHours()) +
                                              ":" +
                                              r(this.getUTCMinutes()) +
                                              ":" +
                                              r(this.getUTCSeconds()) +
                                              "Z"
                                        : null;
                                }),
                                (Boolean.prototype.toJSON = e),
                                (Number.prototype.toJSON = e),
                                (String.prototype.toJSON = e));
                            "function" != typeof JSON.stringify &&
                                ((c = {
                                    "\b": "\\b",
                                    "\t": "\\t",
                                    "\n": "\\n",
                                    "\f": "\\f",
                                    "\r": "\\r",
                                    '"': '\\"',
                                    "\\": "\\\\",
                                }),
                                (JSON.stringify = function (r, e, o) {
                                    var s;
                                    if (((t = ""), (f = ""), "number" == typeof o)) for (s = 0; s < o; s += 1) f += " ";
                                    else "string" == typeof o && (f = o);
                                    if (
                                        ((i = e),
                                        e &&
                                            "function" != typeof e &&
                                            ("object" !== ("undefined" == typeof e ? "undefined" : n(e)) ||
                                                "number" != typeof e.length))
                                    )
                                        throw new Error("JSON.stringify");
                                    return u("", { "": r });
                                }));
                            "function" != typeof JSON.parse &&
                                (JSON.parse = function (text, reviver) {
                                    function walk(t, i) {
                                        var u,
                                            f,
                                            r = t[i];
                                        if (r && "object" === ("undefined" == typeof r ? "undefined" : n(r)))
                                            for (u in r)
                                                Object.prototype.hasOwnProperty.call(r, u) &&
                                                    ((f = walk(r, u)), void 0 !== f ? (r[u] = f) : delete r[u]);
                                        return reviver.call(t, i, r);
                                    }
                                    var j;
                                    if (
                                        ((text = String(text)),
                                        (h.lastIndex = 0),
                                        h.test(text) &&
                                            (text = text.replace(h, function (n) {
                                                return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4);
                                            })),
                                        l.test(text.replace(a, "@").replace(v, "]").replace(y, "")))
                                    )
                                        return (
                                            (j = eval("(" + text + ")")),
                                            "function" == typeof reviver ? walk({ "": j }, "") : j
                                        );
                                    throw new SyntaxError("JSON.parse");
                                });
                        })();
                },
                {},
            ],
            4: [
                function (n, t) {
                    "use strict";
                    function u(n, t) {
                        var u = {
                                _seenPlugins: [],
                                _namespacePrefix: "",
                                _namespaceRegexp: null,
                                _legalNamespace: /^[a-zA-Z0-9_\-]+$/,
                                _storage: function () {
                                    if (!this.enabled)
                                        throw new Error(
                                            "store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)"
                                        );
                                    return this._storage.resolved;
                                },
                                _testStorage: function (n) {
                                    var t, i;
                                    try {
                                        return (
                                            (t = "__storejs__test__"),
                                            n.write(t, t),
                                            (i = n.read(t) === t),
                                            n.remove(t),
                                            i
                                        );
                                    } catch (r) {
                                        return !1;
                                    }
                                },
                                _assignPluginFnProp: function (n, t) {
                                    var i = this[t];
                                    this[t] = function () {
                                        function t() {
                                            if (i) {
                                                var n = i.apply(u, t.args);
                                                return delete t.args, n;
                                            }
                                        }
                                        var r = Array.prototype.slice.call(arguments, 0),
                                            u = this,
                                            f = [t].concat(r);
                                        return (t.args = r), n.apply(u, f);
                                    };
                                },
                                _serialize: function (n) {
                                    return JSON.stringify(n);
                                },
                                _deserialize: function (n, t) {
                                    if (!n) return t;
                                    var i = "";
                                    try {
                                        i = JSON.parse(n);
                                    } catch (r) {
                                        i = n;
                                    }
                                    return void 0 !== i ? i : t;
                                },
                            },
                            i = f(u, o);
                        return (
                            r(n, function (n) {
                                i.addStorage(n);
                            }),
                            r(t, function (n) {
                                i.addPlugin(n);
                            }),
                            i
                        );
                    }
                    var i = n("./util"),
                        s = i.pluck,
                        r = i.each,
                        f = i.create,
                        h = i.isList,
                        e = i.isFunction,
                        c = i.isObject,
                        o;
                    t.exports = { createStore: u };
                    o = {
                        version: "2.0.3",
                        enabled: !1,
                        storage: null,
                        addStorage: function (n) {
                            this.enabled ||
                                (this._testStorage(n) &&
                                    ((this._storage.resolved = n), (this.enabled = !0), (this.storage = n.name)));
                        },
                        addPlugin: function (n) {
                            var i = this,
                                u,
                                t;
                            if (h(n))
                                return void r(n, function (n) {
                                    i.addPlugin(n);
                                });
                            if (
                                ((u = s(this._seenPlugins, function (t) {
                                    return n === t;
                                })),
                                !u)
                            ) {
                                if ((this._seenPlugins.push(n), !e(n)))
                                    throw new Error("Plugins must be function values that return objects");
                                if (((t = n.call(this)), !c(t)))
                                    throw new Error("Plugins must return an object of function properties");
                                r(t, function (t, r) {
                                    if (!e(t))
                                        throw new Error(
                                            "Bad plugin property: " +
                                                r +
                                                " from plugin " +
                                                n.name +
                                                ". Plugins should only return functions."
                                        );
                                    i._assignPluginFnProp(t, r);
                                });
                            }
                        },
                        get: function (n, t) {
                            var i = this._storage().read(this._namespacePrefix + n);
                            return this._deserialize(i, t);
                        },
                        set: function (n, t) {
                            return void 0 === t
                                ? this.remove(n)
                                : (this._storage().write(this._namespacePrefix + n, this._serialize(t)), t);
                        },
                        remove: function (n) {
                            this._storage().remove(this._namespacePrefix + n);
                        },
                        each: function (n) {
                            var t = this;
                            this._storage().each(function (i, r) {
                                n(t._deserialize(i), r.replace(t._namespaceRegexp, ""));
                            });
                        },
                        clearAll: function () {
                            this._storage().clearAll();
                        },
                        hasNamespace: function (n) {
                            return this._namespacePrefix == "__storejs_" + n + "_";
                        },
                        namespace: function (n) {
                            if (!this._legalNamespace.test(n))
                                throw new Error(
                                    "store.js namespaces can only have alhpanumerics + underscores and dashes"
                                );
                            var t = "__storejs_" + n + "_";
                            return f(this, { _namespacePrefix: t, _namespaceRegexp: t ? new RegExp("^" + t) : null });
                        },
                        createStore: function (n, t) {
                            return u(n, t);
                        },
                    };
                },
                { "./util": 5 },
            ],
            5: [
                function (n, t) {
                    (function (n) {
                        "use strict";
                        function o() {
                            return Object.assign
                                ? Object.assign
                                : function (n) {
                                      for (var t = 1; t < arguments.length; t++)
                                          e(Object(arguments[t]), function (t, i) {
                                              n[i] = t;
                                          });
                                      return n;
                                  };
                        }
                        function s() {
                            if (Object.create)
                                return function (n) {
                                    var t = i(arguments, 1);
                                    return f.apply(this, [Object.create(n)].concat(t));
                                };
                            var n = function () {};
                            return function (t) {
                                var r = i(arguments, 1);
                                return (n.prototype = t), f.apply(this, [new n()].concat(r));
                            };
                        }
                        function h() {
                            return String.prototype.trim
                                ? function (n) {
                                      return String.prototype.trim.call(n);
                                  }
                                : function (n) {
                                      return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                                  };
                        }
                        function c(n, t) {
                            return function () {
                                return t.apply(n, Array.prototype.slice.call(arguments, 0));
                            };
                        }
                        function i(n, t) {
                            return Array.prototype.slice.call(n, t || 0);
                        }
                        function e(n, t) {
                            r(n, function (n, i) {
                                return t(n, i), !1;
                            });
                        }
                        function l(n, t) {
                            var i = u(n) ? [] : {};
                            return (
                                r(n, function (n, r) {
                                    return (i[r] = t(n, r)), !1;
                                }),
                                i
                            );
                        }
                        function r(n, t) {
                            var i, r;
                            if (u(n)) {
                                for (i = 0; i < n.length; i++) if (t(n[i], i)) return n[i];
                            } else for (r in n) if (n.hasOwnProperty(r) && t(n[r], r)) return n[r];
                        }
                        function u(n) {
                            return null != n && "function" != typeof n && "number" == typeof n.length;
                        }
                        function a(n) {
                            return n && "[object Function]" === {}.toString.call(n);
                        }
                        function v(n) {
                            return n && "[object Object]" === {}.toString.call(n);
                        }
                        var f = o(),
                            y = s(),
                            p = h(),
                            w = "undefined" != typeof window ? window : n;
                        t.exports = {
                            assign: f,
                            create: y,
                            trim: p,
                            bind: c,
                            slice: i,
                            each: e,
                            map: l,
                            pluck: r,
                            isList: u,
                            isFunction: a,
                            isObject: v,
                            Global: w,
                        };
                    }).call(
                        this,
                        "undefined" != typeof global
                            ? global
                            : "undefined" != typeof self
                              ? self
                              : "undefined" != typeof window
                                ? window
                                : {}
                    );
                },
                {},
            ],
            6: [
                function (n, t) {
                    "use strict";
                    t.exports = {
                        localStorage: n("./localStorage"),
                        "oldFF-globalStorage": n("./oldFF-globalStorage"),
                        "oldIE-userDataStorage": n("./oldIE-userDataStorage"),
                        cookieStorage: n("./cookieStorage"),
                        sessionStorage: n("./sessionStorage"),
                        memoryStorage: n("./memoryStorage"),
                    };
                },
                {
                    "./cookieStorage": 7,
                    "./localStorage": 8,
                    "./memoryStorage": 9,
                    "./oldFF-globalStorage": 10,
                    "./oldIE-userDataStorage": 11,
                    "./sessionStorage": 12,
                },
            ],
            7: [
                function (n, t) {
                    "use strict";
                    function o(n) {
                        if (!n || !f(n)) return null;
                        var t =
                            "(?:^|.*;\\s*)" +
                            escape(n).replace(/[\-\.\+\*]/g, "\\$&") +
                            "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
                        return unescape(i.cookie.replace(new RegExp(t), "$1"));
                    }
                    function r(n) {
                        for (var r = i.cookie.split(/; ?/g), t = r.length - 1; t >= 0; t--)
                            if (l(r[t])) {
                                var u = r[t].split("="),
                                    f = unescape(u[0]),
                                    e = unescape(u[1]);
                                n(e, f);
                            }
                    }
                    function s(n, t) {
                        n &&
                            (i.cookie =
                                escape(n) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/");
                    }
                    function u(n) {
                        n && f(n) && (i.cookie = escape(n) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
                    }
                    function h() {
                        r(function (n, t) {
                            u(t);
                        });
                    }
                    function f(n) {
                        return new RegExp("(?:^|;\\s*)" + escape(n).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(
                            i.cookie
                        );
                    }
                    var e = n("../src/util"),
                        c = e.Global,
                        l = e.trim,
                        i;
                    t.exports = { name: "cookieStorage", read: o, write: s, each: r, remove: u, clearAll: h };
                    i = c.document;
                },
                { "../src/util": 5 },
            ],
            8: [
                function (n, t) {
                    "use strict";
                    function i() {
                        return h.localStorage;
                    }
                    function r(n) {
                        return i().getItem(n);
                    }
                    function u(n, t) {
                        return i().setItem(n, t);
                    }
                    function f(n) {
                        for (var u, t = i().length - 1; t >= 0; t--) (u = i().key(t)), n(r(u), u);
                    }
                    function e(n) {
                        return i().removeItem(n);
                    }
                    function o() {
                        return i().clear();
                    }
                    var s = n("../src/util"),
                        h = s.Global;
                    t.exports = { name: "localStorage", read: r, write: u, each: f, remove: e, clearAll: o };
                },
                { "../src/util": 5 },
            ],
            9: [
                function (n, t) {
                    "use strict";
                    function r(n) {
                        return i[n];
                    }
                    function u(n, t) {
                        i[n] = t;
                    }
                    function f(n) {
                        for (var t in i) i.hasOwnProperty(t) && n(i[t], t);
                    }
                    function e(n) {
                        delete i[n];
                    }
                    function o() {
                        i = {};
                    }
                    t.exports = { name: "memoryStorage", read: r, write: u, each: f, remove: e, clearAll: o };
                    var i = {};
                },
                {},
            ],
            10: [
                function (n, t) {
                    "use strict";
                    function u(n) {
                        return i[n];
                    }
                    function f(n, t) {
                        i[n] = t;
                    }
                    function r(n) {
                        for (var r, t = i.length - 1; t >= 0; t--) (r = i.key(t)), n(i[r], r);
                    }
                    function e(n) {
                        return i.removeItem(n);
                    }
                    function o() {
                        r(function (n) {
                            delete i[n];
                        });
                    }
                    var s = n("../src/util"),
                        h = s.Global,
                        i;
                    t.exports = { name: "oldFF-globalStorage", read: u, write: f, each: r, remove: e, clearAll: o };
                    i = h.globalStorage;
                },
                { "../src/util": 5 },
            ],
            11: [
                function (n, t) {
                    "use strict";
                    function s(n, t) {
                        if (!o) {
                            var r = f(n);
                            u(function (n) {
                                n.setAttribute(r, t);
                                n.save(i);
                            });
                        }
                    }
                    function h(n) {
                        if (!o) {
                            var i = f(n),
                                t = null;
                            return (
                                u(function (n) {
                                    t = n.getAttribute(i);
                                }),
                                t
                            );
                        }
                    }
                    function c(n) {
                        u(function (t) {
                            for (var u, r = t.XMLDocument.documentElement.attributes, i = r.length - 1; i >= 0; i--)
                                (u = r[i]), n(t.getAttribute(u.name), u.name);
                        });
                    }
                    function l(n) {
                        var t = f(n);
                        u(function (n) {
                            n.removeAttribute(t);
                            n.save(i);
                        });
                    }
                    function a() {
                        u(function (n) {
                            var r = n.XMLDocument.documentElement.attributes,
                                t;
                            for (n.load(i), t = r.length - 1; t >= 0; t--) n.removeAttribute(r[t].name);
                            n.save(i);
                        });
                    }
                    function f(n) {
                        return n.replace(/^d/, "___$&").replace(p, "___");
                    }
                    function v() {
                        if (!r || !r.documentElement || !r.documentElement.addBehavior) return null;
                        var t,
                            u,
                            n,
                            f = "script";
                        try {
                            u = new ActiveXObject("htmlfile");
                            u.open();
                            u.write("<" + f + ">document.w=window</" + f + '><iframe src="/favicon.ico"></iframe>');
                            u.close();
                            t = u.w.frames[0].document;
                            n = t.createElement("div");
                        } catch (e) {
                            n = r.createElement("div");
                            t = r.body;
                        }
                        return function (r) {
                            var u = [].slice.call(arguments, 0);
                            u.unshift(n);
                            t.appendChild(n);
                            n.addBehavior("#default#userData");
                            n.load(i);
                            r.apply(this, u);
                            t.removeChild(n);
                        };
                    }
                    var y = n("../src/util"),
                        e = y.Global;
                    t.exports = { name: "oldIE-userDataStorage", write: s, read: h, each: c, remove: l, clearAll: a };
                    var i = "storejs",
                        r = e.document,
                        u = v(),
                        o = (e.navigator ? e.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),
                        p = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
                },
                { "../src/util": 5 },
            ],
            12: [
                function (n, t) {
                    "use strict";
                    function i() {
                        return h.sessionStorage;
                    }
                    function r(n) {
                        return i().getItem(n);
                    }
                    function u(n, t) {
                        return i().setItem(n, t);
                    }
                    function f(n) {
                        for (var u, t = i().length - 1; t >= 0; t--) (u = i().key(t)), n(r(u), u);
                    }
                    function e(n) {
                        return i().removeItem(n);
                    }
                    function o() {
                        return i().clear();
                    }
                    var s = n("../src/util"),
                        h = s.Global;
                    t.exports = { name: "sessionStorage", read: r, write: u, each: f, remove: e, clearAll: o };
                },
                { "../src/util": 5 },
            ],
        },
        {},
        [1]
    )(1);
});
!(function (n, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
          ? define(["exports"], t)
          : t((n.JSEncrypt = {}));
})(this, function (n) {
    "use strict";
    function h(n) {
        return ii.charAt(n);
    }
    function ri(n, t) {
        return n & t;
    }
    function it(n, t) {
        return n | t;
    }
    function vt(n, t) {
        return n ^ t;
    }
    function yt(n, t) {
        return n & ~t;
    }
    function ui(n) {
        if (0 == n) return -1;
        var t = 0;
        return (
            0 == (65535 & n) && ((n >>= 16), (t += 16)),
            0 == (255 & n) && ((n >>= 8), (t += 8)),
            0 == (15 & n) && ((n >>= 4), (t += 4)),
            0 == (3 & n) && ((n >>= 2), (t += 2)),
            0 == (1 & n) && ++t,
            t
        );
    }
    function fi(n) {
        for (var t = 0; 0 != n; ) (n &= n - 1), ++t;
        return t;
    }
    function rt(n) {
        for (var i, r = "", t = 0; t + 3 <= n.length; t += 3)
            (i = parseInt(n.substring(t, t + 3), 16)), (r += v.charAt(i >> 6) + v.charAt(63 & i));
        for (
            t + 1 == n.length
                ? ((i = parseInt(n.substring(t, t + 1), 16)), (r += v.charAt(i << 2)))
                : t + 2 == n.length &&
                  ((i = parseInt(n.substring(t, t + 2), 16)), (r += v.charAt(i >> 2) + v.charAt((3 & i) << 4)));
            0 < (3 & r.length);

        )
            r += "=";
        return r;
    }
    function pt(n) {
        for (var i = "", r = 0, u = 0, t, f = 0; f < n.length && "=" != n.charAt(f); ++f)
            (t = v.indexOf(n.charAt(f))),
                t < 0 ||
                    (0 == r
                        ? ((i += h(t >> 2)), (u = 3 & t), (r = 1))
                        : 1 == r
                          ? ((i += h((u << 2) | (t >> 4))), (u = 15 & t), (r = 2))
                          : 2 == r
                            ? ((i += h(u)), (i += h(t >> 2)), (u = 3 & t), (r = 3))
                            : ((i += h((u << 2) | (t >> 4))), (i += h(15 & t)), (r = 0)));
        return 1 == r && (i += h(u << 2)), i;
    }
    function w(n, t) {
        return n.length > t && (n = n.substring(0, t) + bt), n;
    }
    function r() {
        return new i(null);
    }
    function u(n, t) {
        return new i(n, t);
    }
    function ni(n, t) {
        var i = g[n.charCodeAt(t)];
        return null == i ? -1 : i;
    }
    function l(n) {
        var t = r();
        return t.fromInt(n), t;
    }
    function ut(n) {
        var t,
            i = 1;
        return (
            0 != (t = n >>> 16) && ((n = t), (i += 16)),
            0 != (t = n >> 8) && ((n = t), (i += 8)),
            0 != (t = n >> 4) && ((n = t), (i += 4)),
            0 != (t = n >> 2) && ((n = t), (i += 2)),
            0 != (t = n >> 1) && ((n = t), (i += 1)),
            i
        );
    }
    function yi() {
        if (null == ft) {
            for (ft = new vi(); s < ti; ) {
                var n = Math.floor(65536 * Math.random());
                a[s++] = 255 & n;
            }
            for (ft.init(a), s = 0; s < a.length; ++s) a[s] = 0;
            s = 0;
        }
        return ft.next();
    }
    var ii = "0123456789abcdefghijklmnopqrstuvwxyz",
        v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        y,
        wt = function (n, t) {
            return (wt =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (n, t) {
                        n.__proto__ = t;
                    }) ||
                function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                })(n, t);
        },
        k,
        ei = function (n) {
            var t, r, f, i;
            if (void 0 === y) {
                for (r = "0123456789ABCDEF", f = " \f\n\r\t \u2028\u2029", y = {}, t = 0; t < 16; ++t)
                    y[r.charAt(t)] = t;
                for (r = r.toLowerCase(), t = 10; t < 16; ++t) y[r.charAt(t)] = t;
                for (t = 0; t < f.length; ++t) y[f.charAt(t)] = -1;
            }
            var e = [],
                u = 0,
                o = 0;
            for (t = 0; t < n.length; ++t) {
                if (((i = n.charAt(t)), "=" == i)) break;
                if (-1 != (i = y[i])) {
                    if (void 0 === i) throw new Error("Illegal character at offset " + t);
                    u |= i;
                    2 <= ++o ? ((e[e.length] = u), (o = u = 0)) : (u <<= 4);
                }
            }
            if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
            return e;
        },
        st = {
            decode: function (n) {
                var t, f, u;
                if (void 0 === k) {
                    for (f = "= \f\n\r\t \u2028\u2029", k = Object.create(null), t = 0; t < 64; ++t)
                        k["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)] = t;
                    for (t = 0; t < f.length; ++t) k[f.charAt(t)] = -1;
                }
                var i = [],
                    r = 0,
                    e = 0;
                for (t = 0; t < n.length; ++t) {
                    if (((u = n.charAt(t)), "=" == u)) break;
                    if (-1 != (u = k[u])) {
                        if (void 0 === u) throw new Error("Illegal character at offset " + t);
                        r |= u;
                        4 <= ++e
                            ? ((i[i.length] = r >> 16),
                              (i[i.length] = (r >> 8) & 255),
                              (i[i.length] = 255 & r),
                              (e = r = 0))
                            : (r <<= 6);
                    }
                }
                switch (e) {
                    case 1:
                        throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                    case 2:
                        i[i.length] = r >> 10;
                        break;
                    case 3:
                        i[i.length] = r >> 16;
                        i[i.length] = (r >> 8) & 255;
                }
                return i;
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function (n) {
                var t = st.re.exec(n);
                if (t)
                    if (t[1]) n = t[1];
                    else {
                        if (!t[2]) throw new Error("RegExp out of sync");
                        n = t[2];
                    }
                return st.decode(n);
            },
        },
        p = 1e13,
        d = (function () {
            function n(n) {
                this.buf = [+n || 0];
            }
            return (
                (n.prototype.mulAdd = function (n, t) {
                    for (var r, u = this.buf, f = u.length, i = 0; i < f; ++i)
                        (r = u[i] * n + t) < p ? (t = 0) : (r -= (t = 0 | (r / p)) * p), (u[i] = r);
                    0 < t && (u[i] = t);
                }),
                (n.prototype.sub = function (n) {
                    for (var r, t = this.buf, u = t.length, i = 0; i < u; ++i)
                        (r = t[i] - n) < 0 ? ((r += p), (n = 1)) : (n = 0), (t[i] = r);
                    for (; 0 === t[t.length - 1]; ) t.pop();
                }),
                (n.prototype.toString = function (n) {
                    if (10 != (n || 10)) throw new Error("only base 10 is supported");
                    for (var t = this.buf, r = t[t.length - 1].toString(), i = t.length - 2; 0 <= i; --i)
                        r += (p + t[i]).toString().substring(1);
                    return r;
                }),
                (n.prototype.valueOf = function () {
                    for (var i = this.buf, n = 0, t = i.length - 1; 0 <= t; --t) n = n * p + i[t];
                    return n;
                }),
                (n.prototype.simplify = function () {
                    var n = this.buf;
                    return 1 == n.length ? n[0] : this;
                }),
                n
            );
        })(),
        bt = "…",
        oi =
            /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        si =
            /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        c,
        ht = (function () {
            function n(t, i) {
                this.hexDigits = "0123456789ABCDEF";
                t instanceof n ? ((this.enc = t.enc), (this.pos = t.pos)) : ((this.enc = t), (this.pos = i));
            }
            return (
                (n.prototype.get = function (n) {
                    if ((void 0 === n && (n = this.pos++), n >= this.enc.length))
                        throw new Error("Requesting byte offset " + n + " on a stream of length " + this.enc.length);
                    return "string" == typeof this.enc ? this.enc.charCodeAt(n) : this.enc[n];
                }),
                (n.prototype.hexByte = function (n) {
                    return this.hexDigits.charAt((n >> 4) & 15) + this.hexDigits.charAt(15 & n);
                }),
                (n.prototype.hexDump = function (n, t, i) {
                    for (var r = "", u = n; u < t; ++u)
                        if (((r += this.hexByte(this.get(u))), !0 !== i))
                            switch (15 & u) {
                                case 7:
                                    r += "  ";
                                    break;
                                case 15:
                                    r += "\n";
                                    break;
                                default:
                                    r += " ";
                            }
                    return r;
                }),
                (n.prototype.isASCII = function (n, t) {
                    for (var r, i = n; i < t; ++i) if (((r = this.get(i)), r < 32 || 176 < r)) return !1;
                    return !0;
                }),
                (n.prototype.parseStringISO = function (n, t) {
                    for (var r = "", i = n; i < t; ++i) r += String.fromCharCode(this.get(i));
                    return r;
                }),
                (n.prototype.parseStringUTF = function (n, t) {
                    for (var i, u = "", r = n; r < t; )
                        (i = this.get(r++)),
                            (u +=
                                i < 128
                                    ? String.fromCharCode(i)
                                    : 191 < i && i < 224
                                      ? String.fromCharCode(((31 & i) << 6) | (63 & this.get(r++)))
                                      : String.fromCharCode(
                                            ((15 & i) << 12) | ((63 & this.get(r++)) << 6) | (63 & this.get(r++))
                                        ));
                    return u;
                }),
                (n.prototype.parseStringBMP = function (n, t) {
                    for (var r, u, f = "", i = n; i < t; )
                        (r = this.get(i++)), (u = this.get(i++)), (f += String.fromCharCode((r << 8) | u));
                    return f;
                }),
                (n.prototype.parseTime = function (n, t, i) {
                    var u = this.parseStringISO(n, t),
                        r = (i ? oi : si).exec(u);
                    return r
                        ? (i && ((r[1] = +r[1]), (r[1] += +r[1] < 70 ? 2e3 : 1900)),
                          (u = r[1] + "-" + r[2] + "-" + r[3] + " " + r[4]),
                          r[5] && ((u += ":" + r[5]), r[6] && ((u += ":" + r[6]), r[7] && (u += "." + r[7]))),
                          r[8] && ((u += " UTC"), "Z" != r[8] && ((u += r[8]), r[9] && (u += ":" + r[9]))),
                          u)
                        : "Unrecognized time: " + u;
                }),
                (n.prototype.parseInteger = function (n, t) {
                    for (var o, f, u, i = this.get(n), e = 127 < i, s = e ? 255 : 0, r = ""; i == s && ++n < t; )
                        i = this.get(n);
                    if (0 == (u = t - n)) return e ? -1 : 0;
                    if (4 < u) {
                        for (r = i, u <<= 3; 0 == (128 & (+r ^ s)); ) (r = +r << 1), --u;
                        r = "(" + u + " bit)\n";
                    }
                    for (e && (i -= 256), o = new d(i), f = n + 1; f < t; ++f) o.mulAdd(256, this.get(f));
                    return r + o.toString();
                }),
                (n.prototype.parseBitString = function (n, t, i) {
                    for (
                        var e = this.get(n), o = "(" + (((t - n - 1) << 3) - e) + " bit)\n", r = "", u = n + 1;
                        u < t;
                        ++u
                    ) {
                        for (var s = this.get(u), h = u == t - 1 ? e : 0, f = 7; h <= f; --f)
                            r += (s >> f) & 1 ? "1" : "0";
                        if (r.length > i) return o + w(r, i);
                    }
                    return o + r;
                }),
                (n.prototype.parseOctetString = function (n, t, i) {
                    var r, u, f;
                    if (this.isASCII(n, t)) return w(this.parseStringISO(n, t), i);
                    for (r = t - n, u = "(" + r + " byte)\n", (i /= 2) < r && (t = n + i), f = n; f < t; ++f)
                        u += this.hexByte(this.get(f));
                    return i < r && (u += bt), u;
                }),
                (n.prototype.parseOID = function (n, t, i) {
                    for (var o, s, u = "", r = new d(), f = 0, e = n; e < t; ++e)
                        if (((o = this.get(e)), r.mulAdd(128, 127 & o), (f += 7), !(128 & o))) {
                            if (
                                ("" === u
                                    ? (r = r.simplify()) instanceof d
                                        ? (r.sub(80), (u = "2." + r.toString()))
                                        : ((s = r < 80 ? (r < 40 ? 0 : 1) : 2), (u = s + "." + (r - 40 * s)))
                                    : (u += "." + r.toString()),
                                u.length > i)
                            )
                                return w(u, i);
                            r = new d();
                            f = 0;
                        }
                    return 0 < f && (u += ".incomplete"), u;
                }),
                n
            );
        })(),
        hi = (function () {
            function n(n, t, i, r, u) {
                if (!(r instanceof kt)) throw new Error("Invalid tag value.");
                this.stream = n;
                this.header = t;
                this.length = i;
                this.tag = r;
                this.sub = u;
            }
            return (
                (n.prototype.typeName = function () {
                    switch (this.tag.tagClass) {
                        case 0:
                            switch (this.tag.tagNumber) {
                                case 0:
                                    return "EOC";
                                case 1:
                                    return "BOOLEAN";
                                case 2:
                                    return "INTEGER";
                                case 3:
                                    return "BIT_STRING";
                                case 4:
                                    return "OCTET_STRING";
                                case 5:
                                    return "NULL";
                                case 6:
                                    return "OBJECT_IDENTIFIER";
                                case 7:
                                    return "ObjectDescriptor";
                                case 8:
                                    return "EXTERNAL";
                                case 9:
                                    return "REAL";
                                case 10:
                                    return "ENUMERATED";
                                case 11:
                                    return "EMBEDDED_PDV";
                                case 12:
                                    return "UTF8String";
                                case 16:
                                    return "SEQUENCE";
                                case 17:
                                    return "SET";
                                case 18:
                                    return "NumericString";
                                case 19:
                                    return "PrintableString";
                                case 20:
                                    return "TeletexString";
                                case 21:
                                    return "VideotexString";
                                case 22:
                                    return "IA5String";
                                case 23:
                                    return "UTCTime";
                                case 24:
                                    return "GeneralizedTime";
                                case 25:
                                    return "GraphicString";
                                case 26:
                                    return "VisibleString";
                                case 27:
                                    return "GeneralString";
                                case 28:
                                    return "UniversalString";
                                case 30:
                                    return "BMPString";
                            }
                            return "Universal_" + this.tag.tagNumber.toString();
                        case 1:
                            return "Application_" + this.tag.tagNumber.toString();
                        case 2:
                            return "[" + this.tag.tagNumber.toString() + "]";
                        case 3:
                            return "Private_" + this.tag.tagNumber.toString();
                    }
                }),
                (n.prototype.content = function (n) {
                    if (void 0 === this.tag) return null;
                    void 0 === n && (n = 1 / 0);
                    var t = this.posContent(),
                        i = Math.abs(this.length);
                    if (!this.tag.isUniversal())
                        return null !== this.sub
                            ? "(" + this.sub.length + " elem)"
                            : this.stream.parseOctetString(t, t + i, n);
                    switch (this.tag.tagNumber) {
                        case 1:
                            return 0 === this.stream.get(t) ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(t, t + i);
                        case 3:
                            return this.sub
                                ? "(" + this.sub.length + " elem)"
                                : this.stream.parseBitString(t, t + i, n);
                        case 4:
                            return this.sub
                                ? "(" + this.sub.length + " elem)"
                                : this.stream.parseOctetString(t, t + i, n);
                        case 6:
                            return this.stream.parseOID(t, t + i, n);
                        case 16:
                        case 17:
                            return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                        case 12:
                            return w(this.stream.parseStringUTF(t, t + i), n);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return w(this.stream.parseStringISO(t, t + i), n);
                        case 30:
                            return w(this.stream.parseStringBMP(t, t + i), n);
                        case 23:
                        case 24:
                            return this.stream.parseTime(t, t + i, 23 == this.tag.tagNumber);
                    }
                    return null;
                }),
                (n.prototype.toString = function () {
                    return (
                        this.typeName() +
                        "@" +
                        this.stream.pos +
                        "[header:" +
                        this.header +
                        ",length:" +
                        this.length +
                        ",sub:" +
                        (null === this.sub ? "null" : this.sub.length) +
                        "]"
                    );
                }),
                (n.prototype.toPrettyString = function (n) {
                    var t, i, r;
                    if (
                        (void 0 === n && (n = ""),
                        (t = n + this.typeName() + " @" + this.stream.pos),
                        0 <= this.length && (t += "+"),
                        (t += this.length),
                        this.tag.tagConstructed
                            ? (t += " (constructed)")
                            : !this.tag.isUniversal() ||
                              (3 != this.tag.tagNumber && 4 != this.tag.tagNumber) ||
                              null === this.sub ||
                              (t += " (encapsulates)"),
                        (t += "\n"),
                        null !== this.sub)
                    )
                        for (n += "  ", i = 0, r = this.sub.length; i < r; ++i) t += this.sub[i].toPrettyString(n);
                    return t;
                }),
                (n.prototype.posStart = function () {
                    return this.stream.pos;
                }),
                (n.prototype.posContent = function () {
                    return this.stream.pos + this.header;
                }),
                (n.prototype.posEnd = function () {
                    return this.stream.pos + this.header + Math.abs(this.length);
                }),
                (n.prototype.toHexString = function () {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
                }),
                (n.decodeLength = function (n) {
                    var t = n.get(),
                        i = 127 & t,
                        r;
                    if (i == t) return i;
                    if (6 < i) throw new Error("Length over 48 bits not supported at position " + (n.pos - 1));
                    if (0 === i) return null;
                    for (r = t = 0; r < i; ++r) t = 256 * t + n.get();
                    return t;
                }),
                (n.prototype.getHexStringValue = function () {
                    var n = this.toHexString(),
                        t = 2 * this.header,
                        i = 2 * this.length;
                    return n.substr(t, i);
                }),
                (n.decode = function (t) {
                    var i, o;
                    i = t instanceof ht ? t : new ht(t, 0);
                    var s = new ht(i),
                        u = new kt(i),
                        f = n.decodeLength(i),
                        e = i.pos,
                        c = e - s.pos,
                        r = null,
                        h = function () {
                            var t = [],
                                r,
                                u;
                            if (null !== f) {
                                for (r = e + f; i.pos < r; ) t[t.length] = n.decode(i);
                                if (i.pos != r)
                                    throw new Error(
                                        "Content size is not correct for container starting at offset " + e
                                    );
                            } else
                                try {
                                    for (;;) {
                                        if (((u = n.decode(i)), u.tag.isEOC())) break;
                                        t[t.length] = u;
                                    }
                                    f = e - i.pos;
                                } catch (t) {
                                    throw new Error("Exception while decoding undefined length content: " + t);
                                }
                            return t;
                        };
                    if (u.tagConstructed) r = h();
                    else if (u.isUniversal() && (3 == u.tagNumber || 4 == u.tagNumber))
                        try {
                            if (3 == u.tagNumber && 0 != i.get())
                                throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                            for (r = h(), o = 0; o < r.length; ++o)
                                if (r[o].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                        } catch (t) {
                            r = null;
                        }
                    if (null === r) {
                        if (null === f)
                            throw new Error("We can't skip over an invalid tag with undefined length at offset " + e);
                        i.pos = e + Math.abs(f);
                    }
                    return new n(s, c, f, u, r);
                }),
                n
            );
        })(),
        kt = (function () {
            function n(n) {
                var t = n.get(),
                    i;
                if (
                    ((this.tagClass = t >> 6),
                    (this.tagConstructed = 0 != (32 & t)),
                    (this.tagNumber = 31 & t),
                    31 == this.tagNumber)
                ) {
                    for (i = new d(); (t = n.get()), i.mulAdd(128, 127 & t), 128 & t; );
                    this.tagNumber = i.simplify();
                }
            }
            return (
                (n.prototype.isUniversal = function () {
                    return 0 === this.tagClass;
                }),
                (n.prototype.isEOC = function () {
                    return 0 === this.tagClass && 0 === this.tagNumber;
                }),
                n
            );
        })(),
        e = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103,
            107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
            227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347,
            349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
            467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
            613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743,
            751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883,
            887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
        ],
        ci = 67108864 / e[e.length - 1],
        i = (function () {
            function n(n, t, i) {
                null != n &&
                    ("number" == typeof n
                        ? this.fromNumber(n, t, i)
                        : null == t && "string" != typeof n
                          ? this.fromString(n, 256)
                          : this.fromString(n, t));
            }
            return (
                (n.prototype.toString = function (n) {
                    var t;
                    if (this.s < 0) return "-" + this.negate().toString(n);
                    if (16 == n) t = 4;
                    else if (8 == n) t = 3;
                    else if (2 == n) t = 1;
                    else if (32 == n) t = 5;
                    else {
                        if (4 != n) return this.toRadix(n);
                        t = 2;
                    }
                    var u,
                        o = (1 << t) - 1,
                        f = !1,
                        e = "",
                        r = this.t,
                        i = this.DB - ((r * this.DB) % t);
                    if (0 < r--)
                        for (i < this.DB && 0 < (u = this[r] >> i) && ((f = !0), (e = h(u))); 0 <= r; )
                            i < t
                                ? ((u = (this[r] & ((1 << i) - 1)) << (t - i)), (u |= this[--r] >> (i += this.DB - t)))
                                : ((u = (this[r] >> (i -= t)) & o), i <= 0 && ((i += this.DB), --r)),
                                0 < u && (f = !0),
                                f && (e += h(u));
                    return f ? e : "0";
                }),
                (n.prototype.negate = function () {
                    var t = r();
                    return n.ZERO.subTo(this, t), t;
                }),
                (n.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this;
                }),
                (n.prototype.compareTo = function (n) {
                    var t = this.s - n.s,
                        i;
                    if (0 != t) return t;
                    if (((i = this.t), 0 != (t = i - n.t))) return this.s < 0 ? -t : t;
                    for (; 0 <= --i; ) if (0 != (t = this[i] - n[i])) return t;
                    return 0;
                }),
                (n.prototype.bitLength = function () {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + ut(this[this.t - 1] ^ (this.s & this.DM));
                }),
                (n.prototype.mod = function (t) {
                    var i = r();
                    return this.abs().divRemTo(t, null, i), this.s < 0 && 0 < i.compareTo(n.ZERO) && t.subTo(i, i), i;
                }),
                (n.prototype.modPowInt = function (n, t) {
                    var i;
                    return (i = n < 256 || t.isEven() ? new dt(t) : new gt(t)), this.exp(n, i);
                }),
                (n.prototype.clone = function () {
                    var n = r();
                    return this.copyTo(n), n;
                }),
                (n.prototype.intValue = function () {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1;
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0;
                    }
                    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
                }),
                (n.prototype.byteValue = function () {
                    return 0 == this.t ? this.s : (this[0] << 24) >> 24;
                }),
                (n.prototype.shortValue = function () {
                    return 0 == this.t ? this.s : (this[0] << 16) >> 16;
                }),
                (n.prototype.signum = function () {
                    return this.s < 0 ? -1 : this.t <= 0 || (1 == this.t && this[0] <= 0) ? 0 : 1;
                }),
                (n.prototype.toByteArray = function () {
                    var i = this.t,
                        u = [],
                        t,
                        n,
                        r;
                    if (((u[0] = this.s), (n = this.DB - ((i * this.DB) % 8)), (r = 0), 0 < i--))
                        for (
                            n < this.DB &&
                            (t = this[i] >> n) != (this.s & this.DM) >> n &&
                            (u[r++] = t | (this.s << (this.DB - n)));
                            0 <= i;

                        )
                            n < 8
                                ? ((t = (this[i] & ((1 << n) - 1)) << (8 - n)), (t |= this[--i] >> (n += this.DB - 8)))
                                : ((t = (this[i] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --i)),
                                0 != (128 & t) && (t |= -256),
                                0 == r && (128 & this.s) != (128 & t) && ++r,
                                (0 < r || t != this.s) && (u[r++] = t);
                    return u;
                }),
                (n.prototype.equals = function (n) {
                    return 0 == this.compareTo(n);
                }),
                (n.prototype.min = function (n) {
                    return this.compareTo(n) < 0 ? this : n;
                }),
                (n.prototype.max = function (n) {
                    return 0 < this.compareTo(n) ? this : n;
                }),
                (n.prototype.and = function (n) {
                    var t = r();
                    return this.bitwiseTo(n, ri, t), t;
                }),
                (n.prototype.or = function (n) {
                    var t = r();
                    return this.bitwiseTo(n, it, t), t;
                }),
                (n.prototype.xor = function (n) {
                    var t = r();
                    return this.bitwiseTo(n, vt, t), t;
                }),
                (n.prototype.andNot = function (n) {
                    var t = r();
                    return this.bitwiseTo(n, yt, t), t;
                }),
                (n.prototype.not = function () {
                    for (var n = r(), t = 0; t < this.t; ++t) n[t] = this.DM & ~this[t];
                    return (n.t = this.t), (n.s = ~this.s), n;
                }),
                (n.prototype.shiftLeft = function (n) {
                    var t = r();
                    return n < 0 ? this.rShiftTo(-n, t) : this.lShiftTo(n, t), t;
                }),
                (n.prototype.shiftRight = function (n) {
                    var t = r();
                    return n < 0 ? this.lShiftTo(-n, t) : this.rShiftTo(n, t), t;
                }),
                (n.prototype.getLowestSetBit = function () {
                    for (var n = 0; n < this.t; ++n) if (0 != this[n]) return n * this.DB + ui(this[n]);
                    return this.s < 0 ? this.t * this.DB : -1;
                }),
                (n.prototype.bitCount = function () {
                    for (var t = 0, i = this.s & this.DM, n = 0; n < this.t; ++n) t += fi(this[n] ^ i);
                    return t;
                }),
                (n.prototype.testBit = function (n) {
                    var t = Math.floor(n / this.DB);
                    return t >= this.t ? 0 != this.s : 0 != (this[t] & (1 << n % this.DB));
                }),
                (n.prototype.setBit = function (n) {
                    return this.changeBit(n, it);
                }),
                (n.prototype.clearBit = function (n) {
                    return this.changeBit(n, yt);
                }),
                (n.prototype.flipBit = function (n) {
                    return this.changeBit(n, vt);
                }),
                (n.prototype.add = function (n) {
                    var t = r();
                    return this.addTo(n, t), t;
                }),
                (n.prototype.subtract = function (n) {
                    var t = r();
                    return this.subTo(n, t), t;
                }),
                (n.prototype.multiply = function (n) {
                    var t = r();
                    return this.multiplyTo(n, t), t;
                }),
                (n.prototype.divide = function (n) {
                    var t = r();
                    return this.divRemTo(n, t, null), t;
                }),
                (n.prototype.remainder = function (n) {
                    var t = r();
                    return this.divRemTo(n, null, t), t;
                }),
                (n.prototype.divideAndRemainder = function (n) {
                    var t = r(),
                        i = r();
                    return this.divRemTo(n, t, i), [t, i];
                }),
                (n.prototype.modPow = function (n, t) {
                    var a,
                        e,
                        i = n.bitLength(),
                        u = l(1),
                        p;
                    if (i <= 0) return u;
                    a = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6;
                    e = i < 8 ? new dt(t) : t.isEven() ? new ai(t) : new gt(t);
                    var h = [],
                        f = 3,
                        v = a - 1,
                        w = (1 << a) - 1;
                    if (((h[1] = e.convert(this)), 1 < a))
                        for (p = r(), e.sqrTo(h[1], p); f <= w; ) (h[f] = r()), e.mulTo(p, h[f - 2], h[f]), (f += 2);
                    var c,
                        y,
                        o = n.t - 1,
                        b = !0,
                        s = r();
                    for (i = ut(n[o]) - 1; 0 <= o; ) {
                        for (
                            v <= i
                                ? (c = (n[o] >> (i - v)) & w)
                                : ((c = (n[o] & ((1 << (i + 1)) - 1)) << (v - i)),
                                  0 < o && (c |= n[o - 1] >> (this.DB + i - v))),
                                f = a;
                            0 == (1 & c);

                        )
                            (c >>= 1), --f;
                        if (((i -= f) < 0 && ((i += this.DB), --o), b)) h[c].copyTo(u), (b = !1);
                        else {
                            for (; 1 < f; ) e.sqrTo(u, s), e.sqrTo(s, u), (f -= 2);
                            0 < f ? e.sqrTo(u, s) : ((y = u), (u = s), (s = y));
                            e.mulTo(s, h[c], u);
                        }
                        for (; 0 <= o && 0 == (n[o] & (1 << i)); )
                            e.sqrTo(u, s), (y = u), (u = s), (s = y), --i < 0 && ((i = this.DB - 1), --o);
                    }
                    return e.revert(u);
                }),
                (n.prototype.modInverse = function (t) {
                    var s = t.isEven();
                    if ((this.isEven() && s) || 0 == t.signum()) return n.ZERO;
                    for (
                        var u = t.clone(), f = this.clone(), e = l(1), r = l(0), o = l(0), i = l(1);
                        0 != u.signum();

                    ) {
                        for (; u.isEven(); )
                            u.rShiftTo(1, u),
                                s
                                    ? ((e.isEven() && r.isEven()) || (e.addTo(this, e), r.subTo(t, r)),
                                      e.rShiftTo(1, e))
                                    : r.isEven() || r.subTo(t, r),
                                r.rShiftTo(1, r);
                        for (; f.isEven(); )
                            f.rShiftTo(1, f),
                                s
                                    ? ((o.isEven() && i.isEven()) || (o.addTo(this, o), i.subTo(t, i)),
                                      o.rShiftTo(1, o))
                                    : i.isEven() || i.subTo(t, i),
                                i.rShiftTo(1, i);
                        0 <= u.compareTo(f)
                            ? (u.subTo(f, u), s && e.subTo(o, e), r.subTo(i, r))
                            : (f.subTo(u, f), s && o.subTo(e, o), i.subTo(r, i));
                    }
                    return 0 != f.compareTo(n.ONE)
                        ? n.ZERO
                        : 0 <= i.compareTo(t)
                          ? i.subtract(t)
                          : i.signum() < 0
                            ? (i.addTo(t, i), i.signum() < 0 ? i.add(t) : i)
                            : i;
                }),
                (n.prototype.pow = function (n) {
                    return this.exp(n, new li());
                }),
                (n.prototype.gcd = function (n) {
                    var i = this.s < 0 ? this.negate() : this.clone(),
                        t = n.s < 0 ? n.negate() : n.clone(),
                        f,
                        u,
                        r;
                    if (
                        (i.compareTo(t) < 0 && ((f = i), (i = t), (t = f)),
                        (u = i.getLowestSetBit()),
                        (r = t.getLowestSetBit()),
                        r < 0)
                    )
                        return i;
                    for (u < r && (r = u), 0 < r && (i.rShiftTo(r, i), t.rShiftTo(r, t)); 0 < i.signum(); )
                        0 < (u = i.getLowestSetBit()) && i.rShiftTo(u, i),
                            0 < (u = t.getLowestSetBit()) && t.rShiftTo(u, t),
                            0 <= i.compareTo(t) ? (i.subTo(t, i), i.rShiftTo(1, i)) : (t.subTo(i, t), t.rShiftTo(1, t));
                    return 0 < r && t.lShiftTo(r, t), t;
                }),
                (n.prototype.isProbablePrime = function (n) {
                    var t,
                        i = this.abs(),
                        r,
                        u;
                    if (1 == i.t && i[0] <= e[e.length - 1]) {
                        for (t = 0; t < e.length; ++t) if (i[0] == e[t]) return !0;
                        return !1;
                    }
                    if (i.isEven()) return !1;
                    for (t = 1; t < e.length; ) {
                        for (r = e[t], u = t + 1; u < e.length && r < ci; ) r *= e[u++];
                        for (r = i.modInt(r); t < u; ) if (r % e[t++] == 0) return !1;
                    }
                    return i.millerRabin(n);
                }),
                (n.prototype.copyTo = function (n) {
                    for (var t = this.t - 1; 0 <= t; --t) n[t] = this[t];
                    n.t = this.t;
                    n.s = this.s;
                }),
                (n.prototype.fromInt = function (n) {
                    this.t = 1;
                    this.s = n < 0 ? -1 : 0;
                    0 < n ? (this[0] = n) : n < -1 ? (this[0] = n + this.DV) : (this.t = 0);
                }),
                (n.prototype.fromString = function (t, i) {
                    var u, f;
                    if (16 == i) u = 4;
                    else if (8 == i) u = 3;
                    else if (256 == i) u = 8;
                    else if (2 == i) u = 1;
                    else if (32 == i) u = 5;
                    else {
                        if (4 != i) return void this.fromRadix(t, i);
                        u = 2;
                    }
                    this.t = 0;
                    this.s = 0;
                    for (var e = t.length, o = !1, r = 0; 0 <= --e; )
                        (f = 8 == u ? 255 & +t[e] : ni(t, e)),
                            f < 0
                                ? "-" == t.charAt(e) && (o = !0)
                                : ((o = !1),
                                  0 == r
                                      ? (this[this.t++] = f)
                                      : r + u > this.DB
                                        ? ((this[this.t - 1] |= (f & ((1 << (this.DB - r)) - 1)) << r),
                                          (this[this.t++] = f >> (this.DB - r)))
                                        : (this[this.t - 1] |= f << r),
                                  (r += u) >= this.DB && (r -= this.DB));
                    8 == u &&
                        0 != (128 & +t[0]) &&
                        ((this.s = -1), 0 < r && (this[this.t - 1] |= ((1 << (this.DB - r)) - 1) << r));
                    this.clamp();
                    o && n.ZERO.subTo(this, this);
                }),
                (n.prototype.clamp = function () {
                    for (var n = this.s & this.DM; 0 < this.t && this[this.t - 1] == n; ) --this.t;
                }),
                (n.prototype.dlShiftTo = function (n, t) {
                    for (var i = this.t - 1; 0 <= i; --i) t[i + n] = this[i];
                    for (i = n - 1; 0 <= i; --i) t[i] = 0;
                    t.t = this.t + n;
                    t.s = this.s;
                }),
                (n.prototype.drShiftTo = function (n, t) {
                    for (var i = n; i < this.t; ++i) t[i - n] = this[i];
                    t.t = Math.max(this.t - n, 0);
                    t.s = this.s;
                }),
                (n.prototype.lShiftTo = function (n, t) {
                    for (
                        var u = n % this.DB,
                            e = this.DB - u,
                            o = (1 << e) - 1,
                            r = Math.floor(n / this.DB),
                            f = (this.s << u) & this.DM,
                            i = this.t - 1;
                        0 <= i;
                        --i
                    )
                        (t[i + r + 1] = (this[i] >> e) | f), (f = (this[i] & o) << u);
                    for (i = r - 1; 0 <= i; --i) t[i] = 0;
                    t[r] = f;
                    t.t = this.t + r + 1;
                    t.s = this.s;
                    t.clamp();
                }),
                (n.prototype.rShiftTo = function (n, t) {
                    var i, r;
                    if (((t.s = this.s), (i = Math.floor(n / this.DB)), i >= this.t)) t.t = 0;
                    else {
                        var u = n % this.DB,
                            f = this.DB - u,
                            e = (1 << u) - 1;
                        for (t[0] = this[i] >> u, r = i + 1; r < this.t; ++r)
                            (t[r - i - 1] |= (this[r] & e) << f), (t[r - i] = this[r] >> u);
                        0 < u && (t[this.t - i - 1] |= (this.s & e) << f);
                        t.t = this.t - i;
                        t.clamp();
                    }
                }),
                (n.prototype.subTo = function (n, t) {
                    for (var r = 0, i = 0, u = Math.min(n.t, this.t); r < u; )
                        (i += this[r] - n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                    if (n.t < this.t) {
                        for (i -= n.s; r < this.t; ) (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                        i += this.s;
                    } else {
                        for (i += this.s; r < n.t; ) (i -= n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                        i -= n.s;
                    }
                    t.s = i < 0 ? -1 : 0;
                    i < -1 ? (t[r++] = this.DV + i) : 0 < i && (t[r++] = i);
                    t.t = r;
                    t.clamp();
                }),
                (n.prototype.multiplyTo = function (t, i) {
                    var u = this.abs(),
                        f = t.abs(),
                        r = u.t;
                    for (i.t = r + f.t; 0 <= --r; ) i[r] = 0;
                    for (r = 0; r < f.t; ++r) i[r + u.t] = u.am(0, f[r], i, r, 0, u.t);
                    i.s = 0;
                    i.clamp();
                    this.s != t.s && n.ZERO.subTo(i, i);
                }),
                (n.prototype.squareTo = function (n) {
                    for (var r, i = this.abs(), t = (n.t = 2 * i.t); 0 <= --t; ) n[t] = 0;
                    for (t = 0; t < i.t - 1; ++t)
                        (r = i.am(t, i[t], n, 2 * t, 0, 1)),
                            (n[t + i.t] += i.am(t + 1, 2 * i[t], n, 2 * t + 1, r, i.t - t - 1)) >= i.DV &&
                                ((n[t + i.t] -= i.DV), (n[t + i.t + 1] = 1));
                    0 < n.t && (n[n.t - 1] += i.am(t, i[t], n, 2 * t, 0, 1));
                    n.s = 0;
                    n.clamp();
                }),
                (n.prototype.divRemTo = function (t, i, u) {
                    var s = t.abs(),
                        l,
                        e,
                        a,
                        y;
                    if (!(s.t <= 0)) {
                        if (((l = this.abs()), l.t < s.t))
                            return null != i && i.fromInt(0), void (null != u && this.copyTo(u));
                        null == u && (u = r());
                        var f = r(),
                            p = this.s,
                            b = t.s,
                            c = this.DB - ut(s[s.t - 1]);
                        if (
                            (0 < c ? (s.lShiftTo(c, f), l.lShiftTo(c, u)) : (s.copyTo(f), l.copyTo(u)),
                            (e = f.t),
                            (a = f[e - 1]),
                            0 != a)
                        ) {
                            var w = a * (1 << this.F1) + (1 < e ? f[e - 2] >> this.F2 : 0),
                                k = this.FV / w,
                                d = (1 << this.F1) / w,
                                g = 1 << this.F2,
                                h = u.t,
                                v = h - e,
                                o = null == i ? r() : i;
                            for (
                                f.dlShiftTo(v, o),
                                    0 <= u.compareTo(o) && ((u[u.t++] = 1), u.subTo(o, u)),
                                    n.ONE.dlShiftTo(e, o),
                                    o.subTo(f, f);
                                f.t < e;

                            )
                                f[f.t++] = 0;
                            for (; 0 <= --v; )
                                if (
                                    ((y = u[--h] == a ? this.DM : Math.floor(u[h] * k + (u[h - 1] + g) * d)),
                                    (u[h] += f.am(0, y, u, v, 0, e)) < y)
                                )
                                    for (f.dlShiftTo(v, o), u.subTo(o, u); u[h] < --y; ) u.subTo(o, u);
                            null != i && (u.drShiftTo(e, i), p != b && n.ZERO.subTo(i, i));
                            u.t = e;
                            u.clamp();
                            0 < c && u.rShiftTo(c, u);
                            p < 0 && n.ZERO.subTo(u, u);
                        }
                    }
                }),
                (n.prototype.invDigit = function () {
                    var t, n;
                    return this.t < 1
                        ? 0
                        : ((t = this[0]), 0 == (1 & t))
                          ? 0
                          : ((n = 3 & t),
                            0 <
                            (n =
                                ((n =
                                    ((n = ((n = (n * (2 - (15 & t) * n)) & 15) * (2 - (255 & t) * n)) & 255) *
                                        (2 - (((65535 & t) * n) & 65535))) &
                                    65535) *
                                    (2 - ((t * n) % this.DV))) %
                                this.DV)
                                ? this.DV - n
                                : -n);
                }),
                (n.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s);
                }),
                (n.prototype.exp = function (t, i) {
                    var s;
                    if (4294967295 < t || t < 1) return n.ONE;
                    var u = r(),
                        f = r(),
                        e = i.convert(this),
                        o = ut(t) - 1;
                    for (e.copyTo(u); 0 <= --o; )
                        (i.sqrTo(u, f), 0 < (t & (1 << o))) ? i.mulTo(f, e, u) : ((s = u), (u = f), (f = s));
                    return i.revert(u);
                }),
                (n.prototype.chunkSize = function (n) {
                    return Math.floor((Math.LN2 * this.DB) / Math.log(n));
                }),
                (n.prototype.toRadix = function (n) {
                    if ((null == n && (n = 10), 0 == this.signum() || n < 2 || 36 < n)) return "0";
                    var o = this.chunkSize(n),
                        f = Math.pow(n, o),
                        e = l(f),
                        t = r(),
                        i = r(),
                        u = "";
                    for (this.divRemTo(e, t, i); 0 < t.signum(); )
                        (u = (f + i.intValue()).toString(n).substr(1) + u), t.divRemTo(e, t, i);
                    return i.intValue().toString(n) + u;
                }),
                (n.prototype.fromRadix = function (t, i) {
                    var e;
                    this.fromInt(0);
                    null == i && (i = 10);
                    for (var o = this.chunkSize(i), h = Math.pow(i, o), s = !1, u = 0, r = 0, f = 0; f < t.length; ++f)
                        (e = ni(t, f)),
                            e < 0
                                ? "-" == t.charAt(f) && 0 == this.signum() && (s = !0)
                                : ((r = i * r + e),
                                  ++u >= o && (this.dMultiply(h), this.dAddOffset(r, 0), (r = u = 0)));
                    0 < u && (this.dMultiply(Math.pow(i, u)), this.dAddOffset(r, 0));
                    s && n.ZERO.subTo(this, this);
                }),
                (n.prototype.fromNumber = function (t, i, r) {
                    if ("number" == typeof i)
                        if (t < 2) this.fromInt(1);
                        else
                            for (
                                this.fromNumber(t, r),
                                    this.testBit(t - 1) || this.bitwiseTo(n.ONE.shiftLeft(t - 1), it, this),
                                    this.isEven() && this.dAddOffset(1, 0);
                                !this.isProbablePrime(i);

                            )
                                this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(n.ONE.shiftLeft(t - 1), this);
                    else {
                        var u = [],
                            f = 7 & t;
                        u.length = 1 + (t >> 3);
                        i.nextBytes(u);
                        0 < f ? (u[0] &= (1 << f) - 1) : (u[0] = 0);
                        this.fromString(u, 256);
                    }
                }),
                (n.prototype.bitwiseTo = function (n, t, i) {
                    for (var u, f = Math.min(n.t, this.t), r = 0; r < f; ++r) i[r] = t(this[r], n[r]);
                    if (n.t < this.t) {
                        for (u = n.s & this.DM, r = f; r < this.t; ++r) i[r] = t(this[r], u);
                        i.t = this.t;
                    } else {
                        for (u = this.s & this.DM, r = f; r < n.t; ++r) i[r] = t(u, n[r]);
                        i.t = n.t;
                    }
                    i.s = t(this.s, n.s);
                    i.clamp();
                }),
                (n.prototype.changeBit = function (t, i) {
                    var r = n.ONE.shiftLeft(t);
                    return this.bitwiseTo(r, i, r), r;
                }),
                (n.prototype.addTo = function (n, t) {
                    for (var r = 0, i = 0, u = Math.min(n.t, this.t); r < u; )
                        (i += this[r] + n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                    if (n.t < this.t) {
                        for (i += n.s; r < this.t; ) (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                        i += this.s;
                    } else {
                        for (i += this.s; r < n.t; ) (i += n[r]), (t[r++] = i & this.DM), (i >>= this.DB);
                        i += n.s;
                    }
                    t.s = i < 0 ? -1 : 0;
                    0 < i ? (t[r++] = i) : i < -1 && (t[r++] = this.DV + i);
                    t.t = r;
                    t.clamp();
                }),
                (n.prototype.dMultiply = function (n) {
                    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
                    ++this.t;
                    this.clamp();
                }),
                (n.prototype.dAddOffset = function (n, t) {
                    if (0 != n) {
                        for (; this.t <= t; ) this[this.t++] = 0;
                        for (this[t] += n; this[t] >= this.DV; )
                            (this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t];
                    }
                }),
                (n.prototype.multiplyLowerTo = function (n, t, i) {
                    var r = Math.min(this.t + n.t, t),
                        u;
                    for (i.s = 0, i.t = r; 0 < r; ) i[--r] = 0;
                    for (u = i.t - this.t; r < u; ++r) i[r + this.t] = this.am(0, n[r], i, r, 0, this.t);
                    for (u = Math.min(n.t, t); r < u; ++r) this.am(0, n[r], i, r, 0, t - r);
                    i.clamp();
                }),
                (n.prototype.multiplyUpperTo = function (n, t, i) {
                    --t;
                    var r = (i.t = this.t + n.t - t);
                    for (i.s = 0; 0 <= --r; ) i[r] = 0;
                    for (r = Math.max(t - this.t, 0); r < n.t; ++r)
                        i[this.t + r - t] = this.am(t - r, n[r], i, 0, 0, this.t + r - t);
                    i.clamp();
                    i.drShiftTo(1, i);
                }),
                (n.prototype.modInt = function (n) {
                    var r, t, i;
                    if (n <= 0) return 0;
                    if (((r = this.DV % n), (t = this.s < 0 ? n - 1 : 0), 0 < this.t))
                        if (0 == r) t = this[0] % n;
                        else for (i = this.t - 1; 0 <= i; --i) t = (r * t + this[i]) % n;
                    return t;
                }),
                (n.prototype.millerRabin = function (t) {
                    var u = this.subtract(n.ONE),
                        f = u.getLowestSetBit(),
                        h,
                        o,
                        s,
                        i,
                        c;
                    if (f <= 0) return !1;
                    for (
                        h = u.shiftRight(f), e.length < (t = (t + 1) >> 1) && (t = e.length), o = r(), s = 0;
                        s < t;
                        ++s
                    )
                        if (
                            (o.fromInt(e[Math.floor(Math.random() * e.length)]),
                            (i = o.modPow(h, this)),
                            0 != i.compareTo(n.ONE) && 0 != i.compareTo(u))
                        ) {
                            for (c = 1; c++ < f && 0 != i.compareTo(u); )
                                if (0 == (i = i.modPowInt(2, this)).compareTo(n.ONE)) return !1;
                            if (0 != i.compareTo(u)) return !1;
                        }
                    return !0;
                }),
                (n.prototype.square = function () {
                    var n = r();
                    return this.squareTo(n), n;
                }),
                (n.prototype.gcda = function (n, t) {
                    var r = this.s < 0 ? this.negate() : this.clone(),
                        i = n.s < 0 ? n.negate() : n.clone(),
                        o,
                        f,
                        u,
                        e;
                    r.compareTo(i) < 0 && ((o = r), (r = i), (i = o));
                    f = r.getLowestSetBit();
                    u = i.getLowestSetBit();
                    u < 0
                        ? t(r)
                        : (f < u && (u = f),
                          0 < u && (r.rShiftTo(u, r), i.rShiftTo(u, i)),
                          (e = function () {
                              0 < (f = r.getLowestSetBit()) && r.rShiftTo(f, r);
                              0 < (f = i.getLowestSetBit()) && i.rShiftTo(f, i);
                              0 <= r.compareTo(i)
                                  ? (r.subTo(i, r), r.rShiftTo(1, r))
                                  : (i.subTo(r, i), i.rShiftTo(1, i));
                              0 < r.signum()
                                  ? setTimeout(e, 0)
                                  : (0 < u && i.lShiftTo(u, i),
                                    setTimeout(function () {
                                        t(i);
                                    }, 0));
                          }),
                          setTimeout(e, 10));
                }),
                (n.prototype.fromNumberAsync = function (t, i, r, u) {
                    var f, o, e, s;
                    "number" == typeof i
                        ? t < 2
                            ? this.fromInt(1)
                            : (this.fromNumber(t, r),
                              this.testBit(t - 1) || this.bitwiseTo(n.ONE.shiftLeft(t - 1), it, this),
                              this.isEven() && this.dAddOffset(1, 0),
                              (f = this),
                              (o = function () {
                                  f.dAddOffset(2, 0);
                                  f.bitLength() > t && f.subTo(n.ONE.shiftLeft(t - 1), f);
                                  f.isProbablePrime(i)
                                      ? setTimeout(function () {
                                            u();
                                        }, 0)
                                      : setTimeout(o, 0);
                              }),
                              setTimeout(o, 0))
                        : ((e = []),
                          (s = 7 & t),
                          (e.length = 1 + (t >> 3)),
                          i.nextBytes(e),
                          0 < s ? (e[0] &= (1 << s) - 1) : (e[0] = 0),
                          this.fromString(e, 256));
                }),
                n
            );
        })(),
        li = (function () {
            function n() {}
            return (
                (n.prototype.convert = function (n) {
                    return n;
                }),
                (n.prototype.revert = function (n) {
                    return n;
                }),
                (n.prototype.mulTo = function (n, t, i) {
                    n.multiplyTo(t, i);
                }),
                (n.prototype.sqrTo = function (n, t) {
                    n.squareTo(t);
                }),
                n
            );
        })(),
        dt = (function () {
            function n(n) {
                this.m = n;
            }
            return (
                (n.prototype.convert = function (n) {
                    return n.s < 0 || 0 <= n.compareTo(this.m) ? n.mod(this.m) : n;
                }),
                (n.prototype.revert = function (n) {
                    return n;
                }),
                (n.prototype.reduce = function (n) {
                    n.divRemTo(this.m, null, n);
                }),
                (n.prototype.mulTo = function (n, t, i) {
                    n.multiplyTo(t, i);
                    this.reduce(i);
                }),
                (n.prototype.sqrTo = function (n, t) {
                    n.squareTo(t);
                    this.reduce(t);
                }),
                n
            );
        })(),
        gt = (function () {
            function n(n) {
                this.m = n;
                this.mp = n.invDigit();
                this.mpl = 32767 & this.mp;
                this.mph = this.mp >> 15;
                this.um = (1 << (n.DB - 15)) - 1;
                this.mt2 = 2 * n.t;
            }
            return (
                (n.prototype.convert = function (n) {
                    var t = r();
                    return (
                        n.abs().dlShiftTo(this.m.t, t),
                        t.divRemTo(this.m, null, t),
                        n.s < 0 && 0 < t.compareTo(i.ZERO) && this.m.subTo(t, t),
                        t
                    );
                }),
                (n.prototype.revert = function (n) {
                    var t = r();
                    return n.copyTo(t), this.reduce(t), t;
                }),
                (n.prototype.reduce = function (n) {
                    for (var t, i, r; n.t <= this.mt2; ) n[n.t++] = 0;
                    for (t = 0; t < this.m.t; ++t)
                        for (
                            i = 32767 & n[t],
                                r =
                                    (i * this.mpl + (((i * this.mph + (n[t] >> 15) * this.mpl) & this.um) << 15)) &
                                    n.DM,
                                n[(i = t + this.m.t)] += this.m.am(0, r, n, t, 0, this.m.t);
                            n[i] >= n.DV;

                        )
                            (n[i] -= n.DV), n[++i]++;
                    n.clamp();
                    n.drShiftTo(this.m.t, n);
                    0 <= n.compareTo(this.m) && n.subTo(this.m, n);
                }),
                (n.prototype.mulTo = function (n, t, i) {
                    n.multiplyTo(t, i);
                    this.reduce(i);
                }),
                (n.prototype.sqrTo = function (n, t) {
                    n.squareTo(t);
                    this.reduce(t);
                }),
                n
            );
        })(),
        ai = (function () {
            function n(n) {
                this.m = n;
                this.r2 = r();
                this.q3 = r();
                i.ONE.dlShiftTo(2 * n.t, this.r2);
                this.mu = this.r2.divide(n);
            }
            return (
                (n.prototype.convert = function (n) {
                    if (n.s < 0 || n.t > 2 * this.m.t) return n.mod(this.m);
                    if (n.compareTo(this.m) < 0) return n;
                    var t = r();
                    return n.copyTo(t), this.reduce(t), t;
                }),
                (n.prototype.revert = function (n) {
                    return n;
                }),
                (n.prototype.reduce = function (n) {
                    for (
                        n.drShiftTo(this.m.t - 1, this.r2),
                            n.t > this.m.t + 1 && ((n.t = this.m.t + 1), n.clamp()),
                            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                        n.compareTo(this.r2) < 0;

                    )
                        n.dAddOffset(1, this.m.t + 1);
                    for (n.subTo(this.r2, n); 0 <= n.compareTo(this.m); ) n.subTo(this.m, n);
                }),
                (n.prototype.mulTo = function (n, t, i) {
                    n.multiplyTo(t, i);
                    this.reduce(i);
                }),
                (n.prototype.sqrTo = function (n, t) {
                    n.squareTo(t);
                    this.reduce(t);
                }),
                n
            );
        })(),
        b,
        o,
        g,
        nt,
        et,
        tt,
        t,
        lt,
        at;
    for (
        "Microsoft Internet Explorer" == navigator.appName
            ? ((i.prototype.am = function (n, t, i, r, u, f) {
                  for (var o = 32767 & t, s = t >> 15; 0 <= --f; ) {
                      var e = 32767 & this[n],
                          h = this[n++] >> 15,
                          c = s * e + h * o;
                      u =
                          ((e = o * e + ((32767 & c) << 15) + i[r] + (1073741823 & u)) >>> 30) +
                          (c >>> 15) +
                          s * h +
                          (u >>> 30);
                      i[r++] = 1073741823 & e;
                  }
                  return u;
              }),
              (c = 30))
            : "Netscape" != navigator.appName
              ? ((i.prototype.am = function (n, t, i, r, u, f) {
                    for (; 0 <= --f; ) {
                        var e = t * this[n++] + i[r] + u;
                        u = Math.floor(e / 67108864);
                        i[r++] = 67108863 & e;
                    }
                    return u;
                }),
                (c = 26))
              : ((i.prototype.am = function (n, t, i, r, u, f) {
                    for (var o = 16383 & t, s = t >> 14; 0 <= --f; ) {
                        var e = 16383 & this[n],
                            h = this[n++] >> 14,
                            c = s * e + h * o;
                        u = ((e = o * e + ((16383 & c) << 14) + i[r] + u) >> 28) + (c >> 14) + s * h;
                        i[r++] = 268435455 & e;
                    }
                    return u;
                }),
                (c = 28)),
            i.prototype.DB = c,
            i.prototype.DM = (1 << c) - 1,
            i.prototype.DV = 1 << c,
            i.prototype.FV = Math.pow(2, 52),
            i.prototype.F1 = 52 - c,
            i.prototype.F2 = 2 * c - 52,
            g = [],
            b = "0".charCodeAt(0),
            o = 0;
        o <= 9;
        ++o
    )
        g[b++] = o;
    for (b = "a".charCodeAt(0), o = 10; o < 36; ++o) g[b++] = o;
    for (b = "A".charCodeAt(0), o = 10; o < 36; ++o) g[b++] = o;
    i.ZERO = l(0);
    i.ONE = l(1);
    var vi = (function () {
            function n() {
                this.i = 0;
                this.j = 0;
                this.S = [];
            }
            return (
                (n.prototype.init = function (n) {
                    for (var i, r, t = 0; t < 256; ++t) this.S[t] = t;
                    for (t = i = 0; t < 256; ++t)
                        (i = (i + this.S[t] + n[t % n.length]) & 255),
                            (r = this.S[t]),
                            (this.S[t] = this.S[i]),
                            (this.S[i] = r);
                    this.i = 0;
                    this.j = 0;
                }),
                (n.prototype.next = function () {
                    var n;
                    return (
                        (this.i = (this.i + 1) & 255),
                        (this.j = (this.j + this.S[this.i]) & 255),
                        (n = this.S[this.i]),
                        (this.S[this.i] = this.S[this.j]),
                        (this.S[this.j] = n),
                        this.S[(n + this.S[this.i]) & 255]
                    );
                }),
                n
            );
        })(),
        ft,
        s,
        ti = 256,
        a = null;
    if (null == a) {
        if (((a = []), (nt = void (s = 0)), window.crypto && window.crypto.getRandomValues))
            for (et = new Uint32Array(256), window.crypto.getRandomValues(et), nt = 0; nt < et.length; ++nt)
                a[s++] = 255 & et[nt];
        tt = function (n) {
            if (((this.count = this.count || 0), 256 <= this.count || ti <= s))
                window.removeEventListener
                    ? window.removeEventListener("mousemove", tt, !1)
                    : window.detachEvent && window.detachEvent("onmousemove", tt);
            else
                try {
                    var t = n.x + n.y;
                    a[s++] = 255 & t;
                    this.count += 1;
                } catch (n) {}
        };
        window.addEventListener
            ? window.addEventListener("mousemove", tt, !1)
            : window.attachEvent && window.attachEvent("onmousemove", tt);
    }
    var ct = (function () {
            function n() {}
            return (
                (n.prototype.nextBytes = function (n) {
                    for (var t = 0; t < n.length; ++t) n[t] = yi();
                }),
                n
            );
        })(),
        pi = (function () {
            function n() {
                this.n = null;
                this.e = 0;
                this.d = null;
                this.p = null;
                this.q = null;
                this.dmp1 = null;
                this.dmq1 = null;
                this.coeff = null;
            }
            return (
                (n.prototype.doPublic = function (n) {
                    return n.modPowInt(this.e, this.n);
                }),
                (n.prototype.doPrivate = function (n) {
                    if (null == this.p || null == this.q) return n.modPow(this.d, this.n);
                    for (
                        var t = n.mod(this.p).modPow(this.dmp1, this.p), i = n.mod(this.q).modPow(this.dmq1, this.q);
                        t.compareTo(i) < 0;

                    )
                        t = t.add(this.p);
                    return t.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
                }),
                (n.prototype.setPublic = function (n, t) {
                    null != n && null != t && 0 < n.length && 0 < t.length
                        ? ((this.n = u(n, 16)), (this.e = parseInt(t, 16)))
                        : console.error("Invalid RSA public key");
                }),
                (n.prototype.encrypt = function (n) {
                    var u = (function (n, t) {
                            var r, e, u, o, f;
                            if (t < n.length + 11) return console.error("Message too long for RSA"), null;
                            for (r = [], e = n.length - 1; 0 <= e && 0 < t; )
                                (u = n.charCodeAt(e--)),
                                    u < 128
                                        ? (r[--t] = u)
                                        : 127 < u && u < 2048
                                          ? ((r[--t] = (63 & u) | 128), (r[--t] = (u >> 6) | 192))
                                          : ((r[--t] = (63 & u) | 128),
                                            (r[--t] = ((u >> 6) & 63) | 128),
                                            (r[--t] = (u >> 12) | 224));
                            for (r[--t] = 0, o = new ct(), f = []; 2 < t; ) {
                                for (f[0] = 0; 0 == f[0]; ) o.nextBytes(f);
                                r[--t] = f[0];
                            }
                            return (r[--t] = 2), (r[--t] = 0), new i(r);
                        })(n, (this.n.bitLength() + 7) >> 3),
                        r,
                        t;
                    return null == u
                        ? null
                        : ((r = this.doPublic(u)), null == r)
                          ? null
                          : ((t = r.toString(16)), 0 == (1 & t.length) ? t : "0" + t);
                }),
                (n.prototype.setPrivate = function (n, t, i) {
                    null != n && null != t && 0 < n.length && 0 < t.length
                        ? ((this.n = u(n, 16)), (this.e = parseInt(t, 16)), (this.d = u(i, 16)))
                        : console.error("Invalid RSA private key");
                }),
                (n.prototype.setPrivateEx = function (n, t, i, r, f, e, o, s) {
                    null != n && null != t && 0 < n.length && 0 < t.length
                        ? ((this.n = u(n, 16)),
                          (this.e = parseInt(t, 16)),
                          (this.d = u(i, 16)),
                          (this.p = u(r, 16)),
                          (this.q = u(f, 16)),
                          (this.dmp1 = u(e, 16)),
                          (this.dmq1 = u(o, 16)),
                          (this.coeff = u(s, 16)))
                        : console.error("Invalid RSA private key");
                }),
                (n.prototype.generate = function (n, t) {
                    var u = new ct(),
                        f = n >> 1,
                        r,
                        e;
                    for (this.e = parseInt(t, 16), r = new i(t, 16); ; ) {
                        for (
                            ;
                            (this.p = new i(n - f, 1, u)),
                                0 != this.p.subtract(i.ONE).gcd(r).compareTo(i.ONE) || !this.p.isProbablePrime(10);

                        );
                        for (
                            ;
                            (this.q = new i(f, 1, u)),
                                0 != this.q.subtract(i.ONE).gcd(r).compareTo(i.ONE) || !this.q.isProbablePrime(10);

                        );
                        this.p.compareTo(this.q) <= 0 && ((e = this.p), (this.p = this.q), (this.q = e));
                        var o = this.p.subtract(i.ONE),
                            s = this.q.subtract(i.ONE),
                            h = o.multiply(s);
                        if (0 == h.gcd(r).compareTo(i.ONE)) {
                            this.n = this.p.multiply(this.q);
                            this.d = r.modInverse(h);
                            this.dmp1 = this.d.mod(o);
                            this.dmq1 = this.d.mod(s);
                            this.coeff = this.q.modInverse(this.p);
                            break;
                        }
                    }
                }),
                (n.prototype.decrypt = function (n) {
                    var i = u(n, 16),
                        t = this.doPrivate(i);
                    return null == t
                        ? null
                        : (function (n, t) {
                              for (var r = n.toByteArray(), i = 0, f, u; i < r.length && 0 == r[i]; ) ++i;
                              if (r.length - i != t - 1 || 2 != r[i]) return null;
                              for (++i; 0 != r[i]; ) if (++i >= r.length) return null;
                              for (f = ""; ++i < r.length; )
                                  (u = 255 & r[i]),
                                      u < 128
                                          ? (f += String.fromCharCode(u))
                                          : 191 < u && u < 224
                                            ? ((f += String.fromCharCode(((31 & u) << 6) | (63 & r[i + 1]))), ++i)
                                            : ((f += String.fromCharCode(
                                                  ((15 & u) << 12) | ((63 & r[i + 1]) << 6) | (63 & r[i + 2])
                                              )),
                                              (i += 2));
                              return f;
                          })(t, (this.n.bitLength() + 7) >> 3);
                }),
                (n.prototype.generateAsync = function (n, t, u) {
                    var o = new ct(),
                        s = n >> 1;
                    this.e = parseInt(t, 16);
                    var e = new i(t, 16),
                        f = this,
                        h = function () {
                            var l = function () {
                                    var n;
                                    f.p.compareTo(f.q) <= 0 && ((n = f.p), (f.p = f.q), (f.q = n));
                                    var t = f.p.subtract(i.ONE),
                                        r = f.q.subtract(i.ONE),
                                        o = t.multiply(r);
                                    0 == o.gcd(e).compareTo(i.ONE)
                                        ? ((f.n = f.p.multiply(f.q)),
                                          (f.d = e.modInverse(o)),
                                          (f.dmp1 = f.d.mod(t)),
                                          (f.dmq1 = f.d.mod(r)),
                                          (f.coeff = f.q.modInverse(f.p)),
                                          setTimeout(function () {
                                              u();
                                          }, 0))
                                        : setTimeout(h, 0);
                                },
                                t = function () {
                                    f.q = r();
                                    f.q.fromNumberAsync(s, 1, o, function () {
                                        f.q.subtract(i.ONE).gcda(e, function (n) {
                                            0 == n.compareTo(i.ONE) && f.q.isProbablePrime(10)
                                                ? setTimeout(l, 0)
                                                : setTimeout(t, 0);
                                        });
                                    });
                                },
                                c = function () {
                                    f.p = r();
                                    f.p.fromNumberAsync(n - s, 1, o, function () {
                                        f.p.subtract(i.ONE).gcda(e, function (n) {
                                            0 == n.compareTo(i.ONE) && f.p.isProbablePrime(10)
                                                ? setTimeout(t, 0)
                                                : setTimeout(c, 0);
                                        });
                                    });
                                };
                            setTimeout(c, 0);
                        };
                    setTimeout(h, 0);
                }),
                (n.prototype.sign = function (n, t, i) {
                    var e = (function (n, t) {
                            if (t < n.length + 22) return console.error("Message too long for RSA"), null;
                            for (var f = t - n.length - 6, i = "", r = 0; r < f; r += 2) i += "ff";
                            return u("0001" + i + "00" + n, 16);
                        })((ot[i] || "") + t(n).toString(), this.n.bitLength() / 4),
                        f,
                        r;
                    return null == e
                        ? null
                        : ((f = this.doPrivate(e)), null == f)
                          ? null
                          : ((r = f.toString(16)), 0 == (1 & r.length) ? r : "0" + r);
                }),
                (n.prototype.verify = function (n, t, i) {
                    var f = u(t, 16),
                        r = this.doPublic(f);
                    return null == r
                        ? null
                        : (function (n) {
                              var t, i, r;
                              for (t in ot)
                                  if (ot.hasOwnProperty(t) && ((i = ot[t]), (r = i.length), n.substr(0, r) == i))
                                      return n.substr(r);
                              return n;
                          })(r.toString(16).replace(/^1f+00/, "")) == i(n).toString();
                }),
                n
            );
        })(),
        ot = {
            md2: "3020300c06082a864886f70d020205000410",
            md5: "3020300c06082a864886f70d020505000410",
            sha1: "3021300906052b0e03021a05000414",
            sha224: "302d300d06096086480165030402040500041c",
            sha256: "3031300d060960864801650304020105000420",
            sha384: "3041300d060960864801650304020205000430",
            sha512: "3051300d060960864801650304020305000440",
            ripemd160: "3021300906052b2403020105000414",
        },
        f = {};
    f.lang = {
        extend: function (n, t, i) {
            var u, r, f, e;
            if (!t || !n) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            if (
                ((u = function () {}),
                (u.prototype = t.prototype),
                (n.prototype = new u()),
                ((n.prototype.constructor = n).superclass = t.prototype),
                t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t),
                i)
            ) {
                for (r in i) n.prototype[r] = i[r];
                f = function () {};
                e = ["toString", "valueOf"];
                try {
                    /MSIE/.test(navigator.userAgent) &&
                        (f = function (n, t) {
                            for (r = 0; r < e.length; r += 1) {
                                var i = e[r],
                                    u = t[i];
                                "function" == typeof u && u != Object.prototype[i] && (n[i] = u);
                            }
                        });
                } catch (n) {}
                f(n.prototype, i);
            }
        },
    };
    t = {};
    (void 0 !== t.asn1 && t.asn1) || (t.asn1 = {});
    t.asn1.ASN1Util = new (function () {
        this.integerToByteHex = function (n) {
            var t = n.toString(16);
            return t.length % 2 == 1 && (t = "0" + t), t;
        };
        this.bigIntToMinTwosComplementsHex = function (n) {
            var t = n.toString(16),
                r,
                u,
                f;
            if ("-" != t.substr(0, 1)) t.length % 2 == 1 ? (t = "0" + t) : t.match(/^[0-7]/) || (t = "00" + t);
            else {
                for (
                    r = t.substr(1).length, r % 2 == 1 ? (r += 1) : t.match(/^[0-7]/) || (r += 2), u = "", f = 0;
                    f < r;
                    f++
                )
                    u += "f";
                t = new i(u, 16).xor(n).add(i.ONE).toString(16).replace(/^-/, "");
            }
            return t;
        };
        this.getPEMStringFromHex = function (n, t) {
            return hextopem(n, t);
        };
        this.newObject = function (n) {
            var r = t.asn1,
                y = r.DERBoolean,
                p = r.DERInteger,
                w = r.DERBitString,
                b = r.DEROctetString,
                k = r.DERNull,
                d = r.DERObjectIdentifier,
                g = r.DEREnumerated,
                nt = r.DERUTF8String,
                tt = r.DERNumericString,
                it = r.DERPrintableString,
                rt = r.DERTeletexString,
                ut = r.DERIA5String,
                ft = r.DERUTCTime,
                et = r.DERGeneralizedTime,
                ot = r.DERSequence,
                st = r.DERSet,
                l = r.DERTaggedObject,
                h = r.ASN1Util.newObject,
                a = Object.keys(n),
                i,
                c,
                u,
                v,
                s;
            if (1 != a.length) throw "key of param shall be only one.";
            if (
                ((i = a[0]),
                -1 ==
                    ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(
                        ":" + i + ":"
                    ))
            )
                throw "undefined key: " + i;
            if ("bool" == i) return new y(n[i]);
            if ("int" == i) return new p(n[i]);
            if ("bitstr" == i) return new w(n[i]);
            if ("octstr" == i) return new b(n[i]);
            if ("null" == i) return new k(n[i]);
            if ("oid" == i) return new d(n[i]);
            if ("enum" == i) return new g(n[i]);
            if ("utf8str" == i) return new nt(n[i]);
            if ("numstr" == i) return new tt(n[i]);
            if ("prnstr" == i) return new it(n[i]);
            if ("telstr" == i) return new rt(n[i]);
            if ("ia5str" == i) return new ut(n[i]);
            if ("utctime" == i) return new ft(n[i]);
            if ("gentime" == i) return new et(n[i]);
            if ("seq" == i) {
                for (var e = n[i], o = [], f = 0; f < e.length; f++) (c = h(e[f])), o.push(c);
                return new ot({ array: o });
            }
            if ("set" == i) {
                for (e = n[i], o = [], f = 0; f < e.length; f++) (c = h(e[f])), o.push(c);
                return new st({ array: o });
            }
            if ("tag" == i) {
                if (((u = n[i]), "[object Array]" === Object.prototype.toString.call(u) && 3 == u.length))
                    return (v = h(u[2])), new l({ tag: u[0], explicit: u[1], obj: v });
                if (
                    ((s = {}),
                    void 0 !== u.explicit && (s.explicit = u.explicit),
                    void 0 !== u.tag && (s.tag = u.tag),
                    void 0 === u.obj)
                )
                    throw "obj shall be specified for 'tag'.";
                return (s.obj = h(u.obj)), new l(s);
            }
        };
        this.jsonToASN1HEX = function (n) {
            return this.newObject(n).getEncodedHex();
        };
    })();
    t.asn1.ASN1Util.oidHexToInt = function (n) {
        for (
            var f, t = "", e = parseInt(n.substr(0, 2), 16), r = ((t = Math.floor(e / 40) + "." + (e % 40)), ""), u = 2;
            u < n.length;
            u += 2
        )
            (f = ("00000000" + parseInt(n.substr(u, 2), 16).toString(2)).slice(-8)),
                ((r += f.substr(1, 7)), "0" == f.substr(0, 1)) && ((t = t + "." + new i(r, 2).toString(10)), (r = ""));
        return t;
    };
    t.asn1.ASN1Util.oidIntToHex = function (n) {
        var f = function (n) {
                var t = n.toString(16);
                return 1 == t.length && (t = "0" + t), t;
            },
            e = function (n) {
                var s = "",
                    r = new i(n, 10).toString(2),
                    e = 7 - (r.length % 7),
                    o,
                    t,
                    u;
                for (7 == e && (e = 0), o = "", t = 0; t < e; t++) o += "0";
                for (r = o + r, t = 0; t < r.length - 1; t += 7)
                    (u = r.substr(t, 7)), t != r.length - 7 && (u = "1" + u), (s += f(parseInt(u, 2)));
                return s;
            },
            r;
        if (!n.match(/^[0-9.]+$/)) throw "malformed oid string: " + n;
        var u = "",
            t = n.split("."),
            o = 40 * parseInt(t[0]) + parseInt(t[1]);
        for (u += f(o), t.splice(0, 2), r = 0; r < t.length; r++) u += e(t[r]);
        return u;
    };
    t.asn1.ASN1Object = function () {
        this.getLengthHexFromValue = function () {
            var t, n, i;
            if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1) throw "value hex must be even length: n=0,v=" + this.hV;
            if (((t = this.hV.length / 2), (n = t.toString(16)), n.length % 2 == 1 && (n = "0" + n), t < 128)) return n;
            if (((i = n.length / 2), 15 < i)) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
            return (128 + i).toString(16) + n;
        };
        this.getEncodedHex = function () {
            return (
                (null == this.hTLV || this.isModified) &&
                    ((this.hV = this.getFreshValueHex()),
                    (this.hL = this.getLengthHexFromValue()),
                    (this.hTLV = this.hT + this.hL + this.hV),
                    (this.isModified = !1)),
                this.hTLV
            );
        };
        this.getValueHex = function () {
            return this.getEncodedHex(), this.hV;
        };
        this.getFreshValueHex = function () {
            return "";
        };
    };
    t.asn1.DERAbstractString = function (n) {
        t.asn1.DERAbstractString.superclass.constructor.call(this);
        this.getString = function () {
            return this.s;
        };
        this.setString = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = n;
            this.hV = stohex(this.s);
        };
        this.setStringHex = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = n;
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
        void 0 !== n &&
            ("string" == typeof n
                ? this.setString(n)
                : void 0 !== n.str
                  ? this.setString(n.str)
                  : void 0 !== n.hex && this.setStringHex(n.hex));
    };
    f.lang.extend(t.asn1.DERAbstractString, t.asn1.ASN1Object);
    t.asn1.DERAbstractTime = function () {
        t.asn1.DERAbstractTime.superclass.constructor.call(this);
        this.localDateToUTC = function (n) {
            var t = n.getTime() + 6e4 * n.getTimezoneOffset();
            return new Date(t);
        };
        this.formatDate = function (n, t, i) {
            var u = this.zeroPadding,
                r = this.localDateToUTC(n),
                e = String(r.getFullYear()),
                f,
                o,
                s;
            return (
                "utc" == t && (e = e.substr(2, 2)),
                (f =
                    e +
                    u(String(r.getMonth() + 1), 2) +
                    u(String(r.getDate()), 2) +
                    u(String(r.getHours()), 2) +
                    u(String(r.getMinutes()), 2) +
                    u(String(r.getSeconds()), 2)),
                !0 === i &&
                    ((o = r.getMilliseconds()),
                    0 != o && ((s = u(String(o), 3)), (f = f + "." + (s = s.replace(/[0]+$/, ""))))),
                f + "Z"
            );
        };
        this.zeroPadding = function (n, t) {
            return n.length >= t ? n : new Array(t - n.length + 1).join("0") + n;
        };
        this.getString = function () {
            return this.s;
        };
        this.setString = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = n;
            this.hV = stohex(n);
        };
        this.setByDateValue = function (n, t, i, r, u, f) {
            var e = new Date(Date.UTC(n, t - 1, i, r, u, f, 0));
            this.setByDate(e);
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
    };
    f.lang.extend(t.asn1.DERAbstractTime, t.asn1.ASN1Object);
    t.asn1.DERAbstractStructured = function (n) {
        t.asn1.DERAbstractString.superclass.constructor.call(this);
        this.setByASN1ObjectArray = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array = n;
        };
        this.appendASN1Object = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array.push(n);
        };
        this.asn1Array = [];
        void 0 !== n && void 0 !== n.array && (this.asn1Array = n.array);
    };
    f.lang.extend(t.asn1.DERAbstractStructured, t.asn1.ASN1Object);
    t.asn1.DERBoolean = function () {
        t.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff";
    };
    f.lang.extend(t.asn1.DERBoolean, t.asn1.ASN1Object);
    t.asn1.DERInteger = function (n) {
        t.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";
        this.setByBigInteger = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = t.asn1.ASN1Util.bigIntToMinTwosComplementsHex(n);
        };
        this.setByInteger = function (n) {
            var t = new i(String(n), 10);
            this.setByBigInteger(t);
        };
        this.setValueHex = function (n) {
            this.hV = n;
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
        void 0 !== n &&
            (void 0 !== n.bigint
                ? this.setByBigInteger(n.bigint)
                : void 0 !== n.int
                  ? this.setByInteger(n.int)
                  : "number" == typeof n
                    ? this.setByInteger(n)
                    : void 0 !== n.hex && this.setValueHex(n.hex));
    };
    f.lang.extend(t.asn1.DERInteger, t.asn1.ASN1Object);
    t.asn1.DERBitString = function (n) {
        if (void 0 !== n && void 0 !== n.obj) {
            var i = t.asn1.ASN1Util.newObject(n.obj);
            n.hex = "00" + i.getEncodedHex();
        }
        t.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = "03";
        this.setHexValueIncludingUnusedBits = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = n;
        };
        this.setUnusedBitsAndHexValue = function (n, t) {
            if (n < 0 || 7 < n) throw "unused bits shall be from 0 to 7: u = " + n;
            var i = "0" + n;
            this.hTLV = null;
            this.isModified = !0;
            this.hV = i + t;
        };
        this.setByBinaryString = function (n) {
            var r = 8 - ((n = n.replace(/0+$/, "")).length % 8),
                t,
                u,
                f,
                i;
            for (8 == r && (r = 0), t = 0; t <= r; t++) n += "0";
            for (u = "", t = 0; t < n.length - 1; t += 8)
                (f = n.substr(t, 8)), (i = parseInt(f, 2).toString(16)), 1 == i.length && (i = "0" + i), (u += i);
            this.hTLV = null;
            this.isModified = !0;
            this.hV = "0" + r + u;
        };
        this.setByBooleanArray = function (n) {
            for (var i = "", t = 0; t < n.length; t++) i += 1 == n[t] ? "1" : "0";
            this.setByBinaryString(i);
        };
        this.newFalseArray = function (n) {
            for (var i = new Array(n), t = 0; t < n; t++) i[t] = !1;
            return i;
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
        void 0 !== n &&
            ("string" == typeof n && n.toLowerCase().match(/^[0-9a-f]+$/)
                ? this.setHexValueIncludingUnusedBits(n)
                : void 0 !== n.hex
                  ? this.setHexValueIncludingUnusedBits(n.hex)
                  : void 0 !== n.bin
                    ? this.setByBinaryString(n.bin)
                    : void 0 !== n.array && this.setByBooleanArray(n.array));
    };
    f.lang.extend(t.asn1.DERBitString, t.asn1.ASN1Object);
    t.asn1.DEROctetString = function (n) {
        if (void 0 !== n && void 0 !== n.obj) {
            var i = t.asn1.ASN1Util.newObject(n.obj);
            n.hex = i.getEncodedHex();
        }
        t.asn1.DEROctetString.superclass.constructor.call(this, n);
        this.hT = "04";
    };
    f.lang.extend(t.asn1.DEROctetString, t.asn1.DERAbstractString);
    t.asn1.DERNull = function () {
        t.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500";
    };
    f.lang.extend(t.asn1.DERNull, t.asn1.ASN1Object);
    t.asn1.DERObjectIdentifier = function (n) {
        var r = function (n) {
                var t = n.toString(16);
                return 1 == t.length && (t = "0" + t), t;
            },
            u = function (n) {
                var s = "",
                    u = new i(n, 10).toString(2),
                    e = 7 - (u.length % 7),
                    o,
                    t,
                    f;
                for (7 == e && (e = 0), o = "", t = 0; t < e; t++) o += "0";
                for (u = o + u, t = 0; t < u.length - 1; t += 7)
                    (f = u.substr(t, 7)), t != u.length - 7 && (f = "1" + f), (s += r(parseInt(f, 2)));
                return s;
            };
        t.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = "06";
        this.setValueHex = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = n;
        };
        this.setValueOidString = function (n) {
            var i;
            if (!n.match(/^[0-9.]+$/)) throw "malformed oid string: " + n;
            var f = "",
                t = n.split("."),
                e = 40 * parseInt(t[0]) + parseInt(t[1]);
            for (f += r(e), t.splice(0, 2), i = 0; i < t.length; i++) f += u(t[i]);
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = f;
        };
        this.setValueName = function (n) {
            var i = t.asn1.x509.OID.name2oid(n);
            if ("" === i) throw "DERObjectIdentifier oidName undefined: " + n;
            this.setValueOidString(i);
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
        void 0 !== n &&
            ("string" == typeof n
                ? n.match(/^[0-2].[0-9.]+$/)
                    ? this.setValueOidString(n)
                    : this.setValueName(n)
                : void 0 !== n.oid
                  ? this.setValueOidString(n.oid)
                  : void 0 !== n.hex
                    ? this.setValueHex(n.hex)
                    : void 0 !== n.name && this.setValueName(n.name));
    };
    f.lang.extend(t.asn1.DERObjectIdentifier, t.asn1.ASN1Object);
    t.asn1.DEREnumerated = function (n) {
        t.asn1.DEREnumerated.superclass.constructor.call(this);
        this.hT = "0a";
        this.setByBigInteger = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = t.asn1.ASN1Util.bigIntToMinTwosComplementsHex(n);
        };
        this.setByInteger = function (n) {
            var t = new i(String(n), 10);
            this.setByBigInteger(t);
        };
        this.setValueHex = function (n) {
            this.hV = n;
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
        void 0 !== n &&
            (void 0 !== n.int
                ? this.setByInteger(n.int)
                : "number" == typeof n
                  ? this.setByInteger(n)
                  : void 0 !== n.hex && this.setValueHex(n.hex));
    };
    f.lang.extend(t.asn1.DEREnumerated, t.asn1.ASN1Object);
    t.asn1.DERUTF8String = function (n) {
        t.asn1.DERUTF8String.superclass.constructor.call(this, n);
        this.hT = "0c";
    };
    f.lang.extend(t.asn1.DERUTF8String, t.asn1.DERAbstractString);
    t.asn1.DERNumericString = function (n) {
        t.asn1.DERNumericString.superclass.constructor.call(this, n);
        this.hT = "12";
    };
    f.lang.extend(t.asn1.DERNumericString, t.asn1.DERAbstractString);
    t.asn1.DERPrintableString = function (n) {
        t.asn1.DERPrintableString.superclass.constructor.call(this, n);
        this.hT = "13";
    };
    f.lang.extend(t.asn1.DERPrintableString, t.asn1.DERAbstractString);
    t.asn1.DERTeletexString = function (n) {
        t.asn1.DERTeletexString.superclass.constructor.call(this, n);
        this.hT = "14";
    };
    f.lang.extend(t.asn1.DERTeletexString, t.asn1.DERAbstractString);
    t.asn1.DERIA5String = function (n) {
        t.asn1.DERIA5String.superclass.constructor.call(this, n);
        this.hT = "16";
    };
    f.lang.extend(t.asn1.DERIA5String, t.asn1.DERAbstractString);
    t.asn1.DERUTCTime = function (n) {
        t.asn1.DERUTCTime.superclass.constructor.call(this, n);
        this.hT = "17";
        this.setByDate = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = n;
            this.s = this.formatDate(this.date, "utc");
            this.hV = stohex(this.s);
        };
        this.getFreshValueHex = function () {
            return (
                void 0 === this.date &&
                    void 0 === this.s &&
                    ((this.date = new Date()),
                    (this.s = this.formatDate(this.date, "utc")),
                    (this.hV = stohex(this.s))),
                this.hV
            );
        };
        void 0 !== n &&
            (void 0 !== n.str
                ? this.setString(n.str)
                : "string" == typeof n && n.match(/^[0-9]{12}Z$/)
                  ? this.setString(n)
                  : void 0 !== n.hex
                    ? this.setStringHex(n.hex)
                    : void 0 !== n.date && this.setByDate(n.date));
    };
    f.lang.extend(t.asn1.DERUTCTime, t.asn1.DERAbstractTime);
    t.asn1.DERGeneralizedTime = function (n) {
        t.asn1.DERGeneralizedTime.superclass.constructor.call(this, n);
        this.hT = "18";
        this.withMillis = !1;
        this.setByDate = function (n) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = n;
            this.s = this.formatDate(this.date, "gen", this.withMillis);
            this.hV = stohex(this.s);
        };
        this.getFreshValueHex = function () {
            return (
                void 0 === this.date &&
                    void 0 === this.s &&
                    ((this.date = new Date()),
                    (this.s = this.formatDate(this.date, "gen", this.withMillis)),
                    (this.hV = stohex(this.s))),
                this.hV
            );
        };
        void 0 !== n &&
            (void 0 !== n.str
                ? this.setString(n.str)
                : "string" == typeof n && n.match(/^[0-9]{14}Z$/)
                  ? this.setString(n)
                  : void 0 !== n.hex
                    ? this.setStringHex(n.hex)
                    : void 0 !== n.date && this.setByDate(n.date),
            !0 === n.millis && (this.withMillis = !0));
    };
    f.lang.extend(t.asn1.DERGeneralizedTime, t.asn1.DERAbstractTime);
    t.asn1.DERSequence = function (n) {
        t.asn1.DERSequence.superclass.constructor.call(this, n);
        this.hT = "30";
        this.getFreshValueHex = function () {
            for (var t = "", n = 0; n < this.asn1Array.length; n++) t += this.asn1Array[n].getEncodedHex();
            return (this.hV = t), this.hV;
        };
    };
    f.lang.extend(t.asn1.DERSequence, t.asn1.DERAbstractStructured);
    t.asn1.DERSet = function (n) {
        t.asn1.DERSet.superclass.constructor.call(this, n);
        this.hT = "31";
        this.sortFlag = !0;
        this.getFreshValueHex = function () {
            for (var i, n = [], t = 0; t < this.asn1Array.length; t++)
                (i = this.asn1Array[t]), n.push(i.getEncodedHex());
            return 1 == this.sortFlag && n.sort(), (this.hV = n.join("")), this.hV;
        };
        void 0 !== n && void 0 !== n.sortflag && 0 == n.sortflag && (this.sortFlag = !1);
    };
    f.lang.extend(t.asn1.DERSet, t.asn1.DERAbstractStructured);
    t.asn1.DERTaggedObject = function (n) {
        t.asn1.DERTaggedObject.superclass.constructor.call(this);
        this.hT = "a0";
        this.hV = "";
        this.isExplicit = !0;
        this.asn1Object = null;
        this.setASN1Object = function (n, t, i) {
            this.hT = t;
            this.isExplicit = n;
            this.asn1Object = i;
            this.isExplicit
                ? ((this.hV = this.asn1Object.getEncodedHex()), (this.hTLV = null), (this.isModified = !0))
                : ((this.hV = null),
                  (this.hTLV = i.getEncodedHex()),
                  (this.hTLV = this.hTLV.replace(/^../, t)),
                  (this.isModified = !1));
        };
        this.getFreshValueHex = function () {
            return this.hV;
        };
        void 0 !== n &&
            (void 0 !== n.tag && (this.hT = n.tag),
            void 0 !== n.explicit && (this.isExplicit = n.explicit),
            void 0 !== n.obj &&
                ((this.asn1Object = n.obj), this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
    };
    f.lang.extend(t.asn1.DERTaggedObject, t.asn1.ASN1Object);
    lt = (function (n) {
        function i(t) {
            var r = n.call(this) || this;
            return (
                t &&
                    ("string" == typeof t
                        ? r.parseKey(t)
                        : (i.hasPrivateKeyProperty(t) || i.hasPublicKeyProperty(t)) && r.parsePropertiesFrom(t)),
                r
            );
        }
        return (
            (function (n, t) {
                function i() {
                    this.constructor = n;
                }
                wt(n, t);
                n.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i());
            })(i, n),
            (i.prototype.parseKey = function (n) {
                var e, o, s, h, c, l, f;
                try {
                    var i = 0,
                        r = 0,
                        a = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(n) ? ei(n) : st.unarmor(n),
                        t = hi.decode(a);
                    if ((3 === t.sub.length && (t = t.sub[2].sub[0]), 9 === t.sub.length))
                        (i = t.sub[1].getHexStringValue()),
                            (this.n = u(i, 16)),
                            (r = t.sub[2].getHexStringValue()),
                            (this.e = parseInt(r, 16)),
                            (e = t.sub[3].getHexStringValue()),
                            (this.d = u(e, 16)),
                            (o = t.sub[4].getHexStringValue()),
                            (this.p = u(o, 16)),
                            (s = t.sub[5].getHexStringValue()),
                            (this.q = u(s, 16)),
                            (h = t.sub[6].getHexStringValue()),
                            (this.dmp1 = u(h, 16)),
                            (c = t.sub[7].getHexStringValue()),
                            (this.dmq1 = u(c, 16)),
                            (l = t.sub[8].getHexStringValue()),
                            (this.coeff = u(l, 16));
                    else {
                        if (2 !== t.sub.length) return !1;
                        f = t.sub[1].sub[0];
                        i = f.sub[0].getHexStringValue();
                        this.n = u(i, 16);
                        r = f.sub[1].getHexStringValue();
                        this.e = parseInt(r, 16);
                    }
                    return !0;
                } catch (n) {
                    return !1;
                }
            }),
            (i.prototype.getPrivateBaseKey = function () {
                var n = {
                    array: [
                        new t.asn1.DERInteger({ int: 0 }),
                        new t.asn1.DERInteger({ bigint: this.n }),
                        new t.asn1.DERInteger({ int: this.e }),
                        new t.asn1.DERInteger({ bigint: this.d }),
                        new t.asn1.DERInteger({ bigint: this.p }),
                        new t.asn1.DERInteger({ bigint: this.q }),
                        new t.asn1.DERInteger({ bigint: this.dmp1 }),
                        new t.asn1.DERInteger({ bigint: this.dmq1 }),
                        new t.asn1.DERInteger({ bigint: this.coeff }),
                    ],
                };
                return new t.asn1.DERSequence(n).getEncodedHex();
            }),
            (i.prototype.getPrivateBaseKeyB64 = function () {
                return rt(this.getPrivateBaseKey());
            }),
            (i.prototype.getPublicBaseKey = function () {
                var n = new t.asn1.DERSequence({
                        array: [new t.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }), new t.asn1.DERNull()],
                    }),
                    i = new t.asn1.DERSequence({
                        array: [new t.asn1.DERInteger({ bigint: this.n }), new t.asn1.DERInteger({ int: this.e })],
                    }),
                    r = new t.asn1.DERBitString({ hex: "00" + i.getEncodedHex() });
                return new t.asn1.DERSequence({ array: [n, r] }).getEncodedHex();
            }),
            (i.prototype.getPublicBaseKeyB64 = function () {
                return rt(this.getPublicBaseKey());
            }),
            (i.wordwrap = function (n, t) {
                if (!n) return n;
                var i = "(.{1," + (t = t || 64) + "})( +|$\n?)|(.{1," + t + "})";
                return n.match(RegExp(i, "g")).join("\n");
            }),
            (i.prototype.getPrivateKey = function () {
                var n = "-----BEGIN RSA PRIVATE KEY-----\n";
                return (n += i.wordwrap(this.getPrivateBaseKeyB64()) + "\n"), n + "-----END RSA PRIVATE KEY-----";
            }),
            (i.prototype.getPublicKey = function () {
                var n = "-----BEGIN PUBLIC KEY-----\n";
                return (n += i.wordwrap(this.getPublicBaseKeyB64()) + "\n"), n + "-----END PUBLIC KEY-----";
            }),
            (i.hasPublicKeyProperty = function (n) {
                return (n = n || {}).hasOwnProperty("n") && n.hasOwnProperty("e");
            }),
            (i.hasPrivateKeyProperty = function (n) {
                return (
                    (n = n || {}).hasOwnProperty("n") &&
                    n.hasOwnProperty("e") &&
                    n.hasOwnProperty("d") &&
                    n.hasOwnProperty("p") &&
                    n.hasOwnProperty("q") &&
                    n.hasOwnProperty("dmp1") &&
                    n.hasOwnProperty("dmq1") &&
                    n.hasOwnProperty("coeff")
                );
            }),
            (i.prototype.parsePropertiesFrom = function (n) {
                this.n = n.n;
                this.e = n.e;
                n.hasOwnProperty("d") &&
                    ((this.d = n.d),
                    (this.p = n.p),
                    (this.q = n.q),
                    (this.dmp1 = n.dmp1),
                    (this.dmq1 = n.dmq1),
                    (this.coeff = n.coeff));
            }),
            i
        );
    })(pi);
    at = (function () {
        function n(n) {
            n = n || {};
            this.default_key_size = parseInt(n.default_key_size, 10) || 1024;
            this.default_public_exponent = n.default_public_exponent || "010001";
            this.log = n.log || !1;
            this.key = null;
        }
        return (
            (n.prototype.setKey = function (n) {
                this.log && this.key && console.warn("A key was already set, overriding existing.");
                this.key = new lt(n);
            }),
            (n.prototype.setPrivateKey = function (n) {
                this.setKey(n);
            }),
            (n.prototype.setPublicKey = function (n) {
                this.setKey(n);
            }),
            (n.prototype.decrypt = function (n) {
                try {
                    return this.getKey().decrypt(pt(n));
                } catch (n) {
                    return !1;
                }
            }),
            (n.prototype.encrypt = function (n) {
                try {
                    return rt(this.getKey().encrypt(n));
                } catch (n) {
                    return !1;
                }
            }),
            (n.prototype.sign = function (n, t, i) {
                try {
                    return rt(this.getKey().sign(n, t, i));
                } catch (n) {
                    return !1;
                }
            }),
            (n.prototype.verify = function (n, t, i) {
                try {
                    return this.getKey().verify(n, pt(t), i);
                } catch (n) {
                    return !1;
                }
            }),
            (n.prototype.getKey = function (n) {
                if (!this.key) {
                    if (((this.key = new lt()), n && "[object Function]" === {}.toString.call(n)))
                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, n);
                    this.key.generate(this.default_key_size, this.default_public_exponent);
                }
                return this.key;
            }),
            (n.prototype.getPrivateKey = function () {
                return this.getKey().getPrivateKey();
            }),
            (n.prototype.getPrivateKeyB64 = function () {
                return this.getKey().getPrivateBaseKeyB64();
            }),
            (n.prototype.getPublicKey = function () {
                return this.getKey().getPublicKey();
            }),
            (n.prototype.getPublicKeyB64 = function () {
                return this.getKey().getPublicBaseKeyB64();
            }),
            (n.version = "3.0.0-rc.1"),
            n
        );
    })();
    window.JSEncrypt = at;
    n.JSEncrypt = at;
});
(EMTradeEncrypt = {}),
    (function (n) {
        var t = new JSEncrypt();
        t.setPublicKey(
            "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHdsyxT66pDG4p73yope7jxA92\nc0AT4qIJ/xtbBcHkFPK77upnsfDTJiVEuQDH+MiMeb+XhCLNKZGp0yaUU6GlxZdp\n+nLW8b7Kmijr3iepaDhcbVTsYBWchaWUXauj9Lrhz58/6AE/NF0aMolxIGpsi+ST\n2hSHPu3GSXMdhPCkWQIDAQAB\n-----END PUBLIC KEY-----"
        );
        n.encrypt = function (n) {
            return t.encrypt(n);
        };
    })(EMTradeEncrypt),
    function () {
        function nt(t) {
            function r(n, i, r, u, f, e) {
                for (; f >= 0 && e > f; f += t) {
                    var o = u ? u[f] : f;
                    r = i(r, n[o], o, n);
                }
                return r;
            }
            return function (u, f, o, s) {
                f = e(f, s, 4);
                var h = !i(u) && n.keys(u),
                    l = (h || u).length,
                    c = t > 0 ? 0 : l - 1;
                return arguments.length < 3 && ((o = u[h ? h[c] : c]), (c += t)), r(u, f, o, h, c, l);
            };
        }
        function tt(n) {
            return function (i, r, f) {
                r = t(r, f);
                for (var o = u(i), e = n > 0 ? 0 : o - 1; e >= 0 && o > e; e += n) if (r(i[e], e, i)) return e;
                return -1;
            };
        }
        function it(t, i, f) {
            return function (e, o, s) {
                var c = 0,
                    h = u(e);
                if ("number" == typeof s)
                    t > 0 ? (c = s >= 0 ? s : Math.max(s + h, c)) : (h = s >= 0 ? Math.min(s + 1, h) : s + h + 1);
                else if (f && s && h) return (s = f(e, o)), e[s] === o ? s : -1;
                if (o !== o) return (s = i(r.call(e, c, h), n.isNaN)), s >= 0 ? s + c : -1;
                for (s = t > 0 ? c : h - 1; s >= 0 && h > s; s += t) if (e[s] === o) return s;
                return -1;
            };
        }
        function rt(t, i) {
            var u = d.length,
                f = t.constructor,
                e = (n.isFunction(f) && f.prototype) || v,
                r = "constructor";
            for (n.has(t, r) && !n.contains(i, r) && i.push(r); u--; )
                (r = d[u]), r in t && t[r] !== e[r] && !n.contains(i, r) && i.push(r);
        }
        var a = this,
            lt = a._,
            s = Array.prototype,
            v = Object.prototype,
            at = Function.prototype,
            vt = s.push,
            r = s.slice,
            o = v.toString,
            yt = v.hasOwnProperty,
            pt = Array.isArray,
            ut = Object.keys,
            y = at.bind,
            ft = Object.create,
            p = function () {},
            n = function (t) {
                return t instanceof n ? t : this instanceof n ? void (this._wrapped = t) : new n(t);
            },
            e,
            t,
            h,
            f,
            b,
            k,
            d,
            c,
            ct,
            l;
        "undefined" != typeof exports
            ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), (exports._ = n))
            : (a._ = n);
        n.VERSION = "1.8.3";
        e = function (n, t, i) {
            if (t === void 0) return n;
            switch (null == i ? 3 : i) {
                case 1:
                    return function (i) {
                        return n.call(t, i);
                    };
                case 2:
                    return function (i, r) {
                        return n.call(t, i, r);
                    };
                case 3:
                    return function (i, r, u) {
                        return n.call(t, i, r, u);
                    };
                case 4:
                    return function (i, r, u, f) {
                        return n.call(t, i, r, u, f);
                    };
            }
            return function () {
                return n.apply(t, arguments);
            };
        };
        t = function (t, i, r) {
            return null == t ? n.identity : n.isFunction(t) ? e(t, i, r) : n.isObject(t) ? n.matcher(t) : n.property(t);
        };
        n.iteratee = function (n, i) {
            return t(n, i, 1 / 0);
        };
        var w = function (n, t) {
                return function (i) {
                    var e = arguments.length,
                        r,
                        u;
                    if (2 > e || null == i) return i;
                    for (r = 1; e > r; r++)
                        for (var o = arguments[r], s = n(o), h = s.length, f = 0; h > f; f++)
                            (u = s[f]), (t && i[u] !== void 0) || (i[u] = o[u]);
                    return i;
                };
            },
            et = function (t) {
                if (!n.isObject(t)) return {};
                if (ft) return ft(t);
                p.prototype = t;
                var i = new p();
                return (p.prototype = null), i;
            },
            ot = function (n) {
                return function (t) {
                    if (null != t) return t[n];
                };
            },
            wt = Math.pow(2, 53) - 1,
            u = ot("length"),
            i = function (n) {
                var t = u(n);
                return "number" == typeof t && t >= 0 && wt >= t;
            };
        n.each = n.forEach = function (t, r, u) {
            var f, o, s;
            if (((r = e(r, u)), i(t))) for (f = 0, o = t.length; o > f; f++) r(t[f], f, t);
            else for (s = n.keys(t), f = 0, o = s.length; o > f; f++) r(t[s[f]], s[f], t);
            return t;
        };
        n.map = n.collect = function (r, u, f) {
            var s;
            u = t(u, f);
            for (var o = !i(r) && n.keys(r), h = (o || r).length, c = Array(h), e = 0; h > e; e++)
                (s = o ? o[e] : e), (c[e] = u(r[s], s, r));
            return c;
        };
        n.reduce = n.foldl = n.inject = nt(1);
        n.reduceRight = n.foldr = nt(-1);
        n.find = n.detect = function (t, r, u) {
            var f;
            return (f = i(t) ? n.findIndex(t, r, u) : n.findKey(t, r, u)), f !== void 0 && f !== -1 ? t[f] : void 0;
        };
        n.filter = n.select = function (i, r, u) {
            var f = [];
            return (
                (r = t(r, u)),
                n.each(i, function (n, t, i) {
                    r(n, t, i) && f.push(n);
                }),
                f
            );
        };
        n.reject = function (i, r, u) {
            return n.filter(i, n.negate(t(r)), u);
        };
        n.every = n.all = function (r, u, f) {
            var s;
            u = t(u, f);
            for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++)
                if (((s = o ? o[e] : e), !u(r[s], s, r))) return !1;
            return !0;
        };
        n.some = n.any = function (r, u, f) {
            var s;
            u = t(u, f);
            for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++)
                if (((s = o ? o[e] : e), u(r[s], s, r))) return !0;
            return !1;
        };
        n.contains =
            n.includes =
            n.include =
                function (t, r, u, f) {
                    return i(t) || (t = n.values(t)), ("number" != typeof u || f) && (u = 0), n.indexOf(t, r, u) >= 0;
                };
        n.invoke = function (t, i) {
            var u = r.call(arguments, 2),
                f = n.isFunction(i);
            return n.map(t, function (n) {
                var t = f ? i : n[i];
                return null == t ? t : t.apply(n, u);
            });
        };
        n.pluck = function (t, i) {
            return n.map(t, n.property(i));
        };
        n.where = function (t, i) {
            return n.filter(t, n.matcher(i));
        };
        n.findWhere = function (t, i) {
            return n.find(t, n.matcher(i));
        };
        n.max = function (r, u, f) {
            var h,
                o,
                e = -1 / 0,
                c = -1 / 0,
                s,
                l;
            if (null == u && null != r)
                for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++) (h = r[s]), h > e && (e = h);
            else
                (u = t(u, f)),
                    n.each(r, function (n, t, i) {
                        o = u(n, t, i);
                        (o > c || (o === -1 / 0 && e === -1 / 0)) && ((e = n), (c = o));
                    });
            return e;
        };
        n.min = function (r, u, f) {
            var h,
                o,
                e = 1 / 0,
                c = 1 / 0,
                s,
                l;
            if (null == u && null != r)
                for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++) (h = r[s]), e > h && (e = h);
            else
                (u = t(u, f)),
                    n.each(r, function (n, t, i) {
                        o = u(n, t, i);
                        (c > o || (1 / 0 === o && 1 / 0 === e)) && ((e = n), (c = o));
                    });
            return e;
        };
        n.shuffle = function (t) {
            for (var u, e = i(t) ? t : n.values(t), o = e.length, f = Array(o), r = 0; o > r; r++)
                (u = n.random(0, r)), u !== r && (f[r] = f[u]), (f[u] = e[r]);
            return f;
        };
        n.sample = function (t, r, u) {
            return null == r || u
                ? (i(t) || (t = n.values(t)), t[n.random(t.length - 1)])
                : n.shuffle(t).slice(0, Math.max(0, r));
        };
        n.sortBy = function (i, r, u) {
            return (
                (r = t(r, u)),
                n.pluck(
                    n
                        .map(i, function (n, t, i) {
                            return { value: n, index: t, criteria: r(n, t, i) };
                        })
                        .sort(function (n, t) {
                            var i = n.criteria,
                                r = t.criteria;
                            if (i !== r) {
                                if (i > r || i === void 0) return 1;
                                if (r > i || r === void 0) return -1;
                            }
                            return n.index - t.index;
                        }),
                    "value"
                )
            );
        };
        h = function (i) {
            return function (r, u, f) {
                var e = {};
                return (
                    (u = t(u, f)),
                    n.each(r, function (n, t) {
                        var f = u(n, t, r);
                        i(e, n, f);
                    }),
                    e
                );
            };
        };
        n.groupBy = h(function (t, i, r) {
            n.has(t, r) ? t[r].push(i) : (t[r] = [i]);
        });
        n.indexBy = h(function (n, t, i) {
            n[i] = t;
        });
        n.countBy = h(function (t, i, r) {
            n.has(t, r) ? t[r]++ : (t[r] = 1);
        });
        n.toArray = function (t) {
            return t ? (n.isArray(t) ? r.call(t) : i(t) ? n.map(t, n.identity) : n.values(t)) : [];
        };
        n.size = function (t) {
            return null == t ? 0 : i(t) ? t.length : n.keys(t).length;
        };
        n.partition = function (i, r, u) {
            r = t(r, u);
            var f = [],
                e = [];
            return (
                n.each(i, function (n, t, i) {
                    (r(n, t, i) ? f : e).push(n);
                }),
                [f, e]
            );
        };
        n.first =
            n.head =
            n.take =
                function (t, i, r) {
                    if (null != t) return null == i || r ? t[0] : n.initial(t, t.length - i);
                };
        n.initial = function (n, t, i) {
            return r.call(n, 0, Math.max(0, n.length - (null == t || i ? 1 : t)));
        };
        n.last = function (t, i, r) {
            if (null != t) return null == i || r ? t[t.length - 1] : n.rest(t, Math.max(0, t.length - i));
        };
        n.rest =
            n.tail =
            n.drop =
                function (n, t, i) {
                    return r.call(n, null == t || i ? 1 : t);
                };
        n.compact = function (t) {
            return n.filter(t, n.identity);
        };
        f = function (t, r, e, o) {
            for (var s, l, a, h = [], v = 0, c = o || 0, y = u(t); y > c; c++)
                if (((s = t[c]), i(s) && (n.isArray(s) || n.isArguments(s))))
                    for (r || (s = f(s, r, e)), l = 0, a = s.length, h.length += a; a > l; ) h[v++] = s[l++];
                else e || (h[v++] = s);
            return h;
        };
        n.flatten = function (n, t) {
            return f(n, t, !1);
        };
        n.without = function (t) {
            return n.difference(t, r.call(arguments, 1));
        };
        n.uniq = n.unique = function (i, r, f, e) {
            var o, c;
            n.isBoolean(r) || ((e = f), (f = r), (r = !1));
            null != f && (f = t(f, e));
            for (var s = [], l = [], h = 0, a = u(i); a > h; h++)
                (o = i[h]),
                    (c = f ? f(o, h, i) : o),
                    r
                        ? ((h && l === c) || s.push(o), (l = c))
                        : f
                          ? n.contains(l, c) || (l.push(c), s.push(o))
                          : n.contains(s, o) || s.push(o);
            return s;
        };
        n.union = function () {
            return n.uniq(f(arguments, !0, !0));
        };
        n.intersection = function (t) {
            for (var r, i, f = [], o = arguments.length, e = 0, s = u(t); s > e; e++)
                if (((r = t[e]), !n.contains(f, r))) {
                    for (i = 1; o > i && n.contains(arguments[i], r); i++);
                    i === o && f.push(r);
                }
            return f;
        };
        n.difference = function (t) {
            var i = f(arguments, !0, !0, 1);
            return n.filter(t, function (t) {
                return !n.contains(i, t);
            });
        };
        n.zip = function () {
            return n.unzip(arguments);
        };
        n.unzip = function (t) {
            for (var r = (t && n.max(t, u).length) || 0, f = Array(r), i = 0; r > i; i++) f[i] = n.pluck(t, i);
            return f;
        };
        n.object = function (n, t) {
            for (var r = {}, i = 0, f = u(n); f > i; i++) t ? (r[n[i]] = t[i]) : (r[n[i][0]] = n[i][1]);
            return r;
        };
        n.findIndex = tt(1);
        n.findLastIndex = tt(-1);
        n.sortedIndex = function (n, i, r, f) {
            var o;
            r = t(r, f, 1);
            for (var h = r(i), e = 0, s = u(n); s > e; )
                (o = Math.floor((e + s) / 2)), r(n[o]) < h ? (e = o + 1) : (s = o);
            return e;
        };
        n.indexOf = it(1, n.findIndex, n.sortedIndex);
        n.lastIndexOf = it(-1, n.findLastIndex);
        n.range = function (n, t, i) {
            null == t && ((t = n || 0), (n = 0));
            i = i || 1;
            for (var u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; u > r; r++, n += i) f[r] = n;
            return f;
        };
        b = function (t, i, r, u, f) {
            if (!(u instanceof i)) return t.apply(r, f);
            var e = et(t.prototype),
                o = t.apply(e, f);
            return n.isObject(o) ? o : e;
        };
        n.bind = function (t, i) {
            if (y && t.bind === y) return y.apply(t, r.call(arguments, 1));
            if (!n.isFunction(t)) throw new TypeError("Bind must be called on a function");
            var f = r.call(arguments, 2),
                u = function () {
                    return b(t, u, i, this, f.concat(r.call(arguments)));
                };
            return u;
        };
        n.partial = function (t) {
            var i = r.call(arguments, 1),
                u = function () {
                    for (var f = 0, o = i.length, e = Array(o), r = 0; o > r; r++)
                        e[r] = i[r] === n ? arguments[f++] : i[r];
                    for (; f < arguments.length; ) e.push(arguments[f++]);
                    return b(t, u, this, this, e);
                };
            return u;
        };
        n.bindAll = function (t) {
            var i,
                r,
                u = arguments.length;
            if (1 >= u) throw new Error("bindAll must be passed function names");
            for (i = 1; u > i; i++) (r = arguments[i]), (t[r] = n.bind(t[r], t));
            return t;
        };
        n.memoize = function (t, i) {
            var r = function (u) {
                var f = r.cache,
                    e = "" + (i ? i.apply(this, arguments) : u);
                return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e];
            };
            return (r.cache = {}), r;
        };
        n.delay = function (n, t) {
            var i = r.call(arguments, 2);
            return setTimeout(function () {
                return n.apply(null, i);
            }, t);
        };
        n.defer = n.partial(n.delay, n, 1);
        n.throttle = function (t, i, r) {
            var f,
                e,
                s,
                u = null,
                o = 0,
                h;
            return (
                r || (r = {}),
                (h = function () {
                    o = r.leading === !1 ? 0 : n.now();
                    u = null;
                    s = t.apply(f, e);
                    u || (f = e = null);
                }),
                function () {
                    var l = n.now(),
                        c;
                    return (
                        o || r.leading !== !1 || (o = l),
                        (c = i - (l - o)),
                        (f = this),
                        (e = arguments),
                        0 >= c || c > i
                            ? (u && (clearTimeout(u), (u = null)), (o = l), (s = t.apply(f, e)), u || (f = e = null))
                            : u || r.trailing === !1 || (u = setTimeout(h, c)),
                        s
                    );
                }
            );
        };
        n.debounce = function (t, i, r) {
            var u,
                f,
                e,
                s,
                o,
                h = function () {
                    var c = n.now() - s;
                    i > c && c >= 0
                        ? (u = setTimeout(h, i - c))
                        : ((u = null), r || ((o = t.apply(e, f)), u || (e = f = null)));
                };
            return function () {
                e = this;
                f = arguments;
                s = n.now();
                var c = r && !u;
                return u || (u = setTimeout(h, i)), c && ((o = t.apply(e, f)), (e = f = null)), o;
            };
        };
        n.wrap = function (t, i) {
            return n.partial(i, t);
        };
        n.negate = function (n) {
            return function () {
                return !n.apply(this, arguments);
            };
        };
        n.compose = function () {
            var n = arguments,
                t = n.length - 1;
            return function () {
                for (var r = t, i = n[t].apply(this, arguments); r--; ) i = n[r].call(this, i);
                return i;
            };
        };
        n.after = function (n, t) {
            return function () {
                if (--n < 1) return t.apply(this, arguments);
            };
        };
        n.before = function (n, t) {
            var i;
            return function () {
                return --n > 0 && (i = t.apply(this, arguments)), 1 >= n && (t = null), i;
            };
        };
        n.once = n.partial(n.before, 2);
        k = !{ toString: null }.propertyIsEnumerable("toString");
        d = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        n.keys = function (t) {
            var i, r;
            if (!n.isObject(t)) return [];
            if (ut) return ut(t);
            i = [];
            for (r in t) n.has(t, r) && i.push(r);
            return k && rt(t, i), i;
        };
        n.allKeys = function (t) {
            var i, r;
            if (!n.isObject(t)) return [];
            i = [];
            for (r in t) i.push(r);
            return k && rt(t, i), i;
        };
        n.values = function (t) {
            for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = t[r[i]];
            return f;
        };
        n.mapObject = function (i, r, u) {
            r = t(r, u);
            for (var f, o = n.keys(i), h = o.length, s = {}, e = 0; h > e; e++) (f = o[e]), (s[f] = r(i[f], f, i));
            return s;
        };
        n.pairs = function (t) {
            for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++) f[i] = [r[i], t[r[i]]];
            return f;
        };
        n.invert = function (t) {
            for (var u = {}, r = n.keys(t), i = 0, f = r.length; f > i; i++) u[t[r[i]]] = r[i];
            return u;
        };
        n.functions = n.methods = function (t) {
            var r = [],
                i;
            for (i in t) n.isFunction(t[i]) && r.push(i);
            return r.sort();
        };
        n.extend = w(n.allKeys);
        n.extendOwn = n.assign = w(n.keys);
        n.findKey = function (i, r, u) {
            r = t(r, u);
            for (var f, o = n.keys(i), e = 0, s = o.length; s > e; e++) if (((f = o[e]), r(i[f], f, i))) return f;
        };
        n.pick = function (t, i, r) {
            var c,
                o,
                l = {},
                u = t,
                s,
                v,
                h,
                a;
            if (null == u) return l;
            for (
                n.isFunction(i)
                    ? ((o = n.allKeys(u)), (c = e(i, r)))
                    : ((o = f(arguments, !1, !1, 1)),
                      (c = function (n, t, i) {
                          return (t in i);
                      }),
                      (u = Object(u))),
                    s = 0,
                    v = o.length;
                v > s;
                s++
            )
                (h = o[s]), (a = u[h]), c(a, h, u) && (l[h] = a);
            return l;
        };
        n.omit = function (t, i, r) {
            if (n.isFunction(i)) i = n.negate(i);
            else {
                var u = n.map(f(arguments, !1, !1, 1), String);
                i = function (t, i) {
                    return !n.contains(u, i);
                };
            }
            return n.pick(t, i, r);
        };
        n.defaults = w(n.allKeys, !0);
        n.create = function (t, i) {
            var r = et(t);
            return i && n.extendOwn(r, i), r;
        };
        n.clone = function (t) {
            return n.isObject(t) ? (n.isArray(t) ? t.slice() : n.extend({}, t)) : t;
        };
        n.tap = function (n, t) {
            return t(n), n;
        };
        n.isMatch = function (t, i) {
            var e = n.keys(i),
                o = e.length,
                f,
                r,
                u;
            if (null == t) return !o;
            for (f = Object(t), r = 0; o > r; r++) if (((u = e[r]), i[u] !== f[u] || !(u in f))) return !1;
            return !0;
        };
        c = function (t, i, r, u) {
            var h, a, e, s, f, l, v;
            if (t === i) return 0 !== t || 1 / t == 1 / i;
            if (null == t || null == i) return t === i;
            if (
                (t instanceof n && (t = t._wrapped),
                i instanceof n && (i = i._wrapped),
                (h = o.call(t)),
                h !== o.call(i))
            )
                return !1;
            switch (h) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + t == "" + i;
                case "[object Number]":
                    return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +i;
            }
            if (
                ((a = "[object Array]" === h),
                !a &&
                    ("object" != typeof t ||
                        "object" != typeof i ||
                        ((e = t.constructor),
                        (s = i.constructor),
                        e !== s &&
                            !(n.isFunction(e) && e instanceof e && n.isFunction(s) && s instanceof s) &&
                            "constructor" in t &&
                            "constructor" in i)))
            )
                return !1;
            for (r = r || [], u = u || [], f = r.length; f--; ) if (r[f] === t) return u[f] === i;
            if ((r.push(t), u.push(i), a)) {
                if (((f = t.length), f !== i.length)) return !1;
                for (; f--; ) if (!c(t[f], i[f], r, u)) return !1;
            } else {
                if (((v = n.keys(t)), (f = v.length), n.keys(i).length !== f)) return !1;
                for (; f--; ) if (((l = v[f]), !n.has(i, l) || !c(t[l], i[l], r, u))) return !1;
            }
            return r.pop(), u.pop(), !0;
        };
        n.isEqual = function (n, t) {
            return c(n, t);
        };
        n.isEmpty = function (t) {
            return null == t
                ? !0
                : i(t) && (n.isArray(t) || n.isString(t) || n.isArguments(t))
                  ? 0 === t.length
                  : 0 === n.keys(t).length;
        };
        n.isElement = function (n) {
            return !(!n || 1 !== n.nodeType);
        };
        n.isArray =
            pt ||
            function (n) {
                return "[object Array]" === o.call(n);
            };
        n.isObject = function (n) {
            var t = typeof n;
            return "function" === t || ("object" === t && !!n);
        };
        n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
            n["is" + t] = function (n) {
                return o.call(n) === "[object " + t + "]";
            };
        });
        n.isArguments(arguments) ||
            (n.isArguments = function (t) {
                return n.has(t, "callee");
            });
        "function" != typeof /./ &&
            "object" != typeof Int8Array &&
            (n.isFunction = function (n) {
                return "function" == typeof n || !1;
            });
        n.isFinite = function (n) {
            return isFinite(n) && !isNaN(parseFloat(n));
        };
        n.isNaN = function (t) {
            return n.isNumber(t) && t !== +t;
        };
        n.isBoolean = function (n) {
            return n === !0 || n === !1 || "[object Boolean]" === o.call(n);
        };
        n.isNull = function (n) {
            return null === n;
        };
        n.isUndefined = function (n) {
            return n === void 0;
        };
        n.has = function (n, t) {
            return null != n && yt.call(n, t);
        };
        n.noConflict = function () {
            return (a._ = lt), this;
        };
        n.identity = function (n) {
            return n;
        };
        n.constant = function (n) {
            return function () {
                return n;
            };
        };
        n.noop = function () {};
        n.property = ot;
        n.propertyOf = function (n) {
            return null == n
                ? function () {}
                : function (t) {
                      return n[t];
                  };
        };
        n.matcher = n.matches = function (t) {
            return (
                (t = n.extendOwn({}, t)),
                function (i) {
                    return n.isMatch(i, t);
                }
            );
        };
        n.times = function (n, t, i) {
            var u = Array(Math.max(0, n)),
                r;
            for (t = e(t, i, 1), r = 0; n > r; r++) u[r] = t(r);
            return u;
        };
        n.random = function (n, t) {
            return null == t && ((t = n), (n = 0)), n + Math.floor(Math.random() * (t - n + 1));
        };
        n.now =
            Date.now ||
            function () {
                return new Date().getTime();
            };
        var st = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            bt = n.invert(st),
            ht = function (t) {
                var r = function (n) {
                        return t[n];
                    },
                    i = "(?:" + n.keys(t).join("|") + ")",
                    u = RegExp(i),
                    f = RegExp(i, "g");
                return function (n) {
                    return (n = null == n ? "" : "" + n), u.test(n) ? n.replace(f, r) : n;
                };
            };
        n.escape = ht(st);
        n.unescape = ht(bt);
        n.result = function (t, i, r) {
            var u = null == t ? void 0 : t[i];
            return u === void 0 && (u = r), n.isFunction(u) ? u.call(t) : u;
        };
        ct = 0;
        n.uniqueId = function (n) {
            var t = ++ct + "";
            return n ? n + t : t;
        };
        n.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
        };
        var g = /(.)^/,
            kt = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            dt = /\\|'|\r|\n|\u2028|\u2029/g,
            gt = function (n) {
                return "\\" + kt[n];
            };
        n.template = function (t, i, r) {
            var o, f, h;
            !i && r && (i = r);
            i = n.defaults({}, i, n.templateSettings);
            var c = RegExp(
                    [(i.escape || g).source, (i.interpolate || g).source, (i.evaluate || g).source].join("|") + "|$",
                    "g"
                ),
                e = 0,
                u = "__p+='";
            t.replace(c, function (n, i, r, f, o) {
                return (
                    (u += t.slice(e, o).replace(dt, gt)),
                    (e = o + n.length),
                    i
                        ? (u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'")
                        : r
                          ? (u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                          : f && (u += "';\n" + f + "\n__p+='"),
                    n
                );
            });
            u += "';\n";
            i.variable || (u = "with(obj||{}){\n" + u + "}\n");
            u =
                "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                u +
                "return __p;\n";
            try {
                o = new Function(i.variable || "obj", "_", u);
            } catch (s) {
                throw ((s.source = u), s);
            }
            return (
                (f = function (t) {
                    return o.call(this, t, n);
                }),
                (h = i.variable || "obj"),
                (f.source = "function(" + h + "){\n" + u + "}"),
                f
            );
        };
        n.chain = function (t) {
            var i = n(t);
            return (i._chain = !0), i;
        };
        l = function (t, i) {
            return t._chain ? n(i).chain() : i;
        };
        n.mixin = function (t) {
            n.each(n.functions(t), function (i) {
                var r = (n[i] = t[i]);
                n.prototype[i] = function () {
                    var t = [this._wrapped];
                    return vt.apply(t, arguments), l(this, r.apply(n, t));
                };
            });
        };
        n.mixin(n);
        n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var i = s[t];
            n.prototype[t] = function () {
                var n = this._wrapped;
                return (
                    i.apply(n, arguments),
                    ("shift" !== t && "splice" !== t) || 0 !== n.length || delete n[0],
                    l(this, n)
                );
            };
        });
        n.each(["concat", "join", "slice"], function (t) {
            var i = s[t];
            n.prototype[t] = function () {
                return l(this, i.apply(this._wrapped, arguments));
            };
        });
        n.prototype.value = function () {
            return this._wrapped;
        };
        n.prototype.valueOf = n.prototype.toJSON = n.prototype.value;
        n.prototype.toString = function () {
            return "" + this._wrapped;
        };
        "function" == typeof define &&
            define.amd &&
            define("underscore", [], function () {
                return n;
            });
    }.call(this),
    (function (n, t) {
        typeof exports == "object" && exports && typeof exports.nodeName != "string"
            ? t(exports)
            : typeof define == "function" && define.amd
              ? define(["exports"], t)
              : ((n.Mustache = {}), t(n.Mustache));
    })(this, function (n) {
        function f(n) {
            return typeof n == "function";
        }
        function l(n) {
            return u(n) ? "array" : typeof n;
        }
        function o(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        }
        function s(n, t) {
            return n != null && typeof n == "object" && t in n;
        }
        function v(n, t) {
            return a.call(n, t);
        }
        function p(n) {
            return !v(y, n);
        }
        function b(n) {
            return String(n).replace(/[&<>"'`=\/]/g, function (n) {
                return w[n];
            });
        }
        function tt(t, i) {
            function lt() {
                if (ft && !w) while (y.length) delete a[y.pop()];
                else y = [];
                ft = !1;
                w = !1;
            }
            function ht(n) {
                if ((typeof n == "string" && (n = n.split(d, 2)), !u(n) || n.length !== 2))
                    throw new Error("Invalid tags: " + n);
                et = new RegExp(o(n[0]) + "\\s*");
                v = new RegExp("\\s*" + o(n[1]));
                st = new RegExp("\\s*" + o("}" + n[1]));
            }
            var et, v, st, f, c, e, s, b, ot, l, tt, ct;
            if (!t) return [];
            var ut = [],
                a = [],
                y = [],
                ft = !1,
                w = !1;
            for (ht(i || n.tags), f = new r(t); !f.eos(); ) {
                if (((c = f.pos), (s = f.scanUntil(et)), s))
                    for (tt = 0, ct = s.length; tt < ct; ++tt)
                        (b = s.charAt(tt)),
                            p(b) ? y.push(a.length) : (w = !0),
                            a.push(["text", b, c, c + 1]),
                            (c += 1),
                            b === "\n" && lt();
                if (!f.scan(et)) break;
                if (
                    ((ft = !0),
                    (e = f.scan(nt) || "name"),
                    f.scan(k),
                    e === "="
                        ? ((s = f.scanUntil(h)), f.scan(h), f.scanUntil(v))
                        : e === "{"
                          ? ((s = f.scanUntil(st)), f.scan(g), f.scanUntil(v), (e = "&"))
                          : (s = f.scanUntil(v)),
                    !f.scan(v))
                )
                    throw new Error("Unclosed tag at " + f.pos);
                if (((ot = [e, s, c, f.pos]), a.push(ot), e === "#" || e === "^")) ut.push(ot);
                else if (e === "/") {
                    if (((l = ut.pop()), !l)) throw new Error('Unopened section "' + s + '" at ' + c);
                    if (l[1] !== s) throw new Error('Unclosed section "' + l[1] + '" at ' + c);
                } else e === "name" || e === "{" || e === "&" ? (w = !0) : e === "=" && ht(s);
            }
            if (((l = ut.pop()), l)) throw new Error('Unclosed section "' + l[1] + '" at ' + f.pos);
            return rt(it(a));
        }
        function it(n) {
            for (var u = [], t, i, r = 0, f = n.length; r < f; ++r)
                (t = n[r]),
                    t &&
                        (t[0] === "text" && i && i[0] === "text"
                            ? ((i[1] += t[1]), (i[3] = t[3]))
                            : (u.push(t), (i = t)));
            return u;
        }
        function rt(n) {
            for (var f = [], r = f, i = [], t, e, u = 0, o = n.length; u < o; ++u) {
                t = n[u];
                switch (t[0]) {
                    case "#":
                    case "^":
                        r.push(t);
                        i.push(t);
                        r = t[4] = [];
                        break;
                    case "/":
                        e = i.pop();
                        e[5] = t[2];
                        r = i.length > 0 ? i[i.length - 1][4] : f;
                        break;
                    default:
                        r.push(t);
                }
            }
            return f;
        }
        function r(n) {
            this.string = n;
            this.tail = n;
            this.pos = 0;
        }
        function i(n, t) {
            this.view = n;
            this.cache = { ".": this.view };
            this.parent = t;
        }
        function t() {
            this.cache = {};
        }
        var c = Object.prototype.toString,
            u =
                Array.isArray ||
                function (n) {
                    return c.call(n) === "[object Array]";
                },
            a = RegExp.prototype.test,
            y = /\S/,
            w = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
            },
            k = /\s*/,
            d = /\s+/,
            h = /\s*=/,
            g = /\s*\}/,
            nt = /#|\^|\/|>|\{|&|=|!/,
            e;
        return (
            (r.prototype.eos = function () {
                return this.tail === "";
            }),
            (r.prototype.scan = function (n) {
                var i = this.tail.match(n),
                    t;
                return !i || i.index !== 0
                    ? ""
                    : ((t = i[0]), (this.tail = this.tail.substring(t.length)), (this.pos += t.length), t);
            }),
            (r.prototype.scanUntil = function (n) {
                var i = this.tail.search(n),
                    t;
                switch (i) {
                    case -1:
                        t = this.tail;
                        this.tail = "";
                        break;
                    case 0:
                        t = "";
                        break;
                    default:
                        t = this.tail.substring(0, i);
                        this.tail = this.tail.substring(i);
                }
                return (this.pos += t.length), t;
            }),
            (i.prototype.push = function (n) {
                return new i(n, this);
            }),
            (i.prototype.lookup = function (n) {
                var o = this.cache,
                    t,
                    i,
                    r,
                    u,
                    e;
                if (o.hasOwnProperty(n)) t = o[n];
                else {
                    for (i = this, e = !1; i; ) {
                        if (n.indexOf(".") > 0)
                            for (t = i.view, r = n.split("."), u = 0; t != null && u < r.length; )
                                u === r.length - 1 && (e = s(t, r[u])), (t = t[r[u++]]);
                        else (t = i.view[n]), (e = s(i.view, n));
                        if (e) break;
                        i = i.parent;
                    }
                    o[n] = t;
                }
                return f(t) && (t = t.call(this.view)), t;
            }),
            (t.prototype.clearCache = function () {
                this.cache = {};
            }),
            (t.prototype.parse = function (n, t) {
                var r = this.cache,
                    i = r[n];
                return i == null && (i = r[n] = tt(n, t)), i;
            }),
            (t.prototype.render = function (n, t, r) {
                var u = this.parse(n),
                    f = t instanceof i ? t : new i(t);
                return this.renderTokens(u, f, r, n);
            }),
            (t.prototype.renderTokens = function (n, t, i, r) {
                for (var s = "", f, e, u, o = 0, h = n.length; o < h; ++o)
                    (u = undefined),
                        (f = n[o]),
                        (e = f[0]),
                        e === "#"
                            ? (u = this.renderSection(f, t, i, r))
                            : e === "^"
                              ? (u = this.renderInverted(f, t, i, r))
                              : e === ">"
                                ? (u = this.renderPartial(f, t, i, r))
                                : e === "&"
                                  ? (u = this.unescapedValue(f, t))
                                  : e === "name"
                                    ? (u = this.escapedValue(f, t))
                                    : e === "text" && (u = this.rawValue(f)),
                        u !== undefined && (s += u);
                return s;
            }),
            (t.prototype.renderSection = function (n, t, i, r) {
                function l(n) {
                    return c.render(n, t, i);
                }
                var c = this,
                    o = "",
                    e = t.lookup(n[1]),
                    s,
                    h;
                if (e) {
                    if (u(e)) for (s = 0, h = e.length; s < h; ++s) o += this.renderTokens(n[4], t.push(e[s]), i, r);
                    else if (typeof e == "object" || typeof e == "string" || typeof e == "number")
                        o += this.renderTokens(n[4], t.push(e), i, r);
                    else if (f(e)) {
                        if (typeof r != "string")
                            throw new Error("Cannot use higher-order sections without the original template");
                        e = e.call(t.view, r.slice(n[3], n[5]), l);
                        e != null && (o += e);
                    } else o += this.renderTokens(n[4], t, i, r);
                    return o;
                }
            }),
            (t.prototype.renderInverted = function (n, t, i, r) {
                var f = t.lookup(n[1]);
                if (!f || (u(f) && f.length === 0)) return this.renderTokens(n[4], t, i, r);
            }),
            (t.prototype.renderPartial = function (n, t, i) {
                if (i) {
                    var r = f(i) ? i(n[1]) : i[n[1]];
                    if (r != null) return this.renderTokens(this.parse(r), t, i, r);
                }
            }),
            (t.prototype.unescapedValue = function (n, t) {
                var i = t.lookup(n[1]);
                if (i != null) return i;
            }),
            (t.prototype.escapedValue = function (t, i) {
                var r = i.lookup(t[1]);
                if (r != null) return n.escape(r);
            }),
            (t.prototype.rawValue = function (n) {
                return n[1];
            }),
            (n.name = "mustache.js"),
            (n.version = "2.3.0"),
            (n.tags = ["{{", "}}"]),
            (e = new t()),
            (n.clearCache = function () {
                return e.clearCache();
            }),
            (n.parse = function (n, t) {
                return e.parse(n, t);
            }),
            (n.render = function (n, t, i) {
                if (typeof n != "string")
                    throw new TypeError(
                        'Invalid template! Template should be a "string" but "' +
                            l(n) +
                            '" was given as the first argument for mustache#render(template, view, partials)'
                    );
                return e.render(n, t, i);
            }),
            (n.to_html = function (t, i, r, u) {
                var e = n.render(t, i, r);
                if (f(u)) u(e);
                else return e;
            }),
            (n.escape = b),
            (n.Scanner = r),
            (n.Context = i),
            (n.Writer = t),
            n
        );
    });
(EmbedTools = {}),
    (function (n) {
        var t = {
            cookieGet: function (n) {
                var t = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
                return t != null ? unescape(t[2]) : null;
            },
            parseIntVerNumber: function (n) {
                var t = parseInt(n);
                return isNaN(t) ? 0 : t;
            },
        };
        n.MacVerMap = { ClientLoginHS: 0, ClientLoginHK: 1e6 };
        n.getClient = function () {
            return t.cookieGet("embedclient") || "";
        };
        n.getClientVersion = function () {
            var i = { Major: 0, Minor: 0, Revision: 0, Build: 0 },
                u = t.cookieGet("embedv"),
                n,
                r;
            return (
                u &&
                    ((n = u.split(".")),
                    (r = n.length),
                    r > 0 && (i.Major = t.parseIntVerNumber(n[0])),
                    r > 1 && (i.Minor = t.parseIntVerNumber(n[1])),
                    r > 2 && (i.Revision = t.parseIntVerNumber(n[2])),
                    r > 3 && (i.Build = t.parseIntVerNumber(n[3]))),
                i
            );
        };
        n.getClientVersionNumber = function () {
            var t = n.getClientVersion();
            return t.Major * 1e6 + t.Minor * 1e3 + t.Revision;
        };
    })(EmbedTools);
(EmbedPCTools = {}),
    (function (n) {
        var t = {},
            r = !1,
            i = { versionFlag: "", versionCode: "" },
            u = {
                cookieGet: function (n) {
                    var t = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
                    return t != null ? unescape(t[2]) : null;
                },
                parseIntVerNumber: function (n) {
                    var t = parseInt(n);
                    return isNaN(t) ? 0 : t;
                },
            };
        t.CommondMap = {
            SessionTimeOut: '{"Operation":"Trade.HS.SessionTimeOut","Params":"","CallBack":""}',
            CloseWindow: '{"Operation":"CloseWindow","Params":"","CallBack":""}',
            PageGoto_HS_Zjgl_Yzzz:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"沪深.普通交易.银证转账.银行->券商"},"CallBack":""}',
            PageGoto_AccountAnalyze_Yzzz_Yh2qs:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"沪深.账户分析.银证转账.银行->券商"},"CallBack":""}',
            PageGoto_AccountAnalyze_Asset:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"沪深.账户分析.账户分析.资产分析"},"CallBack":""}',
            PageGoto_AccountAnalyze_Trade:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"沪深.账户分析.账户分析.交易分析"},"CallBack":""}',
            PageGoto_AccountAnalyze_Bill:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"沪深.账户分析.账户分析.历史账单"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_BasicAsset:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.账户分析.收益分析"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_BasicTrade:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.账户分析.持仓分析"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_BasicEmptyPosition:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.账户分析.已清仓股票盈亏"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_BasicBill:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.账户分析.投资账单"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_BasicStockOperations:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.账户分析.操作分析"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_Yzzz_Magin_Yh2qs:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"沪深.信用交易.银证转账.银行->券商"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_MaginAsset:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.信用账户分析.收益分析"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_MaginTrade:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.信用账户分析.持仓分析"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_MarginEmptyPosition:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.信用账户分析.已清仓股票盈亏"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_MaginBill:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.信用账户分析.投资账单"},"CallBack":""}',
            PageGoto_AccountAnalyzeV2_MaginStockOperations:
                '{"Operation":"Trade.PageGoTo","Params":{"id":"{0}.信用账户分析.操作分析"},"CallBack":""}',
        };
        t.ExcutePcCommond = function (n, i, r) {
            var u = { Operation: n, Params: i || "", CallBack: r || "" };
            t.ExcutePcCommondString(JSON.stringify(u));
        };
        t.ExcutePcCommondString = function (n) {
            console.log(n);
            try {
                window.external.OnWebCallNativeJsCommon(n);
            } catch (t) {}
        };
        t.IsInPC = function () {
            return r;
        };
        t.IsInPCMain = function () {
            return r && i.versionFlag == "main";
        };
        t.IsInPCIndietrade = function () {
            return r && i.versionFlag == "indietrade";
        };
        t.PCVersionCode = function () {
            return i.versionCode;
        };
        t.init = function () {
            var n = u.cookieGet("UserAgent") || "",
                t;
            n = n.toLowerCase();
            n &&
                n.indexOf("eastmoneypc") > -1 &&
                ((r = !0),
                (t = n.split("_")),
                t.length > 2 && ((i.versionFlag = t[1]), (i.versionCode = t[2])),
                $(document).ready(function () {
                    $(window).contextmenu(function () {
                        return !1;
                    });
                }));
        };
        t.init();
        t.isWin = function () {
            var n = navigator.userAgent || "";
            return n.indexOf("Windows") > -1;
        };
        t.canUseSecWinBrowser = function () {
            var n = navigator.userAgent || "",
                t,
                i,
                r,
                u;
            return ((t = n.indexOf("Chrome/")),
            t > -1 && n.length >= t + 10 && ((i = n.substr(t + 7, 3).split(".")[0]), i >= 53))
                ? !0
                : ((t = n.indexOf("Firefox/")),
                    t > -1 && n.length >= t + 11 && ((i = n.substr(t + 8, 3).split(".")[0]), i >= 55))
                  ? !0
                  : n.indexOf("Trident") > -1 && n.indexOf("rv:11.0") > -1
                    ? !0
                    : n.indexOf("MSIE") > -1 &&
                        ((r = new RegExp("MSIE (\\d+\\.\\d+);")), r.test(n), (u = parseFloat(RegExp.$1)), u >= 10)
                      ? !0
                      : !1;
        };
        t.getPCChromeVersion = function () {
            var t = navigator.userAgent || "",
                n;
            return ((n = t.indexOf("Chrome/")), n > -1 && t.length >= n + 10) ? t.substr(n + 7, 3).split(".")[0] : null;
        };
        n.EmbedPCTools = t;
    })(window);

