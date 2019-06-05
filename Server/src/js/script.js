const http = require('http');
const fs = require('fs');
const moduleDate = require('./moduleDate');

fs.readFile('../index.html', (err, html) => {
	if (err) {
		throw err;
	}
	http.createServer((request, response) => {
		response.writeHeader(200, { 'Content-Type': 'text/html' });
		console.log(moduleDate.gettingDate());
		response.write(html);
		fs.appendFile('../index.html', 'Where module result should be.', (errAppend) => {
			if (errAppend) {
				console.log(errAppend);
			}
		});
		response.end();
	}).listen(8000);
});
