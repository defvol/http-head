# http-head

Get metadata from a remote resource

Dead simple HTTP HEAD implementation

> The HEAD method is identical to GET except that the server MUST NOT return a message-body in the response. The metainformation contained in the HTTP headers in response to a HEAD request SHOULD be identical to the information sent in response to a GET request. This method can be used for obtaining metainformation about the entity implied by the request without transferring the entity-body itself. This method is often used for testing hypertext links for validity, accessibility, and recent modification.

https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4

```js
var head = require('http-head')

head('http://datos.gob.mx', function (err, headers) {
  t.equal(headers['content-type'], 'text/html; charset=utf-8')
})
```

```bash
➜  http-head git:(master) ✗ cat urls
http://datos.gob.mx
http://www.gob.mx
➜  http-head git:(master) ✗ cat urls | node lib/cli.js
{"server":"nginx/1.10.0","content-type":"text/html; charset=utf-8","content-length":"1819","x-powered-by":"Express","access-control-allow-origin":"*","access-control-allow-methods":"GET, PUT, POST, DELETE, OPTIONS","access-control-allow-headers":"Content-Type, Authorization, Content-Lenght, X-Requested-With","etag":"W/\"71b-+r94FKa09HvHd5PwyOXClA\"","date":"Sun, 18 Sep 2016 06:15:34 GMT","connection":"close","uri":"http://datos.gob.mx"}
{"server":"nginx","content-type":"text/html; charset=utf-8","content-length":"41820","x-frame-options":"SAMEORIGIN","x-xss-protection":"1; mode=block","x-content-type-options":"nosniff","etag":"W/\"c907c36d834ba2e71904200c4bebe10d\"","x-request-id":"6a657438-8f23-46b6-98e1-43f97523ee23","x-runtime":"0.068240","cache-control":"private, must-revalidate, max-age=0","date":"Sun, 18 Sep 2016 06:15:35 GMT","connection":"close","uri":"http://www.gob.mx"}
```

### Example

Run health checks on datasets hosted in CKAN:

```
geokan --format GeoJSON | jq '.[].uri' | http-head
```

### Similar work

[finnp/node-request-headers](https://github.com/finnp/node-request-headers)
