import React, { useEffect } from 'react';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { setLocalNotification } from './utils/_decks';

export default function App() {
  useEffect(() => {
    setLocalNotification()
  }, [setLocalNotification])

  return (
    <Provider store={createStore(reducer)}>
         <Home />
    </Provider>
  );
}
