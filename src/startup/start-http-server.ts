import { Express } from 'express-serve-static-core';

export async function startHttpServer(
  app: Express,
  port: number
): Promise<() => unknown> {
  console.info("Starting HTTP server");
  return new Promise((resolve, reject) => {
    // start server
    const httpServer = app.listen(port, () => {
      console.info(`HTTP server listening on port ${port}`);

      // return exit task
      const exitTask = () => {
        console.info("Stopping HTTP server");
        httpServer.close();
      };

      resolve(exitTask);
    });

    // handle connection events
    httpServer.on("error", (err) => {
      reject(err);
    });
    httpServer.on("close", () => {
      console.info(`HTTP server connection closed`);
    });
  });
}
