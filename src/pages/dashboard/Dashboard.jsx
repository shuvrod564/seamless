import { Col, Row, Tag } from 'antd'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { HiChevronRight } from 'react-icons/hi'
import { Table } from "antd";
import { Link } from 'react-router-dom';
import PieChart from '../../components/charts/PieChart';
import { Select } from "antd";
import ColumnChart from '../../components/charts/ColumnChart';
import LineChart from '../../components/charts/LineChart';

const columns = [
  {
    title: 'S.N.',
    dataIndex: 'sn',
    key: 'sn',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'email address',
    dataIndex: 'email_address',
    key: 'email_address',
  },
  {
    title: 'amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'payment',
    key: 'payment',
    dataIndex: 'payment',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'paid') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag} className='min-w-[55px] min-h-[30px] inline-flex items-center justify-center'>
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
    name: 'Annette Black',
    date: 'Apr 27, 2023',
    email_address: 'annette Black@gmail.com',
    amount: '$3,987.00',
    tags: ['paid'],
    sn: '001',
  },
  {
    key: '2',
    name: 'Annette Black',
    date: 'Apr 27, 2023',
    email_address: 'annette Black@gmail.com',
    amount: '$3,987.00',
    tags: ['paid'],
    sn: '002',
  },
  {
    key: '3',
    name: 'Annette Black',
    date: 'Apr 27, 2023',
    email_address: 'annette Black@gmail.com',
    amount: '$3,987.00',
    tags: ['unpaid'],
    sn: '003',
  },

];

const Dashboard = () => {
  return (
    <>
      <Row 
        gutter={[
          { xs: 10, sm: 16, lg: 24, xxl: 32 }, // Horizontal gutter
          { xs: 10, sm: 16, lg: 24, xxl: 32 }  // Vertical gutter
        ]}
      >
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#3A7AFE] rounded-lg relative"> 
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#FFFFFF] mb-3'>Total Paying</p>
            <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] mb-2'>₹7,00,000</p>
            <p className=' capitalize text-base lg:text-[17px] font-medium text-[#FFFFFF]'>18,995 User Payout</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#00AFEF] rounded-lg relative"> 
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#FFFFFF] mb-3'>Total payouts</p>
            <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] mb-2'>₹10 Lac</p>
            <p className=' capitalize text-base lg:text-[17px] font-medium text-[#FFFFFF]'>25,550 User Payout</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#FE6982] rounded-lg relative"> 
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#FFFFFF] mb-3'>Loss Paying - payout</p>
            <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] mb-2'>₹3 Lac</p>
            <p className=' capitalize text-base lg:text-[17px] font-medium text-[#FFFFFF]'>15,585 User Paying</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#17E99C] rounded-lg relative"> 
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#FFFFFF] mb-3'>Paying user list</p>
            <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] mb-2'>15,550</p> 
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#FFDD30] rounded-lg relative"> 
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#FFFFFF] mb-3'>Payout user list</p>
            <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] mb-2'>12,250</p> 
          </div>
        </Col>
         
      </Row>

      <Row gutter={[20, 20]} className='md:mt-10 mt-6'>
        <Col md={12} sm={24} xs={24} className='flex'>
          <div className="bg-white rounded-lg w-full">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-dark">Total Comparison</h2>
              <div className="w-full max-w-[136px]">
                <Select
                  defaultValue="week" 
                  className='!w-full !bg-[#F9F9F9]'
                  size='md'
                  // onChange={handleChange}
                  options={[ 
                    {
                      value: 'week',
                      label: 'Week',
                    },
                    {
                      value: 'month',
                      label: 'Month',
                    },
                    {
                      value: 'year',
                      label: 'Year', 
                    },
                  ]}
                />
              </div>
            </div>
            <div className="p-4 flex justify-center">
              <ColumnChart />
            </div>
          </div>
        </Col>
        <Col md={12} sm={24} xs={24} className='flex'>
          <div className="bg-white rounded-lg w-full">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-dark">Total Transactions</h2>
              <div className="w-full max-w-[136px]">
                <Select
                  defaultValue="week" 
                  className='!w-full !bg-[#F9F9F9]'
                  size='md'
                  // onChange={handleChange}
                  options={[ 
                    {
                      value: 'week',
                      label: 'Week',
                    },
                    {
                      value: 'month',
                      label: 'Month',
                    },
                    {
                      value: 'year',
                      label: 'Year', 
                    },
                  ]}
                />
              </div>
            </div>
            <div className="p-4 flex justify-center">
              <PieChart />
            </div>
          </div>
        </Col>
        <Col span={24} className='flex'>
          <div className="bg-white rounded-lg w-full">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-dark">Active Users</h2>
              <div className="w-full max-w-[136px]">
                <Select
                  defaultValue="week" 
                  className='!w-full !bg-[#F9F9F9]'
                  size='md'
                  // onChange={handleChange}
                  options={[ 
                    {
                      value: 'week',
                      label: 'Week',
                    },
                    {
                      value: 'month',
                      label: 'Month',
                    },
                    {
                      value: 'year',
                      label: 'Year', 
                    },
                  ]}
                />
              </div>
            </div>
            <div className="p-4 flex justify-center">
              <LineChart />
            </div>
          </div>
        </Col>
      </Row>

       



    </>
  )
}

export default Dashboard