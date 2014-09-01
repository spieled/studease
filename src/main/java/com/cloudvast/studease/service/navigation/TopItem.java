package com.cloudvast.studease.service.navigation;

import com.cloudvast.studease.util.Studease;
import com.cloudvast.util.Util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 一级菜单
 */
public class TopItem implements Serializable {

    protected String requestURI;

    protected String text;

    protected String href;

    protected boolean active = false;

    protected List<SubItem> sub = new ArrayList<SubItem>();

    protected int contextLength = Studease.contextPath().length() - 1;

    protected int baseUrlLength = Util.getBaseUrl().length();

    public TopItem(String requestURI, String text, String href) {
        this.requestURI = requestURI;
        this.text = text;
        this.href = href;
        buildActive();
    }

    public void buildActive() {
        if (!Util.hasText(href)) {
            return;
        }

        String[] uri = requestURI.substring(contextLength).split("\\.")[0].split("/");
        String[] hrf = href.substring(baseUrlLength).split("\\.")[0].split("/");
        try {
            if (uri.length == 0) {
                if (hrf[1].equals("index")) {
                    active = true;
                }
            } else if (uri[1].equals(hrf[1]) && uri[2].equals(hrf[2]) || uri[1].startsWith(";jsessionid") && hrf[1].equals("index")) {
                active = true;
            }
        } catch (Exception ignore) {
        }
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
        buildActive();
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public List<SubItem> getSub() {
        return sub;
    }

    public void setSub(List<SubItem> sub) {
        this.sub = sub;
    }

}
