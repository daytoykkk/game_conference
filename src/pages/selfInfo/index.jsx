import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'antd'

import './index.less'
import Bg from '../../images/bg.png'
import Icon from '../../images/icon.png'

import { getUserInfoReq } from '../../api'

export default class index extends Component {

    state = {
        isStaff: true,     //是否已经加入组织
        createVisible: false,
        createConfirmLoading: false,
        joinVisible: false,
        joinConfirmLoading: false
    }

    //todo 获取用户信息并渲染
    componentDidMount = async () => {
        let res = await getUserInfoReq();
        this.setState({
            ...res.data
        })
    }


    // 申请组织的功能
    showCreateModal = () => {
        this.setState({
            createVisible: true
        })
    }

    handleCreateOk = (values) => {        //确认申请弹窗
        Modal.confirm({
            title: '确认要申请组织吗？',
            okText: '是',
            cancelText: '否',
            onOk: () => {
                this.onCreateFinish(values);
            },
            onCancel() {
                this.setState({
                    createVisible: false
                })
            }
        })
    }

    handleCreateCancel = () => {        //弹窗点击取消
        this.setState({
            createVisible: false
        })
    }

    onCreateFinish = (values) => {      //弹窗点击确认，调接口
        let datetime = new Date()
        let date = new Date(datetime).toLocaleString().replace(/年|月|\//g, "-").replace(/日|下午|上午/g, " ");
        values.createDate = date;
        //todo 调接口
    }

    // 加入组织的功能
    showJoinModal = () => {
        this.setState({
            joinVisible: true
        })
    }

    handleJoinOk = (values) => {        //确认加入组织弹窗
        Modal.confirm({
            title: '确认要加入组织吗？',
            okText: '是',
            cancelText: '否',
            onOk: () => {
                this.onJoinFinish(values);
            },
            onCancel() {
                this.setState({
                    joinVisible: false
                })
            }
        })
    }

    handleJoinCancel = () => {        //弹窗点击取消
        this.setState({
            joinVisible: false
        })
    }

    onJoinFinish = (values) => {      //弹窗点击确认，调接口
        //todo 调接口
        // companyId和email要自己填
        console.log(values)
    }

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
                            <span>{this.state.username}</span>
                            <span>tel:{this.state.phone}</span>
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
                    <span className="infoItem"><span className="label">性别：</span><span className="info">{this.state.sex}</span></span>
                    <span className="infoItem" style={{ 'marginLeft': '50px' }}><span className="label">年龄：</span><span className="info">{this.state.age}</span></span><br />
                    <span className="infoItem"><span className="label">邮箱：</span><span className="info">411487840@qq.com</span></span>
                </div>
                <br />
                <div className="secondBox">
                    <div className="titleBox">
                        <span className="title">职工信息</span>
                    </div>
                    <hr />
                    {this.state.isStaff ? (
                        <div>
                            <span className="infoItem"><span className="label">职工号：</span><span className="info">000135</span></span>
                            <span className="infoItem" style={{ 'marginLeft': '50px' }}><span className="label">职位：</span><span className="info">文秘</span></span><br />
                            <span className="infoItem"><span className="label">入职时间：</span><span className="info">2021年6月4日</span></span>
                        </div>
                    ) : (
                        <div className="">
                            还没有加入任何组织噢！<br />
                            <Button type="primary" onClick={this.showJoinModal}>加入组织</Button>
                            <Button type="primary" onClick={this.showCreateModal} style={{ 'marginLeft': '20px' }}>申请一个组织</Button>

                        {/* 申请公司窗口 */}
                            <Modal
                                title="申请公司"
                                visible={this.state.createVisible}
                                confirmLoading={this.state.createConfirmLoading}
                                footer={null}
                                closable={false}
                            >
                                <Form
                                    name="create"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                    onFinish={this.handleCreateOk}
                                >
                                    <Form.Item
                                        label="公司名"
                                        name="name"
                                        rules={[{ required: true, message: '请输入公司名！' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="地址"
                                        name="address"
                                        rules={[{ required: true, message: '请输入地址！' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="公司电话"
                                        name="companyPhone"
                                        rules={[{ required: true, message: '请输入电话！' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="描述"
                                        name="description"
                                        rules={[{ required: true, message: '请输入详细描述！' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            申请
                                        </Button>
                                        <Button htmlType="button" onClick={this.handleCreateCancel} style={{ 'marginLeft': '20px' }}>
                                            取消
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        
                        {/* 加入组织窗口 */}
                        <Modal
                                title="加入组织"
                                visible={this.state.joinVisible}
                                confirmLoading={this.state.joinConfirmLoading}
                                footer={null}
                                closable={false}
                            >
                                <Form
                                    name="join"
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                    onFinish={this.handleJoinOk}
                                >
                                    <Form.Item
                                        label="名字"
                                        name="name"
                                        rules={[{ required: true, message: '请输入名字！' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="电话"
                                        name="phone"
                                        rules={[{ required: true, message: '请输入电话！' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="职位"
                                        name="position"
                                        rules={[{ required: true, message: '请输入职位！' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="职工号"
                                        name="staffId"
                                        rules={[{ required: true, message: '请输入职工号！' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            加入
                                        </Button>
                                        <Button htmlType="button" onClick={this.handleJoinCancel} style={{ 'marginLeft': '20px' }}>
                                            取消
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
