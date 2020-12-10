interface TransporterWrapper {
  transporter: any;
  connect(
    port: number,
    host: string,
    user: string,
    pass: string,
    opts: Record<string, unknown>
  ): Promise<unknown>;
}

export async function connectToMailServer(
  transporterWrapper: TransporterWrapper,
  port: number,
  host: string,
  user: string,
  pass: string,
  senderAddress: string
): Promise<any> {
  console.info("Connecting to mail server");

  await transporterWrapper.connect(
    port,
    host,
    user,
    pass,
    // mail option defaults
    {
      from: senderAddress,
    }
  );

  console.info("Connected to mail server");

  // return exit tasks
  return () => {
    console.info("Closing connection to mail server");
    transporterWrapper.transporter.close();
  };
}
