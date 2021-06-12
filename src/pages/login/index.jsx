import React, { Component } from 'react'

import './index.less'
import Icon from '../../images/arrow.png'
import UserLogin from '../../components/userLogin'
import AdminLogin from '../../components/adminLogin'

export default class index extends Component {

    state = {
        isAdmin: false,     // 是否是svip登陆界面
    }

    switchBox = () => {     //切换登陆界面
        let temp = this.state.isAdmin;
        this.setState({
            isAdmin: !temp
        })
    }

    render() {
        return (
            <div className="login">
                <div className="loginBg">
                    <div className="loginBox">
                        <div className="loginLeft">
                            {this.state.isAdmin ? (
                                <AdminLogin></AdminLogin>
                            ) : (
                                <UserLogin></UserLogin>
                            )}
                        </div>
                        <div className="loginRight">
                            <div className="loginRightItem" onClick={this.switchBox}>
                                <span>{this.state.isAdmin ? "用户登录" : "超级管理员登陆"}</span>
                                <img src={Icon} alt="->" />
                            </div>
                            <div className="loginRightItem">
                                <span>忘记密码</span>
                                <img src={Icon} alt="->" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
