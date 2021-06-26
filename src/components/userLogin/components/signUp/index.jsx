import React, { Component } from 'react'
import { Form, Row, Col, Button, Input, message } from 'antd'

import './index.less'
import { layout, tailLayout } from '../../modules'

import { registerReq, sendEmailReq } from '../../../../api'

export default class index extends Component {

    state = {
        username: String,
        password: String,
        confirm: String,
        email: String,
        code: String
    }

    handleEmailValue = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    // 发送邮箱
    handleEmail = async (e) => {
        const res = await sendEmailReq(this.state.email)
        if(res.msg === "success") {
            message.success('发送成功，请及时查看邮箱！');
        } else {
            message.warning(res.msg);
        }
    }

    // 注册
    onFinish = async (values) => {
        this.setState({
            ...values
        })
        const data = {
            code: this.state.code,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        }
        const res = await registerReq(data)
        if(res.msg === "success") {
            message.success("注册成功！");
            this.props.toLoginValue(1);
        } else {
            message.warning(res.msg)
        }
    }

    render() {
        return (
            <div className="signUp">
                <Form
                    className="signUpForm"
                    {...layout}
                    name="signUpForm"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名！' }]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: '请输入你的邮箱！' }, { type: 'email', message: "邮箱格式不正确！"}]}
                    >
                        <Input value={this.state.email} onChange={this.handleEmailValue} placeholder="请输入邮箱" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码!',
                            },
                            {
                                min: 6,
                                message: '密码不少于6位！'
                            },
                            {
                                max: 15,
                                message: '密码不多于15位！'
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    let reg = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/;
                                    if (!value || reg.test(value) ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('密码必须包含数字和大小写字母!'));
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认你的密码!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次密码不一致!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="请再次确认密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Row gutter={10}>
                            <Col span={14}>
                                <Form.Item
                                    name="code"
                                    rules={[{ required: true, message: '请输入验证码！' }]}
                                >
                                    <Input placeholder="请输入验证码" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Button type="primary" onClick={this.handleEmail}>发送验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button className="btn" type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
