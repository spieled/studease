[#ftl strip_whitespace=true]




[#macro header width="" fontsize=""]
<!DOCTYPE html>
<html>
<head>
    <title>Studease</title>
    <meta charset="UTF-8"/>
    <style>
            [#if width !="" ]
            .wrapper {
                width: ${width}px;
            }
            [/#if]
            [#if fontsize !="" ]
            * {
                font-size: ${fontsize}px !important;
            }

            [/#if]
    </style>
    [@d_resource type="css" url="/resource/css/alice.css"/]
    [@d_resource type="css" url="/resource/css/union.css"/]
    [@d_resource type="css" url="/resource/css/ios.css"/]
    [@d_resource type="js" url="/resource/js/3rd/sea.js"/]
    [@d_resource type="js" url="/resource/js/3rd/sea.conf.js"/]
    [@d_resource type="js" url="/resource/js/enums.js"/]
    <script>var baseurl = "${baseurl}", requestURI = "${request.getRequestURI()}";</script>
</head>
<body>
    [#--[@topnav/]--]
    [@nav /]
    [#if sysMsg ?? ]
        [#if sysMsg ? is_collection]
            [#list sysMsg as msg]
                [@tiptext msg=msg /]
            [/#list]
        [#else]
            [@tiptext msg=sysMsg /]
        [/#if]
    [/#if]
[/#macro]




[#macro topnav]
    <div class="top-nav full_width" >
        <div class="top-nav-content">
            <div class="wrapper">
                <div class="fn-right">
                    <ul class="top-nav-list">

                        <li class="first">
                            你好
                        </li>
                        <li><a href="${baseurl}/member/logout.htm">安全退出</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

[/#macro]




[#macro footer]
<div class="footer">
    Copyright &copy; ${.now?string("yyyy")} All Rights Reserved.
</div>

</body>
</html>
[/#macro]



[#macro nav]
<div class="self_bg" style="position: fixed; top:0px;bottom:0px;left:0px;right:0px;">
    <div style="height: 120px;"></div>
<div class="wrapper">

    <div class="ui-nav">
        <ul class="ui-nav-main">
            [@d_nav]
                [#list tops as top]
                    <li class="ui-nav-item[#if top.active] ui-nav-item-current[/#if]">
                        <a href="${top.href}"[#if top.newWindow] target="_blank"[/#if]>${top.text}</a>
                        <ul class="ui-nav-submain">
                            [#list top.sub as sub]
                                <li class="ui-nav-subitem[#if sub.active] ui-nav-subitem-current[/#if]">
                                    <a href="${sub.href}">${sub.text}</a>
                                </li>
                            [/#list]
                        </ul>
                    </li>
                [/#list]
            [/@d_nav]
        </ul>
        <div class="[#if haveSub]ui-nav-subcontainer[/#if]"></div>
    </div>
</div>
</div>
[/#macro]




[#macro tabnav type="catalog"]
<div id="tabnav-wrapper">
    <div id="tabnav">
        <ul class="tabnav">
            [@d_tabnav type=type]
                [#list navs as nav]
                    <li class="tabnav-item [#if nav.active] tabnav-item-current[/#if]">
                        <a href="${nav.href}" class="tabnav-link">${nav.text}</a>
                    </li>
                [/#list]
            [/@d_tabnav]
        </ul>
    </div>
</div>
[/#macro]





[#macro box title="" ]
<div class="ui-box">
    <div class="ui-box-head">
        <div class="ui-box-head-border">
            <h3 class="ui-box-head-title">区块标题</h3>
            <span class="ui-box-head-text">其他文字</span>
            <a href="#" class="ui-box-head-more">更多</a>
        </div>
    </div>
    <div class="ui-box-container">
        <div class="ui-box-content">
            <ul class="ui-list">
                <li class="ui-list-item">
                    <a href="#">如何申请认证？</a>
                </li>
                <li class="ui-list-item">
                    <a href="#">如何提现？</a>
                </li>
                <li class="ui-list-item">
                    <a href="#">支付宝数字证书有什么作用？</a>
                </li>
                <li class="ui-list-item">
                    <a href="#">如何申请认证？</a>
                </li>
            </ul>
        </div>
    </div>
</div>
[/#macro]






[#macro tipbox msg="" id="" type="success" content="" closable=true class=""]
    [@tip render="box" msg=msg id=id type=type content=content closable=closable class=class/]
[/#macro]

[#macro tiptext msg="" id="" type="success" content="" closable=true class=""]
    [@tip render="text" msg=msg id=id type=type content=content closable=closable class=class/]
[/#macro]

[#macro poptip class="" id="" arrow="10" content=""]
    [@tip render="pop" class=class id=id arrow=arrow content=content class=class/]
[/#macro]



[#--集大成的提示宏，render决定要展示的方式，支持：box、text、pop三种方式--]
[#macro tip render="box" class="" msg="" id="" type="success" content="" arrow="10" closable=true ]
    [#if msg!=""]
        [#assign aType=msg.type]
        [#assign aId=msg.id]
        [#assign aContent=msg.content]
        [#assign aClosable=msg.closable]
    [#else]
        [#assign aType=type]
        [#assign aId=id]
        [#assign aContent=content]
        [#assign aClosable=closable]
    [/#if]
    [#switch aType]
        [#case "message"]
            [#assign icon="&#xF046;"]
            [#break]
        [#case "error"]
            [#assign icon="&#xF045;"]
            [#break]
        [#case "warning"]
            [#assign icon="&#xF047;"]
            [#break]
        [#case "stop"]
            [#assign icon="&#xF048;"]
            [#break]
        [#case "wait"]
            [#assign icon="&#xF04B;"]
            [#break]
        [#case "question"]
            [#assign icon="&#xF04A;"]
            [#break]
        [#case "success"]
        [#default]
            [#assign icon="&#xF049;"]
    [/#switch]

    [#if render=="box"]
    <div class="ui-tipbox ui-tipbox-${aType} mb10 ${class}" id="${aId}">
        <div class="ui-tipbox-icon">
            <i class="iconfont">${icon}</i>
        </div>
        <div class="ui-tipbox-content-simple">
            <h3 class="ui-tipbox-title">${aContent}</h3>
        </div>
        [#if aClosable ]
            <div class="ui-tiptext-close iconfont">&#xF028;</div>
        [/#if]
    </div>
    [#elseif render=="text"]
    <div class="ui-tiptext-container ui-tiptext-container-${aType} mb10 ${class}" id="${aId}">
        <p class="ui-tiptext ui-tiptext-${aType}">
            <i class="ui-tiptext-icon iconfont">${icon}</i>
        ${aContent}
        </p>
        [#if aClosable]
            <div class="ui-tiptext-close iconfont">&#xF028;</div>
        [/#if]
    </div>
    [#elseif render=="pop"]
    <div class="ui-poptip ${class}" id="${aId}">
        <div class="ui-poptip-shadow">
            <div class="ui-poptip-container">
                <div class="ui-poptip-arrow ui-poptip-arrow-${arrow}">
                    <em>◆</em>
                    <span>◆</span>
                </div>
                <div class="ui-poptip-content" data-role="content">
                ${aContent}
                </div>
            </div>
        </div>
    </div>
    [/#if]
[/#macro]










[#macro table columns=[] data=[] totalPages=0 sums="" objectId=false handle=false handleName=[]]
<div class="ui-table-container">
    <table class="ui-table">
        <thead id="thead">
        <tr>
            <th>#</th>
            [#list columns as th]
                <th>${th.fieldName}</th>
            [/#list]
            [#if handle]
                <th>操作</th>
            [/#if]
        </tr>
        </thead>
        <tbody id="tbody">
            [#list data as tr]
            <tr[#if objectId] objectId="${tr['id']}"[/#if]>
                <td class="nowrap">
                    [#if tr_has_next]${tr_index+1}[#elseif sums?length>0]统计[#else]${tr_index+1}[/#if]
                </td>
                [#list columns as td]
                    <td[#if td.align != ''] style="text-align:${td.align};"[/#if][#if td.nowrap] class="nowrap"[/#if]>${tr[td.field]}</td>
                [/#list]
                [#if handle]
                    <td style="text-align: center">
                        [#if handleName?size!=0]
                            [#list handleName as name]
                                <a class="blue hand">${name}</a>&nbsp;
                            [/#list]
                        [/#if]
                    </td>
                [/#if]
            </tr>
            [/#list]
        </tbody>
    </table>
</div>
    [@pager total=totalPages /]
<script>
    seajs.use(["$", "stickytable"], function ($, stickytable) {
        $(document).ready(function () {
            stickytable("#thead");
        });
    });
</script>
[/#macro]





[#macro pager total current=""]

    [#if total < 2]
        [#return]
    [/#if]

[#--取调用宏时指定的当前页码，如果没有指定，则取URL中的参数p作为当前页码--]
    [#assign page = 1]
    [#if current?length == 0 ]
        [#assign page = request.getParameter("p")]
    [/#if]
    [#if page?length > 0]
        [#assign page = page?number]
    [#else]
        [#assign page = 1]
    [/#if]
    [#if page > total]
        [#assign page = total]
    [/#if]

<div class="ui-paging mt10">

    [#if page > 1]
        <a href="javascript:;" class="ui-paging-prev">
            <i class="iconfont">&#xF039;</i>上一页
        </a>
    [#else]
        <span class="ui-paging-prev">
		<i class="iconfont">&#xF039;</i> 上一页
	</span>
    [/#if]
[#--前3个页码--]
    [#assign lbound = 1]
    [#assign ubound = 3]
    [#if ubound > total]
        [#assign ubound = total]
    [/#if]
    [#list lbound .. ubound as p]
        <a href="javascript:;" class="ui-paging-item[#if p == page] ui-paging-current[/#if]">${p}</a>
    [/#list]
[#--3个之后，显示省略号--]
    [#if ubound < page - 3]
        <span class="ui-paging-ellipsis">...</span>
    [/#if]
[#--当前页面，左右两边各显示2个页码，一共5个页码--]
    [#if ubound  > page + 3]
        [#assign lbound = ubound + 1]
    [#else]
        [#assign lbound = page - 2]
        [#if lbound <= ubound]
            [#assign lbound = ubound + 1]
        [/#if]
    [/#if]
    [#if lbound + 5 > total]
        [#assign ubound = total]
    [#else]
        [#assign ubound = page + 2]
        [#if ubound > total]
            [#assign ubound = total]
        [/#if]
    [/#if]
    [#if lbound <= ubound]
        [#list lbound .. ubound as p]
            <a href="javascript:;" class="ui-paging-item[#if p == page] ui-paging-current[/#if]">${p}</a>
        [/#list]
    [/#if]
[#--主要页码之后的省略号--]
    [#if ubound < total - 3]
        <span class="ui-paging-ellipsis">...</span>
    [/#if]
[#--最后再显示3个页码--]
    [#if ubound < total - 2]
        [#assign lbound = total -2]
    [#else]
        [#assign lbound = ubound + 1]
    [/#if]
    [#assign ubound = total]
    [#if lbound <= ubound]
        [#list lbound .. total as p]
            <a href="javascript:;" class="ui-paging-item[#if p == page] ui-paging-current[/#if]">${p}</a>
        [/#list]
    [/#if]
    [#if page < total]
        <a href="javascript:;" class="ui-paging-next">下一页
            <i class="iconfont">&#xF03A;</i>
        </a>
    [#else]
        <span class="ui-paging-prev">下一页
		<i class="iconfont">&#xF03A;</i>
	</span>
    [/#if]
[#--分页跳转按钮--]
    <span class="ui-paging-which">
		<input value="${page}" type="text"/>
	</span>
    <a class="ui-paging-info ui-paging-goto" href="javascript:;">跳转</a>
</div>
<script>
    seajs.use(['jsuri', '$', "$.dialog"], function (Uri, $) {
        $(document).ready(function () {
            $(".ui-paging A[class='ui-paging-item']").click(function () {
                $.mask();
                window.location.href = new Uri(window.location.href).replaceQueryParam("p", $(this)[0].innerHTML);
            });
            $(".ui-paging A[class='ui-paging-prev']").click(function () {
                $.mask();
                var uri = new Uri(window.location.href);
                window.location.href = uri.replaceQueryParam("p", (eval(uri.getQueryParamValue("p")) || 1) - 1);
            });
            $(".ui-paging A[class='ui-paging-next']").click(function () {
                $.mask();
                var uri = new Uri(window.location.href);
                window.location.href = uri.replaceQueryParam("p", (eval(uri.getQueryParamValue("p")) || 1) + 1);
            });
            $(".ui-paging-goto").click(function () {
                $.mask();
                window.location.href = new Uri(window.location.href).replaceQueryParam("p", $(".ui-paging-which input").val());
            });
            $(".ui-paging-which input").keydown(function (e) {
                if (e.keyCode == 13) {
                    $.mask();
                    window.location.href = new Uri(window.location.href).replaceQueryParam("p", $(this).val());
                }
            });
        });
    });
</script>
[/#macro]




[#macro dateform renderType=false sumName="按类别汇总" flowName="按日期汇总" radio=false radios=[] select=false selectName="" selectLable="" options=[]]
<form data-widget="validator" data-auto-submit="true" class="ui-form searchform">
    <div class="ui-form-item pl70 pb10">
        [#if radio]
            [#list radios as radio]
                <input type="radio" name="${radio.name}" value="${radio.value}">
                <label class="ui-label">${radio.text}</label>
            [/#list]
        [/#if]
        <label class="ui-label">起止日期</label>
        <input type="text" class="ui-input px100" readonly="true" id="startYmd" name="startYmd" required="true" data-display="开始日期" data-rule="45day{target:'#endYmd'}"/>
        <span class="ui-separator-pd"> - </span>
        <input type="text" class="ui-input px100" readonly="true" id="endYmd" name="endYmd" required="true" data-display="结束日期" data-rule="45day{target:'#startYmd'}"/>
        [#if renderType]
            <input type="radio" name="renderType" id="sum" value="sum" style="margin-left:20px;"/>
            <label class="ui-form-label" for="sum">${sumName}</label>
            <input type="radio" name="renderType" id="flow" value="flow"/>
            <label for="flow" class="ui-form-label">${flowName}</label>
        [/#if]
        [#if select]
            <div style="display: inline;margin-top: 20px;" class="ml10">
                <label>${selectLable}</label>
                <select name="${selectName}" id="dateformSelect">
                    [#list options as option]
                        <option value="${option.value}">${option.name}</option>
                    [/#list]
                </select>
            </div>
            <script>
                seajs.use(['widget', 'select', '$', 'jsuri'], function (Widget, Select, $, Uri) {
                    var uri = new Uri(window.location.href);
                    var optionvalue = uri.getQueryParamValue($("#dateformSelect").attr("name"));
                    var select = new Select({
                        trigger: '#dateformSelect',
                        triggerTpl: '<a href="#"><span data-role="trigger-content">请选择</span><i class="iconfont" title="请选择">&#xF03C;</i></a>',
                        width: 180
                    }).render();

                    select.select("li[data-value=" + optionvalue + "]");
                });
            </script>
        [/#if]
        <input type="submit" class="ui-button ui-button-mblue ml30" value="查询"/>
        <div class="fn-right" id="search_appendix"></div>
    </div>
</form>
    [@d_resource type="js" url="/resource/js/dateform.js" /]
[/#macro]




[#--iOS7风格的开关--]
[#macro ioscheck checked=false disabled=false id="" class="" checkclass="" attrs=""]
<label class="ios ${class}">
    <input type="checkbox" class="${checkclass}" id="${id}" [#if checked]checked[/#if] [#if disabled]disabled[/#if] ${attrs}/>
    <i></i>
</label>
[/#macro]

[#macro commentView comments blogId=""]
    [#if comments??]
    <div class="pl70">
        [#list comments as comment]
            <p>
                <img src="${imageDomain}/${comment.avatar}" width="50" height="50">
                &emsp;
            ${comment.content}
                &emsp;
            ${comment.createTime?number_to_datetime}
                &emsp;
                <a href="javascript:;" id="addReferCommentBtn" blogId="${blogId}" referId="${comment.id}">回复</a>
            </p>
            [#if comment.subs??]
                [@commentView comments=comment.subs blogId=blogId/]
            [/#if]
        [/#list]
    </div>
    [/#if]
[/#macro]