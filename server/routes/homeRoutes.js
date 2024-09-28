const router = require('express').Router();

const { Admin } = require('../models');



router.get('/admin/:user', async (req, res) => {
  console.log(req.body)

    try {
      const user = await Admin.findOne({ userName: req.params });
  
      // if (!user) {
      //   return res.status(400).json({ message: 'Something is wrong!' });
      // }

      res.json({ user });


    } catch(err) {
      console.log(err)
    }

  
})