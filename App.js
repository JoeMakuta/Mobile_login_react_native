// import { StatusBar } from "expo-status-bar";
import { StyleSheet,  Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";

// import { TextInput } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world ...</Text>
    </SafeAreaView>
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
