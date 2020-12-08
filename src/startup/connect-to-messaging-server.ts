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
  // connect to server
  await natsWrapper.connect(clusterId, clientId, url);

  // handle disconnect
  natsWrapper.client.on("disconnect", () => {
    console.error(`NATS connection lost`);
    process.exit();
  });

  // attach listeners
  Listeners.forEach((Listener) => new Listener(natsWrapper.client).listen());

  // return exit tasks
  return () => natsWrapper.client.close();
}
