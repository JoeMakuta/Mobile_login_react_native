// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  TouchableNativeFeedback,
  Alert,
  Platform,
  StatusBar
} from "react-native";

// import { TextInput } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={() => {
          console.log("Text pressed");
        }}
        style={{ width: 300, height: 50, backgroundColor: "orange" }}
        numberOfLines={2}
      >
        Hi world !
      </Text>
      <TouchableOpacity>
        <Image source={require("./assets/favicon.png")} />
        <Image
          // blurRadius={10}
          fadeDuration={2000}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200",
          }}
        />
      </TouchableOpacity>
      <TouchableNativeFeedback>
        <Button
          onPress={() =>
            Alert.alert("QUESTION 1", "What is React Native ?", [
              { text: "Fine", onPress: () => console.log("Fine") },
              { text: "No", onPress: () => console.log("No") },
            ])
          }
          title="CLICK HERE TO SEE QUESTIONS"
        />
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
