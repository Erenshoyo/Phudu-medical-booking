export const checkAvailability = (availableDays, availableTime) => {
  const now = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[now.getDay()];

  if(!availableDays.includes(currentDay)){
    return false;
  }

  const parseTime = (timeStr) => {
    const date = new Date();
    const [hours, minutes]= timeStr.split(":").map(Number);
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const startTime = parseTime(availableTime.start);
  const endTime =  parseTime(availableTime.end);

  return now => startTime && now <= endTime
};
