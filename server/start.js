const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const app = express()
const db = require('../db')
const PORT = 9001

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(require('volleyball'))
}

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.

if (module === require.main) {
  // Start listening only if we're the main module.
  //When a file is run directly from Node.js, require.main is set to its module

  const db = require('../db')
  db.sync()
  .then(() => {
    console.log('db is synced AF')
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
  });
}



