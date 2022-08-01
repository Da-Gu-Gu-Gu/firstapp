import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import {color} from '../utils/constants'
import Card from '../components/Card'
import Recipients from '../components/Recipients'
import Services from '../components/Services'

export default function Home() {

  return (
    <View style={styles.container}>
    <Card />
    <Recipients />
    <Services />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.lightgreen,
    alignItems: 'center',
  },
  text:{
    backgroundColor:'red'
  }
});
