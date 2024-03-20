import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{}}>

      <h1  style={{marginLeft:'600px',marginTop:'200px'}}>welcome</h1>

      <Link to={'/login'}>

      <button className='btn btn-primary' style={{marginLeft:'630px'}}>start</button>
      
      </Link>

      <br />
      <br />
    </div>
  )
}

export default Home