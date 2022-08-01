import { View, Text,StyleSheet,Image ,Pressable} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

const Header = () => {

    const navigation=useNavigation()
  return (
    <View style={styles.header}>
        <View style={styles.logowrapper}>
        <Image 
        source={{uri:"https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"}}  
        style={styles.logo}
        />
      <Text style={styles.headertext}>Hello, Britney</Text>
      </View>
      <Pressable onPress={()=>navigation.openDrawer()}>
      <Ionicons name={'ios-settings-outline'} size={30} color={"black"} />
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        display:'flex',
        height:100,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headertext:{
        fontSize:20
    },
    logowrapper:{
        display:'flex',

        flexDirection:'row'
    },
    logo:{
        marginRight:12,
        width:30,height:30,resizeMode:'contain',borderRadius:100
    }
})

export default Header