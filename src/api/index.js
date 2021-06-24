/*
    包含项目中所有接口请求函数的模块
*/

import { 
    getCodeReq,
    loginReq,
    logoutReq,
    registerReq,
    rePasswordReq,
    sendEmailReq,
    sendRePasswordEmailCodeReq
} from './authBaseController';

import {
    freezeUserReq,
    getUnaAuditCompanyReq,
    passCompanyReq,
    unFreezeUserReq,
    unPassCompanyReq
} from './superAdminController';

import {
    deleteMsgReq,
    feedbackReq,
    getMsgReq,
    readMsgReq
} from './userMessage';

import {
    addMeetingMemberReq,
    appointMeetingReq,
    getHostMeetingReq,
    getMeetingFileReq,
    getUserMeetingReq,
    uploadMeetingFileReq
} from './userMeeting';

import {
    getUpdateEmailCodeReq,
    getUserInfoReq,
    updateEmailByCodeReq,
    updateUserIconReq,
    updateUserInfoReq
} from './userInfo';

import {
    applyForCompanyReq,
    getCompanyInfoByIdReq,
    getCompanyRoomReq,
    userCreateCompanyReq
} from './userCompany';

import {
    createMeetingRoomReq,
    deleteMeetingRoomReq,
    getStaffApplyReq,
    passStaffApplyReq,
    unPassStaffApplyReq,
    updateCompanyInfoReq
} from './companyAdmin';

export {
    // authBaseController
    getCodeReq,
    loginReq,
    logoutReq,
    registerReq,
    rePasswordReq,
    sendEmailReq,
    sendRePasswordEmailCodeReq,
    // superAdminController
    freezeUserReq,
    getUnaAuditCompanyReq,
    passCompanyReq,
    unFreezeUserReq,
    unPassCompanyReq,
    // userMessage
    deleteMsgReq,
    feedbackReq,
    getMsgReq,
    readMsgReq,
    // userMeeting
    addMeetingMemberReq,
    appointMeetingReq,
    getHostMeetingReq,
    getMeetingFileReq,
    getUserMeetingReq,
    uploadMeetingFileReq,
    // userInfo
    getUpdateEmailCodeReq,
    getUserInfoReq,
    updateEmailByCodeReq,
    updateUserIconReq,
    updateUserInfoReq,
    // userCompany
    applyForCompanyReq,
    getCompanyInfoByIdReq,
    getCompanyRoomReq,
    userCreateCompanyReq,
    // companyAdmin
    createMeetingRoomReq,
    deleteMeetingRoomReq,
    getStaffApplyReq,
    passStaffApplyReq,
    unPassStaffApplyReq,
    updateCompanyInfoReq,
}
