# Intermed-Dev-1-JS-Custom-alert-buttons-in-React

## About This Project

This React app demonstrates **props and event handling** using a Toolbar component with three reusable AlertButton components. Each button receives a unique label via the `children` prop and a unique alert message via the `message` prop. Clicking any button triggers a browser alert with that button's specific message.

Built with React and Vite.

## How to Run

```bash
cd alert-button-toolbar
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How to Run Tests

```bash
cd alert-button-toolbar
npm test
```

8 tests total — 5 normal cases, 3 edge cases.

## Video Demo Reference

### What to Show
- The running app with three styled buttons (Play, Record, Upload)
- Clicking each button → the correct alert appears for that button
- The test output showing all 8 passing

### What to Say

**Project overview**
- Built a reusable `AlertButton` component that accepts `message` and `children` as props
- Composed three instances of it inside a `Toolbar` component, each with unique content
- Integrated `Toolbar` into `App.jsx`

**Props concept**
- Props are how React components receive data from their parent
- `children` is a special prop — it's whatever you put between the opening and closing tags of a component
- `message` is a custom prop passed as an attribute, used to control what the alert says
- The same `AlertButton` component behaves differently depending on what props it receives

**Component structure**
- `AlertButton` defines the behavior — it reads `props.children` for the label and `props.message` for the alert
- `Toolbar` is the parent — it decides what each button says and does by passing prop values
- `App` renders `Toolbar`, keeping the top level clean

**Normal test cases**
- Play, Record, and Upload buttons each display the correct label text
- Clicking each button triggers the correct alert message
- Toolbar renders all three buttons together

**Edge test cases**
- Clicking Play does not trigger Record or Upload alert messages
- Rapid clicks each fire an alert — no clicks are dropped
- Buttons are keyboard accessible — pressing Enter also triggers the alert

---

## 📝 Overview

In this assignment, you will develop a React application featuring a **Toolbar** component that houses multiple **AlertButton** components. This project is designed to strengthen your understanding of how to pass data via props (including the special `children` prop) and how to execute specific logic using event handlers.

> **Note:** While this assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite.

---

## 🎯 Objective

- Implement a reusable component that accepts and utilizes multiple props.
- Understand the `children` prop for nesting content within components.
- Apply event handlers to trigger dynamic browser alerts based on component data.

---

## 🛠 Assignment Details

### 1. Setup Your React Environment

We will use Vite to initialize your project. Vite provides a modern development environment with a "Hot Module Replacement" (HMR) system that uses WebSockets (WS) to update your browser instantly as you save your code.

**Initialize the project:**
```bash
npm create vite@latest alert-button-toolbar -- --template react
```

**Navigate to the project folder:**
```bash
cd alert-button-toolbar
```

**Install Dependencies:**
```bash
npm install
```

**Launch the Development Server:**
```bash
npm run dev
```

> **Note:** Ensure you name your files with the `.jsx` extension. This is required by Vite to correctly parse your React code.

---

### 2. Create the AlertButton Component

**Component Structure:** Implement an `AlertButton` component that takes `message` and `children` as props.

**Tasks:**
- Attach an `onClick` event handler to the button that triggers a browser `alert()` displaying the `message` prop content.
- Set the button's visible text by rendering the `children` prop inside the button tags.

---

### 3. Build the Toolbar Component

**Implementation:** Develop a `Toolbar` component that renders multiple `AlertButton` components.

**Dynamic Behavior:**
- Render at least two (or more) `AlertButton` components.
- Provide a unique `message` and unique `children` text for each button (e.g., a "Play" button and an "Upload" button).

---

### 4. Testing

Open your browser to the local address provided by Vite (usually [http://localhost:5173](http://localhost:5173)).

**Validation:** Ensure that clicking each button in the toolbar triggers an alert with the correct message corresponding specifically to that button.

---

## 📚 Relevant Study Material & Exercises

Review these W3Schools tutorials and practice exercises to help you complete the tasks:

| Topic | W3Schools Link | Key Concept |
|-------|---------------|-------------|
| React Props | [React Props Tutorial](https://www.w3schools.com/react/react_props.asp) | Passing data to components. |
| The children Prop | [React Props (Children)](https://www.w3schools.com/react/react_props.asp) | Using the children property. |
| React Events | [Handling Events](https://www.w3schools.com/react/react_events.asp) | Using onClick in React. |
| Props Exercise | [Props Practice Quiz](https://www.w3schools.com/react/exercise.asp?filename=exercise_props1) | Test your knowledge of props. |

---

## 📬 Assignment Submission

Once you have completed the assignment, please prepare the following for submission:

### GitHub Repository
- Push your program to a new GitHub repository.
- Ensure that your repository is **public** so that it can be accessed and reviewed.
- Your repository should include all source code files and a `README.md` file that briefly describes the project and how to run it.

### Demonstration
Provide a video demonstrating your program in action. The demonstration should include:
- Show the program's functionality.
- Present test cases and demonstrate that you are passing those cases.
  - At least **3 normal test cases**
  - At least **3 edge case test cases**

### Submission
- Submit the link to your GitHub repository.
- Include a link to your video demonstration (YouTube link — public or unlisted).
