import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <Main />
    </Provider>
  );
}
