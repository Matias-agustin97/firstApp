import React,{useState} from 'react'
import { StyleSheet, Text, TextInput,Button,View} from 'react-native';







const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState('xdd')

    const changeHandler=(val)=>{
    setText(val)
    }



    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='Add todo'
            onChangeText={changeHandler}
            />
            
            <Button onPress={()=>submitHandler(text)} title='Add' styles={styles.button} color='#00d1b2'/>
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'#222'
    }
})



export default AddTodo
