// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
