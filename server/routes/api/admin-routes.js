const router = require('express').Router();
const { Admin } = require('../../models');


// const {
//   createAdminUser,
//   getAdminUser

// } = require('../../controllers/admin-controller');

// router.route('/').post(createAdminUser).put(authMiddleware, saveBook);


router.get('/', async (req, res) => {
  console.log("get path for find all admin?")
  try {
    const users = await Admin.find(); // No 'where' clause, so it gets all records
    if (!users.length) {
      return res.status(404).json({ message: 'No users found!' });
    }
    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



router.get('/user', async (req, res) => { 
console.log('get path for a single user')

    try {
      const user = await Admin.findOne({ _id: req.session.user_id });
  
      // if (!user) {
      //   return res.status(400).json({ message: 'Something is wrong!' });
      // }

      res.json(user);

    } catch(err) {
      console.log(err)
    }

  
})

router.post('/login', async (req, res) => {

  try {
    const userName = req.body.userName;
    const password = req.body.password;

    const adminData = await Admin.findOne({ userName } );

    if (!adminData) {
          
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return
    }
    const validPassword = await adminData.isCorrectPassword(password);

    // const validPassword = password === "admin"  

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // const responseData = {
    //   id: adminData.id,
    //   userName: adminData.userName,
    //   // Include any other non-sensitive fields you want to return
    // };

    req.session.save(() => {
      req.session.user_id = adminData.id;
      req.session.logged_in = true;

      res.status(204).end();
      
    });  

  } catch (error) {
    console.error('Failed to login.', error);
  }
}),

router.post('/', async ({ body }, res) => {


try {
  const { userName, email, password } = body;

// Create the user with the provided username, email, and password
  const admin = await Admin.create({ userName: userName, email: email, password: password });
  // If user creation fails, throw an error
  if (!admin) {
    throw new Error('Something is wrong!');
  }

  res.send(admin)

} catch (error) {
  console.error(error);
  // Return a specific error message in case of failure
  throw new Error('Failed to create user');
}
}),


module.exports = router;