const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set({ strictQuery: true });
    // const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@ejazcluster.fnmxosh.mongodb.net/myContact-backend"
    );

    console.log("Database connected", connect.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
