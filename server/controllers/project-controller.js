const { Project } = require('../models');

module.exports = {

  async createEstimate({ body }, res) {
    console.log(body)
    const estimate = await Project.create(body);
  
    if (!estimate) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }

    res.json({ estimate });
  },





  async getProjects (req, res) {
    const projects = await Project.find()
    
  }

}





