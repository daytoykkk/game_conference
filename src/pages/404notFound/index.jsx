import React, { Component } from 'react'

import './index.less'
import Icon from '../../images/notFound.png'

export default class index extends Component {
    render() {
        return (
            <div className="notFound">
                <img src={Icon} alt="<404> 找不到页面啦" />
            </div>
        )
    }
}
