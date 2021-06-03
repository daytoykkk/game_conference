import React, { Component } from 'react'
import { Tabs } from 'antd'

import './index.less'
import { tabStyle } from './modules'
import SignIn from './components/signIn'
import SignUp from './components/signUp'

const { TabPane } = Tabs;


export default class index extends Component {

    callback = (key) => {
        this.setState({
            isLogin: key===1 ? true:false
        })
    }

    render() {
        return (
            <div className="userLogin">
                <Tabs {...tabStyle} defaultActiveKey="2" onChange={this.callback}>
                    <TabPane tab="登陆" key="1">
                        <SignIn />
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <SignUp />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
