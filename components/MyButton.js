import React, { useState } from 'react';
import { View, Text, Pressable, Alert, StyleSheet, Button,TouchableOpacity, Modal} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import buttonActions from '../redux/buttonActions';

const MyButton = props => {
  const styles = StyleSheet.create({
    button: {
      
      alignItems: 'center',
      flexGrow: 1,
      padding: 17,
      borderRadius: 3,
      height: 50,
    } 
  });

  const [showModal, setShowModal] = useState(false);

  let color = useSelector(state => state.button.backgroundColor);
  let height = useSelector(state => state.button.height);
  let weight = useSelector(state => state.button.weight);
  let longPress = useSelector(state => state.button.longPress);
  let textColor = useSelector(state => state.button.textColor);

  const dispatch = useDispatch();

  
 
 const onPress= () => { setShowModal(true); }
 
  return (
   
    <View style = {{alignItems: 'center', flexDirection: 'row', flexGrow: 1,}}>
      <TouchableOpacity
        // style={ [styles.button, StyleSheet.create({backgroundColor: {color}})]}
        style = {[styles.button, {backgroundColor: color, height: height}]}
        onPress={onPress}
      >
      <Text style = {{color: textColor, fontSize: '23px' }}>Press Here</Text>
      </TouchableOpacity>
      
     </View>
  
  );
};

export default MyButton;