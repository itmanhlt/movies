import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { movieServ } from '../../service/movieService';
import Loading from '../../Components/Loading/Loading';

export default function DetailPage() {
  let param =useParams()
  console.log(param);
  useEffect(()=>{
    movieServ
    .getDetailMovie(param.id)
    .then((res)=>{
      console.log(res.data.content);
    })
    .catch((err)=>{
    });
  },[])
  return (
    <div>
      <Loading/>
      DetailPage
      </div>
  )
}
