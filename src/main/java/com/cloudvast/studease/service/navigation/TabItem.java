package com.cloudvast.studease.service.navigation;

/**
 * 左侧的选项卡菜单
 */
public class TabItem extends SubItem {

    public TabItem(String requestURI, String text, String href) {
        super(requestURI, text, href);
    }

    @Override
    public void buildActive() {
        active = requestURI.substring(contextLength).equals(href.substring(baseUrlLength));
    }
}