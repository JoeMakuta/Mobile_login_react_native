// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";

// import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={() => {
          console.log("The text is pressed ...");
        }}
      >
        If this text is just longer than the number of lines provided, it will
        get trunked and this prop will add ... at the end of the line.
      </Text>
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
