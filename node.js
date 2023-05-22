const express = require('express');
const path = require('path');

const app = express();

// Set the public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to serve the website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
