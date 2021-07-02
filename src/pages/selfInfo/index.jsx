import React, { Component } from 'react'
import { Button, Modal, Form, Input, message } from 'antd'

import './index.less'
import Bg from '../../images/bg.png'
import Icon from '../../images/icon.png'

import { getUserInfoReq, updateUserInfoReq, userCreateCompanyReq, applyForCompanyReq } from '../../api'

const  formatDateTime = () => { 
    var date = new Date();
    var y = date.getFullYear(); 
    var m = date.getMonth() + 1; 
    m = m < 10 ? ('0' + m) : m; 
    var d = date.getDate(); 
    d = d < 10 ? ('0' + d) : d; 
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute; 
    second = second < 10 ? ('0' + second) : second; 
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second; 
   };

export default class index extends Component {

    state = {
        isStaff: true,     //是否已经加入组织
        createVisible: false,
        createConfirmLoading: false,
        joinVisible: false,
        joinConfirmLoading: false,
        isBorder:false,
        isDisable: true,
        isModify:false,
        form: {
            username:"daytoykkk",
            sign:"用年龄开出恶之花",
            phone:"1111111111",
            sex:"女",
            age:11,
            email:"423352354@qq.com"
        },
        staff:Object
    }

    // 获取用户信息并渲染
    UNSAFE_componentWillMount = async () => {
        let res = await getUserInfoReq();
      
        const { userInfo, email, staffTag } = res.data
    
        this.setState({
           form: userInfo,
           isStaff: staffTag === 0 ? false:true,
           staff: res.data.staff,
           email
        })
    }

    // 修改资料
    modifyInfo = () => {
        this.setState({
            isDisable:false,
            isBorder: true,
            isModify: true
        })
    }

    // 保存资料
    saveInfo = async () => {
        this.setState({
            isDisable:true,
            isBorder: false,
            isModify: false
        })
        let data = this.state.form;
        delete data.email;
        delete data.icon;
        delete data.username;
        let res = await updateUserInfoReq(data);
        if(res.msg === "success") {
            message.success("修改成功")
        }else {
            message.error(res.msg)
        }
    }

    //把修改的内容放到state里面
    setModifyInfo = (e) => {
        const { name, value } = e.target
        let form = this.state.form
        form[name] = value
        this.setState({
            form
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

    onCreateFinish = async (values) => {      //弹窗点击确认，调接口
        let time = formatDateTime();
        values.createDate = time;
        let res = await userCreateCompanyReq(values)
       if(res.msg === "success") {
           message.success("申请公司成功，请注意查看邮箱")
           this.setState({
            createVisible: false
        })
       }
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

    onJoinFinish = async (values) => {      //弹窗点击确认，调接口
        values.email = this.state.form.email;
        values.staffId = parseFloat( values.staffId)
       let res = await applyForCompanyReq(values)
       if(res.msg === "success"){
           message.success("申请成功，请等待审核！",()=> {
            this.setState({
                joinVisible: false
            })
           })
       }else {
           message.warning(res.msg)
       }
        
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
                            <span>{this.state.form.username}</span>
                            <div style={{'color':'#fff','marginLeft':'20px'}}>tel:<Input name="phone" style={{'color':this.state.isDisable ? '#fff':'#000'}} value={this.state.form.phone} onChange={this.setModifyInfo} bordered={this.state.isBorder} disabled={this.state.isDisable}></Input></div>
                            <div className="bgBtn">上传背景图片</div>
                        </div>
                        <Input name="sign" value={this.state.form.sign} onChange={this.setModifyInfo} bordered={this.state.isBorder} disabled={this.state.isDisable}></Input>
                    </div>
                </div>
                {/* 下面一些信息 */}
                <div className="secondBox">
                    <div className="titleBox">
                        <span className="title">基本信息</span>
                        <div className="btns">
                            <div className="btn">修改密码</div>
                            {this.state.isModify ? (
                                <div className="btn" onClick={this.saveInfo}>保存资料</div>
                            ) : (
                                <div className="btn" onClick={this.modifyInfo}>修改资料</div>
                            )}
                        </div>
                    </div>
                    <hr />
                    <span className="infoItem"><span className="label">性别：</span><Input name="sex" value={this.state.form.sex} onChange={this.setModifyInfo} bordered={this.state.isBorder} disabled={this.state.isDisable}></Input></span>
                    <span className="infoItem" style={{ 'marginLeft': '50px' }}><span className="label">年龄：</span><Input name="age" value={this.state.form.age} onChange={this.setModifyInfo} bordered={this.state.isBorder} disabled={this.state.isDisable}></Input></span><br />
                    <span className="infoItem"><span className="label">邮箱：</span><Input name="email" value={this.state.email} onChange={this.setModifyInfo} bordered={false} disabled={true}></Input></span>
                </div>
                <br />
                <div className="secondBox">
                    <div className="titleBox">
                        <span className="title">职工信息</span>
                    </div>
                    <hr />
                    {this.state.isStaff ? (
                        <div>
                            <span className="infoItem"><span className="label">职工号：</span><span className="info">{this.state.staff.staffId}</span></span>
                            <span className="infoItem" style={{ 'marginLeft': '50px' }}><span className="label">职位：</span><span className="info">{this.state.staff.position}</span></span><br />
                            <span className="infoItem"><span className="label">姓名：</span><span className="info">{this.state.staff.name}</span></span>
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
                                        label="公司ID"
                                        name="companyId"
                                        rules={[{ required: true, message: '请输入公司ID！' }]}
                                    >
                                        <Input />
                                    </Form.Item>
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
