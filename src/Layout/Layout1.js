import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function Layout1({Component}) {
  return (
    <div className="h-full min-h-screen flex flex-col">
        <Header></Header>
        <div className='flex-grow mt-[80px]'>
            <Component/>
        </div>
        <Footer></Footer>
    </div>
  )
}
