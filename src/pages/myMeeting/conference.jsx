import React, { Component } from 'react'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'

import './conference.less'
import Icon from '../../images/icon.png'

export default class conference extends Component {

    state = {
        meetingId: String,
        title: String
    }

    componentWillMount = () => {
        const { meetingId, title } = this.props.location.state
        this.setState({ meetingId, title });
    }

    render() {
        return (
            <div className="conference">
                <p><LeftOutlined /> {this.state.title}</p>
                <div className="box">
                    {/* 左边盒子 */}
                    <div className="leftBox">
                        <div className="leftTopBox">
                            <p>{this.state.title}</p>
                            <hr />
                            <p>组织者：五条悟</p>
                        </div>
                        <div className="leftBottomBox">
                            <p>会议室ID：56656</p>
                            <p>会议ID：4656</p>
                            <p>会议进行时间：</p>
                            <p>2021年3月21日15：00-</p>
                            <p>2021年3月21日19：00</p>
                        </div>
                    </div>
                    {/* 右边盒子 */}
                    <div className="rightBox">
                        <div className="rightTopBox">
                            <div className="contentBox">
                                <div className="titleBox">会议描述</div>
                                <div className="content">本次会议关于物品价格上涨以及库存调整和客户需求的讨论。</div>
                            </div>
                            <div className="fileBox">
                                <div className="titleBox">会议上传文件 <PlusOutlined /></div>
                                <div className="file">
                                假装是文件
                                </div>
                            </div>
                        </div>
                        <div className="rightBottomBox">
                            <div className="titleBox">会议成员</div>
                            <div className="memberBox">
                                <div className="memberItem">
                                    <img src={Icon} alt="头像" />
                                    <p>五条悟</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
