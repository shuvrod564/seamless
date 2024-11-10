
import React from 'react' 
import FilterForm from '../../components/FilterForm';
import TransactionsHistoryTable from '../../components/TransactionsHistoryTable';


 
 
const Paying = () => {
  
  return (
    <>
      <FilterForm />
      

      <div className="md:mt-10 mt-6 bg-white rounded-lg">
        <h2 className="text-xl font-bold text-dark px-5 py-3">Transactions History</h2>
        <TransactionsHistoryTable />
      </div>

    </>
  )
}

export default Paying