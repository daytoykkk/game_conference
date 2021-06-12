/*
    默认子路由
*/
import React, { Component } from 'react'
import { Table } from 'antd'
import { withRouter } from 'react-router-dom';

import './index.less';
import { columns } from './config'


// todo 测试数据
const MockData = [];
for (let i = 0; i < 22; i++) {
    MockData.push({
        key: i,
        companyName: '这是一家公司',
        companyCode: '123456',
        admin: '五条悟',
        tel: '11111111111',
        time: '2021-06-04'
    })
}


class CompanyList extends Component {

    state = {
        isPass: true
    }

    componentWillReceiveProps = (newProps) => {
        const { isPass } = newProps.location.state
        this.setState({
            isPass
        })
    }

    handleClick = (record) => {
        return () => {
            const { isPass } = this.state
            this.props.history.push({
                pathname: '/superAdmin/company',
                state: {
                    isPass,
                    name: record.companyName
                }
            })
        }
    }

    render() {

        return (
            <div className="companyList">
                <p>{this.state.isPass ? "已通过审核" : "未审核"}</p>
                <Table
                    columns={columns}
                    dataSource={MockData}
                    scroll={{ y: 400 }}
                    onRow={record => {
                        return {
                            onClick: this.handleClick(record)
                        }
                    }}
                />
            </div>
        )
    }
}


export default withRouter(CompanyList)