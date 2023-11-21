import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, Text, View, StyleSheet, TextInput, Alert, } from 'react-native'
import { CustomIconInput } from '../../component/CustomIconInput'
import { CustomModal } from '../../component/CustomModal'
import { AuthContext } from '../../contexts/AuthContext'


export const LoginScreen = () => {

const {login, state} = useContext(AuthContext);

//metodo -harcodeado
const isLogin = () =>{

    console.log('mensaje logueado')

login(
    'myriam@gmail.com',
    'myriam1234'
)

}
    return (
        <>
            <View style={{

                flex: 1,
                backgroundColor: 'grey',
                padding: 15,
                justifyContent: 'center'
            }}>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Email'
                        placeholderTextColor={'rgba(255,255,255,0.3)'}
                    />
                    <CustomIconInput />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.touchBtn}
                     onPress={isLogin}
                    >
                        <Text style={styles.texbtn}>Ingresar</Text>
                    </TouchableOpacity >
                </View>
            </View>
            <CustomModal/>
        </>
    )

}



const styles = StyleSheet.create({

    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },


    inputText: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 40,
        paddingVertical: 5,
        marginHorizontal: 15,
        marginHorizontal: 12,
        paddingHorizontal: 12

    },



    touchBtn: {
        backgroundColor: 'red',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 12,

    },

    texbtn: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
    }


})