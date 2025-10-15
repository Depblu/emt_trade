function createDateFromDateTimeString(n) {
    var t = null;
    return n && (n.length >= 14 ? t = new Date(n.substr(0, 4) + "/" + n.substr(4, 2) + "/" + n.substr(6, 2) + " " + n.substr(8, 2) + ":" + n.substr(10, 2) + ":" + n.substr(12, 2)) : n.length >= 12 ? t = new Date(n.substr(0, 4) + "/" + n.substr(4, 2) + "/" + n.substr(6, 2) + " " + n.substr(8, 2) + ":" + n.substr(10, 2) + ":00") : n.length >= 10 ? t = new Date(n.substr(0, 4) + "/" + n.substr(4, 2) + "/" + n.substr(6, 2) + " " + n.substr(8, 2) + ":00:00") : n.length >= 8 && (t = new Date(n.substr(0, 4) + "/" + n.substr(4, 2) + "/" + n.substr(6, 2)))), t
}

function formatDateTime(n, t) {
    if (!n || n.length < 5) return "-";
    t = t == undefined ? ":" : t;
    var i = "";
    return t == ":" ? ((n.length == 5 || n.length == 7) && (n = "0" + n), i += n.substr(0, 2) + t + n.substr(2, 2) + t + n.substr(4, 2)) : i += n.substr(0, 4) + t + n.substr(4, 2) + t + n.substr(6, 2), i
}

function formatHKTime(n) {
    if (n && n.indexOf(":") > -1) return n;
    n = n || "000000";
    (n.length == 5 || n.length == 7) && (n = "0" + n);
    n.PadRight(6, "0");
    return n.substr(0, 2) + ":" + n.substr(2, 2) + ":" + n.substr(4, 2)
}

function getNotNullValue(n, t) {
    return n ? n : t
}

function getDateDiff(n, t, i) {
    var e = new Date(n),
        r, f, u;
    isNaN(e) && (r = n.split("-"), r.length == 3 && (e = new Date(r[0], r[1], r[2])));
    f = new Date(t);
    isNaN(f) && (u = t.split("-"), u.length == 3 && (f = new Date(u[0], u[1], u[2])));
    var o = f.getTime() - e.getTime(),
        s = Math.floor(o / 864e5),
        h = typeof i == "undefined" ? 100 : i;
    return s > h ? !1 : !0
}

function getcolor_JS(n, t, i) {
    var u, r;
    if (!n || n == "-" || n == "" || n == "NaN") return "<span>-<\/span>";
    if (t == "%" ? u = parseFloat(n).toFixed(2) + t : t == "w" ? (r = Math.abs(n), u = r < 1e4 ? n : r >= 1e4 && r < 1e6 ? (n / 1e4).toFixed(2) + "万" : r >= 1e6 && r < 1e8 ? (n / 1e4).toFixed(0) + "万" : r >= 1e8 && r < 1e10 ? (n / 1e8).toFixed(2) + "亿" : (n / 1e8).toFixed(0) + "亿") : u = n, i && (n = i), n.length > 0) {
        if (n.substring(0, 1) == "-") return '<span class="green">' + u + "<\/span>";
        if (n != 0) return '<span class="red">' + u + "<\/span>"
    }
    return "<span>" + u + "<\/span>"
}

function BigNumberFormat(n) {
    var i = parseFloat(n),
        t;
    return i == NaN ? "-" : (t = Math.abs(i), t < 1e4 ? n : t >= 1e4 && t < 1e6 ? (n / 1e4).toFixed(2) + "万" : t >= 1e6 && t < 1e8 ? (n / 1e4).toFixed(0) + "万" : t >= 1e8 && t < 1e10 ? (n / 1e8).toFixed(2) + "亿" : (n / 1e8).toFixed(0) + "亿")
}

function editCardID(n) {
    return n.substr(0, n.length - 9) + "*****" + n.substr(n.length - 4)
}

function editPage(n) {
    var t = "";
    _count == 1 ? n ? t = '<span>上一页<\/span>  <span id="nowPage">第 页<\/span>  <a target="_self" data-page="next" href="javascript:getData(\'next\');">下一页<\/a>' : $(".pager").empty() : t = n ? '<a target="_self" href="javascript:getData(\'pre\');">上一页<\/a>  <span id="nowPage">第 页<\/span>  <a target="_self" data-page="next" href="javascript:getData(\'next\');">下一页<\/a>' : '<a target="_self" href="javascript:getData(\'pre\');">上一页<\/a>  <span id="nowPage">第 页<\/span>  <span>下一页<\/span>';
    $(".pager").html(t)
}

function compareDate(n, t) {
    var i = [],
        r = [],
        u, f;
    if (n != null && t != null) return i = n.split("-"), u = new Date(i[0], parseInt(i[1] - 1), i[2]), r = t.split("-"), f = new Date(r[0], parseInt(r[1] - 1), r[2]), u < f ? "-1" : u == f ? "0" : "1"
}

function buildStockLink(n) {
    var t = "";
    return n && n.Zqdm && (t = n.Type == "fund" ? "http://fund.eastmoney.com/" + n.Zqdm + ".html" : "https://so.eastmoney.com/quotation/s?keyword=" + n.Zqdm), t
}

function getStandardMarket(n) {
    var t = "";
    switch (n) {
        case "0":
            t = "SA";
            break;
        case "1":
            t = "HA";
            break;
        case "2":
            t = "SB";
            break;
        case "3":
            t = "HB";
            break;
        case "5":
            t = "HG";
            break;
        case "6":
            t = "TA";
            break;
        case "7":
            t = "TB";
            break;
        default:
            t = n
    }
    return t
}

function getSize(n, t, i) {
    var r = t + "";
    if (/\D/.test(r) && (r = r.replace(/(?:top|left)/gi, "0%").replace(/center/gi, "50%").replace(/(?:bottom|right)/gi, "100%")), r.indexOf("px") !== -1 && (r = r.replace(/px/gi, "")), r.indexOf("%") !== -1 && (r = r.replace(/(\d+(?:\.\d+)?)%/gi, function(t, r) {
            return n[i]() * (r / 100)
        })), /[+\-*\/]/.test(r)) try {
        r = new Function("return " + r)()
    } catch (u) {
        throw new Error("Invalid position value: " + r);
    }
    return parseFloat(r, 10)
}

