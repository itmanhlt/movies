import moment from 'moment/moment'
import React from 'react'

export default function ItemTabMovie({phim}) {
  return (
    <div className='flex mx-5 my-5 space-x-5  pb-2'>
        {/* poster phim */}
        <div    >
            <img src={phim.hinhAnh} className='w-[180px] h-auto rounded shadow '/>
        </div>
        {/* suất chiếu */}
        <div>
            {/* title */}
            <div className='flex mb-2 space-x-2'>
                <span className="item-c18 px-2 ">C18</span>
                <span className="item-title">{phim.tenPhim}</span>
            </div>
            {/* suất chiếu */}
            <div  className='grid grid-cols-2 gap-2'>
                {phim.lstLichChieuTheoPhim.slice(0,6).map((lichChieu,index)=>{
                    return <div className='border rounded p-2 bg-[#b9b9b947] cursor-pointer' key={index}>
                    <span className='mr-1 text-[#E5383B] font-medium'>
                        {moment(lichChieu.ngayChieuGioChieu
                                ).format('DD-MM-YYYY')} ~ 
                    </span>
                    <span className='font-medium '>
                    {moment(lichChieu.ngayChieuGioChieu
                                ).format('h:mm')}
                    </span>
                    </div>;
                })}
            </div>
        </div>
    </div>
  )
}
