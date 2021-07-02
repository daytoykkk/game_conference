import React, { Component } from 'react'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import { Modal, Form, Input, Button, message } from 'antd'

import './conference.less'
import Icon from '../../images/icon.png'
import { formItemLayoutWithOutLabel } from './config'

import { addMeetingMemberReq, getMeetingById } from '../../api'

export default class conference extends Component {

    state = {
        modalVisible: false,
        members: [{
            staffId: 12,
            name: "五条悟"
        }]
    }

    componentWillMount = async () => {
        const { meetingId, description, endTime, host, meetingName, roomId, startTime } = this.props.location.state
        this.setState({ meetingId, description, endTime, host, meetingName, roomId, startTime });
        let res = await getMeetingById({ "meetingId": parseFloat(meetingId) })
        let members = res.data.members;
        this.setState({
            members
        })
    }

    // 添加会议成员
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }

    handleModalOk = (values) => {        //确认预约会议弹窗
        Modal.confirm({
            title: '确认要添加成员吗？',
            okText: '是',
            cancelText: '否',
            onOk: () => {
                this.onModalFinish(values);
            },
            onCancel() {
                this.setState({
                    modalVisible: false
                })
            }
        })
    }

    handleModalCancel = () => {        //弹窗点击取消
        this.setState({
            modalVisible: false
        })
    }

    onModalFinish = async (values) => {      //弹窗点击确认，调接口
        let data = {
            "meetingId": parseFloat(this.state.meetingId),
            "staffId": parseFloat(values.staffId)
        }

        let res = await addMeetingMemberReq(data)
        if (res.msg === "success") {
            message.success("添加成功！",async ()=> {
                this.setState({
                    modalVisible:false
                })
                let res = await getMeetingById({ "meetingId": parseFloat(this.state.meetingId) })
                let members = res.data.members;
                this.setState({
                    members
                })
            })
            
        } else {
            message.warning(res.msg)
        }
    }


    render() {
        return (
            <div className="conference">
                <p><LeftOutlined /> {this.state.meetingName}</p>
                <div className="box">
                    {/* 左边盒子 */}
                    <div className="leftBox">
                        <div className="leftTopBox">
                            <p>{this.state.meetingName}</p>
                            <hr />
                            <p>组织者：{this.state.host}</p>
                        </div>
                        <div className="leftBottomBox">
                            <p>会议室ID：{this.state.roomId}</p>
                            <p>会议ID：{this.state.meetingId}</p>
                            <p>会议进行时间：</p>
                            <p>{this.state.startTime}</p>
                            <p>{this.state.endTime}</p>
                        </div>
                    </div>
                    {/* 右边盒子 */}
                    <div className="rightBox">
                        <div className="rightTopBox">
                            <div className="contentBox">
                                <div className="titleBox">会议描述</div>
                                <div className="content">{this.state.description}</div>
                            </div>
                            <div className="fileBox">
                                <div className="titleBox">会议上传文件 <PlusOutlined /></div>
                                <div className="file">
                                    我是文件
                                </div>
                            </div>
                        </div>
                        <div className="rightBottomBox">
                            <div className="titleBox">会议成员 <PlusOutlined onClick={this.showModal} /></div>
                            <div className="memberBox">
                                {this.state.members.map((item) => {
                                    return <div className="memberItem" key={item.staffId}>
                                        <img src={Icon} alt="头像" />
                                        <p>{item.name}</p>
                                        <p>{item.staffId}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 添加成员 */}
                <Modal
                    title="添加成员"
                    visible={this.state.modalVisible}
                    footer={null}
                    closable={false}
                >
                    <Form
                        name="addMember"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={this.handleModalOk}
                        {...formItemLayoutWithOutLabel}
                    >
                        <Form.Item
                            label="职工号"
                            name="staffId"
                            rules={[{ required: true, message: '请输入职工号！' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                添加成员
                            </Button>
                            <Button htmlType="button" onClick={this.handleModalCancel} style={{ 'marginLeft': '20px' }}>
                                取消
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
