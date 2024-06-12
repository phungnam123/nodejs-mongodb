const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connect MongoDb Successfull')
  } catch (error) {
    console.log('Connected Fail !')
  }
}

module.exports = connect
