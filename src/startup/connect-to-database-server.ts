import { Mongoose } from 'mongoose';

export async function connectToDatabaseServer(
  mongoose: Mongoose,
  uri: string,
  user: string,
  pass: string,
  dbName: string
): Promise<() => void> {
  // handle connection events
  mongoose.connection.on("connected", () => {
    console.info(`Connected to MongoDb`);
  });
  mongoose.connection.on("disconnected", () => {
    console.info(`MongoDb connection lost`);
  });

  // connect to server
  await mongoose.connect(uri, {
    user,
    pass,
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  // return exit tasks
  return () => mongoose.connection.close();
}
