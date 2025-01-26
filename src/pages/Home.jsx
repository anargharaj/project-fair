import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingimg from '../assets/landingimg.jpg'
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card';
import { homeProjectsAPI } from '../services/allApi';


const Home = () => {
  const navigate=useNavigate()
  const [homeProjects, setHomeProjects] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  console.log(homeProjects);

  useEffect(() => {

    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  const getHomeProjects = async () => {
    try {

      const result = await homeProjectsAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

 const handleNavigateToProject=()=>{
  // user is loggined
  if(sessionStorage.getItem("token")){
    // authorised user then redirect
    navigate('/projects')
  }else{
    // not an authorised user then alert please login
    alert("please login to get full access to our projects collection")
  }
 }

  return (
    <>
      {/* landing */}
      <div className="d-flex justify-content-center align-items-center w-100 shadow rounded ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}><i className="fa-brands fa-docker"></i> Project Fair</h1>
              <p style={{ textAlign: "justify" }}>l Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nulla! Qui illo repellat architecto laborum libero laudantium ducimus molestiae dolorem, alias, cumque impedit nihil incidunt suscipit. Placeat atque inventore laboriosam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nihil officia ea mollitia ipsa voluptates quae veritatis sint perferendis autem neque nisi blanditiis, repellat maxime et iure vel ratione cum?

              </p>


              {
                isLogin ?
                  <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECT</Link>
                  :
                  <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
              }



            </div>
            <div className="col-lg-6">
              <img className='img-fluid ' src={landingimg} alt="" />
            </div>
          </div>

        </div>
      </div>


      {/* explore our projects */}
      <div className="my-5 text-center">
        <h1 className='mb-5'>explore our projects</h1>
        <marquee>
          <div className='d-flex'>

            {
              homeProjects?.map(project=>(
                <div className="me-5">
                <ProjectCard displayData={project} />
              </div>
  
              ))
            }

          </div>

        </marquee>
        <button onClick={handleNavigateToProject} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS.....</button>
      </div>

      {/* Our testimonial.......... */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>our testimonial</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-evenly align-items-center flex-column'>
                <img width={'60px'} height={'60px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s" alt="" className='rounded-circle img-fluid' />
                <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{ textAlign: 'justify' }}>Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-evenly align-items-center flex-column'>
                <img width={'60px'} height={'60px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s" alt="" className='rounded-circle img-fluid' />
                <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{ textAlign: 'justify' }}>Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-evenly align-items-center flex-column'>
                <img width={'60px'} height={'60px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s" alt="" className='rounded-circle img-fluid' />
                <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{ textAlign: 'justify' }}>Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>



    </>
  )
}

export default Home