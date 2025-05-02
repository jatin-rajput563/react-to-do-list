import React from 'react'
import NotePencil from '../assets/images/svg/NotePencil.svg'

const List = () => {
    return (
        <>
            <div className="min-h-screen bg-[#2C2C2C] justify-center flex items-center">
                <div className="max-w-[1440px] mx-auto">
                    <div className='flex items-center gap-[46px] justify-center'>
                        <div className="w-[50px] h-1 bg-white"></div>
                        <h1 className='font-normal text-[64px] leading-[100%] text-white family'>TO DO NOW</h1>
                        <div className="w-[50px] h-1 bg-white"></div>
                    </div>
                    <div className='flex gap-[32px] items-center justify-center mt-[14px]'>
                        <div className="w-[240px] h-1 bg-white"></div>
                        <img src={NotePencil} alt="" />
                        <div className="w-[240px] h-1 bg-white"></div>
                    </div>
                    <div className="justify-center flex bg-white max-w-[837px] py-2 px-3 rounded-[30px] mt-[80px]">
                        <input type="text" className='font-normal text-[16px] leading-[100%] family w-full border-0 outline-0 pl-2' placeholder='Add your task here...' />
                        <button className='py-[9px] px-[38px] bg-[#2C2C2C] text-white rounded-[30px] whitespace-nowrap family text-[16px] font-normal leading-[100%] hover:bg-white hover:text-[#2C2C2C] border-[#2C2C2C] border cursor-pointer transition-all duration-200 '>Add task</button>
                    </div>
                    <div className="w-full bg-white h-1 mt-[34px]"></div>
                </div>
            </div>
        </>
    )
}

export default List
