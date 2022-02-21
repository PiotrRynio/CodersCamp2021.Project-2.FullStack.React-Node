import mongoose from 'mongoose';

export const connectToMongoDb = async () => {
  const mongoConnectionString = process.env.DATABASE_MONGODB_URL;

  await mongoose
    .connect(mongoConnectionString)
    .then(() =>
      console.log(
        `[MyApplication]: Application connected to mongoDB instance at: ${mongoConnectionString}`,
      ),
    )
    .catch((error) =>
      console.error(
        `[MyApplication]: Error while connecting to mongo db at: ${mongoConnectionString}`,
        error,
      ),
    );
};
