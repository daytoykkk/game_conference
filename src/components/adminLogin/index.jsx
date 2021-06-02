import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'


import './index.less'
import { layout, tailLayout } from './modules'

export default class index extends Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const state = {
            username: String,
            password: String
        }

        const onFinish = (values) => {
            this.setState({...values})
            console.log(this.state)
        }

        const onFinishFailed = (errorInfo) => {
            console.log('失败：', errorInfo)
        }

        return (
            <div className="adminLogin">
                <p className="title">登陆</p>
                <hr />
                <Form 
                    className="loginForm"
                    {...layout}
                    name="adminLoginForm"
                    initialValues={{ remember: false}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
