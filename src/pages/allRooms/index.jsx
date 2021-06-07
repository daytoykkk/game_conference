import React, { Component } from 'react'
import { Radio, Pagination } from 'antd'

import './index.less'
export default class index extends Component {

    state = {
        radioValue: "1"
    }

    handleRadioChange = (e) => {
        this.setState({
            radioValue: e.target.value
        })
    }

    mockData = []


    render() {
        for (let i = 0; i < 8; i++) {
            this.mockData.push({
                key: i,
                title: "hhhhhhhhhhhhhhhhhhhhhhhhhh",
                time: "6月2日13:00-6月2日13:00",
                person: "五条悟"
            })
        }
        return (
            <div className="allRooms">
                {/* 左边会议室内容 */}
                <div className="leftBox">
                    <div className="meetingList">
                        会议列表
                    </div>
                    <div className="page">
                        <Pagination
                            showSizeChanger={false}
                            showQuickJumper
                            defaultCurrent={1}
                            total={500}
                        />
                    </div>
                </div>
                {/* 右边我的会议内容 */}
                <div className="rightBox">
                    <Radio.Group onChange={this.handleRadioChange} defaultValue="1" buttonStyle="solid">
                        <Radio.Button value="1">当前会议</Radio.Button>
                        <Radio.Button value="2">会议历史</Radio.Button>
                    </Radio.Group>
                    <div className="meetingBox">
                        {this.mockData.map((item) => {
                            return <div className="meetingItem" key={item.key}>
                                <span className="meetingTitle">{item.title}</span>
                                <span className="time">{item.time}</span>
                                <span className="time">{item.person}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
