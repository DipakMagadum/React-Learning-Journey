## What is an API?

An API (Application Programming Interface) is a way for different software applications to communicate with each other.

Instead of writing everything from scratch, developers use APIs to request data or services from another system. You can think of it as a bridge that connects two different programs.

A simple real-life example:
When you go to a restaurant, you don’t cook your own food. You tell the waiter what you want, the waiter takes your request to the kitchen, and then brings back your food.
Here:

You = Client (your app)
Waiter = API
Kitchen = Server (where the logic/data exists)

The API handles communication between the client and the server.

 ## Why do we use APIs?

APIs save time and effort. Instead of building complex features from scratch, we can use existing services.

 ## For example:

Login with Google or Facebook → uses their APIs
Weather apps → fetch data from weather APIs
Payment systems like Razorpay or Stripe → use APIs for transactions

Without APIs, every application would have to build everything on its own, which is not practical.

 ## How does an API work?

At a basic level, APIs work using requests and responses.

The client (frontend or app) sends a request to the API
The API processes that request
The server sends back a response

 ## Most modern APIs use HTTP methods:

GET → To fetch data
POST → To send/create data
PUT/PATCH → To update data
DELETE → To remove data

 ## Example:

If you hit this URL:

https://jsonplaceholder.typicode.com/users

You get user data in JSON format.

 ## What is JSON?

JSON (JavaScript Object Notation) is the format in which APIs usually send data.

## Example:

{
  "id": 1,
  "name": "Leanne Graham",
  "email": "leanne@example.com"
}

It’s lightweight and easy to read, which is why almost every API uses it.

# Types of APIs
### 1. REST API (Most common)

REST APIs follow standard HTTP methods and are simple to use.

Example:

/users → get users
/users/1 → get a specific user
### 2. SOAP API

Older and more complex. Uses XML instead of JSON.

### 3. GraphQL API

Instead of multiple endpoints, you can request exactly the data you need in one query.

Where do we use APIs in real projects?

If you’re building a React app:

You use APIs to fetch data from backend
Display that data in UI
Send user input back to server

## Example:

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUserData(data));
}, []);

## What is an Endpoint?

An endpoint is a specific URL where the API can be accessed.

Example:

https://api.example.com/users

## Here:

api.example.com → base URL
/users → endpoint
Authentication in APIs

Some APIs require authentication to make sure only authorized users can access them.

# Common methods:

API Keys
JWT (JSON Web Tokens)
OAuth (used by Google login, etc.)
Advantages of APIs
Reusability (don’t build everything from scratch)
Faster development
Easy integration between systems
Scalable and flexible
Simple Summary

An API is like a middleman that allows two applications to talk to each other.

You send a request → API processes it → You get a response.

# Final Thought

Understanding APIs is one of the most important skills in modern development. Almost every application today depends on APIs, whether it’s for fetching data, authentication, or integrating third-party services.

If you understand how APIs work, you can connect your frontend with any backend or service in the world.