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
  completionTimeMonths: {
    type: String,
  },

  completionTimeDays: {
    type: String,
  },
  manHours: {
    type: Number,
  },
  inventoryUsed: {
    type: Number,
  },
  submissionDate: {
    type: Date,
    default: Date.now()
  }
})

const Project = model('Project', projectSchema);

module.exports = Project;