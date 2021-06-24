import React, { Component } from 'react'
import { LeftOutlined, EditOutlined } from '@ant-design/icons'
import { Table } from 'antd'

import './room.less'
import { roomColumns } from './config'

export default class room extends Component {

    state = {
        roomName: "",
        roomId: ""
    }

    componentWillMount = () => {
        const { name, id } = this.props.location.state;
        this.setState({ roomName: name, roomId: id });
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
                <p><LeftOutlined /> {this.state.roomName}</p>
                <div className="box">
                    {/* 左边的盒子 */}
                    <div className="leftFakeBox">
                        <div className="leftBox">
                            <div className="leftTopBox">
                                <p>{this.state.roomName} <EditOutlined /></p>
                                <p>会议室ID：{this.state.roomId}</p>
                            </div>
                            <div className="leftBottomBox">
                                <p>会议室描述 <EditOutlined /></p>
                                <div className="contentBox">
                                    该会议室可容纳20人，有投影仪、音箱、咖啡机。
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
                            scroll={{y:'450px'}}
                            dataSource={this.mockData}
                            rowKey={columns => columns.key}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
