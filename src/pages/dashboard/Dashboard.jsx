import { Col, Row } from 'antd'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { HiChevronRight } from 'react-icons/hi'

const Dashboard = () => {
  return (
    <>
      <Row gutter={[20,20]}>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#FEDE79] rounded-lg relative">
            <BsChevronRight className='text-3xl absolute top-4 right-4 text-[#B18A0D]' />
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#B18A0D]'>PAYING</p>
            <p className=' uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-[#B18A0D]'>$5869</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#9BF688] rounded-lg relative">
            <BsChevronRight className='text-3xl absolute top-4 right-4 text-[#0B7D1C]' />
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#0B7D1C]'>pay outs </p>
            <p className=' uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-[#0B7D1C]'>$5869</p>
          </div>
        </Col>
        <Col md={8} sm={12} xs={24}>
          <div className="p-4 md:p-5 lg:p-8 2xl:p-10 bg-[#75DFFF] rounded-lg relative">
            <BsChevronRight className='text-3xl absolute top-4 right-4 text-[#076A88]' />
            <p className=' uppercase text-base md:text-lg lg:text-xl font-medium text-[#076A88]'>Wallets</p>
            <p className=' uppercase text-2xl md:text-4xl lg:text-6xl font-bold text-[#076A88]'>$5869</p>
          </div>
        </Col>
      </Row>

      <div className="mt-10 bg-white">
        <h2 className="text-xl font-bold text-dark px-5 py-3">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>name</th>
                <th>date</th>
                <th>email address</th>
                <th>amount</th>
                <th>payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>2022-01-15</td>
                <td>johndoe@example.com</td>
                <td>$5869</td>
                <td><HiChevronRight className='text-2xl text-gray-600' /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>2022-01-14</td>
                <td>janedoe@example.com</td>
                <td>$5869</td>
                <td><HiChevronRight className='text-2xl text-gray-600' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </>
  )
}

export default Dashboard