function alertMsg(n, t, i, r, u) {
    var f, e, o, s;
    $("#Cxc_Dialog").length > 0 && CxcClose();
    f = "<div class='cxc_Mobile' id='Cxc_Dialog' style='left:" + boxdiv_l + "px;' >";
    f += "<div class='cxc_dialog'>";
    f += "<p class='filter01'><\/p>";
    f += "<p class='filter02'><\/p>";
    f += "<div class='cxc_dialog_filt'>";
    f += "<p class='filter03'><\/p>";
    f += "<p class='filter04'><\/p>";
    f += "<div class='cxc_dialog_bd'>";
    f += "<div class='cxc_top'><p id='Cxc_Mobile' onmousedown='MoveDiv(Cxc_Dialog,event);'>" + n + "<\/p><span id='btnCxcClose'>x<\/span><\/div>";
    f += "<p class='cxc_bd " + i + "'>" + t + "<\/p>";
    f += "<p class='cxc_ft'>";
    e = "确定";
    o = "取消";
    u && (e = u[0] || "确定", o = u[1] || "取消");
    f += "<span class='img confirm' id='btnCxcConfirm'>" + e + "<\/span>";
    _types.confirm == i && (f += "<span class='img cancel' id='btnCxcCancel2'>" + o + "<\/span>");
    f += "<\/p>";
    f += "<\/div>";
    f += "<\/div>";
    f += "<\/div>";
    f += "<\/div><div class='Masklayer' id='Masklayer'><\/div>";
    $("body").append(f);
    dialog_h = $("#Cxc_Dialog").height();
    boxdiv_t = (Browser_h - dialog_h) / 2;
    s = boxdiv_t + ScollPostion().top;
    $("#Cxc_Dialog").css("top", s);
    $(".filter03").css("height", $(".cxc_dialog_bd").height() + 2);
    $(".filter04").css("height", $(".cxc_dialog_bd").height() + 2);
    $("#Masklayer").css("height", $(document.body).height());
    $("#Masklayer").css("display", "block");
    _closeTimer && (clearTimeout(_closeTimer), _closeTimer = null);
    _types.auto == i ? (_closeTimer = setTimeout(function() {
        CxcClose();
        r && r()
    }, 3e3), $(_bgid).hide()) : $(_bgid).show();
    $("#btnCxcClose, #btnCxcCancel2").on("click", function() {
        CxcClose();
        r && r(0)
    });
    $("#btnCxcConfirm").on("click", function() {
        CxcClose();
        r && r(1)
    })
}

function CxcClose() {
    $("#Cxc_Dialog").remove();
    $("#Masklayer").remove()
}

function gID(n) {
    return document.getElementById(n)
}

function ScrollDiv(n, t) {
    var r = document.documentElement.scrollTop || document.body.scrollTop,
        i;
    t == null && (t = 0);
    i = .1 * (r - t);
    i = i > 0 ? Math.ceil(i) : Math.floor(i);
    gID(n).style.top = parseInt(gID(n).style.top) + i + "px";
    t = t + i;
    setTimeout("ScrollDiv('" + n + "'," + t + ");", 50)
}

function addObjEvent(n, t, i) {
    if (n.attachEvent) n.attachEvent(t, i);
    else if (n.addEventListener) {
        var r = t.toString().replace(/on(.*)/i, "$1");
        n.addEventListener(r, i, !1)
    } else n[t] = i
}

function delObjEvent(n, t, i) {
    if (n.detachEvent) n.detachEvent(t, i);
    else if (n.removeEventListener) {
        var r = t.toString().replace(/on(.*)/i, "$1");
        n.removeEventListener(r, i, !1)
    } else n[t] = null
}

function MoveDiv(n, t) {
    function f(t) {
        return n.style.left = t.screenX - r + "px", n.style.top = t.screenY - u + "px", !1
    }

    function e() {
        delObjEvent(document, "onmousemove", f);
        delObjEvent(document, "onmouseup", arguments.callee);
        isIE ? n.releaseCapture() : window.releaseEvents(Event.mousemove)
    }
    var i, r, u;
    return (t = t || window.event, i = isIE, /msie 9/i.test(navigator.userAgent) && (i = !1), (!i || t.button != 1) && (i || t.button != 0)) ? !1 : (n.style.position = "absolute", n.ondragstart = function() {
        return !1
    }, r = t.screenX - n.offsetLeft, u = t.screenY - n.offsetTop, addObjEvent(document, "onmousemove", f), addObjEvent(document, "onmouseup", e), t.cancelBubble = !0, isIE ? n.setCapture() : window.captureEvents(Event.mousemove), t.preventDefault && (t.preventDefault(), t.stopPropagation()), t.returnValue = !1, !1)
}

function ScollPostion() {
    var n, t, i, r;
    return document.documentElement && document.documentElement.scrollTop ? (n = document.documentElement.scrollTop, t = document.documentElement.scrollLeft, i = document.documentElement.scrollWidth, r = document.documentElement.scrollHeight) : document.body && (n = document.body.scrollTop, t = document.body.scrollLeft, i = document.body.scrollWidth, r = document.body.scrollHeight), {
        top: n,
        left: t,
        width: i,
        height: r
    }
}
var WebAppConfig = {},
    utools, cookies, commB, Dialog, Info, isIE;
WebAppConfig.InterfaceSetting = {},
    function(n) {
        var t = window.Quotation_HS || "",
            i = window.Quotation_HK || "";
        n.SHSZQuery = t + "api/SHSZQuery?id={#KEY}&count=10&callback={#NAME}";
        n.SHSZQuoteSnapshot = t + "api/SHSZQuoteSnapshot?id={0}";
        n.SHSZQueryDzjy = t + "api/shszquery/target/callback/{0}/1,2";
        n.CodeAutoComplete2 = t + "api/SHSZQuery/GetCodeAutoComplete2?id={#KEY}&count=10&callback={#NAME}";
        n.GetBjsCodeAutoComplete = t + "api/SHSZQuery/GetSelectedCodeAutoComplete?id={#KEY}&count=10&callback={#NAME}";
        n.GetSwapInfo = t + "api/SHSZQuoteSnapshot/GetSwapInfo?ids={0}";
        n.HKQuery = i + "api/HKQuery?id={#KEY}&count=10&callback={#NAME}&type=ggt";
        n.SGTQuery = i + "api/HKQuery?id={#KEY}&count=10&callback={#NAME}&type=sgt";
        n.HKFullQuery = i + "api/HKQuery?id={#KEY}&count=10&callback={#NAME}";
        n.HKQuoteSnapshot = i + "api/HKQuoteSnapshot?id=HK|{0}&auth=5&type=1";
        n.quatationPublicKey = "04cc03a080c885cea4c727ac91c851e8b8c1563a213008f838dd335a2514fbef19f51746a8a96815af40cc9c843546706c49e6269c338860b05d97f201f7da099d"
    }(WebAppConfig.InterfaceSetting);
WebAppConfig.GGQQSetting = {},
    function(n) {
        n.TargetStocks = [{
            StockCode: "510050",
            StockName: "50ETF"
        }]
    }(WebAppConfig.GGQQSetting);
WebAppConfig.Mapping = {},
    function(n) {
        n.Market = {
            SA: "深市A股",
            SB: "深市B股",
            HA: "沪市A股",
            HB: "沪市B股",
            B: "京市A股",
            TA: "三板A股",
            TB: "三板B股",
            HG: "沪港通",
            S: "深港通",
            "0": "深市A股",
            "1": "沪市A股",
            "2": "深市B股",
            "3": "沪市B股",
            "5": "沪港通",
            "6": "三板A股",
            "7": "三板B股"
        }
    }(WebAppConfig.Mapping);
WebAppConfig.HSSetting = {},
    function(n) {
        n.specialCodes = ["369999", "369991", "799988", "939988", "799991"];
        n.specialNames = ["深市密码服务", "深市中登认证", "沪A密码服务", "沪B密码服务"];
        n.specialCodeMap = {
            "369999": "深市密码服务",
            "369991": "深市中登认证",
            "799988": "沪A密码服务",
            "939988": "沪B密码服务",
            "799991": "沪市中登认证"
        };
        n.specialCodeMapOrigin = {
            "369999": "密码服务",
            "369991": "中登认证",
            "799988": "密码服务",
            "939988": "密码服务",
            "799991": "中登认证"
        };
        n.bondTypes = ["1", "2", "8", "9", "A", "B", "C", "D", "l", "t", "w"];
        n.cdrTypes = ["U", "X"]
    }(WebAppConfig.HSSetting);
