package com.cloudvast.studease.service.navigation;

import com.cloudvast.studease.util.Studease;
import com.cloudvast.studease.util.StudeaseConstant;
import com.cloudvast.util.Util;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NavigationService {

    public List<TopItem> buildNavigation(String requestURI) {

        List<TopItem> menu = new ArrayList<>();

        String base = Studease.getBaseUrl();

        // menu中加入会员的操作nav
        TopItem top = new TopItem(requestURI, "首页", base + "");
        menu.add(top);

        top = new TopItem(requestURI, "公司简介", base + "");
        menu.add(top);

        top = new TopItem(requestURI, "产品中心", base + "");
        menu.add(top);

        top = new TopItem(requestURI, "联系我们", base + "");
        menu.add(top);

        return menu;
    }

}
