import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Manager App!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;