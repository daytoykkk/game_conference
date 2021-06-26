import ajax from './ajax'

// 申请成为公司员工
export const applyForCompanyReq = (data) => ajax('/user/applyForCompany',data,'POST');

// 获取本公司信息
export const getCompanyInfoByIdReq = (id) => ajax('/user/getCompanyInfoById',{"companyId":id},'GET');

// 获取公司会议室
export const getCompanyRoomReq = () => ajax('/user/getCompanyRoom',{},'GET');

// 创建公司
export const userCreateCompanyReq = (data) => ajax('/user/userCreateCompany',data,'POST');