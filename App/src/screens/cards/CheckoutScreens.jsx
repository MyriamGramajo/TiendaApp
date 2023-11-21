import React from 'react'
import { Text, View, Button } from 'react-native'

export const CheckoutScreens = ({ navigation }) => {
    return (

        <View style={{ //es el contenedor
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor:'grey',
        }}>
            <View>

                <Button
                    title='Ir a Inicio'
                    onPress={() => navigation.popToTop()}// va a  la pagina inicial
                />

            </View>


            <View style={{marginVertical:5}}>
                <Button
                    title='Atras'
                    onPress={() => navigation.pop()}// va a la pagina anterior
                />
            </View>



        </View>






    )
}
