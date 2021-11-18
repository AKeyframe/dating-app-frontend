import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64'

async function getToken(){
    let token;
    try {
        token = await AsyncStorage.getItem('token');
        token = await checkTokenFreshness(token);
        console.log('====================')
        console.log(token);
       
        return token;


    } catch (error){
        console.log('10: caught an error');
        console.log(error);
    }
    
   
}

async function checkTokenFreshness(token){
    console.log('--------------');
    console.log(token)
    if(token){
        console.log('inside if');
        //If expired, remove the token
        const decoded = base64.decode(token.split('.')[1]);
        console.log('decoded');
        console.log(decoded);
        console.log(decoded.exp)
        // const payload = JSON.parse(decoded);
        // console.log('payload');
        // console.log(payload);
        // console.log(payload.exp);
        // //JS returns milliseconds so have to divide by 1000
        // //to convert milliseconds for unix time

        // if(payload.exp < Date.now() / 1000) {
        //     try{
        //         await AsyncStorage.removeItem('token');
        //         token=null;
        //     } catch (error) {
        //         console.log('31: caught an error');
        //         console.log(error);
        //     }
            
        // }
    }
    console.log(token);
    return token;
}


async function getUserFromToken(){
    const token = await getToken();
    const decoded = base64.decode(token.split('.')[1]);
    return token ? JSON.parse(decoded).user : null;
}


async function setToken(token){
    if(token){
        try{
            await AsyncStorage.setItem('token', token);
        } catch(error){
            console.log('53: caught an error');
            console.log(error);
        }
    } else {
        try{
            await AsyncStorage.removeItem('token', token);
        } catch(err){
            console.log('60: caught an error');
            console.log(err);
        }
    }
}

async function removeToken() {
    try{
        await AsyncStorage.removeItem('token', token);
    } catch(err){
        console.log('70: caught an error');
        console.log(err);
    }
}

export {
    setToken,
    getToken,
    removeToken,
    getUserFromToken
  };

//From Async
//{"user":{"likedBy":[],"interests":[],"photos":[],"_id":"6191ae6389329c3a9823af47","email":"email@email.com","username":"kage","createdAt":"2021-11-15T00:48:35.119Z","updatedAt":"2021-11-15T00:48:35.119Z","__v":0,"matches":[]},"iat":1637104654,"exp":1637191054}

//From Local
//{"user":{"likedBy":[],"interests":[],"photos":[],"_id":"6191ae6389329c3a9823af47","email":"email@email.com","username":"kage","createdAt":"2021-11-15T00:48:35.119Z","updatedAt":"2021-11-15T00:48:35.119Z","__v":0,"matches":[]},"iat":1637104654,"exp":1637191054}
