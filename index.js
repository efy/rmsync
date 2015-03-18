
var execSync = require('exec-sync')

module.exports = function rmsync(path) {
  execSync('rm -rf ' + path)
}
