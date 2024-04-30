import React from 'react'
import Navbar from '../components/Navbar'
import Slidebar from '../components/Slidebar'

const Layout = ({children}) => {
  return (
  <React.Fragment> 
    <Navbar/>
    <br />
    <br />
    <br />
    <div className="columns mt-6" style={{minHeight:"150vh"}}>
        <div className="column is-3">
            <Slidebar/>
        </div>
    <div className="column has-background-light">
       <main>{children}</main> 

    </div>
 </div>
  </React.Fragment>
  )
}

export default Layout
