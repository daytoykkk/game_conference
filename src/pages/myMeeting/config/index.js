import { ArrowRightOutlined } from '@ant-design/icons';
import { Space } from 'antd'

const columns = [
    {
        title: '会议ID',
        dataIndex: 'meetingId',
        key: 'meetingId',
        align: 'center',
        width: 120
    },
    {
        title: '组织者',
        dataIndex: 'host',
        key: 'host',
        align: 'center',
        width: 120
    },
    {
        title: '会议室',
        dataIndex: 'room',
        key: 'room',
        align: 'center',
        width: 100
    },
    {
        title: '会议名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true
    },
    {
        title: '会议进行时间',
        dataIndex: 'time',
        key: 'time',
        align: 'center',
        width: 350
    },
    {
        title: '详情',
        key: 'action',
        align: 'center',
        width: 100,
        render: (text, record) => (
            <Space >
                <ArrowRightOutlined style={{ color: '#939393' }} />
            </Space>
        )
    },
];

export { columns }