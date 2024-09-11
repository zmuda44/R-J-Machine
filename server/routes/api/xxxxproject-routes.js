const router = require('express').Router();
const { Project } = require('../../models');

router.get('/', async (req, res) => {
  console.log(req)
})

module.exports = router;