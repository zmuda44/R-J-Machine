import "../admin.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from 'react-router-dom';

const AdminLogin = () => {
  const [userFormState, setFormState] = useState({    
    // email: "",
    userName: "",
    password: "",
    // mainAdmin: "",
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  // const userDataLength = Object.keys(userFormState).length;

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const response = await fetch('/api/admin', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }          
  //       })


  //       if (!response.ok) {
  //         throw new Error('something went wrong!');
  //       }

  //       const user = await response.json();
  //       console.log(user)
  //       setFormState({
  //         email: user.email || "",
  //         password: user.password || "",
  //         mainAdmin: user.mainAdmin || "",
  //       });
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getUserData();
  // }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  
  const handleFormSubmit = async (event) => {

    event.preventDefault();
    try {
      const response = await fetch('/api/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userFormState),
      });

      console.log(response)
      
      if (!response.ok) {
        throw new Error("Something went wrong!");
        setErrorMessage("Incorrect username or password. Please try again.");
      }

      navigate(`/admin/${userFormState.userName}`, { state: { userName: userFormState.userName } });

    } catch (e) {
      console.error(e);
      setErrorMessage("Incorrect username or password. Please try again.");
    }
  };


  return (
    <section id="admin">
      <div className="container">
      <div className="login">
        <h1>You have reached an Employees only admin page</h1>
        <p>Please note that this site is for employees only. Only authorized users may login.
        Please click <a href="/">here</a> to return to our webpage.</p>

        <div className="form-section">
          <h4>Employees with login credentials sign in below</h4>

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
            <label>Enter your username</label>
            <input            
              className="form-input"
              placeholder="userName"
              name="userName"
              type="text"
              value={userFormState.userName}
              onChange={handleChange}
            />   
            </div>

            <div className="form-group">
            <label>Enter Password</label>
              <input
              className="form-input"
              placeholder="password"
              name="password"
              type="password"
              value={userFormState.password}
              onChange={handleChange}
            />  
            </div>
            <button>Submit</button>
            </form> 
               
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>        

      {}




      </div>

      </div>

   








    </section>
  )
}


export default AdminLogin