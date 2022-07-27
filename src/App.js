import React from 'react';
import './App.css';
// import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
// import NewCounter from './components/NewCounter';
// import ParentComponent from './components/ParentComponent';
// import CounterThree from './components/CounterThree';
// import UseReducerA from './components/UseReducerA';
// import UseReducerB from './components/UseReducerB';
// import UseReducerC from './components/UseReducerC';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import ComponentC from './components/ComponentC';
// import DataFetching from './components/DataFetching';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import ClassCounterOne from './components/ClassCounterOne';
// import UseEffectOne from './components/UseEffectOne';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


export const CountContext = React.createContext();

// const initialState = 0;

/*
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
*/

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      { /* <ClassCounter></ClassCounter> */}
      { /*<HookCounter></HookCounter> */}
      { /*<HookCounterTwo /> */ }
      { /*<HookCounterThree></HookCounterThree> */ }
      { /*<HookCounterFour /> */ }
      { /*<ClassCounterOne /> */ }
      { /* <UseEffectOne /> */ }
      { /* <ClassMouse /> */ }
      { /*<HookMouse /> */ }
      { /*<MouseContainer /> */ }
      { /*<IntervalClassCounter /> */ }
      { /*<IntervalHookCounter /> */ }
      { /*<DataFetching></DataFetching> */ }
      { /*<UserContext.Provider value={'TestUsername'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
  </UserContext.Provider> */ }
      { /*<CounterOne></CounterOne> */ }
      { /* <CounterTwo></CounterTwo> */ }
      { /*<CounterThree></CounterThree> */ }

      { /* SECTION FOR useReducer with useContext */} 
      { /*
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <UseReducerA></UseReducerA>
        <UseReducerB></UseReducerB>
        <UseReducerC></UseReducerC>
</CountContext.Provider> */ }
      { /*<ParentComponent></ParentComponent> */ }
      { /* <NewCounter></NewCounter> */ }
      { /*<FocusInput></FocusInput> */ }
      <HookTimer></HookTimer>
    </div>
  );
}

export default App;
