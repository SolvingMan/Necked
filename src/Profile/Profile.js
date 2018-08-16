import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements'
import Profileboard from './Profileboard';
import {  Navigator } from 'react-navigation'
import Editprofile from './Editprofile';
import Followering from './Following';
import Followers from './Followers';

var name="Min";
const AppNavigator = StackNavigator ({
    ProfileboardScreen: { screen: Profileboard, navigationOptions: ({navigation}) => ({title:name,
    headerRight: <View style={{flexDirection:'row', right:'15%'}}>
                 <TouchableOpacity
                                    style={{justifyContent:'center', alignItems:'center'}}
                                    onPress={() => navigation.navigate('FollowersScreen')}
                                   >
                                    <Text style={{fontSize:10}}>234</Text>
                                    <Text style={{fontSize:10}}>followers</Text>
                                    
                            </TouchableOpacity>
                            <View style={{width:'7%'}}></View>
                            <TouchableOpacity
                                    style={{justifyContent:'center', alignItems:'center'}}
                                    onPress={() => navigation.navigate('FolloweringScreen')}
                                   >
                                    <Text style={{fontSize:10}}>19450</Text>
                                    <Text style={{fontSize:10}}>following</Text>
                                    
                            </TouchableOpacity>
                </View> 
})},
    EditprofileScreen: { screen: Editprofile, navigationOptions: {title:'Edit Profile'}},
    FollowersScreen :  { screen: Followers, navigationOptions: {title:'Followers'}},
    FolloweringScreen :  { screen: Followering, navigationOptions: {title:'Followering'}}
},
);


export default class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          showSomething: false
        };
    
        // this.toggleShowSomething = this.toggleShowSomething.bind(this);
      }
      saveDetails() {
        alert('Save Details');
    }

    componentDidMount() {
    //   this.props.navigation.setParams({ handleSave: this.saveDetails.bind(this) });
    }
 
      
    render() {
        return (
      <AppNavigator />

        );
      }
}