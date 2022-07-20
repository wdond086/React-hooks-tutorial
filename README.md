# REACT HOOKS NOTES

## 1.) useState

- The useState hook lets you add state to functional components.
- In classes, the state is always an object.
- With the useState hook, the state doesn't have to be an object.
- The useState hook returns an array with 2 elements.
- The first element is the current value of the state, and the second element is a state setter function. In the snippet below, _**count**_ is the state variable and _**setCount**_ is the setter method.

```js
const [count, setCount] = useState(0);
```

- If the new state value depends on the previous state value, you can pass a function to the setter function as shown in HookCounterTwo.js and the snippet below

### Using previous state with useState

```js
const incrementFive = () => {
  for (let i = 0; i < 5; i++) {
    // prevCount gives it access to the old value of count
    setCount((prevCount) => prevCount + 1);
  }
};
```

### OR

```js
<button onClick={() => setCount((prevCount) => prevCount + 1)}>
  Increment
</button>
```

- When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function. This is because usState completely overwrites the state everytime it is used. Hence, if we need something from the current state, we need to copy the items from the current state first using the spread operator. This is demonstrated in _**HookCounterThree.js**_ and _**HookCounterFour.js**_. Below are some snippets demonstrating object and arrat destructuring:

### Array Spread Operator

```js
const [items, setItems] = useState([]);

const addItem = () => {
    // Make a copy of all the items in the array using the spread operator, 
    // then append to that array, the new object you are creating
    setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
  }
```

### Object Spread Operator

```js
const [name, setName] = useState({firstName: '', lastName: ''});

const updateFirstName = (newFirstName) => {
    setName({ ...name, firstName: newFirstName});
}
```

## 2.) useEffect
