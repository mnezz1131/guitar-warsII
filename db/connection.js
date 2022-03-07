import mongoose from 'mongoose'
let MONGODB_URI = process.env.PROD_MONGODB ||'mongodb://127.0.0.1:27017/guitarWarsTwo'

mongoose
  .connect(MONGODB_URI)
  .catch((error) => console.error("Error connection to MongoDB...", error.message));

  // Uncomment to debug Mongoose queries
// mongoose.set('debug', true)

// This is for Model.findByIdAndUpdate method, specifically the so that { new: true} is the default
// Learn more: https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
mongoose.set('returnOriginal', false)

  // Listen to MongoDB events
// Learn more: https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))

// Listen to any errors while connected to MongoDB
// Learn more: https://mongoosejs.com/docs/connections.html#error-handling
mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

// Export the connection
export default mongoose.connection