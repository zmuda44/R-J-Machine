import "../admin.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [userFormState, setFormState] = useState({    
    // email: "",
    userName: "",
    password: "",
    // mainAdmin: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

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
      
      if (!response.ok) {
        throw new Error("Something went wrong!");
        setErrorMessage("Incorrect username or password. Please try again.");
      }

      navigate('/admin/user')  

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
              <label>Enter Username</label>
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

          <p>Username: admin Password: admin</p>
        </div>
      </div>
    </section>
  )
}


export default AdminLogin