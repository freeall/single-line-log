# single-line-log

Small Node.js module that keeps writing to the same line in the terminal. Very useful when you write progress bars, or a status message during longer operations.


## Installation

	npm install single-line-log


## Usage

``` js
var log = require('single-line-log');

var read = 0;
var size = fs.statSync('super-large-file').size;

var rs = fs.createReadStream('super-large-file');
rs.on('data', function(data) {
	read += data.length;
	var percentage = Math.floor(100*read/size);
	log('[' + percentage + '%]', read, 'bytes read');
});
```

## License

MIT