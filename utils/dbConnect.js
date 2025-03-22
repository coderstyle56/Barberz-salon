import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Global connection cache to prevent multiple connections
let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    console.log("Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Fail fast (5 seconds instead of 30s)
      bufferCommands: false, // Disable mongoose buffering (ensures fast queries)
    });
  }

  cached.conn = await cached.promise;
  console.log("Connected to MongoDB successfully!");

  return cached.conn;
}

export default dbConnect;

