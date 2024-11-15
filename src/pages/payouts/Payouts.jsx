import React from 'react'
import FilterForm from '../../components/FilterForm'
import TransactionsHistoryTable from './../../components/TransactionsHistoryTable';
import AnalysisChart from '../../components/charts/AnalysisChart';

const Payouts = () => {
  return (
    <main>
        <FilterForm />

        <div className="md:mt-10 mt-6 bg-white rounded-lg overflow-hidden"> 
          <TransactionsHistoryTable />
        </div>

        <div className="md:mt-10 mt-6"> 
          <AnalysisChart />
        </div>

    </main>
  )
}

export default Payouts