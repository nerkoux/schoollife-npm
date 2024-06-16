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

      ## API Support
      You can also set up your own API server using the schoollife package. Follow these steps:
   1. Create a new directory named api and then file called index.js and after creating a index.js file then create new directory named 'public' and add the following code:
      ```js
      import express from 'express';
      import path from 'path';
      import { fileURLToPath } from 'url';
      import cors from 'cors';
      import {
      welcomeToSchool,
      homework,
      lunchTime,
      registration,
      examReminder,
      projectDeadline,
      clubMeeting,
      partyReminder,
      nostalgia,
      } from 'schoollife';

      const app = express();
      const port = process.env.PORT || 3000;

      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      app.use(express.json());
      app.use(cors());
      app.use(express.static(path.join(__dirname, 'public')));

      app.get('/api/welcome', (req, res) => {
      res.json({ message: welcomeToSchool() });
      });

      app.get('/api/homework', (req, res) => {
      const { subject, assignment } = req.query;
      res.json({ message: homework(subject, assignment) });
      });

      app.get('/api/nostalgia', async (req, res) => {
      try {
      const quote = await nostalgia();
      res.json({ quote: quote });
      } catch (error) {
      console.error('Error in nostalgia route:', error);
      res.status(500).json({ error: 'Failed to fetch quote.' });
      }
      });

      app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
      });

      app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
      });

      app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
      });

      app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
      });
      ```
   2. Create a public directory in your project root and add an index.html file to it with the following content:
  
     ```
     <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Utilities</title>
    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    input, button {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
    }
    button {
      background-color: #28a745;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #218838;
    }
    .result {
      margin-top: 20px;
      font-size: 1.2em;
    }
  </style>
  </head>
  <body>
  <div class="container">
    <h1>Homework Reminder</h1>
    <form id="homework-form">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required>
      
      <label for="assignment">Assignment:</label>
      <input type="text" id="assignment" name="assignment" required>
      
      <button type="submit">Get Reminder</button>
    </form>
    <div class="result" id="result"></div>
  </div>

  <script>
    document.getElementById('homework-form').addEventListener('submit', async function(event) {
      event.preventDefault();
      const subject = document.getElementById('subject').value;
      const assignment = document.getElementById('assignment').value;
      
      try {
        const response = await fetch(`/api/homework?subject=${subject}&assignment=${assignment}`);
        const data = await response.json();
        document.getElementById('result').innerText = data.message;
      } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Failed to get reminder.';
       }
       });
     </script>
    </body>
    </html>
   ```
3. Update your package.json to include a api start script:
  ```
  {
  "name": "schoollife",
  "version": "1.0.5",
  "description": "Utilities for school life",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "api": "node /api/index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "node-fetch": "^2.6.1",
    "cors": "^2.8.5"
  }
  }

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
