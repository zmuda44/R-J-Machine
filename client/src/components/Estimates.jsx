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
      const response = await fetch('http://localhost:10000/api/projects', {
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
        <h4>Receive estimate</h4>
        <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Description of project"
          name="description"
          type="text"
          value={userFormState.description}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Estimated time of completion"
          name="completionTime"
          type="text"
          value={userFormState.completionTime}
          onChange={handleChange}
        />
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
          placeholder="Number of estimated man hours"
          name="manHours"
          type="text"
          value={userFormState.manHours}
          onChange={handleChange}
        />


        <label>
          <input
            type="checkbox"
            checked={govtBid}
            onChange={handleChange}
          />
          Government bidding contract
        </label>
        <button type="submit">Submit</button>
        </form>

      </div>

    </section>
  );
};




export default Estimates;