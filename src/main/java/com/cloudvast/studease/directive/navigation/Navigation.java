package com.cloudvast.studease.directive.navigation;

import com.cloudvast.annotation.Directive;
import com.cloudvast.studease.service.navigation.NavigationService;
import com.cloudvast.studease.service.navigation.TopItem;
import com.cloudvast.util.Util;
import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateDirectiveModel;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
@Directive("d_nav")
public class Navigation implements TemplateDirectiveModel {

    @Autowired
    private NavigationService service;

    @SuppressWarnings("rawtypes")
    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body) throws TemplateException, IOException {
        List<TopItem> tops = service.buildNavigation(Util.getRequestURI());
        boolean haveSub = false;
        for (TopItem top : tops) {
            if (top.isActive()) {
                haveSub = top.getSub().size() > 0;
                break;
            }
        }
        Util.directiveParam(env, "tops", tops);
        Util.directiveParam(env, "haveSub", haveSub);
        Util.directiveOut(body, env);
    }

}
