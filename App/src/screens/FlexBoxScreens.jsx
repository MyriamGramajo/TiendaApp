import React from 'react'
import { Text, View , StyleSheet} from 'react-native'

const FlexBoxScreens = () => {
  return (
   
<View style= {styles.container}>
    <Text style={styles.caja1}>caja1</Text>
    <Text style={styles.caja2}>caja2</Text>
    <Text style={styles.caja3}>caja3</Text>
</View>


  )
}

const styles = StyleSheet.create({
  
    container:{
        backgroundColor:'green',
        flex:1,// toma el 100% de la pantalla tanto ancho como alto
       flexDirection:'column',//
        justifyContent: 'center',
       // flexDirection:'row',
       justifyContent:'flex-start',
      //alignItems: 'flex-start',
    },

    caja1:{
        flex: 1,
        fontSize:20,
        borderWidth:2,
        borderColor:'white',
        //alignSelf:'flex-start',
    },

    caja2:{
        flex:1,
        fontSize:20,
        borderWidth:2,
        borderColor:'white'
    },


    caja3:{
        flex:1,
        fontSize:20,
        borderWidth:2,
        borderColor:'white'
    },


})








export default FlexBoxScreens
