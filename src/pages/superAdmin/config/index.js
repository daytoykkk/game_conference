import { Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const columns = [
    {
        title: '公司名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '组织代码',
        dataIndex: 'companyId',
        key: 'companyId'
    },
    {
        title: '公司管理员',
        dataIndex: 'owner',
        key: 'owner'
    },
    {
        title: '公司电话',
        dataIndex: 'companyPhone',
        key: 'companyPhone'
    }, 
    {
        title: '申请时间',
        dataIndex: 'createDate',
        key: 'createDate'
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