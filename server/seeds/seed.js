const connection = require('../config/connection');
const { Admin, Project } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the admins and projects if they exist
  let adminCheck = await connection.db.listCollections({ name: 'admins' }).toArray();
  if (adminCheck.length) {
    await connection.dropCollection('admins');
  }

  // let projectsCheck = await connection.db.listCollections({ name: 'projects' }).toArray();
  // if (projectsCheck.length) {
  //   await connection.dropCollection('projects');
  // }

  const admin = {
    userName: "admin",
    email: "admin@rj-machine.com",
    password: "admin"
  }


  // Add admin to the collection and await the results
  const adminData = await Admin.create(admin);



  // Log out the seed data to indicate what should appear in the database
  console.table(admin);
  // console.table(projects);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
