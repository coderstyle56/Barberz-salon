import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/salonDB"; // Change "salonDB" if needed

if (!global.mongoose) {
  global.mongoose = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default global.mongoose;

