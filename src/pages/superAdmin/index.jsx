import React, { Component } from 'react'
import { Layout, Menu, Input, Table } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CheckCircleOutlined,
    ExclamationCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import './index.less';
import Icon from '../../images/arrow.png'
import { columns } from './modules'

const { Header, Sider, Content } = Layout

// todo 测试数据
const MockData = [];
for(let i=0;i<22;i++) {
    MockData.push({
        key: i,
        companyName: '这是一家公司',
        companyCode: '123456',
        admin: '五条悟',
        tel: '11111111111',
        time: '2021-06-04'
    })
}


export default class index extends Component {

    state = {
        collapsed: false,
        isPass: true,       //是否通过审核
    }


    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      // todo scrollY没设置成功

    render() {
        
        return (
            <div className="superAdmin">
                <Layout className="layoutBox">
                    {/* 侧边导航栏 */}
                    <Sider className="sider" trigger={null} collapsible collapsed={this.state.collapsed}>
                        <Input className="input" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<CheckCircleOutlined />}>
                                已通过审核
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ExclamationCircleOutlined />}>
                                未审核
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
                                <LogoutOutlined className="loginOut"/>
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
                            <p>{this.state.isPass ? "已通过审核":"未通过"}</p>
                            <div className="tableBox">
                                <Table columns={columns} dataSource = {MockData} scroll={{ y: 400 }} />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
