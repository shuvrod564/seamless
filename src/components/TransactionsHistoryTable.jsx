import { Pagination, Table, Tag } from 'antd';
import React from 'react'


const columns = [
    {
        title: 'S.N.',
        dataIndex: 'sn',
        key: 'sn',
    },
    {
        title: 'Client Id',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span className='text-dark font-semibold'>{text}</span>
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Merchant Trx. Id',
        dataIndex: 'transaction_id',
        key: 'transaction_id',
    },
    {
        title: 'Time',
        dataIndex: 'date',
        key: 'date',
    }, 
    {
        title: 'Status',
        key: 'payment',
        dataIndex: 'payment',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'approved') {
                        color = 'bg-[#CDFFE8] border-[#CDFFE8] text-[#14BA6D]';
                    } else {
                        color = 'bg-[#FEDDE4] border-[#FEDDE4] text-[#E3566E]';
                    }
                    return (
                        <Tag key={tag} className={`min-w-[55px] min-h-[30px] inline-flex items-center justify-center font-semibold capitalize ${color}`}>
                            {tag}
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
        tags: ['approved'],
        sn: '001',
    },
    {
        key: '2',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['reject'],
        sn: '002',
    },
    {
        key: '3',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['reject'],
        sn: '003',
    },
    {
        key: '4',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['approved'],
        sn: '004',
    },
    {
        key: '5',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['reject'],
        sn: '005',
    },
    {
        key: '6',
        name: '7d2c7b06afa0 ...',
        date: 'Apr 27, 2023 | 12:30 PM',
        transaction_id: '#124153465125511',
        amount: '$5,553',
        tags: ['reject'],
        sn: '006',
    },

];

const TransactionsHistoryTable = () => {
    return (
        <>
            <Table columns={columns} dataSource={data} pagination={false}
                scroll={{ x: 800 }}
            />
            <div className="p-3"> 
                <Pagination className='!justify-end gap-0' size='small' defaultCurrent={1} total={50} />
            </div>
        </>
    )
}

export default TransactionsHistoryTable