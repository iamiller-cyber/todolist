export const projectArray = [];

export default function projectFactory(title, desc) {
  const tasks = [];

  const sortTasks = () => {
    tasks.sort((a, b) => a.priority - b.priority);
  };

  projectArray.push({ title, desc, tasks, sortTasks });

  return { title, desc, tasks, sortTasks };
}
