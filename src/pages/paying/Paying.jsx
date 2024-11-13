
import React from 'react' 
import FilterForm from '../../components/FilterForm';
import TransactionsHistoryTable from '../../components/TransactionsHistoryTable';


 
 
const Paying = () => {
  
  return (
    <>
      <FilterForm />
      

      <div className="md:mt-10 mt-6 bg-white rounded-lg overflow-hidden"> 
        <TransactionsHistoryTable />
      </div>

    </>
  )
}

export default Paying