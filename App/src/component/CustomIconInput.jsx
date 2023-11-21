import React from 'react';
import { View } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export const CustomIconInput = () => {
    return (

        <View style={styles.container} >
            <Feather
            style={styles.iconPass}
                 name='eye-off'
                size={20}
                color={'rgba(255,255,255,0.6)'}


            />
            <TextInput
                style={styles.inputText}
                placeholder='Password'
                placeholderTextColor={'rgba(255,255,255,0.3)'}
                secureTextEntry={true}



            />
        </View>

    )
}
const styles = StyleSheet.create({

    container:{
justifyContent:'center',
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

iconPass:{
position: 'absolute',
right:30

}


});
