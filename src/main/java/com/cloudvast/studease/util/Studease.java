/**
 *
 */
package com.cloudvast.studease.util;

import com.alibaba.fastjson.JSON;
import com.cloudvast.annotation.Cache;
import com.cloudvast.base.BaseEntity;
import com.cloudvast.cache.CacheService;
import com.cloudvast.pager.DefaultPager;
import com.cloudvast.pager.Pager;
import com.cloudvast.util.Callback;
import com.cloudvast.util.Constants;
import com.cloudvast.util.Util;
import sun.misc.BASE64Decoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.*;

public final class Studease {

    private static CacheService cache;

    /**
     * 服务器的根URL
     */
    private static String baseUrl = null;

    /**
     * 初始化
     */
    static {
        cache = Util.getBean(CacheService.class);
    }

    private Studease() {
    }


    /**
     * 获取当前服务器的根路径
     */
    public static String contextPath() {
        String path = Util.getHttpServletRequest().getContextPath();
        if (!path.endsWith(Constants.SLASH)) {
            path += Constants.SLASH;
        }
        return path;
    }

    /**
     * 获取当前服务器的根URL
     */
    public static String getBaseUrl() {
        if (baseUrl == null) {
            HttpServletRequest request = Util.getHttpServletRequest();
            baseUrl = request.getScheme() + "://" + request.getServerName() + (request.getServerPort() == 80 ? "" : (":" + request.getServerPort())) + request.getContextPath();
        }
        return baseUrl;
    }

    /**
     * 创建简单的参数列表
     */
    public static Map<String, Object> params(String key, Object value) {
        Map<String, Object> params = new HashMap<>();
        params.put(key, value);
        return params;
    }

    /**
     * 快捷构造一个标准的分页工具
     */
    public static Pager pager() {
        return pager(StudeaseConstant.PAGE_SIZE);
    }

    /**
     * 快捷构造标准分页工具
     *
     * @param limit 每页数据量
     */
    public static Pager pager(int limit) {
        // limit不为负
        if (limit < 0) {
            limit = 0;
        }
        HttpServletRequest request = Util.getHttpServletRequest();
        if (request == null) {
            return new DefaultPager(0, limit, -1L);
        }
        // p参数不为负
        int p = Util.parseInt(request.getParameter("p"), 1);
        if (p < 0) {
            p = 1;
        }
        // start和end不能超过Integer.MAX_VALUE
        long start = (p - 1) * limit;
        long end = p * limit;
        if (start > Integer.MAX_VALUE || start < 0) {
            start = 0;
        }
        if (end > Integer.MAX_VALUE) {
            limit = (int) (Integer.MAX_VALUE - start);
        }

        return new DefaultPager((int) start, limit, -1L);
    }


    /**
     * 生成单据的发生日期，这里暂时和当前日期一致，后期会考虑到可能会设置“营业开始时间”来左右这个单据日期。
     */
    public static int generateBillYmd() {
        return Util.parseYmd();
    }

    /**
     * 返回json数据的工具方法,like:{success: flase, errorCode: '10011', msg: 'error message'}
     *
     * @param response  response
     * @param success   是否成功
     * @param errorCode 错误码
     * @param msg       信息
     */
    public static final void json(HttpServletResponse response, boolean success, String errorCode, String msg) {
        Map<String, Object> model = new HashMap<>();
        model.put("success", success);
        model.put("errorCode", errorCode);
        model.put("msg", msg);
        Util.addCacheControlHeaders(response, true);
        try {
            response.getWriter().write(JSON.toJSONString(model));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * @param
     * @return
     */
    public static List<BaseEntity> singleList(BaseEntity e) {
        List<BaseEntity> result = new ArrayList<>(1);
        result.add(e);
        return result;
    }

    /**
     * map转化为对象
     */
    public static void getObject(Map map, Object thisObj) {
        Set set = map.keySet();
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            Object obj = iterator.next();
            Object val = map.get(obj);
            setMethod(obj, val, thisObj);
        }
    }

    private static void setMethod(Object method, Object value, Object thisObj) {
        Class c;
        try {
            c = Class.forName(thisObj.getClass().getName());
            String met = (String) method;
            Method m = Util.getSetter(c, met);
            m.invoke(thisObj, value);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 取文件最后更新的时间戳
     */
    public static long getLastModified(final String path) {
        return cache.read("timestamp:" + path, new Callback<Long>() {
            public Long run() {
                try {
                    return new File(Util.getHttpServletRequest().getSession().getServletContext().getRealPath(path)).lastModified();
                } catch (Exception e) {
                    return 0l;
                }
            }
        });
    }

}
