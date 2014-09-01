package com.cloudvast.studease.util.freemarker;


import com.cloudvast.util.Constants;
import com.cloudvast.util.Util;
import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

import java.util.List;

/**
 * FreeMarker的自定义函数，将int类型的YMD转换成字符串
 */
public class ParseDateString implements TemplateMethodModel {

    @Override
    public Object exec(List arguments) throws TemplateModelException {
        try {
            String str = arguments.get(0).toString();
            if (!Util.hasText(str) || Util.equals(str, "0")) {
                return Constants.EMPTY;
            }
            if (str.length() == 8) {
                return str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6);
            } else {
                return Util.formatDateTime(Util.parseLong(str, 0));
            }
        } catch (Exception e) {
        }
        return Constants.EMPTY;
    }
}
