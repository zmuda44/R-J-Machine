const router = require('express').Router();
const {
  createEstimate,
  getProjects

} = require('../../controllers/project-controller');



//'api/projects'

// router.route('/').post(createAdminUser).put(authMiddleware, saveBook);
router.route('/').get(getProjects)
router.route('/').post(createEstimate)

module.exports = router;