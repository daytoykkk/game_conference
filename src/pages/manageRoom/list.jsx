import React, { Component } from 'react'
import { Table, Button, Modal, Form, Input, message } from 'antd'

import './list.less'
import { columns } from './config'
import { getCompanyRoomReq, createMeetingRoomReq } from '../../api'

export default class index extends Component {

    state = {
        modalVisible: false
    }


    componentDidMount = async () => {
        let res = await getCompanyRoomReq();
        this.setState({
            tableData: res.data
        })
        console.log(res.data)
    }

    // 去会议室详情页
    handleClick = (id, name, description) => {
        return () => {
            this.props.history.push({
                pathname:'/home/manageRoom/room',
                state: {
                    name,
                    id,
                    description
                }
            })
        }
    }

     // 添加会议室
     showModal = () => {
        this.setState({
            modalVisible: true
        })
    }

    handleModalOk = (values) => {        //确认预约会议弹窗
        Modal.confirm({
            title: '确认要添加会议室吗？',
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
        let res = await createMeetingRoomReq(values);
        if(res.msg === "success") {
            message.success("添加会议室成功！", ()=> {
                window.location.reload()
            })
            
        }else {
            message.warning(res.msg)
        }
    }

    render() {

        return (
            <div className="list">
                <div className="box">
                    <Button onClick={this.showModal} type="primary" style={{'marginBottom':'10px'}}>添加会议室</Button>
                    <Table 
                        className="table" 
                        rowKey={columns => columns.roomId} 
                        columns={columns}
                        bordered
                        dataSource={this.state.tableData} 
                        onRow={record => {
                            return {
                                onClick: this.handleClick(record.roomId, record.roomAddress, record.description)
                            }
                        }}
                    />
                </div>

                  {/* 添加会议室的弹窗 */}
                  <Modal
                    title="添加会议室"
                    visible={this.state.modalVisible}
                    footer={null}
                    closable={false}
                >
                    <Form
                        name="addRoom"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={this.handleModalOk}
                    >
                        <Form.Item
                            label="会议室标题"
                            name="roomAddress"
                            rules={[{ required: true, message: '请输入会议室标题！' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="会议室描述"
                            name="description"
                            rules={[{ required: true, message: '请输入会议室描述！' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                添加会议室
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
