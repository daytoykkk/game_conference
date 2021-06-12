/*
    子路由，公司详情页
*/

import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import './company.less'

const { TextArea } = Input;

export default class company extends Component {

    state = {
        isPass: true,
        name: "hh"
    }

    componentWillMount = () => {
        const { isPass,name } = this.props.location.state
        this.setState({
            isPass,
            name
        })
    }

    render() {
        return (
            <div className="company"> 
                <p className="title">{this.state.isPass? "已通过审核":"未通过审核"}/{this.state.name}</p>
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
                        <div className="itemBox" style={{'display':'flex', 'margin-top':'32px'}}>
                            <span style={{'width':'100px'}}>公司描述：</span>
                            <TextArea rows={4} />
                        </div>
                        <div className="btnBox">
                            <Button type="primary">驳回</Button>
                            <Button type="primary" style={{'margin-left': '30px'}}>通过</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
