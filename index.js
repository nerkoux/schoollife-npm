import fetch from 'node-fetch';

function welcomeToSchool() {
  return "Welcome to school!";
}

function homework(subject, assignment) {
  return `Don't forget to do your ${assignment} for ${subject} class!`;
}

function lunchTime(food) {
  return `Time for lunch! Today's special is ${food}.`;
}

function registration(courses) {
  return `You have registered for the following courses: ${courses.join(', ')}`;
}

function examReminder(subject, date) {
  return `Don't forget! Your ${subject} exam is on ${date}.`;
}

function projectDeadline(project, dueDate) {
  return `Your ${project} project is due on ${dueDate}. Better start working on it!`;
}

function clubMeeting(club, day, time) {
  return `The ${club} club meeting is on ${day} at ${time}.`;
}

function partyReminder(party, location, date) {
  return `Hey, there's a ${party} party at ${location} on ${date}. Don't miss it!`;
}

async function nostalgia() {
  try {
    const response = await fetch('https://api.quotable.io/quotes/random?tags=life%7Cschool');
    const data = await response.json();

    if (response.ok && data && data.length > 0 && data[0].content) {
      return data[0].content; // Return the quote
    } else {
      return 'Failed to fetch quote.';
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Error fetching quote.';
  }
}

export {
  welcomeToSchool,
  homework,
  lunchTime,
  registration,
  examReminder,
  projectDeadline,
  clubMeeting,
  partyReminder,
  nostalgia,
};
