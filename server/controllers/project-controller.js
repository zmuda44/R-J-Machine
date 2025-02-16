const { Project } = require('../models');

module.exports = {

// GET api/admin/projects
async getProjects (req, res) {

  const projects = await Project.find()
  
  res.json(projects)
  
},

// POST api/admin/projects
async createEstimate({ body }, res) {
  try {

    const submittedDate = Date.now()
    let startDate = ""
    let endDate = ""    

    if (body.startDate) {
      const startDateString = body.startDate;
      startDate = new Date(startDateString);    
    }

    if (body.endDate) {
      const endDateString = body.endDate; 
      endDate = new Date(endDateString);  
    }

    const estimateData = {
      ...body,
      submittedDate,
      startDate,
      endDate,
    };

    const estimate = await Project.create(body);
  
    if (!estimate) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }

    res.json({ estimate });      
    
  } catch (err) {
    console.log(err)
  }
},

// GET api/admin/projects/:projectId
async getProject (req, res) {

  try {

    if (!req.session.user_id) {
      throw new Error("no admin found")
    } 

    const project = await Project.findOne({ _id: req.params.projectId})  

    res.json(project)
  } 
  catch (err) {
    console.log("no req.session found")
  }
  
},

// PUT api/admin/projects/:projectId
async updateProject (req, res) {

  const project = await Project.findOneAndUpdate(
    { _id: req.params.projectId},
    { $set: req.body })
  
  res.json(project)
  
}

}





