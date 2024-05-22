import { View, StyleSheet, TouchableOpacity,Text} from "react-native";
import Counter from "./Counter";


const App = () => {
  return (
    <View style={styles.container}>
        <Counter/>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});