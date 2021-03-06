import React, { Component } from 'react'
import { Layout } from 'antd'
import {
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import './index.less'
import Header from '../../components/header'
import AllRooms from '../allRooms'
import ManageRoom from '../manageRoom'
import MyMeeting from '../myMeeting'
import SelfInfo from '../selfInfo'
import AllMember from '../allMember'
import UnauditedMember from '../unauditedMember'


export default class index extends Component {
    render() {
        return (
            <Layout className="home">
                <Header history={this.props.history}></Header>
                <div className="contentBox">
                    <Switch>
                        <Route path='/home/allRooms' component={AllRooms} />
                        <Route path='/home/myMeeting' component={MyMeeting} />
                        <Route path='/home/selfInfo' component={SelfInfo} />
                        <Route path='/home/manageRoom' component={ManageRoom} />
                        <Route path='/home/allMember' component={AllMember} />
                        <Route path='/home/unauditedMember' component={UnauditedMember} />
                        <Redirect from='/home' to='/home/selfInfo' />
                    </Switch>
                </div>
            </Layout>
        )
    }
}
