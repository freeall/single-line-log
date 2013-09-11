var written = -1;
var log = function() {
	if (process.stdout.bytesWritten === written) process.stdout.moveCursor(0,-1);
	process.stdout.clearLine();
	console.log.apply(console, arguments);
	process.stdout.clearLine();
	written = process.stdout.bytesWritten;
};

module.exports = log;

if (require.main !== module) return;

var count=0;
setInterval(function() {
	if (count === 10000) return;
	log('#'+(count++));
}, 50);
