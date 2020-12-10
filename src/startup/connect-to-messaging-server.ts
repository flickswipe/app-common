interface NatsWrapper {
  client: any;
  connect(clusterId: string, clientId: string, url: string): Promise<unknown>;
}

export async function connectToMessagingServer(
  natsWrapper: NatsWrapper,
  clusterId: string,
  clientId: string,
  url: string,
  Listeners: any[] = []
): Promise<() => void> {
  console.info("Connecting to messaging server");

  // connect to server
  await natsWrapper.connect(clusterId, clientId, url);

  // handle disconnect
  natsWrapper.client.on("disconnect", () => {
    console.error(`Messaging server connection lost`);

    console.info("Exiting process");
    process.exitCode = 1;
  });

  // attach listeners
  Listeners.filter((func) => typeof func === "function").forEach((Listener) => {
    console.info(
      `Listening to ${Listener.name.replace(/Listener$/, " events")}`
    );
    new Listener(natsWrapper.client).listen();
  });

  // return exit tasks
  return () => {
    console.info("Closing connection to messaging server");
    natsWrapper.client.close();
  };
}
