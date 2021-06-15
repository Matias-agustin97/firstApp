import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View,TextInput,FlatList,Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';



export default function App() {

  const [todos, setTodos] = useState([
    {
      text:'Butt stuff', key:1
    },{
      text:'Take out thash',key:2
    },{
      text:'tatakae matias', key:3
    }
  ])


  const pressHandler=(key)=>{
    setTodos((prev)=>{
      return prev.filter(todo=> todo.key != key)
    })
  }

  const submitHandler=(text)=>{
    if(text.length > 3){
      setTodos((prev)=>{
        return [
          {text:text,key:Math.random().toString()},...prev
        ]
      })
    }else{
      Alert.alert('AY','Muy corto capo',[
      {text:"ueno :c"}
      ])
    }
  }






  return (
    <TouchableWithoutFeedback onPress={()=>{
      console.log('dismissed');
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      {/*header */}
      <Header/>
      <View style={styles.content}>
      {/*the form */}
      <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor:'#ddd'
  },content:{
    padding:40,
    flex:1
  },list:{
    marginTop:20,
    flex:1
  }
});
