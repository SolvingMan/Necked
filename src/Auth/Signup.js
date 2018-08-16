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
// import Login from './Login';
 export let usern;
 export let firstn;
 export let lastn;
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname:'',
            alertVisible: false,
            alertContent: '',
        }
        
        this.onPressNext = this.onPressNext.bind(this);
    }

    componentWillMount() {
    }
    
    componentDidMount() {
    }
    
    componentWillUnmount() {
        // EventRegister.removeAllListeners();
    }
    onPressNext() {
        if (this.state.username == '' || this.state.lastname == '' || this.state.firstname == '' ) {
            Alert.alert("Please insert \n firstname, lastname and username");
            return;
          }
        usern = this.state.username;
        firstn = this.state.firstname;
        lastn = this.state.lastname; 
        this.props.navigation.navigate('Signup1Screen')
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={require('../image/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.text1}>What is your name?</Text>


                <View style={{flexDirection: 'row', marginTop:'5%',height:'8%'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Firstname'
                        autoCapitalize='none'
                        maxLength = {20}
                        onChangeText={(firstname) => this.setState({firstname})}
                    />
                    <TextInput 
                        style={[styles.input,{marginLeft:'5%',flexDirection:'row'}]} 
                        placeholder='Lastname'
                        autoCapitalize='none'
                        maxLength = {20}
                        onChangeText={(lastname) => this.setState({lastname})}
                    />
                </View>

            {/* InSert Username */}
                <TextInput 
                    style={styles.input1} 
                    placeholder='Username'
                    autoCapitalize='none'
                    maxLength = {20}
                    onChangeText={(username) => this.setState({username})}
                />
                   
            {/* Go To Next STEP Press NExt Button */}
                <TouchableOpacity
                    style={styles.submit1}
                    // onPress={() => this.props.navigation.navigate('Signup1Screen')}
                    onPress={this.onPressNext}
                >
                <Text style={styles.submitText1}>Next step</Text>
                </TouchableOpacity>

            {/* Already have an account? */}
                <Text style={styles.text4}>Already have an account?</Text>
    
            {/* Signin go to Singin component  */}
                <TouchableOpacity
                        style={styles.submit}
                        onPress={() => {console.log(this.state.firstname); this.props.navigation.navigate('LoginScreen', {firstname: this.state.firstname})}}
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
        height: '7%',
        backgroundColor :'red',
        color:'red'
    },
    input: {
        // position:'absolute',
        // marginTop: '6%',
        width:'36%',
        height: '120%',
        // padding: '2%',
        paddingLeft: '5%',
        borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: '#a0a0a0',
        borderWidth:1,
        // backgroundColor:'red'
        // padding : 20
    },
    input1: {
        marginTop: '3%',
        width:'80%',
        height: '6%',
        // padding: '2%',
        paddingLeft: '5%',
        borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: '#a0a0a0',
        borderWidth:1,
        // padding : 10
    },
    
    button : {
      
        borderColor: '#a0a0a0',
        borderWidth:2,
        padding : 10
    },
    submit1:{
        width:'80%',
        height: '7%',
        marginTop:'6%',
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
          fontSize: 16,
      },
    submit:{
        width:'80%',
        height: '7%',
       
        marginTop:'6%',
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
          fontSize: 16,
        //   fontWeight: 'bold',
         
      },
      text1 :{
        marginTop:'10%',
        fontSize:16,
        fontWeight: 'bold',
        color:'#848484'
      },
      text2 :{
        marginTop:'10%'
      },
      text3 :{
        marginTop:'10%',
        fontSize:18,
        color:'#317ae0'
      },
      text4 :{
        marginTop:'20%',
        fontSize:12,
        fontWeight:'bold',
        color: '#848484'
      },
      form: {
          marginTop:'10%',
          width: '80%',
          height:'5%',
          backgroundColor:'red',
          flexDirection: 'row'
      }
});