String.prototype.format = function() {
    var n = arguments;
    return this.replace(/\{(\d+)\}/g, function(t, i) {
        return n[i]
    })
};
String.prototype.trim = function() {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
};
String.prototype.realLength = function() {
    for (var i = 0, r = this.length, t = -1, n = 0; n < r; n++) t = this.charCodeAt(n), i += t >= 0 && t <= 128 ? 1 : 2;
    return i
};
Date.prototype.format = function(n) {
    var i = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        },
        t;
    /(y+)/.test(n) && (n = n.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (t in i) new RegExp("(" + t + ")").test(n) && (n = n.replace(RegExp.$1, RegExp.$1.length == 1 ? i[t] : ("00" + i[t]).substr(("" + i[t]).length)));
    return n
};
String.prototype.PadLeft = function(n, t) {
    return t != null ? this.PadHelper(n, t, !1) : this.PadHelper(n, " ", !1)
};
String.prototype.PadRight = function(n, t) {
    return t != null ? this.PadHelper(n, t, !0) : this.PadHelper(n, " ", !0)
};
String.prototype.PadHelper = function(n, t, r) {
    if (this.length < n) {
        var u = new String;
        for (i = 1; i <= n - this.length; i++) u += t;
        return r ? this + u : u + this
    }
    return this
};
utools = {
    config: {
        id: "",
        url: "",
        charset: "utf-8",
        callback: function() {}
    },
    merge: function(n, t) {
        for (var i in t) n[i] = t[i];
        return n
    },
    showMask: function(n) {
        n = n || "900";
        var t = $(document.body).children("div.layer");
        t.length == 0 && ($(document.body).append('<div class="layer" style="display:none;"><\/div>'), t = $(document.body).children("div.layer"));
        t.css("zIndex", n);
        t.show()
    },
    hideMask: function() {
        $(document.body).children("div.layer").hide()
    },
    getScript: function(n) {
        var i, t, r;
        this.config = this.merge(this.config, n);
        i = this.config.callback;
        t = document.createElement("script");
        t.setAttribute("id", this.config.id);
        t.setAttribute("charset", this.config.charset);
        t.setAttribute("type", "text/javascript");
        this.config.url.indexOf("?") == -1 ? t.setAttribute("src", this.config.url + "?_=" + (new Date).getTime()) : t.setAttribute("src", this.config.url + "&_=" + (new Date).getTime());
        r = document.getElementsByTagName("head")[0];
        r.appendChild(t);
        t[document.all ? "onreadystatechange" : "onload"] = function() {
            this.readyState && this.readyState != "loaded" && this.readyState != "complete" || (i && i(), t.onreadystatechange = t.onload = null, t.parentNode.removeChild(t))
        }
    },
    loadScript: function(n) {
        var i, t;
        this.config = this.merge(this.config, n);
        n = document.getElementById(this.config.id);
        n = document.createElement("script");
        n.setAttribute("id", this.config.id);
        n.setAttribute("type", "text/javascript");
        n.setAttribute("charset", this.config.charset);
        n.setAttribute("src", this.config.url + "?_=" + (new Date).getTime());
        t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(n, t);
        i = this.config.callback;
        n.onload = n.onreadystatechange = function() {
            ("undefined" == typeof this.readyState || "loaded" == this.readyState || "complete" == this.readyState) && i()
        }
    },
    showLoading: function() {
        $(".v_con").find(".mask_vcon").length == 0 && $(".v_con").append('<div class="mask_vcon"><img class="loading" src="/Images/loading.gif"/><\/div>')
    },
    hideLoading: function() {
        $(".v_con").find(".mask_vcon") && $(".v_con .mask_vcon").remove()
    },
    loadAjaxV2: function(n) {
        var t = {
                url: "",
                type: "POST",
                timeout: 0,
                data: {},
                isLoading: !0,
                beforeSend: null,
                success: null,
                error: null,
                complete: null,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                withValidateKey: !0
            },
            i, r;
        return t = $.extend(t, n), i = jQuery.trim(t.url), t.withValidateKey && (r = $("#em_validatekey").val() || "", i += i.indexOf("?") > -1 ? "&validatekey=" + r : "?validatekey=" + r), $.ajax({
            headers: {
                gw_reqtimestamp: (new Date).getTime()
            },
            url: i,
            type: t.type,
            timeout: n.timeout || 0,
            data: t.data,
            dataType: t.dataType,
            contentType: t.contentType,
            beforeSend: function() {
                t.isLoading && $(".v_con").find(".mask_vcon").length == 0 && $(".v_con").append('<div class="mask_vcon"><img class="loading" src="/Images/loading.gif"/><\/div>');
                t.beforeSend && t.beforeSend()
            },
            success: function(n) {
                if (n && n.Status && n.Status == "-2") return $("#Cxc_Dialog") && $("#Cxc_Dialog").length == 0 && alertMsg("", n.Message, "error", function() {
                    location.href = "/Login/ExitLogin?clear=1&retUrl=" + encodeURIComponent(location.pathname + location.search)
                }), !1;
                t.success && t.success(n)
            },
            complete: function() {
                t.isLoading && $(".v_con").find(".mask_vcon") && $(".v_con .mask_vcon").remove();
                t.complete && t.complete()
            },
            error: function(n, i, r) {
                if (t.isLoading) switch (i) {
                    case "abort":
                        break;
                    case "timeout":
                        alertMsg("", "网络繁忙,请稍后重试!", "error");
                        break;
                    default:
                        alertMsg("", "请求出错!", "error")
                }
                t.error && t.error(n, i, r)
            }
        })
    },
    loadAjax: function(n, t, i, r, u, f, e) {
        var r = r || !1,
            s = u || "json",
            h = f || "application/x-www-form-urlencoded",
            o;
        return n = jQuery.trim(n), o = $("#em_validatekey").val() || "", n += n.indexOf("?") > -1 ? "&validatekey=" + o : "?validatekey=" + o, $.ajax({
            headers: {
                gw_reqtimestamp: (new Date).getTime()
            },
            url: n,
            type: "POST",
            data: t || {},
            dataType: s,
            contentType: h,
            beforeSend: function() {
                r && ($(".v_con").hasClass(".mask_vcon") || $(".v_con").append('<div class="mask_vcon"><img class="loading" src="/Images/loading.gif"/><\/div>'))
            },
            success: function(n) {
                if (n && n.Status && (n.Status == "-2" || n.Status == "-99")) return $("#Cxc_Dialog") && $("#Cxc_Dialog").length == 0 && alertMsg("", n.Message, "error", function() {
                    location.href = "/Login/ExitLogin?clear=1&retUrl=" + encodeURIComponent(location.pathname + location.search)
                }), !1;
                i && i(n)
            },
            complete: function() {
                $(".v_con").find(".mask_vcon") && $(".mask_vcon").remove();
                e && e()
            },
            error: function(n, t) {
                if (r) switch (t) {
                    case "abort":
                        break;
                    case "timeout":
                        alertMsg("", "网络繁忙,请稍后重试!", "error");
                        break;
                    default:
                        alertMsg("", "请求出错!", "error")
                }
            }
        })
    },
    getAjax: function(n, t, i) {
        $.ajax({
            headers: {
                gw_reqtimestamp: (new Date).getTime()
            },
            type: "POST",
            url: n + "?" + (new Date).getTime(),
            data: t || {},
            success: function(n) {
                i && i(n)
            },
            error: function(n) {
                console && console.log(n)
            }
        })
    },
    getJsonp: function(n, t, i, r, u) {
        return $.ajax({
            type: "GET",
            async: !1,
            url: n,
            dataType: "jsonp",
            data: t,
            jsonp: "callback",
            beforeSend: function() {
                u && ($(".v_con").hasClass(".mask_vcon") || $(".v_con").append('<div class="mask_vcon"><img class="loading" src="/Images/loading.gif"/><\/div>'))
            },
            success: function(n) {
                i && i(n)
            },
            error: function(n, t) {
                r && r();
                console && console.log(t)
            },
            complete: function() {
                $(".v_con").find(".mask_vcon") && $(".mask_vcon").remove()
            }
        })
    },
    parseQueryString: function(n) {
        var f = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
            t = /^[^\?]+\?([\w\W]+)$/.exec(n),
            r = {},
            u, i;
        if (t && t[1])
            for (u = t[1];
                (i = f.exec(u)) != null;) r[i[1]] = i[2];
        return r
    },
    getQueryString: function(n) {
        var u = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"),
            r = decodeURI(window.location.search).substr(1).match(u),
            i, t;
        return r != null ? (i = unescape(r[2]), t = i.toLowerCase(), t.indexOf("%25") > -1 || t.indexOf("%3c") > -1 || t.indexOf("%3e") > -1 || t.indexOf("%27") > -1 || t.indexOf("%22") > -1 || t.indexOf("%7c") > -1 || t.indexOf("%23") > -1 || t.indexOf("%26") > -1 || t.indexOf("<") > -1 || t.indexOf(">") > -1 || t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("/") > -1 || t.indexOf("|") > -1 || t.indexOf("#") > -1 || t.indexOf("&") > -1 ? null : i) : null
    },
    stopEventBubble: function(n) {
        var t = n || window.event;
        return t && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, !1
    },
    parsePercentToDecimal: function(n) {
        return Number(n.replace("%", "")) / 100
    },
    isNumberPermitKeyCode: function(n) {
        switch (n) {
            case 8:
            case 36:
            case 37:
            case 39:
            case 46:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 110:
            case 190:
                return !0
        }
        return !1
    },
    isIntPermitKeyCode: function(n) {
        switch (n) {
            case 8:
            case 36:
            case 37:
            case 39:
            case 46:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                return !0
        }
        return !1
    },
    forceFloat: function(n, t) {
        var i = parseFloat(n);
        return isNaN(i) ? t : i
    },
    forceInt: function(n, t) {
        var i = parseInt(n);
        return isNaN(i) ? t : i
    },
    getStockUnit: function(n) {
        var t = "股";
        return n && (jQuery.inArray(n, WebAppConfig.HSSetting.bondTypes) > -1 ? t = "张" : jQuery.inArray(n, WebAppConfig.HSSetting.cdrTypes) > -1 && (t = "份")), t
    },
    getStockUnitByQuota: function(n) {
        var t = "股";
        return n == "4" ? t = "张" : n == "10" && (t = "份"), t
    },
    digitUppercase: function(n) {
        var e = ["角", "分"],
            o = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
            r = [
                ["元", "万", "亿"],
                ["", "十", "百", "千"]
            ],
            s = n < 0 ? "欠" : "",
            i, t, u, f;
        for (n = Math.abs(n), i = "", t = 0; t < e.length; t++) i += (o[Math.floor(n * 10 * Math.pow(10, t)) % 10] + e[t]).replace(/零./, "");
        for (i = i || "整", n = Math.floor(n), t = 0; t < r[0].length && n > 0; t++) {
            for (u = "", f = 0; f < r[1].length && n > 0; f++) u = o[n % 10] + r[1][f] + u, n = Math.floor(n / 10);
            i = u.replace(/(零.)*零$/, "").replace(/^$/, "零") + r[0][t] + i
        }
        return s + i.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整")
    },
    numberFormat: function(n) {
        var e, r, u, f, o, t;
        if (n == 0 || n == "0") return "0";
        if (isNaN(n) || !n) return "-";
        for (n = n + "", e = !1, n.indexOf("-") == 0 && (n = n.substr(1), e = !0), r = n.split("."), u = "", r.length > 1 && (u = r[r.length - 1]), f = (Math.floor(parseFloat(n)) + "").split("").reverse(), o = "", i = 0; i < f.length; i++) o += f[i] + ((i + 1) % 3 == 0 && i + 1 != f.length ? "," : "");
        return t = o.split("").reverse().join(""), u.length > 0 && (t += "." + u), e && (t = "-" + t), t
    },
    aboutRequest: function(n) {
        n != null && n.readyState > 0 && n.readyState < 4 && (n.abort(), n = null)
    },
    isPriceNumber: function(n) {
        var i, r, t;
        return n == "0" || n == "0." || n == "0.0" || n == "0.00" || n == "0.000" ? (n = "0", !0) : (i = n.indexOf("0"), r = n.length, i == 0 && r > 1 ? (t = /^[0]{1}[.]{1}[0-9]{1,3}$/, t.test(n) ? !0 : !1) : (t = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,3}$/, t.test(n) ? !0 : !1))
    },
    isStockNumber: function(n) {
        return /^([1-9]\d*|[0]{1,1})$/.test(n)
    },
    getIntegralMultiple: function(n, t) {
        var i = t || 100;
        return n == 0 ? !0 : utools.isStockNumber(n) ? n % i > 0 ? 0 : !0 : 0
    },
    isStockCode: function(n) {
        return /^(\d{6})$/.test(n)
    }
};
cookies = {
    set: function(n, t, i, r, u) {
        i = new Date((new Date).getTime() + (typeof i == "undefined" ? 86400 : i) * 1e3);
        var f = n + "=" + escape(t) + (i ? "; expires=" + i.toGMTString() : "") + (r ? "; path=" + r : "; path=/") + (u ? "; domain=" + u : "");
        f.length < 4096 ? document.cookie = f : alert("The cookie is bigger than cookie lagrest")
    },
    get: function(n) {
        var t = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
        return t != null ? unescape(t[2]) : null
    },
    del: function(n, t, i) {
        this.get(n) && (document.cookie = n + "=" + (t ? "; path=" + t : "; path=/") + (i ? "; domain=" + i : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
    },
    day: function(n) {
        return n * 86400
    },
    hour: function(n) {
        return n * 3600
    }
};
jQuery.fn.Tabs = function(n) {
    var t = jQuery.extend({}, {
            tabSelector: ".tabs li",
            conSelector: ".tabcontent",
            focusClass: "c",
            moreTrigger: ".tabTitle .more .link",
            events: "mouseover",
            selected: 0,
            delay: .2
        }, n),
        u = this,
        f = jQuery(t.tabSelector, u),
        i = jQuery(t.conSelector, u),
        r = jQuery(t.moreTrigger, u),
        o = t.events == ["mouseover", "click"][0] ? !0 : !1,
        e;
    void
    function() {
        var e = f.eq(t.selected),
            n, u;
        e && e.length == 0 && (e = f.eq(0));
        e.addClass(t.focusClass);
        e.siblings(t.tabSelector).removeClass(t.focusClass);
        n = i.eq(t.selected);
        n && n.length == 0 && (n = i.eq(0));
        n.show();
        n.siblings(t.conSelector).hide();
        u = r.eq(t.selected);
        u && u.length == 0 && (u = r.eq(0));
        u.show();
        u.siblings().hide()
    }();
    f.each(function(n, u) {
        jQuery(u).on(t.events, function() {
            var u = this;
            e.apply(this, [t.delay, function() {
                jQuery(u).addClass(t.focusClass);
                jQuery(u).siblings(t.tabSelector).removeClass(t.focusClass);
                jQuery(i[n]).show();
                jQuery(i[n]).siblings(t.conSelector).hide();
                jQuery(r[n]).show();
                jQuery(r[n]).siblings().hide()
            }, o])
        })
    });
    e = function(n, t, i) {
        if (i) {
            var r = this,
                u = setInterval(function() {
                    t.apply(r)
                }, n * 1e3);
            r.onmouseout = function() {
                clearInterval(u)
            }
        } else t.apply(this)
    }
};
commB = {},
    function(n) {
        function t(n) {
            n != null && n.readyState > 0 && n.readyState < 4 && (n.abort(), n = null)
        }
        var i, r, u, f;
        n.getStockInfo = function(n, t, i) {
            var r = {
                stockCode: "",
                market: ""
            };
            r = $.extend(r, n);
            utools.loadAjaxV2({
                url: "/Com/GetZqInfo",
                data: {
                    zqdm: r.stockCode,
                    market: r.market
                },
                success: function(n) {
                    n ? n.Status == "0" && n.Data && n.Data.length ? t && t(n.Data) : i ? i(n.Message) : alertMsg("", "找不到代码为" + r.stockCode + "的证券信息！", "error") : alertMsg("", "网络繁忙，请稍后重试！", "error")
                }
            })
        };
        i = null;
        n.getStockInfoByMarketOrName = function(n, r, u) {
            if (u) {
                r(u);
                return
            }
            t(i);
            var f = null;
            i = utools.loadAjaxV2({
                url: "/Com/GetStockInfoA",
                data: n,
                isLoading: !0,
                success: function(n) {
                    n.Status == 0 && n.Data && n.Data.length > 0 && (f = n.Data[0])
                },
                complete: function() {
                    r(f)
                }
            })
        };
        r = null;
        n.getStockInfoByMarketOrName2 = function(n, i, u) {
            if (u) {
                i(u);
                return
            }
            t(r);
            var f = null;
            r = utools.loadAjaxV2({
                url: "/Com/GetStockInfoA",
                data: n,
                isLoading: !0,
                success: function(n) {
                    n.Status == 0 && n.Data && n.Data.length > 0 && (f = n.Data[0])
                },
                complete: function() {
                    i(f)
                }
            })
        };
        u = null;
        n.queryStkInfoByMarket = function(n, i, r) {
            if (r) {
                i(r);
                return
            }
            t(u);
            var f = null;
            u = utools.loadAjaxV2({
                url: "/Com/queryStkInfo",
                data: n,
                isLoading: !0,
                success: function(n) {
                    n.Status == 0 && n.Data && n.Data.length > 0 && (f = n.Data[0])
                },
                complete: function() {
                    i(f)
                }
            })
        };
        f = null;
        n.queryCreditStkInfoByMarket = function(n, i, r) {
            if (r) {
                i && i(r);
                return
            }
            t(f);
            var u = null;
            n && n.zqdm && n.market ? f = utools.loadAjaxV2({
                url: "/MarginSearch/queryCreditStkInfoWEB",
                data: n,
                isLoading: !0,
                success: function(n) {
                    n.Status == 0 && n.Data && n.Data.length > 0 && (u = n.Data[0])
                },
                complete: function() {
                    i && i(u)
                }
            }) : i && i(u)
        };
        n.AntiMoneyLaundering = function(n) {
            var t = $.Deferred();
            return utools.loadAjaxV2({
                url: "/Com/queryCustomerFxqdj",
                data: {
                    BizType: n || ""
                },
                isLoading: !0,
                success: function(n) {
                    if (n && n.Status == 0)
                        if (n.Data == "2") {
                            t.reject();
                            var i = new Dialog(null, {
                                content: '<div class="confirm" style="width:400px;height:120px;overflow-y: auto;"><h3>温馨提示<\/h3><p style="text-indent: 2em;" class="confirm-text custom" style="margin-top:15px;">尊敬的投资者，根据相关规定，您暂不能在线开通该权限，请至我司线下营业部办理该项业务，详询客服热线95357。<\/p><\/div>',
                                width: 420,
                                height: 140,
                                hasTitle: !1,
                                noClose: !1,
                                hasBtn: !0,
                                hasTitle: !1,
                                title: "温馨提示",
                                btnText: ["确定", "查找附近营业部"],
                                btnRole: ["cancel", "confirm"],
                                confirm: function() {
                                    i.destroy();
                                    window.open("https://store.18.cn/")
                                }
                            });
                            $(".js-dialog .btn-wrap").css("width", "330px");
                            $(".js-dialog .btn-default-blue").css("width", "110px")
                        } else n.Data == "3" ? (t.reject(), alertMsg("温馨提示", "尊敬的投资者，根据相关规定，您暂不能开通该权限，详询客服热线95357。", "info")) : t.resolve();
                    else t.reject(), messageBox.error(n.Message || messageMap.requestDefaultError)
                }
            }), t.promise()
        };
        n.AntiSubAccount = function() {
            var n = $.Deferred();
            return utools.loadAjaxV2({
                url: "/Com/GetMainAccount",
                isLoading: !0,
                success: function(t) {
                    if (t && t.Status == 0 && t.Data) {
                        var i = t.Data.mainAccount,
                            r = t.Data.currentAccount;
                        i != r ? (n.reject(), alertMsg("温馨提示", "尊敬的用户，请退出当前资金账号，并登录主资金账号（" + i + "）以后再办理该项业务，详询客服热线95357。", "info")) : n.resolve()
                    } else n.reject(), messageBox.error(t.Message || messageMap.requestDefaultError)
                }
            }), n.promise()
        };
        n.AntiIncompleteInfo = function() {
            var n = $.Deferred();
            return utools.loadAjaxV2({
                url: "/More/queryIncompleteInfo",
                isLoading: !0,
                success: function(t) {
                    t.Status == 0 && t.Data && t.Data.length > 0 ? (n.reject(), alertMsg("温馨提示", "尊敬的用户，由于您未在规定时间内完善身份信息，为保障账户安全，账户已被限制办理该项业务。请下载东方财富APP，并进入交易-更多-个人信息-信息完善功能完善身份信息，信息完善以后自动解除限制。如有疑问，请咨询客服热线95357。", "info")) : n.resolve()
                }
            }), n.promise()
        };
        n.checkID = function() {
            var n = $.Deferred();
            return utools.loadAjaxV2({
                url: "/More/IDCheckPro",
                isLoading: !0,
                success: function(t) {
                    var i, r, u;
                    t.Status == 0 && t.Data ? (i = t.Data, r = !0, i.IsIDNumber ? i.IsExpired ? (r = !1, alertMsg("温馨提示", "尊敬的用户，您的身份证信息已失效，请至应用商店下载东方财富APP，进入交易-更多-个人信息-身份证更新功能更新身份证。详询客服热线95357。", "info")) : i.IsID18 || (r = !1, alertMsg("温馨提示", "尊敬的用户，您绑定的身份证必须为18位身份证号码，请至应用商店下载东方财富APP，进入交易-更多-个人信息-身份证更新功能更新身份证。详询客服热线95357。", "info")) : i.IsExpired && (r = !1, u = new Dialog(null, {
                        content: '<div class="confirm" style="width:400px;height:160px;overflow-y: auto;"><p style="text-indent: 2em;" class="confirm-text custom" style="margin-top:15px;">尊敬的用户，您的证件信息已失效，无法在线办理当前业务，请至我司线下营业部更新证件。如有任何疑问，请咨询我司客服热线95357。<\/p><\/div>',
                        width: 420,
                        height: 200,
                        hasTitle: !0,
                        noClose: !1,
                        hasBtn: !0,
                        title: "温馨提示",
                        btnText: ["查找附近营业部", "取消"],
                        btnRole: ["confirm", "cancel"],
                        confirm: function() {
                            u.destroy();
                            window.open("https://store.18.cn/")
                        }
                    }), $(".js-dialog .btn-wrap").css("width", "330px"), $(".js-dialog .btn-default-blue").css("width", "110px")), r ? n.resolve() : n.reject()) : n.resolve()
                }
            }), n.promise()
        }
    }(commB);
Dialog = function(n, t) {
    t = $.extend({}, $.fn.dialog.defaults, t);
    this.options = t;
    this.hasInit = !1;
    this.setup(n)
};
Dialog.prototype = {
    constructor: Dialog,
    init: function() {
        if (this.dialog = new Overlay(this.options.template, {
                className: this.options.dialogClass,
                width: this.options.width,
                height: this.options.height,
                zIndex: this.options.zIndex
            }), this.options.hasMask) {
            var n = $("." + this.options.maskClass);
            this.mask = n.length === 0 ? new Overlay(document.createElement("div"), {
                className: this.options.maskClass,
                width: isIE6 ? $(document).outerWidth() : "100%",
                height: isIE6 ? $(document).outerHeight() : "100%",
                zIndex: this.options.zIndex - 1,
                style: {
                    position: isIE6 ? "absolute" : "fixed",
                    top: 0,
                    left: 0
                }
            }) : n
        }
        this.render();
        this.dialog.hide();
        this.options.hasMask && this.mask.hide();
        $(this.dialog.overlay).find(".js-close").on("click", $.proxy(this.destroy, this));
        $(this.dialog.overlay).find("[data-role=confirm]").on("click", $.proxy(this.confirm, this));
        $(this.dialog.overlay).find("[data-role=cancel]").on("click", $.proxy(this.cancel, this));
        this.hasInit = !0
    },
    setup: function(n) {
        var t = this;
        if (n) $(n).on("click", function(n) {
            n.preventDefault();
            t.trigger()
        });
        else t.trigger();
        if (t.options.once) $(n).one("click", function(n) {
            n.preventDefault();
            t.options.once()
        })
    },
    trigger: function() {
        this.hasInit || this.init();
        this.show()
    },
    show: function() {
        this.options.beforeShow && this.options.beforeShow.apply(this);
        this.dialog.setPosition();
        this.dialog.show();
        this.options.hasMask && this.mask.show();
        this.options.afterShow && this.options.afterShow.apply(this)
    },
    hide: function() {
        this.options.beforeHide && this.options.beforeHide.apply(this);
        this.dialog.hide();
        this.options.hasMask && this.mask.hide();
        this.options.afterHide && this.options.afterHide.apply(this);
        this.options.needDestroy && this.destroy()
    },
    render: function() {
        var i = $(this.dialog.overlay).find(".hd"),
            u = $(this.dialog.overlay).find(".bd"),
            f = $(this.dialog.overlay).find(".close"),
            t, r, n;
        if (this.options.hasTitle ? i.find("h2").text(this.options.title) : i.remove(), this.options.noClose && f.remove(), t = this.options.confirmType ? this.options.content + this.options.message : this.options.content, this.options.hasBtn) {
            for (t += '<div class="btn-wrap">', n = 0; n < this.options.btnText.length; n++) r = this.options.btnRole[n] === "cancel" ? "gray" : "blue", t += '<a href="javascript:;" data-role="' + this.options.btnRole[n] + '" class="btn_jh btnts cl btn btn-default-' + r + '">' + this.options.btnText[n] + "<\/a>";
            t += "<\/div>"
        }
        u.html(t).css("padding", this.options.padding)
    },
    closeDelay: function(n) {
        setTimeout($.proxy(this.hide, this), n)
    },
    destroy: function() {
        this.dialog.remove();
        this.options.hasMask && this.mask.hide();
        this.destroyed = !0;
        this.options.ondestroy && this.options.ondestroy.apply(this)
    },
    confirm: function() {
        this.options.confirm.apply(this)
    },
    cancel: function() {
        this.destroy();
        this.options.cancel.apply(this)
    }
};
$.fn.dialog = function(n) {
    return this.each(function() {
        new Dialog(this, n)
    })
};
$.fn.dialog.defaults = {
    dialogClass: "js-dialog",
    maskClass: "js-mask",
    template: '<table> <tr> <td class="edge top-edge" colspan="3"><\/td> <\/tr> <tr> <td class="edge left-edge"><\/td> <td class="center"> <div class="content"> <div class="hd"> <h2>提示<\/h2> <\/div> <div class="bd"><\/div> <div class="close"> <a href="javascript:;" class="js-close"> <\/a> <\/div> <\/div> <\/td> <td class="edge right-edge"><\/td> <\/tr> <tr> <td class="edge bottom-edge" colspan="3"><\/td> <\/tr> <\/table>',
    confirmType: !1,
    width: 450,
    height: "auto",
    zIndex: 999,
    hasMask: !0,
    hasTitle: !0,
    title: "提示",
    cotent: "",
    padding: "0 20px 20px 20px",
    hasBtn: !1,
    btnText: ["确定", "取消"],
    btnRole: ["confirm", "cancel"],
    message: "",
    confirm: function() {},
    cancel: function() {}
};
$.fn.dialog.Constructor = Dialog;
var isIE6 = !1,
    B = function(n) {
        var t = {
                msie: /\b(?:msie |ie |trident)/.test(n) && !/opera/.test(n),
                opera: /opera/.test(n),
                safari: /webkit/.test(n) && !/chrome/.test(n),
                firefox: /firefox/.test(n),
                chrome: /chrome/.test(n)
            },
            r = "",
            i;
        for (i in t)
            if (t[i]) {
                r = "safari" == i ? "version" : i;
                break
            } return t.version = r && RegExp("(?:" + r + ")[\\/: ]([\\d.]+)").test(n) ? RegExp.$1 : "0", t.ie = t.msie, t.ie6 = t.msie && parseInt(t.version, 10) == 6, t.ie7 = t.msie && parseInt(t.version, 10) == 7, t.ie8 = t.msie && parseInt(t.version, 10) == 8, t.ie9 = t.msie && parseInt(t.version, 10) == 9, t.ie10 = t.msie && parseInt(t.version, 10) == 10, t.win2000 = n.indexOf("windows nt 5.0") > 1 ? !0 : !1, t.winxp = n.indexOf("windows nt 5.1") > 1 ? !0 : !1, t.win2003 = n.indexOf("windows nt 5.2") > 1 ? !0 : !1, t.winvista = n.indexOf("windows nt 6.0") > 1 ? !0 : !1, t.win7 = n.indexOf("windows nt 6.1") > 1 ? !0 : !1, t.win8 = n.indexOf("windows nt 6.2") > 1 ? !0 : !1, t
    }(window.navigator.userAgent.toLowerCase()),
    Overlay = function(n, t) {
        t = $.extend({}, $.fn.overlay.defaults, t);
        this.options = t;
        this.overlay = $(n);
        this.init(t)
    };
Overlay.prototype = {
    constructor: Overlay,
    init: function() {
        this.overlay.addClass(this.options.className);
        this.overlay.attr("style", this.options.style);
        this.overlay.css({
            width: this.options.width,
            height: this.options.height,
            zIndex: this.options.zIndex
        });
        this.overlay.appendTo($(this.options.parent));
        this.setPosition();
        $(window).on("resize", $.proxy(this.setPosition, this))
    },
    show: function() {
        this.overlay.show()
    },
    hide: function() {
        this.overlay.hide()
    },
    remove: function() {
        this.overlay.remove()
    },
    blurHide: function() {
        $(document).on("click", $.proxy(this.hide, this));
        this.overlay.on("click", function(n) {
            n.stopPropagation()
        })
    },
    setPosition: function() {
        this.overlay.pin({
            base: this.options.align.base,
            selfXY: this.options.align.selfXY,
            baseXY: this.options.align.baseXY
        })
    }
};
$.fn.overlay = function(n) {
    return this.each(function() {
        new Overlay(this, n)
    })
};
$.fn.overlay.defaults = {
    className: "",
    style: "",
    width: "auto",
    height: "auto",
    zIndex: 999,
    parent: "body",
    align: {
        base: null,
        selfXY: ["50%", "50%"],
        baseXY: ["50%", "50%"]
    }
};
$.fn.overlay.Constructor = Overlay;
$.fn.pin = function(n) {
    var e;
    n = $.extend({
        base: null,
        selfXY: [0, 0],
        baseXY: [0, 0]
    }, n || {});
    var a = !n.base,
        t = !1,
        o = this.offsetParent(),
        i, r, u, f, s, h, c, l;
    this.css("position", "fixed");
    t = !0;
    isIE6 && (this.css("zoom", 1), o.css("zoom", 1));
    a ? (i = $(document).scrollLeft(), r = $(document).scrollTop(), u = getSize($(window), n.baseXY[0], "outerWidth"), f = getSize($(window), n.baseXY[1], "outerHeight")) : (e = o[0] === document.documentElement ? n.base.offset() : n.base.position(), i = e.left, r = e.top, u = getSize(n.base, n.baseXY[0], "outerWidth"), f = getSize(n.base, n.baseXY[1], "outerHeight"));
    s = getSize(this, n.selfXY[0], "outerWidth");
    h = getSize(this, n.selfXY[1], "outerHeight");
    c = (t ? 0 : i) + u - s;
    l = (t ? 0 : r) + f - h;
    this.css({
        left: c,
        top: l
    })
};
$.fn.pinCenter = function(n) {
    this.pin({
        base: n ? n.base : null,
        selfXY: ["50%", "50%"],
        baseXY: ["50%", "50%"]
    })
};
Info = function(n, t) {
    t = $.extend({}, $.fn.info.defaults, t);
    this.options = t;
    this.hasInit = !1;
    this.setup(n)
};
Info.prototype = {
    constructor: Info,
    init: function() {
        var n;
        this.info = new Overlay('<div class=""><div class="content"><div class="cont_icon"><\/div><div class="cont_bd"><\/div><\/div><\/div>', {
            className: this.options.dialogClass,
            width: this.options.width,
            height: this.options.height,
            zIndex: this.options.zIndex
        });
        this.options.hasMask && (n = $("." + this.options.maskClass), this.mask = n.length === 0 ? new Overlay(document.createElement("div"), {
            className: this.options.maskClass,
            width: isIE6 ? $(document).outerWidth() : "100%",
            height: isIE6 ? $(document).outerHeight() : "100%",
            zIndex: this.options.zIndex - 1,
            style: {
                position: isIE6 ? "absolute" : "fixed",
                top: 0,
                left: 0
            }
        }) : n);
        this.info.hide();
        this.options.hasMask && this.mask.hide();
        this.hasInit = !0
    },
    setup: function(n) {
        var t = this;
        if (n) $(n).on("click", function(n) {
            n.preventDefault();
            t.trigger()
        });
        else t.trigger();
        if (t.options.once) $(n).one("click", function(n) {
            n.preventDefault();
            t.options.once()
        })
    },
    trigger: function() {
        this.hasInit || this.init();
        this.show();
        this.infoCall()
    },
    infoCall: function() {
        var n = this;
        $.when(n.options.callback()).done(function() {
            n.closeDelay(n.options.duration)
        })
    },
    hide: function() {
        this.options.beforeHide && this.options.beforeHide.apply(this);
        this.info.hide();
        this.options.hasMask && this.mask.hide();
        this.options.afterHide && this.options.afterHide.apply(this);
        this.options.needDestroy && this.destroy()
    },
    closeDelay: function(n) {
        setTimeout($.proxy(this.hide, this), n)
    },
    show: function() {
        this.options.beforeShow && this.options.beforeShow.apply(this);
        this.info.setPosition();
        this.info.show();
        this.options.hasMask && this.mask.show();
        this.options.afterShow && this.options.afterShow.apply(this);
        var n = $(this.info.overlay).find(".cont_icon"),
            t = $(this.info.overlay).find(".cont_bd");
        n.addClass(this.options.typeClass);
        t.text(this.options.typeText)
    }
};
$.fn.info = function(n) {
    return this.each(function() {
        new Info(this, n)
    })
};
$.fn.info.defaults = {
    dialogClass: "js-info",
    maskClass: "js-info-mask",
    typeClass: "info",
    typeText: "服务器忙，请稍后重试",
    width: 240,
    height: 50,
    zIndex: 999,
    hasMask: !0,
    duration: 2e3,
    callback: {}
};
$.fn.info.Constructor = Info;
var dialog_h, boxdiv_t, dialog_w = 337,
    Browser_w = $(window).width(),
    Browser_h = $(window).height(),
    boxdiv_l = (Browser_w - dialog_w) / 2,
    _types = {
        error: "error",
        info: "info",
        warn: " warning",
        auto: "auto",
        confirm: "question"
    },
    _closeTimer = null,
    _bgid = "#Masklayer";
$(function() {
    $(window).scroll(function() {
        var n = boxdiv_t + ScollPostion().top + "px";
        $("#Cxc_Dialog").animate({
            top: n
        }, {
            duration: 600,
            queue: !1
        })
    });
    window.onresize = function() {
        var t = $(window).width(),
            i = $(window).height(),
            r = (t - dialog_w) / 2,
            n;
        boxdiv_t = (i - dialog_h) / 2;
        n = boxdiv_t + ScollPostion().top;
        $("#Cxc_Dialog").css("left", r);
        $("#Cxc_Dialog").css("top", n)
    }
});
isIE = /msie/i.test(navigator.userAgent);
EmPopupBox = {},
    function(n) {
        var i, r, t;
        n.Hide = function() {
            t && t.remove();
            r && r.hide()
        };
        n.Show = function(u) {
            function s(n) {
                var i = n.messages.length;
                t.html("<h3>" + n.title + '<i class="btn-close"><\/i><\/h3><div class="popup-component-body">' + (n.messages[0].Title ? '<div class="message-title" style="text-align: left;"><div class="title-text" style="display: block;padding: 0px;height: 40px;"><div title="' + n.messages[0].Title + '" style="text-align: center;width: 100%;height: 40px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align: center;padding: 0px 25px;box-sizing: border-box;">' + n.messages[0].Title + "<\/div><\/div><\/div>" : "") + '<ul class="message-list"><\/ul><\/div>');
                $.each(n.messages, function(n, r) {
                    var u = $.extend({}, o, r),
                        f = $('<li data-title="' + u.Title + '" style="width:500px;"><div class="popup-message-content"><div class="content-wrap"><div class="content-text">' + u.Content + "<\/div><\/div><\/div><\/li>"),
                        e = f.find(".popup-message-content"),
                        s = f.find(".content-wrap");
                    i == 1 && u.Icon && ($('<div class="content-icon"><span class="icon ' + u.Icon + '"><\/span><\/div').insertBefore(s), e.css("padding-left", "80px"));
                    u.ShowType == 0 ? f.append($('<div class="popup-component-btn" canclose="' + u.CanClose + '" eid="' + u.EIDStr + '" showcount="' + u.ShowCount + '"><button class="btn-orange vbtn-confirm" type="button">' + u.BtnText + "<\/button><\/div>")) : u.ShowType == 4 ? f.append($('<div class="popup-component-btn" canclose="' + u.CanClose + '" eid="' + u.EIDStr + '" showcount="' + u.ShowCount + '" urlweb="' + encodeURIComponent(u.UrlWeb) + '"><button class="btn-orange vbtn-confirm link-confrim" type="button">' + u.LinkText + "<\/button><\/div>")) : f.append($('<div class="popup-component-btn" canclose="' + u.CanClose + '" eid="' + u.EIDStr + '" showcount="' + u.ShowCount + '" urlweb="' + encodeURIComponent(u.UrlWeb) + '"><button class="btn-orange vbtn-link" type="button" >' + u.LinkText + '<\/button><button class="btn-white vbtn-confirm" type="button">' + u.BtnText + "<\/button><\/div>"));
                    u.IsExtra == 1 && $('<span class="message-tip"><span class="tip-message-box"><\/span><span >下次不再弹出此消息提示<\/span><\/span>').appendTo(f);
                    t.find(".message-list").append(f);
                    u.Title && t.removeClass("small").removeClass("normal").addClass("large")
                });
                i > 1 && (t.find(".message-title").prepend($('<span class="left-arrow" style="position:absolute;top: 12px;left: 10px;"><\/span>')).append($('<span class="right-arrow active" style="position:absolute;top: 12px;right: 5px;"><\/span>')), e(0))
            }

            function h() {
                t.hasClass("large") || t.find(".popup-message-content .content-wrap").each(function() {
                    var n = $(this),
                        i = n.parents(".popup-message-content").css("padding-left"),
                        t;
                    n.css({
                        position: "absolute",
                        top: "50%",
                        paddingTop: 0,
                        marginTop: -n.height() / 2 + "px",
                        left: i
                    });
                    t = n.find(".content-icon");
                    t.length > 0 && n.css({
                        paddingLeft: t.width() + "px"
                    })
                })
            }

            function c() {
                function u() {
                    var n = t.find(".left-arrow"),
                        r = t.find(".right-arrow"),
                        u = t.find(".message-list li").length;
                    u > 1 ? i === 0 ? (n.removeClass("active"), r.addClass("active")) : i === u - 1 ? (n.addClass("active"), r.removeClass("active")) : (n.addClass("active"), r.addClass("active")) : (n.remove(), r.remove())
                }
                var i = 0,
                    r = !1;
                t.off("click");
                t.on("click", ".btn-close", function(i) {
                    t.off("click");
                    f.onCancel(i);
                    n.Hide()
                });
                t.on("click", ".message-tip", function() {
                    var n = $(this).find(".tip-message-box");
                    n.toggleClass("checked")
                });
                t.on("click", ".vbtn-confirm", function(o) {
                    if (!r) {
                        var l = $(o.currentTarget),
                            c = t.find(".message-list"),
                            s = c.children(),
                            a = s.width(),
                            h = s.length,
                            v = l.hasClass("link-confrim");
                        f.onConfirmBtn(o, v);
                        h == 1 ? n.Hide() : h > 1 && (s.eq(i).remove(), i == h - 1 && (i = 0), e(i), u(), c.css({
                            left: -1 * i * a + "px"
                        }))
                    }
                });
                t.on("click", ".vbtn-link", function(n) {
                    f.onLinkBtn(n)
                });
                t.on("click", ".left-arrow", function() {
                    if (i !== 0 && !r) {
                        r = !0;
                        var n = t.find(".message-list"),
                            f = n.css("left").replace("px", ""),
                            o = n.children().width();
                        i--;
                        e(i);
                        u();
                        n.animate({
                            left: +f + o + "px"
                        }, function() {
                            r = !1
                        })
                    }
                });
                t.on("click", ".right-arrow", function() {
                    var n = t.find(".message-list"),
                        f = n.children(),
                        o, s;
                    i === f.length - 1 || r || (r = !0, o = n.css("left").replace("px", ""), s = f.width(), i++, e(i), u(), n.animate({
                        left: +o - s + "px"
                    }, function() {
                        r = !1
                    }))
                })
            }

            function e(n) {
                var r = t.find(".title-text"),
                    u = t.find(".message-list li"),
                    f = u.length,
                    i = u.eq(n).data("title");
                f > 1 ? r.html('<span title="' + i + '" style="width: 380px;display: inline-block;height: 40px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align: center;margin-left: 40px;">' + i + '<\/span><span style="height: 40px;position: absolute;">(' + (n + 1) + "/" + f + ")<\/span>") : r.html('<div title="' + i + '" style="text-align: center;width: 100%;height: 40px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align: center;padding: 0px 25px;box-sizing: border-box;">' + i + "<\/div>")
            }
            if (u && u.messages && u.messages.length) {
                var f = {
                        title: "提示信息",
                        messages: [],
                        popClass: "large",
                        onLinkBtn: function() {},
                        onConfirmBtn: function() {},
                        onCancel: function() {}
                    },
                    o = {
                        Icon: "",
                        Title: "",
                        Content: "",
                        BtnText: "确定",
                        LinkText: "查看详情",
                        UrlWeb: "",
                        EIDStr: "",
                        ShowType: 0,
                        ShowCount: -1,
                        IsExtra: 0
                    };
                f = $.extend({}, f, u);
                i = $(document.body);
                r = i.children("div.popup-component-mask");
                r.length == 0 && (i.append('<div class="popup-component-mask" style="display:none;"><\/div>'), r = i.children("div.popup-component-mask"));
                t = i.children("div.popup-component-box");
                t.length == 0 && (i.append('<div class="popup-component-box ' + f.popClass + '" style="display:none;width: 500px;"><\/div>'), t = i.children("div.popup-component-box"));
                s(f);
                t.show();
                h();
                c();
                r.show()
            }
        }
    }(EmPopupBox) %
