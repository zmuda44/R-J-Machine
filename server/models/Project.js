const { Schema, model } = require('mongoose');

const projectSchema = new Schema ({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Number,
  },
  endDate: {
    type: Number,
  },
  completionTime: {
    type: String,
  },
  manHours: {
    type: Number,
  },
  inventory: {
    type: Number,
  }
})

const Project = model('Project', projectSchema);

module.exports = Project;