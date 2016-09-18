var http = require('http')
var sanitize = (uri) => uri.replace(/"/g, '')

/**
 * Grab the headers of remote resource without downloading the resource
 * @param {string} uri to check
 * @param {function} done callback returning HTTP headers
 */
module.exports = function (uri, done) {
  var req = http.get(sanitize(uri), (res) => {
    var headers = res.headers
    req.abort()
    res.on('data', (chunk) => console.log('you will not see this'))
    res.on('end', () => done(null, headers))
  }).on('error', (e) => {
    done(new Error(`Got error: ${e.message}`))
  })
}
