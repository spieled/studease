package com.cloudvast.studease.directive;

import com.cloudvast.annotation.Directive;
import com.cloudvast.studease.util.Studease;
import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateDirectiveModel;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

@Service
@Directive("d_resource")
public class HtmlResourceWriter implements TemplateDirectiveModel {

    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body) throws TemplateException, IOException {
        String url = params.get("url").toString();
        String type = params.get("type").toString();
        String baseurl = env.getVariable("baseurl").toString();
        String script = "";
        long timestamp = Studease.getLastModified(url);

        switch (type) {
            case "js":
                script = "<script src=\"" + baseurl + url + "?t=" + timestamp + "\"></script>";
                break;
            case "css":
                script = "<link href=\"" + baseurl + url + "?t=" + timestamp + "\" rel=\"stylesheet\"/>";
                break;
        }

        // 直接将源码输出到HTML代码中
        env.getOut().write(script + "\r\n");
    }
}
