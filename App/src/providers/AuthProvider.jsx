import { useReducer } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { AuthReducer } from "../reducers/AuthReducer"
import { drinkStore } from "../config/AppAxios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const  initialState={
    user:null,
    isLogged: false,
    isLoading: true,// cuando comienza a cargar
    errorMessage:''

}

export const AuthProvider =({children})=>{

    const [state, dispatch ] = useReducer(AuthReducer,initialState);


//metodo login:
const login = async(email,password) =>{


try {
    
    const user =  await drinkStore.post('/auth/user/login',{// se llama al servicio de login

        email,
        password
    
    });


    console.log(user.data.res.token);
//se va  aguardar el token en el storage
await AsyncStorage.setItem('e-token', user.data.res.token);

//cargar los datos en el reducer

dispatch ({
    type:'LOGIN',
    payload:{
       user: user.data.res
    }
});


} catch (error) {
    
console.log(error.response.data.msg)// toma los datos del backen cuando la clave es la incorrecta

    dispatch({
      type:'ERROR',
      payload:{
        errorMessage: error.response.data.msg
      }  
    })

}
//console.log(user.data)

}

//si esxiste el token se devuelve losdatos del usuario, sino el usuario se desloguea
const checkToken =()=>{

    try {
   // si no exixte el token se desloguea // valida si ya hay un token  
//const token = await AsyncStorage.getItem ('e-token');   
       if(!token) 
        {
            dispatch ({
                type:'LOGOUT'
            });
        }
// si existe el token se alida con la api

//const {data} = await drinkStore.get('/auth/user/review/token');
        console.log(data);

        dispatch({
            type: 'LOGIN',
            payload: {
                user:data.res
            }

        });





    } catch (error) {// error de validacion del token
       
        dispatch({
            type:'LOGOUT',

        })


    }

}

return(
    <AuthContext.Provider
    value={{
        state,
        login,
        checkToken,


    }}


    >
       {children}
    </AuthContext.Provider>
)


}