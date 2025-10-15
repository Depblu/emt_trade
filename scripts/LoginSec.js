function macCallback_loginResult(n, t, i, r, u, f, e, o) {
    var s = Page_LoginSec.LoginPanelHS;
    n == 0 ? utools.loadAjaxV2({
        url: "/Login/MacCreateLogin",
        data: {
            userId: r,
            userName: u,
            sessionId: f,
            yybdm: e,
            yjxx: o
        },
        success: function(n) {
            var i, u, t, f;
            n ? n.Status == 0 ? (i = s.loginedUrl, global_returnurl && (u = global_returnurl.toLowerCase(), (u.indexOf("/hk/") == 0 || u.indexOf("/usa/") == 0) && (i = global_returnurl)), t = i.toLowerCase(), t.indexOf("stockoptiontrade") > -1 || t.indexOf("/") != 0 ? i = "/Trade/Buy" : (t.indexOf("/more/m") > -1 || t.indexOf("/margin") > -1 || t.indexOf("/mopenmarketprice") > -1 || t.indexOf("/mopenkcb") > -1) && (i = "/MarginTrade/Buy"), s.setZjzh(r), f = store.get("ggqq_zjzh"), store.clearAll(), f && store.set("ggqq_zjzh", f), setTimeout(function() {
                window.location.href = i
            }, 50)) : (s.alertMsg(n.Message), $btnConfirm.focus(), s.checkZjzh()) : (s.alertMsg("网络繁忙，请稍候再试！"), s.isvcode = 1, setTimeout(function() {
                s.showVCOP()
            }, 1e3))
        },
        error: function(n) {
            console && console.log(n)
        },
        complete: function() {
            s.unLockConfirm()
        }
    }) : (s.alertMsg(t), s.unLockConfirm())
}
var Pop_SMSSecurity = {},
    Page_LoginSec, Pop_AccountLimitGuide;
