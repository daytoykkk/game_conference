import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

import './index.less'
import { userMenu, vipMenu } from './config'
import Icon from '../../images/icon.png'


const { Header } = Layout;

export default class index extends Component {

    componentWillMount = () => {
        let id = sessionStorage.getItem("identity");
        let username = sessionStorage.getItem("username");
        console.log(id)
        this.setState({
            identity:id,
            username
        })
    }

    state = {
        identity: 2
    }

    loginout = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <Header className="header">
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['/home/selfInfo']}>
                    {(this.state.identity === "1" ) ? userMenu.map((item) => {
                        return <Menu.Item key={item.path}><Link to={item.path}>{item.title}</Link></Menu.Item>
                    }) : vipMenu.map((item) => {
                        return <Menu.Item key={item.path}><Link to={item.path}>{item.title}</Link></Menu.Item>
                    })}
                </Menu>
                <div className="rightBox">
                    <img src={Icon} alt="头像" />
                    <span>{this.state.username}</span>
                    <LogoutOutlined onClick={this.loginout} style={{"fontSize":"18px"}} />
                </div>
            </Header>
        )
    }
}
