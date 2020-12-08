interface TransporterWrapper {
  connect(
    port: number,
    host: string,
    user: string,
    pass: string,
    opts: Record<string, unknown>
  ): Promise<any>;
}

export async function connectToMailServer(
  transporterWrapper: TransporterWrapper,
  port: number,
  host: string,
  user: string,
  pass: string,
  senderAddress: string
): Promise<any> {
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
}
