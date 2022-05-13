import './App.css';
import ComponentX from './components/ComponentX';
import DataFetch from './components/DataFetch';
import DisplayItems from './components/DisplayItems';
import DisplayName from './components/DisplayName';
import HookCounter from './components/HookCounter';
import MouseContainer from './components/MouseContainer';
import MousePointer from './components/MousePointer';
import UserContext from './contexts/UserContext';
import LanguageContext from './contexts/LanguageContext';
import HookCounterTwo from './components/HookCounterTwo';
import React, { useReducer } from 'react';
import DataFetchTwo from './components/DataFetchTwo';
import ParentComponent from './components/ParentComponent';
import MemoCounter from './components/MemoCounter';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';


const initState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initState;
    default:
      return state;
  }
}

export const CountContext = React.createContext();

function App() {

  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>

      {/* <DisplayName /> */}

      {/* <DisplayItems/ > */}

      {/* <HookCounter /> */}

      {/* <MouseContainer /> */}

      {/* <DataFetch /> */}

      {/* <UserContext.Provider value="Kartik">
        <LanguageContext.Provider value="Hindi">
          <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
            <ComponentX />
          </CountContext.Provider>
        </LanguageContext.Provider>
      </UserContext.Provider> */}

      {/* <HookCounterTwo /> */}

      {/* <DataFetchTwo /> */}

      {/* <ParentComponent /> */}

      {/* <MemoCounter /> */}

      {/* <FocusInput /> */}

      {/* <HookTimer /> */}

      {/* <>
      <DocTitleOne />
      <br /><br />
      <DocTitleTwo />
      </> */}

      {/* <>
        <CounterOne />
        <br /><br />
        <CounterTwo />
      </> */}

      <UserForm />

    </div>
  )
}

export default App;
