import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Signup = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        } else {
            console.log('Name: ', name);
            console.log('Email: ', email);
            console.log('Password: ', password);
        }
    };
     


    return (
        <View style={styles.container}>
            <Icon name='home' size={30} color={'#fff'} style={{margin:10,top:30,left:20,}}
            onPress={()=>navigation.navigate('Home')}
            />
            <View style={styles.logoContainer}>
                {/* <Image resizeMode='contain' style={styles.icon} source={require('../assets/Login1.webp')} /> */}
            </View>
            <View style={styles.loginCard}>
            <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            {/* Name Input */}
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#aaa"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
            />

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />

            {/* Confirm Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#aaa"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
            />

            {/* Sign-Up Button */}
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already have an account */}
            <View style={styles.loginContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.loginText}> Log In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 30, backgroundColor: "blue",
        flex: 1
    },
    logoContainer: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },
    loginCard: {
        flex: 3,
        backgroundColor: "white",
        padding: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    icon: {
        height: 200,
        width: "100%",

    },
    input: {
        backgroundColor: "#eee",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        borderRadius: 20,
    },
    formdField: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 4,
        marginLeft: 15
    },
    link1:{
        marginLeft:'auto',
        colo:'#555',
        marginBottom:10,
        marginTop:10
    },
    submitBtn:{
        backgroundColor:'#ffca3c',
        padding:15,
        borderRadius:10,

    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    },
   iconContainer:{
       flexDirection:'row',
       justifyContent:'space-evenly',
       marginBottom:10
   },
   icon1:{
       backgroundColor:'#eee',
       padding:10,
       borderRadius:50
   },
   link2:{
       textAlign:'center',
       color:'#555',
       marginTop:10,
       fontSize:15,
       fontWeight:'bold'
   }
});

export default Signup
