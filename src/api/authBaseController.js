import ajax from './ajax'

// 获取验证码
export const getCodeReq = (data) => ajax('/auth/getCode',data,'GET','arraybuffer');

// 登陆
export const loginReq = (data) => ajax('/auth/login',data,'POST');

// 用户注销
export const logoutReq = () => ajax('/auth/logout',{},'POST');

// 注册
export const registerReq = (user) => ajax('/auth/register',user,'POST');

// 修改密码
export const rePasswordReq = (data) => ajax('/auth/rePassword',data,'POST');

// 发送注册邮箱
export const sendEmailReq = (email) => ajax('/auth/sendEmailRegisterCode',{"email":email},'POST');

// 找回密码
export const sendRePasswordEmailCodeReq = (email) => ajax('/auth/sendRePasswordEmailCode',{"email":email},'POST');


