import React from 'react'
import Table from '../components/table'

const Orders = () => {
  return (
  
  <div className="h-full flex flex-col overflow-y-scroll max-h-[100%] p-4   no-scrollbar">
  <p className="text-3xl">Orders</p>

  <div className="bg-white mt-10">
    <Table type={"orders"}/>
  </div>
</div>
  )
}

export default Orders