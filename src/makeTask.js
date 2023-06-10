import differenceInDays from "date-fns/differenceInDays";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";

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
