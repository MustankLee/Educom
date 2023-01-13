import React from 'react'
import { CreatorData } from "./CreatorData.js"
import "./Creator.css"

export default function Creator() {
  return (
    <div className='ml-3 pr-6 h-screen overflow-y-scroll'>
      <div className='h-12 my-4'></div>
      <div className='text-center p-2 rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 text-3xl font-bold my-3'>Daftar Anggota Kelompok</div>
      
      {/* container */}
      <div className='resp-crd'>
        {
          CreatorData.map((items, index) => {
            return (
              <div key={index} className='w-fit flex p-2 border-2 border-slate-400 rounded-md'>
              <div className='w-32 h-32 rounded-md' style={{backgroundImage:`url(${items.img})`, backgroundSize:"cover", backgroundPosition: "center top"}}></div>
              <div className='ml-3 flex flex-col justify-around'>
                <div className='font-bold text-xl'>{items.name}</div>
                <div className=''>
                  <div className='flex items-center my-1'>
                    <div className='w-20 text-center bg-slate-300 p-0.5 rounded-sm'>NIM</div>
                    <div className='ml-3'>{items.nim}</div>
                  </div>
                  <div className='flex my-1'>
                    <div className='w-20 text-center bg-slate-300  p-0.5 rounded-sm'>Kelas</div>
                    <div className='ml-3'>{items.class}</div>
                  </div>
                  <div className='flex'>
                    <div className='w-20 text-center bg-slate-300  p-0.5 rounded-sm'>Jurusan</div>
                    <div className='ml-3'>{items.major}</div>
                  </div>
                </div>
              </div>
            </div>
            );
          })
        }
      </div>
    </div>
  )
}
