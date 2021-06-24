import ajax from './ajax'

// 添加会议成员
export const addMeetingMemberReq = (data) => ajax('/user/addMeetingMember',data,'POST');

// 预约会议
export const appointMeetingReq = (data) => ajax('/user/appointMeeting',data,'POST');

// 获取主页会议列表
export const getHostMeetingReq = (data) => ajax('/user/getHostMeeting',data,'GET');

// 获取会议文件
export const getMeetingFileReq = (data) => ajax('/user/getMeetingFile',data,'GET');

// 获取用户会议
export const getUserMeetingReq = (data) => ajax('/user/getUserMeeting',data,'GET');

// 上传会议文件
export const uploadMeetingFileReq = (data) => ajax('/user/uploadMeetingFile',data,'POST');