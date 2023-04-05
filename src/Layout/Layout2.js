import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function Layout2({Component}) {
  return (
    <div className="space-y-10 h-full min-h-screen flex flex-col">
        <Header></Header>
        <div className='flex-grow'>
            <Component/>
        </div>
    </div>
  )
}
