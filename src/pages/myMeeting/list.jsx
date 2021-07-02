import React, { Component } from 'react'
import { Table } from 'antd'


import './index.less'
import { columns } from './config'
import { getUserMeetingReq } from '../../api'

export default class index extends Component {

    // dataSource = []

    state = {
    }

    componentDidMount = async () => {
        let res = await getUserMeetingReq({"page":1,"size":10});
        this.setState({
            tableData:res.data
        })
        console.log(res.data)
    }

    handleClick = (record) => {
        return () => {
            this.props.history.push({
                pathname:'/home/myMeeting/conference',
                state: record
            })
        }
    }

    render() {
        // for (let i = 0; i < 20; i++) {
        //     this.dataSource.push({
        //         "meetingId": (i+1) +  "6356" + i,
        //         "host": "五条悟",
        //         "room": "20" + i,
        //         "name": "关于物品价格上涨及库存的讨论",
        //         "time": "2021年6月8日12:00 - 2021年6月8日13:00"
        //     })
        // }
        return (
            <div className="list">
                <div className="box">
                    <Table 
                        className="table" 
                        dataSource={this.state.tableData} 
                        rowKey={columns => columns.meetingId}
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