(function(n) {
    function u() {
        return $("#popSMSSecurity")
    }

    function s() {
        var i = u(),
            n = i.find(".vbtnPhCode"),
            t;
        n.css({
            color: "#ccc",
            background: "#eee"
        });
        n.data("cd", 60);
        n.text("重新发送(60)");
        t = setInterval(function() {
            var i = parseInt(n.data("cd"));
            i--;
            n.data("cd", i).text("重新发送(" + i + ")");
            i == 0 && (clearInterval(t), n.text("获取验证码"), n.css({
                color: "#000",
                background: "#fff"
            }))
        }, 1e3)
    }

    function f() {
        var n = u();
        i = Math.random();
        n.find(".imgHKSecurity").attr("src", "/Login/YZM?randNum=" + i)
    }

    function e() {
        var n = u();
        n.off("click");
        $(".option-login-popup-layer,.option-login-popup").remove()
    }
    var t = EmUtil.MessageMap,
        h = EmUtil.LoadingTool,
        c = EmUtil.MessageBox,
        o = EmUtil.NetHelper,
        i = "",
        r = "";
    n.tmpCheckSuccessCallback = null;
    n.Show = function(h, c) {
        function a() {
            var n = u(),
                h;
            n.off();
            n.on("keyup", ".vtxt-smscheck-mobileno,.vtxt-smscheck-sms", function(n) {
                var t = $(n.currentTarget),
                    i = t.val();
                /[^0-9]/g.test(i) && t.val(i.replace(/[^0-9]/g, ""))
            }).on("blur", ".vtxt-smscheck-mobileno,.vtxt-smscheck-sms", function(n) {
                var t = $(n.currentTarget),
                    i = parseInt(t.val());
                isNaN(i) && t.val("")
            });
            n.on("click", ".vbtn-smscheck-changeimg", function() {
                f()
            });
            n.on("click", ".close", function() {
                e()
            });
            n.on("click", ".vbtn-smscheck-confirm", function() {
                var e = $(this),
                    f, i, u;
                e.text() == "确认" && (f = n.find(".vtxt-smscheck-sms").val(), i = n.find(".vtxt-smscheck-mobileno").val().trim(), f || (u = "请输入短信验证码"), i && /^(\d{4})$/.test(i) || (u = "请输入绑定手机号的末4位"), u ? n.find(".warning").text(u) : o.loadAjax({
                    url: "/Login/GetCheckMsgVerCode_12",
                    isLoading: !0,
                    data: {
                        Vercode: f,
                        MobileNo: EMTradeEncrypt.encrypt(i),
                        User_id: r
                    },
                    beforeSend: function() {
                        n.find(".warning").text("")
                    },
                    success: function(i) {
                        i ? i.Status == 0 ? (n.find(".warning").text("验证成功"), n.find(".vbtn-smscheck-confirm").hide(), setTimeout(function() {
                            c && c(r)
                        }, 2e3)) : n.find(".warning").text(i.Message || t.internetError) : n.find(".warning").text(t.internetError)
                    },
                    error: function() {
                        n.find(".warning").text(t.internetError)
                    }
                }))
            });
            h = n.find(".vbtnPhCode");
            h.on("click", function() {
                if (h.text() == "获取验证码") {
                    var c = n.find(".vtxt-smscheck-yzm").val().trim(),
                        e = n.find(".vtxt-smscheck-mobileno").val().trim(),
                        u;
                    c || (u = "请输入图形验证码");
                    e && /^(\d{4})$/.test(e) || (u = "请输入绑定手机号的末4位");
                    u ? n.find(".warning").text(u) : o.loadAjax({
                        url: "/Login/GetMsgVerifyCode_12",
                        isLoading: !1,
                        data: {
                            vCode: c,
                            randNumber: i,
                            MobileNo: EMTradeEncrypt.encrypt(e),
                            User_id: r
                        },
                        beforeSend: function() {
                            n.find(".warning").text("");
                            h.text("正在发送...")
                        },
                        success: function(i) {
                            i ? i.Status == 0 ? (n.find(".warning").text("验证码已发出，请留意您的手机短信"), s()) : (h.text("获取验证码"), n.find(".warning").text(i.Message || t.internetError), f()) : (h.text("获取验证码"), n.find(".warning").text(t.internetError), f())
                        },
                        error: function() {
                            h.text("获取验证码");
                            n.find(".warning").text(t.internetError)
                        }
                    })
                }
            })
        }
        r = h;
        n.tmpCheckSuccessCallback = c;
        f();
        e();
        var l = '<div class="option-login-popup-layer"><\/div><div id="popSMSSecurity" class="option-login-popup" style=""><i class="close"><\/i><h3>验证手机号<\/h3><p style="width:331px;color:#666;">由于密码错误次数过多，为了您的账户安全，请先验证资金账号绑定的手机号码再登录<\/p><ul><li><div class="inline sms-title">手机尾号<\/div><div class="inline sms-content"><input style="width:241px;" class="coninput vtxt-smscheck-mobileno" type="text" placeholder="请输入绑定手机号的末4位" value="" maxlength="4"  autocomplete="off" tabindex="1"><\/div><\/li><li><div class="inline sms-title">图形验证码<\/div><div class="inline sms-content"><input class="coninput vtxt-smscheck-yzm" style="width:131px;" type="text" placeholder="请输入图形验证码" maxlength="4" tabindex="2" autocomplete="off"><\/div><p class="yzm-wrap vbtn-smscheck-changeimg" style="width:99px;"><img class="imgHKSecurity" title="换一张" alt="加载中.." src="/Login/YZM?randNum=' + i + '" style="margin-top: 3px;width: 80px;"><i class="refrash" style="margin-top: 3px;margin-left: none;"><\/i><\/p><\/li><li><div class="inline sms-title">短信验证码<\/div><div class="inline sms-content"><input class="coninput vtxt-smscheck-sms" style="width:131px;" type="text" maxlength="6" placeholder="请输入短信验证码" maxlength="10" tabindex="3"><button class="vbtnPhCode" style="border: 1px solid #ccc;border-radius: 3px;vertical-align: middle;margin-left: 5px;padding: 9px 0;width: 105px;background: #fff;cursor: pointer;height:35px;">获取验证码<\/button><\/div><\/li><li style="text-align:right;"><a style="font-size: 13px;color: #0079D5;text-decoration: underline;" target="_blank" ref="noopener noreferrer" href="https://kh.18.cn/mobile">重绑手机号<\/a><\/li><li><p class="warning"><\/p><\/li><li><button class="login-btn vbtn-smscheck-confirm" style="width:331px;">确认<\/button><\/li><\/ul><\/div>';
        $(l).appendTo(document.body);
        a()
    };
    n.Hide = function() {
        e()
    }
})(Pop_SMSSecurity);
Page_LoginSec = {},
    function(n) {
        function y() {
            var c = this;
            this.noticeCanClose = !0;
            this.isvcode = forceVCode;
            this.forceVCode = forceVCode;
            this.randNum = "";
            this.loginUrl = "/Login/Authentication";
            this.loginedUrl = "/Trade/Buy";
            var l = "您输入的信息有误，请重新输入!",
                v = "eastmoney_txzq_zjzh",
                o = $("#txtZjzh"),
                h = $("#txtPwd"),
                s = $("#txtValidCode"),
                f = $("#ulSuggest"),
                w = $("#linkForgetAccount"),
                y = $("#linkForgetPwd"),
                p = $("#linkUnLockAccount"),
                b = $("#ertips"),
                n = $("#btnConfirm"),
                k = $("#liChoseOnlineTime");
            this.initialize = function() {
                this.checkToShowFutureNeedSecTip();
                this.isvcode && (this.getVcodeImage(), this.showVCOP());
                this.initzjzh();
                this.notice();
                this.fixedKeybord();
                this.bindZjzh();
                k.show()
            };
            this.bindZjzh = function() {
                var n = this;
                o.on("click", function() {
                    n.showZhList()
                }).keydown(function(n) {
                    n.keyCode == 9 && f.hide()
                });
                $("body").on("click", function(n) {
                    f.is(":visible") && (n.target.id != o.attr("id") && f.hide(), utools.stopEventBubble(n))
                })
            };
            this.alertMsg = function(n) {
                b.html(n).css("visibility", "visible")
            };
            this.clearMsg = function() {
                b.css("visibility", "hidden")
            };
            this.showVCOP = function() {
                var n = this;
                i.find(".yzm").is(":hidden") ? (i.find(".yzm").show(), s.val(""), n.getVcodeImage()) : n.updateVcode()
            };
            this.hideVCOP = function() {
                i.find(".yzm").hide();
                s.val("")
            };
            this.getScripte = function(n, t, i) {
                $.ajax({
                    type: "POST",
                    url: n + "?" + (new Date).getTime(),
                    data: t,
                    success: function(n) {
                        i && i(n)
                    },
                    error: function(n) {
                        console && console.log(n)
                    }
                })
            };
            this.lockConfirm = function() {
                n.text("正在登录...").addClass("btn-yellow")
            };
            this.unLockConfirm = function() {
                n.text("登 录").removeClass("btn-yellow")
            };
            this.valiate = function() {
                var f = this,
                    a = o.val().trim(),
                    y = h.val().trim(),
                    p = i.find("input[type='radio']:checked").val(),
                    v = s.val().trim(),
                    c;
                if (this.clearMsg(), a) {
                    if (!/^[0-9]{12}$/.test(a)) {
                        this.alertMsg("资金账号输入不合法，请重新输入");
                        return
                    }
                } else {
                    this.alertMsg("请输入资金账号");
                    return
                }
                if (!y) {
                    this.alertMsg("请输入交易密码");
                    return
                }
                if (this.isvcode && !v) {
                    this.updateVcode();
                    this.alertMsg("请输入图形验证码");
                    return
                }
                c = {
                    userId: a,
                    password: EMTradeEncrypt.encrypt(y),
                    randNumber: this.randNum,
                    identifyCode: v,
                    duration: p,
                    authCode: "",
                    type: "Z"
                };
                n.text("正在登录...").addClass("btn-yellow");
                t.checkSec(v).done(function() {
                    !u || u && r ? (c.secInfo = e, utools.loadAjaxV2({
                        url: f.loginUrl,
                        data: c,
                        success: function(t) {
                            var r, e, i, u;
                            if (t != null && t != "")
                                if (t.Status == "0") {
                                    r = f.loginedUrl;
                                    global_returnurl && (e = global_returnurl.toLowerCase(), e.indexOf("/hk/") != 0 && e.indexOf("/usa/") != 0 && (r = global_returnurl));
                                    i = r.toLowerCase();
                                    i.indexOf("stockoptiontrade") > -1 || i.indexOf("/") != 0 ? r = "/Trade/Buy" : (i.indexOf("/more/m") > -1 || i.indexOf("/margin/") > -1 || i.indexOf("/marginpersonal/") > -1 || i.indexOf("/marginsearch/") > -1 || i.indexOf("/margintrade/") > -1 || i.indexOf("/margintransfer/") > -1 || i.indexOf("/mopenmarketprice") > -1 || i.indexOf("/mopenkcb") > -1) && (r = "/MarginTrade/Buy");
                                    f.setZjzh(c.userId);
                                    var o = store.get("ggqq_zjzh"),
                                        a = store.get("sec_tip0"),
                                        v = store.get("zhfx_profitconflicttip");
                                    store.clearAll();
                                    o && store.set("ggqq_zjzh", o);
                                    a && store.set("sec_tip0", a);
                                    v && store.set("zhfx_profitconflicttip", v);
                                    EmUtil.ExSession.clear();
                                    setTimeout(function() {
                                        window.location.href = r
                                    }, 50)
                                } else t.ErrCode == -1 ? (f.setZjzh(c.userId), Pop_AccountLimitGuide.dealAcctOpenState(t.Data)) : t.ErrCode == -3 ? EmUtil.MessageBox.error(t.Message || l) : t.ErrCode == -11 ? Pop_SMSSecurity.Show(c.userId, function() {
                                    Pop_SMSSecurity.Hide();
                                    h.val("");
                                    s.val("");
                                    f.updateVcode()
                                }) : t.Message ? (u = t.Message, u.indexOf("帐户状态被锁定") != -1 ? f.alertMsg("帐户状态被锁定,不允许登陆！") : u.indexOf("您的资金账号已被网页端临时限制") != -1 ? f.alertMsg(u) : f.alertMsg(l)) : f.alertMsg(l), n.focus(), f.checkZjzh();
                            else f.alertMsg("网络繁忙，请稍候再试！"), f.isvcode = 1, setTimeout(function() {
                                f.showVCOP()
                            }, 1e3)
                        },
                        error: function(n) {
                            console && console.log(n)
                        },
                        complete: function() {
                            n.text("登 录").removeClass("btn-yellow")
                        }
                    })) : (f.alertMsg("请安装安全控件"), n.text("登 录").removeClass("btn-yellow"))
                })
            };
            this.checkZjzh = function() {
                var n = this;
                this.getScripte("/Login/CheckZjzh", {
                    zjzh: o.val()
                }, function(t) {
                    t != null && t != "" && (t == "1" ? (n.isvcode = 1, n.showVCOP()) : (n.isvcode = 0, n.hideVCOP()))
                })
            };
            this.bindSubmit = function() {
                n.off();
                h.off();
                s.off();
                var i = this;
                if (i.noticeCanClose) {
                    if (u && !r) t.maskPwd(function() {
                        t.checkSecUntilSuccess().done(function() {
                            t.checkBrowser();
                            c.bindSubmit();
                            c.updateVcode()
                        })
                    }), t.checkBrowser();
                    else {
                        t.showPwd();
                        n.on("click", function(t) {
                            n.text().indexOf("正在登录") == -1 && i.valiate();
                            utools.stopEventBubble(t)
                        });
                        h.on("keypress", function(n) {
                            n.keyCode == "13" && i.valiate();
                            utools.stopEventBubble(n)
                        });
                        s.on("keypress", function(n) {
                            n.keyCode == "13" && i.valiate();
                            utools.stopEventBubble(n)
                        });
                        this.forceVCode != "1" && h.focus(function() {
                            i.checkZjzh()
                        })
                    }
                    w.attr("href", "/Login/ForgetAccount");
                    y.attr("href", y.attr("vhref"));
                    p.attr("href", p.attr("vhref"))
                } else {
                    n.on("click", function(n) {
                        i.notice();
                        utools.stopEventBubble(n)
                    });
                    h.on("keypress", function(n) {
                        n.keyCode == "13" && i.notice();
                        utools.stopEventBubble(n)
                    });
                    s.on("keypress", function(n) {
                        n.keyCode == "13" && i.notice();
                        utools.stopEventBubble(n)
                    });
                    w.removeAttr("target").off("click").on("click", function() {
                        i.notice()
                    });
                    y.removeAttr("target").off("click").on("click", function() {
                        i.notice()
                    });
                    p.removeAttr("target").off("click").on("click", function() {
                        i.notice()
                    })
                }
            };
            this.getVcodeImage = function() {
                var n = this;
                n.updateVcode();
                $("#imgValidCode, .yzm a").click(function(t) {
                    t.stopImmediatePropagation();
                    n.updateVcode()
                })
            };
            this.updateVcode = function() {
                var n = this;
                this.randNum = Math.random();
                $("#imgValidCode").attr("src", "/Login/YZM?randNum=" + this.randNum)
            };
            this.initzjzh = function() {
                var t = this.getZjzh() || [],
                    n;
                t && t.length > 0 && (n = t[0].split("|"), n && n.length > 1 ? o.val(n[0]) : o.val(n[0]))
            };
            this.getZjzh = function() {
                var n = cookies.get(v);
                return n && (n = (new Base64).decode(n).split(",")), n
            };
            this.setZjzh = function(n) {
                var u = n.trim(),
                    f = u + "|",
                    t = this.getZjzh() || [],
                    i, r, e;
                if (f) {
                    for (i = 0; i < t.length; i++) r = t[i].split("|"), e = r.length > 1 ? r[0] : "", u == e && t.splice(i, 1);
                    t.unshift(f);
                    cookies.set(v, (new Base64).encode(t.join(",")), 7776e3)
                }
            };
            this.delZjzh = function(n) {
                var t = this.getZjzh() || [],
                    i;
                n && (i = $.inArray(n, t), i >= 0 && t.splice(i, 1), cookies.set(v, (new Base64).encode(t.join(",")), 7776e3))
            };
            this.showZhList = function() {
                var r = this,
                    t = this.getZjzh(),
                    i, n, u;
                if (t && t.length > 0) {
                    for (i = "", n = 0; n < t.length; n++) {
                        if (n > 8) break;
                        u = t[n].split("|");
                        i += "<li data-value=" + (new Base64).encode(t[n]) + ">" + t[n].split("|")[0] + '<i class="del"><\/i><\/li>'
                    }
                    f.html(i).show();
                    $("li", f).on("click", function(n) {
                        var i, u, t;
                        n.target.className == "del" ? (i = $(this).attr("data-value"), r.delZjzh((new Base64).decode(i)), $(this).remove(), $("li", f).length === 0 && f.hide()) : (u = $(this).attr("data-value"), t = (new Base64).decode(u).split("|"), t && t.length > 1 && o.val(t[0]), f.hide());
                        utools.stopEventBubble(n)
                    })
                } else f.hide()
            };
            this.fixedKeybord = function() {
                window.fixedLeft = 209
            };
            this.isIE6 = function() {
                navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" && ($(".ie6tips").show(), $(".login-box .boxop .inner fieldset").hide())
            };
            this.checkToShowFutureNeedSecTip = function() {
                if (a) {
                    $("#tip_futureneedsec").show();
                    $("#tip_futureneedsec").off("click").on("click", function() {
                        try {
                            window.sendTrackLog && window.sendTrackLog("button", "click", "zxjydl.db.yzkj")
                        } catch (i) {}
                        var n = t.tipHtml();
                        EmUtil.MessageBox.show({
                            title: "温馨提示",
                            message: n,
                            buttonLabels: ["我知道了", "安装控件"],
                            buttonStyles: ["btn-red-white", "btn-red"],
                            callback: function(n) {
                                n == 1 && (location.href = __webSecurityDownloadPath, window.sendTrackLog && window.sendTrackLog("button", "click", "zxjydl.db.yztc.azkj"))
                            }
                        })
                    })
                }
            };
            this.notice = function() {
                var n = EmUtil.NetHelper.postJson({
                        url: "/Login/GetHSLayerNotice",
                        isLoading: !1,
                        checkLogin: !1,
                        success: function(n) {
                            n && n.Status == 0 && n.Data && n.Data.length > 0 && EmPopupBox.Show({
                                messages: n.Data
                            })
                        }
                    }),
                    i = t.checkSec();
                $.when(n, i).always(function() {
                    c.bindSubmit()
                })
            }
        }

        function p() {
            var a = this;
            this.noticeCanClose = !0;
            this.isvcode = forceVCode;
            this.forceVCode = forceVCode;
            this.randNum = "";
            this.loginUrl = "/Login/MacAuthentication";
            this.loginedUrl = "/Trade/Buy";
            var o = "eastmoney_txzq_zjzh",
                r = $("#txtZjzh"),
                e = $("#txtPwd"),
                u = $("#txtValidCode"),
                n = $("#ulSuggest"),
                c = $("#linkForgetAccount"),
                s = $("#linkForgetPwd"),
                h = $("#linkUnLockAccount"),
                l = $("#ertips"),
                f = $("#btnConfirm");
            this.initialize = function() {
                this.isvcode && (this.getVcodeImage(), this.showVCOP());
                this.initzjzh();
                this.notice();
                this.fixedKeybord();
                this.bindZjzh();
                t.showPwd()
            };
            this.bindZjzh = function() {
                var t = this;
                r.on("click", function() {
                    t.showZhList()
                }).keydown(function(t) {
                    t.keyCode == 9 && n.hide()
                });
                $("body").on("click", function(t) {
                    n.is(":visible") && (t.target.id != r.attr("id") && n.hide(), utools.stopEventBubble(t))
                })
            };
            this.alertMsg = function(n) {
                l.html('<div class="error">' + n + "<\/div>").css("visibility", "visible")
            };
            this.clearMsg = function() {
                l.css("visibility", "hidden")
            };
            this.showVCOP = function() {
                var n = this;
                i.find(".yzm").is(":hidden") ? (i.find(".yzm").show(), u.val(""), n.getVcodeImage()) : n.updateVcode()
            };
            this.hideVCOP = function() {
                i.find(".yzm").hide();
                u.val("")
            };
            this.getScripte = function(n, t, i) {
                $.ajax({
                    type: "POST",
                    url: n + "?" + (new Date).getTime(),
                    data: t,
                    success: function(n) {
                        i && i(n)
                    },
                    error: function(n) {
                        console && console.log(n)
                    }
                })
            };
            this.lockConfirm = function() {
                f.text("正在登录...").addClass("btn-yellow")
            };
            this.unLockConfirm = function() {
                f.text("登 录").removeClass("btn-yellow")
            };
            this.valiate = function() {
                var n = this,
                    t = r.val().trim(),
                    o = e.val().trim(),
                    s = u.val().trim(),
                    i;
                if (this.clearMsg(), t) {
                    if (!/^[0-9]{12}$/.test(t)) {
                        this.alertMsg("资金账号输入不合法，请重新输入");
                        return
                    }
                } else {
                    this.alertMsg("请输入资金账号");
                    return
                }
                if (!o) {
                    this.alertMsg("请输入交易密码");
                    return
                }
                if (this.isvcode && !s) {
                    this.updateVcode();
                    this.alertMsg("请输入验证码");
                    return
                }
                i = {
                    userId: t,
                    password: o,
                    randNumber: this.randNum,
                    identifyCode: s,
                    type: "Z"
                };
                n.lockConfirm();
                utools.loadAjaxV2({
                    url: n.loginUrl,
                    data: i,
                    success: function(r) {
                        if (r != null && r != "")
                            if (r.Status == "0") external.OnClickEvent("return(false && [].push('#type=JY&&marketType='1'&userId='" + t + "'&password='" + o + "'));");
                            else {
                                if (r.ErrCode == -1) n.setZjzh(i.userId), Pop_AccountLimitGuide.dealAcctOpenState(r.Data);
                                else if (r.ErrCode == -11) Pop_SMSSecurity.Show(i.userId, function() {
                                    Pop_SMSSecurity.Hide();
                                    e.val("");
                                    u.val("");
                                    n.updateVcode()
                                });
                                else if (r.Message) {
                                    var s = r.Message;
                                    s.indexOf("帐户状态被锁定") != -1 ? n.alertMsg("帐户状态被锁定,不允许登陆！") : s.indexOf("您的资金账号已被网页端临时限制") != -1 ? n.alertMsg(s) : n.alertMsg("您输入的信息有误，请重新输入!")
                                } else n.alertMsg("您输入的信息有误，请重新输入!");
                                f.focus();
                                n.checkZjzh();
                                n.unLockConfirm()
                            }
                        else n.alertMsg("网络繁忙，请稍候再试！"), n.isvcode = 1, setTimeout(function() {
                            n.showVCOP()
                        }, 1e3), n.unLockConfirm()
                    },
                    error: function(t) {
                        console && console.log(t);
                        n.unLockConfirm()
                    },
                    complete: function() {}
                })
            };
            this.checkZjzh = function() {
                var n = this;
                this.getScripte("/Login/CheckZjzh", {
                    zjzh: r.val()
                }, function(t) {
                    t != null && t != "" && (t == "1" ? (n.isvcode = 1, n.showVCOP()) : (n.isvcode = 0, n.hideVCOP()))
                })
            };
            this.bindSubmit = function() {
                f.off("click");
                e.off("keypress");
                u.off("keypress");
                var n = this;
                if (n.noticeCanClose) {
                    f.on("click", function(t) {
                        f.text().indexOf("正在登录") == -1 && n.valiate();
                        utools.stopEventBubble(t)
                    });
                    e.on("keypress", function(t) {
                        t.keyCode == "13" && n.valiate();
                        utools.stopEventBubble(t)
                    });
                    u.on("keypress", function(t) {
                        t.keyCode == "13" && n.valiate();
                        utools.stopEventBubble(t)
                    });
                    this.forceVCode != "1" && e.focus(function() {
                        n.checkZjzh()
                    });
                    c.attr("href", "/Login/ForgetAccount");
                    s.attr("href", s.attr("vhref"));
                    h.attr("href", h.attr("vhref"))
                } else {
                    f.on("click", function(t) {
                        n.notice();
                        utools.stopEventBubble(t)
                    });
                    e.on("keypress", function(t) {
                        t.keyCode == "13" && n.notice();
                        utools.stopEventBubble(t)
                    });
                    u.on("keypress", function(t) {
                        t.keyCode == "13" && n.notice();
                        utools.stopEventBubble(t)
                    });
                    c.removeAttr("target").off("click").on("click", function() {
                        n.notice()
                    });
                    s.removeAttr("target").off("click").on("click", function() {
                        n.notice()
                    });
                    h.removeAttr("target").off("click").on("click", function() {
                        n.notice()
                    })
                }
            };
            this.getVcodeImage = function() {
                var n = this;
                n.updateVcode();
                $("#imgValidCode, .yzm a").click(function(t) {
                    t.stopImmediatePropagation();
                    n.updateVcode()
                })
            };
            this.updateVcode = function() {
                var n = this;
                this.randNum = Math.random();
                $("#imgValidCode").attr("src", "/Login/YZM?randNum=" + this.randNum)
            };
            this.initzjzh = function() {
                var t = this.getZjzh() || [],
                    n;
                t && t.length > 0 && (n = t[0].split("|"), n && n.length > 1 ? r.val(n[0]) : r.val(n[0]))
            };
            this.getZjzh = function() {
                var n = cookies.get(o);
                return n && (n = (new Base64).decode(n).split(",")), n
            };
            this.setZjzh = function(n) {
                var u = n.trim(),
                    f = u + "|",
                    t = this.getZjzh() || [],
                    i, r, e;
                if (f) {
                    for (i = 0; i < t.length; i++) r = t[i].split("|"), e = r.length > 1 ? r[0] : "", u == e && t.splice(i, 1);
                    t.unshift(f);
                    cookies.set(o, (new Base64).encode(t.join(",")), 7776e3)
                }
            };
            this.delZjzh = function(n) {
                var t = this.getZjzh() || [],
                    i;
                n && (i = $.inArray(n, t), i >= 0 && t.splice(i, 1), cookies.set(o, (new Base64).encode(t.join(",")), 7776e3))
            };
            this.showZhList = function() {
                var f = this,
                    i = this.getZjzh(),
                    u, t, e;
                if (i && i.length > 0) {
                    for (u = "", t = 0; t < i.length; t++) {
                        if (t > 8) break;
                        e = i[t].split("|");
                        u += "<li data-value=" + (new Base64).encode(i[t]) + ">" + i[t].split("|")[0] + '<i class="del"><\/i><\/li>'
                    }
                    n.html(u).show();
                    $("li", n).on("click", function(t) {
                        var u, e, i;
                        t.target.className == "del" ? (u = $(this).attr("data-value"), f.delZjzh((new Base64).decode(u)), $(this).remove(), $("li", n).length === 0 && n.hide()) : (e = $(this).attr("data-value"), i = (new Base64).decode(e).split("|"), i && i.length > 1 && r.val(i[0]), n.hide());
                        utools.stopEventBubble(t)
                    })
                } else n.hide()
            };
            this.fixedKeybord = function() {
                window.fixedLeft = 209
            };
            this.notice = function() {
                var n = this;
                utools.loadAjax("/Login/GetHSLayerNotice", {}, function(t) {
                    t && t.Status == 0 && t.Data && t.Data.length > 0 && EmPopupBox.Show({
                        messages: t.Data
                    });
                    n.bindSubmit()
                })
            }
        }
        var w = $("#divMain"),
            b = $("#imgLogoHS"),
            i = $("#panelLoginHS"),
            k = $("#ulLinkHS"),
            s = EmUtil.SecHelper.isWin(),
            u = s && __secStage == "2",
            a = s && __secStage == "1",
            v = __webSecurityLowestVersion * 1,
            r = !1,
            f = null,
            e = null,
            o = !1,
            h, t, c, l;
        $("#load").hover(function() {
            $("#show").show()
        }, function() {
            $("#show").hide()
        });
        h = 18888;
        t = {},
            function() {
                t.checkSec = function(n) {
                    var t = $.Deferred(),
                        i;
                    if (u) i = n || "", $.ajax({
                        url: "http://127.0.0.1:" + h + "/api/verifyUserInfo?" + i,
                        method: "POST",
                        timeout: 5e3,
                        contentType: "application/x-www-form-urlencoded",
                        dataType: "json",
                        success: function(n) {
                            if (n && (e = n.userInfo || "", f = n.version || ""), r = !0, f) {
                                var i = f.split(".");
                                v > i[0] ? (r = !1, o = !0) : o = !1
                            }
                            t.resolve()
                        },
                        error: function() {
                            t.reject()
                        }
                    }).always(function() {
                        o ? $("#linkDownLoadSec").text("请点击更新控件") : $("#linkDownLoadSec").text("请点击安装控件")
                    });
                    else return f = "", e = "", t.resolve();
                    return t.promise()
                };
                var n = null;
                t.stopCheckSec = function() {
                    n != null && (clearInterval(n), n = null)
                };
                t.checkSecUntilSuccess = function() {
                    t.stopCheckSec();
                    var i = $.Deferred();
                    return r ? i.resolve() : (n = setInterval(function() {
                        t.checkSec().always(function() {
                            if (r) return t.stopCheckSec(), i.resolve()
                        })
                    }, 6e3), i.promise())
                };
                t.tipHtml = function() {
                    var n = "";
                    return n += '<p style="font-size: 14px;color: #333333;">密码控件支持<\/p>', n += '<p style="font-size: 14px;color: #333333;margin-top:8px;">Windows操作系统，Chrome 53及以上版本，Edge全系列浏览器，Firefox 55及以上版本，IE 10及以上版本，最新版的360、搜狗等其他双核浏览器。<\/p>', n + '<p style="font-size: 14px;color: #333333;margin:8px 0px;">为了不影响您的使用，您可下载东方财富客户端逬行交易<\/p>'
                };
                t.tipHtml2 = function() {
                    var n = "";
                    return n += '<p style="font-size: 14px;color: #333333;">尊敬的用户：<\/p>', n += '<p style="font-size: 14px;color: #333333;margin-top:8px;">为保障您的交易安全，本页面近期将校验密码控件后方可登录，建议您提前安装控件并使用推荐浏览器，或下载东方财富客户端进行交易。<\/p>', n += '<p style="font-size: 14px;color: #EA5504;margin:8px 0px;"><a href="javascript:;" onclick="$(this).hide();$(this).parent().next().show();"  style="font-size: 14px;color: #EA5504;">查看推荐浏览器<\/a><\/p>', n += '<div style="font-size: 14px;margin:8px 0px;padding:8px;background:#F7F7F7;display:none;">', n += '<p style="font-size: 14px;color: #333333;">密码控件支持<\/p>', n += '<p style="font-size: 14px;color: #333333;margin-top:8px;">Windows操作系统，Chrome 53及以上版本，Edge全系列浏览器，Firefox 55及以上版本，IE 10及以上版本，最新版的360、搜狗等其他双核浏览器。<\/p>', n + "<\/div>"
                };
                t.checkBrowser = function() {
                    if (EmbedPCTools.canUseSecWinBrowser()) $("#browser_error").off().hide();
                    else {
                        $("#browser_error").show();
                        $("#browser_error").off().on("click", function() {
                            var n = t.tipHtml();
                            EmUtil.MessageBox.show({
                                title: "温馨提示",
                                message: n,
                                buttonLabels: ["我知道了"],
                                buttonStyles: ["btn-red-white"]
                            })
                        })
                    }
                };
                t.showPwd = function() {
                    $("#txtSec").hide();
                    $("#txtPwd").show();
                    $(".keyboard_tgt").css({
                        visibility: "visible"
                    });
                    $("#linkDownLoadSec").hide()
                };
                t.maskPwd = function(n) {
                    $("#txtSec").show();
                    $("#txtPwd").hide();
                    $(".keyboard_tgt").css({
                        visibility: "hidden"
                    });
                    $("#linkDownLoadSec").off().show();
                    $("#linkDownLoadSec").on("click", function() {
                        location.href = __webSecurityDownloadPath;
                        n && n();
                        window.sendTrackLog && window.sendTrackLog("button", "click", "zxjydl.azkj")
                    })
                }
            }();
        l = EmbedTools.getClient();
        c = l == "mac" ? new p : new y;
        n.LoginPanelHS = c;
        n.LoginPanelHS.initialize()
    }(Page_LoginSec);
