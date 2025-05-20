# File Explorer App - Assesment for Developer intern at DevifyX

This React-based File Explorer simulates a core part of a developer interface — a File/Folder Tree — similar to what you find in IDEs like VS Code.

Both core and some bonus features are implemented:-

Tree View Rendering from JSON
Expand/Collapse folders
Drag and Drop (files & folders)
Rename, Add, Delete nodes
Persistent state via `localStorage` or JSON export/import
Styled with Tailwind CSS
Uses modern React features

Tech Stack used:-

React (Vite + Functional Components)
Tailwind CSS for styling
React DnD or Dnd Kit for drag-and-drop
Optional: Zustand or Context API for state management
Icon Libraries like `react-icons` or `lucide-react`

Setup Instructions
Clone the repository git clone https://github.com/your-username/file-explorer-app.git cd file-explorer-app

Install dependencies
npm install
or
yarn

Start the development server
npm run dev
or
yarn dev

Open in your browser http://localhost:5173

You’re all set! Explore the file explorer, drag & drop nodes, and manage your tree.


Given Project Description:-

Developer Assignment – File/Folder Tree UI

Simulator (React)

Assignment Overview
This assignment simulates a core part of a developer interface — a File/Folder Tree — similar
to what you find in IDEs like VS Code.

Your task is to create a fully functional and interactive File/Folder Tree UI us-
ing React. This tree must support expanding/collapsing folders, dragging and dropping

files/folders, renaming, adding, and deleting nodes. The state should persist across page
refreshes using localStorage or via JSON export/import.
You are allowed and encouraged to use ChatGPT or similar AI tools to assist
you in planning and developing this project.
Timeline
You are expected to complete and submit this assignment within 5 days. You can reach
out at any time if you need clarification.
Tech Requirements
• React (functional components only)
• React DnD, DnD Kit, or any modern drag-and-drop library
• Tailwind CSS, SCSS, or Material-UI for styling
• Optional: Zustand, useReducer, or Context API for state management
• Icons from libraries like react-icons, lucide-react, etc.
Data Structure
The tree structure should be based on a hierarchical JSON format, like this:
[
{
"id": "1",
"name": "src",
"type": "folder",
"children": [
{
"id": "2",
"name": "App.js",

1

Frontend Assignment DevifyX

"type": "file"
},
{
"id": "3",
"name": "index.js",
"type": "file"
},
{
"id": "4",
"name": "assets",
"type": "folder",
"children": [
{
"id": "5",
"name": "logo.png",
"type": "file"
},
{
"id": "6",
"name": "styles.css",
"type": "file"
}
]
},
{
"id": "7",
"name": "components",
"type": "folder",
"children": [
{
"id": "8",
"name": "TreeNode.jsx",
"type": "file"
},
{
"id": "9",
"name": "TreeView.jsx",
"type": "file"
},
{
"id": "10",
"name": "Sidebar",
"type": "folder",
"children": [
{

2

Frontend Assignment DevifyX

"id": "11",
"name": "Sidebar.jsx",
"type": "file"
},
{
"id": "12",
"name": "Sidebar.module.css",
"type": "file"
}
]
}
]
},
{
"id": "13",
"name": "hooks",
"type": "folder",
"children": [
{
"id": "14",
"name": "useTree.js",
"type": "file"
}
]
}
]
},
{
"id": "15",
"name": ".gitignore",
"type": "file"
},
{
"id": "16",
"name": "package.json",
"type": "file"
},
{
"id": "17",
"name": "README.md",
"type": "file"
},
{
"id": "18",
"name": "public",

3

Frontend Assignment DevifyX

"type": "folder",
"children": [
{
"id": "19",
"name": "index.html",
"type": "file"
},
{
"id": "20",
"name": "favicon.ico",
"type": "file"
}
]
}
]

Core Features (Must-Have)
1. Tree View Rendering: Use JSON to render folders and files hierarchically.

2. Expand/Collapse Folders: Clicking on a folder should toggle visibility of its chil-
dren.

3. Drag and Drop Support:
• Move files and folders into different folders.
• Reordering within a folder is a bonus.
4. Right-Click or Action Menu on Nodes:
• Rename file/folder
• Delete file/folder with confirmation
• Add new file/folder to the selected folder
5. Persistent State:
• Save updated structure in localStorage, or
• Add options to import/export tree data as JSON
Bonus Features (Optional but Appreciated)
• Dark/Light Theme Toggle
• Search Bar: Filter and auto-expand folders based on query

4

Frontend Assignment DevifyX

• File Type Icons: Different icons for .js, .css, .json, etc.
• Preview Pane: A placeholder area that opens the selected file
• Line Indicators: Draw lines showing parent-child nesting like VS Code
• Undo/Redo History (advanced)
UI Theme Guidelines
• Developer-friendly aesthetic inspired by VS Code
• Use dark theme by default, but allow theme toggle
• Clean, minimal, flat design with rounded corners
• Icons should clearly distinguish between folders and files
• Smooth expand/collapse and drag animations
Responsiveness
• Fully functional on desktops and tablets
• On mobile: allow read-only or minimal interaction mode
Submission Instructions
• Push your project to a public GitHub repository
• Include a clear README.md with:
– Setup instructions
– Explanation of features implemented
– Short video demo
• Submit the GitHub link and demo video via form. https://forms.gle/o3cYSy5srLKt8MVJA
Use of AI (Allowed and Encouraged)
• You can use ChatGPT or similar tools to:
– Plan the component structure
– Generate helper logic
– Get UI/UX suggestions
– Debug code

5

Frontend Assignment DevifyX

• However, you must NOT use any pre-built file explorer templates
• Your implementation must be your own work, assisted by AI where needed
Goal of the Assignment
This assignment evaluates your ability to:
• Structure scalable React components
• Handle complex nested state updates
• Implement drag-drop UIs
• Build developer-oriented user interfaces

Best of Luck!
We look forward to reviewing your submission.