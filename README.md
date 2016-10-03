# single-line-log

Node.js module that keeps writing to the same line in the console (or a stream). Very useful when you write progress bars, or a status message during longer operations. Supports multilines.


## Installation

	npm install single-line-log


## Usage

``` js
var log = require('single-line-log').stdout;
// or pass any stream:
// var log = require('single-line-log')(process.stdout);

var read = 0;
var size = fs.statSync('super-large-file').size;

var rs = fs.createReadStream('super-large-file');
rs.on('data', function(data) {
	read += data.length;
	var percentage = Math.floor(100*read/size);

	// Keep writing to the same two lines in the console
	log('Writing to super large file\n[' + percentage + '%]', read, 'bytes read');
});
```

## .clear()

Clears the log (i.e., writes a newline).

``` js
var log = require('single-line-log').stdout;

log('Line 1'); // Output is `Line 1`
log.clear(); // Output is ``
log('Line 2'); // Output is `Line 2`
```

## .keepOutput()

Keeps the current output, and begins a new buffer.

``` js
var log = require('single-line-log').stdout;

log('Line 1\n'); // Output is `Line 1\n`
log.keepOutput(); // Output is `Line 1\n`
log('Line 2\n'); // Output is `Line 1\nLine 2\n`
log('Line 3\n'); // Output is `Line 1\nLine 3\n`
```

## .stdout

Outputs to `process.stdout`.


## .stderr

Outputs to `process.stderr`.


## License

MIT