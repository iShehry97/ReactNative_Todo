import React from 'react';
import Header from './components/header';
import InputBar from './components/inputBar';
// import LinearGradient from 'react-native-linear-gradient';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the Trash', done: false},
        { id: 1, title: 'Cook dinner', done: false}
      ]
    }
  }

  render() {
    //  const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#171717" barStyle="light-content"/>
          <Header title="Welcome to TODOs"/>

          <InputBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3c3c3c'
  }
  
})