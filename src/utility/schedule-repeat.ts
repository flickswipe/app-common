let exiting = false;

const timerIds: NodeJS.Timer[] = [];

const clearTimers = () => {
  console.log(`clearing ${timerIds.length} timers`);
  exiting = true;

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
  console.log(`scheduleRepeat ${delay} ${exiting}`, func);

  if (!exiting) {
    const timerId = setInterval(func, delay);
    timerIds.push(timerId);
  }
}
