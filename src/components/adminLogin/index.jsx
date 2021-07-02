import React, { Component } from 'react'
import { Form, Input, Button, Row, Col, message } from 'antd'


import './index.less'
import { layout, tailLayout } from './modules'
import Icon from '../../images/code.png'
import { getCodeReq, loginReq } from '../../api'

export default class index extends Component {

    state = {
        username: String,
        password: String,
        imgUrl: ""
    }

    onFinish = async (values) => {
        let res = await loginReq(values)
        if (res.msg === "登入成功") {
            sessionStorage.setItem("identity", res.code);
            sessionStorage.setItem("token", res.data.token);
            this.props.history.push('/superAdmin')
        } else {
            message.warning(res.msg)
        }

    }

    onFinishFailed = (errorInfo) => {
        console.log('失败：', errorInfo)
    }

    //   获取验证码
    getCodeImg = async (e) => {
        this.setState({
            username: e.target.value
        })
        let res = await getCodeReq({ "username": e.target.value })
        this.setState({
            imgUrl: 'data:image/png;base64,' + btoa(
                new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        })
    }
    // 刷新验证码
    getImg = async () => {
        let res = await getCodeReq({ "username": this.state.username })
        this.setState({
            imgUrl: 'data:image/png;base64,' + btoa(
                new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        })
    }

    render() {
        return (
            <div className="adminLogin">
                <p className="title">登陆</p>
                <hr />
                <Form
                    className="loginForm"
                    {...layout}
                    name="adminLoginForm"
                    initialValues={{ remember: false }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "请输入管理员账号！" }]}
                    >
                        <Input onBlur={this.getCodeImg} placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "请输入密码！" }]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={14}>
                            <Col span={15}>
                                <Form.Item
                                    name="code"
                                    rules={[{ required: true, message: '请输入验证码！' }]}
                                >
                                    <Input placeholder="请输入验证码" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <img onClick={this.getImg} style={{ 'width': '60px', 'height': '30px' }} src={this.state.imgUrl ? this.state.imgUrl : Icon} alt="验证码" />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button onClick={this.toSuper} className="btn" type="primary" htmlType="submit">登陆</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
