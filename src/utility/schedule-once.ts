export function scheduleOnce(
  func: (...args: any[]) => any,
  delay: number
): void {
  const timerId = setTimeout(func, delay);

  process.on("SIGINT", () => clearTimeout(timerId));
  process.on("SIGTERM", () => clearTimeout(timerId));
}
