import ajax from './ajax'

// 创建会议室
export const createMeetingRoomReq = (data) => ajax('/companyAdmin/createMeetingRoom',data,'POST');

// 删除会议室
export const deleteMeetingRoomReq = (ids) => ajax('/companyAdmin/deleteMeetingRoom',ids,'POST','',"application/json");

// 获取员工申请列表
export const getStaffApplyReq = (data) => ajax('/companyAdmin/getStaffApply',data,'GET');

// 通过员工申请
export const passStaffApplyReq = (ids) => ajax('/companyAdmin/passStaffApply',ids,'PUT');

// 不通过员工申请
export const unPassStaffApplyReq = (ids) => ajax('/companyAdmin/unPassStaffApply',ids,'PUT');

// 更新公司信息
export const updateCompanyInfoReq = (data) => ajax('/companyAdmin/updateCompanyInfo',data,'PUT');