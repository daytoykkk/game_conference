import ajax from './ajax'

// 冻结账户
export const freezeUserReq = (username) => ajax('/superAdmin/freezeUser',{"username":username},'PUT');

// 获取为审核公司
export const getUnaAuditCompanyReq = (data) => ajax('/superAdmin/getUnaAuditCompany',data,'GET');

// 审核公司通过
export const passCompanyReq = (id) => ajax('/superAdmin/passCompany',{"companyId":id},'POST');

// 解决账户
export const unFreezeUserReq = (username) => ajax('/superAdmin/unFreezeUser',{"JsonUsername":username},'PUT');

// 审核公司不通过
export const unPassCompanyReq = (id) => ajax('/superAdmin/unPassCompany',{"companyId":id},'POST');