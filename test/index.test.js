var head = require('../lib/index')
var test = require('tape')

test('it finds the headers of uri without full download', function (t) {
  t.plan(3)

  var uri = 'http://datos.gob.mx'
  var type = 'text/html; charset=utf-8'

  head(uri, (err, headers) => {
    t.error(err, 'no errors')
    t.equal(headers['content-type'], type, 'finds HTML')
    t.true(parseInt(headers['content-length']) > 1000, '> 1KB')
  })
})
