import React from 'react';
import './App.css';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import ClassCounterOne from './components/ClassCounterOne';
// import UseEffectOne from './components/UseEffectOne';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';

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
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
