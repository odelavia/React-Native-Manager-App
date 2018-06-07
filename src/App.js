import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDlv1Zw6qK2rpQpcKpF2FLSTKERf15UW_c",
      authDomain: "manager-aba07.firebaseapp.com",
      databaseURL: "https://manager-aba07.firebaseio.com",
      projectId: "manager-aba07",
      storageBucket: "manager-aba07.appspot.com",
      messagingSenderId: "944656912747"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager App"/>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;