import React, { Component } from 'react'
import { Tabs } from 'antd'

import './index.less'
import { tabStyle } from './modules'
import SignIn from './components/signIn'
import SignUp from './components/signUp'

const { TabPane } = Tabs;


export default class index extends Component {

    state = {
        isLogin: "1"
    }

    callback = (key) => {
        this.setState({
            isLogin: key
        })
    }

    switchTab = (value) => {
        this.setState({
            isLogin: "1"
        })
    }

    render() {
        return (
            <div className="userLogin">
                <Tabs {...tabStyle} activeKey={this.state.isLogin} onChange={this.callback}>
                    <TabPane tab="登陆" key="1">
                        <SignIn history={this.props.history} />
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <SignUp toLoginValue={this.switchTab.bind(this)}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
