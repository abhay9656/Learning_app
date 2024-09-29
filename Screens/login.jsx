import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import app from '../FirebaseConfigure';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';

const auth = getAuth(app);




const LoginScreen = ({navigation}) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (data) => {
        // alert(JSON.stringify(data)); 

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                alert('Logged in successfully');
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


                <Controller
                    control={control}
                    rules={{
                        required: { message: 'Email is required', value: true }
                    }}
                    render={({ field }) => {
                        return (
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                                value={field.value}
                                onChangeText={field.onChange}
                                label={"Email Address"}
                                error={errors.email}
                            />
                        )
                    }}
                    name='email'
                />
                <Text>{errors.email?.message}</Text>
                {/* Email Input */}

                <Controller
                    control={control}
                    rules={{
                        required: { message: 'Password is required', value: true }
                    }}
                    render={({ field }) => {
                        return (
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                value={field.value}
                                onChangeText={field.onChange}
                                label={"Password"}
                                error={errors.password}
                            />
                        )
                    }}
                    name='password'
                />
                <Text>{errors.password?.message}</Text>
                {/* Password Input */}

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
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
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
        backgroundColor: '#fff', // Change the background color as needed
    },
    image: {
        width: '80%',
        height: '80%',
    },
    inputSection: {
        flex: 3,
        padding: 20,
        backgroundColor: '#ffff', // Change the background color as needed
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
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
