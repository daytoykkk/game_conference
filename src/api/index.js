/*
    包含项目中所有接口请求函数的模块
*/
import ajax from './ajax'


export const reqSendEmail = (email) => ajax('/auth/sendEmailRegisterCode',{"email":email},'POST')

export const reqRegister = (user) => ajax('/auth/register',user,'POST')