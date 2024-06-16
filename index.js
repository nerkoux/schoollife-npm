import fetch from 'node-fetch';

function welcomeToSchool() {
  console.log("Welcome to school!");
}

function homework(subject, assignment) {
  console.log(`Don't forget to do your ${assignment} for ${subject} class!`);
}

function lunchTime(food) {
  console.log(`Time for lunch! Today's special is ${food}.`);
}

function registration(courses) {
  console.log(`You have registered for the following courses: ${courses.join(', ')}`);
}

function examReminder(subject, date) {
  console.log(`Don't forget! Your ${subject} exam is on ${date}.`);
}

function projectDeadline(project, dueDate) {
  console.log(`Your ${project} project is due on ${dueDate}. Better start working on it!`);
}

function clubMeeting(club, day, time) {
  console.log(`The ${club} club meeting is on ${day} at ${time}.`);
}

function partyReminder(party, location, date) {
  console.log(`Hey, there's a ${party} party at ${location} on ${date}. Don't miss it!`);
}

async function nostalgia() {
  try {
    const response = await fetch('https://api.quotable.io/quotes/random?tags=life%7Cschool');
    const data = await response.json();

    if (response.ok && data.length > 0) {
      const quote = data[0].content;
      console.log(quote);
    } else {
      console.log('Failed to fetch quote.');
    }
  } catch (error) {
    console.error('Error:', error);
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