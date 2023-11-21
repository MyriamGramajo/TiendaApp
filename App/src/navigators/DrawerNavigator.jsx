
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext, useEffect, useState } from 'react';
import { HomeScreens } from '../screens/products/HomeScreens';
import { ProfileScreens } from '../screens/auths/ProfileScreens';
import { TabNavigator } from './TabNavigator';
import { LoginScreen } from '../screens/auths/LoginScreen';
import { AuthContext } from '../contexts/AuthContext';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {


//const [isLogin,setLogin]= useState(false);
const { state, checkToken} =useContext(AuthContext);

useEffect( ()=>{
checkToken();
}, [])


if (state.isLoading)
{
//return(<Loading/>)
}


if (true) {  // true //state.isLoading
  return (

<Drawer.Navigator>

    <Drawer.Screen  name='Home'  options ={{title:'HOME'}} component={TabNavigator}/>
    <Drawer.Screen  name='mis pedidos' component={ProfileScreens} />
</Drawer.Navigator>

  )
  }

  if (!state.isLogged){ 

   return (
  
  <Drawer.Navigator>
  
      <Drawer.Screen  name='Home'  options ={{title:'LOGIN',headerShown:false}} component={LoginScreen}/>
      
  </Drawer.Navigator>
  
    )
  
    }

}

