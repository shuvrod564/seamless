import React from 'react'
import FilterForm from '../../components/FilterForm'
import { Tabs } from 'antd';
import WalletInfo from '../../components/WalletInfo';
import TransactionsHistoryTable from '../../components/TransactionsHistoryTable';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Wallet 1',
        children: <WalletInfo />,
    },
    {
        key: '2',
        label: 'Wallet 2',
        children: <WalletInfo />,
    },
    {
        key: '3',
        label: 'Wallet 3',
        children: <WalletInfo />,
    },
    {
        key: '4',
        label: 'Wallet 4',
        children: <WalletInfo />,
    },
    {
        key: '5',
        label: 'Wallet 5',
        children: <WalletInfo />,
    },
    {
        key: '6',
        label: 'Wallet 6',
        children: <WalletInfo />,
    },
    {
        key: '7',
        label: 'Wallet 7',
        children: <WalletInfo />,
    },
    {
        key: '8',
        label: 'Wallet 8',
        children: <WalletInfo />,
    },
    {
        key: '9',
        label: 'Wallet 9',
        children: <WalletInfo />,
    },
];

const Wallet = () => {
    return (
        <>
            <FilterForm />

            <div className="md:mt-10 mt-6">
                <div className="relative">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='relative z-10' />
                    <div className="w-full h-0.5 bg-[#D9D9D9] absolute top-[44px] left-0 z-0"></div>
                </div>

                <div className="md:mt-10 mt-6 bg-white rounded-lg">
                    <h2 className="text-xl font-bold text-dark px-5 py-3">Transactions History</h2>
                    <TransactionsHistoryTable />
                </div>
            </div>
        </>
    )
}

export default Wallet