#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
var head = require('./index')
var thru = require('through2')
var split = require('split')
var util = require('./utils')

var ts = thru(function (chunk, enc, next) {
  var uri = chunk.toString()
  if (!uri) return next()

  var dat = this
  head(uri, function (err, data) {
    if (data) data.uri = uri
    dat.push(JSON.stringify(err || data) + '\n')
    next()
  })
})

if (argv.version || argv.v) {
  console.log(util.version())
} else if (argv.help || argv.h) {
  console.log(util.usage())
} else {
  process.stdin
  .pipe(split())
  .pipe(ts)
  .pipe(process.stdout)
}
