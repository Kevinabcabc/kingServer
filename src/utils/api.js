// 管理api
export const HOST = 'http://localhost:8081';

// 产品公司列表
const COMPANY_LIST_API = '/api/goods/all';

// 获取公司产品详情
const COMPANY_DETAIL_API = '/api/goods/detail'

// 发送验证码
const SEND_CODE_API = '/api/user/send_code'

// 注册
const REGIESTER_API = '/api/user/regiester'

// 登录
const lOGIN_API = '/api/user/login'

// 身份验证
const IDENTITY_API = '/api/information/find'

// 完善信息
const SAVE_MESSAGE_API = '/api/information/save'

// 修改信息
const CHANGE_MESSAGE_API = '/api/information/edit'

// 删除信息
const DELETE_MESSAGE_API = '/api/information/delete'

// add个人订单
const ADD_ORDER_API = '/api/order/addOrder'

// 获取个人订单
const ORDER_LIST_API = '/api/order/orderList'

// 删除个人订单
const DELETE_ORDER_API = '/api/order/deleta'

// 操作个人订单
const HANDLE_ORDER_API = '/api/order/handle'

// 在线客服
const ONLINE_API = '/api/serve/online'





export default{
    COMPANY_LIST_API,
    COMPANY_DETAIL_API,
    SEND_CODE_API,
    REGIESTER_API,
    lOGIN_API,
    IDENTITY_API,
    SAVE_MESSAGE_API,
    CHANGE_MESSAGE_API,
    DELETE_MESSAGE_API,
    ADD_ORDER_API,
    ORDER_LIST_API,
    DELETE_ORDER_API,
    HANDLE_ORDER_API,
    ONLINE_API
}