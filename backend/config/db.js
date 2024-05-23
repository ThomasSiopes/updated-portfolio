require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.VITE_MONGODB_URI;

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    console.log("Trying " + db)
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;