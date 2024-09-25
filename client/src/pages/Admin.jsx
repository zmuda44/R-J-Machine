import "../admin.css"
import { useState } from "react";

const Admin = () => {
  const [userFormState, setFormState] = useState({
    email: "",
    password: "",
  });

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
      const response = await fetch('/api/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userFormState),
      });
      console.log(response)
    //  window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <section id="admin">
      <div className="container">
      <div className="login">
        <h1>You have reached an Employees only admin page</h1>
        <p>Please note that this site is for employees only. Only authorized users may login.
        Please click <a href="/">here</a> to return to our webpage.</p>
        <form onSubmit={handleFormSubmit}>

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
        </form>
       </div>

       <div className="admin-content">
        <h1>Welcome {email}</h1>


       </div>



      </div>

    </section>
  )
}


export default Admin