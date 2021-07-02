import React, { Component } from 'react'
import { Radio, Pagination, DatePicker, Input } from 'antd'

import './index.less'
import { getCompanyRoomReq, getUserMeetingReq } from '../../api'

const { RangePicker } = DatePicker;
const { Search } = Input;

export default class index extends Component {

    state = {
        current: 1,
        radioValue: "1",
        startTime: "",
        endTime: "",
        meetingTable:[{
            description:"hhh",
            host:"daytoykkk",
            meetingName: "hhhh"
        }],
        roomTable:[{
            description:"hhh",
            roomAddress:"101",
            roomId:4
        }]
    }

     mockData =[]

    // 获取公司会议室
    componentWillMount = async () => {
        let roomRes = await getCompanyRoomReq();
        let meetingRes = await getUserMeetingReq({"page":1,"size":5});
       this.setState({
           roomTable:roomRes.data,
           meetingTable: meetingRes.data
       })
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

    toRoom = (item) => {
       return () => {
        let data = {
            name: item.roomAddress,
            id: item.roomId,
            description: item.description
        }
        this.props.history.push({pathname:'/home/manageRoom/room',state:data})
       }
    }

    meetMockData = []


    render() {
        for (let i = 0; i < 5; i++) {
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
                                    this.state.roomTable.map((item) => {
                                        return <div className="meetItem" key={item.roomId}>
                                            <div className="itemTitle">{item.roomAddress}</div>
                                            <div className="itemContent" onClick={this.toRoom(item)}>
                                                <p>{item.roomId}</p>
                                                <span>{item.description}</span>
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
                        {this.state.meetingTable.map((item) => {
                            return <div className="meetingItem" key={item.meetingId}>
                                <span className="meetingTitle">{item.meetingName}</span>
                                <span className="time">{item.startTime}</span>
                                <span className="time">{item.host}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
