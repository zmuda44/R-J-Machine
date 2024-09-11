const { Schema, model } = require('mongoose');

const inventorySchema = new Schema ({
  item: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantityUsed: {
    type: Number,

  },
  quantityAdded: {
    type: Number,

  }


})

const Inventory = model('Inventory', inventorySchema);

module.exports = Inventory;