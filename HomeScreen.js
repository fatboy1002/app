import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NavBar from './NavBar.js';

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text>Home Screen</Text>
        </View>
        <NavBar goToHome={()=>this.props.navigation.navigate('Home')} goToLists={()=>this.props.navigation.navigate('Lists')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  contents: {
    flex: 13,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

