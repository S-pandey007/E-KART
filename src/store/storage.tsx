import AsyncStorage from '@react-native-async-storage/async-storage';

const reduxStorage={
    setItem:async(key:string,value:any)=>{
        try {
            await AsyncStorage.setItem(key,value)
            return Promise.resolve(true);
        } catch (error) {
            console.error("AsyncStorage setItem error:",error);
            return Promise.reject(error);
        }
    },
    getItem:async(key:string)=>{
        try {
            const value = await AsyncStorage.getItem(key);
            return Promise.resolve(value);
        } catch (error) {
            console.error("AsyncStorage getItem error:",error);
            return Promise.reject(error);
        }
    },
    removeItem:async(key:string)=>{
        try {
            await AsyncStorage.removeItem(key);
            return Promise.resolve(true);
        } catch (error) {
            console.error("AsyncStorage removeItem error : ",error);
            return Promise.reject(error);
        }
    }
}

export default reduxStorage;