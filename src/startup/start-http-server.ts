import { Express } from 'express-serve-static-core';

export async function startHttpServer(
  app: Express,
  port: number
): Promise<() => unknown> {
  console.info("Starting HTTP server");
  return new Promise((resolve, reject) => {
    // start server
    const httpServer = app.listen(port, () => {
      console.info(`Listening on port ${port}`);
    });

    // handle exit task
    const exitTask = () => {
      console.info("Stopping HTTP server");
      httpServer.close();
    };

    // handle connection events
    httpServer.on("error", (err) => {
      reject(err);
    });
    httpServer.on("connection", () => {
      console.info(`Started HTTP server`);
      resolve(exitTask);
    });
    httpServer.on("close", () => {
      console.info(`HTTP server connection closed`);
    });
  });
}
