const { Schema, model } = require("mongoose");
// create the pizza model using the pizzaSchema 
const Pizza = model ('Pizza', PizzaSchema);


const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    default: "Large",
  },
  toppings: [],
});

module.exports = Pizza