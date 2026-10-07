## useRef Hook in React

While working with React, I came across situations where I needed to directly interact with a DOM element, like changing styles, focusing an input, or accessing a specific element without triggering a re-render. That’s where the **useRef hook** becomes really useful.

### What is useRef?

The `useRef` hook is used to create a reference to a value or a DOM element that persists across renders. Unlike state, updating a ref does **not** cause the component to re-render.

In simple terms, it acts like a container that can hold a value, and React keeps that value the same between renders.

```js
const myRef = useRef(initialValue);
```

---

### Accessing DOM Elements

One of the most common uses of `useRef` is to directly access a DOM element.

```js
const headingRef = useRef(null);

<h1 ref={headingRef}>Hello</h1>
```

Now `headingRef.current` will point to that `<h1>` element after the component renders.

You can then do things like:

```js
headingRef.current.style.color = "cyan";
```

---

### Why not use state for this?

State is mainly used when you want React to re-render the UI after a value changes. But in some cases, you don’t need a re-render — you just want to directly update or access something.

That’s where `useRef` is better:

* It does not trigger re-renders
* It is faster for simple DOM interactions
* It avoids unnecessary updates

---

### Storing Values with useRef

`useRef` is not only for DOM elements. It can also store values.

```js
const countRef = useRef(0);

countRef.current = countRef.current + 1;
```

This value will stay the same across renders, but updating it won’t re-render the component.

---

### Important Behavior

* A ref object has a property called `.current`
* React updates `.current` when the element is mounted
* The value stays persistent between renders

---

### One Important Rule

Each ref should ideally be used for one element.

If you assign the same ref to multiple elements:

```js
<h1 ref={myRef}>Heading</h1>
<p ref={myRef}>Paragraph</p>
```

React will overwrite it, and `myRef.current` will point to the **last element only** (in this case, `<p>`).

---

### When I use useRef

From my experience, I found `useRef` useful in cases like:

* Changing styles directly (for learning or quick interactions)
* Focusing input fields
* Accessing DOM elements
* Storing values that shouldn’t trigger re-render

---

### Example

```js
import { useRef } from "react";

function Example() {
  const textRef = useRef(null);

  const changeColor = () => {
    textRef.current.style.color = "blue";
  };

  return (
    <>
      <h1 ref={textRef}>Hello</h1>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
```

---

### My Learning

Working with `useRef` helped me understand the difference between state-based updates and direct DOM manipulation. It also made it clear that not every change in a component needs a re-render. Knowing when to use `useRef` vs `useState` is important for writing clean and efficient React code.
