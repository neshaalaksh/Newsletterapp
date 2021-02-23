import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
  go=(buzzerColor)=>{
    this.props.navigation.navigate('HomeScreen',{color:buzzerColor});
  }
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.text}>You are a fool</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{
        this.go('red');
      }}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 180,
    marginLeft:190,
    width: 100,
    height: 50,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginTop:100
  },
  buttonText: {
    textAlign: 'center',
    color: 'black'
  }
});