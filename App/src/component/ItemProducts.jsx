import React from 'react'
import { View, Image, Text } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export const ItemProducts = ({item}) => { 
    return (
        <View style={{//padre
            backgroundColor: 'grey',
            flexDirection: 'row',
            //borderColor: 'black',
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1 )',
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
        }}>

            <Image
                style={{
                    flex: 1,
                    //width:90,
                    height: 90,
                    borderColor: 'red',
                    borderWidth: 2
                }}
                source={item.photo}
            // otra forma de importar imagenes
            //source={{ uri:'' }  }

            />
            <View style={{ flex: 3, marginLeft: 10 }} >
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 12, }}>{item.category}</Text>
                <Text style={{ fontSize: 14, color: 'red' }}>${item.price}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>

                <AntDesign name='right' size={24} color={'red'}/*icono flechita( > )*/ />
            </View>

        </View>


    
     

        )


}
