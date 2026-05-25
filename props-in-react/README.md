# Props in React

Props in React are used to pass data from one component to another component.

The word "Props" stands for Properties.

Props make components reusable and dynamic.

---

# Why Props are Important

Without props, every component would contain fixed data.

Using props allows us to:
- Reuse components
- Pass dynamic data
- Make UI flexible
- Reduce code duplication

---

# Basic Syntax of Props

## Parent Component

```jsx
<Card name="Naruto" />
```

## Child Component

```jsx
function Card({name}) {
  return <h1>{name}</h1>
}
```

Here:
- `name` is a prop
- Data is passed from parent to child

---

# Props Flow

```bash
Parent Component
       ↓
 Pass Data Using Props
       ↓
Child Component Receives Data
```

---

# Types of Props Used in This Project

This project demonstrates multiple types of props usage.

---

# 1. String Props

Used in `Button.jsx`

```jsx
<Button btnText="Click Me" />
```

Component:

```jsx
function Button({btnText}) {
  return <button>{btnText}</button>
}
```

Purpose:
- Dynamically change button text

---

# 2. Multiple Props

Used in `Card.jsx`

```jsx
<Card name="Naruto" btnText="Visit Me" />
```

Component receives:
- `name`
- `btnText`

This helps create reusable cards with different content.

---

# 3. Default Props Value

In `Card.jsx`

```jsx
function Card({name, btnText="visit me"})
```

If `btnText` is not passed, default value will automatically be used.

---

# 4. Array Props

Used in `Navbar.jsx`

```jsx
<Navbar items={["Home","About","Contact"]} />
```

Component:

```jsx
{items.map((item,index)=>(
   <li key={index}>{item}</li>
))}
```

Purpose:
- Render dynamic navbar items

---

# 5. Object Props

Used in `Student.jsx`

```jsx
<Student student={StudentDetail} />
```

Object Example:

```jsx
let StudentDetail = {
  name:"Dipak",
  rollNo:17,
  city:"Kolhapur",
  email:"dipak@gmail.com"
}
```

Accessing object values:

```jsx
student.name
student.rollNo
```

Purpose:
- Pass multiple related values together

---

# Components in This Project

## Button Component
Reusable button component using props.

## Card Component
Dynamic card component with image, title, and button text.

## Navbar Component
Navbar created using array props and map function.

## Student Component
Displays student information using object props.

## Information Component
Passes student object data to Student component.

---

# Advantages of Props

- Reusable Components
- Cleaner Code
- Dynamic UI
- Better Component Communication
- Easier Data Management

---

# Important Points About Props

- Props are read-only
- Props are passed from parent to child
- Child components should not modify props
- Props help create scalable React applications

---

# What I Learned

While learning props in React, I understood:

- How to pass data between components
- How reusable components work
- Difference between props and state
- Rendering dynamic data
- Using arrays and objects with props
- Creating flexible UI components

---

# Technologies Used

- React JS
- JavaScript
- Tailwind CSS
- Vite

---

# Conclusion

Props are one of the core concepts of React.

They help developers build reusable, dynamic, and scalable user interfaces by allowing components to communicate with each other efficiently.