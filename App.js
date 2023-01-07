// import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
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
        Hello world ...
      </Text>
      <Image blurRadius={0} source={require("./assets/favicon.png")} />
      <Image
        blurRadius={2}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
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