Pop_AccountLimitGuide = {},
    function(n) {
        var t = EmUtil.MessageMap;
        n.dealAcctOpenState = function(n) {
            if (n.visitStatus == "0") {
                if (window.sendTrackLog) try {
                    window.sendTrackLog("button", "click", "zxjy_hsjydl_dc_dcdc")
                } catch (t) {}
                EmUtil.MessageBox.show({
                    hasTitle: !1,
                    style: "width:304px",
                    contentClass: "panel-content",
                    message: '<div class="close"><\/div><div class="phonecall"><\/div><div class="noticetitle" style="margin-top:16px;">电话回访<\/div><div class="noticebody" style="margin-top:15px;margin-bottom:30px;">根据要求<span style="color:#F75F2F;">您需要接听电话回访<\/span>才能进行账户使用<\/div>',
                    buttonStyles: ["btn-login-limitone"],
                    buttonLabels: ["点此立即开始"],
                    callback: function(t) {
                        t == 0 ? (utools.loadAjaxV2({
                            url: "/Login/postAppointmentVisit",
                            data: {
                                accountcode: n.ex_acct_code
                            },
                            success: function(n) {
                                n ? n.Status == 0 ? EmUtil.MessageBox.show({
                                    hasTitle: !1,
                                    style: "width:304px",
                                    hasClose: !1,
                                    contentClass: "panel-content",
                                    message: '<div class="noticetitle" style="margin-top:27px;">温馨提示<\/div><div class="noticebody" style="margin-top:22px;margin-bottom:33px;">客服即将给您来电，请注意接听<\/div>',
                                    buttonStyles: ["btn-login-limitone"],
                                    buttonLabels: ["确定"],
                                    callback: function() {}
                                }) : EmUtil.MessageBox.error("操作失败，请稍后重试") : EmUtil.MessageBox.error("操作失败，请稍后重试")
                            },
                            error: function() {
                                EmUtil.MessageBox.error("操作失败，请稍后重试")
                            }
                        }), window.sendTrackLog && window.sendTrackLog("button", "click", "zxjy_hsjydl_dc_djljks")) : window.sendTrackLog && window.sendTrackLog("button", "click", "zxjy_hsjydl_dc_gbdc")
                    }
                })
            } else n.visitStatus == "1" && n.limitStatus == "0" && EmUtil.MessageBox.show({
                hasTitle: !1,
                style: "width:304px",
                hasClose: !1,
                contentClass: "panel-content",
                message: '<div class="waiting"><\/div><div class="noticebody" style="margin-top:13px;margin-bottom:23px;">账户解限中，请稍后重试<\/div>',
                buttonStyles: ["btn-login-limitone"],
                buttonLabels: ["我知道了"],
                callback: function() {}
            })
        }
    }(Pop_AccountLimitGuide) %
