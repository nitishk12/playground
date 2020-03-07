const validator = require('validator')

const web = 'bangalore.in'
const result = validator.isURL(web)
console.log(result)
