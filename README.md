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

### Using previous state with useState

- If the new state value depends on the previous state value, you can pass a function to the setter function as shown in HookCounterTwo.js and the snippet below

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

### Using useState with Objects and Arrays

- When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function. This is because usState completely overwrites the state everytime it is used. Hence, if we need something from the current state, we need to copy the items from the current state first using the spread operator. This is demonstrated in _**HookCounterThree.js**_ and _**HookCounterFour.js**_. Below are some snippets demonstrating object and arrat destructuring:

  #### Array Spread Operator

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

  #### Object Spread Operator

  ```js
  const [name, setName] = useState({firstName: '', lastName: ''});

  const updateFirstName = (newFirstName) => {
      setName({ ...name, firstName: newFirstName});
  }
  ```

## 2.) useEffect

- Lets you perform side effects in functional components.
- It replaces _**componentDidMount**_, _**componentDidUpdate**_ and _**componentWillUnmount**_.
- It gets executed after every render of the component.
- To use it, you simple call it and pass a callback as shown in the example below (You can also refer to _**UseEffectOne.js**_).

  ```js
  useEffect(() => {
      document.title = `You clicked ${count} times`;
  })
  ```

### Conditionally run effects example

- Running the effect after every render may cause some performance issues. To avoid this, you can compare the current value to the new value and perform the update only when they are different. To do this, you pass a second parameter to useEffect which is an array. That array is going to contain the states or props you want useEffect to depend on. Hence, the useEffect callback will be executed only when a state variable or prop specified in the array has changed. This is demonstrated below

  ```js
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
      console.log("useEffect - Updating document title");
      document.title = `You clicked ${count} times`;
  }, [count]);
  ```

### Run useEffect only once

- Sometimes, we want the effect to be called only once, on initial render. This can be achieved by passing an empty array as the second paramenter to the useEffect as shown below (Refer to _**HookMouse.js**_).

  ```js
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (mouseEvent) => {
      setX(mouseEvent.clientX);
      setY(mouseEvent.clientY);
  }

  useEffect(() => {
      console.log("useEffect called");
      window.addEventListener("mousemove", logMousePosition);
  }, [])
  ```

### Run useEffect with cleanup

- To avoid memory leaks, we need to perform cleanup code especially when dealing with event listeners. Every added event listener needs to be removed when the component is unmounted from the DOM. This can be performed by returning the cleanup code in the form of a callback function. (Refer to _**HookMouse.js**_). This is demonstrated below:

  ```js
  useEffect(() => {
      console.log("useEffect called");
      window.addEventListener("mousemove", logMousePosition);

      return () => {
          console.log("useEffect cleanup called");
          window.removeEventListener("mousemove", logMousePosition);
      };
  }, [])
  ```

### useEffect With Incorrect Dependency Array

- You need to be careful when specifying an empty dependency list. If there is any state whose value changes we want to render, make sure to add them to the dependency list of useEffect. Reffering to the code below, if we remove _**count**_ from the dependency list, it stops working because we effectively told useEffect to no track changes to count, so those changes will not be effected.

  ```js
  const [count, setCount] = useState(0);

  useEffect(() => {

      const tick = () => {
          setCount(count + 1);
      }
    
      const interval = setInterval(tick, 1000);

      return () => {
          clearInterval(interval);
      };
  }, [count]);
  ```

- Keep in mind that there are other ways to make useEffect keep track of a state variable even when it is not included in the dependency array. One of those ways is by using the useState effect in the form that tracks the previous value of the state. That will in effect force useEffect to keep track of changes to the state count (Refer to _**IntervalHookCounter.js**_).
- It also recommended to specify functions that are going to be called by useEffect within useEffect. By so doing, it decreases the likelyhood of not adding a necessary state or prop to the dependency array.

  ```js
  const [count, setCount] = useState(0);

  useEffect(() => {

      const tick = () => {
          setCount(prevCount => prevCount + 1);
      }
      
      const interval = setInterval(tick, 1000);

      return () => {
          clearInterval(interval);
      };
  }, []);
  ```

  - You can have multiple useEffect calls for different effects.  

  ![alt Image showing how to use multiple useEffects](./public/multiple_useEffects.png)

### useEffect To Fetch Data From An API Endpoint

- For an example, refer to _**DataFetching.js**_

## 3.) useContext

- Use context is used when a property created in a parent component has to be passed to the child component of one of its child components. In such a situation, using useContext allows the tranfer of the property to the child property that needs it directly, without transferring it to the intermediary components which do not neccesarily need it.
- In other words, it provides a way to pass data through the component tree, without having to pass props down manually at every level.
- The first step is to create the context.

  ```js
  export const UserContext = React.createContext();
  ```

- Then, provide the context with a value, and the provider must wrap the childrn components with the value to be provided.

  ```jsx
  <UserContext.Provider value={'TestUsername'}>
      <ComponentC></ComponentC>
  </UserContext.Provider>
  ```

- Now we can consume the context value in a child component, using the renderProps pattern.

  ```jsx
  <UserContext.Consumer>
      { username => <div>User context value <b>{username}</b></div> }
  </UserContext.Consumer>
  ```

  This works for a single context, but what about multiple contexts? We will need to have a lot of nesting which complicates the code. There is a better way.

### Consuming multiple contexts using useContext

- Create the context providers, provide the values and wrap the child component in them.

```jsx
<UserContext.Provider value={'TestUsername'}>
    <ChannelContext.Provider value={'CodeEvolution'}>
        <ComponentC></ComponentC>
    </ChannelContext.Provider>
</UserContext.Provider>
```

- Import useContext from React
- Import the context providers into the child component where they will be consumed.
- Call the useContext hook passing on the provider context as the argument.

  ```js
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  ```

- Now, the data from _**UserContext**_ and _**ChannelContext**_ can be used anywhere in the consuming component, using the variables _**user**_ and _**channel**_.

## 4.) useReducer

- useReducer is used for state management.
- It is an alternative to useState.