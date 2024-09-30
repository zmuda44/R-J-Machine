import "../admin.css"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const Project = () => {
  const { projectId } = useParams();

  const [isEditing, setIsEditing] = useState(false);

  const [projectDisplayState, setProjectDisplayState] = useState({
    description: "",
    submissionDate: "",
    manHours: "",
    startDate: "",
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
        description: projectData.description || "",
        submissionDate: projectData.submissionDate || "",
        manHours: projectData.manHours || "",
        startDate: projectData.startDate || "",
      });
    } catch (err) {
      console.error(err);
    }
  };

      getProjectData();
  }, []);

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
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel Edit' : 'Edit Project'}
          </button>
          <h1>{projectDisplayState.description}</h1>
          {isEditing && (
          <input className = "" 
          placeholder="New Description"
          name="description"
          type="text"
          value={projectDisplayState.description}
          onChange={handleChange}
          />
          )}
          <p>{projectDisplayState.submissionDate}</p>
          <p>{projectDisplayState.manHours}</p>
          {isEditing && (
          <input className = "" 
          placeholder="New man hours"
          name="manHours"
          type="text"
          value={projectDisplayState.manHours}
          onChange={handleChange}
          />
          )}
          <p>{projectDisplayState.startDate}</p>
          <input className = "" 
          placeholder="New Start Date"
          name="StartDate"
          type="text"
          value={projectDisplayState.startDate}
          onChange={handleChange}
          />
          <button id="edit-project">Submit</button>
          <button id="edit-project">Delete</button>
        </div>
      </div>
          
    </section>
  )
}


export default Project
