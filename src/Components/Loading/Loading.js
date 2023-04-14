import React from 'react'
import { RiseLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-30' id='loading'>
        <RiseLoader color="#ffff" size={36} speedMultiplier={0.5}/>
    </div>
  )
}
