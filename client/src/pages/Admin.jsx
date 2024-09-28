import "../admin.css"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const Admin = () => {
  const { user } = useParams();
 


  const [userDisplayState, setUserDisplayState] = useState([]);

  const [projectsDisplayState, setProjectsDisplayState] = useState({
    description: "",
    manHours: "",
    startDate: "",
  });





  // const userDataLength = Object.keys(userFormState).length;

  useEffect(() => {
  const getUserData = async () => {
      try {
      const response = await fetch(`/api/admin/${user}`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })


      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const userData = await response.json()
     

      // const userResponse = await response.json();
      

      setUserDisplayState({
        userName: userData.user.userName || ""
      });
    } catch (err) {
      console.error(err);
    }
  };

      getUserData();
  }, []);

  useEffect(() => {
  const getProjectsData = async () => {
      try {
      const response = await fetch(`/api/projects`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })


      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const projectData = await response.json()
     

      console.log(projectData)
      

      setProjectsDisplayState(projectData);
    } catch (err) {
      console.error(err);
    }
  };

      getProjectsData();
  }, []);







  return (
    <section id="admin">
      <div className="container">
      <div className="content">
        <h1>Welcome User</h1>
        <p>if user mainAdmin then they can manage users. if main email they can handle mainAdmin <a href="/">here</a> to return to our webpage.</p>
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
       </div>

       <div className="users">
        <h1>{userDisplayState.userName}</h1>


       </div>
       <div className="users">
        <h1>Projects </h1>
        {projectsDisplayState.length > 0 ? (
            <ul>
              {projectsDisplayState.map((project, index) => (
                <li key={index}>
                  <p>Description: {project.description}</p>
                  <p>Man Hours: {project.manHours}</p>
                  <p>Start Date: {project.startDate}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No projects available.</p>
          )}

       </div>



      </div>

    </section>
  )
}


export default Admin


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