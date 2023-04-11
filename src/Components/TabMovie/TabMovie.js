import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { movieServ } from '../../service/movieService';
import ItemTabMovie from './ItemTabMovie';

export default function TabMovie() {
    let [listRap,setListRap]=useState([]);
    const onChange = (key) => {
        console.log(key);
      };
      let renderListRap=() => {
        return listRap.map((rap,index)=>{
            return {
                key:rap.maHeThongRap,
                label:<img src={rap.logo} className='w-16'></img>,
                children: <Tabs defaultActiveKey="1" style={{height:700}} items={rap.lstCumRap.map((cumRap)=>{
                    return {
                        key:cumRap.tenCumRap,
                        label:<div className='w-[500px] truncate flex flex-col items-start border-b-[1.5px]'>
                            <p style={{    color: '#E5383B',fontSize: '16px',fontWeight: 500}}>{cumRap.tenCumRap}</p>
                            <p style={{color: '#757575',fontWeight: 400}}>{cumRap.diaChi}</p>
                            <p className='text-[#e87777] flex items-center'><span>Chi tiết</span> <ion-icon name="arrow-forward-outline" size='small'></ion-icon></p>
                        </div>,
                        children: <div style={{height:700, overflowY: "scroll"}}>
                            {cumRap.danhSachPhim.map((phim,index)=>{
                                return <ItemTabMovie phim={phim} key={index}/>
                            })}
                        </div>
                    }
                })
                } onChange={onChange} tabPosition='left'/>,
            }
        })
      }
      useEffect(() => {
        movieServ
        .getMovieTheater()
        .then((res) => {
            // console.log(res.data.content);
            setListRap(res.data.content);
        })
        .catch((err) => {console.log(err);})
      }, [])
      
  return (
    <div className='px-48 mt-10' id='tabMovie'>
        <Tabs defaultActiveKey="1" items={renderListRap()} onChange={onChange} tabPosition='left' style={{height:700}}/>
    </div>
  )
}

