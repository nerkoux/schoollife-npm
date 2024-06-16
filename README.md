# Schoollife

Schoollife is an npm package that provides a collection of functions related to school life. It includes utilities for printing welcome messages, homework reminders, lunch specials, course registrations, exam reminders, project deadlines, club meetings, party reminders, and nostalgic quotes.

## Installation

To install the `schoollife` package, run the following command:

```bash
npm install schoollife
```

 ## Usage 
To use the schoollife package in your project, follow these steps:
1. Import the functions you want to use from the package:
   ```js
   const schoolUtils = require('schoollife');
   ```
3. Call the desired functions:
      ```js
      schoolUtils.welcomeToSchool(); // Output: Welcome to school!
      schoolUtils.homework('Math', 'algebra problems'); // Output: Don't forget to do your algebra problems for Math class!
      schoolUtils.lunchTime('Pizza'); // Output: Time for lunch! Today's special is Pizza.
      schoolUtils.nostalgia(); // Output: (random nostalgic quote related to school life)
      ```
 ## Avoiding ES6 Module Errors
  If you encounter an error related to ES6 modules when using the schoollife package, follow these steps to resolve the issue:
  1. In your project directory, create a package.json file if it doesn't already exist:
     ```js
     npm init -y
     ```
  2. Open the ```package.json``` file and add the following line:
```js
     {
    "type": "module"
    }
```
3. Rename your entry file (e.g., index.js) to index.mjs (or any other extension that Node.js recognizes as an ES6 module, like .js with "type": "module" in package.json).
4. Import the schoollife package using the ES6 module syntax:
   ```js
   import * as schoolUtils from 'schoollife';
   ```
6. Run your script using the node command with the ```--loader=module flag```:
   ```js
   node --loader=module index.mjs
   ```

   ## Test File 
      ```js
      import fetch from 'node-fetch';
      import * as schoolUtils from './index.js';
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
      schoolUtils.nostalgia();
      ```

   # Contribution
   If you would like to contribute to the schoollife package, feel free to submit a pull request or open an issue on the GitHub repository.
