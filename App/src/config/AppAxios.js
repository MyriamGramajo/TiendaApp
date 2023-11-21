import axios from "axios";

const urlApi = 'http://192.168.100.129:2311/api'; // ver

export const drinkStore= axios.create({

baseURL:urlApi,
timeout:120000,
headers:{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*', // permiso de acceso general
   // 'x-token-data':

}
});


// es un midelware es un metodo asincrono
drinkStore.interceptors.request.use(

async(config)=>{

const token = await AsyncStorage.getItem('e-token');
if (token){
    config.headers['x-token-data'] = token;
}
return config;
}



)
