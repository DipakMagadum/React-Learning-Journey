# JSON Server and API Fetching in React

JSON Server is a tool used to create a fake REST API using a simple JSON file.

It is mainly used by frontend developers to practice API integration without creating a real backend server.

---

# Why JSON Server is Used

While learning React or frontend development, backend APIs may not always be available.

JSON Server helps solve this problem by creating a local API quickly.

Benefits:
- Easy to use
- Beginner friendly
- Fast API setup
- Useful for practice and testing

---

# What is an API?

API stands for Application Programming Interface.

An API is used to send and receive data between frontend and backend applications.

Example:

```bash
Frontend → Request → API → Response → Frontend
```

---

# JSON File Example

Example of `db.json`

```json
{
  "users": [
    {
      "id": 1,
      "name": "Dipak",
      "email": "dipak@gmail.com"
    }
  ]
}
```

This JSON data automatically becomes an API endpoint.

---

# Creating API Using JSON Server

Command:

```bash
npx json-server --watch db.json --port 3000
```

Explanation:
- `--watch` watches changes in file
- `db.json` contains data
- `--port 3000` runs server on port 3000

---

# API Endpoint

```bash
http://localhost:3000/users
```

This endpoint returns all users data.

---

# Fetching Data in React

React applications commonly use Fetch API to get data from APIs.

Example:

```jsx
let response = await fetch(url)
response = await response.json()
```

Explanation:
- `fetch()` sends request
- `response.json()` converts response into JavaScript object

---

# React Hooks Used

---

# useState()

Used to store API data.

Example:

```jsx
const [userData, setUserData] = useState([])
```

Purpose:
- Store fetched data inside component state

---

# useEffect()

Used to perform side effects.

Example:

```jsx
useEffect(() => {
  usersData()
}, [])
```

Purpose:
- Automatically call API when component loads

---

# Async and Await

API calls are asynchronous.

Example:

```jsx
async function usersData() {

}
```

`async` and `await` help handle asynchronous operations properly.

---

# Rendering Data Using map()

The `map()` method is used to render multiple items dynamically.

Example:

```jsx
userData.map((users) => (
  <li>{users.name}</li>
))
```

Purpose:
- Display all users from API dynamically

---

# React Data Flow

```bash
Component Loads
       ↓
useEffect Runs
       ↓
API Request Sent
       ↓
Data Received
       ↓
State Updated
       ↓
UI Re-renders
```

---

# Common Terms

| Term | Meaning |
|------|---------|
| API | Sends and receives data |
| JSON | JavaScript Object Notation |
| Fetch | Used to call API |
| useState | Stores data |
| useEffect | Handles side effects |
| map() | Renders lists dynamically |

---

# Advantages of API Fetching

- Dynamic data rendering
- Real-time updates
- Backend communication
- Better scalability
- Real-world application development

---

# Common Real World Uses

API fetching is used in:
- Social media apps
- E-commerce websites
- Weather applications
- Banking applications
- Authentication systems
- Dashboards

---

# Important Learning Concepts

While learning this concept, I understood:

- How APIs work
- Difference between frontend and backend
- Fetching data in React
- Handling asynchronous code
- Rendering dynamic data
- Working with JSON format

---

# Common Beginner Mistake

Incorrect:

```jsx
key={userData.id}
```

Correct:

```jsx
key={users.id}
```

Reason:
- `userData` is the full array
- `users` represents current item inside map()

---

# Conclusion

JSON Server is a very useful tool for beginners learning React and API integration.

It helps understand:
- API concepts
- Fetching data
- React Hooks
- Dynamic rendering
- Frontend and backend communication

These concepts are very important for building modern full stack applications.