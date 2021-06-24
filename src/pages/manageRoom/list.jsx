import React, { Component } from 'react'
import { Table } from 'antd'

import './list.less'
import { columns } from './config'

export default class index extends Component {

    data = []

    handleClick = (id, name) => {
        return () => {
            this.props.history.push({
                pathname:'/home/manageRoom/room',
                state: {
                    name,
                    id
                }
            })
        }
    }

    render() {

        for(let i=0;i<15;i++) {
            this.data.push({
                "key": i,
                "roomName": '113',
                "host": '五条悟',
                "meetingName": '关于本月员工加薪的详细会谈',
                "time": '2021年6月8日12:00 - 2021年6月8日13:00'
            })
        }

        return (
            <div className="list">
                <div className="box">
                    <Table 
                        className="table" 
                        columns={columns}
                        bordered
                        dataSource={this.data} 
                        rowKey={columns => columns.key} 
                        onRow={record => {
                            return {
                                onClick: this.handleClick(record.key, record.roomName)
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}
