import React, { useContext, useState } from 'react'
import loginimg from '../assets/loginimg.webp'
import { Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allApi'
import { tokenContext } from '../contexts/TokenAuth'



const Auth = ({ insideRegister }) => {

  // page for authorised user
  const{authorisedUser,setAuthorisedUser}=useContext(tokenContext)

  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    username: "", email: "", password: ""
  })
  console.log(userInput);

  // .................register.................................................................................................

  const register = async (e) => {
    e.preventDefault()
    if (userInput.username && userInput.password && userInput.email) {
      // api call

      try {
        const result = await registerAPI(userInput)
        if (result.status = 200) {
          alert(`welcome ${result.data?.username},please login to explore our projects!!!`)
          navigate("/login")
          setUserInput({ username: "", email: "", password: "" })
        } else {
          if (result.response.status == 406) {
            alert(result.response.data)
            setUserInput({ username: "", email: "", password: "" })
          }

        }


      }

      catch (err) {
        console.log(err);
      }

    }

    else {
      alert("please fill the form completely")
    }

  }

  // ..........login......................................................................................................

  const login = async (e) => {
    e.preventDefault()
    if (userInput.password && userInput.email) {

      // api call

      try {
        const result = await loginAPI(userInput)
        if (result.status = 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          // alert(`welcome ${result.data?.username},please login to explore our projects!!!`)
          // ee step lane success aavunnath 
          setIsLogin(true)
          // ...............
          setAuthorisedUser(true)
          // ..............
          setTimeout(() => {
            navigate("/")
            setUserInput({username:"",email:"",password:""})
            setIsLogin(false)
            
          }, 2000);
          // 

        } else {
          if (result.response.status == 404) {
            alert(result.response.data)
            // setUserInput({username:"",email:"",password:""})
          }

        }


      }

      catch (err) {
        console.log(err);
      }

    }

    else {
      alert("please fill the form completely")
    }

  }

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={loginimg} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-6">
              <h1 className="my-2"><i className="fa-brands fa-docker me-2"></i>Project Fair</h1>
              <h5>sign {insideRegister ? 'up' : 'in'} into your account</h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel controlId="floatingInputusername" label="username" className="mb-3">
                    <Form.Control value={userInput.username} onChange={e => setUserInput({ ...userInput, username: e.target.value })} type="text" placeholder="username" />
                  </FloatingLabel>

                }

                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control value={userInput.email} type="email" placeholder="Email" onChange={e => setUserInput({ ...userInput, email: e.target.value })} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInput.password} onChange={e => setUserInput({ ...userInput, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>

                {
                  insideRegister ?
                    <div className='mt-3'>
                      <button onClick={register} className='btn btn-primary mb-2'>Register</button>
                      <p>Existing user?please click here to  <Link to={'/login'}>login</Link></p>

                    </div>
                    :
                    <div className='mt-3'>
                      <button onClick={login} className='btn btn-primary mb-2'>Login
                        {isLogin
                          && <Spinner animation="border" variant="light" className='ms-1' />
                        }

                      </button>
                      <p>New user?please click here to  <Link to={'/register'} >Register</Link></p>

                    </div>


                }
              </Form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Auth