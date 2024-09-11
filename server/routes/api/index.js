const router = require('express').Router();
const adminRoutes = require('./admin-routes');
const projectRoutes = require('./project-routes');


router.use('/admin', adminRoutes);
router.use('/projects', projectRoutes);

module.exports = router;