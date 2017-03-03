// require micro-middleware helper
var { applyMiddleware } = require('micro-middleware')

// require some middleware for micro
const cors = require('micro-cors')()
const compress = require('micro-compress')
const middleware = [
  cors, 
  compress
]

// create your micro service
const microService = async (req, res) => {
    return "hello world"
}

// apply middleware and export
module.exports = applyMiddleware(microService, middleware)