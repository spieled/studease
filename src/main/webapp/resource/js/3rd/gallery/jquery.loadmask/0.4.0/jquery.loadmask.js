define('gallery/jquery.loadmask/0.4.0/jquery.loadmask', ['$'], function (require, exports, module) {

    // 依赖的jQuery
    var jQuery = require("$");

    require('./jquery.loadmask.css');

    (function (a) {
        a.fn.mask = function (c, b) {
            if (!c) {
                c = '处理中...';
            }
            ;
            a(this).each(function () {
                if (b !== undefined && b > 0) {
                    var d = a(this);
                    d.data("_mask_timeout", setTimeout(function () {
                        a.maskElement(d, c)
                    }, b))
                } else {
                    a.maskElement(a(this), c)
                }
            })
        };
        a.fn.unmask = function () {
            a(this).each(function () {
                a.unmaskElement(a(this))
            })
        };
        a.fn.isMasked = function () {
            return this.hasClass("masked")
        };
        a.maskElement = function (d, c) {
            if (d.data("_mask_timeout") !== undefined) {
                clearTimeout(d.data("_mask_timeout"));
                d.removeData("_mask_timeout")
            }
            if (d.isMasked()) {
                a.unmaskElement(d)
            }
            if (d.css("position") == "static") {
                d.addClass("masked-relative")
            }
            d.addClass("masked");
            var e = a('<div class="loadmask"></div>');
            if (navigator.userAgent.toLowerCase().indexOf("msie") > -1) {
                e.height(d.height() + parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom")));
                e.width(d.width() + parseInt(d.css("padding-left")) + parseInt(d.css("padding-right")))
            }
            if (navigator.userAgent.toLowerCase().indexOf("msie 6") > -1) {
                d.find("select").addClass("masked-hidden")
            }
            d.append(e);
            if (c !== undefined) {
                var b = a('<div class="loadmask-msg" style="display:none;"></div>');
                b.append("<div>" + c + "</div>");
                d.append(b);
                b.css("top", Math.round(d.height() / 2 - (b.height() - parseInt(b.css("padding-top")) - parseInt(b.css("padding-bottom"))) / 2) + "px");
                b.css("left", Math.round(d.width() / 2 - (b.width() - parseInt(b.css("padding-left")) - parseInt(b.css("padding-right"))) / 2) + "px");
                b.show()
            }
        };
        a.unmaskElement = function (b) {
            if (b.data("_mask_timeout") !== undefined) {
                clearTimeout(b.data("_mask_timeout"));
                b.removeData("_mask_timeout")
            }
            b.find(".loadmask-msg,.loadmask").remove();
            b.removeClass("masked");
            b.removeClass("masked-relative");
            b.find("select").removeClass("masked-hidden")
        }
    })(jQuery);

    // 把jQuery输出回去
    module.exports = jQuery;
});