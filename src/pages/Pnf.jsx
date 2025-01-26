import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className=' my-2 d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{fontSize:'50px'}}>404</h1>
     <img src="https://cdni.iconscout.com/illustration/premium/thumb/connection-error-illustration-download-in-svg-png-gif-file-formats--network-not-found-404-pack-communication-illustrations-6166996.png" alt="" className='img-fluid'/>
     <h1>look like you are lost</h1>
     <p>the page your looking for is not available</p>
     <Link to={'/'} className='btn btn-warning'>Go to Home</Link>
    </div>
  )
}

export default Pnf