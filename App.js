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
  StatusBar,
} from "react-native";

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
    width: "90%",
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
