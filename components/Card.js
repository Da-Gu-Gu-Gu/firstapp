import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.greencard}>Green Card</Text>
      <Text style={{marginVertical:10}}>Balance</Text>
      <Text style={{fontSize:25}}>$ 15,442.50</Text>
      <Text style={{marginVertical:20}}>07/29</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
        width:"90%",
        marginVertical:20,
        borderRadius:12,
        padding:25,
        height:200,
        backgroundColor:'#78ad92'
    },
    greencard:{
        fontSize:18,marginBottom:10,
    }
})

export default Card