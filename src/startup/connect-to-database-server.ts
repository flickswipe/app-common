import { Mongoose } from 'mongoose';

export async function connectToDatabaseServer(
  mongoose: Mongoose,
  uri: string,
  user: string,
  pass: string,
  dbName: string
): Promise<() => unknown> {
  console.info("Connecting to database server");

  // handle connection events
  mongoose.connection.on("connected", () => {
    console.info(`Connected to database server`);
  });
  mongoose.connection.on("disconnected", () => {
    console.info(`Database server connection lost`);
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
  return () => {
    console.info("Closing connecting to database server");
    mongoose.connection.close();
  };
}
