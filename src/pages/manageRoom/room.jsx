import React, { Component } from 'react'
import { LeftOutlined, EditOutlined } from '@ant-design/icons'
import { Table, Button, Modal, Form, Input, message, DatePicker } from 'antd'

import './room.less'
import { roomColumns, rangeConfig } from './config'
import { appointMeetingReq, deleteMeetingRoomReq } from '../../api'

const { RangePicker } = DatePicker;

export default class room extends Component {

    state = {
        isAdmin: false,
        roomName: "",
        roomId: "",
        modalVisible: false,
        modalConfirmLoading: false,
    }

    componentDidMount = () => {
        let identity = sessionStorage.getItem("identity")
        this.setState({
            isAdmin: identity === "2" ? true : false
        })
        const { name, id, description } = this.props.location.state;
        this.setState({ roomName: name, roomId: id, description });

        //todo 获取会议室信息
    }

    //todo 预约会议
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }

    handleModalOk = (values) => {        //确认预约会议弹窗
        Modal.confirm({
            title: '确认要预约会议吗？',
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
        //todo 调接口
        let data = {
            "description": values.description,
            "meetingName":values.meetingName,
            "roomId": this.state.roomId,
            "startTime": values.time[0].format("YYYY-MM-DD HH:mm:ss"),
            "endTime":values.time[1].format("YYYY-MM-DD HH:mm:ss")
        }
        let res = await appointMeetingReq(data);
        if(res.msg === "success"){
            message.success("预约会议成功！",()=> {
                window.location.reload()
            })
        }else{
            message.warning(res.msg)
        }
    }



    // 删除会议室
    deleteRoom = async () => {
        let array = new Array(1);
        array[0] = this.state.roomId;

        let res = await deleteMeetingRoomReq(array);
        if (res.msg === "success") {
            message.success("删除会议室成功！", () => {
                this.props.history.push({
                    pathname: '/home/manageRoom/list',
                })
            })
        } else {
            message.warning(res.msg)
        }
    }

    // todo 测试数据
    mockData = []

    render() {

        for (let i = 0; i < 20; i++) {
            this.mockData.push({
                key: i,
                hostName: '五条悟',
                conferenceName: 'hhhhhhh',
                time: '2021年6月8日12:00 - 2021年6月8日13:00'
            })
        }

        return (
            <div className="room">
                <p><LeftOutlined /> {this.state.roomName} <Button onClick={this.showModal} type="primary" style={{ 'marginLeft': '10px' }}>预约会议</Button>
                    {this.state.isAdmin ? (<Button onClick={this.deleteRoom} type="primary" style={{ 'marginLeft': '10px' }}>删除该会议室</Button>) : ('')}
                </p>
                <div className="box">
                    {/* 左边的盒子 */}
                    <div className="leftFakeBox">
                        <div className="leftBox">
                            <div className="leftTopBox">
                                <p>{this.state.roomName} {this.state.isAdmin ? <EditOutlined /> : ''}</p>
                                <p>会议室ID：{this.state.roomId}</p>
                            </div>
                            <div className="leftBottomBox">
                                <p>会议室描述 {this.state.isAdmin ? <EditOutlined /> : ''}</p>
                                <div className="contentBox">
                                    {this.state.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 右边的盒子 */}
                    <div className="rightBox">
                        <Table
                            className="table"
                            columns={roomColumns}
                            bordered
                            scroll={{ y: '450px' }}
                            dataSource={this.mockData}
                            rowKey={columns => columns.key}
                        />
                    </div>
                </div>

                {/* 预约会议的弹窗 */}
                <Modal
                    title="预约会议"
                    visible={this.state.modalVisible}
                    confirmLoading={this.state.modalConfirmLoading}
                    footer={null}
                    closable={false}
                >
                    <Form
                        name="appointment"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={this.handleModalOk}
                    >
                        <Form.Item
                            label="会议标题"
                            name="meetingName"
                            rules={[{ required: true, message: '请输入会议标题！' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="会议描述"
                            name="description"
                            rules={[{ required: true, message: '请输入会议描述！' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item name="time" label="会议进行时间" {...rangeConfig}>
                            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                预约会议
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
