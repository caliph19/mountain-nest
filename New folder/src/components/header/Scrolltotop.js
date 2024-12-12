import React from 'react'
import { useEffect, useState } from 'react'

function Scrolltotop() {

    const [ scrolltotop,setscrolltotop] = useState(false)
    useEffect(()=>{
window.addEventListener('scroll',() =>{
    if(window.scrollY > 380){
        setscrolltotop(true)
    }else{
        setscrolltotop(false)

    }
})
    },[])

    const scrollup = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <>
      {scrolltotop &&(
        <button
        style={{
            position:'fixed',
            bottom: '50px',
            right:'50px',
            height:'50px',
            width:'50px',
            fontSize:'25px',
            zIndex:11,
            cursor:'pointer',
            borderRadius: '30px',
            background:'#ED6009',
            border:'none',
            color:'#0492BB',
        }}
        onClick={scrollup}
        >^</button>
        
      )}
    </>
  )
}

export default Scrolltotop
