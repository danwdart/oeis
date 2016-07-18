# OEIS

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
    .then((result) => result.json())
    .then((text) => console.log(text));
`

### `searchByID`: search for a specific sequence by ID

Input: integer

Returns: Promise (resolving an object, rejecting an HTTP error)

Example:

`searchByID(42); // Promise`

### `searchByID`: search for a specific sequence by ID

Input: integer

Returns: Promise (resolving an object, rejecting an HTTP error)

Example:

`searchByID(42); // Promise`

### `plot`: returns a HTML or PNG plot of a sequence by number

Input: integer (sequence number), boolean (whether to return PNG)

Returns: Promise (resolving HTML or PNG data, rejecting an HTTP error)

Example:

`plot(42, true); // Promise`


# Credits

Written by Kathie Dart <npm@kathiedart.uk>

I stole the endpoints from this Stack Overflow post:

http://stackoverflow.com/a/38421600/1764563
