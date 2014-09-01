package com.cloudvast.studease.directive.navigation;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cloudvast.annotation.Directive;
import com.cloudvast.util.Util;

import freemarker.core.Environment;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateDirectiveModel;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;

@Service
@Directive("d_tabnav")
public class TabNavigation implements TemplateDirectiveModel {

	@SuppressWarnings("rawtypes")
	public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body) throws TemplateException, IOException {

		Util.directiveOut(body, env);
	}
}
