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
        title: '会议室ID',
        dataIndex: 'roomId',
        key: 'roomId',
        align: 'center',
        width: 100
    },
    {
        title: '会议名称',
        dataIndex: 'meetingName',
        key: 'meetingName',
        align: 'center',
        ellipsis: true
    },
    {
        title: '会议开始时间',
        dataIndex: 'startTime',
        key: 'startTime',
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


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

export { columns, formItemLayout, formItemLayoutWithOutLabel }