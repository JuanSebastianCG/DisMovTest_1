import React ,{useState} from 'react'
import { SafeAreaView,Text } from 'react-native'

const MyFirstComponent = () => {
  //declarar varibale y metodo usando estructuring
  const [userName,setUserName] = useState('')

  return (
    <SafeAreaView>
        <Text> My first MyFirstComponent </Text>
    </SafeAreaView>

  )
}

export default MyFirstComponent