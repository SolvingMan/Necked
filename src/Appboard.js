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
import { createBottomTabNavigator, createMaterialBottomTabNavigator, StackNavigator } from 'react-navigation';
import Home from './Home/Home';
import Search from './Search/Search';
import Upload from './Upload/Upload';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Profileboard from './Profile/Profileboard';

const BoardNavigator = createBottomTabNavigator({
    HomeScreen: { screen : Home, navigationOptions : {title : 'Home'} },
    SearchScreen: { screen : Search, navigationOptions : {title : 'Search'} },
    UploadScreen: { screen : Upload,navigationOptions : {title : 'Upload'} },
    ProfileScreen: { screen : Profile, navigationOptions : {title : 'Profile'} },
    SettingsScreen: { screen : Settings, navigationOptions : {title : 'Settings'} },
},   
)


export default class Appboard extends Component {

  componentWillMount() {
    console.disableYellowBox = true;
  }

  componentDidMount() {

  }

  componentWillUnmount() {
}
    render() {
        return (
            // <View>
            //    <Text> asdfsadf</Text>
            // </View>

             <BoardNavigator />
        );
      }
}