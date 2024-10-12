const event = {
  eventName: "Workshop KSM Android",
  date: "2024-10-10",
  attendees: ["Valtritzt", "Billy"],
};

function addAttendees(event, newAttendees) {
  const updatedEvent = {
    ...event,
    attendees: [...event.attendees, ...newAttendees], 
  };

  return updatedEvent;
}

const newAttendees = ["Rahel V", "Pak Dengklek"];
const updatedEvent = addAttendees(event, newAttendees);
console.log(updatedEvent);
