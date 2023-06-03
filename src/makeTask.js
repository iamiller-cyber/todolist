export default function taskFactory(title, desc, due, priority, currentProj) {
  const isComplete = false;

  const lowerPriority = () => {
    priority -= 1;
  };

  const raisePriority = () => {
    prioirty += 1;
  };

  const complete = () => {
    isComplete = true;
  };

  return {
    title,
    desc,
    due,
    priority,
    currentProj,
    lowerPriority,
    raisePriority,
    complete,
  };
}
