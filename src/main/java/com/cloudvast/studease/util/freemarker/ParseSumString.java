package com.cloudvast.studease.util.freemarker;

import com.cloudvast.annotation.J;
import com.cloudvast.util.Util;
import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by Administrator on 2014/4/17.
 */
@J("计算求和")
public class ParseSumString implements TemplateMethodModel {

    public static void main(String[] args) {
        Float num = new Float("1.11");
        System.out.println("1.11的float的tostring得到的结果是：" + num.toString() + " " + num.getClass());

        BigDecimal sum = Util.add(new BigDecimal(22), Util.multiply(new BigDecimal("0.001"), new BigDecimal("0.06")));
        System.out.println("22 + 0.001 * 0.06 = " + sum + " " + sum.getClass());
    }

    @Override
    public Object exec(List arguments) throws TemplateModelException {

        try {
            BigDecimal sum = BigDecimal.ZERO;
            for (Object obj : arguments) {
                String className = obj.getClass().getName();

                System.out.println(obj + " 的数据类型是：" + className);

                switch (className) {
                    case "java.lang.String":
                        sum = Util.add(sum, new BigDecimal((String) obj));
                        break;
                    case "java.lang.BigDecimal":
                        sum = Util.add(sum, (BigDecimal) obj);
                        break;
                    case "java.lang.Integer":
                        sum = Util.add(sum, new BigDecimal(((Integer) obj).intValue()));
                        break;
                    case "java.lang.Long":
                        sum = Util.add(sum, new BigDecimal(((Long) obj).longValue()));
                        break;
                    case "java.lang.Short":
                        sum = Util.add(sum, new BigDecimal(((Short) obj).intValue()));
                        break;
                    case "java.lang.Float":
                        sum = Util.add(sum, new BigDecimal(((Float) obj).toString()));    // 冗余的
                        break;
                    case "java.lang.Double":
                        sum = Util.add(sum, new BigDecimal(((Double) obj).toString()));
                        break;
                    default:
                        sum = Util.add(sum, new BigDecimal(obj.toString()));
                        break;

                }

            }
            return sum.toString();
        } catch (Exception ex) {
            ex.printStackTrace();
            // 报错就返回0
            return "0";
        }

    }

}
