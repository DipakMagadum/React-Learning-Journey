# Toggle in React using useState

This project demonstrates how to create a toggle functionality in React using the `useState` Hook.

The main purpose of this project is to understand conditional rendering and state management in React.

---

# What is Toggle in React?

Toggle means switching between two states.

Example:
- Show / Hide
- Open / Close
- Enable / Disable

In this project, a button is used to show and hide a component dynamically.

---

# React Hook Used

## useState()

`useState` is a React Hook used to store and update data inside functional components.

Example:

```jsx
const [show, setShow] = useState(false)
```

Here:
- `show` stores the current state
- `setShow` updates the state
- `false` is the initial value

---

# Project Working

Initially:
- `show` value is `false`
- Home component is hidden

When button is clicked:

```jsx
setShow(!show)
```

The value changes:
- `false → true`
- `true → false`

Because of this:
- Component becomes visible
- Or component becomes hidden

---

# Conditional Rendering

This project uses conditional rendering.

Example:

```jsx
{show ? <Home/> : null}
```

Meaning:
- If `show` is `true` → render Home component
- If `show` is `false` → render nothing

---

# Components Used

## App.jsx

Main component responsible for:
- Managing state
- Toggle button
- Conditional rendering

---

## Home.jsx

Contains content that becomes visible or hidden when button is clicked.

---

# Flow of Project

```bash
Button Click
      ↓
State Changes
      ↓
Component Re-renders
      ↓
Content Show/Hide
```

---

# Features

- Toggle functionality
- React Hooks
- Conditional rendering
- Component rendering control
- Dynamic UI updates

---

# Technologies Used

- React JS
- JavaScript
- Vite
- CSS

---

# What I Learned

While building this project, I learned:

- How useState works
- How React re-renders components
- Conditional rendering in React
- Handling button events
- Show and hide functionality
- State management basics

---

# Advantages of Toggle Functionality

- Better user interaction
- Cleaner UI
- Dynamic content rendering
- Improved user experience

---

# Common Real World Uses

Toggle functionality is used in:
- Dropdown menus
- Dark mode toggle
- Password visibility toggle
- Sidebar navigation
- Accordion UI
- Modal open/close

---

# Installation

Clone the repository:

```bash
git clone <your-repository-link>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

# Conclusion

This project helped me understand one of the most important React concepts:

- State management using useState
- Conditional rendering
- Dynamic UI updates

It is a simple but very important foundational React concept used in real-world applications.