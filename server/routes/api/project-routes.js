const router = require('express').Router();
const {
  createEstimate,
  getEstimate

} = require('../../controllers/project-controller');



//'api/projects'

// router.route('/').post(createAdminUser).put(authMiddleware, saveBook);
// route.route('/').get(getEstimate)
router.route('/').post(createEstimate)

module.exports = router;