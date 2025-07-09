import React from 'react'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

function mainLayout({children} : any) {
  return (
  <div className=''>
     <NavBar />
      <div>
        {children}
      </div>
      <Footer />
  </div>
  )
}

export default mainLayout