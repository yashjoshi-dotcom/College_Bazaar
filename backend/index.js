const app = require('./app');
const server = require('http').createServer(app);

// Alloting Port Number
const port = process.env.PORT || 5000;

// Listening on the required Port.
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
