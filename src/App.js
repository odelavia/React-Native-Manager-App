import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
// import LoginForm from './Components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;

// <Header headerText="Manager App"/>