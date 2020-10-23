import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Login = () => {
  const auth = new Auth( {host: 'http://localhost:3000'} )
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const logInHandler = async () => {
    try {
      let response = await auth.signIn(email, password)
      setMessage(response.data.uid)
    } catch (error) {
      
    }
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput editable placeholder='email' onChangeText={(value) => setEmail(text)}/>
      <TextInput editable placeholder='password' secureTextEntry onChangeText={(value) => setPassword(text)}/>
      <Button title='Log in' onPress={() => logInHandler()} />
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
