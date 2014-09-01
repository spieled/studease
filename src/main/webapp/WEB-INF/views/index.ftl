[#ftl]
[#import "macro/base.ftl" as base]
[@base.header/]

<div class="ui-grid-auto">
[#if msg ?? ]
    [@base.tipbox msg=msg /]
[#else]
[/#if]
</div>



[@d_resource type="js" url="/resource/js/studease/index.js"/]
[@base.footer /]