import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'


import './index.less'
import { layout, tailLayout } from './modules'

export default class index extends Component {

    state = {
        username: String,
        password: String
    }

    onFinish = (values) => {
        this.setState({...values})
        console.log(this.state)
    }

    onFinishFailed = (errorInfo) => {
        console.log('失败：', errorInfo)
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
                    initialValues={{ remember: false}}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: "请输入管理员账号！"}]}
                    >
                        <Input placeholder="请输入用户名"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: "请输入密码！"}]}
                    >
                        <Input.Password placeholder="请输入密码"/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button className="btn" type="primary" htmlType="submit">登陆</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
