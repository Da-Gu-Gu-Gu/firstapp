import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import {color} from '../utils/constants'
import {useNavigation} from '@react-navigation/native'

export default function Home() {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.openDrawer()} >
      <Text style={styles.text} >AA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    backgroundColor:'red'
  }
});
