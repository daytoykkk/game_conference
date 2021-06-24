import React, { Component } from 'react'
import { Form, Input, Button, Row,Col } from 'antd';

import './index.less'
import { layout, tailLayout } from '../../modules'
import  Icon  from '../../../../images/code.png'

export default class index extends Component {

    state = {
        username: "",
        password: "",
        code: ""
    }

    onFinish = (values) => {
        this.setState({
            ...values
        })
      };

      onFinishFailed = (errorInfo) => {
        console.log('失败', errorInfo);
      };

      toHome = () => {
          this.props.history.push('/home');
    }

    render() {
        return (
            <div className="signIn">
                <Form
                    className="signInForm"
                    {...layout}
                    name="loginForm"
                    autoComplete = "off"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名或者邮箱！' }]}
                    >
                        <Input placeholder="请输入用户名/邮箱" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码！' }]}
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
                                <img style={{'width':'60px','height':'30px'}} src={Icon} alt="验证码" />
                            </Col>
                        </Row>
                   </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button onClick={this.toHome.bind(this)} className="btn" type="primary" htmlType="submit">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
