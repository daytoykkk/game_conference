import { ArrowRightOutlined } from '@ant-design/icons';
import { Space } from 'antd'

const columns = [
    {
        title: '会议室名',
        dataIndex: 'roomName',
        key: 'roomName',
        align: 'center',
        width: '120px'
    },
    {
        title: '最近一次预约',
        align: 'center',
        children: [
            {
                title: '组织者',
                dataIndex: 'host',
                key: 'host',
                align: 'center',
                width: '160px'
            },
            {
                title: '会议名称',
                dataIndex: 'meetingName',
                key: 'meetingName',
                align: 'center',
                width: '220px',
                ellipsis: true
            },
            {
                title: '会议进行时间',
                dataIndex: 'time',
                key: 'time',
                width: '350px',
                align: 'center'
            },
        ]
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

export { columns, roomColumns }