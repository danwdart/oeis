# OEIS

[![Greenkeeper badge](https://badges.greenkeeper.io/danwdart/oeis.svg)](https://greenkeeper.io/)

Connects and extracts information from the OEIS database located at http://oeis.org

## Using

Assuming methodname is the method you wish to use:

### ES5
`var method = require('oeis').methodname;`

### ES2015+
`import methodname from 'oeis';`

## Methods

### `searchBySequence`: search for a number sequence

Parameter: Array for the sequence, optional integer for the search start

Returns: Promise (resolving an object, rejecting an HTTP error)

Example:

`
oeis.searchBySequence([1,1,2,3,5])
    .then((obj) => console.log(obj));
`

### `searchByID`: search for a specific sequence by ID

Input: integer

Returns: Promise (resolving an object, rejecting an HTTP error)

Example:

`
oeis.searchByID(42)
    .then((obj) => console.log(obj));
`

### `plot`: returns a HTML or PNG plot of a sequence by number

Input: integer (sequence number), boolean (whether to return PNG)

Returns: Promise (resolving HTML or PNG data, rejecting an HTTP error)

Example:

`
oeis.plot(42, true)
    .then((pngData) => console.log(pngData));
`


# Credits

Written by Dan Dart <npm@dandart.co.uk>

I stole the endpoints from this Stack Overflow post:

http://stackoverflow.com/a/38421600/1764563
