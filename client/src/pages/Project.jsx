import "../project.css"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const Project = () => {
  const { projectId } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [originalState, setOriginalState] = useState({});

  console.log(originalState)

  const [projectDisplayState, setProjectDisplayState] = useState({
    description: "",
    submissionDate: "",
    manHours: "",
    startDate: "",
    endDate: "",
  })
  
  useEffect(() => {
  const getProjectData = async () => {
      try {
      const response = await fetch(`/api/projects/${projectId}`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })


      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const projectData = await response.json()
      

      setProjectDisplayState({
        title: projectData.title || "",
        description: projectData.description || "",
        submissionDate: projectData.submissionDate || "",
        manHours: projectData.manHours || "",
        startDate: projectData.startDate || "",
        endDate: projectData.endDate || "",
      });
    } catch (err) {
      console.error(err);
    }
  };

      getProjectData();
  }, []);

  const handleFormEdit = (editingState) => {
    setIsEditing(true);
    setOriginalState({ ...projectDisplayState }); 
  };

  // const handleCancelEdit = () => {
  //   setIsEditing(false);
  //   setProjectDisplayState({ ...originalState }); // Revert back to original values
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectDisplayState({
      ...projectDisplayState,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    // const { name, value } = event.target;
    // if (projectDisplayState !== originalState) {
    //   // Revert to original value if input is empty
    //   setProjectDisplayState((prevState) => ({
    //     ...prevState,
    //     [name]: originalState[name],
    //   }));
    // }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(projectDisplayState)
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectDisplayState),
      });
      window.location.reload()
      setIsEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      console.log('Project deleted');
      // Optionally redirect or update state after deletion
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <section id="admin">
      <div className="container">
        <div id="project">
          <button onClick={() => handleFormEdit(!isEditing)}>
            {isEditing ? 'Cancel Edit' : 'Edit Project'}
          </button>
          <h3>Project Submission Date: {projectDisplayState.submissionDate}</h3>
          <div className="form-group">
            <h3>Project Title: {originalState.title ? originalState.title : projectDisplayState.title ? projectDisplayState.title : "N/A"}</h3>
            {isEditing && (
            <input className = "" 
            placeholder="New Title"
            name="title"
            type="text"
            value={projectDisplayState.title}
            onChange={handleChange}            
            onBlur={handleBlur}

            />
            )}
          </div>

          <div className="form-group">
            <p>Project Description: {originalState.description ? originalState.description : projectDisplayState.description ? projectDisplayState.description : "N/A"}</p>
            {isEditing && (
            <input className = "" 
            placeholder="New Description"
            name="description"
            type="text"
            value={projectDisplayState.description}
            onChange={handleChange}
           
            onBlur={handleBlur} 

            />
            )}
          </div>

      

          <div className="form-group">
            <p>Project Man hours: {projectDisplayState.manHours}</p>
            {isEditing && (
            <input className = "" 
            placeholder="New man hours"
            name="manHours"
            type="text"
            value={projectDisplayState.manHours}
            onChange={handleChange}
            onFocus={() => setProjectDisplayState({...projectDisplayState, manHours: ""})}
            onBlur={handleBlur}

            />
            )}
          </div>

          <div className="form-group">
            <p>Project Start Date {projectDisplayState.startDate}</p>
            {isEditing && (
            <input className = "" 
            placeholder="New Start Date"
            name="startDate"
            type="text"
            value={projectDisplayState.startDate}
            onChange={handleChange}
            onFocus={() => setProjectDisplayState({...projectDisplayState, startDate: ""})}
            
            onBlur={handleBlur}
            />
            )}
          </div> 

          <div className="form-group">
            <p>Project End Date {projectDisplayState.endDate}</p>
            {isEditing && (
            <input className = "" 
            placeholder="New Start Date"
            name="endDate"
            type="text"
            value={projectDisplayState.endDate}
            onChange={handleChange}
            onFocus={() => setProjectDisplayState({...projectDisplayState, endDate: ""})}
            
            onBlur={handleBlur}
            />
            )}
          </div> 

          <div className="form-group">
            <p>Project Lead {projectDisplayState.assignedPersonnel}</p>
            {isEditing && (
            <input className = "" 
            placeholder="Project Lead"
            name="assignedPersonnel"
            type="text"
            value={projectDisplayState.assignedPersonnel}
            onChange={handleChange}
           
            
            onBlur={handleBlur}
            />
            )}
          </div> 

          <div className="form-group">
            <p>Original Estimate {projectDisplayState.origEstimate}</p>
            {isEditing && (
            <input className = "" 
            placeholder="Original Estimate"
            name="origEstimate"
            type="text"
            value={projectDisplayState.origEstimate}
            onChange={handleChange}
            onFocus={() => setProjectDisplayState({...projectDisplayState, origEstimate: ""})}
            
            onBlur={handleBlur}
            />
            )}
          </div> 
          <div className="form-group">
            <p>Final Bid {projectDisplayState.finalBid}</p>
            {isEditing && (
            <input className = "" 
            placeholder="Original Estimate"
            name="finalBid"
            type="text"
            value={projectDisplayState.origEstimate}
            onChange={handleChange}
            onFocus={() => setProjectDisplayState({...projectDisplayState, finalBid: ""})}
            onBlur={handleBlur}
            />
            )}
          </div> 

          <button id="edit-project" onClick={handleFormSubmit}>Submit</button>
          <button id="edit-project">Delete</button>
        </div>
      </div>
          
    </section>
  )
}


export default Project



// return (
//   <section id="admin">
//     <div className="container">
//       <div id="project">
//         <button onClick={isEditing ? handleCancelEdit : handleEdit}>
//           {isEditing ? 'Cancel Edit' : 'Edit Project'}
//         </button>
//         <h3>Project Submission Date: {projectDisplayState.submissionDate}</h3>

//         {['title', 'description', 'manHours', 'startDate', 'endDate', 'assignedPersonnel', 'origEstimate', 'finalBid'].map((field) => (
//           <div className="form-group" key={field}>
//             <p>{`Project ${field.charAt(0).toUpperCase() + field.slice(1)}: ${projectDisplayState[field]}`}</p>
//             {isEditing && (
//               <input
//                 className=""
//                 placeholder={`New ${field}`}
//                 name={field}
//                 type="text"
//                 value={projectDisplayState[field]}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             )}
//           </div>
//         ))}

//         <button id="edit-project" onClick={handleFormSubmit}>Submit</button>
//         <button id="edit-project" onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   </section>
// );
// };

// onFocus={() => setProjectDisplayState({...projectDisplayState, title: ""})}