import { View, Text, TouchableOpacity, StyleSheet,button } from "react-native";
import { useState } from "react";

const Counter = ({ initialValue }) => {
  // TODO: Use the useState hook to manage the counter state
  const [count, setCount]=useState(0)
  // TODO: Implement the incrementCounter function that will increase the counter value
  return (
    <View>
      {/* TODO: Display the counter value */}
      <Text style={{fontSize:24, fontWeight:900}}>Counter Value: {count}</Text>
      {/* TODO: Implement a button to increment the counter */}
      <TouchableOpacity onPress={()=>setCount(count+1)}>
        <Text style={styles.btn}>
          Increment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  btn:{
    marginTop:20,
    backgroundColor:"#800020",
    borderRadius:10,
    paddingHorizontal:60,
    paddingVertical:15,
    color:"white"
  }
});