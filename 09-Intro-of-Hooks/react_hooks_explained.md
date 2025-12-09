# 🔵 React Hooks --- Complete Explanation

React **Hooks** are special functions introduced in React 16.8 that
allow you to use React features like **state**, **lifecycle**, and
**context** inside **functional components** --- without writing
classes.

Hooks make React code simpler, reusable, and easier to maintain.

------------------------------------------------------------------------

## 🧠 What Are Hooks?

A **Hook** is just a function that starts with the word `"use"` and lets
you "hook into" React's features.

Example:
- `useState` → adds state
- `useEffect` → adds lifecycle features
- `useContext` → adds global data access

------------------------------------------------------------------------

## 🔥 Why Were Hooks Introduced?

Earlier, developers used **class components**, which had issues:

-   Too long and complex
-   Logic split across multiple lifecycle methods
-   Hard to reuse logic
-   `this` keyword confusion

Hooks solve all of this using **functions**.

------------------------------------------------------------------------

## 🔑 Types of Hooks

### 1️⃣ **useState --- Add State to Functional Components**

Used to store and update data.

``` javascript
const [count, setCount] = useState(0);
```

-   `count` → variable
-   `setCount` → function to update it

------------------------------------------------------------------------

### 2️⃣ **useEffect --- Handle Side Effects**

Runs code on:

-   Component Mount
-   Component Update
-   Component Unmount

``` javascript
useEffect(() => {
  console.log("Component rendered");
}, []);
```

Used for:
- API calls
- Timers
- Event listeners

------------------------------------------------------------------------

### 3️⃣ **useContext --- Avoid Prop Drilling**

Allows sharing data globally.

``` javascript
const user = useContext(UserContext);
```

------------------------------------------------------------------------

### 4️⃣ **useRef --- Direct DOM Access**

Used to access elements without re-rendering.

``` javascript
const inputRef = useRef();
```

------------------------------------------------------------------------

### 5️⃣ **useMemo --- Optimize Expensive Calculations**

Prevents unnecessary re-calculations.

``` javascript
const result = useMemo(() => heavyFunction(), []);
```

------------------------------------------------------------------------

### 6️⃣ **useCallback --- Memoize Functions**

Prevents function re-creation on every render.

``` javascript
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

------------------------------------------------------------------------

### 7️⃣ **Custom Hooks --- Reusable Logic**

You can create your own hook using `use`.

``` javascript
function useFetch(url) {
  // custom logic
}
```

------------------------------------------------------------------------

## 📌 Rules of Hooks

Hooks follow two main rules:

1.  **Only call Hooks at the top level**
    → Not inside loops, conditions, or nested functions
2.  **Only call Hooks inside React components or custom Hooks**

------------------------------------------------------------------------

## 🌟 Summary Table

  Hook           Use
  -------------- --------------------------
  useState       Add state
  useEffect      Lifecycle / side effects
  useContext     Global data
  useRef         DOM access
  useMemo        Cache values
  useCallback    Cache functions
  Custom Hooks   Reusable logic

------------------------------------------------------------------------

## 🎯 Final Explanation (Simple)

**Hooks allow functional components to do everything that class
components can --- but with cleaner, shorter, and more powerful code.**

------------------------------------------------------------------------
