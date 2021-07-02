import { ArrowRightOutlined } from '@ant-design/icons';
import { Space } from 'antd'

const columns = [
    {
        title: '会议室名',
        dataIndex: 'roomAddress',
        key: 'roomAddress',
        align: 'center',
        width: '120px'
    },
    {
        title: '会议室描述',
        dataIndex: 'description',
        key: 'description',
        align: 'center',
        width: '120px'
    },
    {
        title: '详情',
        key: 'action',
        align: 'center',
        width: '100px',
        render: (text, record) => (
            <Space >
                <ArrowRightOutlined style={{ color: '#939393' }} />
            </Space>
        )
    },
]

const roomColumns = [
    {
        title: '预约人',
        dataIndex: 'hostName',
        key: 'hostName',
        align: 'center',
        width: '120px'
    },
    {
        title: '会议名称',
        dataIndex: 'conferenceName',
        key: 'conferenceName',
        align: 'center',
        width: '200px',
        ellipsis: true
    },
    {
        title: '会议进行时间',
        dataIndex: 'time',
        key: 'time',
        align: 'center'
    },
] 

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  };
  

export { columns, roomColumns, rangeConfig }