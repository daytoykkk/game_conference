import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { Layout, Menu, Input } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CheckCircleOutlined,
    ExclamationCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import './index.less';
import Icon from '../../images/arrow.png'

import CompanyList from './companyList'
import Company from './company'

const { Header, Sider, Content } = Layout

export default class index extends Component {

    state = {
        collapsed: false,    //是否收起菜单
        isPass: false       //是否通过审核
    }

    render() {

        return (
            <div className="companyList">
                <Layout className="layoutBox">
                    {/* 侧边导航栏 */}
                    <Sider className="sider" trigger={null} collapsible collapsed={this.state.collapsed}>
                        <Input className="input" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<CheckCircleOutlined />}>
                                <Link to={{path:'/superAdmin/companyList', state:{isPass:true}}}>已通过审核</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ExclamationCircleOutlined />}>
                                <Link to={{path:'/superAdmin/companyList', state:{isPass:false}}}>未审核</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    {/* 左边内容 */}
                    <Layout className="site-layout">
                        <Header className="site-layout-background header" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                tabIndex: '-1',
                                onClick: this.toggle,
                            })}
                            <div className="topBox">
                                <img src={Icon} alt="头像" />
                                <span>超级管理员</span>
                                <LogoutOutlined className="loginOut" />
                            </div>
                        </Header>
                        <Content
                            className="site-layout-background table"
                            style={{
                                margin: '24px 16px',
                                padding: '0 8px',
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route path='/superAdmin/companyList' component={CompanyList}/>
                                <Route path='/superAdmin/company' component={Company} exact/>
                                <Redirect to='/superAdmin/companyList' />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}


