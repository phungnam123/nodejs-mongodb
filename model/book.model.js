const mongoose = require('mongoose') // Erase if already required

// Declare the Schema of the Mongo model
const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
)

//Export the model
module.exports = mongoose.model('Book', bookSchema)
