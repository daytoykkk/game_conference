import { Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const columns = [
    {
        title: '公司名',
        dataIndex: 'companyName',
        key: 'companyName'
    },
    {
        title: '组织代码',
        dataIndex: 'companyCode',
        key: 'companyCode'
    },
    {
        title: '公司管理员',
        dataIndex: 'admin',
        key: 'admin'
    },
    {
        title: '管理员联系方式',
        dataIndex: 'tel',
        key: 'tel'
    }, 
    {
        title: '审核通过时间',
        dataIndex: 'time',
        key: 'time'
    }, 
    {
        title: '详情',
        key: 'action',
        render: (text, record ) => ( 
            <Space >
                <ArrowRightOutlined style={{color: '#939393'}} />
            </Space>
        )
    }
]


export { columns }