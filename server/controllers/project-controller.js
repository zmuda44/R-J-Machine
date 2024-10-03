const { Project } = require('../models');

module.exports = {

  async createEstimate({ body }, res) {
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
  },





  async getProjects (req, res) {

    const projects = await Project.find()
    
    res.json(projects)
    
  },



  async getProject (req, res) {


    const project = await Project.findOne({ _id: req.params.projectId})

    
    res.json(project)
    
  },

  async updateProject (req, res) {
    console.log(req.body)

    const project = await Project.findOneAndUpdate(
      { _id: req.params.projectId},
      { $set: req.body })
    
    res.json(project)
    
  }

}





