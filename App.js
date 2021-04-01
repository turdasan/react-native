import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import MyButton from './components/MyButton';
import Settings from './components/Setting';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {LinearGradient} from 'expo-linear-gradient';
import buttonReducer from './redux/ButtonReducer';

const store = createStore(buttonReducer);

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'orange'
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  modal: {  
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "#00BCD4",   
    height: 300 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 80,  
    marginLeft: 40,  
     
     }
})
export default function App() {

  
  return (
    <Provider store = {store}>
      <View style = {styles.backgroundImage}>
     <Settings/>
     </View>
    </Provider> 
  );
}

