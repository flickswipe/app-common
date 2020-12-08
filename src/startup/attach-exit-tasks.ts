import { EventEmitter } from 'events';

export function attachExitTasks(
  process: EventEmitter,
  tasks: (() => void)[]
): void {
  const runExitTasks = () => tasks.forEach((task) => task.call(null));

  process.on("SIGINT", () => {
    console.info("Interrupt signal received");
    runExitTasks();
  });

  process.on("SIGTERM", () => {
    console.info("Terminate signal received");
    runExitTasks();
  });
}
