export function scheduleRepeat(
  func: (...args: any[]) => any,
  delay: number
): void {
  const timerId = setInterval(func, delay);

  process.on("SIGINT", () => clearInterval(timerId));
  process.on("SIGTERM", () => clearInterval(timerId));
}
