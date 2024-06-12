const BookModel = require('../model/book.model')

const bookController = {
  //   get all book
  getAllBook: async (req, res) => {
    try {
      const data = await BookModel.find()
      return res.status(200).json({
        msg: 'Ok',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  // create a new book
  createBook: async (req, res) => {
    try {
      const { name, author, price, description } = req.body
      if (!name || !author || !price || !description) {
        return res.status(200).json({
          message: 'Missing required params',
        })
      }
      const book = new BookModel({ name, author, price, description })
      const data = await book.save()
      res.status(200).json({
        msg: 'OK',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  //get sing book
  getBook: async (req, res) => {
    try {
      const { id } = req.params
      const data = await BookModel.findById(id)
      if (data) {
        return res.status(200).json({
          msg: 'Ok',
          data,
        })
      }

      return res.status(404).json({
        msg: `Not found id: ${id}`,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },
  //update Book
  updateBook: async (req, res) => {
    try {
      const { name, author, price, description } = req.body
      const { id } = req.params
      if (!name || !author || !price || !description) {
        return res.status(200).json({
          message: 'Missing required params',
        })
      }
      const data = await BookModel.findByIdAndUpdate(id, {
        name,
        author,
        price,
        description,
      })
      return res.status(200).json({
        msg: 'Update book succesfull!',
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },
  //delete book
  deleteBook: async (req, res) => {
    try {
      const { id } = req.params
      const data = await BookModel.findByIdAndDelete(id)
      return res.json({
        msg: 'Delete book Succesfull!',
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },
}

module.exports = bookController
