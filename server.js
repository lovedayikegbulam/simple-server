const http = require("http");

const hostname = "localhost";
const port = 8900;

// Add Request Listener to the server
const requestListener = function (request, response) {
	response.writeHead(200); // Status code 200 = OK
	response.write("Loveday Ikegbulam");
	response.end();
};

// Create the server
const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
