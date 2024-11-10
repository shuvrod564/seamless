import { Col, Row, Tag } from 'antd'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { HiChevronRight } from 'react-icons/hi'
import { Table } from "antd";
import { Link } from 'react-router-dom';
import PieChart from '../../components/charts/PieChart';
import { Select } from "antd";
import ColumnChart from '../../components/charts/ColumnChart';

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
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#FEDE79] rounded-lg relative">
            <Link to={"#"} className='text-3xl absolute top-4 right-4 text-[#B18A0D] hover:text-dark'>
              <BsChevronRight />
            </Link>
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#B18A0D]'>PAYING</p>
            <p className=' uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-[#B18A0D]'>$5869</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#9BF688] rounded-lg relative">
            <Link to={"#"} className='text-3xl absolute top-4 right-4 text-[#0B7D1C] hover:text-dark'>
              <BsChevronRight />
            </Link>
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#0B7D1C]'>pay outs </p>
            <p className=' uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-[#0B7D1C]'>$5869</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#75DFFF] rounded-lg relative">
            <Link to={"#"} className='text-3xl absolute top-4 right-4 text-[#076A88] hover:text-dark'>
              <BsChevronRight />
            </Link>
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#076A88]'>Wallets</p>
            <p className=' uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-[#076A88]'>$5869</p>
          </div>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className='md:mt-10 mt-6'>
        <Col md={12} sm={24} xs={24} className='flex'>
          <div className="bg-white rounded-lg w-full">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-dark">Sales By Category</h2>
              <div className="w-full max-w-[136px]">
                <Select
                  defaultValue="Oct 2024" 
                  className='!w-full !bg-[#F9F9F9]'
                  size='md'
                  // onChange={handleChange}
                  options={[ 
                    {
                      value: 'Oct 2024',
                      label: 'Oct 2024',
                    },
                    {
                      value: 'Sep 2024',
                      label: 'Sep 2024',
                    },
                    {
                      value: 'Nov 2024',
                      label: 'Nov 2024', 
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
              <h2 className="text-xl font-semibold text-dark">Sales By Category</h2>
              <div className="w-full max-w-[136px]">
                <Select
                  defaultValue="Oct 2024" 
                  className='!w-full !bg-[#F9F9F9]'
                  size='md'
                  // onChange={handleChange}
                  options={[ 
                    {
                      value: 'Oct 2024',
                      label: 'Oct 2024',
                    },
                    {
                      value: 'Sep 2024',
                      label: 'Sep 2024',
                    },
                    {
                      value: 'Nov 2024',
                      label: 'Nov 2024', 
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
      </Row>

      <div className="md:mt-10 mt-6 bg-white rounded-lg">
        <h2 className="text-xl font-bold text-dark px-5 py-3">Transactions</h2>
        <Table columns={columns} dataSource={data} pagination={false}
          scroll={{ x: 600 }}
        /> 
      </div>




    </>
  )
}

export default Dashboard