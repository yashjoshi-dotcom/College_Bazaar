import app from './app';
import http from 'http';

// Alloting Port Number
const port = process.env.PORT || 5000;

// Creating the server
const server = http.createServer(app);

// Listening on the required Port.
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
