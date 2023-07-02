export const projectArray = [
  {
    tasks: [],
    title: "New Tasks",
    desc: "Tasks created today",
  },
];

export default function projectFactory(title, desc) {
  const tasks = [];

  const sortTasks = () => {
    tasks.sort((a, b) => a.priority - b.priority);
  };

  projectArray.push({ title, desc, tasks, sortTasks });

  return { title, desc, tasks, sortTasks };
}
