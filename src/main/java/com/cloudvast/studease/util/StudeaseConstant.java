/**
 *
 */
package com.cloudvast.studease.util;

import java.math.BigDecimal;


/**
 * StudeaseConstant: 云联常量
 *
 * @author 刘少平
 * @version 0.0.1
 * @date 2014-2-18 下午2:34:20
 * @since 0.0.1
 */
public final class StudeaseConstant {

    public static final String DEFAULT_UNIONCARD_PASSWORD = "123456";

    public static final BigDecimal DEFAULT_NEARBY_RADIUS = new BigDecimal("0.01");
    public static final BigDecimal SHOP_BALANCE_LIMIT = new BigDecimal("600");
    // 从跨店消费金额中扣取的比例为10%，消费1000，扣100云浩币
    public static final BigDecimal DEDUCT_PERCENTAGE_OF_TOTAL_CONSUME = new BigDecimal("0.06");
    // 商家提成比例
    public static final BigDecimal DEDUCT_PERCENTAGE_OF_SHOP = new BigDecimal("0.3");
    // 会员提成（返云浩币）比例
    public static final BigDecimal DEDUCT_PERCENTAGE_OF_MEMBER = new BigDecimal("0.5");
    // 系统提成比例
    public static final BigDecimal DEDUCT_PERCENTAGE_OF_SYSTEM = new BigDecimal("0.2");
    // 会员欢迎页面
    public static final String VNAME_INDEX_WELCOME = "welcome";
    public static final String VNAME_INDEX_MEMBER = "member/index";
    public static final String VNAME_INDEX_MERCHANT = "merchant/index";
    public static final String VNAME_CONSUME_MERCHANT = "merchant/card/consume";
    public static final String VNAME_CREATE_MERCHANT = "merchant/card/create";
    public static final String VNAME_RECHARGE_MERCHANT = "merchant/merchant/recharge";
    public static final String VNAME_TRANSACTION_MERCHANT = "merchant/merchant/transaction";
    public static final String VNAME_TRANSACTION_REPORT_MERCHANT = "merchant/merchant/transactionReport";
    public static final String VNAME_MERCHANT_CARD_MERCHANT = "merchant/merchant/card";
    public static final String VNAME_MERCHANT_CONSUMATION_MERCHANT = "merchant/merchant/consumation";
    public static final String VNAME_MERCHANT_RECONSUMATION_MERCHANT = "merchant/merchant/reconsumation";
    public static final String VNAME_MERCHANT_BALANCE_MERCHANT = "merchant/merchant/balance";
    public static final String VNAME_MERCHANT_RECHARGE_RESULT_MERCHANT = "merchant/merchant/rechargeResult";
    public static final String VNAME_MERCHANT_LOCATION_MERCHANT = "merchant/merchant/location";
    public static final String VNAME_CARD_INFO_MEMBER = "member/card/info";
    public static final String VNAME_CARD_DETAIL_MEMBER = "member/card/detail";
    public static final String VNAME_CARD_TRANSACTION_MEMBER = "member/card/transaction";
    /**
     * SESSION标记
     */
    public static final String SESSION_CASID = "union_session_casid";
    public static final String SESSION_RIGHT_PLATFORM = "session_right_platform";
    public static final String SESSION_RIGHT_NODE = "session_right_node";
    public static final String SESSION_NODE_URL = "session_node_url";
    public static final String SESSION_EXPIRE_YMD = "session_expire_ymd";
    public static final String SESSION_P2U_STATUS = "session_p2u_status";
    public static final String SESSION_UNION_SYSTEM_INITED = "session_union_system_inited";
    public static final String SESSION_MEMBER_CARD = "session_member_card";
    public static final String SESSION_MEMBER_PHONE = "session_member_phone";
    public static final String SESSION_UNION_CARD = "session_union_card";
    public static final String SESSION_QHT_SHOP = "session_qht_shop";
    public static final String SESSION_LOGIN_TYPE = "session_login_type";
    public static final String SESSION_LOGIN_TYPE_MEMBER = "session_login_type_member"; // 会员登录
    public static final String SESSION_LOGIN_TYPE_MERCHANT = "session_login_type_merchant"; // 商家登录
    /**
     * 系统开始的日期，以后应根据每个店，分别做出限制
     */
    public static final int START_YMD = 20130801;
    /**
     * 35天的毫秒数
     */
    public static final long MILLI_SECONDS_OF_35_DAYS = 35 * 24 * 60 * 60 * 1000L;
    /**
     * 系统默认分页条数
     */
    public static final int PAGE_SIZE = 20;

    private StudeaseConstant() {
    }
}
