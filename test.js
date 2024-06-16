const schoolUtils = require('./index');

schoolUtils.registration(['Computer Science', 'Calculus', 'English Lit']);
// Output: You have registered for the following courses: Computer Science, Calculus, English Lit

schoolUtils.examReminder('Physics', 'June 20th');
// Output: Don't forget! Your Physics exam is on June 20th.

schoolUtils.projectDeadline('Web Development', 'July 1st');
// Output: Your Web Development project is due on July 1st. Better start working on it!

schoolUtils.clubMeeting('Chess', 'Fridays', '5 PM');
// Output: The Chess club meeting is on Fridays at 5 PM.

schoolUtils.partyReminder('Spring Break', 'Beach House', 'March 15th');
// Output: Hey, there's a Spring Break party at Beach House on March 15th. Don't miss it!