const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Construct MongoDB connection URI
    const mongoURI = `${process.env.MONGO_URI}/${process.env.DB_NAME}`;
    
    // Check if mongoURI is correctly set
    if (!mongoURI) {
      throw new Error('MongoDB URI or database name is not defined.');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
