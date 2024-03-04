import React, { useLayoutEffect } from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './sidebar'
import Header from './header'
import DashboardContent from '../components/dashboardContent'
const Dashboard = () => {
  return (
    <section className='flex overflow-hidden'>
      <Sidebar/>
      <div className="flex flex-col w-full max-h-full">
      <Header/>
      <div className="bg-[#e5fcf5] h-full max-h-[90%] p-5 pb-0">
      <DashboardContent>
        <Outlet/>
      </DashboardContent>
      </div>
      </div>
    </section>
  )
}

export default Dashboard