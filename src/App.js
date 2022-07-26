import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
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

function App() {
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
      <UserContext.Provider value={'TestUsername'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
