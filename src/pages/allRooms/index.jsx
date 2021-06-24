import React, { Component } from 'react'
import { Radio, Pagination, DatePicker, Input } from 'antd'

import './index.less'

const { RangePicker } = DatePicker;
const { Search } = Input;

export default class index extends Component {

    state = {
        current: 1,
        radioValue: "1",
        startTime: "",
        endTime: ""
    }

    handleRadioChange = (e) => {
        this.setState({
            radioValue: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            startTime: e[0]._d,
            endTime: e[1]._d
        })
    }

    handlePageChange = (e) => {
        this.setState({
            current: e
        })
    }

    onSearch = (value) => {
        console.log(value)
    }

    toRoom = () => {
        this.props.history.push({pathname:'/home/manageRoom/room',state:{name:'201',id:'3565'}})
    }

    mockData = []
    meetMockData = []


    render() {
        for (let i = 0; i < 10; i++) {
            this.mockData.push({
                key: i,
                title: "关于月末部门员工团建详细安排",
                time: "6月2日13:00-6月2日13:00",
                person: "五条悟"
            })
            this.meetMockData.push({
                key: i,
                roomId: "20" + i,
                title: "关于月末部门员工团建详细安排",
                startTime: "6月2日13:30-",
                endTime: "6月2日17:00",
                host: "五条悟"
            })
        }
        return (
            <div className="allRooms">
                {/* 左边会议室内容 */}
                <div className="leftBox">
                    <div className="meetingList">
                        <div className="timePicker">
                            <RangePicker 
                                showTime 
                                placeholder={["开始时间", "结束时间"]}
                                onChange={this.handleDateChange}
                            />
                        </div>
                        <div className="meetingBox">
                            <Search 
                                placeholder="查询会议室" 
                                allowClear 
                                onSearch={this.onSearch} 
                                style={{ width: 250, float: 'right', marginBottom: '20px' }} 
                            />
                            <div className="listBox">
                                {
                                    this.meetMockData.map((item) => {
                                        return <div className="meetItem">
                                            <div className="itemTitle">{item.roomId}</div>
                                            <div className="itemContent" onClick={this.toRoom}>
                                                <p>{item.title}</p>
                                                <span className="time">{item.startTime}</span><br />
                                                <span className="time">{item.endTime}</span><br /><br />
                                                <span className="host">主持人：{item.host}</span>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* 分页 */}
                    <div className="page">
                        <Pagination
                            showSizeChanger={false}
                            showQuickJumper
                            current={this.state.current}
                            onChange={this.handlePageChange}
                            total={this.meetMockData.length}
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
