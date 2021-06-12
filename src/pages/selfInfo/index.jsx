import React, { Component } from 'react'

import './index.less'
import Bg from '../../images/bg.png'
import Icon from '../../images/icon.png'

export default class index extends Component {
    render() {
        return (
            <div className="selfInfo">
                {/* 上面个人头像等 */}
                <div className="imgBox">
                    <img src={Bg} alt="无法显示" />
                </div>
                <div className="firstBox">
                    <img src={Icon} alt="我是头像" />
                    <div className="rightBox">
                        <div className="topBox">
                            <span>五条悟</span>
                            <span>tel:11111111111</span>
                            <div className="bgBtn">上传背景图片</div>
                        </div>
                        <span className="signSpan">用年龄开出恶之花</span>
                    </div>
                </div>
                {/* 下面一些信息 */}
                <div className="secondBox">
                    <div className="titleBox">
                        <span className="title">基本信息</span>
                        <div className="btns">
                            <div className="btn">修改密码</div>
                            <div className="btn">编辑资料</div>
                        </div>
                    </div>
                    <hr />
                    <span className="infoItem"><span className="label">性别：</span><span className="info">女</span></span>
                    <span className="infoItem" style={{'marginLeft': '50px'}}><span className="label">年龄：</span><span className="info">29</span></span><br />
                    <span className="infoItem"><span className="label">邮箱：</span><span className="info">411487840@qq.com</span></span>
                </div>
                <br />
                <div className="secondBox">
                    <div className="titleBox">
                        <span className="title">职工信息</span>
                    </div>
                    <hr />
                    <span className="infoItem"><span className="label">职工号：</span><span className="info">000135</span></span>
                    <span className="infoItem" style={{'marginLeft': '50px'}}><span className="label">职位：</span><span className="info">文秘</span></span><br />
                    <span className="infoItem"><span className="label">入职时间：</span><span className="info">2021年6月4日</span></span>
                </div>
            </div>
        )
    }
}
