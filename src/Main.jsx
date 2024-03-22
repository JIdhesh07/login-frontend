import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

function Main() {
  return (
    <div>

<header className='header'>



<nav className='navbar'>
 <h3 style={{marginLeft:'50px'}}>interview</h3>

 <Link to={'/form'}>
 <button  className='is'  style={{marginLeft:'930px'}}>Reset</button>
 </Link>
 

 <Link to={'/'}>
 <button className='id' style={{marginRight:'200px'}}>logout</button>
 </Link>
  




</nav>
</header>

<Link to={'/form'} >
<div className='container'

style={{  height:'100px', width: '300px', padding: '20px', backgroundColor: 'black', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginTop:'200px' }}>
  
<h1 style={{color:'white',marginLeft:'90px'}}>click</h1>
    
</div></Link>


    </div>
  )
}

export default Main