import React from 'react'
import { View, StyleSheet,Text, Dimensions, useWindowDimensions } from 'react-native'

const PositionModelScreens = () => {


//const { width, height } = Dimensions.get('window');

const { width, height } = useWindowDimensions();




  return (

    <View>

  <View style={styles.container}>
    <Text style={[styles.cajaRoja, {width:width}]}></Text>
    <Text style={styles.cajaAzul}>caja 1</Text>
    <Text style={styles.cajaAmarilla}>caja 1</Text>
    <Text style={styles.cajaNaranja}>caja 1</Text>
  </View>
    <Text style={{textAlign:'center', fontSize:20}}> W:{width}, H:{height} </Text>
  </View>



  )
}
const styles=StyleSheet.create({
    container:{
       height:600,
        backgroundColor: 'green',
        //justifyContent:'center',
        //alignItems:'center',
    },


cajaRoja:{
    backgroundColor:'red',
    //width: '20%',
    height:'20%',
    borderColor:'white',
    borderWidth:5,
    position: 'absolute',
    top:0,
    right:0,

    
},

cajaAzul:{
    backgroundColor:'blue',
    width: '20%',
    height:'20%',
    borderColor:'white',
    borderWidth:5,
},

cajaAmarilla:{
    backgroundColor:'yellow',
    width: '20%',
    height:'20%',
    borderColor:'white',
    borderWidth:5,
    position:'absolute',
    bottom:0,
    right:0,

},


cajaNaranja:{
    backgroundColor:'orange',
    width: '20%',
    height:'20%',
    borderColor:'white',
    borderWidth:5,
    position:'absolute',
    bottom:0,
  

}

})

export default PositionModelScreens
