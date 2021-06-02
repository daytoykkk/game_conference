import React, { Component } from 'react'
import { Tabs } from 'antd'

import './index.less'
import { tabStyle } from './modules'

const { TabPane } = Tabs;


export default class index extends Component {



    render() {

        const callback = (key) => {
            console.log(key)
        }

        return (
            <div className="userLogin">
                <Tabs {...tabStyle} defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="登陆" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
