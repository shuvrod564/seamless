import { Col, Row } from 'antd'
import React from 'react'
import { DatePicker } from "antd"; 

const FilterForm = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

    return (
        <>
            <Row
                gutter={[
                    { xs: 10, sm: 16, lg: 16 }, // Horizontal gutter
                    { xs: 10, sm: 16, lg: 16 }  // Vertical gutter
                ]}
            >
                <Col lg={8} md={12} sm={24} xs={24}>
                    <div className="form-group">
                        <label htmlFor="fullName" className='block text-[#6E6E6E] text-sm md:text-[15px] mb-1'>Full name</label>
                        <input
                            type="text"
                            name='fullName'
                            className='w-full h-12 px-4 py-2 rounded-lg bg-white'
                        />
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <div className="form-group">
                        <label htmlFor="emailAddress" className='block text-[#6E6E6E] text-sm md:text-[15px] mb-1'>Email address</label>
                        <input
                            type="text"
                            name='emailAddress'
                            className='w-full h-12 px-4 py-2 rounded-lg bg-white'
                        />
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <div className="form-group">
                        <label htmlFor="payment " className='block text-[#6E6E6E] text-sm md:text-[15px] mb-1'>Payment</label>
                        <input
                            type="text"
                            name='payment '
                            className='w-full h-12 px-4 py-2 rounded-lg bg-white'
                        />
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <div className="form-group">
                        <label htmlFor="date" className='block text-[#6E6E6E] text-sm md:text-[15px] mb-1'>Select Date</label>
                        <DatePicker
                            onChange={onChange}
                            className='!w-full !h-12'
                        />
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <div className="form-group">
                        <label className='hidden lg:block text-[#6E6E6E] text-sm md:text-[15px] mb-1'>&nbsp;</label>
                        <div className="flex gap-3 mt-1 lg:mt-0">
                            <button className="btn-primary w-1/2">Search</button>
                            <button className="btn-primary secondary w-1/2">Clear</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default FilterForm