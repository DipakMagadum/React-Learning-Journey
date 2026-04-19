## useState Hook in React

In this project, I used the **useState hook** to manage state inside functional components. It is one of the most commonly used hooks in React and is useful for handling dynamic data in the UI.

### Why I used useState

While building interactive components, I needed a way to update values on user actions (like button clicks or input changes). The useState hook made it simple to store and update these values without using class components.

### What I implemented

* Managed simple state values like toggling content and updating text
* Used useState for handling user interactions (e.g., button clicks)
* Implemented conditional rendering based on state
* Updated UI dynamically when state changes

### Key benefits I noticed

* Easy to understand and use
* Makes components interactive
* Helps in managing local component state
* Reduces the need for complex logic

### Example

Here’s a simple example of how I used useState:

```js id="p4nq0x"
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

### My learning

Working with useState helped me understand how React updates the UI based on state changes. It also improved my understanding of building interactive and dynamic components, which is essential for modern frontend development.
