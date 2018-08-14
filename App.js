import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/timer';
import { createStore } from 'redux';
import reducer from './components/timer/reducers';
import {Provider} from 'react-redux';

const store = createStore(reducer); 

export default class App extends React.Component {
  render() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>);
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
