const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

adminSchema.pre('save', async function (next) {
  // Check if the password is new or modified
  if (this.isNew || this.isModified('password')) {
      const saltRounds = 10; // Number of rounds for bcrypt to generate salt
      // Hash the password with bcrypt
      this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next(); // Proceed to save the user document
});
  
//Method to compare incoming password with hashed password
adminSchema.methods.isCorrectPassword = async function (password) {
  // Use bcrypt to compare the given password with the hashed password
  return bcrypt.compare(password, this.password);
};




const Admin = model('Admin', adminSchema);

module.exports = Admin;