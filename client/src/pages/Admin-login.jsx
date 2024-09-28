import "../admin.css"
import { useState, useEffect } from "react";

const AdminLogin = () => {
  const [userFormState, setFormState] = useState({    
    email: "",
    userName: "",
    password: "",
    // mainAdmin: "",

  });

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

  console.log(userFormState)

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
     window.location.replace(`/admin/${userFormState.userName}`);
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
            <label>Enter your email</label>
            <input            
              className="form-input"
              placeholder="email"
              name="email"
              type="text"
              value={userFormState.email}
              onChange={handleChange}
            />   
            <label>Enter your username</label>
            <input            
              className="form-input"
              placeholder="userName"
              name="userName"
              type="text"
              value={userFormState.userName}
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
        <h1>Welcome </h1>


       </div>



      </div>

    </section>
  )
}


export default AdminLogin