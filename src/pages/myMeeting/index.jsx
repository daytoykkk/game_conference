import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './index.less'
import List from './list'
import Conference from './conference'


export default class index extends Component {

    render() {
       
        return (
            <div className="myMeeting">
               <Switch>
                    <Route path='/home/myMeeting/list' component={List}/>
                    <Route path='/home/myMeeting/conference' component={Conference}/>
                    <Redirect to='/home/myMeeting/list' />
                </Switch>
            </div>
        )
    }
}
