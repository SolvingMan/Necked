import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Navigator,
    Image,
    Alert
} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import {firstn} from './Signup'; 
import {usern} from './Signup';
import {lastn} from './Signup';
import {user_id, setUserID} from '../../App';
export default class Signup1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            user_pass: '',
            confirm_pass:'',
            alertVisible: false,
            alertContent: '',
        }
        const { navigation } = this.props;
        const firstname = navigation.getParam('firstname');
        // console.log(firstname);
        this.onPressSignup = this.onPressSignup.bind(this);
    }

    componentWillMount() {
        // console.log(firstname);
    }
    
    componentDidMount() {
        // console.log(firstname);
    }
    
    componentWillUnmount() {
        // EventRegister.removeAllListeners();
    }
   onPressSignup() {
    if (this.state.email == '' || this.state.user_pass == '' || this.state.confirm_pass == '') {
        Alert.alert("Please insert \n Email, Password or Confirm Password");
        return;
    }
    if (this.state.user_pass !== this.state.confirm_pass ) {
       Alert.alert("Password is different");
        return;
    }

    fetch("http://18.209.93.188/api/signup?first_name="+firstn+"&last_name="+lastn+"&username="+usern+"&email="+this.state.email+"&password="+this.state.user_pass, {
        method: "GET",
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.action === "true") { this.props.navigation.navigate('AppboardScreen');  }
      if (responseJson.action === "false")  Alert.alert("Invaild username or password"); 
      setUserID(JSON.stringify(responseJson.result._id));
    console.log(responseJson)
    }).catch((error) => {
        Alert.alert("Please wait. \n Server is repairing")
        // console.error(error);
        return;
      }); 
    }

    render() {
        return (
            <View style={styles.container}>
                
                <Image
                    source={require('../image/logo.png')}
                    style={styles.logo}
                />
                {/* Inser Email, Password, confirm Password */}
                <TextInput 
                    style={[styles.input, {marginTop :'10%'}]} 
                    placeholder='Email ID'
                    autoCapitalize='none'
                    onChangeText={(email) => this.setState({email})}    
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Password' 
                    autoCapitalize='none'
                    onChangeText={(user_pass) => this.setState({user_pass})} 
                    secureTextEntry={true}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='confirm password' 
                    autoCapitalize='none'
                    onChangeText={(confirm_pass) => this.setState({confirm_pass})} 
                    secureTextEntry={true} 
                />
                <TouchableOpacity
                    style={styles.submit1}
                    onPress={this.onPressSignup}
                    // onPress={() => this.submitSuggestion(this.props)}
                    >
                        <Text style={styles.submitText1}>Sign up</Text>
                </TouchableOpacity>
            
                    <Text style={styles.text4}>By tapping sign up, you agree with our</Text>
                    <Text style={styles.text5}>Terms & Confitions and Party Policy</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 4,
                        }}
                    />
                    <Text style={styles.text2}>Already have an account?</Text>
          
                <TouchableOpacity
                        style={styles.submit}
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                       >
                        <Text style={styles.submitText}>Sign in</Text>
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
        height: '6%',
        backgroundColor :'red',
        color:'red'
    },
    input: {
        marginTop: '3%',
        width:'80%',
        height: '5%',
        // padding: '2%',
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
        // paddingTop:20,
        padding:0,
        // padding:1,
        backgroundColor:'transparent',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#317ae0',
        // fontColor: '#317ae0'
        // alignItems:'center',
        // justifyContent:'center',
      },
      submitText:{
          color:'black',
          textAlign:'center',
          marginTop:'4%',
          fontSize: 15,
          color:'#317ae0'
         
      },
      submit1:{
        width:'80%',
        height: '7%',
       
        marginTop:'5%',
        // paddingTop:20,
        padding:0,
        // padding:1,
        backgroundColor:'#317ae0',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#317ae0',
        // fontColor: '#317ae0'
        // alignItems:'center',
        // justifyContent:'center',
      },
      submitText1:{
          color:'white',
          textAlign:'center',
          marginTop:'4%',
          fontSize: 15,
        //   fontWeight: 'bold',
         
      },
      text1 :{
        textDecorationLine: 'underline',
        marginTop:'4%'
      },
      text2 :{
        // textDecorationLine: 'underline',
        marginTop:'10%',
        color:'#919191'
      },
      text3 :{
        // textDecorationLine: 'underline',
        marginTop:'10%',
        fontSize:18,
        color:'#317ae0'
      },
      text4 :{
        marginTop:'6%',
        fontSize:12,
        color:'#919191'
      },
      text5 :{
        // marginTop:'6%',
        fontSize:12,
        color:'#919191'
      }
});
