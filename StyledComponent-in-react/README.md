## Styled Components in React

In this project, I explored **styled-components** as a way to style React applications more effectively. Instead of writing separate CSS files, styled-components allows styling directly inside JavaScript using component-based architecture.

### Why I used styled-components

While working on this project, I wanted a cleaner and more scalable approach to styling. Styled-components helped me keep styles close to the components, which made the code easier to read and maintain.

### What I implemented

* Created reusable styled components like headings, paragraphs, buttons, and a navbar
* Used both **template literal syntax** and **object-based styling**
* Applied basic layout techniques like flexbox for the navbar
* Added simple hover effects for better user interaction

### Key benefits I noticed

* Improved code organization
* No class name conflicts (automatic scoping)
* Easier to manage reusable UI components
* Better readability compared to traditional CSS files

### Example

Here’s a simple example of how I used styled-components:

```js
const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid green;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
`;
```

### My learning

Working with styled-components helped me understand how styling can be tightly integrated with React components. It also gave me a better idea of building reusable and scalable UI components, which is important for real-world projects.
