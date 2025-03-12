import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

console.log("MongoDB URI:", process.env.MONGODB_URI);

if (!MONGODB_URI) {
  console.log("MongoDB URI:", process.env.MONGODB_URI);

  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process if connection fails
  }
}

export default dbConnect;
