package com.cloudvast.studease.util;

import com.cloudvast.annotation.J;

@J("常规异常")
public class StudeaseExcpetion extends RuntimeException {

	public StudeaseExcpetion() {
		super();
	}

	public StudeaseExcpetion(String message) {
		super(message);
	}

	public StudeaseExcpetion(String message, Throwable cause) {
		super(message, cause);
	}

	public StudeaseExcpetion(Throwable cause) {
		super(cause);
	}
}
