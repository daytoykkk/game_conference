import ajax from './ajax'

// 删除用户信息
export const deleteMsgReq = (ids) => ajax('/user/deleteMsg',ids,'DELETE');

// 用户反馈消息
export const feedbackReq = (data) => ajax('/user/feedback',data,'POST');

// 获取用户全部消息
export const getMsgReq = () => ajax('/user/getMsg',{},'GET');

// 阅读用户消息
export const readMsgReq = (data) => ajax('/user/readMsg',data,'PUT');