import React from 'react'
import { View, TextInput,  } from 'react-native'

export const Search = () => {
  return (

   

    <View style={{
        marginVertical: 20,

    }}>
        <TextInput
            style={{
                borderColor: 'green',
                borderWidth: 1,
                borderRadius: 50,
                paddingVertical: 3,
                paddingHorizontal: 15,
                textAlign: 'center',
            }}
            placeholder='Buscar productos'
            placeholderTextColor={'white'}

        />

    </View>
    

  )
}
