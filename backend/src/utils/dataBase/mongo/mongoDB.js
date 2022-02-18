import mongoose from 'mongoose';

export const connectToMongoDb = async () => {
  console.log('przed await');
  console.log(process.env.DATABASE_MONGODB_URL);
  await mongoose.connect(process.env.DATABASE_MONGODB_URL);
  console.log('po await');
};
