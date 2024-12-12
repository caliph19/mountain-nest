import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const NavWrap = ({children}) => {
    const location = useLocation()
    const [showNav, setShowNav] = useState(false)
    useEffect (()=>{
        if(location.pathname == "/signin" || location.pathname == "/signup" || location.pathname == "/forgotpassword"){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    },[location])
  return (
    <div>
        {showNav && children}      
    </div>
  )
}

export default NavWrap
