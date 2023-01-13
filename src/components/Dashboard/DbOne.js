import React from 'react'

export default function DbOne() {
  return (
    <div className='pr-6 h-screen overflow-y-scroll'>
      <div className='h-12 my-4'></div>
      <div className='ml-3 w-fit p-2 rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 text-3xl font-bold my-3'>Dashboard Produk</div>
      <iframe src="https://public.tableau.com/views/DashboardProduct_16735090516100/DashboardProduct?:language=en-US&:display_count=n&:origin=viz_share_link?:showVizHome=no:embed=true" width="100%" height="800px" frameborder="0"></iframe>
    </div>
  )
}
