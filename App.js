import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-web";

export default function App() {
  console.log("Hello Guys");

  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={() => {
          console.log("Text pressed");
        }}
        style={styles.textStyle}
      >
        Hi world !{" "}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    backgroundColor: "#fff",
  },
});
