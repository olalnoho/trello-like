const jwt = require('jsonwebtoken')

module.exports = async function (req, res, next) {
   const token = req.headers['authorization']
   if (!token) {
      return res.status(401).json({
         success: false,
         message: 'Not Authorized'
      })
   }

   try {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET)
      req.userId = userId
      next()
   } catch (err) {
      return res.status(401).json({
         success: false,
         message: 'Not Authorized'
      })
   }
}