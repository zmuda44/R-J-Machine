const router = require('express').Router();
const {
  createEstimate,
  getProjects,
  getProject

} = require('../../controllers/project-controller');



//'api/projects'

// router.route('/').post(createAdminUser).put(authMiddleware, saveBook);
router.route('/').get(getProjects)
router.route('/:projectId').get(getProject)
router.route('/').post(createEstimate)

module.exports = router;