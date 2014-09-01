package com.cloudvast.studease.service.navigation;

/**
 * 二级菜单
 */
public class SubItem extends TopItem {

    public SubItem(String requestURI, String text, String href) {
        super(requestURI, text, href);
    }

    @Override
    public void buildActive() {
        String[] uri = requestURI.substring(contextLength).split("\\.")[0].split("/");
        String[] hrf = href.substring(baseUrlLength).split("\\.")[0].split("/");
        active = uri.length > 2 && uri[1].equals(hrf[1]) && uri[2].equals(hrf[2]) && uri[3].equals(hrf[3]);
    }

}