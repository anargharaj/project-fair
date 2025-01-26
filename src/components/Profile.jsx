import React, { useEffect } from 'react'
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import upload from '../assets/upload.webp'
import SERVER_BASE_URL from '../services/serverUrl';
import { updateUserAPI } from '../services/allApi';


const Profile = () => {
    const [open, setOpen] = useState(false);
    const[preview,setPreview]=useState("")
    
    const[existingProfilePic,setExistingProfilePic]=useState("")

        // profilePic key of userDetails is used to store uploaded user profilepic file

    const[userDetails,setUserDetails]=useState({
      username:"",email:"",password:"",github:"",linkedin:"",profilePic:""
    })
    console.log(userDetails);
    // get existing user details from session and store it to userDetails state
    useEffect(()=>{
      if(sessionStorage.getItem("user")){
        const user=JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({
          ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,
          linkedin:user.linkedin
        })
        setExistingProfilePic(user.profilePic)
      }
    },[open])

    // generate url for upload profilepic
    useEffect(()=>{
      if(userDetails.profilePic){
        setPreview(URL.createObjectURL(userDetails.profilePic))
      }else{
        setPreview("")
      }
    },[userDetails.profilePic])
    // ,,,,,,,,,,,,,,,,
    const handleUserUpdte=async()=>{
      // 1.get all user details
      const {username,email,password,github,linkedin,profilePic}=userDetails
      // if text filed have value
      if(github&&linkedin){
        // req body
        const reqBody=new FormData()
        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("password",password)
        reqBody.append("github",github)
        reqBody.append("linkedin",linkedin)
        preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingProfilePic)
        // reqHeader
        const token=sessionStorage.getItem("token")
        if(token){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          // make api call
          try{
              const result=await updateUserAPI(reqBody,reqHeader)
              if(result.status==200){
                // alert
                alert("user profile updated successfully")
                // store update user in session
                sessionStorage.setItem("user",JSON.stringify(result.data))
                // collapse profile
                setOpen(!open)
              }
          }catch(err){
            console.log(err);
          }
        }


         
      }else{
        alert("please fill the form completely")
      }
      
    }


  return (
    <>
    <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>Profile</h3>
        <button  onClick={() => setOpen(!open)} className='btn text-warning'><i className="fa-solid fa-chevron-down"></i></button>
    </div>



    <Collapse in={open}>
        <div id="example-collapse-text" className='row container-fluid justify-content-center align-items-center shadow p-2 rounded'>

           {/* picture upload cheyyanulla file upload cheyyanulla tag input tag with type file */}
            
            <label className='text-center'>
                <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} type="file" style={{display:'none'}}/>
                {
                  existingProfilePic==""?
                  <img src={preview?preview:upload} alt="" width={'200px'} height={'200px'} className='rounded-circle' />
                  :
                  <img src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`} alt="" width={'200px'} height={'200px'} className='rounded-circle'/>


                }
            </label>



          {/* want text boxes here */}

          <div className="my-2 w-100">
            <input value={userDetails.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})}  type="text" className="form-control" placeholder='user github link' />
          </div>


          <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})}  type="text" className="form-control" placeholder='user linkedin link' />
          </div>

         
         <div className="d-grid w-100">
           <button onClick={handleUserUpdte} className="btn btn-warning">Update</button>
         </div>


        </div>
      </Collapse>


    </>
  )
}

export default Profile