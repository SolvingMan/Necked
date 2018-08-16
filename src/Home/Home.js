import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { createMaterialTopTabNavigator  } from 'react-navigation'; 

export default class Home extends Component {
    render() {
        return (
            <Homeboard />

        );
      }
}



class AllScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }
  
  class VideoScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>VideoScreen!</Text>
        </View>
      );
    }
  }
  class TextScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>TextScreen!</Text>
        </View>
      );
    }
  }
  class ImagesScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>ImagesScreen!</Text>
        </View>
      );
    }
  }
  
  const Homeboard= createMaterialTopTabNavigator ({
    All: { screen: AllScreen },
    Video: { screen: VideoScreen },
    Images: { screen: ImagesScreen },
    Text: { screen: TextScreen },
  });