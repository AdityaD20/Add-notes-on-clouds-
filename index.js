const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
// Connect to MongoDB
connectToMongo();
const app = express();
const port = 5000
 
 

 
app.use(cors());
//middlewear for API res fetch
app.use(express.json())

 
// Available Routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

  // app.get('/', (req, res) => {
  // res.send(' Server is up and running');
 // });
 
 
// Start the server
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
  console.log(`iNotebook backend Server is running on http://localhost:${PORT}`);
}); 