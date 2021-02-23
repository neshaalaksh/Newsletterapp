import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state={
      dislike: 0,
      like: 0,
    };
  }

  go = (screen) => {
    this.props.navigation.navigate(screen);
  };
  dislikePressed = () => {
    var dislike = db.ref('Rating/');
    this.setState({
      dislike: this.state.dislike + 1,
    });
    dislike.update({
      dislike: this.state.dislike + 1,
    });
  };

  likePressed = () => {
    var like = db.ref('Rating/');
    this.setState({
      like: this.state.like + 1,
    });
    like.update({
      like: this.state.like + 1,
    });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.go('JokeScreen');
          }}>
          <Text style={styles.buttonText}>Read a joke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.go('HoroscopeScreen');
          }}>
          <Text style={styles.buttonText}>Horoscope</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.go('WeatherScreen');
          }}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => {
            this.go('TopNewsScreen');
          }}>
          <Text style={styles.buttonText}>Top news</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Rate us</Text>
        <TouchableOpacity>
          <Image
            style={styles.img1}
            source={require('../Thumbs/thumbsup.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.img2}
            source={require('../Thumbs/thumbsdown.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  img1: {
    width: 50,
    height: 50,
    marginLeft: 110,
    marginTop: 25,
  },
  img2: {
    width: 50,
    height: 50,
    marginLeft: 180,
    marginTop: -33,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
  },
});
