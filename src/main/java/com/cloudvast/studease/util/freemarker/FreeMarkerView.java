/**
 *
 */
package com.cloudvast.studease.util.freemarker;

import com.cloudvast.util.Util;
import freemarker.template.SimpleHash;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class FreeMarkerView extends com.cloudvast.freemarker.FreeMarkerView {


    @Override
    protected SimpleHash buildTemplateModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) {

        SimpleHash fmModel = super.buildTemplateModel(model, request, response);

        // 检测是否需要输出成JSON类型（只有在遇到异常时才输出成JSON，其他时候都是HTML）
        boolean json = false;
        try {
            json = fmModel.get("exception") != null;
        } catch (Exception e) {
        }

        // 先在response里加入禁止缓存的头信息，确保每次访问的页面都是最新内容。
        Util.addCacheControlHeaders(response, json);

        // 输出当前的rquest对象
        fmModel.put("request", request);


        return fmModel;
    }
}
