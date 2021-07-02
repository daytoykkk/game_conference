/*
    默认子路由
*/
import React, { Component } from 'react'
import { Table } from 'antd'
import { withRouter } from 'react-router-dom';

import './index.less';
import { columns } from './config'
import { getUnaAuditCompanyReq } from '../../api'


class CompanyList extends Component {

    state = {
        isPass: false,
        current:1,
        total: 22
    }

      // 获取未审核列表
    componentDidMount = async () => {
        let res = await getUnaAuditCompanyReq({"page":1,"size":10})
        let data = res.data;
        data.forEach( i => {
            i.createDate = i.createDate.slice(0,10);
        })
        this.setState({
            tableData : res.data
        })
    }


    UNSAFE_componentWillReceiveProps = (newProps) => {
        const { isPass } = newProps.location.state
        this.setState({
            isPass
        })
    }

    // 去公司详情页
    handleClick = (record) => {
        return () => {
            const { isPass } = this.state
            this.props.history.push({
                pathname: '/superAdmin/company',
                state: {
                    isPass,
                    name: record.companyName,
                    companyId: record.companyId
                }
            })
        }
    }

    //分页
    handleChangePage = (page) => {
        this.setState({
            current:page
        },async () => {
            let res = await getUnaAuditCompanyReq({"page":page,"size":10})
            console.log(res)
        })
    }

    render() {

        return (
            <div className="companyList">
                <p>{this.state.isPass ? "已通过审核" : "未审核"}</p>
                <Table
                    rowKey={columns => columns.companyId} 
                    columns={columns}
                    dataSource={this.state.tableData}
                    scroll={{ y: 400 }}
                    onRow={record => {
                        return {
                            onClick: this.handleClick(record)
                        }
                    }}
                    pagination={{  // 分页
                        current: this.state.current,
                        total: this.state.total,
                        onChange: this.handleChangePage,
                      }}
                />
            </div>
        )
    }
}


export default withRouter(CompanyList)