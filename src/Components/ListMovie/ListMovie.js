import React, { useEffect, useState } from 'react'
import { movieServ } from '../../service/movieService';
import ItemMovie from './ItemMovie/ItemMovie';

export default function ListMovie() {
  let [movieArr,setMovieArr]=useState([]);
  let renderMovie=()=>{
    return movieArr.map((movie,index)=>{
      return <ItemMovie movie={movie} key={index}/>
    })
  }
  useEffect(() => {
    movieServ
    .getMovieList()
    .then((res) =>{
      setMovieArr(res.data.content);
    })
    .catch((err) => console.log(err))
  }, [])
  
  return (
    <div className='grid grid-cols-1 gap-4'>
      {renderMovie()}
    </div>
  )
}
