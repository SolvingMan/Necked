import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    TabNavigator,
    Image,
    Alert
} from 'react-native';
var FBLoginButton = require('./FBLoginButton');
import FBSDK, { LoginManager } from 'react-native-fbsdk';

import { StackNavigator   } from 'react-navigation';
import {EventRegister} from 'react-native-event-listeners';
import Appboard  from '../Appboard';
import {user_id, setUserID} from '../../App';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_name: '',
            user_pass: '',
            alertVisible: false,
            alertContent: '',
        }
        
        this.onPressLogin = this.onPressLogin.bind(this);
    }

    componentWillMount() {
    }
    
    componentDidMount() {
    }
    
    componentWillUnmount() {
        // EventRegister.removeAllListeners();
    }
    onPressLogin = () => {
        if (this.state.user_name == '' || this.state.user_pass == '') {
            Alert.alert("Please insert \n username or password");
            return;
          }
        fetch("http://18.209.93.188/api/signin?username="+this.state.user_name+"&password="+this.state.user_pass, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.action === "true") {  this.props.navigation.navigate('AppboardScreen'); setUserID(responseJson.result._id); }
          if (responseJson.action === "false")  Alert.alert("Invaild username or password"); 
        console.log(responseJson.action)
        }).catch((error) => {
            // console.error(error);
            Alert.alert("Please wait. \n Server is repairing")
            return;
          });         
    }
    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
          if (result.isCancelled) {
            console.log("Login Cancelled");
            return;
          } else {
            console.log("Login Success permission granted:" + result.grantedPermissions);
            console.log(result);
            this.props.navigation.navigate('AppboardScreen')
          }
        }, function(error) {
            Alert.alert("Please wait. \n Server is repairing")
        //    console.log("some error occurred!!");
           return;
        })
      }
    

    render() {
        return (
            <View style={styles.container}>
                
                <Image
                    source={require('../image/logo.png')}
                    style={styles.logo}
                />
                
                <TextInput style={styles.input} 
                        placeholder='Email or username'
                        autoCapitalize='none'
                        maxLength = {40}
                        onChangeText={(user_name) => this.setState({user_name})} 
                />
                <TextInput style={styles.input}
                        placeholder='Password'
                        autoCapitalize='none'
                        maxLength = {40}
                        secureTextEntry={true}
                        onChangeText={(user_pass) => this.setState({user_pass})} 
                />

                    <TouchableOpacity
                        style={styles.submit1}
                        onPress={this.onPressLogin}
                        // onPress={() => this.props.navigation.navigate('AppboardScreen')}
                    >
                            <Text style={styles.submitText1}
                            >Sign in</Text>
                    </TouchableOpacity>
               
                    <TouchableOpacity
                        // style={styles.submit}
                        onPress={() => this.props.navigation.navigate('ForgotpassScreen')}
                       >
                        <Text style={styles.text1}>Forgot password?</Text>
                    </TouchableOpacity>

                    <Text style={styles.text2}>OR</Text>
                {/* Login with Facebook */}
                <TouchableOpacity 
                    onPress={this._fbAuth}
                >   
                    <Text style={styles.text3}>Login with facebook</Text>
                    {/* <FBLoginButton style={styles.text3}  onPress={this._fbAuth}>Login with facebook</FBLoginButton> */}
                </TouchableOpacity>  
                
                  
                  
                    <Text style={styles.text4}>Don't have an account?</Text>
             
                <TouchableOpacity
                        style={styles.submit}
                        onPress={() => this.props.navigation.navigate('SignupScreen')}
                       >
                        <Text style={styles.submitText}>Sign up</Text>
                </TouchableOpacity>
        
            </View>
            );
    }
}

const styles=StyleSheet.create({
    container : {
        width: '100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    logo : {
        width: '60%',
        height:'25%',
        resizeMode: 'contain',
    },
    sigin : {
        width:'80%',
        height: '7%',
        backgroundColor :'red',
        color:'red'
    },
    input: {
        marginTop: '6%',
        width:'80%',
        height: '5%',
        paddingLeft: '5%',
        borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: '#a0a0a0',
        borderWidth:1,
        padding : 10
    },
    button : {
        borderColor: '#a0a0a0',
        borderWidth:2,
        padding : 10
    },
    submit:{
        width:'80%',
        height: '7%',
        marginTop:'5%',
        padding:0,
        backgroundColor:'transparent',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#317ae0',
      },
      submitText:{
          color:'#317ae0',
          textAlign:'center',
          marginTop:'3%',
          fontSize: 18,    
      },
      submit1:{
        width:'80%',
        height: '7%',
        marginTop:'5%',
        padding:0,
        backgroundColor:'#317ae0',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#317ae0',
      },
      submitText1:{
          color:'white',
          textAlign:'center',
          marginTop:'3%',
          fontSize: 18,   
      },
      text1 :{
        textDecorationLine: 'underline',
        marginTop:'4%',
        color:'#848484'
      },
      text2 :{
        marginTop:'4%',
        color:'#848484'
      },
      text3 :{
        marginTop:'7%',
        fontSize:18,
        color:'#317ae0'
      },
      text4 :{
        marginTop:'10%',
        color:'#848484'
      }
});
