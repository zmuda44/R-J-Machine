const router = require('express').Router();
const {
  createAdminUser,

} = require('../../controllers/admin-controller');

// router.route('/').post(createAdminUser).put(authMiddleware, saveBook);
router.route('/').post(createAdminUser)

module.exports = router;