import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (

    <div style={{height:'300px'}} className="mt-5 container w-100">
    <div className="d-flex justify-content-around">
      {/* intro */}
      <div style={{width:'400px'}}>
        <h5><i className="fa-brands fa-docker me-2"></i>Project Fair</h5>
        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.
        </p>
      </div>
      {/* links */}
      <div className="d-flex flex-column">
        <h5>links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>home</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>login</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>register</Link>

      </div>
      {/* guides */}
      <div className="d-flex flex-column">
        <h5>guides</h5>
        <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>react</a>
        <a style={{textDecoration:'none',color:'white'}} href="https://reactrouter.com/en/main"  target='_blank'>react router</a>
        <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.netlify.app/"  target='_blank'>react bootstrap </a>
      </div>
      {/* contact */}
      <div className="d-flex flex-column">
        <h5>Contact</h5>
        <div className="d-flex">
          <input placeholder='enter your email' type="text" className="form-control me-2" />
          <button className="btn btn-info"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="d-flex justify-content-between">
          <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
          <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
          <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></a>
          <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-phone"></i></a>

        </div>
      </div>
    </div>
    <p className="text-cdnter mt-3">copyright and copy;lune 2024 batch.media player app ,build with react</p>
</div>

  )
}

export default Footer