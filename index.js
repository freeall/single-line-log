var MOVE = new Buffer('1b5b3130303044', 'hex').toString();

var write = process.stdout.write;
var str;

process.stdout.write = function(data) {
	if (str && data !== str) {
		str = null;
		write.call(this, '\n');
	}
	write.apply(this, arguments);
};

process.on('exit', function() {
	if (str !== null) process.stdout.write('');
});

var log = function() {
	var prev = str || '';
	str = MOVE+Array.prototype.join.call(arguments, ' ');
	while (str.length < prev.length) str += ' ';
	process.stdout.write(str);
};

module.exports = log;

if (require.main !== module) return;

var count=0;
setInterval(function() {
	if (count === 10000) return;
	log('#'+(count++));
}, 50);