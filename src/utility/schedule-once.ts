const timerIds: NodeJS.Timer[] = [];

const clearTimers = () => {
  timerIds.forEach((timerId) => {
    clearTimeout(timerId);
  });

  timerIds.length = 0;
};

process.on("SIGINT", clearTimers);
process.on("SIGTERM", clearTimers);

export function scheduleOnce(
  func: (...args: any[]) => any,
  delay: number
): void {
  const timerId = setTimeout(func, delay);
  timerIds.push(timerId);
}
