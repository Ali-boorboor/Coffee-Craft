import mongoose from "mongoose";

interface MongooseCache {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache;
}

const cached: MongooseCache = global.mongooseCache || {
  connection: null,
  promise: null,
};

export default async function connectToDB() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.DB_CONNECTION_STRING!)
      .then((mongoose) => mongoose);
  }

  cached.connection = await cached.promise;
  global.mongooseCache = cached;

  console.log("# Connected to DB successfully!");
  return cached.connection;
}
