const router = require('express').Router();

const { Admin } = require('../../models');


// const {
//   createAdminUser,
//   getAdminUser

// } = require('../../controllers/admin-controller');

// router.route('/').post(createAdminUser).put(authMiddleware, saveBook);


router.get('/', async (req, res) => {
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



router.get('/:user', async (req, res) => {
  console.log(req.params.user)

    try {
      const user = await Admin.findOne({ userName: req.params.user });
  
      // if (!user) {
      //   return res.status(400).json({ message: 'Something is wrong!' });
      // }

      res.json({ user });


    } catch(err) {
      console.log(err)
    }

  
})

router.post('/', async ({ body }, res) => {

    const user = await Admin.create(body);
  
    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }

    res.json({ user });
}),





module.exports = router;