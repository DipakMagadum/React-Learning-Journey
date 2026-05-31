# Understanding Controlled Components in React using useState

## Introduction

In React, form handling is mainly done using two approaches:

* Controlled Components
* Uncontrolled Components

Among these two, Controlled Components are the most commonly used approach in modern React applications.

This project focuses on understanding how `useState()` is used to control form elements such as:

* Textbox
* Checkbox
* Radio Button
* Dropdown Menu

using React state management.

---

# What is a Controlled Component?

A controlled component is a form element whose value is completely controlled by React state.

This means:

* React stores the form data inside state
* UI updates whenever state changes
* React becomes the single source of truth

Instead of directly reading values from the DOM, React controls the input using `useState()`.

---

# Why Controlled Components are Important

Controlled components provide:

* better control over form data
* instant UI updates
* easy validation
* predictable behavior
* centralized state management

They are heavily used in:

* login forms
* registration forms
* dashboards
* admin panels
* CRUD applications
* search filters
* API forms

---

# Understanding useState()

`useState()` is a React Hook used to store and update data inside functional components.

Example:

```jsx id="d7vz21"
const [name, setName] = useState("");
```

Here:

* `name` → current state value
* `setName` → function used to update state

Whenever state updates, React automatically re-renders the UI.

---

# Controlled Textbox

Example:

```jsx id="t9m1qa"
<Textbox
   placeholder="Enter Your name"
   value={name}
   onChange={(e)=>setName(e.target.value)}
/>
```

### How it works

* `value={name}` connects input with React state
* `onChange` updates state whenever user types
* UI stays synchronized with state

This is called a controlled textbox.

---

# Controlled Checkbox

Checkbox handling is slightly different because multiple values can be selected.

Example:

```jsx id="u2n5vr"
if(e.target.checked){
   setSkills([...skills,e.target.value])
}
```

### Explanation

* `e.target.checked` checks whether checkbox is selected
* selected values are stored inside array state
* spread operator (`...`) keeps previous values

---

# Why Array is Used in Checkbox

Checkboxes often allow multiple selections.

Example:

* JavaScript
* React
* Java

So data should be stored as an array.

Example:

```javascript id="9t6vok"
["JavaScript","React","Java"]
```

---

# Controlled Radio Button

Radio buttons allow selecting only one value at a time.

Example:

```jsx id="l5k8dy"
checked={gender === "Male"}
```

### How it works

If `gender` state equals `"Male"`:

* radio button becomes selected

Otherwise:

* it stays unselected

This creates fully controlled radio buttons.

---

# Why checked is Important in Radio Buttons

Without `checked`, radio buttons behave like uncontrolled inputs.

Using:

```jsx id="7p2msq"
checked={gender === "Male"}
```

ensures React completely controls the selected value.

---

# Controlled Dropdown Menu

Dropdown value is also connected to state.

Example:

```jsx id="2h9vwe"
<select value={city} onChange={handleCity}>
```

### How it works

* `value={city}` binds dropdown with state
* `onChange` updates selected value
* UI always reflects React state

---

# Why Controlled Components are Better

## Easy Validation

Example:

* checking email format
* required fields
* password validation

---

## Better State Management

All form data stays inside React state.

---

## Easier Debugging

React DevTools can easily inspect state.

---

## Dynamic UI Updates

UI automatically updates whenever state changes.

---

# Real World Usage

Controlled components are used in almost every frontend application.

Examples:

* Authentication Forms
* Search Bars
* Payment Forms
* Student Management Systems
* CRUD Applications
* Admin Dashboards
* E-commerce Checkout Forms

---

# Concepts Covered in This Project

This project demonstrates:

* useState Hook
* Controlled Inputs
* Textbox Handling
* Checkbox Handling
* Radio Button Handling
* Dropdown Handling
* State Management
* Dynamic Rendering
* Form Handling

---

# Folder Structure

```bash id="d4q3xk"
src/
│
├── Component/
│   ├── Checkbox.jsx
│   ├── DropDown.jsx
│   ├── RadioButton.jsx
│   └── Textbox.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Understanding Data Flow

The data flow in controlled components is:

```text id="vx6y2n"
User Input → onChange Event → State Update → UI Re-render
```

React continuously synchronizes UI with state.

---

# Common Beginner Mistakes

## Forgetting value Prop

Wrong:

```jsx id="c2m4yx"
<input onChange={handleChange}/>
```

Correct:

```jsx id="7r8qlo"
<input value={name} onChange={handleChange}/>
```

---

## Using String Instead of Array in Checkbox

Wrong:

```jsx id="l0m9cn"
const [skills,setSkills] = useState("")
```

Better:

```jsx id="2q5kvu"
const [skills,setSkills] = useState([])
```

because checkboxes usually handle multiple values.

---

## Missing checked in Radio Button

Without `checked`, React cannot fully control radio selection.

---

# What I Learned from This Concept

After learning controlled components, I understood:

* how React manages form data
* how state controls UI
* how dynamic rendering works
* how form handling is implemented in React
* why React prefers state-driven UI

This concept is one of the foundations of React development.

---

# Conclusion

Controlled components are one of the most important concepts in React.

Understanding them properly helps developers build:

* forms
* CRUD applications
* dashboards
* authentication systems
* dynamic UI applications

Mastering controlled components also improves understanding of:

* React state management
* event handling
* dynamic rendering
* reusable component architecture

This concept is heavily used in real-world React applications and is essential for frontend development.
