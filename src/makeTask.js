export default function taskFactory(
  title,
  desc,
  year,
  month,
  day,
  hours,
  priority,
  currentProj
) {
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

  const checkDate = () => due;

  const checkPriority = () => {
    if (this.due === Date() && this.priority > 0) {
    }
  };

  taskArray.push({
    title,
    desc,
    due: new Date(year, month, day, hours),
    priority,
    currentProj,
    lowerPriority,
    raisePriority,
    complete,
  });

  return {
    title,
    desc,
    due: new Date(year, month, day, hours),
    priority,
    currentProj,
    lowerPriority,
    raisePriority,
    complete,
  };
}

export const taskArray = [];
