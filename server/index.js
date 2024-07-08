const express = require('express'); // Add this line to import express

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file

const authRoutes = require('./routes/auth.js');
const listingRoutes = require('./routes/listing.js');
const userRoutes = require('./routes/user.js');
const bookingRoutes = require('./routes/booking.js');

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

/* Serve static files from the "public" directory */
app.use(express.static('public'));

/* ROUTES */
app.use('/auth', authRoutes);
app.use('/properties', listingRoutes);
app.use('/users', userRoutes);
app.use('/bookings', bookingRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001; // Default to 3001 if PORT is not specified

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
  });

module.exports = app; // Export your Express app if needed for testing

