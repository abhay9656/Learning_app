import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import app from '../FirebaseConfigure';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Controller, set, useForm } from 'react-hook-form';

const auth = getAuth(app);

const LoginScreen = ({navigation,route}) => {

const {setuserloggedin,userloggedin} = route.params;


    const {
        control,
        handleSubmit,
        reset,  // use reset to clear form inputs
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                alert('Logged in successfully');
                setuserloggedin(true);
                reset();  // Reset form inputs after successful login
                navigation.navigate('Home');
            }).catch((err) => {
                console.log(err);
                alert(err.message);
            });
            
    };

    return (
        <View style={styles.container}>
            {/* Image Section */}
            <View style={styles.imageSection}>
                <Image
                    source={require('../assets/login.png')} // Replace with your own image
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {/* Input Section */}
            <View style={styles.inputSection}>
                <Text style={styles.title}>Login</Text>

                {/* Email Input */}
                <Controller
                    control={control}
                    rules={{
                        required: { message: 'Email is required', value: true }
                    }}
                    render={({ field }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#aaa"
                            value={field.value}
                            onChangeText={field.onChange}
                            error={errors.email}
                        />
                    )}
                    name="email"
                />
                <Text>{errors.email?.message}</Text>

                {/* Password Input */}
                <Controller
                    control={control}
                    rules={{
                        required: { message: 'Password is required', value: true }
                    }}
                    render={({ field }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#aaa"
                            value={field.value}
                            onChangeText={field.onChange}
                            secureTextEntry={true}
                            error={errors.password}
                        />
                    )}
                    name="password"
                />
                <Text>{errors.password?.message}</Text>

                {/* Login Button */}
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Forgot Password */}
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Register */}
                <View style={styles.registerContainer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.registerText}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    imageSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    inputSection: {
        flex: 3,
        padding: 20,
        backgroundColor: '#ffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderRadius: 25,
        marginVertical: 10,
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#6c49da',
        width: '100%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 10,
        color: '#6c49da',
        fontSize: 14,
        textAlign: 'center',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: '#6c49da',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
