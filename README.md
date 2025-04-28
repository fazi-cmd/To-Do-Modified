📝 To-Do App with useRef
This is a simple To-Do application built using React. Initially, the app was built using only the useState hook for managing state, but it has now been refactored to use the useRef hook for certain operations, enhancing the performance and behavior of the app.

 Why we use Ref?
1. Avoiding Unnecessary Re-renders
2. Accessing DOM Elements
Ref provides a way to directly reference and manipulate DOM elements. State is not suitable for this purpose.

Example: Using ref to focus on an input element programmatically.

3. Storing Mutable Values Without Re-renders
Ref is ideal for storing values that do not affect the UI but need to persist across renders. State is meant for values that impact the UI.

Example: Keeping track of a previous value or a mutable counter that doesn’t need to trigger re-renders.

Features
Add New Tasks: Users can add new tasks to the list.

Mark Tasks as Completed: Tasks can be marked as completed.

Delete Tasks: Tasks can be deleted from the list.

Improved Performance with useRef: By using useRef, certain DOM operations and references are optimized, improving performance.

Technologies Used
React

useRef Hook

useState Hook
How to Use
Add tasks using the input field and clicking the "Add Task" button.

Mark tasks as completed by clicking on them.

Delete tasks by clicking the "Delete" button next to each task.

Live Demo: https://todorealmodefied.netlify.app/
