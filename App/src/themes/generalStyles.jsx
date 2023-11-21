import { StyleSheet } from "react-native";

 export const generalStyles=StyleSheet.create({


container:{

flex:1,
backgroundColor:'white',
padding:15,
paddingHorizontal:7,
paddingTop:15,
paddingBottom:80

},

headContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',

},

menuContainer:{
    backgroundColor:'grey',
    marginHorizontal:10,
    borderRadius:10,
    padding:10,
    zIndex:999,
    alignSelf:'center',
    marginTop:10
},

head:{
    flex:1,
    position:'absolute',
    width:'100%',
    top:0,
    alignItems:'flex-end'
},



 })