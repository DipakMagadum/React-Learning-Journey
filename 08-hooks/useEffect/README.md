##  useEffect in React

`useEffect` is a React Hook that lets you run side effects in your components.

In simple words, it allows you to perform actions **after the component renders**.

---

###  Why do we use useEffect?

In React, components re-render when state or props change. Sometimes, we want to run extra logic after that happens, like:

* Fetching data from an API
* Updating the DOM manually
* Running a function when a value changes
* Setting up timers or subscriptions

That’s where `useEffect` comes in.

---

###  Basic Syntax

```javascript
useEffect(() => {
  // your logic here
}, [dependencies]);
```

---

###  How it works

* The function inside `useEffect` runs after rendering
* The dependency array controls **when it runs**

---

###  Different Cases

#### 1. Run on every render

```javascript
useEffect(() => {
  console.log("Runs on every render");
});
```

 No dependency array → runs every time the component updates

---

#### 2. Run only once (on initial render)

```javascript
useEffect(() => {
  console.log("Runs only once");
}, []);
```

 Empty array → runs only when the component mounts

---

#### 3. Run when a specific value changes

```javascript
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

 Runs only when `count` changes

---

###  Example (Simple Counter)

```javascript
useEffect(() => {
  console.log("Count updated:", count);
}, [count]);
```

Here, every time `count` changes, this effect will run.

---

###  Important Note

* `useEffect` runs **after rendering**, not before
* It helps keep your component clean by separating logic from UI
* Be careful with dependencies, or it may run more times than expected

---

###  Summary

* `useEffect` is used for side effects
* It runs after render
* Dependency array controls when it runs
* It is one of the most important hooks in React

---
