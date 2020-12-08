export function attachExitTasks(tasks: (() => void)[]): void {
  const runExitTasks = () =>
    Array.from(tasks).forEach((task) => task.call(null));

  process.on("SIGINT", runExitTasks);
  process.on("SIGTERM", runExitTasks);
}
