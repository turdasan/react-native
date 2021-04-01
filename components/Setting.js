import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { Icon } from 'react-native-elements'
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, TextInput} from 'react-native'
import { RadioButton , Provider, Portal, Button, Modal} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import buttonActions from '../redux/buttonActions';

const Settings = props => {
    const styles = StyleSheet.create({
        input: {
         
          height: 40,
          margin: 8,
          borderWidth: 2,
        },
         radio: {
           flexDirection: 'row',
           flexGrow: 1,
           alignItems: 'center',
           margin: 12,
         },
         button: {
      
            alignItems: 'center',
            flexGrow: 1,
            padding: 17,
            borderRadius: 3,
            height: 50,
          },
          button: {
      
            alignItems: 'center',
            flexGrow: 1,
            padding: 17,
            borderRadius: 3,
            height: 50,
            marginTop: 30
          } 
             
      });




   const [checked, setChecked] = useState('unchecked');

   let colorB = useSelector(state => state.button.backgroundColor);
   let height = useSelector(state => state.button.height);
   let weight = useSelector(state => state.button.weight);
   let longPress = useSelector(state => state.button.longPress);





   const dispatch = useDispatch();

   const [showModal, setShowModal] = useState(false);

   const onPress = () => { setShowModal(true); }

   const handleClose = () => {setShowModal(false)};

   const onLongPress = () => {
       checked === 'checked' ? console.log('Long press enabled') : console.log('long press not enabled');
   }
    return (


        <Provider >
            <Portal>
                <Modal visible={showModal} onDismiss={handleClose} contentContainerStyle={ {backgroundColor: 'white', padding: 20} }>
                    <View style = {{paddingTop : 10, paddingBottom:10}}>
                    <Icon name="settings" size={25} color='#ffa500' />
                    </View>
                    <DropDownPicker
                    items={[
                        {label: 'blue', value: '#00bfff', icon: () => <Icon name="circle" size={18} color="#00bfff" />},
                        {label: 'red', value: '#dc143c', icon: () => <Icon name="circle" size={18} color="#dc143c" />},
                        {label: 'yellow', value: '#ffd700', icon: () => <Icon name="circle" size={18} color="#ffd700" />},
                        {label: 'green', value: '#228b22', icon: () => <Icon name="circle" size={18} color="#228b22" />}
                        ]}
                        defaultValue={colorB}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa', marginBottom: 10}}
                        itemStyle={{
                        justifyContent: 'flex-start'
                        }} 
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => { dispatch(buttonActions.changeColor(item.value)); console.log(colorB)}}
                        placeholder = "Select a color"
                        
                    />
                       <TextInput
                        style={styles.input}
                        onChangeText={height => {dispatch(buttonActions.changeHeight(height)); console.log(height)}}
                        value={height}
                        placeholder="Change button height"
                        />
                        
                        <TextInput
                        style={styles.input}
                        onChangeText={weight => dispatch(buttonActions.changeWeight(weight))}
                        value={weight}
                        placeholder="Change button weight"
                        />
                        <View style = {styles.radio}>
                        <Text>Enable Long Press</Text>
                        <RadioButton
                            value="first"
                            status={ checked === 'checked' ? 'checked' : 'unchecked' }
                            onPress={() => {checked === 'checked' ? setChecked('unchecked') : setChecked('checked')}}
                            style = {{justifyContent: 'flex-end' }}
                            color = '#ffa500'
                            uncheckedColor = 'grey'
                            />
                        </View>              
                       
                </Modal>
                </Portal>
       
       
        <Button  color = {colorB} mode="contained" dark={true} compact={true} style={{marginTop:100, height: height}} onPress={onPress} onLongPress = {onLongPress}>
        <Text style={{ color : 'white'}}>press me</Text>
        </Button>
       
        </Provider>

    
    );

}

export default Settings;