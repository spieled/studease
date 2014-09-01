package com.cloudvast.studease.util.freemarker;

import com.cloudvast.util.Constants;
import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

import java.util.List;


public class ParseObjectName implements TemplateMethodModel {


    @Override
    public Object exec(List arguments) throws TemplateModelException {
        try {

            final String id = arguments.get(1).toString();

            System.out.println(arguments.get(0).toString() + " : " + id);

            switch (arguments.get(0).toString()) {

            }


        } catch (Exception e) {
            e.printStackTrace();
        }
        return Constants.EMPTY;
    }

}
