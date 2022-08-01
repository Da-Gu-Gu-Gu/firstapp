import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Services = () => {
  return (
    <View style={styles.wrapper}>
    <View style={styles.recipient}>
        <Text style={styles.reci}>Services</Text>
        <Ionicons name="arrow-forward" size={30} color="black" />
    </View>
    <View style={styles.wrap}>
        <View style={styles.services}>
        <Ionicons name="md-heart-circle" size={30} color="white" />
        <Text style={styles.text}>Rent</Text>
        </View>
        <View style={{...styles.services,backgroundColor:'white'}}>
        <Ionicons name="analytics-sharp" size={30} color="black" />
        <Text>Analytics</Text>
        </View>
        <View style={{...styles.services,backgroundColor:'white'}}>
        <Ionicons name="apps" size={30} color="black" />
        <Text>Blah</Text>
        </View>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    wrapper:{
        width:"90%",
        marginVertical:20
    },
    recipient:{
        display:'flex',
        flexDirection:'row',
        marginBottom:20,
        justifyContent:'space-between'
    },
    reci:{
        fontSize:20,
    },
    wrap:{
        width:"90%",
        // borderWidth:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    services:{
        width:"30%",
        borderRadius:12,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:130,
        backgroundColor:"#78ad92"
    },
    text:{
        color:'white',
        
    }
})

export default Services