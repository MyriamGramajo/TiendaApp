import React, { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export const CustomModal = () => {

const[visible, setVisible]=useState(true);



    return (


        <View>
            <Modal
                animationType='slide'
                visible={visible}
                transparent={true}
                hardwareAccelerated={true}
            >

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    // marginTop:20,
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        margin: 30,
                        padding: 40,
                        borderRadius: 10,
                        shadowColor: 'black',
                        elevation: 2,
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        }

                    }}>

                        <Feather name='x-octagon' size={35} color={'red'} />
                        <Text style={{ fontSize: 28, fontWeight: 'bold', marginVertical: 10 }}>Error de Acceso</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}>Los datos dddel usuario son incorrectos</Text>



                        <View>
                            <Pressable style={{
                                
                                backgroundColor: 'red',
                                fontSize: 16,
                                fontWeight: 'bold',
                                borderRadius:20,
                                paddingVertical: 5,
                                paddingHorizontal: 15,
                                marginVertical: 10
                            }}
                            onPress={()=>setVisible(!visible)}
                            >
                                <Text>Cerrar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>




            </Modal>


        </View>


    )
}
