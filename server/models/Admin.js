const { Schema, model } = require('mongoose');

const adminSchema = new Schema ({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mainAdmin: {
    type: Boolean,
  }


})

const Admin = model('Admin', adminSchema);

module.exports = Admin;