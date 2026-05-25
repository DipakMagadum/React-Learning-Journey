# React Router DOM

React Router DOM is a library used in React applications for routing and navigation between different pages without reloading the entire website.

In simple words, React Router helps us create multi-page functionality inside a single page React application.

---

# Why React Router is Used

Normally in HTML, when we navigate from one page to another using anchor tags (`<a>`), the entire page reloads.

React Router solves this problem by enabling client-side routing.

Because of this:
- Navigation becomes faster
- User experience improves
- The page does not reload again and again

---

# Main Concepts of React Router

## 1. BrowserRouter

`BrowserRouter` is used to wrap the entire React application.

It enables routing functionality in the app.

Example:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## 2. Routes

`Routes` is used to contain multiple routes.

Inside it, we define all application paths.

Example:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

---

## 3. Route

`Route` is used to define a specific path and which component should render for that path.

Example:

```jsx
<Route path="/login" element={<Login />} />
```

When user visits `/login`, the Login component will render.

---

## 4. Link

`Link` is used for navigation between pages.

Instead of using normal anchor tags (`<a>`), React applications use `Link`.

Example:

```jsx
<Link to="/register">Register</Link>
```

Benefits:
- Faster navigation
- No page reload
- Better performance

---

# Basic Routing Flow

```bash
User Clicks Link
       ↓
URL Changes
       ↓
Matching Route Found
       ↓
Component Renders
```

---

# Advantages of React Router

- Fast navigation
- Better user experience
- No full page reload
- Easy page management
- Dynamic routing support
- Cleaner React applications

---

# Common Pages Created Using React Router

- Home Page
- About Page
- Contact Page
- Login Page
- Register Page
- Dashboard Page

---

# Hooks Provided by React Router

## useNavigate()

Used for programmatic navigation.

Example:

```jsx
const navigate = useNavigate()

navigate("/login")
```

---

## useParams()

Used to access dynamic route parameters.

Example:

```jsx
<Route path="/user/:id" element={<User />} />
```

---

# Difference Between Anchor Tag and Link

| Anchor Tag (`<a>`) | Link |
|--------------------|------|
| Reloads entire page | No page reload |
| Slower navigation | Faster navigation |
| Traditional HTML navigation | React SPA navigation |

---

# What I Learned

While learning React Router, I understood:

- How routing works in React
- How to create multiple pages
- How to navigate between pages
- Difference between normal routing and client-side routing
- How modern React applications handle navigation

---

# Technologies Commonly Used With React Router

- React JS
- Vite
- Tailwind CSS
- Redux
- Firebase
- Node.js

---

# Conclusion

React Router DOM is one of the most important libraries in React development.

It helps developers create fast and modern single-page applications with smooth navigation and better user experience.