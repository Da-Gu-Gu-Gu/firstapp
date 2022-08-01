import { View, Text ,StyleSheet,Image,FlatList} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const data=[
    {
    id:"1",
    img:"https://images.unsplash.com/photo-1613256168695-b13ed5ba9500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
    id:"2",
    img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
        id:"3",
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        {
        id:"4",
        img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        {
            id:"5",
            img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
            id:"6",
            img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            },
            {
                id:"7",
                img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                },
                {
                id:"8",
                img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                },

]

const RecipientImage=({data})=>{
    return(
        <Image source={{uri:data.img}}
        style={styles.img}
        />
    )
}

const Recipients = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.recipient}>
            <Text style={styles.reci}>Recipients</Text>
            <Ionicons name="arrow-forward" size={30} color="black" />
        </View>
        <View style={{marginTop:15,}}> 
            <FlatList
            data={data}
            renderItem={({item})=><RecipientImage data={item} />}
            keyExtractor={(item)=>item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
            </View>
    </View>
  )
}

const styles=StyleSheet.create({
    wrapper:{
        width:"90%",
        // height:100,
        // borderWidth:1
    },
    recipient:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    reci:{
        fontSize:20,
    },
    img:{
        width:50,
        height:50,
        marginRight:20,
        borderRadius:100,
        borderWidth:10,
        resizeMode:'cover'
    }
})

export default Recipients