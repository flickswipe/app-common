const timerIds: NodeJS.Timer[] = [];

const clearTimers = () => {
  timerIds.forEach((timerId) => {
    clearInterval(timerId);
  });

  timerIds.length = 0;
};

process.on("SIGINT", clearTimers);
process.on("SIGTERM", clearTimers);

export function scheduleRepeat(
  func: (...args: any[]) => any,
  delay: number
): void {
  const timerId = setInterval(func, delay);
  timerIds.push(timerId);
}
