
var execSync = require('exec-sync')

module.exports = function (path) {
  execSync('rm -rf ' + path)
}
