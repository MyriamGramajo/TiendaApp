import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native'
import { searchData } from '../../Data/searchData'
import { ItemProducts } from '../../component/ItemProducts'
import { Search } from '../../component/Search'
//import { AntDesign } from '@expo/vector-icons'

export const SearchProductScreens = () => {

       return (

        <View style={styles.container}
        >
            <Search/> 

            <FlatList

                data={searchData} // como el map
                renderItem={({ item }) => <ItemProducts  item={item} />} //mostrar un componente
                keyExtractor={item => item.id}//
            />
        </View>

    )
}

const styles = StyleSheet.create({ //cpntenedor padre rojo

    container: {
        flex: 1,
       backgroundColor: 'red',
        padding: 10
    }
})