import { useState } from "react";



const Estimates = () => {

  const [userFormState, setFormState] = useState({
    description: "",
    completionTime: "",
    startDate: "",
    manHours: "",
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
      const response = await fetch('/api/projects', {
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

  const govtBid = () => {
    console.log("gov bid checked")
  }



  return (
    <section id="estimates">
      <div className="container">
        <h4>Receive a fast and free estimate</h4>
        <h4>Receive an estimate</h4>
        <form onSubmit={handleFormSubmit}>

          <div className="" id="description">
            <p>Description of Project</p>
            <input            
              className="form-input"
              placeholder="Description of project"
              name="description"
              type="text"
              value={userFormState.description}
              onChange={handleChange}
            />         
          </div>

          <div className="form-flex" id="completion-time">
            <p>Estimated Time of completion</p>
            <input
              className="form-input"
              placeholder="Months"
              name="completionTimeMonths"
              type="text"
              value={userFormState.completionTimeMonths}
              onChange={handleChange}
            />
 
            <input
              className="form-input"
              placeholder="Days"
              name="completionTimeDays"
              type="text"
              value={userFormState.completionTimeMonths}
              onChange={handleChange}
            />
          </div>

          <div className="form-flex" id="target-date">      
            <p>Target Start or Completion Date</p>
            <input
              className="form-input"
              placeholder="Target start date"
              name="startDate"
              type="text"
              value={userFormState.startDate}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Target end date"
              name="endDate"
              type="text"
              value={userFormState.startDate}
              onChange={handleChange}
            />

          </div>

          <div className="form-flex" id="man-hours">
            <p>Estimated man hours</p>
            <input
                className="form-input"
                placeholder="Number of estimated man hours"
                name="manHours"
                type="text"
                value={userFormState.manHours}
                onChange={handleChange}
              />
          </div>

  

          <div>
            <input
              type="checkbox"
              checked={govtBid}
              onChange={handleChange}
            />
            Government bidding contract
          </div>

        <button type="submit">Submit</button>
        </form>

      </div>

    </section>
  );
};




export default Estimates;