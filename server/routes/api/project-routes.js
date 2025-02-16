const router = require('express').Router();
const {
  createEstimate,
  getProjects,
  getProject,
  updateProject

} = require('../../controllers/project-controller');



// api/admin/projects

router.route('/').get(getProjects)
router.route('/').post(createEstimate)
router.route('/:projectId').get(getProject)
router.route('/:projectId').put(updateProject)

module.exports = router;