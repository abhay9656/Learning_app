import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Controller, useForm } from 'react-hook-form';
import app from '../FirebaseConfigure';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


const auth = getAuth(app);

const Signup = ({ navigation }) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });


    const onSubmit = (data) => {
        // alert(JSON.stringify(data)); 

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                alert('User created successfully');
            }).catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };




    return (
        <View style={styles.container}>
            <Icon name='home' size={30} color={'#000'} style={{ margin: 10, left: 20, }}
                onPress={() => navigation.navigate('home')}
            />
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/signup.png')} />
            </View>

            <View style={styles.loginCard}>
                <ScrollView contentContainerStyle={styles.container}>

                    <Controller
                        control={control}
                        rules={{
                            required: { message: 'Name is required', value: true },
                        }}
                        render={({ field }) => {
                            return (
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    placeholderTextColor="#aaa"
                                    onChangeText={field.onChange}
                                    value={field.value}
                                    autoCapitalize="words"
                                    label={'Name'}
                                    error={errors.name}
                                />
                            )
                        }}
                        name='name'
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: { message: 'Email is required', value: true },
                        }}
                        render={({ field }) => {
                            return (
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email Address"
                                    placeholderTextColor="#aaa"
                                    onChangeText={field.onChange}
                                    value={field.value}
                                    autoCapitalize="words"
                                    label={'Email'}
                                    error={errors.email}
                                />
                            )
                        }}
                        name='email'
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: { message: 'Password is required', value: true },
                        }}
                        render={({ field }) => {
                            return (
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#aaa"
                                    onChangeText={field.onChange}
                                    value={field.value}
                                    autoCapitalize="words"
                                    label={'Password'}
                                    error={errors.password}
                                />
                            )
                        }}
                        name='password'
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: { message: 'Confirm Password is required', value: true },
                        }}
                        render={({ field }) => {
                            return (
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#aaa"
                                    onChangeText={field.onChange}
                                    value={field.value}
                                    autoCapitalize="words"
                                    label={'Confirm Password'}
                                    error={errors.confirmPassword}
                                />
                            )
                        }}
                        name='confirmPassword'
                    />


                    {/* Sign-Up Button */}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
        paddingTop: 30,
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
        top: -30
    },
    input: {
        backgroundColor: "#eee",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        borderRadius: 20,
        marginBottom: 10,
    },
    formdField: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 4,
        marginLeft: 15
    },
    link1: {
        marginLeft: 'auto',
        colo: '#555',
        marginBottom: 10,
        marginTop: 10
    },
    submitBtn: {
        backgroundColor: '#ffca3c',
        padding: 15,
        borderRadius: 10,

    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },

    buttonText: {
        color: '#F7EED3',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    icon1: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 50
    },
    link2: {
        textAlign: 'center',
        color: '#555',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default Signup
