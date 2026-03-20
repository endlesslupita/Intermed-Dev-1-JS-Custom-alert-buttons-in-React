# Intermed-Dev-1-JS-Custom-alert-buttons-in-React

📝 Overview
In this assignment, you will develop a React application featuring a Toolbar component that houses multiple AlertButton components. This project is designed to strengthen your understanding of how to pass data via props (including the special children prop) and how to execute specific logic using event handlers.

Note: While this assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite.

 

🎯 Objective
Implement a reusable component that accepts and utilizes multiple props.
Understand the children prop for nesting content within components.
Apply event handlers to trigger dynamic browser alerts based on component data.
 

🛠 Assignment Details
1. Setup Your React Environment
We will use Vite to initialize your project. Vite provides a modern development environment with a "Hot Module Replacement" (HMR) system that uses WebSockets (WS) to update your browser instantly as you save your code.

Initialize the project: Run the following in your terminal:
Bash

npm create vite@latest alert-button-toolbar -- --template react

Navigate to the project folder:
Bash

cd alert-button-toolbar

Install Dependencies: 
Bash 

npm install

Launch the Development Server:
Bash

npm run dev

Note: Ensure you name your files with the .jsx extension. This is required by Vite to correctly parse your React code.
2. Create the AlertButton Component
Component Structure: Implement an AlertButton component that takes message and children as props.
Tasks:
Attach an onClick event handler to the button that triggers a browser alert() displaying the message prop content.
Set the button's visible text by rendering the children prop inside the button tags.
3. Build the Toolbar Component
Implementation: Develop a Toolbar component that renders multiple AlertButton components.
Dynamic Behavior: * Render at least two (or more) AlertButton components.
Provide a unique message and unique children text for each button (e.g., a "Play" button and an "Upload" button).
4. Testing
Open your browser to the local address provided by Vite (usually http://localhost:5173).
Validation: Ensure that clicking each button in the toolbar triggers an alert with the correct message corresponding specifically to that button.
 

📚 Relevant Study Material & Exercises
Review these W3Schools tutorials and practice exercises to help you complete the tasks:

Topic

W3Schools Link

Key Concept

React Props

React Props TutorialLinks to an external site.

Passing data to components.

The children Prop

React Props (Children)Links to an external site.

Using the children property.

React Events

Handling EventsLinks to an external site.

Using onClick in React.

Props Exercise

Props Practice QuizLinks to an external site.

Test your knowledge of props.



Assignment Submission:
Once you have completed the assignment, please prepare the following for submission:

GitHub Repository:

Push your program to a new GitHub repository.
Ensure that your repository is public so that it can be accessed and reviewed.
Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.
Demonstration:

Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)
Submission:

Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)