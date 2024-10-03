import { useState } from "react";



const Estimates = () => {

  const [userFormState, setFormState] = useState({
    description: "",
    completionTimeMonths: "",
    completionTimeDays: "",
    startDate: "",
    endDate: "",
    manHours: "",
    customerName: "",
    customerEmail: "",
    customerPhone: ""
    // dateSubmitted: Date.now()
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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
      const response = await fetch('/api/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userFormState),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormState({
          description: "",
          completionTimeMonths: "",
          completionTimeDays: "",
          startDate: "",
          endDate: "",
          manHours: "",
          customerName: "",
          customerEmail: "",
          customerPhone: ""
        });
      }
   
    //  window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const govtBid = () => {
    console.log("gov bid checked")
  }





  return (
    <section id="estimates">
      <div className="container">
        <h4>Receive a fast and free estimate</h4>
        <p>Fill out the form below and we will get back to you within the next business day</p>

         <form onSubmit={handleFormSubmit}>

          <div className="" id="description">
            <label>Description of Project</label>
            <textarea            
              className="form-input"
              placeholder="Description of project"
              name="description"
              type="text"
              value={userFormState.description}
              onChange={handleChange}
            />         
          </div>
          <div className="form-flex" id="completion-time">
            <p>Estimated Time of Completion</p>

            <div className="form-group">
 
              <input
                className="form-input"
                name="completionTimeMonths"
                placeholder="Months"
                type="number"
                min="1"
                max="12"
                value={userFormState.completionTimeMonths}   
                onChange={handleChange}      
              />          
            <input
              className="form-input"
              placeholder="Days"
              name="completionTimeDays"
              type="number"
                min="1"
                max="31"
              value={userFormState.completionTimeDays}
              onChange={handleChange}
            />
            </div>
          </div>

          <div className="form-flex" id="target-date">      
            <p>Target Start or Completion Date</p>
            <div className="form-group">
              <input
                className="form-input"
                placeholder="Target start date"
                name="startDate"
                type="date"
                value={userFormState.startDate}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Target end date"
                name="endDate"
                type="date"
                value={userFormState.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-flex" id="man-hours">
            <p>Estimated man hours</p>
            <input
                className="form-input"
                placeholder="Number of estimated man hours"
                name="manHours"
                type="number"
                value={userFormState.manHours}
                onChange={handleChange}
              />
          </div>

          <div className="" id="contact-info">
          <p>Enter your contact info below</p>
            <div className="form-group">
              <p>Name</p>
              <input
                  className="form-input"
                  placeholder="Your Name"
                  name="customerName"
                  type="text"
                  value={userFormState.customerName}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                  className="form-input"
                  placeholder="Your email"
                  name="customerEmail"
                  type="email"
                  value={userFormState.customerEmail}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>Phone Number</p>
              <input
                  className="form-input"
                  placeholder="Your Phone Number"
                  name="customerPhone"
                  type="text"
                  value={userFormState.customerPhone}
                  onChange={handleChange}
              />
            </div>


            </div>


  

          <div className="gov-checkbox">
            <div className="checkbox-group">
              <input
                type="checkbox"
                // checked={govtBid}
                onChange={handleChange}
              />
              <p>Government bidding contract</p> 
            </div>
  
            <div className="checkbox-group">
              <input
                type="checkbox"
                // checked={govtBid}
                onChange={handleChange}
              />
              <p>Response for Proposal</p> 
            </div>   
          </div>
        
        <div className="button-container">
        <button type="submit">Submit</button>
        </div>
       
        </form>

        {formSubmitted && (
          <div className="form-submitted-message">
            <p>Form has been successfully submitted!</p>
          </div>
        )}

      </div>

    </section>
  );
};




export default Estimates;