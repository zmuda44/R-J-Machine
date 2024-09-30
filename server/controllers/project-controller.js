const { Project } = require('../models');

module.exports = {

  async createEstimate({ body }, res) {
    const submittedDate = Date.now()

    console.log(submittedDate)
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
    console.log(req.params.projectId)

    const project = await Project.findOne({ _id: req.params.projectId})
    
    res.json(project)
    
  }

}





