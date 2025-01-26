import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, userProjectsAPI } from '../services/allApi'
import { addProjectContext, editProjectContext } from '../contexts/ContextShare'

const View = () => {

    const {editProjectResponse,setEditProjectResponse}=useContext(editProjectContext)
    const{addProjectResponse,setAddProjectResponse}=useContext(addProjectContext)

    const [userProjects, setUserProjects] = useState([])
    console.log(userProjects);


    useEffect(() => {
        getUserProject()
    }, [addProjectResponse,editProjectResponse])

    const getUserProject = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {

                const result = await userProjectsAPI(reqHeader)
                console.log(result);
                if (result.status == 200) {
                    setUserProjects(result.data)
                }

            } catch (err) {
                console.log(err);
            }
        }
    }

    // 

    const removeProject=async(id)=>{
      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
            "Authorization":`Bearer ${token}`
        }
        try{

            const result=await deleteProjectAPI(id,reqHeader)
            if(result.status==200){
                getUserProject()
            }

        }catch(err){
            console.log(err);
        }
      }

    }

    return (
        <>
            <div className="d-flex justify-content-between mt-3">
                <h2 className="text-warning">All projects</h2>
                <div>
                    <Add />
                </div>
            </div>
            <div className="mt-2">

                {/* how should we see all projects */}
                {
                    userProjects.length > 0 ?
                        userProjects?.map(project => (
                            <div key={project?._id} className="border rounded p-2 d-flex justify-content-between mb-3">
                                {/* in this above div we are going to view all projects */}
                                <h3>{project?.title}</h3>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Edit project={project}/>
                                    </div>
                                    <button className='btn'><a href={project?.github} target='_blank'><i className="fa-brands fa-github"></i></a></button>
                                    <button onClick={()=>removeProject(project?._id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
                                </div>

                            </div>

                        ))
                        :
                        <div className='fw-bolder fs-3'>You havent uploaded any project yet...add your project</div>
                }
            </div>
        </>
    )
}

export default View