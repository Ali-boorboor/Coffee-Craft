import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const isConnectionReady = mongoose.connections[0].readyState;

    if (isConnectionReady) return false;

    await mongoose.connect(process.env.DB_CONNECTION_STRING!);

    console.log("# Connected to db successfully !");
  } catch (error) {
    console.log("# Error in db connection =>", error);
  }
};

export default connectToDB;
