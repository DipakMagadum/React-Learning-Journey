## Concept: useRef with Uncontrolled Components

In React, `useRef` is used to directly access DOM elements.

When we use `useRef` with form inputs, it becomes an uncontrolled component. This means the input values are not managed by React state, instead we read them directly from the DOM.

Each input is connected to a ref using the `ref` attribute. We can then access its value using `ref.current.value`.

For radio buttons, we use `ref.current.checked` to check which option is selected.

For checkboxes, we check each input using `checked` and collect all selected values into an array.

This approach is useful when we don’t need re-rendering on every input change and just want to get values when the form is submitted.
