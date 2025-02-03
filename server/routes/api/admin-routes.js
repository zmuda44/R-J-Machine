const router = require('express').Router();
const { Admin } = require('../../models');


const {
  getAllAdminUsers,
  createAdminUser,
  getAdminUser,
  loginAdminUser
  

} = require('../../controllers/admin-controller');

router.route('/').get(getAllAdminUsers)
router.route('/user').get(getAdminUser)
router.route('/login').post(loginAdminUser)
router.route('/').post(createAdminUser)






module.exports = router;