import { Express } from 'express-serve-static-core';

export async function startHttpServer(
  app: Express,
  port: number
): Promise<() => unknown> {
  console.info("Starting HTTP server");

  // start server
  const httpServer = app.listen(port, () => {
    console.info(`Listening on port ${port}`);
  });

  // handle connection events
  httpServer.on("connection", () => {
    console.info(`Started HTTP server`);
  });
  httpServer.on("close", () => {
    console.info(`HTTP server connection closed`);
  });

  // return exit tasks
  return () => {
    console.info("Stopping HTTP server");
    httpServer.close();
  };
}
