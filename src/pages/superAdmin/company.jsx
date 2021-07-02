/*
    子路由，公司详情页
*/

import React, { Component } from 'react'
import { Button, Input, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import './company.less'
import { 
        getCompanyInfoByIdReq,
        passCompanyReq,
        unPassCompanyReq } from '../../api'

const { TextArea } = Input;

export default class company extends Component {

    state = {
        isPass: true,
        name: "hh",
        companyId: Number
    }

   

    componentDidMount = async () => {
        const { isPass,name, companyId } = this.props.location.state
        this.setState({
            isPass,
            name,
            companyId
        })
        //todo 获取公司详情
        let res = await getCompanyInfoByIdReq(companyId);
        console.log(res)
    }

    toList = () => {
        this.props.history.push({
            pathname: '/superAdmin/companyList',
           })
    }

    // 公司不通过
    handleClickUnpass = async () => {
        let res = await unPassCompanyReq(this.state.companyId);
        if(res.msg === "success"){
            message.success("审核驳回！")
        }else{
            message.warning(res.msg)
        }
    }

    // 公司通过
    handleClickPass = async() => {
        let res = await passCompanyReq(this.state.companyId);
        if(res.msg === "success"){
            message.success("审核通过！")
            window.location.reload()
        }else{
            message.warning(res.msg)
        }
    }

    render() {
        return (
            <div className="company"> 
                <p className="title" onClick={this.toList}>{this.state.isPass? "已通过审核":"未通过审核"}/{this.state.name}</p>
                <div className="box">
                    <div className="topBox">
                        <span>广州智利药业有限公司</span>
                        <span>公司ID：46534653456</span>
                    </div>
                    <div className="infoBox">
                        <div className="titleBox">
                            <span>公司信息</span>
                            <span>申请时间：2021年4月3日17：39：00</span>
                            <hr />
                        </div>
                        <div className="itemBox">
                            <span>组织机构代码：<span className="content">783256</span></span>
                            <span>员工人数：<span className="content">34人</span></span>
                        </div>
                        <div className="itemBox">
                            <span className="detailSpan">详细信息查看：</span>
                            <Button icon={<DownloadOutlined />}>下载文件</Button>
                        </div>
                        <div className="itemBox">
                            <span>管理员姓名：<span className="content">张三丰</span></span>
                        </div>
                        <div className="itemBox">
                            <span>管理员联系方式：<span className="content">1384896455648</span></span>
                            <span>管理员邮箱：<span className="content">4956346649@qq.com</span></span>
                        </div>
                        <div className="itemBox" style={{'display':'flex', 'marginTop':'32px'}}>
                            <span style={{'width':'100px'}}>公司描述：</span>
                            <TextArea rows={4} value="我们公司真的很需要这个平台来管理会议室和组织会议，请务必通过！"/>
                        </div>
                        <div className="btnBox">
                            <Button type="primary" onClick={this.handleClickUnpass}>驳回</Button>
                            <Button type="primary" onClick={this.handleClickPass} style={{'marginLeft': '30px'}}>通过</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
