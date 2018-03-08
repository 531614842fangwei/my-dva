/* eslint-disable */

const fs = require('fs')
const path = require('path')

const mock = {}
fs.readdirSync(path.join(`${__dirname}/src/mock`)).forEach(file => {
  Object.assign(mock, require(`./src/mock/${file}`))
})
module.exports = mock
