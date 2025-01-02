const { Project } = require('../models');

module.exports = {

  async createEstimate({ body }, res) {
    try {
      console.log("post path for create estimate")
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




  // api/admin/projects
  async getProjects (req, res) {
    console.log("get path for all projects hit")

    const projects = await Project.find()
    
    res.json(projects)
    
  },



  async getProject (req, res) {
    console.log("get path for find one project")
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


    // if (req.session.user_id) {
    //   project = await Project.findOne({ _id: req.params.projectId})
    // }    


    
  },

  async updateProject (req, res) {
    console.log("get path for update project")
    const project = await Project.findOneAndUpdate(
      { _id: req.params.projectId},
      { $set: req.body })
    
    res.json(project)
    
  }

}





