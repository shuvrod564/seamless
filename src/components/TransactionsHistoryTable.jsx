import { Table, Tag } from 'antd';
import React from 'react'


const columns = [
    {
        title: 'S.N.',
        dataIndex: 'sn',
        key: 'sn',
    },
    {
        title: 'Transaction Hash',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span className='text-dark font-semibold'>{text}</span>
    },
    {
        title: 'Date & Time',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Sent',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Transaction id',
        dataIndex: 'transaction_id',
        key: 'transaction_id',
    },
    {
        title: 'Status',
        key: 'payment',
        dataIndex: 'payment',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'completed') {
                        color = 'bg-[#CDFFE8] border-[#CDFFE8] text-[#14BA6D]';
                    } else if (tag === 'in-progress') {
                        color = 'bg-[#FFF5D4] border-[#FFF5D4] text-[#FFC700]';
                    } else {
                        color = 'bg-[#FEDDE4] border-[#FEDDE4] text-[#E3566E]';
                    }
                    return (
                        <Tag key={tag} className={`min-w-[55px] min-h-[30px] inline-flex items-center justify-center font-semibold ${color}`}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];
const data = [
    {
        key: '1',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['completed'],
        sn: '001',
    },
    {
        key: '2',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['in-progress'],
        sn: '002',
    },
    {
        key: '3',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['failed'],
        sn: '003',
    },
    {
        key: '4',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['completed'],
        sn: '004',
    },
    {
        key: '5',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['in-progress'],
        sn: '005',
    },
    {
        key: '6',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['failed'],
        sn: '006',
    },

];

const TransactionsHistoryTable = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false}
                scroll={{ x: 800 }}
            />
        </div>
    )
}

export default TransactionsHistoryTable