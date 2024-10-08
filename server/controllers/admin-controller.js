const { Admin } = require('../models');

module.exports = {
  async createAdminUser({ body }, res) {

    const user = await Admin.create(body);
  
    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }

    res.json({ user });
  },


}

module.exports = {
  async getAdminUser(req, res) {

    const user = await Admin.findAll({});
  
    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }

    res.json({ user });
  },
}
