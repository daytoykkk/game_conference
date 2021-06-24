import ajax from './ajax'

// 获取更新邮箱验证码
export const getUpdateEmailCodeReq = () => ajax('/user/getUpdateEmailCode',{},'POST');

// 获取用户信息
export const getUserInfoReq = () => ajax('/user/getUserInfo',{},'GET');

// 更新邮箱
export const updateEmailByCodeReq = (data) => ajax('/user/updateEmailByCode',data,'PUT');

// 更新头像
export const updateUserIconReq = (formData) => ajax('/user/updateUserIcon',formData,'PUT');

// 更新用户信息
export const updateUserInfoReq = (data) => ajax('/user/updateUserInfo',data,'PUT');