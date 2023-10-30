const mongoose = require('mongoose');

const DB = 'mongodb+srv://placement:vishnu123@cluster0.spizynl.mongodb.net';

// Configure the useNewUrlParser option when connecting to MongoDB
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Add this option as well
})
  .then(() => {
    console.log('Connected to MongoDB Vishnu Bhaiya');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
