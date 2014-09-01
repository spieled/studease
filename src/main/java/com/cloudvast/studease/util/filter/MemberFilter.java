/**
 * 
 */
package com.cloudvast.studease.util.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cloudvast.util.Util;

/**
 * 云联卡会员登录成功后执行的过滤器
 * 
 */
public class MemberFilter implements Filter {

	private static final String LOGIN_URL = "/member/login.htm";

	@Override
	public void destroy() {
	}

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) arg0;
		HttpServletResponse response = (HttpServletResponse) arg1;
		/*if (request.getSession().getAttribute(StudeaseConstant.SESSION_UNION_CARD) == null) {
			// 会员没有登录，跳转到登录页面
			if (!Util.equals(request.getRequestURI(), LOGIN_URL)) {
				((HttpServletResponse) response).sendRedirect(LOGIN_URL);
				return;
			}
		}*/
		chain.doFilter(request, response);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
