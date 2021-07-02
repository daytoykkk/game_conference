import React, { Component } from 'react'
import { Table } from 'antd'
import { Space, Modal, message } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import './index.less'

import { getStaffApplyReq, passStaffApplyReq, unPassStaffApplyReq } from '../../api'

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone'
    },
    {
        title: '职位',
        dataIndex: 'position',
        key: 'position'
    },
    {
        title: '职工号',
        dataIndex: 'staffId',
        key: 'staffId'
    },
    {
        title: '审核',
        key: 'action',
        render: (text, record) => (
            <Space >
                <ArrowRightOutlined style={{ color: '#939393' }} />
            </Space>
        )
    }
]

export default class unauditedMember extends Component {

    state = {
        tableData: [{
            username: "五条悟",
            name: "五条悟",
            position: "打工人",
            phone: "15160708996",
            staffId: 12
        }]
    }


    componentDidMount = async () => {
        let res = await getStaffApplyReq({ "page": 1, "size": 10 })
        let tableData = res.data
        this.setState({
            tableData
        })
    }

    handleClick = (record) => {
        let array = new Array(1);
        array[0] = record.id;
        Modal.confirm({
            title: '请对申请进行操作',
            okText: '通过',
            cancelText: '不通过',
            onOk: () => {
                this.onPassFinish(array);
            },
            onCancel() {
                this.onUnpassFinish(array)
            }
        })
    }

    onPassFinish = async (record) => {
        let res = await passStaffApplyReq(record)
        if (res.msg === "success") {
            message.success("审核成功！", async () => {
                let res = await getStaffApplyReq({ "page": 1, "size": 10 })
                let tableData = res.data
                this.setState({
                    tableData
                })
            })
        }
    }

    onUnpassFinish = async (record) => {
        let res = await unPassStaffApplyReq(record)
        if (res.msg === "success") {
            message.success("审核成功！", async () => {
                let res = await getStaffApplyReq({ "page": 1, "size": 10 })
                let tableData = res.data
                this.setState({
                    tableData
                })
            })
        }
    }

    render() {
        return (
            <div className="hhh">
                <Table
                    rowKey={columns => columns.companyId}
                    columns={columns}
                    dataSource={this.state.tableData}
                    scroll={{ y: 400 }}
                    onRow={(record) => ({
                        onClick: () => {
                            this.handleClick(record)
                        }
                    })}
                >
                </Table>
            </div>
        )
    }
}
