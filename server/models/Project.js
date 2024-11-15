const { Schema, model } = require('mongoose');

const projectSchema = new Schema ({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  completionTimeMonths: {
    type: Number,
  },
  completionTimeDays: {
    type: Number,
  },
  manHours: {
    type: Number,
  },
  submissionDate: {
    type: Date,
    default: Date.now()
  },
  customerName: {
    type: String,    
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
  },
  assignedPersonnel: {
    type: String,
  },
  originalEstimate: {
    type: Number,
  },
  finalBid: {
    type: Number,
  }

})

const Project = model('Project', projectSchema);

module.exports = Project;


// inventoryUsed: {
//   type: Number,
// },