import React, { Component } from 'react'
import { Table } from 'antd'


import './index.less'
import { columns } from './config'

export default class index extends Component {

    dataSource = []

    handleClick = (record) => {
        return () => {
            const { meetingId, name } = record
            this.props.history.push({
                pathname:'/home/myMeeting/conference',
                state: {meetingId, title:name}
            })
        }
    }

    render() {
        for (let i = 0; i < 20; i++) {
            this.dataSource.push({
                "meetingId": (i+1) +  "6356" + i,
                "host": "五条悟",
                "room": "20" + i,
                "name": "关于物品价格上涨及库存的讨论",
                "time": "2021年6月8日12:00 - 2021年6月8日13:00"
            })
        }
        return (
            <div className="list">
                <div className="box">
                    <Table 
                        className="table" 
                        dataSource={this.dataSource} 
                        columns={columns} 
                        onRow={record => {
                            return {
                                onClick: this.handleClick(record)
                            }
                        }}
                    />

                </div>
            </div>
        )
    }
}
