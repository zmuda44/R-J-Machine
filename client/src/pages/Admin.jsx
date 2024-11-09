import "../admin.css"
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const Admin = () => {
  // const { user } = useParams();
  const location = useLocation();

  const userName = location.state?.userName || "";

  const [userDisplayState, setUserDisplayState] = useState({
    userName: userName
  });

  const [projectsDisplayState, setProjectsDisplayState] = useState([])
  //   description: "",
  //   manHours: "",
  //   startDate: "",
  // });

  const [updateProjectDisplayState, setUpdateProjectDisplayState] = useState()

  useEffect(() => {
    const getProjectsData = async () => {
      try {
      const response = await fetch(`/api/admin/projects`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })


      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const projectData = await response.json()      

      setProjectsDisplayState(projectData);

      
    } catch (err) {
      console.error(err);
    }
  };

      getProjectsData();
  }, []);

  function showIndividualProject (projectId) {

  }

  return (
    <section id="admin">
      <div className="container">
        {userDisplayState.userName ? (
          <>
            <div id="users">
              <h1>Welcome {userDisplayState.userName}</h1>
              <p>If the user is mainAdmin, then they can manage users. If the main email, they can handle mainAdmin. <a href="/">Click here</a> to return to our webpage.</p>
            </div>
            <div id="projects">
              <h1>Projects</h1>
              {projectsDisplayState.length > 0 ? (
                <div className="list-items">
                  {projectsDisplayState.map((project) => (
                    <a href={`/projects/${project._id}`}><li key={project._id} onClick={() => showIndividualProject(project._id)}>
                      <h4>Submitted: {new Date(project.submissionDate).toLocaleDateString()}</h4>
                      <h5>Title: {project.title ? project.title : 'N/A'}</h5>
                      <p>Description: {project.description}</p>
                      <p>Completion Time - Months: {project.completionTimeMonths} Days: {project.completionTimeDays}</p>
                      <p>Man Hours: {project.manHours}</p>
                      <p>Start Date: {project.startDate ? new Date(project.startDate).toLocaleDateString() : 'N/A'}</p>
                      <p>End Date: {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'N/A'}</p>
                    </li></a>
                  ))}
                </div>
              ) : (
                <p>No projects available.</p>
              )}
            </div>
          </>
        ) : (
          <h1>No User Found</h1>
        )}
      </div>
    </section>
  );
}


export default Admin

{/* <button onclick={window.location.replace(`/projects/${userFormState.userName}`);}>edit project</button> */}

{/* <label>Enter your email</label>
<input            
  className="form-input"
  placeholder="email"
  name="email"
  type="text"
  value={}
  onChange={}
/>  */}


  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...userFormState,
  //     [name]: value,
  //   });
  // };

  
  // const handleFormSubmit = async (event) => {

  //   event.preventDefault();
  //   try {
  //     const response = await fetch('/api/admin', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(userFormState),
  //     });
  //     console.log(response)
  //    window.location.replace(`api/admin/${userFormState.email}`);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };


   {/* <form onSubmit={handleFormSubmit}>

          <div className="" id="admin-login">
            <p>Enter your email</p>
            <input            
              className="form-input"
              placeholder="email"
              name="email"
              type="text"
              value={userFormState.email}
              onChange={handleChange}
            />   

              <input
              className="form-input"
              placeholder="password"
              name="password"
              type="text"
              value={userFormState.password}
              onChange={handleChange}
            />      
          </div>        

        <button type="submit">Submit</button>
        </form> */}