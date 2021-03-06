define("gallery/ztree/3.5.2/ztree", ["$"], function (require, exports, module) {
    var jQuery = require("$");
    (function ($) {
        var settings = {}, roots = {}, caches = {}, _consts = {event: {NODECREATED: "ztree_nodeCreated", CLICK: "ztree_click", EXPAND: "ztree_expand", COLLAPSE: "ztree_collapse", ASYNC_SUCCESS: "ztree_async_success", ASYNC_ERROR: "ztree_async_error"}, id: {A: "_a", ICON: "_ico", SPAN: "_span", SWITCH: "_switch", UL: "_ul"}, line: {ROOT: "root", ROOTS: "roots", CENTER: "center", BOTTOM: "bottom", NOLINE: "noline", LINE: "line"}, folder: {OPEN: "open", CLOSE: "close", DOCU: "docu"}, node: {CURSELECTED: "curSelectedNode"}}, _setting = {treeId: "", treeObj: null, view: {addDiyDom: null, autoCancelSelected: !0, dblClickExpand: !0, expandSpeed: "fast", fontCss: {}, nameIsHTML: !1, selectedMulti: !0, showIcon: !0, showLine: !0, showTitle: !0}, data: {key: {children: "children", name: "name", title: "", url: "url"}, simpleData: {enable: !1, idKey: "id", pIdKey: "pId", rootPId: null}, keep: {parent: !1, leaf: !1}}, async: {enable: !1, contentType: "application/x-www-form-urlencoded", type: "post", dataType: "text", url: "", autoParam: [], otherParam: [], dataFilter: null}, callback: {beforeAsync: null, beforeClick: null, beforeDblClick: null, beforeRightClick: null, beforeMouseDown: null, beforeMouseUp: null, beforeExpand: null, beforeCollapse: null, beforeRemove: null, onAsyncError: null, onAsyncSuccess: null, onNodeCreated: null, onClick: null, onDblClick: null, onRightClick: null, onMouseDown: null, onMouseUp: null, onExpand: null, onCollapse: null, onRemove: null}}, _initRoot = function (a) {
            var b = data.getRoot(a);
            b || (b = {}, data.setRoot(a, b)), b[a.data.key.children] = [], b.expandTriggerFlag = !1, b.curSelectedList = [], b.noSelection = !0, b.createdNodes = [], b.zId = 0, b._ver = (new Date).getTime()
        }, _initCache = function (a) {
            var b = data.getCache(a);
            b || (b = {}, data.setCache(a, b)), b.nodes = [], b.doms = []
        }, _bindEvent = function (a) {
            var b = a.treeObj, c = consts.event;
            b.bind(c.NODECREATED, function (b, c, d) {
                tools.apply(a.callback.onNodeCreated, [b, c, d])
            }), b.bind(c.CLICK, function (b, c, d, e, f) {
                tools.apply(a.callback.onClick, [c, d, e, f])
            }), b.bind(c.EXPAND, function (b, c, d) {
                tools.apply(a.callback.onExpand, [b, c, d])
            }), b.bind(c.COLLAPSE, function (b, c, d) {
                tools.apply(a.callback.onCollapse, [b, c, d])
            }), b.bind(c.ASYNC_SUCCESS, function (b, c, d, e) {
                tools.apply(a.callback.onAsyncSuccess, [b, c, d, e])
            }), b.bind(c.ASYNC_ERROR, function (b, c, d, e, f, g) {
                tools.apply(a.callback.onAsyncError, [b, c, d, e, f, g])
            })
        }, _unbindEvent = function (a) {
            var b = a.treeObj, c = consts.event;
            b.unbind(c.NODECREATED).unbind(c.CLICK).unbind(c.EXPAND).unbind(c.COLLAPSE).unbind(c.ASYNC_SUCCESS).unbind(c.ASYNC_ERROR)
        }, _eventProxy = function (a) {
            var b = a.target, c = data.getSetting(a.data.treeId), d = "", e = null, f = "", g = "", h = null, i = null, j = null;
            if (tools.eqs(a.type, "mousedown") ? g = "mousedown" : tools.eqs(a.type, "mouseup") ? g = "mouseup" : tools.eqs(a.type, "contextmenu") ? g = "contextmenu" : tools.eqs(a.type, "click") ? tools.eqs(b.tagName, "span") && null !== b.getAttribute("treeNode" + consts.id.SWITCH) ? (d = ($(b).parent("li").get(0) || $(b).parentsUntil("li").parent().get(0)).id, f = "switchNode") : (j = tools.getMDom(c, b, [
                {tagName: "a", attrName: "treeNode" + consts.id.A}
            ]), j && (d = ($(j).parent("li").get(0) || $(j).parentsUntil("li").parent().get(0)).id, f = "clickNode")) : tools.eqs(a.type, "dblclick") && (g = "dblclick", j = tools.getMDom(c, b, [
                {tagName: "a", attrName: "treeNode" + consts.id.A}
            ]), j && (d = ($(j).parent("li").get(0) || $(j).parentsUntil("li").parent().get(0)).id, f = "switchNode")), g.length > 0 && 0 == d.length && (j = tools.getMDom(c, b, [
                {tagName: "a", attrName: "treeNode" + consts.id.A}
            ]), j && (d = ($(j).parent("li").get(0) || $(j).parentsUntil("li").parent().get(0)).id)), d.length > 0)switch (e = data.getNodeCache(c, d), f) {
                case"switchNode":
                    e.isParent ? tools.eqs(a.type, "click") || tools.eqs(a.type, "dblclick") && tools.apply(c.view.dblClickExpand, [c.treeId, e], c.view.dblClickExpand) ? h = handler.onSwitchNode : f = "" : f = "";
                    break;
                case"clickNode":
                    h = handler.onClickNode
            }
            switch (g) {
                case"mousedown":
                    i = handler.onZTreeMousedown;
                    break;
                case"mouseup":
                    i = handler.onZTreeMouseup;
                    break;
                case"dblclick":
                    i = handler.onZTreeDblclick;
                    break;
                case"contextmenu":
                    i = handler.onZTreeContextmenu
            }
            var k = {stop: !1, node: e, nodeEventType: f, nodeEventCallback: h, treeEventType: g, treeEventCallback: i};
            return k
        }, _initNode = function (a, b, c, d, e, f) {
            if (c) {
                var h = data.getRoot(a), i = a.data.key.children;
                c.level = b, c.tId = a.treeId + "_" + ++h.zId, c.parentTId = d ? d.tId : null, c[i] && c[i].length > 0 ? ("string" == typeof c.open && (c.open = tools.eqs(c.open, "true")), c.open = !!c.open, c.isParent = !0, c.zAsync = !0) : (c.open = !1, "string" == typeof c.isParent && (c.isParent = tools.eqs(c.isParent, "true")), c.isParent = !!c.isParent, c.zAsync = !c.isParent), c.isFirstNode = e, c.isLastNode = f, c.getParentNode = function () {
                    return data.getNodeCache(a, c.parentTId)
                }, c.getPreNode = function () {
                    return data.getPreNode(a, c)
                }, c.getNextNode = function () {
                    return data.getNextNode(a, c)
                }, c.isAjaxing = !1, data.fixPIdKeyValue(a, c)
            }
        }, _init = {bind: [_bindEvent], unbind: [_unbindEvent], caches: [_initCache], nodes: [_initNode], proxys: [_eventProxy], roots: [_initRoot], beforeA: [], afterA: [], innerBeforeA: [], innerAfterA: [], zTreeTools: []}, data = {addNodeCache: function (a, b) {
            data.getCache(a).nodes[data.getNodeCacheId(b.tId)] = b
        }, getNodeCacheId: function (a) {
            return a.substring(a.lastIndexOf("_") + 1)
        }, addAfterA: function (a) {
            _init.afterA.push(a)
        }, addBeforeA: function (a) {
            _init.beforeA.push(a)
        }, addInnerAfterA: function (a) {
            _init.innerAfterA.push(a)
        }, addInnerBeforeA: function (a) {
            _init.innerBeforeA.push(a)
        }, addInitBind: function (a) {
            _init.bind.push(a)
        }, addInitUnBind: function (a) {
            _init.unbind.push(a)
        }, addInitCache: function (a) {
            _init.caches.push(a)
        }, addInitNode: function (a) {
            _init.nodes.push(a)
        }, addInitProxy: function (a) {
            _init.proxys.push(a)
        }, addInitRoot: function (a) {
            _init.roots.push(a)
        }, addNodesData: function (a, b, c) {
            var d = a.data.key.children;
            b[d] || (b[d] = []), b[d].length > 0 && (b[d][b[d].length - 1].isLastNode = !1, view.setNodeLineIcos(a, b[d][b[d].length - 1])), b.isParent = !0, b[d] = b[d].concat(c)
        }, addSelectedNode: function (a, b) {
            var c = data.getRoot(a);
            data.isSelectedNode(a, b) || c.curSelectedList.push(b)
        }, addCreatedNode: function (a, b) {
            if (a.callback.onNodeCreated || a.view.addDiyDom) {
                var c = data.getRoot(a);
                c.createdNodes.push(b)
            }
        }, addZTreeTools: function (a) {
            _init.zTreeTools.push(a)
        }, exSetting: function (a) {
            $.extend(!0, _setting, a)
        }, fixPIdKeyValue: function (a, b) {
            a.data.simpleData.enable && (b[a.data.simpleData.pIdKey] = b.parentTId ? b.getParentNode()[a.data.simpleData.idKey] : a.data.simpleData.rootPId)
        }, getAfterA: function () {
            for (var d = 0, e = _init.afterA.length; e > d; d++)_init.afterA[d].apply(this, arguments)
        }, getBeforeA: function () {
            for (var d = 0, e = _init.beforeA.length; e > d; d++)_init.beforeA[d].apply(this, arguments)
        }, getInnerAfterA: function () {
            for (var d = 0, e = _init.innerAfterA.length; e > d; d++)_init.innerAfterA[d].apply(this, arguments)
        }, getInnerBeforeA: function () {
            for (var d = 0, e = _init.innerBeforeA.length; e > d; d++)_init.innerBeforeA[d].apply(this, arguments)
        }, getCache: function (a) {
            return caches[a.treeId]
        }, getNextNode: function (a, b) {
            if (!b)return null;
            for (var c = a.data.key.children, d = b.parentTId ? b.getParentNode() : data.getRoot(a), e = 0, f = d[c].length - 1; f >= e; e++)if (d[c][e] === b)return e == f ? null : d[c][e + 1];
            return null
        }, getNodeByParam: function (a, b, c, d) {
            if (!b || !c)return null;
            for (var e = a.data.key.children, f = 0, g = b.length; g > f; f++) {
                if (b[f][c] == d)return b[f];
                var h = data.getNodeByParam(a, b[f][e], c, d);
                if (h)return h
            }
            return null
        }, getNodeCache: function (a, b) {
            if (!b)return null;
            var c = caches[a.treeId].nodes[data.getNodeCacheId(b)];
            return c ? c : null
        }, getNodeName: function (a, b) {
            var c = a.data.key.name;
            return"" + b[c]
        }, getNodeTitle: function (a, b) {
            var c = "" === a.data.key.title ? a.data.key.name : a.data.key.title;
            return"" + b[c]
        }, getNodes: function (a) {
            return data.getRoot(a)[a.data.key.children]
        }, getNodesByParam: function (a, b, c, d) {
            if (!b || !c)return[];
            for (var e = a.data.key.children, f = [], g = 0, h = b.length; h > g; g++)b[g][c] == d && f.push(b[g]), f = f.concat(data.getNodesByParam(a, b[g][e], c, d));
            return f
        }, getNodesByParamFuzzy: function (a, b, c, d) {
            if (!b || !c)return[];
            for (var e = a.data.key.children, f = [], g = 0, h = b.length; h > g; g++)"string" == typeof b[g][c] && b[g][c].indexOf(d) > -1 && f.push(b[g]), f = f.concat(data.getNodesByParamFuzzy(a, b[g][e], c, d));
            return f
        }, getNodesByFilter: function (a, b, c, d, e) {
            if (!b)return d ? null : [];
            for (var f = a.data.key.children, g = d ? null : [], h = 0, i = b.length; i > h; h++) {
                if (tools.apply(c, [b[h], e], !1)) {
                    if (d)return b[h];
                    g.push(b[h])
                }
                var j = data.getNodesByFilter(a, b[h][f], c, d, e);
                if (d && j)return j;
                g = d ? j : g.concat(j)
            }
            return g
        }, getPreNode: function (a, b) {
            if (!b)return null;
            for (var c = a.data.key.children, d = b.parentTId ? b.getParentNode() : data.getRoot(a), e = 0, f = d[c].length; f > e; e++)if (d[c][e] === b)return 0 == e ? null : d[c][e - 1];
            return null
        }, getRoot: function (a) {
            return a ? roots[a.treeId] : null
        }, getSetting: function (a) {
            return settings[a]
        }, getSettings: function () {
            return settings
        }, getZTreeTools: function (a) {
            var b = this.getRoot(this.getSetting(a));
            return b ? b.treeTools : null
        }, initCache: function () {
            for (var b = 0, c = _init.caches.length; c > b; b++)_init.caches[b].apply(this, arguments)
        }, initNode: function () {
            for (var g = 0, h = _init.nodes.length; h > g; g++)_init.nodes[g].apply(this, arguments)
        }, initRoot: function () {
            for (var b = 0, c = _init.roots.length; c > b; b++)_init.roots[b].apply(this, arguments)
        }, isSelectedNode: function (a, b) {
            for (var c = data.getRoot(a), d = 0, e = c.curSelectedList.length; e > d; d++)if (b === c.curSelectedList[d])return!0;
            return!1
        }, removeNodeCache: function (a, b) {
            var c = a.data.key.children;
            if (b[c])for (var d = 0, e = b[c].length; e > d; d++)arguments.callee(a, b[c][d]);
            data.getCache(a).nodes[data.getNodeCacheId(b.tId)] = null
        }, removeSelectedNode: function (a, b) {
            for (var c = data.getRoot(a), d = 0, e = c.curSelectedList.length; e > d; d++)b !== c.curSelectedList[d] && data.getNodeCache(a, c.curSelectedList[d].tId) || (c.curSelectedList.splice(d, 1), d--, e--)
        }, setCache: function (a, b) {
            caches[a.treeId] = b
        }, setRoot: function (a, b) {
            roots[a.treeId] = b
        }, setZTreeTools: function () {
            for (var c = 0, d = _init.zTreeTools.length; d > c; c++)_init.zTreeTools[c].apply(this, arguments)
        }, transformToArrayFormat: function (a, b) {
            if (!b)return[];
            var c = a.data.key.children, d = [];
            if (tools.isArray(b))for (var e = 0, f = b.length; f > e; e++)d.push(b[e]), b[e][c] && (d = d.concat(data.transformToArrayFormat(a, b[e][c]))); else d.push(b), b[c] && (d = d.concat(data.transformToArrayFormat(a, b[c])));
            return d
        }, transformTozTreeFormat: function (a, b) {
            var c, d, e = a.data.simpleData.idKey, f = a.data.simpleData.pIdKey, g = a.data.key.children;
            if (!e || "" == e || !b)return[];
            if (tools.isArray(b)) {
                var h = [], i = [];
                for (c = 0, d = b.length; d > c; c++)i[b[c][e]] = b[c];
                for (c = 0, d = b.length; d > c; c++)i[b[c][f]] && b[c][e] != b[c][f] ? (i[b[c][f]][g] || (i[b[c][f]][g] = []), i[b[c][f]][g].push(b[c])) : h.push(b[c]);
                return h
            }
            return[b]
        }}, event = {bindEvent: function () {
            for (var b = 0, c = _init.bind.length; c > b; b++)_init.bind[b].apply(this, arguments)
        }, unbindEvent: function () {
            for (var b = 0, c = _init.unbind.length; c > b; b++)_init.unbind[b].apply(this, arguments)
        }, bindTree: function (a) {
            var b = {treeId: a.treeId}, c = a.treeObj;
            c.bind("selectstart", function (a) {
                var b = a.srcElement.nodeName.toLowerCase();
                return"input" === b || "textarea" === b
            }).css({"-moz-user-select": "-moz-none"}), c.bind("click", b, event.proxy), c.bind("dblclick", b, event.proxy), c.bind("mouseover", b, event.proxy), c.bind("mouseout", b, event.proxy), c.bind("mousedown", b, event.proxy), c.bind("mouseup", b, event.proxy), c.bind("contextmenu", b, event.proxy)
        }, unbindTree: function (a) {
            var b = a.treeObj;
            b.unbind("click", event.proxy).unbind("dblclick", event.proxy).unbind("mouseover", event.proxy).unbind("mouseout", event.proxy).unbind("mousedown", event.proxy).unbind("mouseup", event.proxy).unbind("contextmenu", event.proxy)
        }, doProxy: function () {
            for (var b = [], c = 0, d = _init.proxys.length; d > c; c++) {
                var e = _init.proxys[c].apply(this, arguments);
                if (b.push(e), e.stop)break
            }
            return b
        }, proxy: function (a) {
            var b = data.getSetting(a.data.treeId);
            if (!tools.uCanDo(b, a))return!0;
            for (var c = event.doProxy(a), d = !0, e = !1, f = 0, g = c.length; g > f; f++) {
                var h = c[f];
                h.nodeEventCallback && (e = !0, d = h.nodeEventCallback.apply(h, [a, h.node]) && d), h.treeEventCallback && (e = !0, d = h.treeEventCallback.apply(h, [a, h.node]) && d)
            }
            return d
        }}, handler = {onSwitchNode: function (a, b) {
            var c = data.getSetting(a.data.treeId);
            if (b.open) {
                if (0 == tools.apply(c.callback.beforeCollapse, [c.treeId, b], !0))return!0;
                data.getRoot(c).expandTriggerFlag = !0, view.switchNode(c, b)
            } else {
                if (0 == tools.apply(c.callback.beforeExpand, [c.treeId, b], !0))return!0;
                data.getRoot(c).expandTriggerFlag = !0, view.switchNode(c, b)
            }
            return!0
        }, onClickNode: function (a, b) {
            var c = data.getSetting(a.data.treeId), d = c.view.autoCancelSelected && a.ctrlKey && data.isSelectedNode(c, b) ? 0 : c.view.autoCancelSelected && a.ctrlKey && c.view.selectedMulti ? 2 : 1;
            return 0 == tools.apply(c.callback.beforeClick, [c.treeId, b, d], !0) ? !0 : (0 === d ? view.cancelPreSelectedNode(c, b) : view.selectNode(c, b, 2 === d), c.treeObj.trigger(consts.event.CLICK, [a, c.treeId, b, d]), !0)
        }, onZTreeMousedown: function (a, b) {
            var c = data.getSetting(a.data.treeId);
            return tools.apply(c.callback.beforeMouseDown, [c.treeId, b], !0) && tools.apply(c.callback.onMouseDown, [a, c.treeId, b]), !0
        }, onZTreeMouseup: function (a, b) {
            var c = data.getSetting(a.data.treeId);
            return tools.apply(c.callback.beforeMouseUp, [c.treeId, b], !0) && tools.apply(c.callback.onMouseUp, [a, c.treeId, b]), !0
        }, onZTreeDblclick: function (a, b) {
            var c = data.getSetting(a.data.treeId);
            return tools.apply(c.callback.beforeDblClick, [c.treeId, b], !0) && tools.apply(c.callback.onDblClick, [a, c.treeId, b]), !0
        }, onZTreeContextmenu: function (a, b) {
            var c = data.getSetting(a.data.treeId);
            return tools.apply(c.callback.beforeRightClick, [c.treeId, b], !0) && tools.apply(c.callback.onRightClick, [a, c.treeId, b]), "function" != typeof c.callback.onRightClick
        }}, tools = {apply: function (a, b, c) {
            return"function" == typeof a ? a.apply(zt, b ? b : []) : c
        }, canAsync: function (a, b) {
            var c = a.data.key.children;
            return a.async.enable && b && b.isParent && !(b.zAsync || b[c] && b[c].length > 0)
        }, clone: function (a) {
            if (null === a)return null;
            var b = a.constructor === Array ? [] : {};
            for (var c in a)b[c] = a[c]instanceof Date ? new Date(a[c].getTime()) : "object" == typeof a[c] ? arguments.callee(a[c]) : a[c];
            return b
        }, eqs: function (a, b) {
            return a.toLowerCase() === b.toLowerCase()
        }, isArray: function (a) {
            return"[object Array]" === Object.prototype.toString.apply(a)
        }, getMDom: function (a, b, c) {
            if (!b)return null;
            for (; b && b.id !== a.treeId;) {
                for (var d = 0, e = c.length; b.tagName && e > d; d++)if (tools.eqs(b.tagName, c[d].tagName) && null !== b.getAttribute(c[d].attrName))return b;
                b = b.parentNode
            }
            return null
        }, uCanDo: function () {
            return!0
        }}, view = {addNodes: function (a, b, c, d) {
            if (!a.data.keep.leaf || !b || b.isParent)if (tools.isArray(c) || (c = [c]), a.data.simpleData.enable && (c = data.transformTozTreeFormat(a, c)), b) {
                var e = $("#" + b.tId + consts.id.SWITCH), f = $("#" + b.tId + consts.id.ICON), g = $("#" + b.tId + consts.id.UL);
                b.open || (view.replaceSwitchClass(b, e, consts.folder.CLOSE), view.replaceIcoClass(b, f, consts.folder.CLOSE), b.open = !1, g.css({display: "none"})), data.addNodesData(a, b, c), view.createNodes(a, b.level + 1, c, b), d || view.expandCollapseParentNode(a, b, !0)
            } else data.addNodesData(a, data.getRoot(a), c), view.createNodes(a, 0, c, null)
        }, appendNodes: function (a, b, c, d, e, f) {
            if (!c)return[];
            for (var g = [], h = a.data.key.children, i = 0, j = c.length; j > i; i++) {
                var k = c[i];
                if (e) {
                    var l = d ? d : data.getRoot(a), m = l[h], n = m.length == c.length && 0 == i, o = i == c.length - 1;
                    data.initNode(a, b, k, d, n, o, f), data.addNodeCache(a, k)
                }
                var p = [];
                k[h] && k[h].length > 0 && (p = view.appendNodes(a, b + 1, k[h], k, e, f && k.open)), f && (view.makeDOMNodeMainBefore(g, a, k), view.makeDOMNodeLine(g, a, k), data.getBeforeA(a, k, g), view.makeDOMNodeNameBefore(g, a, k), data.getInnerBeforeA(a, k, g), view.makeDOMNodeIcon(g, a, k), data.getInnerAfterA(a, k, g), view.makeDOMNodeNameAfter(g, a, k), data.getAfterA(a, k, g), k.isParent && k.open && view.makeUlHtml(a, k, g, p.join("")), view.makeDOMNodeMainAfter(g, a, k), data.addCreatedNode(a, k))
            }
            return g
        }, appendParentULDom: function (a, b) {
            var c = [], d = $("#" + b.tId), e = $("#" + b.tId + consts.id.UL), f = a.data.key.children, g = view.appendNodes(a, b.level + 1, b[f], b, !1, !0);
            view.makeUlHtml(a, b, c, g.join("")), !d.get(0) && b.parentTId && (view.appendParentULDom(a, b.getParentNode()), d = $("#" + b.tId)), e.get(0) && e.remove(), d.append(c.join(""))
        }, asyncNode: function (setting, node, isSilent, callback) {
            var i, l;
            if (node && !node.isParent)return tools.apply(callback), !1;
            if (node && node.isAjaxing)return!1;
            if (0 == tools.apply(setting.callback.beforeAsync, [setting.treeId, node], !0))return tools.apply(callback), !1;
            if (node) {
                node.isAjaxing = !0;
                var icoObj = $("#" + node.tId + consts.id.ICON);
                icoObj.attr({style: "", "class": "button ico_loading"})
            }
            var tmpParam = {};
            for (i = 0, l = setting.async.autoParam.length; node && l > i; i++) {
                var pKey = setting.async.autoParam[i].split("="), spKey = pKey;
                pKey.length > 1 && (spKey = pKey[1], pKey = pKey[0]), tmpParam[spKey] = node[pKey]
            }
            if (tools.isArray(setting.async.otherParam))for (i = 0, l = setting.async.otherParam.length; l > i; i += 2)tmpParam[setting.async.otherParam[i]] = setting.async.otherParam[i + 1]; else for (var p in setting.async.otherParam)tmpParam[p] = setting.async.otherParam[p];
            var _tmpV = data.getRoot(setting)._ver;
            return $.ajax({contentType: setting.async.contentType, type: setting.async.type, url: tools.apply(setting.async.url, [setting.treeId, node], setting.async.url), data: tmpParam, dataType: setting.async.dataType, success: function (msg) {
                if (_tmpV == data.getRoot(setting)._ver) {
                    var newNodes = [];
                    try {
                        newNodes = msg && 0 != msg.length ? "string" == typeof msg ? eval("(" + msg + ")") : msg : []
                    } catch (err) {
                        newNodes = msg
                    }
                    node && (node.isAjaxing = null, node.zAsync = !0), view.setNodeLineIcos(setting, node), newNodes && "" !== newNodes ? (newNodes = tools.apply(setting.async.dataFilter, [setting.treeId, node, newNodes], newNodes), view.addNodes(setting, node, newNodes ? tools.clone(newNodes) : [], !!isSilent)) : view.addNodes(setting, node, [], !!isSilent), setting.treeObj.trigger(consts.event.ASYNC_SUCCESS, [setting.treeId, node, msg]), tools.apply(callback)
                }
            }, error: function (a, b, c) {
                _tmpV == data.getRoot(setting)._ver && (node && (node.isAjaxing = null), view.setNodeLineIcos(setting, node), setting.treeObj.trigger(consts.event.ASYNC_ERROR, [setting.treeId, node, a, b, c]))
            }}), !0
        }, cancelPreSelectedNode: function (a, b) {
            for (var c = data.getRoot(a).curSelectedList, d = 0, e = c.length - 1; e >= d; e--)if ((!b || b === c[e]) && ($("#" + c[e].tId + consts.id.A).removeClass(consts.node.CURSELECTED), b)) {
                data.removeSelectedNode(a, b);
                break
            }
            b || (data.getRoot(a).curSelectedList = [])
        }, createNodeCallback: function (a) {
            if (a.callback.onNodeCreated || a.view.addDiyDom)for (var b = data.getRoot(a); b.createdNodes.length > 0;) {
                var c = b.createdNodes.shift();
                tools.apply(a.view.addDiyDom, [a.treeId, c]), a.callback.onNodeCreated && a.treeObj.trigger(consts.event.NODECREATED, [a.treeId, c])
            }
        }, createNodes: function (a, b, c, d) {
            if (c && 0 != c.length) {
                var e = data.getRoot(a), f = a.data.key.children, g = !d || d.open || !!$("#" + d[f][0].tId).get(0);
                e.createdNodes = [];
                var h = view.appendNodes(a, b, c, d, !0, g);
                if (d) {
                    var i = $("#" + d.tId + consts.id.UL);
                    i.get(0) && i.append(h.join(""))
                } else a.treeObj.append(h.join(""));
                view.createNodeCallback(a)
            }
        }, destroy: function (a) {
            a && (data.initCache(a), data.initRoot(a), event.unbindTree(a), event.unbindEvent(a), a.treeObj.empty())
        }, expandCollapseNode: function (a, b, c, d, e) {
            var f = data.getRoot(a), g = a.data.key.children;
            if (!b)return tools.apply(e, []), void 0;
            if (f.expandTriggerFlag) {
                var h = e;
                e = function () {
                    h && h(), b.open ? a.treeObj.trigger(consts.event.EXPAND, [a.treeId, b]) : a.treeObj.trigger(consts.event.COLLAPSE, [a.treeId, b])
                }, f.expandTriggerFlag = !1
            }
            if (!b.open && b.isParent && (!$("#" + b.tId + consts.id.UL).get(0) || b[g] && b[g].length > 0 && !$("#" + b[g][0].tId).get(0)) && (view.appendParentULDom(a, b), view.createNodeCallback(a)), b.open == c)return tools.apply(e, []), void 0;
            var i = $("#" + b.tId + consts.id.UL), j = $("#" + b.tId + consts.id.SWITCH), k = $("#" + b.tId + consts.id.ICON);
            b.isParent ? (b.open = !b.open, b.iconOpen && b.iconClose && k.attr("style", view.makeNodeIcoStyle(a, b)), b.open ? (view.replaceSwitchClass(b, j, consts.folder.OPEN), view.replaceIcoClass(b, k, consts.folder.OPEN), 0 == d || "" == a.view.expandSpeed ? (i.show(), tools.apply(e, [])) : b[g] && b[g].length > 0 ? i.slideDown(a.view.expandSpeed, e) : (i.show(), tools.apply(e, []))) : (view.replaceSwitchClass(b, j, consts.folder.CLOSE), view.replaceIcoClass(b, k, consts.folder.CLOSE), 0 != d && "" != a.view.expandSpeed && b[g] && b[g].length > 0 ? i.slideUp(a.view.expandSpeed, e) : (i.hide(), tools.apply(e, [])))) : tools.apply(e, [])
        }, expandCollapseParentNode: function (a, b, c, d, e) {
            if (b) {
                if (!b.parentTId)return view.expandCollapseNode(a, b, c, d, e), void 0;
                view.expandCollapseNode(a, b, c, d), b.parentTId && view.expandCollapseParentNode(a, b.getParentNode(), c, d, e)
            }
        }, expandCollapseSonNode: function (a, b, c, d, e) {
            var f = data.getRoot(a), g = a.data.key.children, h = b ? b[g] : f[g], i = b ? !1 : d, j = data.getRoot(a).expandTriggerFlag;
            if (data.getRoot(a).expandTriggerFlag = !1, h)for (var k = 0, l = h.length; l > k; k++)h[k] && view.expandCollapseSonNode(a, h[k], c, i);
            data.getRoot(a).expandTriggerFlag = j, view.expandCollapseNode(a, b, c, d, e)
        }, makeDOMNodeIcon: function (a, b, c) {
            var d = data.getNodeName(b, c), e = b.view.nameIsHTML ? d : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            a.push("<span id='", c.tId, consts.id.ICON, "' title='' treeNode", consts.id.ICON, " class='", view.makeNodeIcoClass(b, c), "' style='", view.makeNodeIcoStyle(b, c), "'></span><span id='", c.tId, consts.id.SPAN, "'>", e, "</span>")
        }, makeDOMNodeLine: function (a, b, c) {
            a.push("<span id='", c.tId, consts.id.SWITCH, "' title='' class='", view.makeNodeLineClass(b, c), "' treeNode", consts.id.SWITCH, "></span>")
        }, makeDOMNodeMainAfter: function (a) {
            a.push("</li>")
        }, makeDOMNodeMainBefore: function (a, b, c) {
            a.push("<li id='", c.tId, "' class='level", c.level, "' tabindex='0' hidefocus='true' treenode>")
        }, makeDOMNodeNameAfter: function (a) {
            a.push("</a>")
        }, makeDOMNodeNameBefore: function (a, b, c) {
            var d = data.getNodeTitle(b, c), e = view.makeNodeUrl(b, c), f = view.makeNodeFontCss(b, c), g = [];
            for (var h in f)g.push(h, ":", f[h], ";");
            a.push("<a id='", c.tId, consts.id.A, "' class='level", c.level, "' treeNode", consts.id.A, ' onclick="', c.click || "", '" ', null != e && e.length > 0 ? "href='" + e + "'" : "", " target='", view.makeNodeTarget(c), "' style='", g.join(""), "'"), tools.apply(b.view.showTitle, [b.treeId, c], b.view.showTitle) && d && a.push("title='", d.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'"), a.push(">")
        }, makeNodeFontCss: function (a, b) {
            var c = tools.apply(a.view.fontCss, [a.treeId, b], a.view.fontCss);
            return c && "function" != typeof c ? c : {}
        }, makeNodeIcoClass: function (a, b) {
            var c = ["ico"];
            return b.isAjaxing || (c[0] = (b.iconSkin ? b.iconSkin + "_" : "") + c[0], b.isParent ? c.push(b.open ? consts.folder.OPEN : consts.folder.CLOSE) : c.push(consts.folder.DOCU)), "button " + c.join("_")
        }, makeNodeIcoStyle: function (a, b) {
            var c = [];
            if (!b.isAjaxing) {
                var d = b.isParent && b.iconOpen && b.iconClose ? b.open ? b.iconOpen : b.iconClose : b.icon;
                d && c.push("background:url(", d, ") 0 0 no-repeat;"), 0 != a.view.showIcon && tools.apply(a.view.showIcon, [a.treeId, b], !0) || c.push("width:0px;height:0px;")
            }
            return c.join("")
        }, makeNodeLineClass: function (a, b) {
            var c = [];
            return a.view.showLine ? 0 == b.level && b.isFirstNode && b.isLastNode ? c.push(consts.line.ROOT) : 0 == b.level && b.isFirstNode ? c.push(consts.line.ROOTS) : b.isLastNode ? c.push(consts.line.BOTTOM) : c.push(consts.line.CENTER) : c.push(consts.line.NOLINE), b.isParent ? c.push(b.open ? consts.folder.OPEN : consts.folder.CLOSE) : c.push(consts.folder.DOCU), view.makeNodeLineClassEx(b) + c.join("_")
        }, makeNodeLineClassEx: function (a) {
            return"button level" + a.level + " switch "
        }, makeNodeTarget: function (a) {
            return a.target || "_blank"
        }, makeNodeUrl: function (a, b) {
            var c = a.data.key.url;
            return b[c] ? b[c] : null
        }, makeUlHtml: function (a, b, c, d) {
            c.push("<ul id='", b.tId, consts.id.UL, "' class='level", b.level, " ", view.makeUlLineClass(a, b), "' style='display:", b.open ? "block" : "none", "'>"), c.push(d), c.push("</ul>")
        }, makeUlLineClass: function (a, b) {
            return a.view.showLine && !b.isLastNode ? consts.line.LINE : ""
        }, removeChildNodes: function (a, b) {
            if (b) {
                var c = a.data.key.children, d = b[c];
                if (d) {
                    for (var e = 0, f = d.length; f > e; e++)data.removeNodeCache(a, d[e]);
                    if (data.removeSelectedNode(a), delete b[c], a.data.keep.parent)$("#" + b.tId + consts.id.UL).empty(); else {
                        b.isParent = !1, b.open = !1;
                        var g = $("#" + b.tId + consts.id.SWITCH), h = $("#" + b.tId + consts.id.ICON);
                        view.replaceSwitchClass(b, g, consts.folder.DOCU), view.replaceIcoClass(b, h, consts.folder.DOCU), $("#" + b.tId + consts.id.UL).remove()
                    }
                }
            }
        }, setFirstNode: function (a, b) {
            var c = a.data.key.children, d = b[c].length;
            d > 0 && (b[c][0].isFirstNode = !0)
        }, setLastNode: function (a, b) {
            var c = a.data.key.children, d = b[c].length;
            d > 0 && (b[c][d - 1].isLastNode = !0)
        }, removeNode: function (a, b) {
            var c = data.getRoot(a), d = a.data.key.children, e = b.parentTId ? b.getParentNode() : c;
            if (b.isFirstNode = !1, b.isLastNode = !1, b.getPreNode = function () {
                return null
            }, b.getNextNode = function () {
                return null
            }, data.getNodeCache(a, b.tId)) {
                $("#" + b.tId).remove(), data.removeNodeCache(a, b), data.removeSelectedNode(a, b);
                for (var f = 0, g = e[d].length; g > f; f++)if (e[d][f].tId == b.tId) {
                    e[d].splice(f, 1);
                    break
                }
                view.setFirstNode(a, e), view.setLastNode(a, e);
                var h, i, j, k = e[d].length;
                if (a.data.keep.parent || 0 != k) {
                    if (a.view.showLine && k > 0) {
                        var l = e[d][k - 1];
                        if (h = $("#" + l.tId + consts.id.UL), i = $("#" + l.tId + consts.id.SWITCH), j = $("#" + l.tId + consts.id.ICON), e == c)if (1 == e[d].length)view.replaceSwitchClass(l, i, consts.line.ROOT); else {
                            var m = $("#" + e[d][0].tId + consts.id.SWITCH);
                            view.replaceSwitchClass(e[d][0], m, consts.line.ROOTS), view.replaceSwitchClass(l, i, consts.line.BOTTOM)
                        } else view.replaceSwitchClass(l, i, consts.line.BOTTOM);
                        h.removeClass(consts.line.LINE)
                    }
                } else e.isParent = !1, e.open = !1, h = $("#" + e.tId + consts.id.UL), i = $("#" + e.tId + consts.id.SWITCH), j = $("#" + e.tId + consts.id.ICON), view.replaceSwitchClass(e, i, consts.folder.DOCU), view.replaceIcoClass(e, j, consts.folder.DOCU), h.css("display", "none")
            }
        }, replaceIcoClass: function (a, b, c) {
            if (b && !a.isAjaxing) {
                var d = b.attr("class");
                if (void 0 != d) {
                    var e = d.split("_");
                    switch (c) {
                        case consts.folder.OPEN:
                        case consts.folder.CLOSE:
                        case consts.folder.DOCU:
                            e[e.length - 1] = c
                    }
                    b.attr("class", e.join("_"))
                }
            }
        }, replaceSwitchClass: function (a, b, c) {
            if (b) {
                var d = b.attr("class");
                if (void 0 != d) {
                    var e = d.split("_");
                    switch (c) {
                        case consts.line.ROOT:
                        case consts.line.ROOTS:
                        case consts.line.CENTER:
                        case consts.line.BOTTOM:
                        case consts.line.NOLINE:
                            e[0] = view.makeNodeLineClassEx(a) + c;
                            break;
                        case consts.folder.OPEN:
                        case consts.folder.CLOSE:
                        case consts.folder.DOCU:
                            e[1] = c
                    }
                    b.attr("class", e.join("_")), c !== consts.folder.DOCU ? b.removeAttr("disabled") : b.attr("disabled", "disabled")
                }
            }
        }, selectNode: function (a, b, c) {
            c || view.cancelPreSelectedNode(a), $("#" + b.tId + consts.id.A).addClass(consts.node.CURSELECTED), data.addSelectedNode(a, b)
        }, setNodeFontCss: function (a, b) {
            var c = $("#" + b.tId + consts.id.A), d = view.makeNodeFontCss(a, b);
            d && c.css(d)
        }, setNodeLineIcos: function (a, b) {
            if (b) {
                var c = $("#" + b.tId + consts.id.SWITCH), d = $("#" + b.tId + consts.id.UL), e = $("#" + b.tId + consts.id.ICON), f = view.makeUlLineClass(a, b);
                0 == f.length ? d.removeClass(consts.line.LINE) : d.addClass(f), c.attr("class", view.makeNodeLineClass(a, b)), b.isParent ? c.removeAttr("disabled") : c.attr("disabled", "disabled"), e.removeAttr("style"), e.attr("style", view.makeNodeIcoStyle(a, b)), e.attr("class", view.makeNodeIcoClass(a, b))
            }
        }, setNodeName: function (a, b) {
            var c = data.getNodeTitle(a, b), d = $("#" + b.tId + consts.id.SPAN);
            if (d.empty(), a.view.nameIsHTML ? d.html(data.getNodeName(a, b)) : d.text(data.getNodeName(a, b)), tools.apply(a.view.showTitle, [a.treeId, b], a.view.showTitle)) {
                var e = $("#" + b.tId + consts.id.A);
                e.attr("title", c ? c : "")
            }
        }, setNodeTarget: function (a) {
            var b = $("#" + a.tId + consts.id.A);
            b.attr("target", view.makeNodeTarget(a))
        }, setNodeUrl: function (a, b) {
            var c = $("#" + b.tId + consts.id.A), d = view.makeNodeUrl(a, b);
            null == d || 0 == d.length ? c.removeAttr("href") : c.attr("href", d)
        }, switchNode: function (a, b) {
            if (b.open || !tools.canAsync(a, b))view.expandCollapseNode(a, b, !b.open); else if (a.async.enable) {
                if (!view.asyncNode(a, b))return view.expandCollapseNode(a, b, !b.open), void 0
            } else b && view.expandCollapseNode(a, b, !b.open)
        }};
        $.fn.zTree = {consts: _consts, _z: {tools: tools, view: view, event: event, data: data}, getZTreeObj: function (a) {
            var b = data.getZTreeTools(a);
            return b ? b : null
        }, destroy: function (a) {
            if (a && a.length > 0)view.destroy(data.getSetting(a)); else for (var b in settings)view.destroy(settings[b])
        }, init: function (a, b, c) {
            var d = tools.clone(_setting);
            $.extend(!0, d, b), d.treeId = a.attr("id"), d.treeObj = a, d.treeObj.empty(), settings[d.treeId] = d, document.body.style.maxHeight === void 0 && (d.view.expandSpeed = ""), data.initRoot(d);
            var e = data.getRoot(d), f = d.data.key.children;
            c = c ? tools.clone(tools.isArray(c) ? c : [c]) : [], e[f] = d.data.simpleData.enable ? data.transformTozTreeFormat(d, c) : c, data.initCache(d), event.unbindTree(d), event.bindTree(d), event.unbindEvent(d), event.bindEvent(d);
            var g = {setting: d, addNodes: function (a, b, c) {
                function f() {
                    view.addNodes(d, a, e, 1 == c)
                }

                if (!b)return null;
                if (a || (a = null), a && !a.isParent && d.data.keep.leaf)return null;
                var e = tools.clone(tools.isArray(b) ? b : [b]);
                return tools.canAsync(d, a) ? view.asyncNode(d, a, c, f) : f(), e
            }, cancelSelectedNode: function (a) {
                view.cancelPreSelectedNode(this.setting, a)
            }, destroy: function () {
                view.destroy(this.setting)
            }, expandAll: function (a) {
                return a = !!a, view.expandCollapseSonNode(this.setting, null, a, !0), a
            }, expandNode: function (a, b, c, e, f) {
                if (!a || !a.isParent)return null;
                if (b !== !0 && b !== !1 && (b = !a.open), f = !!f, f && b && 0 == tools.apply(d.callback.beforeExpand, [d.treeId, a], !0))return null;
                if (f && !b && 0 == tools.apply(d.callback.beforeCollapse, [d.treeId, a], !0))return null;
                if (b && a.parentTId && view.expandCollapseParentNode(this.setting, a.getParentNode(), b, !1), b === a.open && !c)return null;
                if (data.getRoot(d).expandTriggerFlag = f, c)view.expandCollapseSonNode(this.setting, a, b, !0, function () {
                    if (e !== !1)try {
                        $("#" + a.tId).focus().blur()
                    } catch (b) {
                    }
                }); else if (a.open = !b, view.switchNode(this.setting, a), e !== !1)try {
                    $("#" + a.tId).focus().blur()
                } catch (g) {
                }
                return b
            }, getNodes: function () {
                return data.getNodes(this.setting)
            }, getNodeByParam: function (a, b, c) {
                return a ? data.getNodeByParam(this.setting, c ? c[this.setting.data.key.children] : data.getNodes(this.setting), a, b) : null
            }, getNodeByTId: function (a) {
                return data.getNodeCache(this.setting, a)
            }, getNodesByParam: function (a, b, c) {
                return a ? data.getNodesByParam(this.setting, c ? c[this.setting.data.key.children] : data.getNodes(this.setting), a, b) : null
            }, getNodesByParamFuzzy: function (a, b, c) {
                return a ? data.getNodesByParamFuzzy(this.setting, c ? c[this.setting.data.key.children] : data.getNodes(this.setting), a, b) : null
            }, getNodesByFilter: function (a, b, c, d) {
                return b = !!b, a && "function" == typeof a ? data.getNodesByFilter(this.setting, c ? c[this.setting.data.key.children] : data.getNodes(this.setting), a, b, d) : b ? null : []
            }, getNodeIndex: function (a) {
                if (!a)return null;
                for (var b = d.data.key.children, c = a.parentTId ? a.getParentNode() : data.getRoot(this.setting), e = 0, f = c[b].length; f > e; e++)if (c[b][e] == a)return e;
                return-1
            }, getSelectedNodes: function () {
                for (var a = [], b = data.getRoot(this.setting).curSelectedList, c = 0, d = b.length; d > c; c++)a.push(b[c]);
                return a
            }, isSelectedNode: function (a) {
                return data.isSelectedNode(this.setting, a)
            }, reAsyncChildNodes: function (a, b, c) {
                if (this.setting.async.enable) {
                    var e = !a;
                    if (e && (a = data.getRoot(this.setting)), "refresh" == b) {
                        for (var f = this.setting.data.key.children, g = 0, h = a[f] ? a[f].length : 0; h > g; g++)data.removeNodeCache(d, a[f][g]);
                        if (data.removeSelectedNode(d), a[f] = [], e)this.setting.treeObj.empty(); else {
                            var i = $("#" + a.tId + consts.id.UL);
                            i.empty()
                        }
                    }
                    view.asyncNode(this.setting, e ? null : a, !!c)
                }
            }, refresh: function () {
                this.setting.treeObj.empty();
                var a = data.getRoot(this.setting), b = a[this.setting.data.key.children];
                data.initRoot(this.setting), a[this.setting.data.key.children] = b, data.initCache(this.setting), view.createNodes(this.setting, 0, a[this.setting.data.key.children])
            }, removeChildNodes: function (a) {
                if (!a)return null;
                var b = d.data.key.children, c = a[b];
                return view.removeChildNodes(d, a), c ? c : null
            }, removeNode: function (a, b) {
                a && (b = !!b, b && 0 == tools.apply(d.callback.beforeRemove, [d.treeId, a], !0) || (view.removeNode(d, a), b && this.setting.treeObj.trigger(consts.event.REMOVE, [d.treeId, a])))
            }, selectNode: function (a, b) {
                if (a && tools.uCanDo(this.setting)) {
                    if (b = d.view.selectedMulti && b, a.parentTId)view.expandCollapseParentNode(this.setting, a.getParentNode(), !0, !1, function () {
                        try {
                            $("#" + a.tId).focus().blur()
                        } catch (b) {
                        }
                    }); else try {
                        $("#" + a.tId).focus().blur()
                    } catch (c) {
                    }
                    view.selectNode(this.setting, a, b)
                }
            }, transformTozTreeNodes: function (a) {
                return data.transformTozTreeFormat(this.setting, a)
            }, transformToArray: function (a) {
                return data.transformToArrayFormat(this.setting, a)
            }, updateNode: function (a) {
                if (a) {
                    var c = $("#" + a.tId);
                    c.get(0) && tools.uCanDo(this.setting) && (view.setNodeName(this.setting, a), view.setNodeTarget(a), view.setNodeUrl(this.setting, a), view.setNodeLineIcos(this.setting, a), view.setNodeFontCss(this.setting, a))
                }
            }};
            return e.treeTools = g, data.setZTreeTools(d, g), e[f] && e[f].length > 0 ? view.createNodes(d, 0, e[f]) : d.async.enable && d.async.url && "" !== d.async.url && view.asyncNode(d), g
        }};
        var zt = $.fn.zTree, consts = zt.consts
    })(jQuery), function (a) {
        var b = {event: {CHECK: "ztree_check"}, id: {CHECK: "_check"}, checkbox: {STYLE: "checkbox", DEFAULT: "chk", DISABLED: "disable", FALSE: "false", TRUE: "true", FULL: "full", PART: "part", FOCUS: "focus"}, radio: {STYLE: "radio", TYPE_ALL: "all", TYPE_LEVEL: "level"}}, c = {check: {enable: !1, autoCheckTrigger: !1, chkStyle: b.checkbox.STYLE, nocheckInherit: !1, chkDisabledInherit: !1, radioType: b.radio.TYPE_LEVEL, chkboxType: {Y: "ps", N: "ps"}}, data: {key: {checked: "checked"}}, callback: {beforeCheck: null, onCheck: null}}, d = function (a) {
            var b = v.getRoot(a);
            b.radioCheckedList = []
        }, e = function () {
        }, f = function (a) {
            var b = a.treeObj, c = t.event;
            b.bind(c.CHECK, function (b, c, d, e) {
                s.apply(a.callback.onCheck, [c ? c : b, d, e])
            })
        }, g = function (a) {
            var b = a.treeObj, c = t.event;
            b.unbind(c.CHECK)
        }, h = function (a) {
            var b = a.target, c = v.getSetting(a.data.treeId), d = "", e = null, f = "", g = "", h = null, i = null;
            if (s.eqs(a.type, "mouseover") ? c.check.enable && s.eqs(b.tagName, "span") && null !== b.getAttribute("treeNode" + t.id.CHECK) && (d = b.parentNode.id, f = "mouseoverCheck") : s.eqs(a.type, "mouseout") ? c.check.enable && s.eqs(b.tagName, "span") && null !== b.getAttribute("treeNode" + t.id.CHECK) && (d = b.parentNode.id, f = "mouseoutCheck") : s.eqs(a.type, "click") && c.check.enable && s.eqs(b.tagName, "span") && null !== b.getAttribute("treeNode" + t.id.CHECK) && (d = b.parentNode.id, f = "checkNode"), d.length > 0)switch (e = v.getNodeCache(c, d), f) {
                case"checkNode":
                    h = n.onCheckNode;
                    break;
                case"mouseoverCheck":
                    h = n.onMouseoverCheck;
                    break;
                case"mouseoutCheck":
                    h = n.onMouseoutCheck
            }
            var j = {stop: !1, node: e, nodeEventType: f, nodeEventCallback: h, treeEventType: g, treeEventCallback: i};
            return j
        }, i = function (a, b, c, d) {
            if (c) {
                var h = a.data.key.checked;
                "string" == typeof c[h] && (c[h] = s.eqs(c[h], "true")), c[h] = !!c[h], c.checkedOld = c[h], "string" == typeof c.nocheck && (c.nocheck = s.eqs(c.nocheck, "true")), c.nocheck = !!c.nocheck || a.check.nocheckInherit && d && !!d.nocheck, "string" == typeof c.chkDisabled && (c.chkDisabled = s.eqs(c.chkDisabled, "true")), c.chkDisabled = !!c.chkDisabled || a.check.chkDisabledInherit && d && !!d.chkDisabled, "string" == typeof c.halfCheck && (c.halfCheck = s.eqs(c.halfCheck, "true")), c.halfCheck = !!c.halfCheck, c.check_Child_State = -1, c.check_Focus = !1, c.getCheckStatus = function () {
                    return v.getCheckStatus(a, c)
                }
            }
        }, j = function (a, b, c) {
            var d = a.data.key.checked;
            if (a.check.enable) {
                if (v.makeChkFlag(a, b), a.check.chkStyle == t.radio.STYLE && a.check.radioType == t.radio.TYPE_ALL && b[d]) {
                    var e = v.getRoot(a);
                    e.radioCheckedList.push(b)
                }
                c.push("<span ID='", b.tId, t.id.CHECK, "' class='", u.makeChkClass(a, b), "' treeNode", t.id.CHECK, b.nocheck === !0 ? " style='display:none;'" : "", "></span>")
            }
        }, k = function (b, c) {
            c.checkNode = function (c, d, e, f) {
                var g = this.setting.data.key.checked;
                if (c.chkDisabled !== !0 && (d !== !0 && d !== !1 && (d = !c[g]), f = !!f, (c[g] !== d || e) && (!f || 0 != s.apply(this.setting.callback.beforeCheck, [this.setting.treeId, c], !0)) && s.uCanDo(this.setting) && this.setting.check.enable && c.nocheck !== !0)) {
                    c[g] = d;
                    var h = a("#" + c.tId + t.id.CHECK);
                    (e || this.setting.check.chkStyle === t.radio.STYLE) && u.checkNodeRelation(this.setting, c), u.setChkClass(this.setting, h, c), u.repairParentChkClassWithSelf(this.setting, c), f && b.treeObj.trigger(t.event.CHECK, [null, b.treeId, c])
                }
            }, c.checkAllNodes = function (a) {
                u.repairAllChk(this.setting, !!a)
            }, c.getCheckedNodes = function (a) {
                var c = this.setting.data.key.children;
                return a = a !== !1, v.getTreeCheckedNodes(this.setting, v.getRoot(b)[c], a)
            }, c.getChangeCheckedNodes = function () {
                var a = this.setting.data.key.children;
                return v.getTreeChangeCheckedNodes(this.setting, v.getRoot(b)[a])
            }, c.setChkDisabled = function (a, b, c, d) {
                b = !!b, c = !!c, d = !!d, u.repairSonChkDisabled(this.setting, a, b, d), u.repairParentChkDisabled(this.setting, a.getParentNode(), b, c)
            };
            var d = c.updateNode;
            c.updateNode = function (b, e) {
                if (d && d.apply(c, arguments), b && this.setting.check.enable) {
                    var f = a("#" + b.tId);
                    if (f.get(0) && s.uCanDo(this.setting)) {
                        var g = a("#" + b.tId + t.id.CHECK);
                        (1 == e || this.setting.check.chkStyle === t.radio.STYLE) && u.checkNodeRelation(this.setting, b), u.setChkClass(this.setting, g, b), u.repairParentChkClassWithSelf(this.setting, b)
                    }
                }
            }
        }, l = {getRadioCheckedList: function (a) {
            for (var b = v.getRoot(a).radioCheckedList, c = 0, d = b.length; d > c; c++)v.getNodeCache(a, b[c].tId) || (b.splice(c, 1), c--, d--);
            return b
        }, getCheckStatus: function (a, b) {
            if (!a.check.enable || b.nocheck || b.chkDisabled)return null;
            var c = a.data.key.checked, d = {checked: b[c], half: b.halfCheck ? b.halfCheck : a.check.chkStyle == t.radio.STYLE ? 2 === b.check_Child_State : b[c] ? b.check_Child_State > -1 && 2 > b.check_Child_State : b.check_Child_State > 0};
            return d
        }, getTreeCheckedNodes: function (a, b, c, d) {
            if (!b)return[];
            var e = a.data.key.children, f = a.data.key.checked, g = c && a.check.chkStyle == t.radio.STYLE && a.check.radioType == t.radio.TYPE_ALL;
            d = d ? d : [];
            for (var h = 0, i = b.length; i > h && (b[h].nocheck === !0 || b[h].chkDisabled === !0 || b[h][f] != c || (d.push(b[h]), !g)) && (v.getTreeCheckedNodes(a, b[h][e], c, d), !(g && d.length > 0)); h++);
            return d
        }, getTreeChangeCheckedNodes: function (a, b, c) {
            if (!b)return[];
            var d = a.data.key.children, e = a.data.key.checked;
            c = c ? c : [];
            for (var f = 0, g = b.length; g > f; f++)b[f].nocheck !== !0 && b[f].chkDisabled !== !0 && b[f][e] != b[f].checkedOld && c.push(b[f]), v.getTreeChangeCheckedNodes(a, b[f][d], c);
            return c
        }, makeChkFlag: function (a, b) {
            if (b) {
                var c = a.data.key.children, d = a.data.key.checked, e = -1;
                if (b[c])for (var f = 0, g = b[c].length; g > f; f++) {
                    var h = b[c][f], i = -1;
                    if (a.check.chkStyle == t.radio.STYLE) {
                        if (i = h.nocheck === !0 || h.chkDisabled === !0 ? h.check_Child_State : h.halfCheck === !0 ? 2 : h[d] ? 2 : h.check_Child_State > 0 ? 2 : 0, 2 == i) {
                            e = 2;
                            break
                        }
                        0 == i && (e = 0)
                    } else if (a.check.chkStyle == t.checkbox.STYLE) {
                        if (i = h.nocheck === !0 || h.chkDisabled === !0 ? h.check_Child_State : h.halfCheck === !0 ? 1 : h[d] ? -1 === h.check_Child_State || 2 === h.check_Child_State ? 2 : 1 : h.check_Child_State > 0 ? 1 : 0, 1 === i) {
                            e = 1;
                            break
                        }
                        if (2 === i && e > -1 && f > 0 && i !== e) {
                            e = 1;
                            break
                        }
                        if (2 === e && i > -1 && 2 > i) {
                            e = 1;
                            break
                        }
                        i > -1 && (e = i)
                    }
                }
                b.check_Child_State = e
            }
        }}, m = {}, n = {onCheckNode: function (b, c) {
            if (c.chkDisabled === !0)return!1;
            var d = v.getSetting(b.data.treeId), e = d.data.key.checked;
            if (0 == s.apply(d.callback.beforeCheck, [d.treeId, c], !0))return!0;
            c[e] = !c[e], u.checkNodeRelation(d, c);
            var f = a("#" + c.tId + t.id.CHECK);
            return u.setChkClass(d, f, c), u.repairParentChkClassWithSelf(d, c), d.treeObj.trigger(t.event.CHECK, [b, d.treeId, c]), !0
        }, onMouseoverCheck: function (b, c) {
            if (c.chkDisabled === !0)return!1;
            var d = v.getSetting(b.data.treeId), e = a("#" + c.tId + t.id.CHECK);
            return c.check_Focus = !0, u.setChkClass(d, e, c), !0
        }, onMouseoutCheck: function (b, c) {
            if (c.chkDisabled === !0)return!1;
            var d = v.getSetting(b.data.treeId), e = a("#" + c.tId + t.id.CHECK);
            return c.check_Focus = !1, u.setChkClass(d, e, c), !0
        }}, o = {}, p = {checkNodeRelation: function (b, c) {
            var d, e, f, g = b.data.key.children, h = b.data.key.checked, i = t.radio;
            if (b.check.chkStyle == i.STYLE) {
                var j = v.getRadioCheckedList(b);
                if (c[h])if (b.check.radioType == i.TYPE_ALL) {
                    for (e = j.length - 1; e >= 0; e--)d = j[e], d[h] = !1, j.splice(e, 1), u.setChkClass(b, a("#" + d.tId + t.id.CHECK), d), d.parentTId != c.parentTId && u.repairParentChkClassWithSelf(b, d);
                    j.push(c)
                } else {
                    var k = c.parentTId ? c.getParentNode() : v.getRoot(b);
                    for (e = 0, f = k[g].length; f > e; e++)d = k[g][e], d[h] && d != c && (d[h] = !1, u.setChkClass(b, a("#" + d.tId + t.id.CHECK), d))
                } else if (b.check.radioType == i.TYPE_ALL)for (e = 0, f = j.length; f > e; e++)if (c == j[e]) {
                    j.splice(e, 1);
                    break
                }
            } else c[h] && (!c[g] || 0 == c[g].length || b.check.chkboxType.Y.indexOf("s") > -1) && u.setSonNodeCheckBox(b, c, !0), c[h] || c[g] && 0 != c[g].length && !(b.check.chkboxType.N.indexOf("s") > -1) || u.setSonNodeCheckBox(b, c, !1), c[h] && b.check.chkboxType.Y.indexOf("p") > -1 && u.setParentNodeCheckBox(b, c, !0), !c[h] && b.check.chkboxType.N.indexOf("p") > -1 && u.setParentNodeCheckBox(b, c, !1)
        }, makeChkClass: function (a, b) {
            var c = a.data.key.checked, d = t.checkbox, e = t.radio, f = "";
            f = b.chkDisabled === !0 ? d.DISABLED : b.halfCheck ? d.PART : a.check.chkStyle == e.STYLE ? 1 > b.check_Child_State ? d.FULL : d.PART : b[c] ? 2 === b.check_Child_State || -1 === b.check_Child_State ? d.FULL : d.PART : 1 > b.check_Child_State ? d.FULL : d.PART;
            var g = a.check.chkStyle + "_" + (b[c] ? d.TRUE : d.FALSE) + "_" + f;
            return g = b.check_Focus && b.chkDisabled !== !0 ? g + "_" + d.FOCUS : g, "button " + d.DEFAULT + " " + g
        }, repairAllChk: function (a, b) {
            if (a.check.enable && a.check.chkStyle === t.checkbox.STYLE)for (var c = a.data.key.checked, d = a.data.key.children, e = v.getRoot(a), f = 0, g = e[d].length; g > f; f++) {
                var h = e[d][f];
                h.nocheck !== !0 && h.chkDisabled !== !0 && (h[c] = b), u.setSonNodeCheckBox(a, h, b)
            }
        }, repairChkClass: function (b, c) {
            if (c && (v.makeChkFlag(b, c), c.nocheck !== !0)) {
                var d = a("#" + c.tId + t.id.CHECK);
                u.setChkClass(b, d, c)
            }
        }, repairParentChkClass: function (a, b) {
            if (b && b.parentTId) {
                var c = b.getParentNode();
                u.repairChkClass(a, c), u.repairParentChkClass(a, c)
            }
        }, repairParentChkClassWithSelf: function (a, b) {
            if (b) {
                var c = a.data.key.children;
                b[c] && b[c].length > 0 ? u.repairParentChkClass(a, b[c][0]) : u.repairParentChkClass(a, b)
            }
        }, repairSonChkDisabled: function (a, b, c, d) {
            if (b) {
                var e = a.data.key.children;
                if (b.chkDisabled != c && (b.chkDisabled = c), u.repairChkClass(a, b), b[e] && d)for (var f = 0, g = b[e].length; g > f; f++) {
                    var h = b[e][f];
                    u.repairSonChkDisabled(a, h, c, d)
                }
            }
        }, repairParentChkDisabled: function (a, b, c, d) {
            b && (b.chkDisabled != c && d && (b.chkDisabled = c), u.repairChkClass(a, b), u.repairParentChkDisabled(a, b.getParentNode(), c, d))
        }, setChkClass: function (a, b, c) {
            b && (c.nocheck === !0 ? b.hide() : b.show(), b.removeClass(), b.addClass(u.makeChkClass(a, c)))
        }, setParentNodeCheckBox: function (b, c, d, e) {
            var f = b.data.key.children, g = b.data.key.checked, h = a("#" + c.tId + t.id.CHECK);
            if (e || (e = c), v.makeChkFlag(b, c), c.nocheck !== !0 && c.chkDisabled !== !0 && (c[g] = d, u.setChkClass(b, h, c), b.check.autoCheckTrigger && c != e && b.treeObj.trigger(t.event.CHECK, [null, b.treeId, c])), c.parentTId) {
                var i = !0;
                if (!d)for (var j = c.getParentNode()[f], k = 0, l = j.length; l > k; k++)if (j[k].nocheck !== !0 && j[k].chkDisabled !== !0 && j[k][g] || (j[k].nocheck === !0 || j[k].chkDisabled === !0) && j[k].check_Child_State > 0) {
                    i = !1;
                    break
                }
                i && u.setParentNodeCheckBox(b, c.getParentNode(), d, e)
            }
        }, setSonNodeCheckBox: function (b, c, d, e) {
            if (c) {
                var f = b.data.key.children, g = b.data.key.checked, h = a("#" + c.tId + t.id.CHECK);
                e || (e = c);
                var i = !1;
                if (c[f])for (var j = 0, k = c[f].length; k > j && c.chkDisabled !== !0; j++) {
                    var l = c[f][j];
                    u.setSonNodeCheckBox(b, l, d, e), l.chkDisabled === !0 && (i = !0)
                }
                c != v.getRoot(b) && c.chkDisabled !== !0 && (i && c.nocheck !== !0 && v.makeChkFlag(b, c), c.nocheck !== !0 && c.chkDisabled !== !0 ? (c[g] = d, i || (c.check_Child_State = c[f] && c[f].length > 0 ? d ? 2 : 0 : -1)) : c.check_Child_State = -1, u.setChkClass(b, h, c), b.check.autoCheckTrigger && c != e && c.nocheck !== !0 && c.chkDisabled !== !0 && b.treeObj.trigger(t.event.CHECK, [null, b.treeId, c]))
            }
        }}, q = {tools: o, view: p, event: m, data: l};
        a.extend(!0, a.fn.zTree.consts, b), a.extend(!0, a.fn.zTree._z, q);
        var r = a.fn.zTree, s = r._z.tools, t = r.consts, u = r._z.view, v = r._z.data;
        r._z.event, v.exSetting(c), v.addInitBind(f), v.addInitUnBind(g), v.addInitCache(e), v.addInitNode(i), v.addInitProxy(h), v.addInitRoot(d), v.addBeforeA(j), v.addZTreeTools(k);
        var x = u.createNodes;
        u.createNodes = function (a, b, c, d) {
            x && x.apply(u, arguments), c && u.repairParentChkClassWithSelf(a, d)
        };
        var y = u.removeNode;
        u.removeNode = function (a, b) {
            var c = b.getParentNode();
            y && y.apply(u, arguments), b && c && (u.repairChkClass(a, c), u.repairParentChkClass(a, c))
        };
        var z = u.appendNodes;
        u.appendNodes = function (a, b, c, d) {
            var g = "";
            return z && (g = z.apply(u, arguments)), d && v.makeChkFlag(a, d), g
        }
    }(jQuery), function (a) {
        var b = {event: {DRAG: "ztree_drag", DROP: "ztree_drop", REMOVE: "ztree_remove", RENAME: "ztree_rename"}, id: {EDIT: "_edit", INPUT: "_input", REMOVE: "_remove"}, move: {TYPE_INNER: "inner", TYPE_PREV: "prev", TYPE_NEXT: "next"}, node: {CURSELECTED_EDIT: "curSelectedNode_Edit", TMPTARGET_TREE: "tmpTargetzTree", TMPTARGET_NODE: "tmpTargetNode"}}, c = {edit: {enable: !1, editNameSelectAll: !1, showRemoveBtn: !0, showRenameBtn: !0, removeTitle: "remove", renameTitle: "rename", drag: {autoExpandTrigger: !1, isCopy: !0, isMove: !0, prev: !0, next: !0, inner: !0, minMoveSize: 5, borderMax: 10, borderMin: -5, maxShowNodeNum: 5, autoOpenTime: 500}}, view: {addHoverDom: null, removeHoverDom: null}, callback: {beforeDrag: null, beforeDragOpen: null, beforeDrop: null, beforeEditName: null, beforeRename: null, onDrag: null, onDrop: null, onRename: null}}, d = function (a) {
            var b = u.getRoot(a);
            b.curEditNode = null, b.curEditInput = null, b.curHoverNode = null, b.dragFlag = 0, b.dragNodeShowBefore = [], b.dragMaskList = new Array, b.showHoverDom = !0
        }, e = function () {
        }, f = function (a) {
            var b = a.treeObj, c = s.event;
            b.bind(c.RENAME, function (b, c, d) {
                r.apply(a.callback.onRename, [b, c, d])
            }), b.bind(c.REMOVE, function (b, c, d) {
                r.apply(a.callback.onRemove, [b, c, d])
            }), b.bind(c.DRAG, function (b, c, d, e) {
                r.apply(a.callback.onDrag, [c, d, e])
            }), b.bind(c.DROP, function (b, c, d, e, f, g, h) {
                r.apply(a.callback.onDrop, [c, d, e, f, g, h])
            })
        }, g = function (a) {
            var b = a.treeObj, c = s.event;
            b.unbind(c.RENAME), b.unbind(c.REMOVE), b.unbind(c.DRAG), b.unbind(c.DROP)
        }, h = function (a) {
            var b = a.target, c = u.getSetting(a.data.treeId), d = a.relatedTarget, e = "", f = null, g = "", h = "", i = null, j = null, k = null;
            if (r.eqs(a.type, "mouseover") ? (k = r.getMDom(c, b, [
                {tagName: "a", attrName: "treeNode" + s.id.A}
            ]), k && (e = k.parentNode.id, g = "hoverOverNode")) : r.eqs(a.type, "mouseout") ? (k = r.getMDom(c, d, [
                {tagName: "a", attrName: "treeNode" + s.id.A}
            ]), k || (e = "remove", g = "hoverOutNode")) : r.eqs(a.type, "mousedown") && (k = r.getMDom(c, b, [
                {tagName: "a", attrName: "treeNode" + s.id.A}
            ]), k && (e = k.parentNode.id, g = "mousedownNode")), e.length > 0)switch (f = u.getNodeCache(c, e), g) {
                case"mousedownNode":
                    i = m.onMousedownNode;
                    break;
                case"hoverOverNode":
                    i = m.onHoverOverNode;
                    break;
                case"hoverOutNode":
                    i = m.onHoverOutNode
            }
            var l = {stop: !1, node: f, nodeEventType: g, nodeEventCallback: i, treeEventType: h, treeEventCallback: j};
            return l
        }, i = function (a, b, c) {
            c && (c.isHover = !1, c.editNameFlag = !1)
        }, j = function (b, c) {
            c.cancelEditName = function (a) {
                var c = u.getRoot(b), d = b.data.key.name, e = c.curEditNode;
                c.curEditNode && t.cancelCurEditNode(b, a ? a : e[d])
            }, c.copyNode = function (a, c, d, e) {
                function g() {
                    t.addNodes(b, a, [f], e)
                }

                if (!c)return null;
                if (a && !a.isParent && b.data.keep.leaf && d === s.move.TYPE_INNER)return null;
                var f = r.clone(c);
                return a || (a = null, d = s.move.TYPE_INNER), d == s.move.TYPE_INNER ? r.canAsync(b, a) ? t.asyncNode(b, a, e, g) : g() : (t.addNodes(b, a.parentNode, [f], e), t.moveNode(b, a, f, d, !1, e)), f
            }, c.editName = function (a) {
                a && a.tId && a === u.getNodeCache(b, a.tId) && (a.parentTId && t.expandCollapseParentNode(b, a.getParentNode(), !0), t.editNode(b, a))
            }, c.moveNode = function (c, d, e, f) {
                function g() {
                    t.moveNode(b, c, d, e, !1, f)
                }

                return d ? c && !c.isParent && b.data.keep.leaf && e === s.move.TYPE_INNER ? null : c && (d.parentTId == c.tId && e == s.move.TYPE_INNER || a("#" + d.tId).find("#" + c.tId).length > 0) ? null : (c || (c = null), r.canAsync(b, c) ? t.asyncNode(b, c, f, g) : g(), d) : d
            }, c.setEditable = function (a) {
                return b.edit.enable = a, this.refresh()
            }
        }, k = {setSonNodeLevel: function (a, b, c) {
            if (c) {
                var d = a.data.key.children;
                if (c.level = b ? b.level + 1 : 0, c[d])for (var e = 0, f = c[d].length; f > e; e++)c[d][e] && u.setSonNodeLevel(a, c, c[d][e])
            }
        }}, l = {}, m = {onHoverOverNode: function (a, b) {
            var c = u.getSetting(a.data.treeId), d = u.getRoot(c);
            d.curHoverNode != b && m.onHoverOutNode(a), d.curHoverNode = b, t.addHoverDom(c, b)
        }, onHoverOutNode: function (a) {
            var c = u.getSetting(a.data.treeId), d = u.getRoot(c);
            d.curHoverNode && !u.isSelectedNode(c, d.curHoverNode) && (t.removeTreeDom(c, d.curHoverNode), d.curHoverNode = null)
        }, onMousedownNode: function (c, d) {
            function E(c) {
                if (0 == h.dragFlag && Math.abs(B - c.clientX) < g.edit.drag.minMoveSize && Math.abs(C - c.clientY) < g.edit.drag.minMoveSize)return!0;
                var d, e, f, i, j, E = g.data.key.children;
                if (a("body").css("cursor", "pointer"), 0 == h.dragFlag) {
                    if (0 == r.apply(g.callback.beforeDrag, [g.treeId, k], !0))return F(c), !0;
                    for (d = 0, e = k.length; e > d; d++)0 == d && (h.dragNodeShowBefore = []), f = k[d], f.isParent && f.open ? (t.expandCollapseNode(g, f, !f.open), h.dragNodeShowBefore[f.tId] = !0) : h.dragNodeShowBefore[f.tId] = !1;
                    h.dragFlag = 1, h.showHoverDom = !1, r.showIfameMask(g, !0);
                    var G = !0, H = -1;
                    if (k.length > 1) {
                        var I = k[0].parentTId ? k[0].getParentNode()[E] : u.getNodes(g);
                        for (j = [], d = 0, e = I.length; e > d; d++)if (void 0 !== h.dragNodeShowBefore[I[d].tId] && (G && H > -1 && H + 1 !== d && (G = !1), j.push(I[d]), H = d), k.length === j.length) {
                            k = j;
                            break
                        }
                    }
                    for (G && (v = k[0].getPreNode(), w = k[k.length - 1].getNextNode()), m = a("<ul class='zTreeDragUL'></ul>"), d = 0, e = k.length; e > d; d++)if (f = k[d], f.editNameFlag = !1, t.selectNode(g, f, d > 0), t.removeTreeDom(g, f), i = a("<li id='" + f.tId + "_tmp'></li>"), i.append(a("#" + f.tId + s.id.A).clone()), i.css("padding", "0"), i.children("#" + f.tId + s.id.A).removeClass(s.node.CURSELECTED), m.append(i), d == g.edit.drag.maxShowNodeNum - 1) {
                        i = a("<li id='" + f.tId + "_moretmp'><a>  ...  </a></li>"), m.append(i);
                        break
                    }
                    m.attr("id", k[0].tId + s.id.UL + "_tmp"), m.addClass(g.treeObj.attr("class")), m.appendTo("body"), n = a("<span class='tmpzTreeMove_arrow'></span>"), n.attr("id", "zTreeMove_arrow_tmp"), n.appendTo("body"), g.treeObj.trigger(s.event.DRAG, [c, g.treeId, k])
                }
                if (1 == h.dragFlag) {
                    if (o && n.attr("id") == c.target.id && z && c.clientX + l.scrollLeft() + 2 > a("#" + z + s.id.A, o).offset().left) {
                        var J = a("#" + z + s.id.A, o);
                        c.target = J.length > 0 ? J.get(0) : c.target
                    } else o && (o.removeClass(s.node.TMPTARGET_TREE), z && a("#" + z + s.id.A, o).removeClass(s.node.TMPTARGET_NODE + "_" + s.move.TYPE_PREV).removeClass(s.node.TMPTARGET_NODE + "_" + b.move.TYPE_NEXT).removeClass(s.node.TMPTARGET_NODE + "_" + b.move.TYPE_INNER));
                    o = null, z = null, p = !1, q = g;
                    var K = u.getSettings();
                    for (var L in K)K[L].treeId && K[L].edit.enable && K[L].treeId != g.treeId && (c.target.id == K[L].treeId || a(c.target).parents("#" + K[L].treeId).length > 0) && (p = !0, q = K[L]);
                    var M = l.scrollTop(), N = l.scrollLeft(), O = q.treeObj.offset(), P = q.treeObj.get(0).scrollHeight, Q = q.treeObj.get(0).scrollWidth, R = c.clientY + M - O.top, S = q.treeObj.height() + O.top - c.clientY - M, T = c.clientX + N - O.left, U = q.treeObj.width() + O.left - c.clientX - N, V = g.edit.drag.borderMax > R && R > g.edit.drag.borderMin, W = g.edit.drag.borderMax > S && S > g.edit.drag.borderMin, X = g.edit.drag.borderMax > T && T > g.edit.drag.borderMin, Y = g.edit.drag.borderMax > U && U > g.edit.drag.borderMin, Z = R > g.edit.drag.borderMin && S > g.edit.drag.borderMin && T > g.edit.drag.borderMin && U > g.edit.drag.borderMin, $ = V && 0 >= q.treeObj.scrollTop(), _ = W && q.treeObj.scrollTop() + q.treeObj.height() + 10 >= P, ab = X && 0 >= q.treeObj.scrollLeft(), bb = Y && q.treeObj.scrollLeft() + q.treeObj.width() + 10 >= Q;
                    if (c.target.id && q.treeObj.find("#" + c.target.id).length > 0) {
                        for (var cb = c.target; cb && cb.tagName && !r.eqs(cb.tagName, "li") && cb.id != q.treeId;)cb = cb.parentNode;
                        var db = !0;
                        for (d = 0, e = k.length; e > d; d++) {
                            if (f = k[d], cb.id === f.tId) {
                                db = !1;
                                break
                            }
                            if (a("#" + f.tId).find("#" + cb.id).length > 0) {
                                db = !1;
                                break
                            }
                        }
                        db && c.target.id && (c.target.id == cb.id + s.id.A || a(c.target).parents("#" + cb.id + s.id.A).length > 0) && (o = a(cb), z = cb.id)
                    }
                    f = k[0], Z && (c.target.id == q.treeId || a(c.target).parents("#" + q.treeId).length > 0) && (!o && (c.target.id == q.treeId || $ || _ || ab || bb) && (p || !p && f.parentTId) && (o = q.treeObj), V ? q.treeObj.scrollTop(q.treeObj.scrollTop() - 10) : W && q.treeObj.scrollTop(q.treeObj.scrollTop() + 10), X ? q.treeObj.scrollLeft(q.treeObj.scrollLeft() - 10) : Y && q.treeObj.scrollLeft(q.treeObj.scrollLeft() + 10), o && o != q.treeObj && o.offset().left < q.treeObj.offset().left && q.treeObj.scrollLeft(q.treeObj.scrollLeft() + o.offset().left - q.treeObj.offset().left)), m.css({top: c.clientY + M + 3 + "px", left: c.clientX + N + 3 + "px"});
                    var eb = 0, fb = 0;
                    if (o && o.attr("id") != q.treeId) {
                        var gb = null == z ? null : u.getNodeCache(q, z), hb = c.ctrlKey && g.edit.drag.isMove && g.edit.drag.isCopy || !g.edit.drag.isMove && g.edit.drag.isCopy, ib = !(!v || z !== v.tId), jb = !(!w || z !== w.tId), kb = f.parentTId && f.parentTId == z, lb = (hb || !jb) && r.apply(q.edit.drag.prev, [q.treeId, k, gb], !!q.edit.drag.prev), mb = (hb || !ib) && r.apply(q.edit.drag.next, [q.treeId, k, gb], !!q.edit.drag.next), nb = !(!hb && kb || q.data.keep.leaf && !gb.isParent || !r.apply(q.edit.drag.inner, [q.treeId, k, gb], !!q.edit.drag.inner));
                        if (lb || mb || nb) {
                            var ob = a("#" + z + s.id.A, o), pb = gb.isLastNode ? null : a("#" + gb.getNextNode().tId + s.id.A, o.next()), qb = ob.offset().top, rb = ob.offset().left, sb = lb ? nb ? .25 : mb ? .5 : 1 : -1, tb = mb ? nb ? .75 : lb ? .5 : 0 : -1, ub = (c.clientY + M - qb) / ob.height();
                            if ((1 == sb || sb >= ub && ub >= -.2) && lb ? (eb = 1 - n.width(), fb = qb - n.height() / 2, A = s.move.TYPE_PREV) : (0 == tb || ub >= tb && 1.2 >= ub) && mb ? (eb = 1 - n.width(), fb = null == pb || gb.isParent && gb.open ? qb + ob.height() - n.height() / 2 : pb.offset().top - n.height() / 2, A = s.move.TYPE_NEXT) : (eb = 5 - n.width(), fb = qb, A = s.move.TYPE_INNER), n.css({display: "block", top: fb + "px", left: rb + eb + "px"}), ob.addClass(s.node.TMPTARGET_NODE + "_" + A), (x != z || y != A) && (D = (new Date).getTime()), gb && gb.isParent && A == s.move.TYPE_INNER) {
                                var vb = !0;
                                window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== gb.tId ? (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null) : window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === gb.tId && (vb = !1), vb && (window.zTreeMoveTimer = setTimeout(function () {
                                    A == s.move.TYPE_INNER && gb && gb.isParent && !gb.open && (new Date).getTime() - D > q.edit.drag.autoOpenTime && r.apply(q.callback.beforeDragOpen, [q.treeId, gb], !0) && (t.switchNode(q, gb), q.edit.drag.autoExpandTrigger && q.treeObj.trigger(s.event.EXPAND, [q.treeId, gb]))
                                }, q.edit.drag.autoOpenTime + 50), window.zTreeMoveTargetNodeTId = gb.tId)
                            }
                        } else o = null, z = "", A = s.move.TYPE_INNER, n.css({display: "none"}), window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null)
                    } else A = s.move.TYPE_INNER, o && r.apply(q.edit.drag.inner, [q.treeId, k, null], !!q.edit.drag.inner) ? o.addClass(s.node.TMPTARGET_TREE) : o = null, n.css({display: "none"}), window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null);
                    x = z, y = A
                }
                return!1
            }

            function F(c) {
                function w() {
                    if (p) {
                        if (!i)for (var b = 0, d = k.length; d > b; b++)t.removeNode(g, k[b]);
                        if (A == s.move.TYPE_INNER)t.addNodes(q, j, v); else if (t.addNodes(q, j.getParentNode(), v), A == s.move.TYPE_PREV)for (b = 0, d = v.length; d > b; b++)t.moveNode(q, j, v[b], A, !1); else for (b = -1, d = v.length - 1; d > b; d--)t.moveNode(q, j, v[d], A, !1)
                    } else if (i && A == s.move.TYPE_INNER)t.addNodes(q, j, v); else if (i && t.addNodes(q, j.getParentNode(), v), A != s.move.TYPE_NEXT)for (b = 0, d = v.length; d > b; b++)t.moveNode(q, j, v[b], A, !1); else for (b = -1, d = v.length - 1; d > b; d--)t.moveNode(q, j, v[d], A, !1);
                    for (b = 0, d = v.length; d > b; b++)t.selectNode(q, v[b], b > 0);
                    a("#" + v[0].tId).focus().blur(), g.treeObj.trigger(s.event.DROP, [c, q.treeId, v, j, A, i])
                }

                if (window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null), x = null, y = null, l.unbind("mousemove", E), l.unbind("mouseup", F), l.unbind("selectstart", G), a("body").css("cursor", "auto"), o && (o.removeClass(s.node.TMPTARGET_TREE), z && a("#" + z + s.id.A, o).removeClass(s.node.TMPTARGET_NODE + "_" + s.move.TYPE_PREV).removeClass(s.node.TMPTARGET_NODE + "_" + b.move.TYPE_NEXT).removeClass(s.node.TMPTARGET_NODE + "_" + b.move.TYPE_INNER)), r.showIfameMask(g, !1), h.showHoverDom = !0, 0 != h.dragFlag) {
                    h.dragFlag = 0;
                    var d, e, f;
                    for (d = 0, e = k.length; e > d; d++)f = k[d], f.isParent && h.dragNodeShowBefore[f.tId] && !f.open && (t.expandCollapseNode(g, f, !f.open), delete h.dragNodeShowBefore[f.tId]);
                    m && m.remove(), n && n.remove();
                    var i = c.ctrlKey && g.edit.drag.isMove && g.edit.drag.isCopy || !g.edit.drag.isMove && g.edit.drag.isCopy;
                    if (!i && o && z && k[0].parentTId && z == k[0].parentTId && A == s.move.TYPE_INNER && (o = null), o) {
                        var j = null == z ? null : u.getNodeCache(q, z);
                        if (0 == r.apply(g.callback.beforeDrop, [q.treeId, k, j, A, i], !0))return;
                        var v = i ? r.clone(k) : k;
                        A == s.move.TYPE_INNER && r.canAsync(q, j) ? t.asyncNode(q, j, !1, w) : w()
                    } else {
                        for (d = 0, e = k.length; e > d; d++)t.selectNode(q, k[d], d > 0);
                        g.treeObj.trigger(s.event.DROP, [c, g.treeId, k, null, null, null])
                    }
                }
            }

            function G() {
                return!1
            }

            var e, f, g = u.getSetting(c.data.treeId), h = u.getRoot(g);
            if (2 == c.button || !g.edit.enable || !g.edit.drag.isCopy && !g.edit.drag.isMove)return!0;
            var i = c.target, j = u.getRoot(g).curSelectedList, k = [];
            if (u.isSelectedNode(g, d))for (e = 0, f = j.length; f > e; e++) {
                if (j[e].editNameFlag && r.eqs(i.tagName, "input") && null !== i.getAttribute("treeNode" + s.id.INPUT))return!0;
                if (k.push(j[e]), k[0].parentTId !== j[e].parentTId) {
                    k = [d];
                    break
                }
            } else k = [d];
            t.editNodeBlur = !0, t.cancelCurEditNode(g, null, !0);
            var m, n, o, v, w, l = a(document), p = !1, q = g, x = null, y = null, z = null, A = s.move.TYPE_INNER, B = c.clientX, C = c.clientY, D = (new Date).getTime();
            return r.uCanDo(g) && l.bind("mousemove", E), l.bind("mouseup", F), l.bind("selectstart", G), c.preventDefault && c.preventDefault(), !0
        }}, n = {getAbs: function (a) {
            var b = a.getBoundingClientRect();
            return[b.left, b.top]
        }, inputFocus: function (a) {
            a.get(0) && (a.focus(), r.setCursorPosition(a.get(0), a.val().length))
        }, inputSelect: function (a) {
            a.get(0) && (a.focus(), a.select())
        }, setCursorPosition: function (a, b) {
            if (a.setSelectionRange)a.focus(), a.setSelectionRange(b, b); else if (a.createTextRange) {
                var c = a.createTextRange();
                c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
            }
        }, showIfameMask: function (b, c) {
            for (var d = u.getRoot(b); d.dragMaskList.length > 0;)d.dragMaskList[0].remove(), d.dragMaskList.shift();
            if (c)for (var e = a("iframe"), f = 0, g = e.length; g > f; f++) {
                var h = e.get(f), i = r.getAbs(h), j = a("<div id='zTreeMask_" + f + "' class='zTreeMask' style='top:" + i[1] + "px; left:" + i[0] + "px; width:" + h.offsetWidth + "px; height:" + h.offsetHeight + "px;'></div>");
                j.appendTo("body"), d.dragMaskList.push(j)
            }
        }}, o = {addEditBtn: function (b, c) {
            if (!(c.editNameFlag || a("#" + c.tId + s.id.EDIT).length > 0) && r.apply(b.edit.showRenameBtn, [b.treeId, c], b.edit.showRenameBtn)) {
                var d = a("#" + c.tId + s.id.A), e = "<span class='button edit' id='" + c.tId + s.id.EDIT + "' title='" + r.apply(b.edit.renameTitle, [b.treeId, c], b.edit.renameTitle) + "' treeNode" + s.id.EDIT + " style='display:none;'></span>";
                d.append(e), a("#" + c.tId + s.id.EDIT).bind("click", function () {
                    return r.uCanDo(b) && 0 != r.apply(b.callback.beforeEditName, [b.treeId, c], !0) ? (t.editNode(b, c), !1) : !1
                }).show()
            }
        }, addRemoveBtn: function (b, c) {
            if (!(c.editNameFlag || a("#" + c.tId + s.id.REMOVE).length > 0) && r.apply(b.edit.showRemoveBtn, [b.treeId, c], b.edit.showRemoveBtn)) {
                var d = a("#" + c.tId + s.id.A), e = "<span class='button remove' id='" + c.tId + s.id.REMOVE + "' title='" + r.apply(b.edit.removeTitle, [b.treeId, c], b.edit.removeTitle) + "' treeNode" + s.id.REMOVE + " style='display:none;'></span>";
                d.append(e), a("#" + c.tId + s.id.REMOVE).bind("click", function () {
                    return r.uCanDo(b) && 0 != r.apply(b.callback.beforeRemove, [b.treeId, c], !0) ? (t.removeNode(b, c), b.treeObj.trigger(s.event.REMOVE, [b.treeId, c]), !1) : !1
                }).bind("mousedown", function () {
                    return!0
                }).show()
            }
        }, addHoverDom: function (a, b) {
            u.getRoot(a).showHoverDom && (b.isHover = !0, a.edit.enable && (t.addEditBtn(a, b), t.addRemoveBtn(a, b)), r.apply(a.view.addHoverDom, [a.treeId, b]))
        }, cancelCurEditNode: function (b, c) {
            var d = u.getRoot(b), e = b.data.key.name, f = d.curEditNode;
            if (f) {
                var g = d.curEditInput, h = c ? c : g.val();
                if (!c && r.apply(b.callback.beforeRename, [b.treeId, f, h], !0) === !1)return!1;
                f[e] = h ? h : g.val(), c || b.treeObj.trigger(s.event.RENAME, [b.treeId, f]);
                var i = a("#" + f.tId + s.id.A);
                i.removeClass(s.node.CURSELECTED_EDIT), g.unbind(), t.setNodeName(b, f), f.editNameFlag = !1, d.curEditNode = null, d.curEditInput = null, t.selectNode(b, f, !1)
            }
            return d.noSelection = !0, !0
        }, editNode: function (b, c) {
            var d = u.getRoot(b);
            if (t.editNodeBlur = !1, u.isSelectedNode(b, c) && d.curEditNode == c && c.editNameFlag)return setTimeout(function () {
                r.inputFocus(d.curEditInput)
            }, 0), void 0;
            var e = b.data.key.name;
            c.editNameFlag = !0, t.removeTreeDom(b, c), t.cancelCurEditNode(b), t.selectNode(b, c, !1), a("#" + c.tId + s.id.SPAN).html("<input type=text class='rename' id='" + c.tId + s.id.INPUT + "' treeNode" + s.id.INPUT + " >");
            var f = a("#" + c.tId + s.id.INPUT);
            f.attr("value", c[e]), b.edit.editNameSelectAll ? r.inputSelect(f) : r.inputFocus(f), f.bind("blur", function () {
                t.editNodeBlur || t.cancelCurEditNode(b)
            }).bind("keydown", function (a) {
                "13" == a.keyCode ? (t.editNodeBlur = !0, t.cancelCurEditNode(b, null, !0)) : "27" == a.keyCode && t.cancelCurEditNode(b, c[e])
            }).bind("click", function () {
                return!1
            }).bind("dblclick", function () {
                return!1
            }), a("#" + c.tId + s.id.A).addClass(s.node.CURSELECTED_EDIT), d.curEditInput = f, d.noSelection = !1, d.curEditNode = c
        }, moveNode: function (b, c, d, e, f, g) {
            var h = u.getRoot(b), i = b.data.key.children;
            if (c != d && (!b.data.keep.leaf || !c || c.isParent || e != s.move.TYPE_INNER)) {
                var j = d.parentTId ? d.getParentNode() : h, k = null === c || c == h;
                k && null === c && (c = h), k && (e = s.move.TYPE_INNER);
                var l = c.parentTId ? c.getParentNode() : h;
                e != s.move.TYPE_PREV && e != s.move.TYPE_NEXT && (e = s.move.TYPE_INNER), e == s.move.TYPE_INNER && (k ? d.parentTId = null : (c.isParent || (c.isParent = !0, c.open = !!c.open, t.setNodeLineIcos(b, c)), d.parentTId = c.tId));
                var m, n;
                if (k)m = b.treeObj, n = m; else {
                    if (g || e != s.move.TYPE_INNER ? g || t.expandCollapseNode(b, c.getParentNode(), !0, !1) : t.expandCollapseNode(b, c, !0, !1), m = a("#" + c.tId), n = a("#" + c.tId + s.id.UL), m.get(0) && !n.get(0)) {
                        var o = [];
                        t.makeUlHtml(b, c, o, ""), m.append(o.join(""))
                    }
                    n = a("#" + c.tId + s.id.UL)
                }
                var p = a("#" + d.tId);
                p.get(0) ? m.get(0) || p.remove() : p = t.appendNodes(b, d.level, [d], null, !1, !0).join(""), n.get(0) && e == s.move.TYPE_INNER ? n.append(p) : m.get(0) && e == s.move.TYPE_PREV ? m.before(p) : m.get(0) && e == s.move.TYPE_NEXT && m.after(p);
                var q, r, v = -1, w = 0, x = null, y = null, z = d.level;
                if (d.isFirstNode)v = 0, j[i].length > 1 && (x = j[i][1], x.isFirstNode = !0); else if (d.isLastNode)v = j[i].length - 1, x = j[i][v - 1], x.isLastNode = !0; else for (q = 0, r = j[i].length; r > q; q++)if (j[i][q].tId == d.tId) {
                    v = q;
                    break
                }
                if (v >= 0 && j[i].splice(v, 1), e != s.move.TYPE_INNER)for (q = 0, r = l[i].length; r > q; q++)l[i][q].tId == c.tId && (w = q);
                if (e == s.move.TYPE_INNER ? (c[i] || (c[i] = new Array), c[i].length > 0 && (y = c[i][c[i].length - 1], y.isLastNode = !1), c[i].splice(c[i].length, 0, d), d.isLastNode = !0, d.isFirstNode = 1 == c[i].length) : c.isFirstNode && e == s.move.TYPE_PREV ? (l[i].splice(w, 0, d), y = c, y.isFirstNode = !1, d.parentTId = c.parentTId, d.isFirstNode = !0, d.isLastNode = !1) : c.isLastNode && e == s.move.TYPE_NEXT ? (l[i].splice(w + 1, 0, d), y = c, y.isLastNode = !1, d.parentTId = c.parentTId, d.isFirstNode = !1, d.isLastNode = !0) : (e == s.move.TYPE_PREV ? l[i].splice(w, 0, d) : l[i].splice(w + 1, 0, d), d.parentTId = c.parentTId, d.isFirstNode = !1, d.isLastNode = !1), u.fixPIdKeyValue(b, d), u.setSonNodeLevel(b, d.getParentNode(), d), t.setNodeLineIcos(b, d), t.repairNodeLevelClass(b, d, z), !b.data.keep.parent && 1 > j[i].length) {
                    j.isParent = !1, j.open = !1;
                    var A = a("#" + j.tId + s.id.UL), B = a("#" + j.tId + s.id.SWITCH), C = a("#" + j.tId + s.id.ICON);
                    t.replaceSwitchClass(j, B, s.folder.DOCU), t.replaceIcoClass(j, C, s.folder.DOCU), A.css("display", "none")
                } else x && t.setNodeLineIcos(b, x);
                y && t.setNodeLineIcos(b, y), b.check && b.check.enable && t.repairChkClass && (t.repairChkClass(b, j), t.repairParentChkClassWithSelf(b, j), j != d.parent && t.repairParentChkClassWithSelf(b, d)), g || t.expandCollapseParentNode(b, d.getParentNode(), !0, f)
            }
        }, removeEditBtn: function (b) {
            a("#" + b.tId + s.id.EDIT).unbind().remove()
        }, removeRemoveBtn: function (b) {
            a("#" + b.tId + s.id.REMOVE).unbind().remove()
        }, removeTreeDom: function (a, b) {
            b.isHover = !1, t.removeEditBtn(b), t.removeRemoveBtn(b), r.apply(a.view.removeHoverDom, [a.treeId, b])
        }, repairNodeLevelClass: function (b, c, d) {
            if (d !== c.level) {
                var e = a("#" + c.tId), f = a("#" + c.tId + s.id.A), g = a("#" + c.tId + s.id.UL), h = "level" + d, i = "level" + c.level;
                e.removeClass(h), e.addClass(i), f.removeClass(h), f.addClass(i), g.removeClass(h), g.addClass(i)
            }
        }}, p = {tools: n, view: o, event: l, data: k};
        a.extend(!0, a.fn.zTree.consts, b), a.extend(!0, a.fn.zTree._z, p);
        var q = a.fn.zTree, r = q._z.tools, s = q.consts, t = q._z.view, u = q._z.data;
        q._z.event, u.exSetting(c), u.addInitBind(f), u.addInitUnBind(g), u.addInitCache(e), u.addInitNode(i), u.addInitProxy(h), u.addInitRoot(d), u.addZTreeTools(j);
        var w = t.cancelPreSelectedNode;
        t.cancelPreSelectedNode = function (a, b) {
            for (var c = u.getRoot(a).curSelectedList, d = 0, e = c.length; e > d && (b && b !== c[d] || (t.removeTreeDom(a, c[d]), !b)); d++);
            w && w.apply(t, arguments)
        };
        var x = t.createNodes;
        t.createNodes = function (a, b, c, d) {
            x && x.apply(t, arguments), c && t.repairParentChkClassWithSelf && t.repairParentChkClassWithSelf(a, d)
        };
        var y = t.makeNodeUrl;
        t.makeNodeUrl = function (a) {
            return a.edit.enable ? null : y.apply(t, arguments)
        };
        var z = t.removeNode;
        t.removeNode = function (a, b) {
            var c = u.getRoot(a);
            c.curEditNode === b && (c.curEditNode = null), z && z.apply(t, arguments)
        };
        var A = t.selectNode;
        t.selectNode = function (a, b) {
            var d = u.getRoot(a);
            return u.isSelectedNode(a, b) && d.curEditNode == b && b.editNameFlag ? !1 : (A && A.apply(t, arguments), t.addHoverDom(a, b), !0)
        };
        var B = r.uCanDo;
        r.uCanDo = function (a, b) {
            var c = u.getRoot(a);
            return b && (r.eqs(b.type, "mouseover") || r.eqs(b.type, "mouseout") || r.eqs(b.type, "mousedown") || r.eqs(b.type, "mouseup")) ? !0 : !c.curEditNode && (B ? B.apply(t, arguments) : !0)
        }
    }(jQuery)
});