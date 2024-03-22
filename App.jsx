import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getEndpointCurrencyAmount } from './src/handle_api';
import { calculateResult } from './src/calculate_result';
import { useRef, useState} from 'react';

export default function App() {

  const output_amount = useRef();
  const input_from = useRef();
  const input_to = useRef();
  const input_amount = useRef();

  const [ouput_amount, setResult] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text ref={output_amount} id='ouput_amount' value={ouput_amount}/>
      <TextInput ref={input_from} id='input_from' placeholder='from'/>
      <TextInput ref={input_to} id='input_to' placeholder='to'/>
      <TextInput ref={input_amount} id='input_amount' placeholder='amount'/>
      <Button 
      id='button_calculate' 
      title='Calculate' 
      onPress={() => {
         const endpoint_amount = getEndpointCurrencyAmount(input_from.current.value, input_to.current.value) 
         const result =  calculateResult(input_amount.current.value, endpoint_amount)
         setResult(result+" "+input_to)

      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
