let exiting = false;

const timerIds: NodeJS.Timer[] = [];

const clearTimers = () => {
  exiting = true;

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
  if (!exiting) {
    const timerId = setTimeout(func, delay);
    timerIds.push(timerId);
  }
}
