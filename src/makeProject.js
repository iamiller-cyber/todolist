export default function projectFactory(title, desc) {
  const tasks = [];

  const sortTasks = () => {
    tasks.sort((a, b) => a.priority - b.priority);
  };
  return { title, desc, tasks, sortTasks };
}
