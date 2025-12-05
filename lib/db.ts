import mongoose from "mongoose";

const MONGO_DB_URI = process.env.MONGO_DB_URI!;

if (!MONGO_DB_URI) {
  throw new Error("❌ MONGODB_URI is missing in .env");
}

// Global cache (prevents multiple connections during hot reload)
let cached = global.mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function ConnectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise =
      mongoose
        .connect(MONGO_DB_URI, {
          dbName: "scannreview",
          bufferCommands: false,
        })
        .then((mongoose) => {
          console.log("🚀 MongoDB Connected");
          return mongoose;
        })
        .catch((err) => {
          console.error("❌ MongoDB Connection Error:", err);
          throw err;
        });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}


