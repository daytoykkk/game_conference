import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Room from './room'
import List from './list'

import './index.less'


export default class index extends Component {

  
    render() {

        return (
            <div className="manageRoom">
                <Switch>
                    <Route path='/home/manageRoom/list' component={List}/>
                    <Route path='/home/manageRoom/room' component={Room}/>
                    <Redirect to='/home/manageRoom/list' />
                </Switch>
            </div>
        )
    }
}
